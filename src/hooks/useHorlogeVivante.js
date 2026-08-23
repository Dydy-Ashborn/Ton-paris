import { useEffect, useState } from 'react'

/**
 * Horloge vivante : force un re-render à intervalle régulier en renvoyant
 * l'heure courante. Sert de base à tout décompte affiché en direct (voir
 * MercatoTimer) sans que chaque composant gère son propre setInterval.
 */
export function useHorlogeVivante(intervalleMs = 1000) {
  const [maintenant, setMaintenant] = useState(() => new Date())

  useEffect(() => {
    const id = setInterval(() => setMaintenant(new Date()), intervalleMs)
    return () => clearInterval(id)
  }, [intervalleMs])

  return maintenant
}
