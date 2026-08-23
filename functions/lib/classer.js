import { sansAccents, cleEquipe } from './normalize.js'

/**
 * Classe une actualité à partir des mots-clés stockés en base.
 * Rien n'est codé en dur ici : la table vient de config/actualites.
 */
export function classer(article, regles, clubs) {
  const texte = sansAccents(`${article.titre} ${article.resume || ''}`)

  let categorie = null
  let importante = false

  for (const regle of regles.categories || []) {
    const touche = (regle.motsCles || []).some((mot) => texte.includes(sansAccents(mot)))
    if (!touche) continue
    categorie = regle.libelle
    importante = Boolean(regle.importante)
    break
  }

  // Clubs cités : sert à filtrer le flux selon les préférences de chacun.
  // Match sur des mots entiers du texte (pas une simple sous-chaîne) : un
  // alias court comme "Paris" ne doit pas se déclencher sur "Paris Brunner"
  // (prénom d'un joueur) ou tout autre mot qui contient "paris" en passant.
  const motsTexte = new Set(texte.replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(Boolean))

  const clubsCites = []
  for (const club of clubs) {
    const candidats = [club.nom, club.court, ...(club.alias || '').split(' ')].filter(Boolean)
    const cite = candidats.some((libelle) => {
      const cle = cleEquipe(libelle)
      if (cle.length < 3) return false
      // Alias multi-mots (ex. "saint germain") : on vérifie la présence de
      // la séquence de mots complète, pas juste une sous-chaîne concaténée.
      const motsAlias = sansAccents(libelle).replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(Boolean)
      if (motsAlias.length > 1) return motsAlias.every((mot) => motsTexte.has(mot))
      return motsTexte.has(cle)
    })
    if (cite) clubsCites.push(club.id)
  }

  return { categorie, importante, clubsCites }
}
