/**
 * Amorce la table des competitions suivies pour les classements.
 * Lancement : node scripts/seed-competitions.mjs
 *
 * Les codes correspondent a Football-Data.org. Le palier gratuit couvre
 * les grands championnats europeens et la Ligue des Champions.
 */
import { initializeApp, applicationDefault } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'

const TENANT_ID = process.env.TENANT_ID || 'ton-paris'

initializeApp({ credential: applicationDefault() })
const db = getFirestore()

const COMPETITIONS = [
  { id: 'ligue-1', code: 'FL1', libelle: 'Ligue 1', toujours: false },
  { id: 'premier-league', code: 'PL', libelle: 'Premier League', toujours: false },
  { id: 'liga', code: 'PD', libelle: 'Liga', toujours: false },
  { id: 'serie-a', code: 'SA', libelle: 'Serie A', toujours: false },
  { id: 'bundesliga', code: 'BL1', libelle: 'Bundesliga', toujours: false },
  // Recuperee quels que soient les clubs suivis : elle concerne tout le monde.
  { id: 'ligue-des-champions', code: 'CL', libelle: 'Ligue des Champions', toujours: true }
]

async function amorcer() {
  await db.doc(`tenants/${TENANT_ID}/config/competitions`).set({ liste: COMPETITIONS, majLe: new Date() })
  console.log(`Competitions configurees : ${COMPETITIONS.length}.`)
}

amorcer().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1) })
