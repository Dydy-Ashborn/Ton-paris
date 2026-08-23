import { useState } from 'react'
import { useAuth, traduireErreur } from '../hooks/useAuth'
import './Connexion.css'

export default function Connexion() {
  const { connexion, inscription } = useAuth()
  const [mode, setMode] = useState('connexion')
  const [prenom, setPrenom] = useState('')
  const [email, setEmail] = useState('')
  const [motDePasse, setMotDePasse] = useState('')
  const [erreur, setErreur] = useState('')
  const [envoi, setEnvoi] = useState(false)

  const inscriptionActive = mode === 'inscription'

  const soumettre = async (e) => {
    e.preventDefault()
    setErreur('')

    if (inscriptionActive && !prenom.trim()) {
      setErreur('Indique ton prénom.')
      return
    }

    setEnvoi(true)
    try {
      if (inscriptionActive) await inscription(email, motDePasse, prenom)
      else await connexion(email, motDePasse)
    } catch (e) {
      setErreur(traduireErreur(e.code))
      setEnvoi(false)
    }
  }

  const basculer = () => {
    setMode(inscriptionActive ? 'connexion' : 'inscription')
    setErreur('')
  }

  return (
    <div className="connexion">
      <div className="connexion__bande" />

      <div className="connexion__contenu">
        <h1 className="connexion__marque">
          <span>Ici c'est</span>
          <em>Ton</em>
          <em>Paris</em>
        </h1>

        <form className="connexion__form" onSubmit={soumettre}>
          {inscriptionActive && (
            <label className="champ">
              <span className="champ__label">Prénom</span>
              <input
                className="champ__saisie"
                type="text"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
                autoComplete="given-name"
                placeholder="Dylan"
              />
            </label>
          )}

          <label className="champ">
            <span className="champ__label">Adresse e-mail</span>
            <input
              className="champ__saisie"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
              placeholder="toi@exemple.fr"
            />
          </label>

          <label className="champ">
            <span className="champ__label">Mot de passe</span>
            <input
              className="champ__saisie"
              type="password"
              value={motDePasse}
              onChange={(e) => setMotDePasse(e.target.value)}
              autoComplete={inscriptionActive ? 'new-password' : 'current-password'}
              required
              minLength={6}
              placeholder="6 caractères minimum"
            />
          </label>

          {erreur && <p className="connexion__erreur" role="alert">{erreur}</p>}

          <button className="connexion__valider" type="submit" disabled={envoi}>
            {envoi ? 'Un instant…' : inscriptionActive ? 'Créer le compte' : 'Se connecter'}
          </button>
        </form>

        <button className="connexion__bascule" type="button" onClick={basculer}>
          {inscriptionActive ? "J'ai déjà un compte" : 'Créer un compte'}
        </button>
      </div>
    </div>
  )
}
