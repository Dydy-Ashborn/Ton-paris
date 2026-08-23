import { useEffect, useState } from 'react'
import { doc, onSnapshot } from 'firebase/firestore'
import { db, chemins } from '../lib/firebase'

/**
 * Interrupteur global pour les boutons de debug (diagnostic d'une source
 * de scraping, données brutes affichées à l'écran, etc.). Lit
 * config/debug.actif en Firestore plutôt qu'une constante en dur : bascule
 * instantanée depuis n'importe quelle page, sans redéploiement, et le flag
 * reste global au tenant (pas besoin de retirer le bouton du code une fois
 * la fonctionnalité validée, juste de le désactiver — voir decisions.md).
 *
 * Repli à `false` en l'absence du document (config/debug jamais créé) :
 * les boutons de debug restent masqués par défaut tant qu'on n'a pas
 * explicitement activé le flag, jamais l'inverse.
 */
export function useDebug() {
  const [actif, setActif] = useState(false)

  useEffect(() => {
    return onSnapshot(
      doc(db, chemins.config('debug')),
      (instantane) => setActif(Boolean(instantane.exists() && instantane.data().actif)),
      () => setActif(false)
    )
  }, [])

  return actif
}
