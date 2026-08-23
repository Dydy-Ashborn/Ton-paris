import { createContext, useContext, useEffect, useState } from 'react'
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
  setPersistence,
  browserLocalPersistence
} from 'firebase/auth'
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore'
import { auth, db, chemins } from '../lib/firebase'

const ContexteAuth = createContext(null)

const MESSAGES = {
  'auth/invalid-email': "Cette adresse e-mail n'est pas valide.",
  'auth/invalid-credential': 'Adresse ou mot de passe incorrect.',
  'auth/wrong-password': 'Adresse ou mot de passe incorrect.',
  'auth/user-not-found': 'Aucun compte ne correspond à cette adresse.',
  'auth/email-already-in-use': 'Un compte existe déjà avec cette adresse.',
  'auth/weak-password': 'Le mot de passe doit faire au moins 6 caractères.',
  'auth/too-many-requests': 'Trop de tentatives. Réessaie dans quelques minutes.',
  'auth/network-request-failed': 'Connexion impossible. Vérifie ton réseau.'
}

export function traduireErreur(code) {
  return MESSAGES[code] || "Quelque chose s'est mal passé. Réessaie."
}

export function FournisseurAuth({ children }) {
  const [utilisateur, setUtilisateur] = useState(null)
  const [chargement, setChargement] = useState(true)

  useEffect(() => {
    setPersistence(auth, browserLocalPersistence).catch(() => {})

    return onAuthStateChanged(auth, (u) => {
      setUtilisateur(u)
      setChargement(false)
    })
  }, [])

  const connexion = async (email, motDePasse) => {
    const { user } = await signInWithEmailAndPassword(auth, email.trim(), motDePasse)
    return user
  }

  const inscription = async (email, motDePasse, prenom) => {
    const { user } = await createUserWithEmailAndPassword(auth, email.trim(), motDePasse)
    await updateProfile(user, { displayName: prenom.trim() })

    // Fiche utilisateur dans le tenant. Le premier inscrit devient aussi admin.
    const refUtilisateur = doc(db, chemins.utilisateur(user.uid))
    await setDoc(refUtilisateur, {
      prenom: prenom.trim(),
      email: email.trim(),
      creeLe: serverTimestamp()
    })

    const refAdmin = doc(db, chemins.admin(user.uid))
    const admin = await getDoc(refAdmin)
    if (!admin.exists()) {
      await setDoc(refAdmin, { prenom: prenom.trim(), creeLe: serverTimestamp() }, { merge: true })
    }

    return user
  }

  const deconnexion = () => signOut(auth)

  return (
    <ContexteAuth.Provider value={{ utilisateur, chargement, connexion, inscription, deconnexion }}>
      {children}
    </ContexteAuth.Provider>
  )
}

export function useAuth() {
  const contexte = useContext(ContexteAuth)
  if (!contexte) throw new Error('useAuth doit être utilisé dans FournisseurAuth')
  return contexte
}
