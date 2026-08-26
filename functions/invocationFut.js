import { onCall, HttpsError } from 'firebase-functions/v2/https'
import { logger } from 'firebase-functions/v2'
import { FieldValue } from 'firebase-admin/firestore'
import { db, chemins } from './lib/admin.js'
import { ORDRE_RARETE } from './sources/futbinCartesPsg.js'

const REGION = 'europe-west9'

// Repli si config/invocationFut (amorcé par scripts/seed-config.mjs) est
// absent — même principe que motifsCarteBase dans collecteCartesFut.js :
// le comportement par défaut ne doit jamais dépendre d'un doc de config
// qui n'existe pas encore.
const PROBABILITES_PAR_DEFAUT = { commune: 0.55, rare: 0.3, epique: 0.12, legendaire: 0.03 }
const COUT_TIRAGE_ETOILES_PAR_DEFAUT = 10
const GAIN_ETOILES_ACTIVITE_PAR_DEFAUT = 1

/** "YYYY-MM-DD" dans le fuseau Europe/Paris — sert à comparer "même jour
 * calendaire à Paris" quelle que soit l'heure UTC du serveur Cloud Functions. */
function dateDuJourParis() {
  return new Intl.DateTimeFormat('fr-CA', { timeZone: 'Europe/Paris' }).format(new Date())
}

/** Tire une rareté selon les probabilités configurées, puis retombe sur le
 * palier immédiatement inférieur si celui-ci n'a encore aucune carte en
 * catalogue (ex. aucune légendaire scrapée pour l'instant) — pour ne
 * jamais faire échouer un tirage à cause d'un palier vide. */
function tirerRarete(probabilites, cartesParRarete) {
  const paliers = ORDRE_RARETE.filter((r) => (cartesParRarete[r] || []).length > 0)
  if (paliers.length === 0) return null

  const poids = paliers.map((r) => Math.max(0, probabilites[r] ?? 0))
  const somme = poids.reduce((a, b) => a + b, 0)

  // Tous les paliers non vides ont un poids nul (config incohérente) :
  // repli équiprobable plutôt que de planter le tirage.
  if (somme <= 0) return paliers[Math.floor(Math.random() * paliers.length)]

  let tirage = Math.random() * somme
  for (let i = 0; i < paliers.length; i++) {
    tirage -= poids[i]
    if (tirage <= 0) return paliers[i]
  }
  return paliers[paliers.length - 1]
}

async function chargerConfig() {
  const snap = await db.doc(chemins.configInvocationFut()).get()
  const config = snap.exists ? snap.data() : {}
  return {
    probabilites: { ...PROBABILITES_PAR_DEFAUT, ...(config.probabilites || {}) },
    coutTirageEtoiles: config.coutTirageEtoiles ?? COUT_TIRAGE_ETOILES_PAR_DEFAUT,
    gainEtoilesActivite: config.gainEtoilesActivite ?? GAIN_ETOILES_ACTIVITE_PAR_DEFAUT
  }
}

async function chargerCartesParRarete() {
  const snap = await db.collection(chemins.cartesFut()).where('actif', '==', true).get()
  const parRarete = {}
  for (const doc of snap.docs) {
    const carte = { id: doc.id, ...doc.data() }
    if (!parRarete[carte.rarete]) parRarete[carte.rarete] = []
    parRarete[carte.rarete].push(carte)
  }
  return parRarete
}

/**
 * Tirage d'une carte — transactionnel pour éviter qu'un double-clic (ou
 * deux appels concurrents) ne consomme deux fois le même tirage gratuit
 * quotidien. Ordre de consommation choisi en session ("les deux
 * combinés") : le tirage gratuit du jour est utilisé EN PRIORITÉ, la
 * monnaie n'est débitée que s'il est déjà consommé.
 *
 * Le catalogue (potentiellement des centaines de cartes) est lu HORS
 * transaction : Firestore borne la taille d'une transaction, et ces
 * documents ne sont de toute façon écrits qu'une fois par jour par
 * collecteCartesFut.js — un léger risque de lire une version qui vient
 * d'être remplacée pendant la transaction est sans conséquence ici (au
 * pire une carte tirée qui vient d'être désactivée la même seconde).
 */
export const invoquerCarteFut = onCall({ region: REGION, memory: '256MiB', timeoutSeconds: 30 }, async (requete) => {
  if (!requete.auth) throw new HttpsError('unauthenticated', 'Connecte-toi pour invoquer une carte.')
  const uid = requete.auth.uid

  const config = await chargerConfig()
  const cartesParRarete = await chargerCartesParRarete()
  if (Object.keys(cartesParRarete).length === 0) {
    throw new HttpsError('failed-precondition', 'Aucune carte disponible pour le moment, réessaie plus tard.')
  }

  const aujourdhui = dateDuJourParis()
  const refEtat = db.doc(chemins.etatInvocationFut(uid))

  const resultat = await db.runTransaction(async (tx) => {
    const etatSnap = await tx.get(refEtat)
    const etat = etatSnap.exists ? etatSnap.data() : { soldeEtoiles: 0, dernierTirageGratuitLe: null }

    const tirageGratuitDispo = etat.dernierTirageGratuitLe !== aujourdhui
    const soldeEtoiles = etat.soldeEtoiles || 0

    let modePaiement
    if (tirageGratuitDispo) {
      modePaiement = 'gratuit'
    } else if (soldeEtoiles >= config.coutTirageEtoiles) {
      modePaiement = 'etoiles'
    } else {
      throw new HttpsError(
        'failed-precondition',
        `Aucun tirage disponible. Ton tirage gratuit du jour est déjà utilisé et il te manque des étoiles (${soldeEtoiles}/${config.coutTirageEtoiles}).`
      )
    }

    const rarete = tirerRarete(config.probabilites, cartesParRarete)
    const choixPossibles = cartesParRarete[rarete]
    const carte = choixPossibles[Math.floor(Math.random() * choixPossibles.length)]

    const refCollection = db.doc(chemins.carteCollectionFut(uid, carte.id))
    const collectionSnap = await tx.get(refCollection)
    const dejaPossedee = collectionSnap.exists

    tx.set(
      refEtat,
      {
        soldeEtoiles: modePaiement === 'etoiles' ? soldeEtoiles - config.coutTirageEtoiles : soldeEtoiles,
        dernierTirageGratuitLe: modePaiement === 'gratuit' ? aujourdhui : etat.dernierTirageGratuitLe || null
      },
      { merge: true }
    )

    tx.set(
      refCollection,
      {
        quantite: FieldValue.increment(1),
        dernierGainLe: FieldValue.serverTimestamp(),
        ...(dejaPossedee ? {} : { obtenueLe: FieldValue.serverTimestamp() })
      },
      { merge: true }
    )

    return { carte, modePaiement, nouvelle: !dejaPossedee }
  })

  logger.info('Tirage carte FUT', { uid, carteId: resultat.carte.id, rarete: resultat.carte.rarete, modePaiement: resultat.modePaiement })

  return resultat
})

/**
 * Crédite le bonus d'activité quotidien (+1 étoile par défaut, voir
 * gainEtoilesActivite) — appelé au premier chargement de l'app dans une
 * journée (voir App.jsx). Idempotent côté serveur : un appel répété le
 * même jour calendaire (Europe/Paris) ne crédite rien de plus, donc aucun
 * risque à l'appeler sans compteur côté client.
 *
 * Périmètre volontairement réduit à CE SEUL déclencheur pour cette
 * session ("monnaie gagnée par activité" restait à préciser) : un point
 * d'entrée unique et centralisé (plutôt que dispersé) pour ajouter
 * facilement d'autres déclencheurs plus tard (lire une actu, suivre un
 * match en direct...) sans dupliquer la logique de crédit/anti-triche.
 */
export const gagnerMonnaieFutQuotidien = onCall({ region: REGION, memory: '256MiB', timeoutSeconds: 30 }, async (requete) => {
  if (!requete.auth) throw new HttpsError('unauthenticated', 'Connecte-toi.')
  const uid = requete.auth.uid

  const config = await chargerConfig()
  const aujourdhui = dateDuJourParis()
  const refEtat = db.doc(chemins.etatInvocationFut(uid))

  const resultat = await db.runTransaction(async (tx) => {
    const etatSnap = await tx.get(refEtat)
    const etat = etatSnap.exists ? etatSnap.data() : { soldeEtoiles: 0, dernierBonusActiviteLe: null }

    if (etat.dernierBonusActiviteLe === aujourdhui) {
      return { credite: false, soldeEtoiles: etat.soldeEtoiles || 0 }
    }

    const nouveauSolde = (etat.soldeEtoiles || 0) + config.gainEtoilesActivite
    tx.set(refEtat, { soldeEtoiles: nouveauSolde, dernierBonusActiviteLe: aujourdhui }, { merge: true })
    return { credite: true, soldeEtoiles: nouveauSolde }
  })

  return resultat
})
