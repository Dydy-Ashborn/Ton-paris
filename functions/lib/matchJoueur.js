import { sansAccents } from './normalize.js'

/**
 * Rapprochement d'un nom de joueur tel qu'il apparaît dans le texte brut
 * d'une compo Maxifoot ("Hakimi", "Zaïre-Emery", "Kvaratskhelia") avec
 * l'entrée correspondante de l'effectif complet (qui porte le vrai poste,
 * la photo, l'id...). Différent de memeEquipe() (normalize.js), pensé
 * pour des noms de club et leurs abréviations usuelles, pas pour des noms
 * de famille — pas de liste de mots parasites ici, juste une comparaison
 * normalisée avec tolérance sur les noms composés.
 */
function cleJoueur(nom = '') {
  return sansAccents(nom)
    .replace(/[’'`.]/g, ' ')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
    .replace(/\s+/g, ' ')
}

/**
 * Vrai si les deux libellés désignent vraisemblablement le même joueur.
 * Egalité stricte en priorité ; à défaut, un des deux noms doit contenir
 * l'autre en entier (ex. "zairemery" contenu dans "warrenzairemery" côté
 * effectif si jamais le nom d'affichage était plus complet), avec une
 * longueur minimale pour éviter qu'un nom très court ("Lee") ne matche
 * n'importe quel nom qui le contient par hasard.
 */
export function memeJoueur(a, b) {
  const ca = cleJoueur(a).replace(/\s+/g, '')
  const cb = cleJoueur(b).replace(/\s+/g, '')
  if (!ca || !cb) return false
  if (ca === cb) return true
  const [court, long] = ca.length <= cb.length ? [ca, cb] : [cb, ca]
  return court.length >= 3 && long.includes(court)
}

/**
 * Retrouve dans l'effectif l'entrée correspondant à un nom de compo.
 * Rend null si aucune correspondance fiable n'est trouvée (nouveau
 * joueur pas encore dans l'effectif collecté, orthographe trop
 * différente...) — le placement sur le terrain retombe alors sur
 * l'ordre du texte plutôt que d'échouer entièrement.
 */
export function trouverDansEffectif(nomCompo, joueursEffectif) {
  return joueursEffectif.find((j) => memeJoueur(nomCompo, j.nom) || (j.nomComplet && memeJoueur(nomCompo, j.nomComplet))) || null
}
