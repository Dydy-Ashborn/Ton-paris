import { useState, useCallback } from 'react'
import { useToasts } from './useToasts'

/**
 * Encapsule le pattern répété sur chaque bouton "maj" de l'app
 * (setEnCours(true) → await appel → toast succès/erreur → finally
 * setEnCours(false)), pour que le retour visuel soit systématique sans
 * dupliquer le try/catch/finally dans chaque page.
 *
 * `action` : fonction async à exécuter (ex. l'appel httpsCallable).
 * `libelleSucces` : message affiché si l'action résout sans lever — peut
 *   être une fonction (resultat) => message pour un texte dynamique.
 * `libelleErreur` : message affiché si l'action lève (par défaut générique).
 */
export function useRafraichir(action, { libelleSucces = 'Mise à jour effectuée.', libelleErreur = 'Échec de la mise à jour, réessaie.' } = {}) {
  const [enCours, setEnCours] = useState(false)
  const { notifier } = useToasts()

  const lancer = useCallback(async (...args) => {
    setEnCours(true)
    try {
      const resultat = await action(...args)
      const message = typeof libelleSucces === 'function' ? libelleSucces(resultat) : libelleSucces
      notifier(message, { type: 'succes' })
      return resultat
    } catch (e) {
      const message = typeof libelleErreur === 'function' ? libelleErreur(e) : libelleErreur
      notifier(message, { type: 'erreur' })
      throw e
    } finally {
      setEnCours(false)
    }
  }, [action, libelleSucces, libelleErreur, notifier])

  return [lancer, enCours]
}
