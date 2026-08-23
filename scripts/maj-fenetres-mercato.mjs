/**
 * Met à jour le calendrier des fenêtres de mercato (config/fenetresMercato)
 * lu en direct par MercatoTimer (voir src/components/MercatoTimer.jsx).
 * Lancement : node scripts/maj-fenetres-mercato.mjs
 *
 * À relancer à chaque annonce LFP d'une nouvelle saison (lfp.fr, article
 * "Les dates du mercato AAAA/AAAA") : éditer la liste FENETRES ci-dessous
 * (ajouter la nouvelle entrée, retirer si besoin les saisons trop
 * anciennes), puis relancer ce script. Aucun rebuild ni redeploy du front
 * n'est nécessaire — le changement est visible en direct dans l'app.
 */
import { initializeApp, applicationDefault } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'

const TENANT_ID = process.env.TENANT_ID || 'ton-paris'

initializeApp({ credential: applicationDefault() })
const db = getFirestore()

// Dates construites via new Date(année, moisIndex0, jour, heure, minute) —
// composants locaux, jamais de chaîne ISO/UTC (voir le bug de décalage de
// clé de jour dans NavDates.jsx pour la raison).
const FENETRES = [
  {
    type: 'ete',
    saison: '2026',
    libelle: "Mercato d'été",
    debut: new Date(2026, 5, 15, 0, 0, 0),
    fin: new Date(2026, 8, 1, 19, 59, 0)
  },
  {
    type: 'hiver',
    saison: '2026-2027',
    libelle: "Mercato d'hiver",
    debut: new Date(2027, 0, 1, 0, 0, 0),
    fin: new Date(2027, 1, 1, 19, 59, 0)
  }
]

async function amorcer() {
  await db.doc(`tenants/${TENANT_ID}/config/fenetresMercato`).set({
    fenetres: FENETRES,
    majLe: new Date()
  })
  console.log(`Fenêtres de mercato configurées : ${FENETRES.map((f) => f.saison).join(', ')}.`)
}

amorcer().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1) })
