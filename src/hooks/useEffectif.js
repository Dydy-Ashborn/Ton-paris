import { useEffect, useState } from 'react'
import { doc, onSnapshot } from 'firebase/firestore'
import { db, chemins } from '../lib/firebase'

const CLUB_ID_PSG = 'psg'

/** Effectif PSG (source Maxifoot), un seul document mis à jour à chaque collecte. */
export function useEffectif() {
  const [effectif, setEffectif] = useState(null)
  const [chargement, setChargement] = useState(true)

  useEffect(() => {
    return onSnapshot(
      doc(db, chemins.effectif(CLUB_ID_PSG)),
      (instantane) => {
        setEffectif(instantane.exists() ? instantane.data() : null)
        setChargement(false)
      },
      () => setChargement(false)
    )
  }, [])

  return { effectif, chargement }
}
