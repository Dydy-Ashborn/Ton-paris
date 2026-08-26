/**
 * Liste les cartes légendaires du vrai catalogue (actif:true, rarete ===
 * 'legendaire') — demandé en session pour répondre à "on a combien de
 * cartes légendaires ?" et servir de base pour choisir les 3 qui porteront
 * un pouvoir (voir functions/packsFut.js, POUVOIRS_LEGENDAIRES —
 * carte.pouvoir n'est encore assigné à AUCUNE carte, ce script aide juste à
 * choisir lesquelles avant de le faire).
 *
 * Lecture seule, aucune écriture. Lancement : node scripts/lister-legendaires.mjs
 * Requiert cle-service.json à la racine (voir scripts/lib/admin.mjs).
 */
import { initFirebaseAdmin, TENANT_ID } from './lib/admin.mjs'

const db = initFirebaseAdmin()

async function lister() {
  const refCatalogue = db.collection(`tenants/${TENANT_ID}/cartesFut`)
  const snap = await refCatalogue.where('actif', '==', true).where('rarete', '==', 'legendaire').get()

  if (snap.empty) {
    console.log('Aucune carte légendaire trouvée dans le catalogue actif.')
    return
  }

  const cartes = snap.docs
    .map((d) => ({ id: d.id, ...d.data() }))
    .sort((a, b) => (b.note || 0) - (a.note || 0))

  console.log(`${cartes.length} carte(s) légendaire(s) :\n`)
  for (const c of cartes) {
    const pouvoir = c.pouvoir ? ` — pouvoir déjà assigné : ${c.pouvoir}` : ''
    console.log(`- [${c.id}] ${c.nom} (${c.note}, ${c.position || '?'})${pouvoir}`)
  }
}

lister().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1) })
