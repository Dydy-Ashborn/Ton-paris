import { onSchedule } from 'firebase-functions/v2/scheduler'
import { onCall, HttpsError } from 'firebase-functions/v2/https'
import { logger } from 'firebase-functions/v2'
import { FieldValue } from 'firebase-admin/firestore'
import { db, chemins } from './lib/admin.js'
import { pause } from './lib/http.js'
import { scraperEffectifPsg, CLUB_ID_PSG } from './sources/maxifootEffectif.js'
import { scraperFicheJoueur } from './sources/maxifootFicheJoueur.js'
import { genererCarte } from './lib/carteJoueur.js'

const REGION = 'europe-west9'

/**
 * Complète chaque joueur avec le numéro de maillot + poste précis + photo
 * (fiche individuelle, voir maxifootFicheJoueur.js — absents du tableau
 * effectif lui-même) et la note/stats calculées (voir lib/carteJoueur.js).
 *
 * La photo est désormais extraite directement du HTML de la fiche
 * (bloc <!--photoJ-->) plutôt que reconstruite à partir de l'id : le
 * bucket de stockage Maxifoot (/phoj/2/, /phoj/8/, ...) varie par joueur,
 * une URL devinée pointait donc dans le vide pour une partie de l'effectif.
 *
 * Un fetch séquentiel par joueur (pas en parallèle) pour rester correct
 * vis-à-vis de Maxifoot : ~25 requêtes une fois par jour, un court délai
 * entre chacune évite d'envoyer une rafale d'un coup.
 */
async function enrichirJoueurs(joueurs) {
  const enrichis = []

  for (const joueur of joueurs) {
    let fiche = { numeroMaillot: null, poste: null, photo: null }
    if (joueur.lien) {
      try {
        fiche = await scraperFicheJoueur(joueur.lien)
      } catch (e) {
        logger.warn('Fiche joueur inaccessible, on continue sans', { joueur: joueur.nom, message: e.message })
      }
    }

    const posteFinal = fiche.poste || joueur.poste
    // fiche.photo reste null pour les joueurs sans photo sur Maxifoot
    // (cas réel, pas une erreur) — géré côté UI par CarteJoueurModal.jsx.
    const joueurComplet = { ...joueur, poste: posteFinal, numeroMaillot: fiche.numeroMaillot, photo: fiche.photo }

    enrichis.push({ ...joueurComplet, carte: genererCarte(joueurComplet) })
    await pause(300)
  }

  return enrichis
}

async function collecter() {
  const { joueurs: joueursBruts, entraineur } = await scraperEffectifPsg()
  const joueurs = await enrichirJoueurs(joueursBruts)

  await db.doc(chemins.effectif(CLUB_ID_PSG)).set({
    clubId: CLUB_ID_PSG,
    joueurs,
    entraineur,
    source: 'maxifoot',
    majLe: FieldValue.serverTimestamp()
  })

  await db.doc(chemins.journal('maxifoot-effectif-psg')).set(
    {
      source: 'maxifoot-effectif-psg',
      type: 'effectif',
      derniereTentative: FieldValue.serverTimestamp(),
      dernierSucces: FieldValue.serverTimestamp(),
      enEchec: false,
      nombreJoueurs: joueurs.length
    },
    { merge: true }
  )

  logger.info('Collecte effectif PSG terminée', { joueurs: joueurs.length })

  return { joueurs: joueurs.length }
}

// Une fois par jour : l'effectif (blessures, temps de jeu cumulé, cartons)
// évolue lentement comparé aux actus/mercato, pas besoin d'un rythme
// toutes les 3h.
// timeoutSeconds relevé à 300 : la collecte fait désormais un fetch
// individuel par joueur (numéro de maillot + poste précis, voir
// enrichirJoueurs ci-dessus) en plus de la fiche club — largement plus
// long que le simple scraping du tableau effectif d'avant.
export const collecteEffectifPsg = onSchedule(
  { schedule: '0 6 * * *', timeZone: 'Europe/Paris', region: REGION, memory: '256MiB', timeoutSeconds: 300, retryCount: 1 },
  async () => {
    try {
      await collecter()
    } catch (e) {
      logger.error('Collecte effectif PSG échouée', { message: e.message })
      await db.doc(chemins.journal('maxifoot-effectif-psg')).set(
        { source: 'maxifoot-effectif-psg', derniereTentative: FieldValue.serverTimestamp(), enEchec: true, erreur: e.message },
        { merge: true }
      )
    }
  }
)

export const rafraichirEffectifPsg = onCall(
  { region: REGION, memory: '256MiB', timeoutSeconds: 300 },
  async (requete) => {
    if (!requete.auth) throw new HttpsError('unauthenticated', 'Connecte-toi pour rafraîchir.')

    const membre = await db.doc(chemins.utilisateur(requete.auth.uid)).get()
    if (!membre.exists) throw new HttpsError('permission-denied', "Ce compte n'appartient pas à l'équipe.")

    try {
      const resultat = await collecter()
      return { ok: true, ...resultat }
    } catch (e) {
      logger.error('Rafraîchissement effectif PSG échoué', { message: e.message })
      throw new HttpsError('unavailable', `Échec du scraping effectif : ${e.message}`)
    }
  }
)
