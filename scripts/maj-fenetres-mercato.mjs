/**
 * Met à jour le calendrier des fenêtres de mercato dans Firestore
 * (tenants/{TENANT_ID}/config/fenetresMercato — voir hooks/useFenetresMercato.js
 * et components/MercatoTimer.jsx, qui lisent ce doc en temps réel).
 * Lancement : node scripts/maj-fenetres-mercato.mjs
 * Requiert cle-service.json à la racine du projet (voir lib/admin.mjs —
 * détecté automatiquement, pas besoin d'exporter GOOGLE_APPLICATION_CREDENTIALS).
 *
 * ⚠️ `debut` de la fenêtre d'été ci-dessous est une valeur de repli (1er
 * juin), pas une date officielle vérifiée — corrige-la si besoin. Elle
 * n'affecte que le calcul "fenêtre actuellement ouverte" (fenetreActuelle
 * dans lib/mercato.js) : tant qu'elle reste dans le passé, le mercato
 * s'affiche bien "ouvert" dès aujourd'hui. Seule `fin` pilote le compte à
 * rebours affiché par MercatoTimer.
 */
import { initFirebaseAdmin, TENANT_ID } from './lib/admin.mjs'

const db = initFirebaseAdmin()

const FENETRES = [
  {
    type: 'ete',
    libelle: 'Mercato d\'été 2026',
    debut: new Date('2026-06-01T00:00:00+02:00'), // repli, voir avertissement en tête de fichier
    fin: new Date('2026-09-01T19:59:00+02:00')
  }
]

async function amorcer() {
  const base = `tenants/${TENANT_ID}/config`
  await db.doc(`${base}/fenetresMercato`).set({ fenetres: FENETRES, majLe: new Date() })
  console.log(`Fenêtres de mercato écrites dans ${base}/fenetresMercato : ${FENETRES.length} fenêtre(s).`)
}

amorcer().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1) })
