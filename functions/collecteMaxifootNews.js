import { onSchedule } from 'firebase-functions/v2/scheduler'
import { onCall, HttpsError } from 'firebase-functions/v2/https'
import { logger } from 'firebase-functions/v2'
import { FieldValue } from 'firebase-admin/firestore'
import { db, chemins } from './lib/admin.js'
import { classer } from './lib/classer.js'
import { pause } from './lib/http.js'
import {
  listerNewsPsg,
  scraperArticle,
  articleVersDocument,
  identifiantDepuisLien,
  SOURCE_ID
} from './sources/maxifootNews.js'

const REGION = 'europe-west9'

/**
 * Collecte des actus PSG depuis news.maxifoot.fr — source unique pour les
 * actus/mercato "brèves" (à ne pas confondre avec le Mercato structuré de
 * maxifootPsg.js/collecteMaxifootPsg.js, qui reste en place séparément).
 *
 * Remplace le RSS (fetchNews.js, retiré) : deux listes (infos générales +
 * transferts) filtrées au PSG côté code (le filtre du site est purement
 * JS côté client, rien à exploiter côté serveur), puis pour chaque
 * article réellement nouveau (jamais vu en base), un second fetch sur la
 * page de l'article pour la date exacte / description / image / corps
 * complet via son bloc JSON-LD — on ne fait ce second fetch QUE pour les
 * nouveaux, le volume PSG-filtré étant naturellement faible à chaque
 * passage.
 */
async function collecter() {
  const [entrees, configRegles] = await Promise.all([
    listerNewsPsg(),
    db.doc(chemins.config('actualites')).get()
  ])
  const regles = configRegles.exists ? configRegles.data() : { categories: [] }

  const nouvelles = []
  for (const entree of entrees) {
    const id = `${SOURCE_ID}_${identifiantDepuisLien(entree.lien)}`
    const existant = await db.doc(chemins.actu(id)).get()
    if (existant.exists) continue
    nouvelles.push({ id, entree })
  }

  let actusNouvelles = 0
  const incidents = []

  for (const { id, entree } of nouvelles) {
    let detail = null
    try {
      detail = await scraperArticle(entree.lien)
    } catch (e) {
      // Le détail est un bonus (date exacte, résumé, image, corps) : si le
      // fetch de l'article échoue, on garde quand même l'entrée avec les
      // seules infos de la liste plutôt que de perdre l'actu entièrement.
      incidents.push({ lien: entree.lien, message: e.message })
    }

    const document = articleVersDocument(entree, detail)
    // Le PSG est déjà garanti par le filtre de listerNewsPsg ; classer()
    // ne sert plus ici qu'à déterminer la catégorie/l'importance (mots-clés
    // configurables dans config/actualites), pas le rattachement au club.
    const { categorie, importante } = classer(document, regles, [])

    await db.doc(chemins.actu(id)).set({
      id,
      ...document,
      categorie,
      importante,
      notifieLe: null,
      collecteLe: FieldValue.serverTimestamp()
    })
    actusNouvelles++

    await pause(400)
  }

  await db.doc(chemins.journal(SOURCE_ID)).set(
    {
      source: SOURCE_ID,
      type: 'actualites',
      derniereTentative: FieldValue.serverTimestamp(),
      dernierSucces: FieldValue.serverTimestamp(),
      enEchec: false,
      actusTrouvees: entrees.length,
      actusNouvelles,
      incidents
    },
    { merge: true }
  )

  logger.info('Collecte Maxifoot News (PSG) terminée', {
    actusTrouvees: entrees.length,
    actusNouvelles,
    incidents: incidents.length
  })

  return { actusTrouvees: entrees.length, actusNouvelles, incidents }
}

/**
 * Cron toutes les dix minutes (auparavant toutes les trois heures, même
 * cadence que l'ancienne ingestion RSS — trop lent pour les brèves qui
 * tombent en rafale après un match, jusqu'à minuit). Chaque passage ne fait
 * que deux GET sur les pages de liste (coût quasi nul) ; le fetch détaillé
 * d'un article ne se déclenche que pour les entrées PSG jamais vues (voir
 * collecter() ci-dessus), donc la fréquence plus élevée n'augmente pas le
 * volume de scraping proportionnellement — seulement le délai de détection.
 */
export const collecteMaxifootNews = onSchedule(
  {
    schedule: '*/10 * * * *',
    timeZone: 'Europe/Paris',
    region: REGION,
    memory: '256MiB',
    timeoutSeconds: 300,
    retryCount: 1
  },
  async () => {
    try {
      await collecter()
    } catch (e) {
      logger.error('Collecte Maxifoot News échouée', { message: e.message })
      await db.doc(chemins.journal(SOURCE_ID)).set(
        {
          source: SOURCE_ID,
          derniereTentative: FieldValue.serverTimestamp(),
          enEchec: true,
          erreur: e.message
        },
        { merge: true }
      )
    }
  }
)

/** Rafraîchissement manuel depuis l'app. */
export const rafraichirMaxifootNews = onCall(
  { region: REGION, memory: '256MiB', timeoutSeconds: 240 },
  async (requete) => {
    if (!requete.auth) throw new HttpsError('unauthenticated', "Connecte-toi pour rafraîchir l'actu.")

    const membre = await db.doc(chemins.utilisateur(requete.auth.uid)).get()
    if (!membre.exists) throw new HttpsError('permission-denied', "Ce compte n'appartient pas à l'équipe.")

    try {
      const resultat = await collecter()
      return { ok: true, ...resultat }
    } catch (e) {
      logger.error('Rafraîchissement Maxifoot News échoué', { message: e.message })
      throw new HttpsError('unavailable', `Échec du scraping Maxifoot News : ${e.message}`)
    }
  }
)

// > 2 jours ("aujourd'hui" + "hier", les deux seules pages affichées côté
// client — voir la pagination dans Accueil.jsx) : marge de sécurité contre
// un décalage fuseau/cron plutôt qu'une purge au ras du besoin réel, qui
// risquerait de couper "hier" en cours de journée pour un utilisateur dans
// un fuseau légèrement différent du cron (Europe/Paris).
const RETENTION_JOURS = 3

/**
 * Purge quotidienne des actus trop anciennes (demandé en session : "les
 * actu de stock éternellement... au-delà on stocke pas, ça sert à rien") —
 * la collection `news` n'était jusqu'ici jamais nettoyée, elle grossissait
 * sans fin alors que l'app n'affiche jamais plus que deux jours (voir
 * RETENTION_JOURS ci-dessus). `limit(400)` par passage, même garde-fou que
 * purgeEnvois dans notifications.js : borne le coût d'un passage plutôt que
 * de tout supprimer d'un coup, au prix de quelques jours pour rattraper un
 * gros historique existant au premier déploiement.
 */
async function purgerActusAnciennes() {
  const limite = new Date(Date.now() - RETENTION_JOURS * 24 * 60 * 60 * 1000)
  const anciennes = await db.collection(chemins.actus()).where('publieLe', '<', limite).limit(400).get()
  if (anciennes.empty) return { supprimees: 0 }

  const lot = db.batch()
  anciennes.docs.forEach((doc) => lot.delete(doc.ref))
  await lot.commit()

  return { supprimees: anciennes.docs.length }
}

export const purgeActusAnciennes = onSchedule(
  {
    schedule: '15 4 * * *',
    timeZone: 'Europe/Paris',
    region: REGION,
    memory: '256MiB',
    timeoutSeconds: 120,
    retryCount: 0
  },
  async () => {
    try {
      const resultat = await purgerActusAnciennes()
      logger.info('Purge actus anciennes', resultat)
    } catch (e) {
      logger.error('Purge actus anciennes échouée', { message: e.message })
    }
  }
)
