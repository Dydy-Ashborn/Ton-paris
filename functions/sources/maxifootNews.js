import { recupererHtml } from '../lib/http.js'

const URL_INFOS = 'https://news.maxifoot.fr/info-football.php'
const URL_TRANSFERTS = 'https://news.maxifoot.fr/infos-football.php'
const CLUB_LABEL_PSG = 'psg'
const NOM_SOURCE = 'Maxifoot'
const SOURCE_ID = 'maxifoot-news'

function nettoyerTexte(html) {
  return String(html)
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&eacute;/g, 'é')
    .replace(/&egrave;/g, 'è')
    .replace(/&agrave;/g, 'à')
    .replace(/&ccedil;/g, 'ç')
    .replace(/&ecirc;/g, 'ê')
    .replace(/&ocirc;/g, 'ô')
    .replace(/&icirc;/g, 'î')
    .replace(/&ucirc;/g, 'û')
    .replace(/&euml;/g, 'ë')
    .replace(/&iuml;/g, 'ï')
    .replace(/&euro;/g, '€')
    .replace(/&rsquo;/g, '’')
    .replace(/&lsquo;/g, '‘')
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–')
    .replace(/&hellip;/g, '…')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, '’')
    // Entités numériques génériques (ex. &#128221; pour 📝) : toute entité
    // décimale non gérée explicitement ci-dessus passe par le code point
    // Unicode correspondant plutôt que de rester affichée telle quelle.
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

/**
 * Retire les embeds de réseaux sociaux (Twitter/X, Instagram) du HTML brut
 * AVANT extraction du texte : Maxifoot les insère directement dans le flux
 * éditorial (un <blockquote class=twitter-tweet> reprenant le texte du
 * tweet, l'auteur et la date, suivi du <script> widgets.js qui le rend),
 * ce qui produisait un texte parasite du type "…&mdash; Paris
 * Saint-Germain (@PSG_inside) August 23, 2026" à la suite du paragraphe
 * qui précède l'embed dans l'article.
 */
function retirerEmbedsReseauxSociaux(html) {
  return html
    .replace(/<blockquote[^>]*class="?[^"]*twitter-tweet[^"]*"?[^>]*>[\s\S]*?<\/blockquote>/g, '')
    .replace(/<blockquote[^>]*class="?[^"]*instagram-media[^"]*"?[^>]*>[\s\S]*?<\/blockquote>/g, '')
    .replace(/<script[^>]*src="?[^"]*platform\.twitter\.com[^"]*"?[^>]*><\/script>/g, '')
    .replace(/<script[^>]*src="?[^"]*instagram\.com\/embed[^"]*"?[^>]*><\/script>/g, '')
}

/** Identifiant stable dérivé du lien de l'article (même logique que le RSS et maxifootPsg). */
function identifiantDepuisLien(lien) {
  return lien
    .split('?')[0]
    .replace(/^https?:\/\//, '')
    .replace(/[^a-zA-Z0-9]/g, '_')
    .slice(0, 180)
}

/**
 * Extrait les entrées d'une des deux listes de news.maxifoot.fr (structure
 * identique pour "INFOS 24h/24" et "TRANSFERTS", seule l'URL diffère).
 * Chaque entrée est un unique <a id=nXXXXX href="...club/....htm?...">
 * dont le contenu commence toujours par <i>Club</i>: puis le titre — ce
 * marqueur suffit à extraire une entrée sans dépendre de la structure
 * (potentiellement non fermée) des <tr>/<td> qui l'entourent.
 *
 * L'attribut id apparaît tantôt entre guillemets (id="n462205", sur les
 * pages de liste dédiées), tantôt sans (id=n462211, sur la copie du même
 * widget embarquée en bas des pages d'article) : le \b?"?...\b?"? tolère
 * les deux formes.
 *
 * Ne donne que l'heure relative ("11h41" aujourd'hui, "20/08" les jours
 * précédents, sans année) et pas de résumé : voir extraireArticle pour la
 * date exacte et le corps du texte, à récupérer par un second fetch sur la
 * page de l'article — mais seulement pour les nouveaux articles PSG,
 * jamais tout le flux (la dédup en amont limite le nombre d'articles
 * réellement PSG et nouveaux à chaque passage).
 */
export function extraireListe(html) {
  const entrees = [...html.matchAll(
    /<a[^>]*\bid="?n(\d+)"?[^>]*href="([^"]+)"[^>]*><i>([^<]*)<\/i>\s*:\s*([\s\S]*?)<\/a>/g
  )]

  return entrees.map(([, id, hrefBrut, clubBrut, titreBrut]) => ({
    id,
    lien: hrefBrut.startsWith('http') ? hrefBrut : `https://news.maxifoot.fr${hrefBrut}`,
    club: nettoyerTexte(clubBrut),
    titre: nettoyerTexte(titreBrut)
  }))
}

function estPsg(club) {
  return club.trim().toLowerCase() === CLUB_LABEL_PSG
}

// Codes utilisés par Maxifoot comme tag <i>Club</i> pour les brèves de type
// "match" (résultat, compo probable/officielle) À LA PLACE d'un nom de
// club — liste FERMÉE plutôt qu'un motif générique "2-4 caractères", pour
// ne jamais laisser passer par erreur un vrai sigle de club court (OM, OL,
// ASSE...) qui mentionnerait le PSG en passant.
const CODES_COMPETITION = new Set(['l1', 'l2', 'c1', 'c2', 'cdf', 'cdl', 'ldc', 'el'])

// "psg" / "paris sg" / "paris saint-germain", tolérant l'espace ou le tiret
// dans "saint germain".
const MOTIF_MENTION_PSG = /\bpsg\b|paris\s*sg\b|paris\s*saint[- ]germain/i

/**
 * BUG CORRIGÉ (signalé en session : "aucune compo récupérée pour PSG-Rennes").
 * Vérifié en direct sur news.maxifoot.fr : une brève de MATCH (résultat,
 * compo probable, compo officielle) n'est PAS taguée <i>PSG</i> même quand
 * le PSG y est un des deux protagonistes — elle est taguée par le CODE DE
 * COMPÉTITION, ex. "L1 : Rennes-Paris SG, les compos" et "L1 : Rennes 2-2
 * Paris SG (fini)" portent toutes les deux club="L1", jamais "psg". Seules
 * les brèves à sujet unique (interview, mercato, actu club...) portent le
 * vrai tag "PSG". estPsg() seul filtrait donc silencieusement TOUTE brève
 * de match — compo comprise — ce qui explique le signalement : la compo
 * probable ET officielle avaient bien été publiées par Maxifoot, mais
 * n'atteignaient jamais listerNewsPsg() pour que collecteCompoPsg.js les
 * détecte. On élargit donc le filtre au TITRE quand le tag n'est pas "psg"
 * mais ressemble à un code de compétition connu.
 */
function concernePsg(entree) {
  if (estPsg(entree.club)) return true
  return CODES_COMPETITION.has(entree.club.trim().toLowerCase()) && MOTIF_MENTION_PSG.test(entree.titre)
}

/**
 * Liste combinée des deux flux (infos générales + transferts), filtrée au
 * PSG et dédoublonnée par id : un même article peut apparaître dans les
 * deux listes (ex. une actu de transfert reprise aussi dans le flux
 * général).
 */
export async function listerNewsPsg() {
  const [htmlInfos, htmlTransferts] = await Promise.all([
    recupererHtml(URL_INFOS),
    recupererHtml(URL_TRANSFERTS)
  ])

  const toutes = [...extraireListe(htmlInfos), ...extraireListe(htmlTransferts)]

  const parId = new Map(toutes.filter(concernePsg).map((e) => [e.id, e]))
  return [...parId.values()]
}

/**
 * Extrait le premier bloc JSON-LD d'un @type donné dans une page (il peut
 * y en avoir plusieurs, ex. NewsArticle + BreadcrumbList sur les pages
 * d'article, et chaque <script> peut lui-même contenir soit un objet
 * unique soit un tableau d'objets). Renvoie l'objet trouvé ou null si
 * absent/invalide — on ne fait jamais confiance aveuglément à du JSON
 * venu d'une page externe.
 */
function extraireJsonLd(html, type) {
  const blocs = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]

  for (const [, brut] of blocs) {
    let donnees
    try {
      donnees = JSON.parse(brut.trim())
    } catch {
      continue // Bloc JSON-LD malformé ou tronqué : on l'ignore et on continue.
    }

    const candidats = Array.isArray(donnees) ? donnees : [donnees]
    const trouve = candidats.find((c) => c && c['@type'] === type)
    if (trouve) return trouve
  }

  return null
}

/**
 * Corps de l'article : le texte visible dans <div id=cont12> est plus
 * complet que la description JSON-LD (celle-ci est tronquée avec "...").
 *
 * Deux pièges rencontrés et corrigés :
 *
 * 1. Tout le texte de l'article n'est pas dans des <p class=parN> — le
 *    dernier paragraphe se retrouve parfois en texte flottant directement
 *    dans le <div>, sans balise à lui (ex. "Le gros bémol dans la
 *    candidature du Géorgien ?...").
 *
 * 2. Le bloc de signature <div class=aut1>...</div><br class=aut1> est
 *    imbriqué À L'INTÉRIEUR de cont12, juste avant sa fermeture — un
 *    <div id=cont12>([\s\S]*?)<\/div> non-gourmand s'arrête donc sur le
 *    PREMIER </div> rencontré, qui est celui d'aut1, pas celui de cont12
 *    (les deux </div> se suivent immédiatement, mais un match non-gourmand
 *    ne le sait pas et peut aussi bien déborder jusqu'à un </div> beaucoup
 *    plus loin dans la page si celui d'aut1 ne suit pas le schéma attendu).
 *    On repère donc explicitement <br class=aut1> comme fin de contenu
 *    (marqueur fiable observé sur toutes les pages testées), on ne prend
 *    que le HTML AVANT lui, puis on retire le bloc aut1 qui s'y trouve
 *    avant d'en extraire le texte (signature, compteur de lecture, lien
 *    d'impression — jamais du contenu éditorial).
 *
 * Piège supplémentaire rencontré et corrigé : Maxifoot ne met pas
 * systématiquement de guillemets autour de ses attributs — `id=cont12`
 * sur certaines pages, `id="cont12"` sur d'autres ; `class=aut1` ou
 * `class="aut1"`. Toutes les recherches ci-dessous tolèrent donc les deux
 * formes (mêmes principe déjà appliqué à l'attribut id du widget de liste,
 * voir extraireListe).
 */
function extraireCorps(html) {
  const debutMatch = html.match(/<div id="?cont12"?>/)
  if (!debutMatch) return null
  const debut = debutMatch.index

  const finMatch = html.slice(debut).match(/<br class="?aut1"?>/)
  if (!finMatch) return null
  const fin = debut + finMatch.index

  const brut = html.slice(debut + debutMatch[0].length, fin)
  const sansSignature = brut.replace(/<div class="?aut1"?>[\s\S]*?<\/div>\s*$/, '')
  const sansEmbeds = retirerEmbedsReseauxSociaux(sansSignature)

  // Chaque <p>...</p> devient un bloc à part (une ligne vide entre eux
  // dans le texte final) ; le texte flottant entre deux </p> ou après le
  // dernier est conservé tel quel, comme partie du paragraphe qui précède.
  const blocs = sansEmbeds
    .split(/(<p[^>]*>[\s\S]*?<\/p>)/)
    .map((bloc) => nettoyerTexte(bloc))
    .filter(Boolean)

  const texte = blocs.join('\n\n')
  return texte || null
}

/**
 * Parse une page d'article news.maxifoot.fr. Source principale : le bloc
 * JSON-LD NewsArticle (headline, datePublished, description, image.url,
 * author.name) — bien plus fiable qu'un scraping du DOM visible, et
 * fournit une date exacte (contrairement à la fiche club PSG classique,
 * qui ne donne qu'une date relative). Le corps complet vient du DOM
 * visible, la description JSON-LD étant tronquée.
 */
export function extraireArticle(html) {
  const article = extraireJsonLd(html, 'NewsArticle')

  const titre = article?.headline ? nettoyerTexte(article.headline) : null
  const resume = article?.description ? nettoyerTexte(article.description) : null
  const image = article?.image?.url || null
  const auteur = article?.author?.name || null
  // Maxifoot produit un format non-standard, ex. "2026-08-20T20:37:00Z+01:00"
  // (Z ET un offset en même temps, ce qu'ISO 8601 interdit) : Date le
  // rejette tel quel, donc on retire le Z superflu avant de parser.
  const publieLeBrut = article?.datePublished?.replace(/Z(?=[+-]\d{2}:\d{2}$)/, '') || null
  const publieLe = publieLeBrut ? new Date(publieLeBrut) : null

  return {
    titre,
    resume,
    corps: extraireCorps(html),
    image,
    auteur,
    publieLe: publieLe && !Number.isNaN(publieLe.getTime()) ? publieLe : null
  }
}

/** Récupère et parse une page d'article à partir de son URL. */
export async function scraperArticle(lien) {
  const html = await recupererHtml(lien)
  return extraireArticle(html)
}

/**
 * Transforme une entrée de liste + son détail d'article en document prêt
 * à écrire dans la collection `news` (même forme que articleVersDocument
 * dans maxifootPsg.js, pour rester cohérent avec le reste de l'app).
 */
export function articleVersDocument(entree, detail) {
  return {
    titre: detail?.titre || entree.titre,
    resume: detail?.resume || null,
    corps: detail?.corps || null,
    image: detail?.image || null,
    auteur: detail?.auteur || null,
    lien: entree.lien,
    source: NOM_SOURCE,
    sourceId: SOURCE_ID,
    clubs: [CLUB_LABEL_PSG],
    publieLe: detail?.publieLe || new Date()
  }
}

export { URL_INFOS, URL_TRANSFERTS, CLUB_LABEL_PSG, SOURCE_ID, identifiantDepuisLien }
