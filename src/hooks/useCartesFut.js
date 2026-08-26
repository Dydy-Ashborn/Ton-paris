import { useEffect, useMemo, useState, useCallback } from 'react'
import { collection, doc, onSnapshot, query, where } from 'firebase/firestore'
import { httpsCallable } from 'firebase/functions'
import { db, fonctions, chemins } from '../lib/firebase'
import { useAuth } from './useAuth'

const ETAT_PAR_DEFAUT = { soldeEtoiles: 0, dernierPaquetGratuitLe: null, dernierBonusActiviteLe: null, onboardingPacksVu: false }

// Purement des replis d'AFFICHAGE tant que config/packsFut n'a pas encore
// été lu (ou n'existe pas, voir scripts/seed-config.mjs) — identiques aux
// valeurs par défaut côté serveur (functions/packsFut.js) pour ne jamais
// afficher un coût/une taille de paquet différents de ce qui sera
// réellement appliqué.
const COUT_ETOILES_PAR_DEFAUT = 30
const COUT_ETOILES_UNITE_PAR_DEFAUT = 6
const CARTES_PAR_PAQUET_PAR_DEFAUT = 5
const PROBABILITES_PAR_DEFAUT = { commune: 0.55, rare: 0.3, epique: 0.12, legendaire: 0.03 }
const MULTIPLICATEUR_RARETE_PAQUET = 1.5
// Même ordre que ORDRE_RARETE côté serveur (functions/sources/futbinCartesPsg.js)
// — jamais déduit de Object.keys(probabilites), qui ne garantit aucun ordre
// particulier sur un objet lu depuis Firestore.
const ORDRE_RARETE_AFFICHAGE = ['commune', 'rare', 'epique', 'legendaire']

// Même calcul que calculerProbabilitesPaquet côté serveur
// (functions/packsFut.js) — dupliqué ici UNIQUEMENT pour l'affichage
// (informer l'utilisateur du bonus de taux avant qu'il choisisse, voir
// pages/Packs.jsx : "faut l'informer... l'histoire de taux de drop selon
// le choix de pack ou de carte individuel"). Le VRAI tirage reste
// entièrement côté serveur — ce calcul-ci ne sert jamais à décider quoi
// que ce soit, seulement à afficher le même pourcentage que le serveur
// appliquera.
function calculerProbabilitesPaquetAffichage(probabilites) {
  const [palierBas, ...autres] = ORDRE_RARETE_AFFICHAGE
  const boostees = { ...probabilites }
  let gagne = 0
  for (const rarete of autres) {
    const base = Math.max(0, probabilites[rarete] ?? 0)
    const majoree = base * MULTIPLICATEUR_RARETE_PAQUET
    gagne += majoree - base
    boostees[rarete] = majoree
  }
  boostees[palierBas] = Math.max(0, (probabilites[palierBas] ?? 0) - gagne)
  return boostees
}

/** "YYYY-MM-DD" dans le fuseau Europe/Paris — même calcul que côté serveur
 * (functions/packsFut.js, dateDuJourParis) pour que "paquet gratuit
 * dispo ?" affiché côté client corresponde à ce que le callable décidera
 * réellement, sans dépendre du fuseau de l'appareil de l'utilisateur. */
function dateDuJourParis() {
  return new Intl.DateTimeFormat('fr-CA', { timeZone: 'Europe/Paris' }).format(new Date())
}

/**
 * Catalogue de cartes FUT (lecture seule, écrit par
 * functions/collecteCartesFut.js), collection possédée et état de paquets
 * de l'utilisateur connecté, + l'ouverture de paquet elle-même (callable
 * ouvrirPackFut — jamais d'écriture directe côté client, voir
 * lib/firebase.js). Utilisé par pages/Packs.jsx. Les amis/échanges sont
 * dans hooks/useAmisFut.js — préoccupation séparée.
 */
export function useCartesFut() {
  const { utilisateur } = useAuth()

  const [catalogue, setCatalogue] = useState([])
  const [chargementCatalogue, setChargementCatalogue] = useState(true)
  const [collectionBrute, setCollectionBrute] = useState({})
  const [chargementCollection, setChargementCollection] = useState(true)
  const [etat, setEtat] = useState(ETAT_PAR_DEFAUT)
  const [chargementEtat, setChargementEtat] = useState(true)
  const CONFIG_PAR_DEFAUT = {
    coutEtoiles: COUT_ETOILES_PAR_DEFAUT,
    coutEtoilesUnite: COUT_ETOILES_UNITE_PAR_DEFAUT,
    cartesParPaquet: CARTES_PAR_PAQUET_PAR_DEFAUT,
    probabilites: PROBABILITES_PAR_DEFAUT
  }
  const [config, setConfig] = useState(CONFIG_PAR_DEFAUT)
  const [modeDebug, setModeDebug] = useState(false)

  useEffect(() => {
    return onSnapshot(
      doc(db, chemins.configPacksFut()),
      (instantane) => {
        const donnees = instantane.exists() ? instantane.data() : {}
        const probabilites = donnees.probabilites && typeof donnees.probabilites === 'object'
          ? { ...PROBABILITES_PAR_DEFAUT, ...donnees.probabilites }
          : PROBABILITES_PAR_DEFAUT
        setConfig({
          coutEtoiles: typeof donnees.coutEtoiles === 'number' ? donnees.coutEtoiles : COUT_ETOILES_PAR_DEFAUT,
          coutEtoilesUnite: typeof donnees.coutEtoilesUnite === 'number' ? donnees.coutEtoilesUnite : COUT_ETOILES_UNITE_PAR_DEFAUT,
          cartesParPaquet: typeof donnees.cartesParPaquet === 'number' ? donnees.cartesParPaquet : CARTES_PAR_PAQUET_PAR_DEFAUT,
          probabilites
        })
      },
      () => setConfig(CONFIG_PAR_DEFAUT)
    )
  }, [])

  // Mode debug (tirages de test illimités, voir functions/packsFut.js) — LE
  // MÊME interrupteur global que functions/donneesTest.js (config/debug.actif),
  // bascule manuelle dans la console Firestore uniquement, jamais depuis
  // l'app. Lu ici juste pour savoir si le bouton "tirage de test" doit
  // s'afficher dans pages/Packs.jsx.
  useEffect(() => {
    return onSnapshot(
      doc(db, chemins.config('debug')),
      (instantane) => setModeDebug(instantane.exists() && instantane.data().actif === true),
      () => setModeDebug(false)
    )
  }, [])

  useEffect(() => {
    const q = query(collection(db, chemins.cartesFut()), where('actif', '==', true))
    return onSnapshot(
      q,
      (instantane) => {
        setCatalogue(instantane.docs.map((d) => ({ id: d.id, ...d.data() })))
        setChargementCatalogue(false)
      },
      () => setChargementCatalogue(false)
    )
  }, [])

  useEffect(() => {
    if (!utilisateur) {
      setCollectionBrute({})
      setChargementCollection(false)
      return
    }
    return onSnapshot(
      collection(db, chemins.collectionFut(utilisateur.uid)),
      (instantane) => {
        const parId = {}
        instantane.docs.forEach((d) => { parId[d.id] = d.data() })
        setCollectionBrute(parId)
        setChargementCollection(false)
      },
      () => setChargementCollection(false)
    )
  }, [utilisateur])

  useEffect(() => {
    if (!utilisateur) {
      setEtat(ETAT_PAR_DEFAUT)
      setChargementEtat(false)
      return
    }
    return onSnapshot(
      doc(db, chemins.etatPacksFut(utilisateur.uid)),
      (instantane) => {
        setEtat(instantane.exists() ? { ...ETAT_PAR_DEFAUT, ...instantane.data() } : ETAT_PAR_DEFAUT)
        setChargementEtat(false)
      },
      () => setChargementEtat(false)
    )
  }, [utilisateur])

  // Cartes du catalogue enrichies de la quantité possédée — évite de
  // recalculer cette jointure à chaque rendu de pages/Packs.jsx. Regroupées
  // par saison ici (système façon Panini demandé en session, un album par
  // édition FUTBIN) : le composant n'a qu'à parcourir saisons dans l'ordre
  // déjà trié (la plus récente d'abord).
  const collectionAffichable = useMemo(
    () => catalogue.map((carte) => ({ ...carte, quantite: collectionBrute[carte.id]?.quantite || 0 })),
    [catalogue, collectionBrute]
  )

  const saisons = useMemo(
    () => [...new Set(catalogue.map((c) => c.saison).filter(Boolean))].sort().reverse(),
    [catalogue]
  )

  const paquetGratuitDispo = etat.dernierPaquetGratuitLe !== dateDuJourParis()

  // Volontairement un simple wrapper sans état interne (enCours/erreur) :
  // pages/Packs.jsx l'enveloppe avec useRafraichir, comme tous les autres
  // appels callable de l'app (voir Accueil.jsx) — un seul endroit qui gère
  // le pattern enCours/toast succès/erreur, pas deux.
  //
  // `mode` ('paquet' par défaut ou 'unite', voir functions/packsFut.js) —
  // 25/08/2026, achat à l'unité demandé en session. Le serveur seul décide
  // du coût réel et du taux de rareté appliqué pour chaque mode ; ce
  // wrapper ne fait que transmettre le choix de l'utilisateur.
  const ouvrirPaquet = useCallback(async (mode = 'paquet') => {
    const resultat = await httpsCallable(fonctions, 'ouvrirPackFut')({ mode })
    return resultat.data
  }, [])

  // Même forme de retour que ouvrirPaquet ({cartes, modePaiement}) — voir
  // functions/packsFut.js, ouvrirPackFutDebug : pages/Packs.jsx réutilise
  // exactement la même UI de révélation plein écran pour les deux.
  const ouvrirPaquetDebug = useCallback(async () => {
    const resultat = await httpsCallable(fonctions, 'ouvrirPackFutDebug')()
    return resultat.data
  }, [])

  // Taux de rareté des deux modes, pour AFFICHAGE uniquement (demandé en
  // session : informer l'utilisateur du bonus de taux du pack avant qu'il
  // choisisse) — voir calculerProbabilitesPaquetAffichage en tête de
  // fichier, même calcul que côté serveur mais jamais utilisé pour décider
  // un tirage réel.
  const probabilitesPaquet = useMemo(
    () => calculerProbabilitesPaquetAffichage(config.probabilites),
    [config.probabilites]
  )

  return {
    catalogue,
    collection: collectionAffichable,
    saisons,
    nombrePossedees: Object.values(collectionBrute).filter((c) => (c.quantite || 0) > 0).length,
    etat,
    paquetGratuitDispo,
    coutEtoiles: config.coutEtoiles,
    coutEtoilesUnite: config.coutEtoilesUnite,
    cartesParPaquet: config.cartesParPaquet,
    probabilitesUnite: config.probabilites,
    probabilitesPaquet,
    ouvrirPaquet,
    modeDebug,
    ouvrirPaquetDebug,
    chargement: chargementCatalogue || chargementCollection || chargementEtat
  }
}

/** Bonus d'activité quotidien (+30 étoiles par défaut, revu le 25/08/2026 —
 * voir functions/packsFut.js, GAIN_ETOILES_ACTIVITE_PAR_DEFAUT) — à
 * appeler une fois par session, pas d'usage direct dans pages/Packs.jsx
 * (voir App.jsx). */
export async function pointerActiviteFut() {
  return httpsCallable(fonctions, 'gagnerMonnaieFutQuotidien')()
}

/** Bonus de lancement (25/08/2026, 60 étoiles offertes une seule fois par
 * compte) — même pattern que pointerActiviteFut ci-dessus : appelé une fois
 * par session depuis App.jsx, idempotent côté serveur (voir
 * functions/packsFut.js, recevoirBonusLancement) via `bonusLancementRecu`
 * plutôt qu'une date, puisque ce bonus n'est jamais censé se répéter. */
export async function recevoirBonusLancementFut() {
  return httpsCallable(fonctions, 'recevoirBonusLancement')()
}

/** Marque l'onboarding de l'onglet Packs comme vu (25/08/2026, popups
 * explication + bonus de lancement, voir pages/Packs.jsx,
 * OnboardingPacksModal) — appelé une seule fois, à la fermeture de la
 * DEUXIÈME popup (pas la première : tant que l'utilisateur n'a pas vu les
 * deux, `etat.onboardingPacksVu` doit rester faux pour qu'elles se
 * réaffichent au prochain chargement si l'app était fermée entre les deux). */
export async function marquerOnboardingPacksVuFut() {
  return httpsCallable(fonctions, 'marquerOnboardingPacksVu')()
}
