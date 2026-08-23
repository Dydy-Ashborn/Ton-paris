import { onSchedule } from 'firebase-functions/v2/scheduler'
import { onCall, HttpsError } from 'firebase-functions/v2/https'
import { logger } from 'firebase-functions/v2'
import { FieldValue } from 'firebase-admin/firestore'
import { db, chemins } from './lib/admin.js'
import { clubsASurveiller } from './lib/clubs.js'
import { memeEquipe } from './lib/normalize.js'
import { scraperMatchsLive, filtrerMatchsClubs } from './sources/maxifootLive.js'

const REGION = 'europe-west9'

// Scraping maxifoot-live.com (voir sources/maxifootLive.js) : les comptes
// API-Football gratuits utilisés jusqu'ici ont été bannis, plus aucune clé
// n'est utilisable — ni ici, ni dans collecteResultatsMatchs.js (résultats
// finaux, basculé sur la même source par le même correctif). Le fichier
// sources/apiFootballLive.js et la variable d'env API_FOOTBALL_KEYS restent
// inertes dans le projet mais ne sont plus utilisés par aucune fonction.
//
// Pas de clé ni de quota journalier ici, contrairement à l'ancienne version
// API — la protection contre un fetch trop fréquent reste la même qu'avant :
// ESPACEMENT_MIN_MS + la fenêtre de match (dansUneFenetreDeMatch), pour ne
// jamais scraper en dehors d'un match en cours, ni plus d'une fois par
// minute. Coût Firebase marginal nul par rapport à l'ancienne version API
// (même cron, même cadence, mêmes lectures Firestore — seul le volume de
// données téléchargées par fetch augmente un peu, très loin sous le forfait
// gratuit).

// Espacement entre deux scrapes pendant une fenêtre de match — évite de
// solliciter maxifoot-live.com plus d'une fois par minute, cron comme
// rafraîchissement manuel confondus.
const ESPACEMENT_MIN_MS = 60 * 1000

// Une fenêtre de match démarre un peu avant le coup d'envoi programmé
// (retards possibles) et se prolonge après l'heure de fin théorique
// (prolongations, arrêts de jeu) : mieux vaut interroger un peu trop
// large que rater le début ou la fin réelle d'un match.
const AVANCE_FENETRE_MS = 15 * 60 * 1000
const DUREE_FENETRE_MS = 2 * 60 * 60 * 1000 + 45 * 60 * 1000 // 2h45 depuis le coup d'envoi programmé

export function cleJourLocal(date = new Date()) {
  const annee = date.getFullYear()
  const mois = String(date.getMonth() + 1).padStart(2, '0')
  const jour = String(date.getDate()).padStart(2, '0')
  return `${annee}-${mois}-${jour}`
}

/**
 * Vrai si au moins un club suivi a un match programmé (via tvBroadcasts,
 * déjà alimenté chaque matin par scrapeTv.js) dont la fenêtre de jeu
 * couvre l'instant présent. Pas de fetch externe ici : uniquement une
 * lecture Firestore sur les horaires déjà connus.
 */
async function dansUneFenetreDeMatch(clubsIds) {
  if (clubsIds.length === 0) return false

  const maintenant = Date.now()
  const debutFenetreRecherche = new Date(maintenant - DUREE_FENETRE_MS)

  const diffusions = await db
    .collection(chemins.diffusions())
    .where('debut', '>=', debutFenetreRecherche)
    .where('debut', '<=', new Date(maintenant + AVANCE_FENETRE_MS))
    .get()

  return diffusions.docs.some((doc) => {
    const donnees = doc.data()
    const concerneClub = (donnees.clubs || []).some((id) => clubsIds.includes(id))
    if (!concerneClub) return false

    const debut = donnees.debut?.toMillis?.() ?? Date.parse(donnees.debutISO)
    if (!Number.isFinite(debut)) return false

    return maintenant >= debut - AVANCE_FENETRE_MS && maintenant <= debut + DUREE_FENETRE_MS
  })
}

async function collecterScoresDirect() {
  // Garde-fou pour les données de test (voir functions/donneesTest.js,
  // injecterScoreTest) : tant que testExpireLe est dans le futur, on laisse
  // le doc de test tranquille plutôt que de l'écraser au prochain passage.
  const actuel = await db.doc(chemins.scoresDirect()).get()
  if (actuel.exists && actuel.data().test === true && actuel.data().testExpireLe > Date.now()) {
    return { clubs: 0, matchs: 0, ignoreCarTest: true }
  }

  const clubs = await clubsASurveiller()
  if (clubs.length === 0) {
    await db.doc(chemins.scoresDirect()).set({ matchs: [], collecteLe: FieldValue.serverTimestamp() })
    return { clubs: 0, matchs: 0 }
  }

  const libelles = clubs.flatMap((c) => [c.nom, c.court, c.alias].filter(Boolean))
  const tousLesMatchs = await scraperMatchsLive()
  const matchsClubs = filtrerMatchsClubs(tousLesMatchs, libelles)

  const matchsPrecedents = actuel.exists ? actuel.data().matchs || [] : []

  const matchsAnnotes = matchsClubs.map((match) => {
    const clubsConcernes = clubs
      .filter((c) => [c.nom, c.court, c.alias].filter(Boolean).some((libelle) =>
        memeEquipe(match.domicile, libelle) || memeEquipe(match.exterieur, libelle)
      ))
      .map((c) => c.id)

    // termineDetecteLe : timestamp (ms) du premier passage où ce match est
    // apparu terminé — sert côté client à masquer le match ~30 min après la
    // fin plutôt que de dépendre de la durée d'affichage de la source.
    let termineDetecteLe = null
    if (match.termine) {
      const precedent = matchsPrecedents.find((m) => m.idBrut === match.idBrut)
      termineDetecteLe = precedent?.termineDetecteLe || Date.now()
    }

    return { ...match, clubs: [...new Set(clubsConcernes)], termineDetecteLe }
  })

  await db.doc(chemins.scoresDirect()).set({
    matchs: matchsAnnotes,
    source: 'maxifoot-live',
    collecteLe: FieldValue.serverTimestamp()
  })

  return { clubs: clubs.length, matchs: matchsAnnotes.length }
}

/**
 * Cron rapide (chaque minute) : le passage est quasi gratuit tant qu'aucun
 * match n'est en cours (une seule lecture Firestore sur tvBroadcasts, pas
 * de fetch maxifoot-live.com). Seuls les passages qui tombent dans une
 * fenêtre de match ET respectent l'espacement d'1 min scrapent réellement
 * la page.
 */
export const collecteScoresDirect = onSchedule(
  { schedule: '* * * * *', timeZone: 'Europe/Paris', region: REGION, memory: '256MiB', timeoutSeconds: 50, retryCount: 0 },
  async () => {
    try {
      const clubs = await clubsASurveiller()
      const clubsIds = clubs.map((c) => c.id)

      if (!(await dansUneFenetreDeMatch(clubsIds))) return

      const actuel = await db.doc(chemins.scoresDirect()).get()
      const derniereCollecteLe = actuel.exists ? actuel.data().collecteLe?.toMillis?.() : null
      if (derniereCollecteLe && Date.now() - derniereCollecteLe < ESPACEMENT_MIN_MS) return

      await collecterScoresDirect()
    } catch (e) {
      logger.error('Collecte scores direct échouée', { message: e.message })
    }
  }
)

/**
 * Rafraîchissement manuel (bouton dans l'app) : même garde-fou d'espacement
 * que le cron plutôt qu'un appel systématique, pour éviter qu'un usage
 * répété du bouton ne multiplie les fetchs sur maxifoot-live.com en dehors
 * de tout rythme raisonnable.
 */
export const rafraichirScoresDirect = onCall(
  { region: REGION, memory: '256MiB', timeoutSeconds: 45 },
  async (requete) => {
    if (!requete.auth) throw new HttpsError('unauthenticated', 'Connecte-toi pour rafraîchir les scores.')
    const membre = await db.doc(chemins.utilisateur(requete.auth.uid)).get()
    if (!membre.exists) throw new HttpsError('permission-denied', "Ce compte n'appartient pas à l'équipe.")

    const actuel = await db.doc(chemins.scoresDirect()).get()
    const derniereCollecteLe = actuel.exists ? actuel.data().collecteLe?.toMillis?.() : null
    if (derniereCollecteLe && Date.now() - derniereCollecteLe < ESPACEMENT_MIN_MS) {
      return { ok: true, tropTot: true }
    }

    try {
      const resultat = await collecterScoresDirect()
      return { ok: true, ...resultat }
    } catch (e) {
      logger.error('Rafraîchissement scores direct échoué', { message: e.message })
      throw new HttpsError('unavailable', `Échec de la récupération live : ${e.message}`)
    }
  }
)
