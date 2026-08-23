/**
 * Supprime les actus Maxifoot collectées via l'ancien pipeline
 * sourceId="maxifoot-psg" (fiche club PSG, functions/sources/maxifootPsg.js) :
 * d'abord utile pour rattraper le bug d'encodage (pages Maxifoot en
 * ISO-8859-1, décodées par erreur en UTF-8, caractères accentués corrompus
 * en "�" — corrigé dans functions/lib/http.js), puis devenu utile aussi
 * pour purger les actus tronquées ("...", extrait class=crp) : depuis le
 * passage à news.maxifoot.fr (collecteMaxifootNews.js, source unique des
 * actus, texte intégral disponible), collecteMaxifootPsg n'écrit plus
 * d'actus du tout — seul le mercato structuré. Les documents déjà en base
 * avec ce sourceId ne seront jamais réécrits automatiquement (dédup par
 * lien) : il faut les supprimer une fois pour que news.maxifoot.fr les
 * récupère proprement (texte complet) au prochain passage.
 *
 * Lancement : node scripts/purge-actus-corrompues.mjs
 * Requiert GOOGLE_APPLICATION_CREDENTIALS pointant vers la clé de service.
 */
import { initializeApp, applicationDefault } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'

const TENANT_ID = process.env.TENANT_ID || 'ton-paris'

initializeApp({ credential: applicationDefault() })
const db = getFirestore()

async function purger() {
  const collectionActus = db.collection(`tenants/${TENANT_ID}/news`)

  // Tous les documents visés ont un id préfixé "maxifoot_" (voir
  // identifiantDepuisLien dans sources/maxifootPsg.js).
  const instantane = await collectionActus.where('sourceId', '==', 'maxifoot-psg').get()

  if (instantane.empty) {
    console.log('Aucune actu maxifoot-psg à purger.')
    return
  }

  const lot = db.batch()
  instantane.docs.forEach((doc) => lot.delete(doc.ref))
  await lot.commit()

  console.log(`${instantane.size} actu(s) maxifoot-psg supprimée(s) (tronquées et/ou corrompues côté accents).`)
  console.log('Relance "Rafraîchir l\'actu" dans l\'app (ou attends le prochain cron) pour les récupérer proprement via news.maxifoot.fr.')
}

purger().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1) })
