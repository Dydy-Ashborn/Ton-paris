import { createContext, useCallback, useContext, useRef, useState } from 'react'

const ContexteToasts = createContext(null)

const DUREE_MS = 3200

/**
 * File de toasts globale (succès / erreur) affichée en overlay par
 * ToastHost (voir App.jsx). Sert de brique de base à useRafraichir : tout
 * bouton "maj" de l'app doit rendre un retour visuel explicite, l'utilisateur
 * n'ayant sinon aucun moyen de savoir si son clic a abouti.
 */
export function FournisseurToasts({ children }) {
  const [toasts, setToasts] = useState([])
  const compteur = useRef(0)

  const retirer = useCallback((id) => {
    setToasts((liste) => liste.filter((t) => t.id !== id))
  }, [])

  const notifier = useCallback((message, { type = 'succes' } = {}) => {
    const id = ++compteur.current
    setToasts((liste) => [...liste, { id, message, type }])
    setTimeout(() => retirer(id), DUREE_MS)
  }, [retirer])

  return (
    <ContexteToasts.Provider value={{ toasts, notifier, retirer }}>
      {children}
    </ContexteToasts.Provider>
  )
}

export function useToasts() {
  const contexte = useContext(ContexteToasts)
  if (!contexte) throw new Error('useToasts doit être utilisé dans FournisseurToasts')
  return contexte
}
