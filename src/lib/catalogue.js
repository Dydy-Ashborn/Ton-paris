import { doc, getDoc } from 'firebase/firestore'
import { db, chemins } from './firebase'

let cacheClubs = null
let cacheNations = null

/**
 * Catalogue des clubs sélectionnables, stocké en base (jamais en dur dans le JS).
 * Chaque entrée porte les slugs de scraping nécessaires aux sources de diffusion TV.
 */
export async function chargerClubs() {
  if (cacheClubs) return cacheClubs
  const instantane = await getDoc(doc(db, chemins.config('clubs')))
  cacheClubs = instantane.exists() ? instantane.data().liste || [] : []
  return cacheClubs
}

export async function chargerNations() {
  if (cacheNations) return cacheNations
  const instantane = await getDoc(doc(db, chemins.config('nations')))
  cacheNations = instantane.exists() ? instantane.data().liste || [] : []
  return cacheNations
}

export function chercher(liste, terme) {
  const q = terme
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')

  if (!q) return liste

  return liste.filter((entree) => {
    const cible = `${entree.nom} ${entree.alias || ''}`
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
    return cible.includes(q)
  })
}
