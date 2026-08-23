import { onSchedule } from 'firebase-functions/v2/scheduler'
import { onCall, HttpsError } from 'firebase-functions/v2/https'
import { logger } from 'firebase-functions/v2'
import { FieldValue } from 'firebase-admin/firestore'
import { db, chemins } from './lib/admin.js'
import { scraperFichePsg, CLUB_ID_PSG } from './sources/maxifootPsg.js'

const REGION = 'europe-west9'

/**
 * Collecte Maxifoot pour le PSG : mercato uniquement (voir
 * sources/maxifootPsg.js). Le bloc actu de cette même fiche club est
 * scrapé par scraperFichePsg() mais volontairement IGNORÉ ici depuis le
 * passage à news.maxifoot.fr (collecteMaxifootNews.js, source unique des
 * actus) : cette page ne fournit qu'un extrait tronqué ("...", via
 * class=crp), jamais le texte intégral, contrairement à
 * news.maxifoot.fr qui donne le corps complet via le JSON-LD de chaque
 * article. Écrire ces actus tronquées ferait doublon en base avec la
 * version complète du même article récupérée par l'autre source.
 */
async function collecter() {
  const { mercato } = await scraperFichePsg()

  // Mercato : un seul document par club, remplacé à chaque collecte (pas
  // d'historique des mouvements pour l'instant, juste l'état courant).
  await db.doc(chemins.mercato(CLUB_ID_PSG)).set({
    clubId: CLUB_ID_PSG,
    ...mercato,
    source: 'maxifoot',
    majLe: FieldValue.serverTimestamp()
  })

  await db.doc(chemins.journal('maxifoot-psg')).set(
    {
      source: 'maxifoot-psg',
      type: 'mercato',
      derniereTentative: FieldValue.serverTimestamp(),
      dernierSucces: FieldValue.serverTimestamp(),
      enEchec: false,
      mercato: {
        officiels: mercato.officiels.length,
        enDiscussion: mercato.enDiscussion.length,
        rumeurs: mercato.rumeurs.length
      }
    },
    { merge: true }
  )

  logger.info('Collecte Maxifoot PSG (mercato) terminée', {
    officiels: mercato.officiels.length,
    enDiscussion: mercato.enDiscussion.length,
    rumeurs: mercato.rumeurs.length
  })

  return {
    mercato: {
      officiels: mercato.officiels.length,
      enDiscussion: mercato.enDiscussion.length,
      rumeurs: mercato.rumeurs.length
    }
  }
}

/** Cron toutes les trois heures, aligné sur l'ingestion RSS existante. */
export const collecteMaxifootPsg = onSchedule(
  {
    schedule: '45 */3 * * *',
    timeZone: 'Europe/Paris',
    region: REGION,
    memory: '256MiB',
    timeoutSeconds: 60,
    retryCount: 1
  },
  async () => {
    try {
      await collecter()
    } catch (e) {
      logger.error('Collecte Maxifoot PSG échouée', { message: e.message })
      await db.doc(chemins.journal('maxifoot-psg')).set(
        {
          source: 'maxifoot-psg',
          derniereTentative: FieldValue.serverTimestamp(),
          enEchec: true,
          erreur: e.message
        },
        { merge: true }
      )
    }
  }
)

/** Rafraîchissement manuel depuis l'app (bouton dans Réglages ou Mercato). */
export const rafraichirMaxifootPsg = onCall(
  { region: REGION, memory: '256MiB', timeoutSeconds: 60 },
  async (requete) => {
    if (!requete.auth) throw new HttpsError('unauthenticated', 'Connecte-toi pour rafraîchir.')

    const membre = await db.doc(chemins.utilisateur(requete.auth.uid)).get()
    if (!membre.exists) throw new HttpsError('permission-denied', "Ce compte n'appartient pas à l'équipe.")

    try {
      const resultat = await collecter()
      return { ok: true, ...resultat }
    } catch (e) {
      logger.error('Rafraîchissement Maxifoot PSG échoué', { message: e.message })
      throw new HttpsError('unavailable', `Échec du scraping Maxifoot : ${e.message}`)
    }
  }
)
