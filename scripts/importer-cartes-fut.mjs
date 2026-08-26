/**
 * Importe le catalogue de cartes FUT PSG depuis un fichier HTML capturé
 * manuellement (voir scripts/tampermonkey-futbin-psg.user.js) — solution
 * "pour commencer" tant que le scraping serveur direct
 * (functions/collecteCartesFut.js) n'est pas confirmé fonctionnel en
 * production : FUTBIN est une appli dynamique, un simple fetch HTTP côté
 * serveur peut très bien ne pas voir le même contenu qu'un navigateur.
 * Utilise EXACTEMENT la même fonction d'extraction (extraireCartes) que le
 * scraping automatique : un fichier qui s'importe correctement ici a de
 * bonnes chances de fonctionner pareil une fois le scraping direct activé,
 * et inversement.
 *
 * Lancement :
 *   node scripts/importer-cartes-fut.mjs <fichier.html> [--saison=2025-26] [--desactiver-manquantes]
 *
 * Requiert cle-service.json à la racine (voir scripts/lib/admin.mjs).
 *
 * --desactiver-manquantes : DÉSACTIVÉ PAR DÉFAUT. Marque actif:false toute
 * carte déjà en base mais absente de CE fichier — dangereux si la capture
 * est partielle (page pas entièrement chargée/scrollée, voir le bouton
 * "Charger tout" du script Tampermonkey), donc à activer explicitement
 * seulement quand tu es sûr que le fichier contient la collection complète.
 */
import { readFileSync } from 'node:fs'
import { FieldValue } from 'firebase-admin/firestore'
import { initFirebaseAdmin, TENANT_ID } from './lib/admin.mjs'
import { extraireCartes, MOTIFS_CARTE_BASE_PAR_DEFAUT, SAISON_PAR_DEFAUT } from '../functions/sources/futbinCartesPsg.js'

const db = initFirebaseAdmin()

const [, , cheminFichier, ...reste] = process.argv
if (!cheminFichier) {
  console.error('Usage : node scripts/importer-cartes-fut.mjs <fichier.html> [--saison=2025-26] [--desactiver-manquantes]')
  process.exit(1)
}

const argSaison = reste.find((a) => a.startsWith('--saison='))?.split('=')[1]
const desactiverManquantes = reste.includes('--desactiver-manquantes')

async function importer() {
  const configSnap = await db.doc(`tenants/${TENANT_ID}/config/packsFut`).get()
  const config = configSnap.exists ? configSnap.data() : {}
  const motifsBase = config.motifsCarteBase || MOTIFS_CARTE_BASE_PAR_DEFAUT
  // Repli explicite sur SAISON_PAR_DEFAUT ('2025-26') si ni --saison ni
  // config/packsFut.saison ne sont définis — sans ce repli, extraireCartes
  // appliquait déjà SON PROPRE défaut interne (donc les cartes écrites
  // étaient correctes), mais la variable locale restait "undefined" et le
  // log ci-dessous affichait "saison undefined" à tort.
  const saison = argSaison || config.saison || SAISON_PAR_DEFAUT

  const html = readFileSync(cheminFichier, 'utf8')
  const cartes = extraireCartes(html, { motifsBase, saison })

  if (cartes.length === 0) {
    console.error("0 carte trouvée dans ce fichier — vérifie que la page était bien chargée (bouton 'Charger tout' du script Tampermonkey) et que le balisage FUTBIN n'a pas changé. Rien n'a été écrit.")
    process.exit(1)
  }

  console.log(`${cartes.length} carte(s) extraite(s) du fichier (saison ${saison}).`)

  const refCatalogue = db.collection(`tenants/${TENANT_ID}/cartesFut`)
  const existantesSnap = await refCatalogue.get()
  const idsExistants = new Set(existantesSnap.docs.map((d) => d.id))
  const idsImportes = new Set(cartes.map((c) => c.id))
  const nouvelles = cartes.filter((c) => !idsExistants.has(c.id)).length
  const desactivees = desactiverManquantes ? [...idsExistants].filter((id) => !idsImportes.has(id)) : []

  const TAILLE_LOT = 400
  for (let i = 0; i < cartes.length; i += TAILLE_LOT) {
    const lot = db.batch()
    for (const carte of cartes.slice(i, i + TAILLE_LOT)) {
      lot.set(refCatalogue.doc(carte.id), { ...carte, actif: true, majLe: FieldValue.serverTimestamp() }, { merge: true })
    }
    await lot.commit()
  }

  for (let i = 0; i < desactivees.length; i += TAILLE_LOT) {
    const lot = db.batch()
    for (const id of desactivees.slice(i, i + TAILLE_LOT)) {
      lot.set(refCatalogue.doc(id), { actif: false, majLe: FieldValue.serverTimestamp() }, { merge: true })
    }
    await lot.commit()
  }

  await db.doc(`tenants/${TENANT_ID}/scrapeLogs/futbin-cartes-psg-manuel`).set(
    {
      source: 'futbin-cartes-psg-manuel',
      type: 'cartesFut',
      fichier: cheminFichier,
      derniereTentative: FieldValue.serverTimestamp(),
      dernierSucces: FieldValue.serverTimestamp(),
      enEchec: false,
      nombreCartes: cartes.length,
      nouvelles,
      desactivees: desactivees.length
    },
    { merge: true }
  )

  console.log(`Écrit : ${cartes.length} carte(s) (${nouvelles} nouvelle(s))${desactiverManquantes ? `, ${desactivees.length} désactivée(s) car absente(s) du fichier` : ''}.`)
}

importer().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1) })
