/**
 * Migration : recalcule `rarete` sur TOUTES les cartes déjà en base à
 * partir de leur `note` déjà stockée, avec la nouvelle règle "note seule"
 * (25/08/2026, voir functions/sources/futbinCartesPsg.js, calculerRarete —
 * signalé en session : "80 cartes légendaires sur 126 c'est énorme", le
 * bonus de variante retiré du calcul faisait basculer la majorité du
 * catalogue en légendaire quasi peu importe la note réelle).
 *
 * Ne re-scrape RIEN : les cartes existantes ont déjà `note` en base, ce
 * script réapplique juste paletteParNote() dessus. Un import complet
 * (scripts/importer-cartes-fut.mjs) aurait le même effet mais nécessite un
 * fichier HTML frais — ce script évite cette étape pour un correctif qui ne
 * touche que le calcul de rareté, pas les données du joueur.
 *
 * ATTENTION : une carte déjà `pouvoir`-assignée (aucune pour l'instant,
 * voir scripts/lister-legendaires.mjs) qui redescendrait sous légendaire
 * perdrait son sens de jeu — le script log un avertissement si ça arrive,
 * plutôt que de le faire silencieusement.
 *
 * Lecture + écriture. Lancement : node scripts/recalculer-raretes.mjs
 * Requiert cle-service.json à la racine (voir scripts/lib/admin.mjs).
 */
import { FieldValue } from 'firebase-admin/firestore'
import { initFirebaseAdmin, TENANT_ID } from './lib/admin.mjs'
import { calculerRarete } from '../functions/sources/futbinCartesPsg.js'

const db = initFirebaseAdmin()

async function recalculer() {
  const refCatalogue = db.collection(`tenants/${TENANT_ID}/cartesFut`)
  const snap = await refCatalogue.get()

  if (snap.empty) {
    console.log('Aucune carte en base.')
    return
  }

  const parRareteAvant = {}
  const parRareteApres = {}
  let changees = 0
  const avertissementsPouvoir = []

  const TAILLE_LOT = 400
  const docs = snap.docs
  for (let i = 0; i < docs.length; i += TAILLE_LOT) {
    const lot = db.batch()
    for (const doc of docs.slice(i, i + TAILLE_LOT)) {
      const carte = doc.data()
      const ancienneRarete = carte.rarete
      const nouvelleRarete = calculerRarete(carte.note, carte.variante)

      parRareteAvant[ancienneRarete] = (parRareteAvant[ancienneRarete] || 0) + 1
      parRareteApres[nouvelleRarete] = (parRareteApres[nouvelleRarete] || 0) + 1

      if (nouvelleRarete !== ancienneRarete) {
        changees++
        if (carte.pouvoir && ancienneRarete === 'legendaire' && nouvelleRarete !== 'legendaire') {
          avertissementsPouvoir.push(`${doc.id} (${carte.nom}) — pouvoir "${carte.pouvoir}" assigné mais rareté redescend à ${nouvelleRarete}`)
        }
        lot.set(doc.ref, { rarete: nouvelleRarete, majLe: FieldValue.serverTimestamp() }, { merge: true })
      }
    }
    await lot.commit()
  }

  console.log(`Avant : ${JSON.stringify(parRareteAvant)}`)
  console.log(`Après : ${JSON.stringify(parRareteApres)}`)
  console.log(`${changees} carte(s) recalculée(s) sur ${docs.length}.`)

  if (avertissementsPouvoir.length > 0) {
    console.warn('\nATTENTION — pouvoir assigné sur une carte qui n\'est plus légendaire :')
    for (const a of avertissementsPouvoir) console.warn(`  - ${a}`)
  }
}

recalculer().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1) })
