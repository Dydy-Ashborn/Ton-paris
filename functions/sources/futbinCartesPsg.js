import * as cheerio from 'cheerio'
import { recupererHtml } from '../lib/http.js'

// URL donnée en session (page club, plus fiable que l'ancienne URL
// "players?team=73" devinée) — reste "best-effort" côté SCRAPING SERVEUR
// direct (recupererHtml, un simple fetch HTTP) : voir l'avertissement sur
// extraireCartes ci-dessous, FUTBIN est une appli dynamique et rien ne
// garantit qu'un fetch brut serve le même contenu que la page une fois le
// JS exécuté. Surchargeable sans redéployer via config/packsFut.urlFutbin
// (voir scraperCartesFutPsg) si l'id d'équipe ou le chemin change. Pour un
// import fiable en attendant de confirmer le scraping direct, voir
// scripts/tampermonkey-futbin-psg.user.js + scripts/importer-cartes-fut.mjs
// (capture le HTML déjà rendu dans le navigateur, extraireCartes ci-dessous
// est exactement la même fonction utilisée dans les deux cas).
const URL_FUTBIN_PSG_PAR_DEFAUT = 'https://www.futbin.com/26/clubs/73/Paris%20SG'

// "26" dans l'URL ci-dessus = EA FC 26 = saison 2025/26 (demandé en
// session : système d'année façon Panini, une page/album par saison).
// Change quand futbin publie l'édition suivante — voir config/packsFut.saison.
const SAISON_PAR_DEFAUT = '2025-26'

// gold/silver/bronze : les TROIS paliers "carte normale" de FUT (confirmé
// sur l'export fourni en session, fichiers de fond "1_gold.png",
// "0_silver.png", "1_bronze.png"...) — tout le reste du nom de fichier de
// fond ("summer_stars_winners", "futties", "ucl_rttf"...) désigne une carte
// spéciale/promo. Sert de base par défaut à config/packsFut si ce doc
// n'existe pas encore (voir calculerRarete plus bas).
export const MOTIFS_CARTE_BASE_PAR_DEFAUT = ['gold', 'silver', 'bronze']

// Ligues féminines connues — le PSG a une section féminine (Arkema Première
// Ligue) en plus de l'équipe masculine (Ligue 1) ; une page club scrapée
// peut mélanger les deux effectifs. Exclues du catalogue (demandé en
// session : "on supprime les cartes féminines... on les récupère plus"),
// reconnues par le nom de la ligue (comparaison insensible à la casse,
// substring — pas d'ID FUTBIN de ligue connu/documenté publiquement). Liste
// à élargir si un futur import laisse passer une autre compétition féminine.
export const LIGUES_FEMININES = ['arkema premiere ligue', 'arkema première ligue', 'd1 arkema', "women's super league", 'womens super league', 'liga f', 'frauen-bundesliga', 'serie a femminile']

// Seuils resserrés une seconde fois (25/08/2026, demandé en session avec
// les chiffres réels après le premier ajustement 92→96 : encore 37/130
// légendaires ≈28% et 60/130 épiques ≈46%, trop loin d'un ratio FUT normal
// où légendaire = une poignée de cartes). 96 → 97 pour légendaire (garde
// les 97-99 : TOTY/Glory Hunters/FoF Phenoms/Star Performer/Futties, ≈16
// cartes), 85 → 90 pour épique (resserre aussi ce palier en cascade).
const PALIERS_NOTE = [
  { rarete: 'legendaire', min: 97 },
  { rarete: 'epique', min: 90 },
  { rarete: 'rare', min: 75 },
  { rarete: 'commune', min: 0 }
]
export const ORDRE_RARETE = ['commune', 'rare', 'epique', 'legendaire']

function paletteParNote(note) {
  return PALIERS_NOTE.find((p) => note >= p.min)?.rarete || 'commune'
}

/**
 * Rareté sur la SEULE note (25/08/2026, REVU en session — signalé avec les
 * vrais chiffres : "80 cartes légendaires sur 126 c'est énorme"). Avant ce
 * correctif, note ET variante combinées : toute carte qui n'était pas un
 * gold/silver/bronze de base (ex. spéciale/promo) montait d'UN palier
 * automatiquement — hors sur l'effectif PSG scrapé, la majorité des cartes
 * SONT des variantes spéciales (109 special-img sur 185 au dernier import,
 * voir extraireCartes ci-dessous), donc ce bonus faisait basculer la
 * plupart du catalogue en légendaire quasi peu importe la note réelle
 * (63 % du catalogue actif au moment du signalement). Un bonus censé
 * distinguer une poignée de cartes rares finissait par s'appliquer à la
 * majorité — l'inverse de l'effet recherché. `variante`/`motifsBase`
 * restent en paramètres (appelants existants non cassés, motifsBase encore
 * lu depuis config/packsFut) mais ne sont plus utilisés dans le calcul —
 * gardés pour ne pas casser la signature plutôt que par besoin réel.
 *
 * IMPORTANT : ne recalcule que les FUTURS imports (scripts/importer-cartes-
 * fut.mjs). Les cartes déjà en base gardent l'ancienne rareté tant qu'on ne
 * relance pas un import, ou tant que scripts/recalculer-raretes.mjs (script
 * de migration écrit pour ce correctif) n'est pas exécuté.
 */
export function calculerRarete(note, variante, motifsBase = MOTIFS_CARTE_BASE_PAR_DEFAUT) {
  return paletteParNote(note)
}

function extraireVariante(urlFond) {
  // "https://.../78_summer_stars_winners.png?fm=png&..." → "summer_stars_winners"
  // "https://.../1_gold.png?..." → "gold"
  // Le suffixe "(1)"/"(2)" avant l'extension est retiré séparément : il
  // n'existe QUE dans un export HTML sauvegardé depuis le navigateur (renommage
  // des fichiers dupliqués), jamais dans une vraie URL CDN FUTBIN — mais un
  // fichier de test fourni en session en contenait, donc on le neutralise ici
  // pour rester correct dans les deux cas plutôt que de compter sur le fait
  // qu'un scraping en direct ne le rencontrera pas.
  const nomFichier = String(urlFond || '').split('/').pop()?.split('?')[0] || ''
  const sansDoublon = nomFichier.replace(/\(\d+\)(\.\w+)$/i, '$1')
  const m = sansDoublon.match(/^\d+_(.+?)\.png$/i)
  return m ? m[1] : sansDoublon.replace(/\.png$/i, '') || 'inconnue'
}

function slugifie(texte) {
  return String(texte)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/**
 * URL d'image réelle d'un <img> : `srcset` en priorité, PAS `src`.
 * Sur un export HTML sauvegardé depuis le navigateur (le fichier de test
 * fourni en session), `src` est réécrit vers un chemin local relatif
 * ("./xxx_files/p117666783.png") mais `srcset` conserve la vraie URL CDN
 * FUTBIN d'origine ("https://cdn3.futbin.com/.../p117666783.png?...")  —
 * en scraping direct les deux seraient de toute façon identiques (à la
 * résolution près), donc ce choix reste correct dans les deux cas.
 */
function urlImage(el) {
  const srcset = el.attr('srcset')
  if (srcset) return srcset.trim().split(/\s+/)[0]
  return el.attr('src') || null
}

/** Parse les propriétés custom CSS ("--nom: valeur") d'un attribut style
 * en objet {nom: valeur} — utilisé pour les couleurs par carte (texte,
 * accent), qui viennent du style inline FUTBIN plutôt que d'une classe. */
function extraireProprietesCss(styleAttr) {
  const proprietes = {}
  for (const m of String(styleAttr || '').matchAll(/--([a-zA-Z-]+)\s*:\s*([^;]+);?/g)) {
    proprietes[m[1]] = m[2].trim()
  }
  return proprietes
}

/**
 * Extrait les cartes joueurs depuis le HTML d'une page FUTBIN "players"
 * (structure `.playercard-26-*`, confirmée à la fois sur l'export réel
 * fourni en session — 183 cartes PSG extraites avec succès — et sur le
 * balisage d'une carte individuelle donné ensuite pour caler le rendu
 * visuel : couleurs, images nation/ligue/club, pied, compétences...).
 *
 * RISQUE CONNU, à valider au premier vrai déploiement : FUTBIN est une
 * application dynamique. Rien ne garantit que la réponse HTTP brute (celle
 * que `recupererHtml` récupère) contient déjà ce balisage — l'export fourni
 * en session est une page sauvegardée depuis le navigateur APRÈS exécution
 * du JS, pas une réponse serveur brute. Si `extraireCartes` renvoie un
 * tableau vide en production, c'est le signal que FUTBIN ne sert pas ce
 * contenu côté serveur et qu'un scraping direct ne suffit pas (prévoir un
 * repli : navigateur headless, ou réinjection manuelle du HTML comme pour
 * scripts/maj-photos-effectif.mjs) — voir collecteCartesFut.js, qui refuse
 * justement d'écraser le catalogue existant si 0 carte est trouvée.
 */
export function extraireCartes(html, { motifsBase = MOTIFS_CARTE_BASE_PAR_DEFAUT, saison = SAISON_PAR_DEFAUT } = {}) {
  const $ = cheerio.load(html)
  const vues = new Set()
  const cartes = []

  $('.playercard-26').each((_, el) => {
    const carte = $(el)
    const nom = carte.find('.playercard-26-name').first().text().trim()
    const noteTexte = carte.find('.playercard-26-rating').first().text().trim()
    const position = carte.find('.playercard-26-position').first().text().trim()
    if (!nom || !noteTexte || !position) return

    const note = parseInt(noteTexte, 10)
    if (!Number.isFinite(note)) return

    const noteFutbinTexte = carte.find('.playercard-26-futbin-rating').first().text().trim()
    const noteFutbin = noteFutbinTexte ? parseFloat(noteFutbinTexte) : null

    const positionsAlt = carte
      .find('.playercard-26-alt-pos-sub')
      .map((__, e) => $(e).text().trim())
      .get()
      .filter(Boolean)

    const stats = {}
    carte.find('.playercard-26-stats').each((__, statEl) => {
      const nombre = $(statEl).find('.playercard-26-stat-number').first().text().trim()
      const cle = $(statEl).find('.playercard-26-stat-value').first().text().trim().toLowerCase()
      if (cle && nombre) stats[cle] = parseInt(nombre, 10)
    })

    const imgFond = carte.find('img.playercard-26-bg').first()
    const imageFond = urlImage(imgFond)
    const variante = extraireVariante(imageFond || imgFond.attr('src'))

    // "-base-img" (carte normale) et "-special-img" (carte spéciale/promo)
    // sont les DEUX seules classes réellement utilisées par FUTBIN pour le
    // visuel joueur ("-img" seul n'existe pas) — confirmé sur l'export de
    // session : 185 cartes = 109 special-img + 76 base-img, aucune autre
    // classe. Le sélecteur ne couvrait QUE "-special-img" jusqu'ici, d'où
    // imageJoueur toujours null pour toute carte "normale" (non spéciale) —
    // ex. Mayulu (carte gold classique) sans visuel joueur en jeu alors que
    // le fond s'affichait bien.
    //
    // BUG CORRIGÉ (25/08/2026, signalé en session sur une carte de test
    // ayant emprunté le visuel d'une vraie carte "base-img") : les deux
    // classes n'ont PAS le même cadrage sur FUTBIN et le front (CarteFut.css)
    // les affichait toutes les deux en plein cadre (inset:0). Confirmé sur
    // l'export JSON précis fourni en session (coordonnées réelles) :
    // special-img est bien en plein cadre (top/left=0, width/height≈100%,
    // une silhouette détourée pensée pour couvrir toute la carte), mais
    // base-img est un PORTRAIT cadré dans une zone restreinte, centrée dans
    // le tiers supérieur (top≈17.4%, left≈22%, width≈64.3%, height≈45.7%) —
    // en plein cadre comme special-img, ce portrait déborde et remonte trop
    // haut (visage étiré sur toute la largeur). imageJoueurCadrage distingue
    // les deux pour que CarteFut.jsx/css applique le bon positionnement.
    const imgSpecial = carte.find('img.playercard-26-special-img').first()
    const imgBase = carte.find('img.playercard-26-base-img').first()
    const imgJoueur = imgSpecial.length ? imgSpecial : imgBase
    const imageJoueur = urlImage(imgJoueur)
    const imageJoueurCadrage = imgSpecial.length ? 'plein' : (imgBase.length ? 'buste' : null)
    const idJoueurMatch = String(imgJoueur.attr('src') || imageJoueur || '').match(/\/p(\d+)\.(?:png|webp)/)
    const joueurId = idJoueurMatch ? idJoueurMatch[1] : null

    const titreComplet = carte.attr('title') || null
    const varianteSlug = slugifie(variante)
    const idBase = joueurId ? `${joueurId}_${varianteSlug}` : slugifie(`${nom}-${note}-${varianteSlug}`)
    const carteId = `${saison}_${idBase}`

    if (vues.has(carteId)) return
    vues.add(carteId)

    // Couleurs : --cardColor/--ratingColor sont systématiquement identiques
    // sur toutes les cartes observées (texte qui s'adapte au fond) — un
    // seul champ couleurTexte suffit. --extra-info-bg/border (toujours
    // présent, contrairement à --alt-pos-* qui n'existe pas pour un joueur
    // sans position alternative) sert d'accent (fond des badges/pastilles).
    const couleursCarte = extraireProprietesCss(carte.attr('style'))
    const couleursAccent = extraireProprietesCss(carte.find('.playercard-26-extra-info').first().attr('style'))

    const itemsExtraInfo = carte.find('.playercard-26-extra-info-basic-item')
    const pied = itemsExtraInfo.eq(0).text().trim() || null
    const competences = parseInt(carte.find('.playercard-26-right-skills').first().text().trim(), 10) || null
    // Le 3e item basic-info contient à la fois le chiffre du pied faible ET
    // le SVG de pied — .text() sur l'élément entier inclut aussi le texte
    // (vide) du <svg>, mais parseInt s'arrête au premier caractère non
    // numérique donc récupère bien le chiffre seul.
    const piedFaible = parseInt(itemsExtraInfo.eq(2).text().trim(), 10) || null
    const roleplus = carte.find('.playercard-26-role-plus').length > 0

    const ligneInfos = carte.find('.playercard-26-info-row').first()
    const imgNation = ligneInfos.find('img.nation').first()
    const imgLigue = ligneInfos.find('img.playercard-26-league').first()
    const imgClub = ligneInfos.find('img.playercard-26-club').first()

    // Exclusion cartes féminines (voir LIGUES_FEMININES ci-dessus) — avant
    // le push, pour qu'elles ne soient jamais écrites en base, ni comptées
    // dans idBase/vues (une carte exclue ne doit pas non plus bloquer un id
    // qu'une carte masculine légitime pourrait vouloir utiliser).
    const ligueNom = imgLigue.attr('title') || imgLigue.attr('alt') || null
    if (ligueNom && LIGUES_FEMININES.some((l) => ligueNom.toLowerCase().includes(l))) return

    cartes.push({
      id: carteId,
      saison,
      joueurId,
      nom,
      titreComplet,
      note,
      noteFutbin: Number.isFinite(noteFutbin) ? noteFutbin : null,
      position,
      positionsAlt,
      stats,
      variante,
      rarete: calculerRarete(note, variante, motifsBase),
      roleplus,
      pied,
      competences,
      piedFaible,
      couleurTexte: couleursCarte.ratingColor || couleursCarte.cardColor || '#FFFFFF',
      couleurAccentFond: couleursAccent['extra-info-bg'] || null,
      couleurAccentBordure: couleursAccent['extra-info-border'] || couleursCarte.ratingColor || '#FFFFFF',
      imageFond,
      imageJoueur,
      imageJoueurCadrage,
      nation: imgNation.length ? { nom: imgNation.attr('title') || imgNation.attr('alt') || null, image: urlImage(imgNation) } : null,
      ligue: imgLigue.length ? { nom: imgLigue.attr('title') || imgLigue.attr('alt') || null, image: urlImage(imgLigue) } : null,
      club: imgClub.length ? { nom: imgClub.attr('title') || imgClub.attr('alt') || null, image: urlImage(imgClub) } : null
    })
  })

  return cartes
}

/**
 * `urlPersonnalisee`/`saison` permettent de corriger l'URL FUTBIN ou de
 * scraper une autre édition sans redéployer (voir config/packsFut.urlFutbin
 * et config/packsFut.saison, lus par collecteCartesFut.js) tant que les
 * valeurs par défaut ci-dessus ne sont pas confirmées.
 */
export async function scraperCartesFutPsg({ urlPersonnalisee, motifsBase, saison } = {}) {
  const html = await recupererHtml(urlPersonnalisee || URL_FUTBIN_PSG_PAR_DEFAUT)
  return extraireCartes(html, { motifsBase, saison })
}

export { URL_FUTBIN_PSG_PAR_DEFAUT, SAISON_PAR_DEFAUT }
