/**
 * Assigne `pouvoir` sur les cartes légendaires — 25/08/2026, trois passes :
 *
 * 1. Assignation initiale (matin) : 3 cartes choisies à la main —
 *    Marquinhos/sang-froid, Vitinha/franc-tireur, Dembélé/assurance-maillot.
 * 2. RÉVISÉ le même jour (signalé en session : "il sert à rien ce pouvoir
 *    non ? [sang-froid]" — la mise étant devenue libre jusqu'au solde le
 *    même jour, ce pouvoir n'avait plus d'effet réel) — remplacé par
 *    'intouchable' sur la MÊME carte (Marquinhos), puis 4 pouvoirs
 *    supplémentaires ajoutés et assignés automatiquement aux meilleures
 *    légendaires libres.
 * 3. RÉVISÉ à nouveau (demandé en session : "on met des pouvoirs à tous les
 *    légendaires, essaye d'être le plus équitable possible suivant le
 *    nombre de pouvoirs et de légendaires") — TOUTES les légendaires ont
 *    désormais un pouvoir, pas seulement 7 sur 16. Répartition la plus
 *    égale possible : 16 cartes / 7 pouvoirs = 2 chacun + 2 restantes,
 *    donc 2 pouvoirs à 3 cartes et 5 pouvoirs à 2 cartes (voir QUOTAS
 *    ci-dessous) plutôt que 7 cartes équipées et 9 sans rien.
 *
 *    Le "+1" est donné aux 2 pouvoirs les plus SITUATIONNELS de la liste
 *    (main-chanceuse, serie-noire — utiles seulement après un enchaînement
 *    précis) plutôt qu'aux plus forts en toute circonstance
 *    (intouchable, franc-tireur) : évite de sur-représenter les pouvoirs
 *    déjà les plus puissants.
 *
 * Table faisant autorité sur l'EFFET réel de chaque pouvoir :
 * functions/packsFut.js, POUVOIRS_LEGENDAIRES (ce script ne fait que poser
 * l'id sur la carte, jamais la logique de jeu).
 *
 * Répartition PAR NOTE DÉCROISSANTE, pouvoir par pouvoir dans l'ordre de
 * QUOTAS (donc intouchable prend les 2 meilleures notes restantes, puis
 * franc-tireur les 2 suivantes, etc.) — déterministe et reproductible,
 * jamais un tirage aléatoire pour distribuer des avantages de jeu.
 * Titulaires FIXES (ASSIGNATIONS_FIXES, choisis à la main en session)
 * comptent dans le quota de leur pouvoir et ne sont jamais réassignés.
 *
 * Lecture + écriture, sur TOUTE la collection cartesFut cette fois (pas
 * seulement quelques ids) — mais reste un `set(..., {merge:true})` par
 * carte, jamais un write en masse aveugle : chaque légendaire est lue
 * individuellement avant d'être écrite. Idempotent si relancé (même
 * répartition tant que le catalogue de légendaires ne change pas).
 *
 * Lancement : node scripts/assigner-pouvoirs.mjs
 * Requiert cle-service.json à la racine (voir scripts/lib/admin.mjs).
 */
import { FieldValue } from 'firebase-admin/firestore'
import { initFirebaseAdmin, TENANT_ID } from './lib/admin.mjs'

const db = initFirebaseAdmin()

// Titulaires FIXES, choisis à la main — jamais réassignés automatiquement,
// comptent dans le quota de leur pouvoir (voir QUOTAS).
const ASSIGNATIONS_FIXES = [
  { id: '2025-26_134425593_futties', nom: 'Marquinhos', pouvoir: 'intouchable' },
  { id: '2025-26_168027413_futties', nom: 'Vitinha', pouvoir: 'franc-tireur' },
  { id: '2025-26_251889683_unbreakables', nom: 'Dembélé', pouvoir: 'assurance-maillot' }
]

// Quota de cartes par pouvoir — DOIT sommer au nombre total de légendaires
// en base au moment du lancement (16 lors de l'écriture de ce script,
// vérifié dynamiquement plus bas plutôt que supposé en dur). 2 pouvoirs à 3
// cartes (main-chanceuse, serie-noire) + 5 pouvoirs à 2 cartes = 16.
const QUOTAS = {
  'intouchable': 2,
  'franc-tireur': 2,
  'assurance-maillot': 2,
  'le-jackpot': 2,
  'mise-protegee': 2,
  'serie-noire': 3,
  'main-chanceuse': 3
}

async function assigner() {
  const refCatalogue = db.collection(`tenants/${TENANT_ID}/cartesFut`)

  const snapLegendaires = await refCatalogue
    .where('actif', '==', true)
    .where('rarete', '==', 'legendaire')
    .get()

  const toutes = snapLegendaires.docs
    .map((d) => ({ id: d.id, ...d.data() }))
    .sort((a, b) => (b.note || 0) - (a.note || 0))

  const totalQuotas = Object.values(QUOTAS).reduce((a, b) => a + b, 0)
  if (totalQuotas !== toutes.length) {
    console.warn(
      `ATTENTION — QUOTAS totalise ${totalQuotas} mais ${toutes.length} légendaire(s) trouvée(s) en base. ` +
      `La répartition ne couvrira pas exactement toutes les cartes (ajuste QUOTAS si le catalogue a changé) — poursuite quand même.`
    )
  }

  console.log('--- Titulaires fixes ---')
  const idsFixes = new Set()
  for (const { id, nom, pouvoir } of ASSIGNATIONS_FIXES) {
    idsFixes.add(id)
    const carte = toutes.find((c) => c.id === id)
    if (!carte) {
      console.warn(`ATTENTION — id introuvable ou plus légendaire, rien écrit : ${id} (${nom})`)
      continue
    }
    await refCatalogue.doc(id).set({ pouvoir, majLe: FieldValue.serverTimestamp() }, { merge: true })
    console.log(`OK — ${carte.nom} (${id}) → pouvoir: ${pouvoir}`)
  }

  console.log('\n--- Répartition équitable du reste ---')
  // Cartes encore sans pouvoir, triées par note décroissante — les
  // titulaires fixes ont déjà consommé une place dans le quota de leur
  // pouvoir (voir restant() ci-dessous), donc jamais reproposées ici.
  let disponibles = toutes.filter((c) => !idsFixes.has(c.id))

  const restant = (pouvoir) => {
    const quota = QUOTAS[pouvoir] || 0
    const dejaFixes = ASSIGNATIONS_FIXES.filter((a) => a.pouvoir === pouvoir).length
    return Math.max(0, quota - dejaFixes)
  }

  for (const pouvoir of Object.keys(QUOTAS)) {
    const nombre = restant(pouvoir)
    if (nombre === 0) continue

    const choisies = disponibles.slice(0, nombre)
    disponibles = disponibles.slice(nombre)

    if (choisies.length < nombre) {
      console.warn(`ATTENTION — plus assez de légendaires libres pour ${pouvoir} (${choisies.length}/${nombre} assignée(s)).`)
    }

    for (const carte of choisies) {
      await refCatalogue.doc(carte.id).set({ pouvoir, majLe: FieldValue.serverTimestamp() }, { merge: true })
      console.log(`OK — ${carte.nom} (${carte.id}, note ${carte.note}) → pouvoir: ${pouvoir}`)
    }
  }

  if (disponibles.length > 0) {
    console.warn(`\nATTENTION — ${disponibles.length} légendaire(s) restée(s) sans pouvoir (quotas déjà atteints) : ${disponibles.map((c) => c.nom).join(', ')}`)
  } else {
    console.log('\nToutes les légendaires ont désormais un pouvoir.')
  }
}

assigner().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1) })
