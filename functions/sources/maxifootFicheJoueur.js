import { recupererHtml } from '../lib/http.js'

/**
 * Fiche individuelle d'un joueur sur Maxifoot (ex.
 * https://www.maxifoot.fr/joueur/lucas-chevalier-240826.htm) — complète les
 * données déjà présentes dans le tableau effectif du club (voir
 * maxifootEffectif.js : nom, nom complet, nationalité, âge, naissance,
 * taille, poids, stats saison) avec le numéro de maillot et le poste
 * précis (GARDIEN / DEFENSEUR / MILIEU / ATTAQUANT, plus fin que le
 * regroupement par groupe utilisé dans le tableau effectif), nécessaires
 * pour la carte façon FUT (voir lib/carteJoueur.js).
 *
 * Contrairement au tableau effectif (HTML mal formé, attributs tantôt avec
 * tantôt sans guillemets — voir maxifootEffectif.js), cette fiche encode
 * ses champs clés dans des commentaires HTML dédiés du type
 * <!--Champ-->valeur<!--/Champ--> ou <!--Champ=valeur!-->, un marqueur
 * bien plus stable que du scraping de mise en page.
 */
function nettoyerTexte(html) {
  return String(html)
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&eacute;/g, 'é')
    .replace(/&egrave;/g, 'è')
    .replace(/&agrave;/g, 'à')
    .replace(/&ccedil;/g, 'ç')
    .replace(/&ecirc;/g, 'ê')
    .replace(/&ocirc;/g, 'ô')
    .replace(/&rsquo;/g, '’')
    .replace(/&quot;/g, '"')
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

/** Comme nombre() de maxifootEffectif.js : les cellules vides sont un "-" littéral. */
function nombreOuNul(texte) {
  const sans = nettoyerTexte(texte)
  if (!sans || sans === '-') return 0
  const valeur = parseInt(sans.replace(/[^\d]/g, ''), 10)
  return Number.isFinite(valeur) ? valeur : 0
}

function extraireCommentaire(html, champ) {
  const m = html.match(new RegExp(`<!--${champ}-->([\\s\\S]*?)<!--\\/${champ}-->`))
  return m ? nettoyerTexte(m[1]) : null
}

function extraireCommentaireEgal(html, champ) {
  const m = html.match(new RegExp(`<!--${champ}=([^!]*)!-->`))
  return m ? m[1].trim() : null
}

/**
 * Photo officielle du joueur. Ancienne version : URL reconstruite à partir
 * de l'id avec un bucket fixe (/phoj/2/) — invalide dès qu'un joueur est
 * stocké dans un autre bucket (confirmé : Marquinhos est en /phoj/8/,
 * Chevalier en /phoj/2/), ce qui cassait sa photo silencieusement. Fix :
 * extraire la vraie URL directement du bloc <!--photoJ-->...<!--/photoJ-->
 * de la fiche, seule source fiable. Certains joueurs n'ont réellement
 * aucune photo sur Maxifoot (leur propre page bascule alors sur un visuel
 * de remplacement via un onerror JS côté client) — dans ce cas la fonction
 * retourne null, à gérer côté UI (voir CarteJoueurModal.jsx : fallback
 * avec l'initiale du joueur si `photo` est absente ou si l'image 404).
 */
function extraireUrlPhoto(html) {
  const bloc = html.match(/<!--photoJ-->([\s\S]*?)<!--\/photoJ-->/)
  if (!bloc) return null
  const img = bloc[1].match(/<img[^>]*\ssrc="?([^"\s>]+)"?/)
  if (!img) return null
  const src = img[1].trim()
  if (!src) return null
  return src.startsWith('//') ? `https:${src}` : src
}

const POSTES_PRECIS = {
  GARDIEN: 'Gardien',
  DEFENSEUR: 'Défenseur',
  MILIEU: 'Milieu',
  ATTAQUANT: 'Attaquant'
}

export function extraireFicheJoueur(html) {
  const numeroMaillot = extraireCommentaireEgal(html, 'NumMaillot')
  const posteBrut = extraireCommentaire(html, 'PosteJoueur')
  const posteCle = posteBrut ? posteBrut.toUpperCase().replace(/[^A-ZÀ-Ü]/g, '') : null

  return {
    numeroMaillot: numeroMaillot ? Number(numeroMaillot) : null,
    // Poste précis : reste null si Maxifoot renvoie un libellé inattendu
    // (ex. joueur polyvalent) plutôt que de propager un texte non normalisé
    // — la carte retombe alors sur le groupe déjà connu (voir Effectif.jsx).
    poste: posteCle && POSTES_PRECIS[posteCle] ? POSTES_PRECIS[posteCle] : null,
    photo: extraireUrlPhoto(html)
  }
}

export async function scraperFicheJoueur(lien) {
  const html = await recupererHtml(lien)
  return extraireFicheJoueur(html)
}

/**
 * Extraction "riche" de la fiche joueur : contrat, sélections en équipe
 * nationale, bilan de la saison en cours par compétition, carrière saison
 * par saison. Volontairement séparée de extraireFicheJoueur() ci-dessus :
 * ces champs ne servent qu'à la page Chouchou (voir ../detailsJoueur.js),
 * pas à l'enrichissement quotidien de tout l'effectif (collecteEffectifPsg.js)
 * — un scraping et un stockage à la demande pour un seul joueur, pas 25.
 */
function extraireBilanCompetitions(html) {
  const bloc = html.match(/<table[^>]*id="?dt9990"?[^>]*>([\s\S]*?)<\/table>/)
  if (!bloc) return []

  const lignes = [...bloc[1].matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/g)].map((m) => m[1])

  return lignes
    .map((ligne) => {
      if (/<th/.test(ligne)) return null
      const cellules = [...ligne.matchAll(/<td[^>]*>([\s\S]*?)<\/td>/g)].map((m) => m[1])
      if (cellules.length < 9) return null

      const competition = nettoyerTexte(cellules[0])
      if (!competition) return null

      return {
        competition,
        total: /Bilan total/i.test(competition),
        matchs: nombreOuNul(cellules[1]),
        titularisations: nombreOuNul(cellules[2]),
        remplacant: nombreOuNul(cellules[3]),
        banc: nombreOuNul(cellules[4]),
        buts: nombreOuNul(cellules[5]),
        cartonsJaunes: nombreOuNul(cellules[6]),
        cartonsRouges: nombreOuNul(cellules[7]),
        minutes: nombreOuNul(cellules[8])
      }
    })
    .filter(Boolean)
}

/**
 * Carrière saison par saison (div_carr) : seules les lignes-résumé
 * (class="bg1") intéressent ici, pas les <tr> masqués qu'elles déplient
 * (détail par compétition de chaque saison, redondant avec bilanCompetitions
 * pour la saison en cours) — ces derniers n'ont pas class=bg1, le motif
 * les ignore naturellement.
 */
function extraireCarriere(html) {
  // Une seule table class=ficj4 sur la page (le tableau "Carrière en club") :
  // pas besoin de délimiter précisément sa fin, class="bg1" n'apparaît que
  // sur ses lignes-résumé de saison.
  const lignes = [...html.matchAll(/<tr[^>]*class="?bg1"?[^>]*>([\s\S]*?)<\/tr>/g)].map((m) => m[1])

  return lignes
    .map((ligne) => {
      const cellules = [...ligne.matchAll(/<td[^>]*>([\s\S]*?)<\/td>/g)].map((m) => m[1])
      if (cellules.length < 7) return null

      return {
        saison: nettoyerTexte(cellules[0]),
        age: nettoyerTexte(cellules[1]),
        club: nettoyerTexte(cellules[2]),
        matchs: nombreOuNul(cellules[3]),
        buts: nombreOuNul(cellules[4]),
        matchsCoupesEurope: nombreOuNul(cellules[5]),
        butsCoupesEurope: nombreOuNul(cellules[6])
      }
    })
    .filter(Boolean)
    .slice(0, 15)
}

export function extraireFicheJoueurDetaillee(html) {
  const naissanceDetail = extraireCommentaire(html, 'detailNee')
  const debutContrat = extraireCommentaire(html, 'DebutContrat')
  const finContrat = extraireCommentaire(html, 'FinContrat')
  const nomLegal = extraireCommentaire(html, 'nomcomplet')

  const blocSelections = extraireCommentaire(html, 'selNATIO')
  const selMatch = blocSelections ? blocSelections.match(/(\d+)\s*s[ée]l\.?,?\s*(\d+)\s*buts?/i) : null

  return {
    ...extraireFicheJoueur(html),
    naissanceDetail,
    debutContrat,
    finContrat,
    nomLegal,
    selectionsNationales: selMatch ? Number(selMatch[1]) : null,
    butsSelection: selMatch ? Number(selMatch[2]) : null,
    bilanCompetitions: extraireBilanCompetitions(html),
    carriere: extraireCarriere(html)
  }
}

export async function scraperFicheJoueurDetaillee(lien) {
  const html = await recupererHtml(lien)
  return extraireFicheJoueurDetaillee(html)
}
