/**
 * Supprime de Firestore les cartes déjà importées qui correspondent à une
 * ligue féminine (voir LIGUES_FEMININES dans
 * functions/sources/futbinCartesPsg.js — extraireCartes exclut désormais
 * ces cartes dès l'import, mais celles déjà écrites en base avant ce
 * correctif doivent être nettoyées manuellement, demandé en session :
 * "on supprime les cartes féminines de la base").
 *
 * SUPPRESSION DÉFINITIVE (pas juste actif:false) : ces cartes n'auraient
 * jamais dû être importées, contrairement à une carte simplement retirée du
 * roster FUTBIN (voir collecteCartesFut.js). Si un joueur en possède déjà un
 * exemplaire dans sa collection, cet exemplaire devient orphelin (référence
 * un id qui n'existe plus) — sans conséquence pratique tant qu'aucun joueur
 * n'a encore ouvert de vrais paquets contre ce catalogue.
 *
 * Lancement (mode simulation par défaut, ne supprime rien) :
 *   node scripts/purger-cartes-feminines.mjs
 * Suppression réelle :
 *   node scripts/purger-cartes-feminines.mjs --confirmer
 */
import { initFirebaseAdmin, TENANT_ID } from './lib/admin.mjs'
import { LIGUES_FEMININES } from '../functions/sources/futbinCartesPsg.js'

const db = initFirebaseAdmin()
const confirmer = process.argv.includes('--confirmer')

function estFeminine(carte) {
  const ligueNom = carte.ligue?.nom
  if (!ligueNom) return false
  const n = ligueNom.toLowerCase()
  return LIGUES_FEMININES.some((l) => n.includes(l))
}

async function purger() {
  const refCatalogue = db.collection(`tenants/${TENANT_ID}/cartesFut`)
  const snap = await refCatalogue.get()

  const aSupprimer = snap.docs.filter((d) => estFeminine(d.data()))

  if (aSupprimer.length === 0) {
    console.log('Aucune carte féminine trouvée dans le catalogue (ligue.nom ne correspond à aucune entrée de LIGUES_FEMININES).')
    return
  }

  console.log(`${aSupprimer.length} carte(s) féminine(s) trouvée(s) :`)
  for (const doc of aSupprimer) {
    const c = doc.data()
    console.log(`  - ${doc.id} : ${c.nom} (${c.ligue?.nom})`)
  }

  if (!confirmer) {
    console.log('\nMode simulation — rien supprimé. Relance avec --confirmer pour supprimer réellement ces cartes.')
    return
  }

  const TAILLE_LOT = 400
  for (let i = 0; i < aSupprimer.length; i += TAILLE_LOT) {
    const lot = db.batch()
    for (const doc of aSupprimer.slice(i, i + TAILLE_LOT)) lot.delete(doc.ref)
    await lot.commit()
  }

  console.log(`\n${aSupprimer.length} carte(s) supprimée(s).`)
}

purger().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1) })
