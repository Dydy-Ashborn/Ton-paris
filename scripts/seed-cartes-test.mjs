/**
 * Amorce 4 cartes FACTICES (une par palier de rareté) pour le mode debug
 * (voir functions/packsFut.js, ouvrirPackFutDebug) — jamais mélangées au
 * vrai catalogue : `actif: false` (exclues de la requête catalogue normale,
 * voir hooks/useCartesFut.js) et `test: true` (seul filtre que
 * ouvrirPackFutDebug utilise pour piocher).
 *
 * imageFond/imageJoueur/imageJoueurCadrage/nation/ligue/club : PAS de valeur en dur ici (pas de
 * vraie image "de test" disponible) — empruntés à une VRAIE carte du
 * catalogue (actif:true) de la même rareté, au moment de l'amorçage. Corrige
 * "toujours pas de visuel sur les cartes de test" : CarteFut.jsx (voir
 * components/CarteFut.jsx) ne rend le fond/joueur QUE si ces champs sont
 * non-nuls, or ils étaient codés en dur à `null` ici → carte vide à l'écran.
 * Repli sur N'IMPORTE QUELLE carte réelle si aucune de la rareté exacte
 * n'est encore scrapée (ex. aucune légendaire), pour ne jamais laisser une
 * carte de test sans visuel juste par manque de correspondance de palier.
 *
 * Lancement : node scripts/seed-cartes-test.mjs
 * Requiert cle-service.json à la racine (voir scripts/lib/admin.mjs).
 * Nécessite qu'au moins une vraie carte ait déjà été importée (voir
 * scripts/importer-cartes-fut.mjs) — sinon les champs visuels retombent sur
 * null, comme avant.
 */
import { initFirebaseAdmin, TENANT_ID } from './lib/admin.mjs'

const db = initFirebaseAdmin()

/** Une vraie carte (actif:true) de la rareté demandée, ou n'importe laquelle
 * en repli — seuls les champs visuels/cosmétiques nous intéressent ici,
 * jamais la note/les stats (qui restent celles, fictives, de CARTES_TEST). */
function choisirCarteVisuelle(cartesReelles, rarete) {
  return cartesReelles.find((c) => c.rarete === rarete) || cartesReelles[0] || null
}

const CARTES_TEST = [
  {
    id: 'test_commune', rarete: 'commune', note: 65,
    nom: '[TEST] Carte Commune', position: 'ST',
    stats: { pac: 65, sho: 63, pas: 60, dri: 64, def: 30, phy: 68 },
    couleurTexte: '#F3F6FA', couleurAccentFond: 'rgba(125,154,184,0.35)', couleurAccentBordure: '#7D9AB8'
  },
  {
    id: 'test_rare', rarete: 'rare', note: 80,
    nom: '[TEST] Carte Rare', position: 'MC',
    stats: { pac: 78, sho: 74, pas: 80, dri: 79, def: 55, phy: 72 },
    couleurTexte: '#F3F6FA', couleurAccentFond: 'rgba(90,160,230,0.35)', couleurAccentBordure: '#5aa0e6'
  },
  {
    id: 'test_epique', rarete: 'epique', note: 88,
    nom: '[TEST] Carte Épique', position: 'AG',
    stats: { pac: 91, sho: 85, pas: 82, dri: 89, def: 40, phy: 75 },
    couleurTexte: '#F3F6FA', couleurAccentFond: 'rgba(160,107,239,0.35)', couleurAccentBordure: '#a06bef'
  },
  {
    id: 'test_legendaire', rarete: 'legendaire', note: 95,
    nom: '[TEST] Carte Légendaire', position: 'BU',
    stats: { pac: 96, sho: 95, pas: 88, dri: 94, def: 45, phy: 85 },
    couleurTexte: '#F3F6FA', couleurAccentFond: 'rgba(207,172,93,0.35)', couleurAccentBordure: '#cfac5d'
  }
]

async function amorcer() {
  const refCatalogue = db.collection(`tenants/${TENANT_ID}/cartesFut`)

  const snapReel = await refCatalogue.where('actif', '==', true).get()
  const cartesReelles = snapReel.docs.map((d) => d.data())
  if (cartesReelles.length === 0) {
    console.warn(
      "Aucune vraie carte (actif:true) trouvée — les cartes de test seront amorcées sans visuel " +
      "(imageFond/imageJoueur à null), comme avant. Importe d'abord le catalogue réel " +
      '(scripts/importer-cartes-fut.mjs) puis relance ce script pour leur donner un visuel.'
    )
  }

  const lot = db.batch()
  for (const carte of CARTES_TEST) {
    const source = choisirCarteVisuelle(cartesReelles, carte.rarete)

    lot.set(refCatalogue.doc(carte.id), {
      ...carte,
      saison: 'test',
      test: true,
      actif: false,
      positionsAlt: [],
      variante: 'test',
      roleplus: false,
      pied: null,
      competences: null,
      piedFaible: null,
      noteFutbin: null,
      imageFond: source?.imageFond || null,
      imageJoueur: source?.imageJoueur || null,
      // Emprunté avec imageJoueur (voir plus haut) — sans ce champ, la carte
      // de test appliquait le cadrage "plein cadre" par défaut même quand
      // la vraie carte source empruntée est une base-img (portrait cadré),
      // faisant déborder la photo sur toute la carte (bug signalé en
      // session sur [TEST] Carte Commune, voir CarteFut.css).
      imageJoueurCadrage: source?.imageJoueurCadrage || null,
      nation: source?.nation || null,
      ligue: source?.ligue || null,
      club: source?.club || null,
      majLe: new Date()
    }, { merge: true })
  }
  await lot.commit()
  console.log(`${CARTES_TEST.length} carte(s) de test amorcée(s) dans cartesFut (test:true, actif:false).`)
}

amorcer().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1) })
