import { onCall, HttpsError } from 'firebase-functions/v2/https'
import { logger } from 'firebase-functions/v2'
import { FieldValue } from 'firebase-admin/firestore'
import { db, chemins } from './lib/admin.js'
import { envoyer } from './lib/push.js'
import { ORDRE_RARETE } from './sources/futbinCartesPsg.js'

const REGION = 'europe-west9'

// Repli si config/packsFut (amorcé par scripts/seed-config.mjs) est absent
// — même principe que motifsCarteBase dans collecteCartesFut.js : le
// comportement par défaut ne doit jamais dépendre d'un doc de config qui
// n'existe pas encore.
const PROBABILITES_PAR_DEFAUT = { commune: 0.55, rare: 0.3, epique: 0.12, legendaire: 0.03 }
const COUT_ETOILES_PAR_DEFAUT = 30
// Achat d'UNE seule carte (25/08/2026, demandé en session : "je veux qu'on
// puisse ouvrir qu'une seule carte qui divise le coût... faut revoir le prix
// du pack de 5 cartes et le prix de l'ouverture d'une seule"). Prix = coût du
// pack ÷ cartesParPaquet (30/5 = 6 par défaut) : même tarif unitaire moyen
// que dans le pack, la vraie incitation à prendre le pack de 5 vient du
// meilleur taux de rareté (voir MULTIPLICATEUR_RARETE_PAQUET plus bas), pas
// d'une pénalité de prix sur l'achat à l'unité. PAS de paquet gratuit
// quotidien pour l'achat à l'unité — ce mécanisme reste réservé au pack de 5
// (c'est lui qui crée le réflexe de revenir chaque jour, voir BottomNav.jsx).
const COUT_ETOILES_UNITE_PAR_DEFAUT = 6
// Bonus de taux de rareté du pack de 5 par rapport à l'achat à l'unité
// (demandé en session : "le taux de drop de rareté augmente si tu prends un
// pack plutôt que d'une carte individuelle") — +50% RELATIF sur rare/
// épique/légendaire (ex. légendaire 3% → 4.5%), le poids retiré étant
// entièrement repris par le commun pour que la somme reste 1 (voir
// calculerProbabilitesPaquet ci-dessous). Uniquement les raretés au-dessus
// de la plus basse : booster "commune" n'aurait aucun sens (déjà le palier
// le plus fréquent, rien à en tirer comme incitation).
const MULTIPLICATEUR_RARETE_PAQUET = 1.5
// RÉVISÉ le 25/08/2026 (1 → 30, signalé en session : "c'est trop léger...
// on fait 1 pack gratuit par jour + 30 étoiles donc ça lui fait soit un
// pack soit de quoi miser") — 1 étoile/jour ne permettait ni de racheter un
// paquet (30) ni une carte à l'unité (6) au-delà du strict minimum ; 30
// étoiles = le coût exact d'un paquet payant, donc le joueur qui a tout
// dépensé repart chaque jour avec SOIT un 2e paquet (en plus du paquet
// gratuit ci-dessus), SOIT une mise confortable à Pile ou Face.
const GAIN_ETOILES_ACTIVITE_PAR_DEFAUT = 30
// Bonus de lancement (25/08/2026, demandé en session : "pour le lancement
// on offre des étoiles aux utilisateurs") — offert UNE SEULE FOIS à CHAQUE
// compte (existant ET futur, voir recevoirBonusLancement plus bas), pas un
// bonus 1x/jour comme GAIN_ETOILES_ACTIVITE_PAR_DEFAUT ci-dessus. Montant
// RÉVISÉ le 25/08/2026 (60 → 100, changement d'avis en session : "ça fais 3
// packs et 10 étoiles pour jouer") — 3 paquets de 5 (coût normal 30 étoiles
// chacun = 90) + 10 étoiles pour tester Pile ou Face.
const BONUS_LANCEMENT_ETOILES = 100
const CARTES_PAR_PAQUET_PAR_DEFAUT = 5

// "Pile ou Maillot" — mini-jeu rapide à mise à risque (demandé en session :
// "gagner de la monnaie du jeu rapidement", illimité, PAS un bonus 1x/jour —
// "le but c'est de pouvoir avoir autant de monnaie qu'on veut", d'où la mise
// à risque choisie explicitement par l'utilisateur plutôt qu'un simple jeu
// gratuit à rejouer sans fin, qui aurait permis de farmer des étoiles sans
// aucune limite ni tension). Paliers de mise fixes plafonnés par le solde
// (jamais miser plus qu'on a) plutôt que mise libre : plus simple à afficher
// en boutons, évite la saisie d'un nombre arbitraire. Multiplicateur < 2 = la
// marge maison (paramètre `MULTIPLICATEUR_GAIN_PAR_DEFAUT` ci-dessous) : sur
// un tirage 50/50, un multiplicateur de 2 pile serait un jeu à somme nulle
// pour l'app (aucune étoile nette générée ni retirée sur longue série), ce
// qui viderait le sens du système de packs à terme si les joueurs ne
// dépensent leurs étoiles qu'ici. 1.9 = léger désavantage structurel côté
// joueur sur longue série, sans changer la sensation "50/50" d'un coup à
// l'autre.
const PALIERS_MISE_PAR_DEFAUT = [1, 5, 10, 25, 50]
const MULTIPLICATEUR_GAIN_PAR_DEFAUT = 1.9
const COTES_PAR_DEFAUT = ['pile', 'maillot']

// Pouvoirs de cartes légendaires (demandé en session : "faudrait ajouter
// des pouvoirs si t'as certaines cartes... faut mettre des pouvoirs qu'aux
// cartes légendaire et essayer d'être cohérent"). Réservés à la rareté
// légendaire (le palier le plus dur à obtenir, voir ORDRE_RARETE) — jamais
// toutes les légendaires n'en portent un, seulement celles où
// `carte.pouvoir` est explicitement rempli en base (voir map-front.md,
// section dédiée : champ ajouté manuellement au catalogue, pas déduit du
// scraping FUTBIN qui ne connaît pas cette notion côté app).
//
// Table faisant AUTORITÉ ici, côté serveur — le front (voir
// components/CarteFut.jsx, hooks/usePileOuFace.js) n'affiche que ce que le
// catalogue déclare (id + libelle + description), jamais la vraie règle de
// jeu : jouerPileOuFace applique l'effet lui-même, jamais un
// multiplicateur/une règle envoyés par le client.
//
// Un seul pouvoir actif à la fois : celui de la MEILLEURE carte à pouvoir
// possédée (voir POUVOIRS_LEGENDAIRES, ordre = ordre de priorité, du plus
// fort au plus faible) — jamais cumulable entre plusieurs légendaires à
// pouvoir différentes, pour rester simple et lisible côté joueur. Le
// pouvoir suppose au moins un exemplaire encore possédé (quantite > 0) :
// envoyer sa dernière copie à un ami désactive le pouvoir au tour suivant.
// 'sang-froid' REMPLACÉ le 25/08/2026 par 'intouchable' (signalé en
// session : "il sert à rien ce pouvoir non ?" — la mise étant devenue
// libre jusqu'au solde le jour même, "débloque un palier de mise
// supérieur" n'avait plus aucun effet réel). Remplacement + 4 nouveaux
// pouvoirs ajoutés le même jour (idées fournies en session), assignés
// côté catalogue par scripts/assigner-pouvoirs.mjs (voir ce script pour la
// liste des cartes). Tous DÉTERMINISTES à partir de compteurs déjà stockés
// sur etatPacksFut(uid) — jamais un second tirage aléatoire caché — sauf
// 'main-chanceuse' qui est le seul pouvoir à changer le FLUX de jeu (le
// joueur choisit explicitement de relancer, voir plus bas dans
// jouerPileOuFace) plutôt que son seul résultat/gain.
const POUVOIRS_LEGENDAIRES = {
  'intouchable': {
    libelle: 'Intouchable',
    description: 'Après une victoire, ton prochain lancer ne peut pas te faire perdre plus d’une demi-mise.',
    prioritePari: 1
  },
  'franc-tireur': {
    libelle: 'Franc-tireur',
    description: 'Multiplicateur de gain amélioré (×2.1 au lieu de ×1.9).',
    prioritePari: 2
  },
  'assurance-maillot': {
    libelle: 'Assurance maillot',
    description: 'Une défaite sur deux ne coûte que la moitié de la mise.',
    prioritePari: 3
  },
  'le-jackpot': {
    libelle: 'Le jackpot',
    description: 'Chaque victoire consécutive supplémentaire augmente encore le multiplicateur de gain.',
    prioritePari: 4
  },
  'mise-protegee': {
    libelle: 'Mise protégée',
    description: 'Après deux victoires consécutives, ta prochaine mise est protégée en cas de défaite.',
    prioritePari: 5
  },
  'serie-noire': {
    libelle: 'Série noire',
    description: 'Plus tu enchaînes les défaites, plus ton prochain gain est important.',
    prioritePari: 6
  },
  'main-chanceuse': {
    libelle: 'Main chanceuse',
    description: 'Une fois par série de victoires, tu peux relancer un résultat qui ne te convient pas.',
    prioritePari: 7
  }
}
const ORDRE_PRIORITE_POUVOIRS = Object.keys(POUVOIRS_LEGENDAIRES).sort(
  (a, b) => POUVOIRS_LEGENDAIRES[a].prioritePari - POUVOIRS_LEGENDAIRES[b].prioritePari
)
const MULTIPLICATEUR_FRANC_TIREUR = 2.1

// 'le-jackpot' — bonus de multiplicateur par victoire consécutive DÉJÀ
// acquise avant le coup en cours (donc nul sur la 1ère victoire d'une
// série, actif dès la 2e) : +0.15 par victoire d'affilée, plafonné à
// +0.6 (4 victoires) pour ne jamais dépasser MULTIPLICATEUR_FRANC_TIREUR
// de trop loin. Valeurs rondes choisies pour rester lisibles côté joueur
// (l'exacte formule n'est jamais affichée, seul le multiplicateur final
// renvoyé compte).
const BONUS_JACKPOT_PAR_VICTOIRE = 0.15
const BONUS_JACKPOT_MAX = 0.6

// 'serie-noire' — même principe côté défaites : +0.1 de multiplicateur par
// défaite consécutive déjà subie avant la victoire qui en profite,
// plafonné à +0.5 (5 défaites). Remis à zéro dès qu'une victoire consomme
// le bonus (voir jouerPileOuFace).
const BONUS_SERIE_NOIRE_PAR_DEFAITE = 0.1
const BONUS_SERIE_NOIRE_MAX = 0.5

// Alphabet sans caractères ambigus (0/O, 1/I/L) — code ami lu à l'oral ou
// recopié à la main (SMS, Discord...), voir genererCodeAmi.
const ALPHABET_CODE_AMI = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789'
const LONGUEUR_CODE_AMI = 6

// Heure de bascule du "jour de jeu" (25/08/2026, demandé en session : "je
// veux que ça se fasse tous les matins à 6h") — le paquet gratuit
// (ouvrirPackFut) et le bonus d'activité (gagnerMonnaieFutQuotidien) se
// renouvellent désormais à 6h du matin heure de Paris, plus à minuit.
const HEURE_BASCULE_JOUR_JEU = 6

/** "YYYY-MM-DD" du JOUR DE JEU dans le fuseau Europe/Paris — pas le jour
 * calendaire strict : on décale l'horloge de HEURE_BASCULE_JOUR_JEU heures
 * en arrière avant de lire la date, donc tout ce qui se passe avant 6h du
 * matin (heure de Paris) compte encore comme la veille. Sert à comparer
 * "même jour DE JEU à Paris" quelle que soit l'heure UTC du serveur Cloud
 * Functions. Le décalage est appliqué en heures fixes (pas en millisecondes
 * DST-sensibles) : correct été comme hiver puisqu'on ne fait que reculer
 * l'horloge avant de la reformater dans le même fuseau Europe/Paris. */
function dateDuJourParis() {
  const decale = new Date(Date.now() - HEURE_BASCULE_JOUR_JEU * 60 * 60 * 1000)
  return new Intl.DateTimeFormat('fr-CA', { timeZone: 'Europe/Paris' }).format(decale)
}

function genererCodeAleatoire() {
  let code = ''
  for (let i = 0; i < LONGUEUR_CODE_AMI; i++) {
    code += ALPHABET_CODE_AMI[Math.floor(Math.random() * ALPHABET_CODE_AMI.length)]
  }
  return code
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

/**
 * Applique MULTIPLICATEUR_RARETE_PAQUET aux raretés au-dessus de la plus
 * basse (ORDRE_RARETE[0], "commune" par défaut), puis renormalise pour que
 * la somme reste 1 — le poids gagné par rare/épique/légendaire est repris
 * intégralement sur le palier le plus bas plutôt que de fausser le total.
 * Utilisé UNIQUEMENT pour le pack de 5 (voir ouvrirPackFut) ; l'achat à
 * l'unité utilise `probabilites` telles quelles, sans ce bonus.
 */
function calculerProbabilitesPaquet(probabilites) {
  const paliers = ORDRE_RARETE
  const palierBas = paliers[0]
  const boostees = { ...probabilites }
  let gagne = 0
  for (const rarete of paliers.slice(1)) {
    const base = Math.max(0, probabilites[rarete] ?? 0)
    const majoree = base * MULTIPLICATEUR_RARETE_PAQUET
    gagne += majoree - base
    boostees[rarete] = majoree
  }
  boostees[palierBas] = Math.max(0, (probabilites[palierBas] ?? 0) - gagne)
  return boostees
}

async function chargerConfig() {
  const snap = await db.doc(chemins.configPacksFut()).get()
  const config = snap.exists ? snap.data() : {}
  const probabilites = { ...PROBABILITES_PAR_DEFAUT, ...(config.probabilites || {}) }
  return {
    probabilites,
    probabilitesPaquet: calculerProbabilitesPaquet(probabilites),
    coutEtoiles: config.coutEtoiles ?? COUT_ETOILES_PAR_DEFAUT,
    coutEtoilesUnite: config.coutEtoilesUnite ?? COUT_ETOILES_UNITE_PAR_DEFAUT,
    gainEtoilesActivite: config.gainEtoilesActivite ?? GAIN_ETOILES_ACTIVITE_PAR_DEFAUT,
    cartesParPaquet: config.cartesParPaquet ?? CARTES_PAR_PAQUET_PAR_DEFAUT
  }
}

/**
 * Détermine le pouvoir légendaire actif d'un joueur pour jouerPileOuFace —
 * lit sa collection RÉELLE (jamais transmise par le client) et croise avec
 * le catalogue pour ne retenir que les cartes légendaires POSSÉDÉES
 * (quantite > 0) portant un `pouvoir` reconnu dans POUVOIRS_LEGENDAIRES.
 * Renvoie l'id du pouvoir de plus haute priorité trouvé, ou null si aucun.
 *
 * Lu HORS transaction (même raisonnement que chargerCartesParRarete pour
 * ouvrirPackFut : la collection ne change pas assez vite pour qu'un léger
 * risque de lecture obsolète ait une conséquence réelle ici) — seul le
 * SOLDE (etatPacksFut) a besoin d'être lu dans la transaction elle-même.
 */
async function determinerPouvoirActif(uid) {
  const snap = await db.collection(chemins.collectionFut(uid)).where('quantite', '>', 0).get()
  if (snap.empty) return null

  const idsPossedes = new Set(snap.docs.map((d) => d.id))
  if (idsPossedes.size === 0) return null

  const cartesLegendaires = await db
    .collection(chemins.cartesFut())
    .where('actif', '==', true)
    .where('rarete', '==', 'legendaire')
    .get()

  const pouvoirsPossedes = new Set()
  for (const doc of cartesLegendaires.docs) {
    if (!idsPossedes.has(doc.id)) continue
    const pouvoir = doc.data().pouvoir
    if (pouvoir && POUVOIRS_LEGENDAIRES[pouvoir]) pouvoirsPossedes.add(pouvoir)
  }

  for (const id of ORDRE_PRIORITE_POUVOIRS) {
    if (pouvoirsPossedes.has(id)) return id
  }
  return null
}

/** Même pattern que chargerConfig() ci-dessus (doc config/*, repli sur des
 * valeurs par défaut en code si absent/partiel) — voir jouerPileOuFace. */
async function chargerConfigPileOuFace() {
  const snap = await db.doc(chemins.configPileOuFace()).get()
  const config = snap.exists ? snap.data() : {}
  const paliers = Array.isArray(config.paliersMise) && config.paliersMise.length > 0
    ? config.paliersMise
    : PALIERS_MISE_PAR_DEFAUT
  return {
    paliersMise: paliers,
    multiplicateurGain: config.multiplicateurGain ?? MULTIPLICATEUR_GAIN_PAR_DEFAUT
  }
}

/**
 * `test: true` charge le petit catalogue de cartes FACTICES (voir
 * scripts/seed-cartes-test.mjs, actif:false donc jamais mélangées au
 * catalogue normal — voir useCartesFut.js côté client qui filtre sur
 * actif==true) utilisé par ouvrirPackFutDebug ci-dessous, jamais le vrai
 * catalogue FUTBIN.
 */
async function chargerCartesParRarete({ test = false } = {}) {
  const snap = test
    ? await db.collection(chemins.cartesFut()).where('test', '==', true).get()
    : await db.collection(chemins.cartesFut()).where('actif', '==', true).get()
  const parRarete = {}
  for (const doc of snap.docs) {
    const carte = { id: doc.id, ...doc.data() }
    if (!parRarete[carte.rarete]) parRarete[carte.rarete] = []
    parRarete[carte.rarete].push(carte)
  }
  return parRarete
}

/**
 * Ouverture d'un paquet (5 cartes par défaut, config.cartesParPaquet) OU
 * d'une carte à l'unité (25/08/2026, demandé en session : "je veux qu'on
 * puisse ouvrir qu'une seule carte qui divise le coût") — `requete.data.mode`
 * vaut 'paquet' (défaut) ou 'unite'. Transactionnel pour éviter qu'un
 * double-clic (ou deux appels concurrents) ne consomme deux fois le même
 * paquet gratuit quotidien. Ordre de consommation choisi en session ("les
 * deux combinés") : le paquet gratuit du jour est utilisé EN PRIORITÉ, la
 * monnaie n'est débitée que s'il est déjà consommé — mais ce paquet gratuit
 * ne s'applique QU'au mode 'paquet' (c'est lui qui crée le réflexe de
 * revenir chaque jour) : le mode 'unite' est TOUJOURS payant.
 *
 * Taux de rareté : le mode 'paquet' utilise `probabilitesPaquet`
 * (MULTIPLICATEUR_RARETE_PAQUET appliqué, voir calculerProbabilitesPaquet)
 * — le mode 'unite' utilise `probabilites` telles quelles, sans bonus
 * (demandé en session : "le taux de drop de rareté augmente si tu prends
 * un pack plutôt que d'une carte individuelle").
 *
 * PAS de garantie de rareté minimale par paquet dans cette première version
 * (les vrais packs FUT garantissent souvent au moins une carte rare+) : les
 * cartes sont des tirages indépendants. À ajouter plus tard si besoin — se
 * ferait simplement en forçant le dernier tirage sur un palier ≥ rare si
 * aucun des précédents n'en a donné.
 *
 * Le catalogue (potentiellement des centaines de cartes) est lu HORS
 * transaction : Firestore borne la taille d'une transaction, et ces
 * documents ne sont de toute façon écrits qu'une fois par jour par
 * collecteCartesFut.js — un léger risque de lire une version qui vient
 * d'être remplacée pendant la transaction est sans conséquence ici (au
 * pire une carte tirée qui vient d'être désactivée la même seconde).
 */
export const ouvrirPackFut = onCall({ region: REGION, memory: '256MiB', timeoutSeconds: 30 }, async (requete) => {
  if (!requete.auth) throw new HttpsError('unauthenticated', 'Connecte-toi pour ouvrir un pack.')
  const uid = requete.auth.uid

  const mode = requete.data?.mode === 'unite' ? 'unite' : 'paquet'

  const config = await chargerConfig()
  const cartesParRarete = await chargerCartesParRarete()
  if (Object.keys(cartesParRarete).length === 0) {
    throw new HttpsError('failed-precondition', 'Aucune carte disponible pour le moment, réessaie plus tard.')
  }

  const nombreCartes = mode === 'unite' ? 1 : config.cartesParPaquet
  const probabilitesTirage = mode === 'unite' ? config.probabilites : config.probabilitesPaquet
  const coutPayant = mode === 'unite' ? config.coutEtoilesUnite : config.coutEtoiles

  const aujourdhui = dateDuJourParis()
  const refEtat = db.doc(chemins.etatPacksFut(uid))

  const resultat = await db.runTransaction(async (tx) => {
    const etatSnap = await tx.get(refEtat)
    const etat = etatSnap.exists ? etatSnap.data() : { soldeEtoiles: 0, dernierPaquetGratuitLe: null }

    // Le paquet gratuit du jour ne s'applique jamais au mode 'unite' — voir
    // le commentaire de la fonction.
    const paquetGratuitDispo = mode === 'paquet' && etat.dernierPaquetGratuitLe !== aujourdhui
    const soldeEtoiles = etat.soldeEtoiles || 0

    let modePaiement
    if (paquetGratuitDispo) {
      modePaiement = 'gratuit'
    } else if (soldeEtoiles >= coutPayant) {
      modePaiement = 'etoiles'
    } else {
      throw new HttpsError(
        'failed-precondition',
        mode === 'unite'
          ? `Pas assez d'étoiles pour ouvrir une carte (${soldeEtoiles}/${coutPayant}).`
          : `Aucun paquet disponible. Ton paquet gratuit du jour est déjà utilisé et il te manque des étoiles (${soldeEtoiles}/${coutPayant}).`
      )
    }

    const cartesTirees = []
    for (let i = 0; i < nombreCartes; i++) {
      const rarete = tirerRarete(probabilitesTirage, cartesParRarete)
      const choix = cartesParRarete[rarete]
      cartesTirees.push(choix[Math.floor(Math.random() * choix.length)])
    }

    const refsCollection = cartesTirees.map((carte) => db.doc(chemins.carteCollectionFut(uid, carte.id)))
    const snapsCollection = await Promise.all(refsCollection.map((ref) => tx.get(ref)))

    tx.set(
      refEtat,
      {
        soldeEtoiles: modePaiement === 'etoiles' ? soldeEtoiles - coutPayant : soldeEtoiles,
        dernierPaquetGratuitLe: modePaiement === 'gratuit' ? aujourdhui : etat.dernierPaquetGratuitLe || null
      },
      { merge: true }
    )

    const resultatCartes = cartesTirees.map((carte, i) => {
      const dejaPossedee = snapsCollection[i].exists && (snapsCollection[i].data().quantite || 0) > 0
      tx.set(
        refsCollection[i],
        {
          quantite: FieldValue.increment(1),
          dernierGainLe: FieldValue.serverTimestamp(),
          ...(dejaPossedee ? {} : { obtenueLe: FieldValue.serverTimestamp() })
        },
        { merge: true }
      )
      return { carte, nouvelle: !dejaPossedee }
    })

    return { cartes: resultatCartes, modePaiement, mode }
  })

  logger.info('Ouverture paquet FUT', {
    uid,
    mode: resultat.mode,
    modePaiement: resultat.modePaiement,
    cartes: resultat.cartes.map((c) => ({ id: c.carte.id, rarete: c.carte.rarete }))
  })

  return resultat
})

/**
 * Tirage de TEST illimité — demandé en session pour tester l'ouverture de
 * pack sans consommer le paquet gratuit du jour ni de vraies étoiles.
 * Protégé par config('debug').actif === true — LE MÊME interrupteur global
 * que functions/donneesTest.js utilise déjà pour ses propres outils de
 * debug visuel (injecterCompoTest...), à bascule MANUELLE dans la console
 * Firestore uniquement (choix de session), jamais via un bouton de l'app :
 * un point de contrôle centralisé unique pour tout le mode debug plutôt
 * qu'un interrupteur par fonctionnalité.
 *
 * BUG CORRIGÉ (25/08/2026, demandé en session : "je veux tirer une carte de
 * chaque rareté, des cartes réelles") : tirait auparavant dans le petit
 * catalogue de cartes FACTICES (test: true, voir scripts/seed-cartes-test.mjs)
 * selon les probabilités normales — donc pas de garantie de voir chaque
 * palier, et jamais une vraie carte du catalogue. Pioche maintenant dans le
 * VRAI catalogue (actif: true, même source que ouvrirPackFut) et tire
 * SYSTÉMATIQUEMENT une carte de chaque rareté qui a au moins une carte en
 * base (ORDRE_RARETE, du commun vers le légendaire) plutôt qu'un tirage
 * pondéré — c'est un outil de vérification visuelle (voir chaque rendu),
 * pas une simulation de vrai tirage (qui reste ouvrirPackFut). Écrit
 * toujours dans collectionFutTest(uid) — une sous-collection SÉPARÉE de
 * collectionFut(uid), donc ne pollue jamais la vraie collection/album
 * Panini, même en piochant désormais dans le vrai catalogue. Vidée
 * automatiquement (tous users) quand debug repasse à false, voir
 * functions/nettoyageDebugFut.js.
 */
export const ouvrirPackFutDebug = onCall({ region: REGION, memory: '256MiB', timeoutSeconds: 30 }, async (requete) => {
  if (!requete.auth) throw new HttpsError('unauthenticated', 'Connecte-toi pour ouvrir un pack.')
  const uid = requete.auth.uid

  const debugSnap = await db.doc(chemins.config('debug')).get()
  if (!debugSnap.exists || debugSnap.data().actif !== true) {
    throw new HttpsError('permission-denied', "Mode debug désactivé (à activer manuellement dans la console Firestore, doc config/debug).")
  }

  const cartesParRarete = await chargerCartesParRarete()
  const raretesDisponibles = ORDRE_RARETE.filter((r) => (cartesParRarete[r] || []).length > 0)
  if (raretesDisponibles.length === 0) {
    throw new HttpsError('failed-precondition', "Aucune carte dans le vrai catalogue — voir scripts/importer-cartes-fut.mjs.")
  }

  // Une carte (aléatoire dans le palier) par rareté disponible — jamais deux
  // fois la même rareté dans ce tirage, contrairement à ouvrirPackFut.
  const cartesTirees = raretesDisponibles.map((rarete) => {
    const choix = cartesParRarete[rarete]
    return choix[Math.floor(Math.random() * choix.length)]
  })

  const lot = db.batch()
  const resultatCartes = cartesTirees.map((carte) => {
    lot.set(
      db.doc(chemins.carteCollectionFutTest(uid, carte.id)),
      { quantite: FieldValue.increment(1), dernierGainLe: FieldValue.serverTimestamp() },
      { merge: true }
    )
    return { carte, nouvelle: false }
  })
  await lot.commit()

  logger.info('Ouverture paquet FUT (debug)', { uid, cartes: resultatCartes.map((c) => c.carte.id) })
  return { cartes: resultatCartes, modePaiement: 'debug' }
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
  const refEtat = db.doc(chemins.etatPacksFut(uid))

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

/**
 * Marque l'onboarding de l'onglet Packs comme vu (25/08/2026, demandé en
 * session : "quand on arrive pour la première fois on explique le
 * fonctionnement des packs et du mini jeu, ensuite nouvelle popup on dit
 * que pour le lancement on offre 60 étoiles" — deux popups, affichées une
 * seule fois par compte). Simple flag booléen sur etatPacksFut(uid), pas de
 * transaction nécessaire (aucun calcul, aucun risque de double-écriture
 * problématique — un set(merge:true) répété par un double-clic reste
 * idempotent tel quel). PAS de callable séparé par popup : les deux
 * s'affichent l'une après l'autre côté client (voir pages/Packs.jsx,
 * OnboardingPacksModal) et ne partagent qu'un seul flag — inutile de suivre
 * les deux indépendamment, elles sont toujours vues ensemble dans le même
 * ordre.
 */
export const marquerOnboardingPacksVu = onCall({ region: REGION, memory: '256MiB', timeoutSeconds: 30 }, async (requete) => {
  if (!requete.auth) throw new HttpsError('unauthenticated', 'Connecte-toi.')
  const uid = requete.auth.uid

  await db.doc(chemins.etatPacksFut(uid)).set({ onboardingPacksVu: true }, { merge: true })
  return { ok: true }
})

/**
 * Bonus de lancement — BONUS_LANCEMENT_ETOILES offertes UNE SEULE FOIS par
 * compte (demandé en session : "pour le lancement on offre des étoiles aux
 * utilisateurs", pour TOUS les comptes, existants comme futurs ; montant
 * révisé 60 → 100 le 25/08/2026, voir la constante en tête de fichier).
 * Idempotence
 * via un flag booléen `bonusLancementRecu` sur etatPacksFut(uid) — PAS une
 * date comme gagnerMonnaieFutQuotidien ci-dessus (`dernierBonusActiviteLe`) :
 * ce bonus n'est jamais censé se répéter, un simple "déjà reçu ?" suffit et
 * reste correct indéfiniment, contrairement à une comparaison de date qui
 * n'aurait de sens que pour un bonus périodique.
 *
 * Appelé au même endroit que pointerActiviteFut (voir App.jsx), une fois
 * par session au premier chargement de l'app une fois l'onboarding terminé
 * — échec silencieux côté client comme les autres bonus best-effort, jamais
 * bloquant pour l'utilisateur.
 */
export const recevoirBonusLancement = onCall({ region: REGION, memory: '256MiB', timeoutSeconds: 30 }, async (requete) => {
  if (!requete.auth) throw new HttpsError('unauthenticated', 'Connecte-toi.')
  const uid = requete.auth.uid

  const refEtat = db.doc(chemins.etatPacksFut(uid))

  const resultat = await db.runTransaction(async (tx) => {
    const etatSnap = await tx.get(refEtat)
    const etat = etatSnap.exists ? etatSnap.data() : { soldeEtoiles: 0, bonusLancementRecu: false }

    if (etat.bonusLancementRecu) {
      return { credite: false, soldeEtoiles: etat.soldeEtoiles || 0 }
    }

    const nouveauSolde = (etat.soldeEtoiles || 0) + BONUS_LANCEMENT_ETOILES
    tx.set(refEtat, { soldeEtoiles: nouveauSolde, bonusLancementRecu: true }, { merge: true })
    return { credite: true, soldeEtoiles: nouveauSolde, montant: BONUS_LANCEMENT_ETOILES }
  })

  if (resultat.credite) logger.info('Bonus de lancement crédité', { uid, montant: BONUS_LANCEMENT_ETOILES })
  return resultat
})

/**
 * "Pile ou Maillot" — mini-jeu rapide à mise à risque (voir constantes
 * PALIERS_MISE_PAR_DEFAUT / MULTIPLICATEUR_GAIN_PAR_DEFAUT en tête de
 * fichier pour le raisonnement complet). Rejouable sans limite (voulu en
 * session : "illimité... pouvoir avoir autant de monnaie qu'on veut") —
 * AUCUN throttling ni cooldown ici, contrairement à gagnerMonnaieFutQuotidien
 * ci-dessus qui est un bonus 1x/jour : la seule limite est le solde lui-même
 * (on ne peut pas miser ce qu'on n'a pas), ce qui est déjà une limite
 * naturelle suffisante.
 *
 * Tirage et calcul du gain/perte ENTIÈREMENT côté serveur (requete.data ne
 * fournit QUE la mise, le côté choisi et, pour 'main-chanceuse', un flag de
 * relance — jamais un résultat) — un client modifié ne peut pas s'auto-
 * attribuer une victoire, même logique que tirerRarete/chargerCartesParRarete
 * pour ouvrirPackFut. Transactionnel pour la même raison qu'ouvrirPackFut :
 * un double-clic ne doit jamais débiter deux fois la même mise.
 *
 * `resultatTirage` renvoyé au client sert UNIQUEMENT à afficher l'animation
 * (quel côté est sorti) — le solde affiché doit toujours provenir de
 * `nouveauSolde`, jamais recalculé côté client à partir de la mise/du
 * multiplicateur (voir usePileOuFace.js).
 *
 * COMPTEURS DE SÉRIE (25/08/2026, ajoutés avec les 5 nouveaux pouvoirs) —
 * `victoiresConsecutivesPileOuFace` / `defaitesConsecutivesPileOuFace` sur
 * etatPacksFut(uid), mis à jour à CHAQUE partie (pas seulement quand un
 * pouvoir les utilise) pour rester exacts même si le joueur change de
 * légendaire équipée en cours de route. Les pouvoirs qui en dépendent
 * ('le-jackpot', 'mise-protegee', 'serie-noire') lisent la valeur d'AVANT
 * le coup en cours (donc la série ne "s'auto-déclenche" jamais sur son
 * propre résultat).
 */
export const jouerPileOuFace = onCall({ region: REGION, memory: '256MiB', timeoutSeconds: 30 }, async (requete) => {
  if (!requete.auth) throw new HttpsError('unauthenticated', 'Connecte-toi pour jouer.')
  const uid = requete.auth.uid

  const mise = Number(requete.data?.mise)
  const choix = requete.data?.choix
  // 'main-chanceuse' : le joueur confirme explicitement qu'il consomme sa
  // relance disponible sur CE coup (jamais déclenché automatiquement) — le
  // front rappelle jouerPileOuFace une seconde fois avec ce flag après
  // avoir vu relanceDisponible:true dans la réponse d'un coup perdu.
  const utiliserRelance = requete.data?.utiliserRelance === true

  const configJeu = await chargerConfigPileOuFace()
  const pouvoirActif = await determinerPouvoirActif(uid)

  // Mise LIBRE entre 1 et le solde du joueur (25/08/2026, demandé en session :
  // "je veux aussi un sélecteur manuel si je veux miser moins que 5 ou plus
  // que 50", puis signalé le même jour : "j'ai 1500 étoiles je peux pas
  // miser 400, pas normal") — auparavant seules les valeurs EXACTES de
  // paliersAutorises étaient acceptées, puis plafonnée au plus haut PALIER
  // (50, ou 100 avec l'ancien 'sang-froid') même avec un solde largement
  // supérieur : le multiplicateur ne dépend pas de la mise donc ce plafond
  // n'apportait aucune protection, juste une limite arbitraire gênante pour
  // un gros solde. Seule borne haute réelle désormais : soldeAvant (vérifié
  // plus bas dans la transaction) — on ne peut de toute façon jamais miser
  // plus que ce qu'on possède.
  if (!Number.isInteger(mise) || mise < 1) {
    throw new HttpsError('invalid-argument', 'Mise invalide.')
  }
  if (!COTES_PAR_DEFAUT.includes(choix)) {
    throw new HttpsError('invalid-argument', 'Choix invalide.')
  }

  const refEtat = db.doc(chemins.etatPacksFut(uid))

  const resultat = await db.runTransaction(async (tx) => {
    const etatSnap = await tx.get(refEtat)
    const etat = etatSnap.exists
      ? etatSnap.data()
      : {
          soldeEtoiles: 0,
          nombrePartiesPileOuFace: 0,
          victoiresConsecutivesPileOuFace: 0,
          defaitesConsecutivesPileOuFace: 0,
          relanceMainChanceuseDisponible: false
        }
    const soldeAvant = etat.soldeEtoiles || 0
    const victoiresAvant = etat.victoiresConsecutivesPileOuFace || 0
    const defaitesAvant = etat.defaitesConsecutivesPileOuFace || 0

    // 'main-chanceuse' consommée : ne débite RIEN de plus (la mise a déjà
    // été prélevée au coup perdu qu'on relance) — seul un nouveau tirage a
    // lieu, gratuit, une seule fois par relance accordée.
    if (utiliserRelance) {
      if (pouvoirActif !== 'main-chanceuse' || !etat.relanceMainChanceuseDisponible) {
        throw new HttpsError('failed-precondition', 'Aucune relance disponible.')
      }
    } else if (soldeAvant < mise) {
      throw new HttpsError('failed-precondition', `Pas assez d'étoiles pour cette mise (${soldeAvant}/${mise}).`)
    }

    const resultatTirage = COTES_PAR_DEFAUT[Math.floor(Math.random() * COTES_PAR_DEFAUT.length)]
    const gagne = resultatTirage === choix

    const partieSuivante = (etat.nombrePartiesPileOuFace || 0) + 1

    // 'assurance-maillot' : une défaite sur deux (compteur pair/impair de
    // parties jouées, PAS un tirage aléatoire séparé — déterministe et
    // vérifiable, plutôt qu'un second hasard invisible du joueur) ne coûte
    // que la moitié de la mise.
    const assuranceDeclenchee = !gagne && pouvoirActif === 'assurance-maillot' && partieSuivante % 2 === 0

    // 'intouchable' (remplace 'sang-froid', devenu inutile le même jour où
    // la mise est passée libre) : si la partie PRÉCÉDENTE était une
    // victoire, une défaite sur CE coup ne peut pas coûter plus d'une
    // demi-mise.
    const intouchableDeclenche = !gagne && pouvoirActif === 'intouchable' && etat.derniereVictoirePileOuFace === true

    // 'mise-protegee' : deux victoires consécutives ACQUISES avant ce coup
    // protègent la mise suivante en cas de défaite (perte nulle) — la
    // protection se consomme sur ce seul coup, qu'elle serve ou non
    // (voir victoiresConsecutivesSuivant plus bas, remis à 0 après usage).
    const miseProtegeeDeclenchee = !gagne && pouvoirActif === 'mise-protegee' && victoiresAvant >= 2

    // 'le-jackpot' : multiplicateur amélioré selon la série de victoires
    // déjà en cours (0 sur la 1ère victoire d'une série, puis +0.15/+0.15…
    // plafonné). 'franc-tireur' reste un bonus fixe simple, non cumulé avec
    // le-jackpot (un seul pouvoir actif à la fois, voir determinerPouvoirActif).
    let multiplicateurEffectif = configJeu.multiplicateurGain
    if (pouvoirActif === 'franc-tireur') {
      multiplicateurEffectif = MULTIPLICATEUR_FRANC_TIREUR
    } else if (pouvoirActif === 'le-jackpot' && gagne) {
      const bonus = Math.min(BONUS_JACKPOT_MAX, victoiresAvant * BONUS_JACKPOT_PAR_VICTOIRE)
      multiplicateurEffectif = configJeu.multiplicateurGain + bonus
    } else if (pouvoirActif === 'serie-noire' && gagne) {
      // 'serie-noire' : le bonus dépend des DÉFAITES enchaînées avant cette
      // victoire (jamais déclenché sur une défaite elle-même).
      const bonus = Math.min(BONUS_SERIE_NOIRE_MAX, defaitesAvant * BONUS_SERIE_NOIRE_PAR_DEFAITE)
      multiplicateurEffectif = configJeu.multiplicateurGain + bonus
    }

    // Math.round : jamais de fraction d'étoile en base, même avec un
    // multiplicateur décimal — arrondi simple, pas de plancher/plafond
    // particulier demandé en session.
    let variation
    if (gagne) {
      variation = Math.round(mise * multiplicateurEffectif) - mise
    } else if (miseProtegeeDeclenchee) {
      variation = 0
    } else if (assuranceDeclenchee) {
      variation = -Math.round(mise / 2)
    } else if (intouchableDeclenche) {
      variation = -Math.round(mise / 2)
    } else {
      variation = -mise
    }
    const nouveauSolde = soldeAvant + variation

    // Séries mises à jour à CHAQUE partie, indépendamment du pouvoir
    // possédé (voir commentaire de fonction plus haut).
    const victoiresConsecutivesSuivant = gagne ? victoiresAvant + 1 : 0
    const defaitesConsecutivesSuivant = gagne ? 0 : defaitesAvant + 1

    // 'main-chanceuse' : une défaite avec le pouvoir actif ET pas déjà de
    // relance en attente ouvre le droit à UNE relance gratuite (le joueur
    // décide ou non de s'en servir, voir relanceDisponible dans la réponse).
    // Une victoire, ou l'usage de la relance elle-même, referme le droit.
    let relanceMainChanceuseDisponibleSuivant = etat.relanceMainChanceuseDisponible || false
    if (utiliserRelance) {
      relanceMainChanceuseDisponibleSuivant = false
    } else if (gagne) {
      relanceMainChanceuseDisponibleSuivant = false
    } else if (pouvoirActif === 'main-chanceuse') {
      relanceMainChanceuseDisponibleSuivant = true
    }

    tx.set(
      refEtat,
      {
        soldeEtoiles: nouveauSolde,
        nombrePartiesPileOuFace: partieSuivante,
        victoiresConsecutivesPileOuFace: victoiresConsecutivesSuivant,
        defaitesConsecutivesPileOuFace: defaitesConsecutivesSuivant,
        derniereVictoirePileOuFace: gagne,
        relanceMainChanceuseDisponible: relanceMainChanceuseDisponibleSuivant
      },
      { merge: true }
    )

    return {
      gagne,
      resultatTirage,
      mise,
      variation,
      nouveauSolde,
      pouvoirActif,
      assuranceDeclenchee,
      intouchableDeclenche,
      miseProtegeeDeclenchee,
      relanceDisponible: relanceMainChanceuseDisponibleSuivant,
      etaitUneRelance: utiliserRelance
    }
  })

  logger.info('Pile ou Maillot joué', {
    uid, mise, choix, gagne: resultat.gagne, variation: resultat.variation, pouvoirActif, utiliserRelance
  })
  return resultat
})

/**
 * Génère (ou renvoie, si déjà généré) le code ami de l'utilisateur —
 * choix de session : "code ami" plutôt que recherche par pseudo (les
 * pseudos ne sont pas garantis uniques dans cette app) ou lien
 * d'invitation. Le code est stocké deux fois par construction : sur
 * users/{uid}.codeAmi (lecture facile pour l'afficher) ET dans l'index
 * inversé codesAmis/{code} → uid (seul moyen de retrouver un uid à partir
 * du code saisi par un AUTRE joueur, voir ajouterAmiParCode ci-dessous).
 */
export const genererCodeAmi = onCall({ region: REGION, memory: '256MiB', timeoutSeconds: 30 }, async (requete) => {
  if (!requete.auth) throw new HttpsError('unauthenticated', 'Connecte-toi.')
  const uid = requete.auth.uid

  const refUtilisateur = db.doc(chemins.utilisateur(uid))
  const utilisateurSnap = await refUtilisateur.get()
  const codeExistant = utilisateurSnap.exists ? utilisateurSnap.data().codeAmi : null
  if (codeExistant) return { code: codeExistant }

  const pseudo = requete.auth.token.name || 'Supporter'

  // Quelques tentatives en cas de collision (peu probable sur 32^6 codes,
  // mais Firestore ne fait pas d'unicité automatique sur un id choisi côté
  // client) — la transaction garantit qu'on ne prend jamais un code déjà
  // attribué entre la lecture et l'écriture.
  for (let tentative = 0; tentative < 8; tentative++) {
    const code = genererCodeAleatoire()
    const refCode = db.doc(chemins.codeAmi(code))

    const succes = await db.runTransaction(async (tx) => {
      const existant = await tx.get(refCode)
      if (existant.exists) return false
      tx.set(refCode, { uid })
      tx.set(refUtilisateur, { codeAmi: code, pseudoAffiche: pseudo }, { merge: true })
      return true
    })

    if (succes) return { code }
  }

  throw new HttpsError('internal', 'Impossible de générer un code ami pour le moment, réessaie.')
})

/**
 * Ajoute un ami à partir de son code — écriture MUTUELLE (les deux users
 * se retrouvent chacun dans la liste d'amis de l'autre en un seul appel),
 * pas de "demande à accepter" pour cette première version : plus simple à
 * utiliser, cohérent avec l'envoi "façon cadeau" choisi en session pour
 * envoyerCarteFut (pas de négociation à deux comme un vrai échange 1-pour-1).
 */
export const ajouterAmiParCode = onCall({ region: REGION, memory: '256MiB', timeoutSeconds: 30 }, async (requete) => {
  if (!requete.auth) throw new HttpsError('unauthenticated', 'Connecte-toi.')
  const uid = requete.auth.uid
  const code = String(requete.data?.code || '').trim().toUpperCase()
  if (!code) throw new HttpsError('invalid-argument', 'Code manquant.')

  const codeSnap = await db.doc(chemins.codeAmi(code)).get()
  if (!codeSnap.exists) throw new HttpsError('not-found', "Ce code ami n'existe pas.")

  const amiUid = codeSnap.data().uid
  if (amiUid === uid) throw new HttpsError('failed-precondition', "Tu ne peux pas t'ajouter toi-même.")

  const [monSnap, amiSnap] = await Promise.all([
    db.doc(chemins.utilisateur(uid)).get(),
    db.doc(chemins.utilisateur(amiUid)).get()
  ])
  const monPseudo = requete.auth.token.name || monSnap.data()?.pseudoAffiche || 'Supporter'
  const pseudoAmi = amiSnap.data()?.pseudoAffiche || 'Supporter'

  const lot = db.batch()
  lot.set(db.doc(chemins.ami(uid, amiUid)), { pseudo: pseudoAmi, depuisLe: FieldValue.serverTimestamp() }, { merge: true })
  lot.set(db.doc(chemins.ami(amiUid, uid)), { pseudo: monPseudo, depuisLe: FieldValue.serverTimestamp() }, { merge: true })
  await lot.commit()

  logger.info('Ami ajouté', { uid, amiUid })
  return { ok: true, amiUid, pseudo: pseudoAmi }
})

/**
 * Envoie une carte à un ami — "façon cadeau" (choix de session) : pas de
 * contrepartie exigée côté destinataire. UNE règle non négociable côté
 * serveur : il faut posséder un DOUBLE (quantite ≥ 2) pour en envoyer un —
 * jamais son dernier exemplaire. Ce n'est pas explicitement ce qui a été
 * demandé, mais ça découle directement de la logique Panini invoquée en
 * session (ta collection perso ne doit jamais se vider parce que tu as
 * fait un cadeau) — à assouplir si ce n'est pas l'intention.
 *
 * NOTIFICATION + CADEAU À OUVRIR (25/08/2026, demandé en session : "quand
 * j'envoie une carte à mon ami je veux qu'il reçoive une notification...
 * une pop up stylé plein écran avec animation, un cadeau à ouvrir") — deux
 * mécanismes complémentaires écrits ici, chacun couvrant un cas que l'autre
 * ne couvre pas :
 * 1. Un doc dans cadeauxFut(amiUid) (voir chemins.cadeauFut) — capté par un
 *    onSnapshot côté client (hooks/useCadeauxFut.js) tant que l'app est
 *    ouverte, ou dès qu'elle se rouvre : c'est LUI qui déclenche la popup
 *    plein écran, pas la notification.
 * 2. Un push via envoyer() (même lib que notifications.js, message 100%
 *    data) — couvre le cas app fermée/arrière-plan, où aucun onSnapshot ne
 *    tourne. `envoyer()` (pas envoyerUneFois) : un envoi de carte est un
 *    événement unique par nature, pas un cron répété à déduppliquer.
 * Échec du push NON bloquant (best-effort, même principe que le reste de
 * l'app pour les notifications) — un push qui échoue ne doit jamais faire
 * échouer l'envoi de la carte lui-même, le cadeau reste de toute façon
 * visible via le doc cadeauxFut au prochain lancement de l'app.
 */
export const envoyerCarteFut = onCall({ region: REGION, memory: '256MiB', timeoutSeconds: 30 }, async (requete) => {
  if (!requete.auth) throw new HttpsError('unauthenticated', 'Connecte-toi.')
  const uid = requete.auth.uid
  const carteId = requete.data?.carteId
  const amiUid = requete.data?.amiUid
  if (!carteId || !amiUid) throw new HttpsError('invalid-argument', 'Carte ou ami manquant.')
  if (amiUid === uid) throw new HttpsError('failed-precondition', "Tu ne peux pas t'envoyer une carte à toi-même.")

  const amiSnap = await db.doc(chemins.ami(uid, amiUid)).get()
  if (!amiSnap.exists) throw new HttpsError('permission-denied', "Vous n'êtes pas amis.")

  const [monSnap, carteSnap] = await Promise.all([
    db.doc(chemins.utilisateur(uid)).get(),
    db.doc(chemins.carteFut(carteId)).get()
  ])
  const monPseudo = requete.auth.token.name || monSnap.data()?.pseudoAffiche || 'Un ami'
  const nomCarte = carteSnap.exists ? carteSnap.data().nom : null

  const refEnvoyeur = db.doc(chemins.carteCollectionFut(uid, carteId))
  const refDestinataire = db.doc(chemins.carteCollectionFut(amiUid, carteId))
  const refCadeau = db.collection(chemins.cadeauxFut(amiUid)).doc()

  await db.runTransaction(async (tx) => {
    const snapEnvoyeur = await tx.get(refEnvoyeur)
    const quantite = snapEnvoyeur.exists ? snapEnvoyeur.data().quantite || 0 : 0

    if (quantite < 2) {
      throw new HttpsError('failed-precondition', "Tu n'as pas de double de cette carte à envoyer.")
    }

    const snapDestinataire = await tx.get(refDestinataire)
    const dejaPossedee = snapDestinataire.exists && (snapDestinataire.data().quantite || 0) > 0

    tx.set(refEnvoyeur, { quantite: FieldValue.increment(-1) }, { merge: true })
    tx.set(
      refDestinataire,
      {
        quantite: FieldValue.increment(1),
        dernierGainLe: FieldValue.serverTimestamp(),
        ...(dejaPossedee ? {} : { obtenueLe: FieldValue.serverTimestamp() })
      },
      { merge: true }
    )
    tx.set(refCadeau, {
      carteId,
      deUid: uid,
      dePseudo: monPseudo,
      envoyeLe: FieldValue.serverTimestamp(),
      ouvertLe: null
    })
  })

  try {
    await envoyer(amiUid, {
      titre: 'Un cadeau !',
      corps: nomCarte ? `${monPseudo} t'a envoyé ${nomCarte} 🎁` : `${monPseudo} t'a envoyé une carte 🎁`,
      lien: '/packs',
      etiquette: `cadeau_${refCadeau.id}`
    })
  } catch (e) {
    logger.warn('Push cadeau carte FUT échoué (non bloquant)', { amiUid, message: e.message })
  }

  logger.info('Envoi carte FUT', { de: uid, vers: amiUid, carteId })
  return { ok: true }
})
