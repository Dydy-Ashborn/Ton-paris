/**
 * Supprime les actus collectées par l'ancien pipeline RSS (fetchNews.js,
 * retiré le 21/08/2026 au profit de news.maxifoot.fr, source unique
 * désormais — voir collecteMaxifootNews.js). Retirer la collecte
 * n'efface pas ce qui est déjà en base : les articles RSS restent
 * affichés dans le flux tant qu'ils ne sont pas supprimés explicitement,
 * ou que leur purge par ancienneté (21 jours) ne les rattrape — ce script
 * évite d'attendre.
 *
 * Cible les 4 sourceId historiques du RSS (voir l'ancien tableau FLUX de
 * scripts/seed-actus.mjs, avant sa mise à jour) : culturepsg,
 * footmercato-psg, lequipe-football, rmc-football.
 *
 * Lancement : node scripts/purge-actus-rss.mjs
 * Requiert GOOGLE_APPLICATION_CREDENTIALS pointant vers la clé de service.
 */
import { initializeApp, applicationDefault } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'

const TENANT_ID = process.env.TENANT_ID || 'ton-paris'

const SOURCE_IDS_RSS = ['culturepsg', 'footmercato-psg', 'lequipe-football', 'rmc-football']

initializeApp({ credential: applicationDefault() })
const db = getFirestore()

async function purger() {
  const collectionActus = db.collection(`tenants/${TENANT_ID}/news`)
  let total = 0

  for (const sourceId of SOURCE_IDS_RSS) {
    const instantane = await collectionActus.where('sourceId', '==', sourceId).get()
    if (instantane.empty) continue

    const lot = db.batch()
    instantane.docs.forEach((doc) => lot.delete(doc.ref))
    await lot.commit()

    console.log(`${sourceId} : ${instantane.size} actu(s) supprimée(s).`)
    total += instantane.size
  }

  if (total === 0) {
    console.log('Aucune actu RSS à purger.')
    return
  }

  console.log(`Total : ${total} actu(s) RSS supprimée(s). Le flux ne contient plus que du PSG via news.maxifoot.fr et le mercato Maxifoot.`)
}

purger().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1) })
