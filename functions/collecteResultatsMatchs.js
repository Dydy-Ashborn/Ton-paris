import { onSchedule } from 'firebase-functions/v2/scheduler'
import { logger } from 'firebase-functions/v2'
import { FieldValue } from 'firebase-admin/firestore'
import { db, chemins } from './lib/admin.js'
import { memeEquipe } from './lib/normalize.js'
import { scraperMatchsFinisDuJour, scraperMatchsFinisDate } from './sources/maxifootLive.js'
import { cleJourLocal } from './collecteScoresDirect.js'
import { clubsASurveiller } from './lib/clubs.js'
import { collecterClassements } from './fetchStandings.js'

const REGION = 'europe-west9'

/**
 * Marge large autour du jour local visé, pour couvrir la fenêtre Firestore
 * indépendamment du fuseau réel du runtime serveur (voir NavDates.jsx pour
 * le même type de piège côté client) — le filtrage précis se fait ensuite
 * par correspondance d'équipe (memeEquipe) contre les matchs renvoyés par
 * maxifoot-live.com pour ce jour-là, donc une fenêtre large ici ne crée pas
 * de faux positifs.
 */
function limitesJourLocal(reference) {
  const minuit = new Date(reference)
  minuit.setHours(0, 0, 0, 0)
  return {
    debut: new Date(minuit.getTime() - 6 * 60 * 60 * 1000),
    fin: new Date(minuit.getTime() + 30 * 60 * 60 * 1000)
  }
}

/**
 * Complète les documents tvBroadcasts du jour visé avec le score final une
 * fois le match terminé — pour TOUS les matchs programmés, pas seulement
 * les clubs suivis (contrairement au live, voir collecteScoresDirect.js) :
 * l'onglet Matchs affiche tous les matchs du jour sans filtre par club
 * depuis cette session, "Hier" doit donc pouvoir montrer un score quel que
 * soit le club.
 *
 * `scraper` est soit scraperMatchsFinisDuJour (jour courant, match-fini.php)
 * soit scraperMatchsFinisDate(dateISO) (jour passé, resultat-<date>/index.php)
 * — voir sources/maxifootLive.js. Plus de clé/quota API-Football ici : même
 * scraping HTML que le live, sans limite de requêtes journalière.
 */
async function collecterResultats(reference, scraper) {
  const dateISO = cleJourLocal(reference)
  const matchs = await scraper()
  const termines = matchs.filter((m) => m.termine)
  if (termines.length === 0) return { dateISO, matchsTermines: 0 }

  const { debut, fin } = limitesJourLocal(reference)
  const diffusions = await db
    .collection(chemins.diffusions())
    .where('debut', '>=', debut)
    .where('debut', '<=', fin)
    .get()

  const lot = db.batch()
  let ecrits = 0
  // Clubs des matchs dont le résultat vient d'être ÉCRIT (nouveau ou score
  // corrigé) — sert à rafraichirClassementSiClubSuivi ci-dessous, pour ne
  // déclencher un rafraîchissement de classement que si un club
  // réellement suivi/favori vient de terminer un match, pas à chaque match
  // du jour toutes compétitions confondues.
  const clubsMisAJour = new Set()

  for (const doc of diffusions.docs) {
    const d = doc.data()
    const match = termines.find(
      (m) => memeEquipe(m.domicile, d.domicile) && memeEquipe(m.exterieur, d.exterieur)
    )
    if (!match) continue
    if (d.termine && d.scoreDomicile === match.scoreDomicile && d.scoreExterieur === match.scoreExterieur) continue

    lot.set(
      doc.ref,
      {
        termine: true,
        scoreDomicile: match.scoreDomicile,
        scoreExterieur: match.scoreExterieur,
        resultatMajLe: FieldValue.serverTimestamp()
      },
      { merge: true }
    )
    ecrits++
    for (const clubId of d.clubs || []) clubsMisAJour.add(clubId)
  }

  if (ecrits > 0) await lot.commit()

  const classementRafraichi = await rafraichirClassementSiClubSuivi(clubsMisAJour)

  return { dateISO, matchsTermines: termines.length, diffusionsMisesAJour: ecrits, classementRafraichi }
}

/**
 * Rafraîchit les classements (voir fetchStandings.js — liste courte et
 * bornée, 5 grands championnats + C1 : pas besoin de cibler une seule
 * compétition) dès qu'AU MOINS un des matchs qui vient de se terminer
 * concerne un club suivi/favori par au moins un utilisateur (clubsASurveiller,
 * même notion que pour la collecte TV et les scores live) — plutôt que
 * d'attendre le prochain passage des deux crons quotidiens de
 * fetchStandings.js (règle demandée en session : "le classement on met à
 * jour à chaque fin de match de club qu'on suit et supporte aussi"). Aucun
 * rafraîchissement si aucun club suivi n'est concerné (ex. un après-midi de
 * Ligue 1 sans aucun club suivi en jeu).
 */
async function rafraichirClassementSiClubSuivi(clubsMisAJour) {
  if (clubsMisAJour.size === 0) return false

  const surveilles = await clubsASurveiller()
  const concerne = surveilles.some((c) => clubsMisAJour.has(c.id))
  if (!concerne) return false

  try {
    await collecterClassements()
    return true
  } catch (e) {
    logger.error('Rafraîchissement classement (suite fin de match) échoué', { message: e.message })
    return false
  }
}

async function passageCron(reference, scraper, libelle) {
  try {
    const resultat = await collecterResultats(reference, scraper)
    logger.info(`Résultats collectés (${libelle})`, resultat)
  } catch (e) {
    logger.error(`Collecte résultats (${libelle}) échouée`, { message: e.message })
  }
}

/**
 * Deux passages quotidiens suffisent (un score ne change plus après le
 * coup de sifflet final) : 23h50 couvre le gros des matchs du jour même
 * programmé tard (21h) ; 7h05 le lendemain (juste après scrapeTv) sert de
 * filet de sécurité pour "Hier" — un match terminé après 23h50 ou pas
 * encore remonté par la source au premier passage.
 */
export const collecteResultatsSoir = onSchedule(
  { schedule: '50 23 * * *', timeZone: 'Europe/Paris', region: REGION, memory: '256MiB', timeoutSeconds: 45, retryCount: 0 },
  async () => passageCron(new Date(), scraperMatchsFinisDuJour, 'soir')
)

export const collecteResultatsMatin = onSchedule(
  { schedule: '5 7 * * *', timeZone: 'Europe/Paris', region: REGION, memory: '256MiB', timeoutSeconds: 45, retryCount: 0 },
  async () => {
    const hier = new Date()
    hier.setDate(hier.getDate() - 1)
    await passageCron(hier, () => scraperMatchsFinisDate(cleJourLocal(hier)), 'matin, veille')
  }
)
