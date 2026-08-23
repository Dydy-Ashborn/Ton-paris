/**
 * Rapprochement des libellés d'équipe entre l'API de classement
 * et le catalogue local, pour surligner les clubs suivis.
 */

// "fc" volontairement absent : plusieurs clubs suivis dans ce projet se
// distinguent justement par ce suffixe (Paris FC face à Paris/PSG/Paris
// Saint-Germain) — le retirer rendait les deux clubs indiscernables et
// faisait surligner Paris FC comme le PSG dans le classement.
const MOTS_PARASITES = ['cf', 'ac', 'as', 'sc', 'rc', 'ssc', 'afc', 'club', 'de', 'du', 'les', 'la', 'le']

// Voir functions/lib/normalize.js pour le miroir serveur et le contexte
// complet : "sg" (comme dans "Paris SG", employé par maxifoot-live.com)
// n'est pas une sous-chaîne de "parissaintgermain", donc jamais détecté
// par l'inclusion tolérante de memeEquipe() sans cette étape.
const SYNONYMES_MOT = { sg: 'saintgermain' }

// BUG CORRIGÉ : des mots comme "Real" ou "Athletic" sont des préfixes
// génériques partagés par plusieurs clubs d'un même championnat (Real
// Madrid / Real Sociedad / Real Betis, Athletic Bilbao / Atlético Madrid...).
// Si le nom court d'un club se réduit à UN SEUL de ces mots, une
// correspondance par inclusion (memeEquipe) matche alors n'importe quel
// libellé qui le contient — "Real" surlignait aussi bien Real Madrid que
// Real Sociedad dans le classement Liga, alors que seul Real Madrid était
// suivi. Même famille de piège que "Barcelone" plus bas (fragmentsAlias) :
// un mot seul, même long, n'identifie pas forcément un club de façon unique.
const MOTS_NON_DISTINCTIFS = new Set(['real', 'athletic', 'atletico', 'sporting', 'deportivo', 'racing', 'union'])

function motsSignificatifs(nom = '') {
  return nom
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[’'`]/g, ' ')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
    .split(' ')
    .filter((mot) => mot && !MOTS_PARASITES.includes(mot))
    .map((mot) => SYNONYMES_MOT[mot] || mot)
}

export function cleEquipe(nom = '') {
  const base = motsSignificatifs(nom).join('')
  return base || nom.toLowerCase().replace(/[^a-z0-9]+/g, '')
}

export function memeEquipe(a, b) {
  const motsA = motsSignificatifs(a)
  const motsB = motsSignificatifs(b)
  const ca = motsA.join('')
  const cb = motsB.join('')
  if (!ca || !cb) return false
  if (ca === cb) return true

  const [motsCourt, court, long] = ca.length <= cb.length ? [motsA, ca, cb] : [motsB, cb, ca]
  if (court.length < 4 || !long.includes(court)) return false

  // Un identifiant réduit à un seul mot non distinctif (voir
  // MOTS_NON_DISTINCTIFS) ne suffit pas à justifier une inclusion : il
  // faudrait alors l'égalité complète déjà testée juste au-dessus.
  if (motsCourt.length === 1 && MOTS_NON_DISTINCTIFS.has(motsCourt[0])) return false

  return true
}

/**
 * Égalité stricte (pas d'inclusion partielle), pour les fragments d'un
 * alias multi-mots pris isolément — voir noms(), plus bas.
 */
function memeEquipeStricte(a, b) {
  const ca = cleEquipe(a)
  const cb = cleEquipe(b)
  return Boolean(ca) && ca === cb
}

/**
 * Liste des libellés à comparer pour un club : le nom complet et le nom
 * court sont comparés avec inclusion tolérante (memeEquipe), mais un
 * alias multi-mots (ex. "Barca Barcelona", "PSG Paris") est éclaté en
 * mots pour permettre à chacun de matcher seul — un utilisateur peut très
 * bien voir juste "Barca" quelque part. Piège rencontré : un fragment
 * isolé comme "Barcelone" est souvent un simple nom de ville, pas un nom
 * de club à lui seul — avec l'inclusion tolérante de memeEquipe(), il
 * matchait aussi "Espanyol Barcelone" (club distinct qui partage la même
 * ville), faisant surligner le FC Barcelone à la place du bon club. Les
 * fragments d'alias sont donc comparés en égalité STRICTE uniquement :
 * "Barcelone" ne matche que "Barcelone", jamais un libellé plus long qui
 * le contient.
 */
function correspond(club, libelle) {
  const nomsTolerants = [club.nom, club.court].filter(Boolean)
  if (nomsTolerants.some((nom) => memeEquipe(nom, libelle))) return true

  const fragmentsAlias = (club.alias || '').split(' ').filter(Boolean)
  return fragmentsAlias.some((mot) => memeEquipeStricte(mot, libelle))
}

/** Rend l'identifiant de club si la ligne correspond à un club suivi. */
export function reconnaitreClub(libelle, preferences) {
  const candidats = [preferences?.clubFavori, ...(preferences?.clubsSuivis || [])].filter(Boolean)

  for (const club of candidats) {
    if (correspond(club, libelle)) return club.id
  }

  return null
}

/**
 * Libellé court d'affichage pour un nom d'équipe brut, résolu via le
 * catalogue local (config/clubs, voir lib/catalogue.js) plutôt que dépendant
 * du libellé exact renvoyé par CHAQUE source — tvBroadcasts (scrapeTv.js,
 * noms officiels complets : "Stade Rennais FC", "Paris Saint-Germain") et
 * maxifoot-live.com (functions/collecteScoresDirect.js, déjà des noms
 * courts : "Rennes", "Paris SG") n'utilisent pas la même convention, ce qui
 * faisait afficher deux noms différents pour le même club selon l'écran.
 * `correspond()` (déjà utilisé pour retrouver le logo, voir Accueil.jsx)
 * garantit que la résolution matche exactement le même club que le reste de
 * l'app. Inchangé si aucun club du catalogue ne correspond (adversaire hors
 * catalogue, libellé de test...) ou si le club n'a pas de nom court renseigné.
 */
export function nomAffichage(libelle, clubs) {
  if (!libelle) return libelle
  const club = (clubs || []).find((c) => correspond(c, libelle))
  return club?.court || libelle
}

export { correspond }
