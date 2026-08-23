import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { doc, onSnapshot, setDoc, serverTimestamp } from 'firebase/firestore'
import { db, chemins } from '../lib/firebase'
import { useAuth } from './useAuth'

const ContextePrefs = createContext(null)

export const PREFS_PAR_DEFAUT = {
  clubFavori: null,
  nationFavorite: null,
  clubsSuivis: [],
  joueurChouchouId: null,
  notifications: {
    matinDuMatch: true,
    uneHeureAvant: true,
    coupDEnvoi: true,
    actuImportante: true,
    touteActu: false
  },
  abonnementsTv: [],
  onboardingTermine: false
}

export const MAX_CLUBS_SUIVIS = 2

export function FournisseurPreferences({ children }) {
  const { utilisateur } = useAuth()
  const [preferences, setPreferences] = useState(null)
  const [chargement, setChargement] = useState(true)

  useEffect(() => {
    if (!utilisateur) {
      setPreferences(null)
      setChargement(false)
      return
    }

    setChargement(true)
    const ref = doc(db, chemins.preferences(utilisateur.uid))

    return onSnapshot(
      ref,
      (instantane) => {
        setPreferences(instantane.exists() ? { ...PREFS_PAR_DEFAUT, ...instantane.data() } : PREFS_PAR_DEFAUT)
        setChargement(false)
      },
      () => {
        setPreferences(PREFS_PAR_DEFAUT)
        setChargement(false)
      }
    )
  }, [utilisateur])

  const enregistrer = useCallback(
    async (modifications) => {
      if (!utilisateur) return
      const ref = doc(db, chemins.preferences(utilisateur.uid))
      await setDoc(ref, { ...modifications, majLe: serverTimestamp() }, { merge: true })
    },
    [utilisateur]
  )

  return (
    <ContextePrefs.Provider value={{ preferences, chargement, enregistrer }}>
      {children}
    </ContextePrefs.Provider>
  )
}

export function usePreferences() {
  const contexte = useContext(ContextePrefs)
  if (!contexte) throw new Error('usePreferences doit être utilisé dans FournisseurPreferences')
  return contexte
}
