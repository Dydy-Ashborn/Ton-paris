/**
 * Correspondance texte libre → joueur, pour filtrer les actus qui
 * concernent le "chouchou" (voir pages/Chouchou.jsx). Différent de
 * functions/lib/matchJoueur.js (memeJoueur, côté serveur, pour rapprocher
 * un nom de compo brut avec l'effectif) : ici on cherche le nom du joueur
 * À L'INTÉRIEUR d'un texte d'article, pas une égalité entre deux noms —
 * une simple recherche normalisée (accents/casse) sur le nom d'affichage
 * suffit et reste lisible, plutôt que de dupliquer la logique serveur côté
 * client pour un besoin différent.
 */
function sansAccents(texte = '') {
  // U+0300–U+036F : plage Unicode des diacritiques combinants, isolés par
  // normalize('NFD') (ex. "é" → "e" + accent combinant) puis retirés ici.
  return texte.normalize('NFD').replace(/[̀-ͯ]/g, '')
}

function normaliser(texte = '') {
  return sansAccents(texte).toLowerCase()
}

/**
 * Vrai si l'actu mentionne le joueur (nom cherché dans titre + résumé +
 * corps). Nom minimum de 3 caractères pour éviter qu'un nom très court ne
 * matche par hasard dans un mot sans rapport (même garde-fou que
 * memeJoueur côté serveur).
 */
export function estActuDuJoueur(actu, joueur) {
  const nom = normaliser(joueur?.nom || '')
  if (nom.length < 3) return false

  const texte = normaliser([actu.titre, actu.resume, actu.corps].filter(Boolean).join(' '))
  return texte.includes(nom)
}

/** Filtre une liste d'actus à celles qui concernent le joueur donné. */
export function actusDuJoueur(actus, joueur) {
  if (!joueur) return []
  return actus.filter((actu) => estActuDuJoueur(actu, joueur))
}

/**
 * Identifiant utilisé pour choisir/retrouver le "chouchou" (voir
 * pages/Effectif.jsx et pages/Chouchou.jsx).
 *
 * BUG CORRIGÉ : `joueur.id` (extrait par functions/sources/maxifootEffectif.js
 * depuis l'URL de la fiche Maxifoot, ex. ".../lucas-chevalier-240826.htm") vaut
 * `null` quand ce lien est absent ou ne colle pas au format attendu — ce qui
 * arrive pour plusieurs joueurs de l'effectif, pas un cas isolé. En stockant
 * directement `joueur.id` comme `joueurChouchouId`, TOUT joueur sans id
 * scrapé finissait avec la même valeur `null`, et `Array.find` retombait
 * alors sur le premier joueur `id === null` de la liste — d'où un chouchou
 * qui apparaît sans avoir rien choisi, et impossible à changer tant qu'on
 * choisit un autre joueur lui aussi sans id (toujours la même valeur écrite,
 * toujours le même premier joueur retrouvé). On retombe donc sur le nom
 * (unique en pratique dans un effectif d'une vingtaine de joueurs) quand
 * l'id est absent, plutôt que de propager ce `null` partagé.
 */
export function identifiantJoueur(joueur) {
  return joueur?.id || joueur?.nom || null
}

/**
 * Retrouve le chouchou dans l'effectif à partir de l'id stocké en
 * préférence. Ne matche JAMAIS quand `joueurChouchouId` est absent/falsy
 * (`null`, `undefined`, chaîne vide) — même garde-fou que le bug ci-dessus :
 * un `find` sans cette garde pourrait retomber sur un joueur dont
 * l'identifiant calculé serait lui aussi falsy par accident.
 */
export function trouverChouchou(joueurs, joueurChouchouId) {
  if (!joueurChouchouId) return null
  return (joueurs || []).find((j) => identifiantJoueur(j) === joueurChouchouId) || null
}
