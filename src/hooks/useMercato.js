import { useEffect, useState } from 'react'
import { doc, onSnapshot } from 'firebase/firestore'
import { db, chemins } from '../lib/firebase'

const CLUB_ID_PSG = 'psg'

/** Mercato PSG (source Maxifoot), un seul document mis à jour à chaque collecte. */
export function useMercato() {
  const [mercato, setMercato] = useState(null)
  const [chargement, setChargement] = useState(true)

  useEffect(() => {
    return onSnapshot(
      doc(db, chemins.mercato(CLUB_ID_PSG)),
      (instantane) => {
        setMercato(instantane.exists() ? instantane.data() : null)
        setChargement(false)
      },
      () => setChargement(false)
    )
  }, [])

  return { mercato, chargement }
}
