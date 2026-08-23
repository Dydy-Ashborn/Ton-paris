import { recupererHtml } from '../lib/http.js'
import { trouverDansEffectif } from '../lib/matchJoueur.js'

/**
 * Compos probables PSG, publiées par Maxifoot en amont de chaque match sous
 * forme de brève dédiée (ex. "Rennes-Paris SG, les compos probables"),
 * détectée dans le flux news déjà collecté (voir maxifootNews.js /
 * collecteMaxifootNews.js) — pas de source séparée à interroger en continu,
 * on repère juste ce titre particulier parmi les brèves PSG déjà listées.
 *
 * La page de la brève liste les deux compos en texte simple, une ligne par
 * équipe : "<b>Paris SG</b> : Safonov - Hakimi, Marquinhos, Pacho, Digne -
 * Zaïre-Emery, Vitinha, Neves - Doué, Dembélé, Kvaratskhelia." — les blocs
 * séparés par un tiret correspondent aux lignes du terrain (gardien /
 * défenseurs / milieux / attaquants), dans cet ordre, sans autre indication
 * de position (pas de gauche/droite explicite, pas de coordonnées x/y).
 */

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
    .replace(/&rsquo;/g, '’')
    .replace(/&#39;/g, '’')
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

const LIBELLE_PSG = 'paris sg'

/**
 * Maxifoot publie systématiquement DEUX brèves par match, avec un titre
 * quasi identique et seul le mot "probables" pour les distinguer :
 *   - le matin (ou la veille) : "L1 : Rennes-Paris SG, les compos probables"
 *   - ~1h avant le coup d'envoi, une fois les feuilles de match connues :
 *     "L1 : Rennes-Paris SG, les compos" (sans "probables")
 * Même structure de page pour les deux (voir extraireLigneJoueurs), donc
 * même parsing ; seul le titre permet de savoir laquelle des deux on lit.
 */
export function estBreveCompoPsg(entree) {
  const titre = (entree.titre || '').toLowerCase()
  if (!titre.includes('compos')) return false
  return titre.includes('paris sg') || titre.includes('psg')
}

/** Vrai si la brève de compo est la version officielle (post match "probables"). */
export function estCompoOfficielle(entree) {
  return !(entree.titre || '').toLowerCase().includes('probables')
}

/**
 * Extrait la ligne "<b>Paris SG</b> : Safonov - Hakimi, ... - ... - ...."
 * du corps de la brève. Le nom de l'adversaire varie à chaque match : on
 * ne cherche donc que le bloc "Paris SG", jamais l'adversaire par son nom.
 */
function extraireLigneJoueurs(html) {
  const m = html.match(/<b>Paris SG<\/b>\s*:\s*([^<]*(?:<[^b][^>]*>[^<]*)*?)(?:<\/p>|<style)/i)
  if (!m) return null
  // Coupe à la première balise de bloc suivante (ex. <style> qui introduit
  // le tableau de forme des équipes, toujours présent juste après les deux
  // lignes de compo) pour ne pas embarquer du HTML sans rapport.
  const brut = m[1].split(/<style/i)[0]
  return nettoyerTexte(brut).replace(/\.\s*$/, '')
}

/**
 * Découpe "Safonov - Hakimi, Marquinhos, Pacho, Digne - Zaïre-Emery,
 * Vitinha, Neves - Doué, Dembélé, Kvaratskhelia" en lignes (une par poste),
 * chaque ligne en joueurs. Le capitanat "(c)" est retiré du nom.
 */
export function extraireLignesPoste(ligneTexte) {
  if (!ligneTexte) return []

  // Un tiret séparateur de ligne est toujours entouré d'espaces (" - ") ;
  // un tiret interne à un nom composé (Zaïre-Emery, Konaté-Diarra) colle
  // directement aux lettres des deux côtés. On ne coupe donc que sur
  // " - ", jamais sur un tiret nu — sinon "Zaïre-Emery" se retrouvait
  // coupé en deux, décalant toute la ligne et faussant le schéma détecté.
  return ligneTexte
    .split(/\s-\s/)
    .map((bloc) =>
      bloc
        .split(',')
        .map((nom) => nom.replace(/\(c\)/gi, '').trim())
        .filter(Boolean)
    )
    .filter((ligne) => ligne.length > 0)
}

/**
 * Schémas tactiques standards indexés par la signature du nombre de
 * joueurs par ligne (hors gardien), ex. "4-3-3" → 4 défenseurs, 3 milieux,
 * 3 attaquants. Chaque entrée donne, pour chaque ligne, les positions
 * relatives (x de 0=gauche à 100=droite, y de 0=en bas/but à 100=en
 * haut/but adverse) de chaque joueur de la ligne, dans l'ordre où Maxifoot
 * les liste (qui suit toujours un ordre gauche → droite sur le terrain).
 */
const SCHEMAS = {
  '4-3-3': [
    [50, 8],
    [12, 28], [37, 24], [63, 24], [88, 28],
    [30, 50], [50, 46], [70, 50],
    [20, 78], [50, 84], [80, 78]
  ],
  '4-2-3-1': [
    [50, 8],
    [12, 28], [37, 24], [63, 24], [88, 28],
    [35, 42], [65, 42],
    [18, 64], [50, 60], [82, 64],
    [50, 86]
  ],
  '4-4-2': [
    [50, 8],
    [12, 28], [37, 24], [63, 24], [88, 28],
    [12, 54], [37, 50], [63, 50], [88, 54],
    [38, 82], [62, 82]
  ],
  '3-4-3': [
    [50, 8],
    [25, 26], [50, 22], [75, 26],
    [10, 52], [37, 48], [63, 48], [90, 52],
    [20, 80], [50, 86], [80, 80]
  ],
  '3-5-2': [
    [50, 8],
    [25, 26], [50, 22], [75, 26],
    [8, 52], [30, 46], [50, 44], [70, 46], [92, 52],
    [38, 82], [62, 82]
  ]
}

/** Répartition par défaut si le nombre de joueurs par ligne ne correspond à aucun schéma connu. */
function placementGenerique(lignes) {
  const total = lignes.length
  return lignes.flatMap((ligne, indexLigne) => {
    const y = 8 + (indexLigne * 76) / Math.max(1, total - 1)
    return ligne.map((_, indexJoueur) => {
      const x = ligne.length === 1 ? 50 : 10 + (indexJoueur * 80) / (ligne.length - 1)
      return [x, y]
    })
  })
}

const NOMS_LIGNE = ['Gardien', 'Défense', 'Milieu', 'Attaque']

/**
 * Place chaque joueur sur le terrain (x/y en pourcentage) à partir des
 * lignes de poste détectées. Le schéma est déduit du nombre de joueurs par
 * ligne (ex. 1-4-3-3 → clé "4-3-3", en excluant le gardien de la
 * signature) ; à défaut de correspondance, un placement générique répartit
 * chaque ligne à intervalles réguliers plutôt que d'échouer.
 */
export function placerSurTerrain(lignes) {
  const total = lignes.reduce((n, ligne) => n + ligne.length, 0)
  if (total === 0) return []

  const signature = lignes.slice(1).map((l) => l.length).join('-')
  const positions = SCHEMAS[signature] || placementGenerique(lignes)

  const joueurs = lignes.flat()
  // Un schéma connu mais dont le total de positions ne correspond pas
  // (cas limite, jamais observé mais pas à exclure) retombe aussi sur le
  // placement générique plutôt que de désaligner joueurs et coordonnées.
  const coords = positions.length === joueurs.length ? positions : placementGenerique(lignes)

  let indexGlobal = 0
  return lignes.flatMap((ligne, indexLigne) =>
    ligne.map((nom) => {
      const [x, y] = coords[indexGlobal]
      indexGlobal++
      return { nom, ligne: NOMS_LIGNE[indexLigne] || `Ligne ${indexLigne + 1}`, x, y }
    })
  )
}

/**
 * Complète chaque titulaire avec les infos de l'effectif complet déjà
 * collecté (id, photo, poste précis, numéro de maillot) — la brève de
 * compo elle-même ne donne que le nom. Nécessaire pour afficher la photo
 * sur le terrain et ouvrir la vraie fiche joueur (CarteJoueurModal) au
 * clic plutôt qu'une mini-popup nom/ligne seulement.
 *
 * Le rapprochement se fait par nom (voir lib/matchJoueur.js) ; un joueur
 * de la compo introuvable dans l'effectif (transfert très récent pas
 * encore collecté, orthographe différente...) garde juste son nom et
 * reste affiché normalement, seule la photo/fiche détaillée manque.
 */
function enrichirAvecEffectif(titulaires, joueursEffectif) {
  if (!joueursEffectif || joueursEffectif.length === 0) return titulaires

  return titulaires.map((titulaire) => {
    const trouve = trouverDansEffectif(titulaire.nom, joueursEffectif)
    if (!trouve) return titulaire

    return {
      ...titulaire,
      joueurId: trouve.id || null,
      photo: trouve.photo || null,
      posteEffectif: trouve.poste || null,
      numeroMaillot: trouve.numeroMaillot ?? null
    }
  })
}

/**
 * Parse la page d'une brève "compos probables" et rend la compo PSG prête
 * à stocker : le onze titulaire placé sur le terrain, et le reste de
 * l'effectif présent dans le groupe (banc) quand Maxifoot le liste — ce
 * qui n'est pas toujours le cas sur cette brève précise (souvent juste les
 * deux onze), donc `banc` peut rester vide sans que ce soit une erreur.
 *
 * `joueursEffectif` (optionnel) : liste de l'effectif déjà collecté
 * (tenants/{tenant}/effectifs/psg), pour enrichir chaque titulaire avec
 * sa photo/id/poste précis — voir enrichirAvecEffectif ci-dessus.
 */
export function extraireCompoPsg(html, joueursEffectif = []) {
  const ligneTexte = extraireLigneJoueurs(html)
  if (!ligneTexte) return null

  const lignes = extraireLignesPoste(ligneTexte)
  if (lignes.length === 0) return null

  const schema = lignes.slice(1).map((l) => l.length).join('-')
  const titulairesBruts = placerSurTerrain(lignes)
  const titulaires = enrichirAvecEffectif(titulairesBruts, joueursEffectif)

  return {
    schema: SCHEMAS[schema] ? schema : null,
    titulaires,
    banc: []
  }
}

export async function scraperCompoPsg(lien, joueursEffectif = []) {
  const html = await recupererHtml(lien)
  return extraireCompoPsg(html, joueursEffectif)
}
