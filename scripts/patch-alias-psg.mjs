/**
 * Corrige uniquement l'alias du PSG dans config/clubs (déjà en base) sans
 * re-semer tout le catalogue : l'alias 'PSG Paris' contenait le candidat
 * isolé 'Paris', trop générique — une fois passé par cleEquipe() (voir
 * src/lib/equipes.js et functions/lib/normalize.js), il matchait aussi
 * Paris FC (club distinct de Ligue 1), d'où le double surlignage "PSG" +
 * "Paris FC" observé sur la page Classement.
 *
 * Alternative à un `node scripts/seed-config.mjs` complet, qui écraserait
 * tout le tableau `liste` (96 clubs) avec la version codée en dur du
 * script — plus sûr si le catalogue a pu être ajusté à la main depuis.
 *
 * Lancement : node scripts/patch-alias-psg.mjs
 * Requiert GOOGLE_APPLICATION_CREDENTIALS pointant vers la clé de service.
 */
import { initializeApp, applicationDefault } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'

const TENANT_ID = process.env.TENANT_ID || 'ton-paris'

initializeApp({ credential: applicationDefault() })
const db = getFirestore()

async function patcher() {
  const ref = db.doc(`tenants/${TENANT_ID}/config/clubs`)
  const instantane = await ref.get()

  if (!instantane.exists) {
    console.log('config/clubs introuvable — lance plutôt scripts/seed-config.mjs.')
    return
  }

  const liste = instantane.data().liste || []
  const index = liste.findIndex((c) => c.id === 'psg')

  if (index === -1) {
    console.log("Aucune entrée id='psg' trouvée dans config/clubs.")
    return
  }

  if (liste[index].alias === 'PSG') {
    console.log("L'alias du PSG est déjà 'PSG' — rien à faire.")
    return
  }

  const avant = liste[index].alias
  liste[index] = { ...liste[index], alias: 'PSG' }

  await ref.set({ liste, majLe: new Date() }, { merge: true })

  console.log(`Alias PSG corrigé : '${avant}' → 'PSG'.`)
  console.log("Paris FC ne devrait plus être surligné comme le PSG dans le classement.")
}

patcher().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1) })
