import { useEffect, useState, useCallback } from 'react'
import { collection, doc, onSnapshot } from 'firebase/firestore'
import { httpsCallable } from 'firebase/functions'
import { db, fonctions, chemins } from '../lib/firebase'
import { useAuth } from './useAuth'

/**
 * Amis + envoi de cartes (voir functions/packsFut.js : genererCodeAmi,
 * ajouterAmiParCode, envoyerCarteFut). Séparé de useCartesFut.js — deux
 * préoccupations distinctes (catalogue/collection vs relations entre
 * joueurs), lues par le même onglet "Amis" de pages/Packs.jsx.
 *
 * Le code ami de l'utilisateur connecté vit sur users/{uid}.codeAmi (voir
 * chemins.utilisateur, déjà lisible par son propriétaire — aucune règle
 * Firestore à ajouter) plutôt que dans un doc séparé : un seul onSnapshot
 * suffit pour l'afficher.
 */
export function useAmisFut() {
  const { utilisateur } = useAuth()

  const [amis, setAmis] = useState([])
  const [chargementAmis, setChargementAmis] = useState(true)
  const [codeAmi, setCodeAmi] = useState(null)
  const [chargementCode, setChargementCode] = useState(true)

  useEffect(() => {
    if (!utilisateur) {
      setAmis([])
      setChargementAmis(false)
      return
    }
    return onSnapshot(
      collection(db, chemins.amis(utilisateur.uid)),
      (instantane) => {
        setAmis(instantane.docs.map((d) => ({ uid: d.id, ...d.data() })))
        setChargementAmis(false)
      },
      () => setChargementAmis(false)
    )
  }, [utilisateur])

  useEffect(() => {
    if (!utilisateur) {
      setCodeAmi(null)
      setChargementCode(false)
      return
    }
    return onSnapshot(
      doc(db, chemins.utilisateur(utilisateur.uid)),
      (instantane) => {
        setCodeAmi(instantane.exists() ? instantane.data().codeAmi || null : null)
        setChargementCode(false)
      },
      () => setChargementCode(false)
    )
  }, [utilisateur])

  // Génère le code au premier besoin (bouton "Afficher mon code" dans
  // pages/Packs.jsx) plutôt qu'automatiquement à la connexion : évite un
  // appel callable inutile pour les joueurs qui n'utilisent jamais le
  // système d'amis.
  const genererCode = useCallback(async () => {
    const resultat = await httpsCallable(fonctions, 'genererCodeAmi')()
    return resultat.data
  }, [])

  const ajouterAmi = useCallback(async (code) => {
    const resultat = await httpsCallable(fonctions, 'ajouterAmiParCode')({ code })
    return resultat.data
  }, [])

  const envoyerCarte = useCallback(async (carteId, amiUid) => {
    const resultat = await httpsCallable(fonctions, 'envoyerCarteFut')({ carteId, amiUid })
    return resultat.data
  }, [])

  return {
    amis,
    codeAmi,
    genererCode,
    ajouterAmi,
    envoyerCarte,
    chargement: chargementAmis || chargementCode
  }
}
