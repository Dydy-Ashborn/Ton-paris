/**
 * Initialisation Firebase Admin partagée par tous les scripts d'amorçage
 * (scripts/*.mjs) — point de contrôle centralisé plutôt qu'un
 * `initializeApp(...)` dupliqué (et divergent) dans chaque script.
 *
 * Corrige deux frictions rencontrées en session :
 * 1. GOOGLE_APPLICATION_CREDENTIALS doit être ré-exporté à CHAQUE nouvelle
 *    fenêtre/onglet de terminal (les `export` ne survivent pas d'un onglet
 *    à l'autre) — source de "Could not load the default credentials" alors
 *    que la clé est bien présente sur le disque. Repli automatique sur
 *    <racine du projet>/cle-service.json si la variable n'est pas déjà
 *    positionnée : plus besoin d'export du tout tant que le fichier reste
 *    à cet emplacement.
 * 2. `projectId` pas toujours détectable automatiquement par
 *    google-auth-library selon le contenu exact de la clé téléchargée
 *    ("Unable to detect a Project Id") — passé explicitement ici.
 */
import { existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { initializeApp, applicationDefault } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'

const ICI = dirname(fileURLToPath(import.meta.url))
const RACINE_PROJET = resolve(ICI, '../..')
const CLE_PAR_DEFAUT = resolve(RACINE_PROJET, 'cle-service.json')
const PROJECT_ID = 'ton-paris'

export const TENANT_ID = process.env.TENANT_ID || 'ton-paris'

let appInitialisee = false

/** À appeler en tête de chaque script, avant tout accès Firestore. */
export function initFirebaseAdmin() {
  if (appInitialisee) return getFirestore()

  if (!process.env.GOOGLE_APPLICATION_CREDENTIALS) {
    if (!existsSync(CLE_PAR_DEFAUT)) {
      console.error(
        `Aucune clé de service trouvée.\n` +
        `Télécharge-la depuis Firebase Console → Paramètres du projet → Comptes de service\n` +
        `→ Générer une nouvelle clé privée, renomme le fichier "cle-service.json"\n` +
        `et pose-le à la racine du projet : ${CLE_PAR_DEFAUT}`
      )
      process.exit(1)
    }
    process.env.GOOGLE_APPLICATION_CREDENTIALS = CLE_PAR_DEFAUT
  }

  initializeApp({ credential: applicationDefault(), projectId: PROJECT_ID })
  appInitialisee = true
  return getFirestore()
}
