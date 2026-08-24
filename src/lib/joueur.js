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

/**
 * Résout un chemin stocké en base ("/joueurs/psg/x.jpg", écrit par
 * scripts/maj-photos-effectif.mjs) relatif à la racine du DOMAINE en un
 * chemin relatif à la racine de l'APP (import.meta.env.BASE_URL). Sur
 * Firebase Hosting (servi à "/") les deux coïncident, mais sur GitHub Pages
 * l'app vit dans un sous-dossier ("/Ton-paris/", voir BASE dans
 * vite.config.js) — sans ce correctif le navigateur irait chercher le
 * fichier à la racine du domaine au lieu du sous-dossier réel → 404. Même
 * bug/correctif que trouverLogo() dans pages/Accueil.jsx.
 */
export function cheminPublic(chemin) {
  if (!chemin) return null
  return `${import.meta.env.BASE_URL}${chemin.replace(/^\//, '')}`
}

/**
 * Rapprochement nom Maxifoot ↔ nom PSG.fr pour fusionnerPhotosEffectif
 * ci-dessous.
 *
 * BUG CORRIGÉ (signalé en session : "pourquoi les images matchs pas ?" —
 * Chevalier entre autres). L'ancienne version (cleRapprochementNom)
 * comparait l'ENSEMBLE TRIÉ des mots significatifs des deux noms, en
 * exigeant une égalité stricte. Ça échouait dans deux cas très courants :
 *  - Maxifoot abrège souvent le prénom dans son nom d'affichage court
 *    (joueur.nom, ex. "L. Chevalier") alors que l'export PSG.fr donne le
 *    prénom complet déduit du slug d'URL (ex. "Lucas Chevalier") — "l" et
 *    "lucas" ne sont jamais égaux comme MOTS, donc aucune correspondance.
 *  - Le nom complet Maxifoot (joueur.nomComplet, tiré de l'attribut title
 *    de la page effectif) inclut parfois un second prénom absent du slug
 *    PSG.fr (ex. "Lucas Eugène Chevalier" vs "Lucas Chevalier") — l'ensemble
 *    de mots diffère aussi, donc pas de correspondance non plus.
 * On ne compare donc plus que le NOM DE FAMILLE (dernier mot significatif,
 * en pratique fiable et discriminant sur un effectif d'une trentaine de
 * joueurs), avec une tolérance sur le prénom : l'un doit être le préfixe de
 * l'autre (couvre l'abréviation "L." → "Lucas"), ou l'un des deux noms n'a
 * simplement pas de prénom séparé (un seul mot). Même principe que
 * memeJoueur côté serveur (functions/lib/matchJoueur.js), mais en
 * comparaison nom de famille + préfixe de prénom plutôt qu'en inclusion de
 * sous-chaîne complète — l'inclusion pure échoue aussi ici ("lchevalier"
 * n'est inclus ni dans "lucaschevalier" ni l'inverse).
 */
function motsSignificatifs(nom = '') {
  return normaliser(nom)
    .replace(/[’'`.-]/g, ' ')
    .replace(/[^a-z0-9 ]+/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean)
}

function memeJoueur(nomA, nomB) {
  const motsA = motsSignificatifs(nomA)
  const motsB = motsSignificatifs(nomB)
  if (motsA.length === 0 || motsB.length === 0) return false

  const nomFamilleA = motsA[motsA.length - 1]
  const nomFamilleB = motsB[motsB.length - 1]
  if (nomFamilleA !== nomFamilleB) return false

  const prenomA = motsA.length > 1 ? motsA[0] : null
  const prenomB = motsB.length > 1 ? motsB[0] : null
  if (!prenomA || !prenomB) return true

  const [court, long] = prenomA.length <= prenomB.length ? [prenomA, prenomB] : [prenomB, prenomA]
  return long.startsWith(court)
}

/**
 * Fusionne les photos/infos bio récupérées manuellement sur PSG.fr (voir
 * l'userscript Tampermonkey + scripts/maj-photos-effectif.mjs, écrites dans
 * chemins.photosEffectif — un doc SÉPARÉ de l'effectif Maxifoot, jamais
 * touché par le cron quotidien, voir lib/firebase.js) dans la liste de
 * joueurs Maxifoot (source de vérité pour les stats de match). Rapprochement
 * par nom (memeJoueur ci-dessus) plutôt que par id : les deux sources n'ont
 * aucun identifiant commun. On tente contre joueur.nom (court, parfois
 * abrégé) ET joueur.nomComplet (complet, parfois avec second prénom) : les
 * deux souffrent chacun d'un des deux pièges décrits ci-dessus, l'un des
 * deux passe toujours. Un joueur Maxifoot sans correspondance PSG.fr (pas
 * encore scrapé, nom trop différent) garde simplement ses champs existants
 * (photo Maxifoot, pas de photoHero/bio) — pas d'erreur, juste un repli déjà
 * géré par CarteJoueurModal/Effectif.
 */
export function fusionnerPhotosEffectif(joueurs, photosParJoueur) {
  if (!photosParJoueur) return joueurs || []

  const entrees = Object.values(photosParJoueur)

  return (joueurs || []).map((joueur) => {
    const trouve = entrees.find(
      (entree) => memeJoueur(joueur.nom, entree?.nom) || (joueur.nomComplet && memeJoueur(joueur.nomComplet, entree?.nom))
    )
    if (!trouve) return joueur

    return {
      ...joueur,
      photoListe: trouve.photoListe || joueur.photoListe || null,
      photoHero: trouve.photoHero || joueur.photoHero || null,
      // Maxifoot d'abord (voir functions/sources/maxifootFicheJoueur.js,
      // <!--NumMaillot=XX!--> sur la fiche individuelle) — c'est la source
      // habituelle du numéro affiché sur les cartes. Repli sur le numéro
      // PSG.fr (Tampermonkey, jusqu'ici récupéré mais jamais utilisé ici).
      // SIGNALÉ EN SESSION : Godts et Dro Fernandez sans numéro — vérifié en
      // direct sur leurs fiches Maxifoot, le numéro y est simplement absent
      // (Godts : la fiche n'a même pas encore été mise à jour côté club,
      // toujours "Ajax Amsterdam" ; Dro Fernandez : aucun numéro publié) —
      // un vrai trou côté Maxifoot, pas un bug de scraping. Le numéro PSG.fr
      // (scrapé à la main, déjà présent dans photosEffectif) comble ce trou
      // quand il existe.
      numeroMaillot: joueur.numeroMaillot ?? trouve.numeroMaillot ?? null,
      nomComplet: trouve.nomComplet || joueur.nomComplet || null,
      dateNaissance: trouve.dateNaissance || joueur.dateNaissance || null,
      lieuNaissance: trouve.lieuNaissance || joueur.lieuNaissance || null,
      pied: trouve.pied || joueur.pied || null,
      taille: trouve.taille || joueur.taille || null,
      poids: trouve.poids || joueur.poids || null,
      // Distinctions individuelles (Ballon d'Or, trophées perso...) — champ
      // 100% manuel, voir scripts/maj-photos-effectif.mjs. Pas de source
      // scrapée fiable (vérifié en session sur Maxifoot), donc jamais présent
      // côté joueur Maxifoot : on prend simplement la liste PSG.fr telle
      // quelle (vide par défaut si jamais renseignée).
      distinctions: trouve.distinctions?.length ? trouve.distinctions : (joueur.distinctions || [])
    }
  })
}
