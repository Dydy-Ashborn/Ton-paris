import { useEffect, useState } from 'react'
import './CarteJoueurModal.css'

/**
 * Fiche joueur, ouverte au clic sur un joueur dans l'effectif (voir
 * Effectif.jsx). Reprend le langage visuel déjà utilisé partout ailleurs
 * dans l'app (bandeau rouge, fond --navy-700, typo --font-display) plutôt
 * qu'un habillage à part — l'essai précédent façon carte FIFA Ultimate
 * Team (note globale + 6 stats sur fond doré à facettes) a été jugé raté
 * visuellement et abandonné.
 */
export default function CarteJoueurModal({ joueur, onFermer }) {
  const [photoEnEchec, setPhotoEnEchec] = useState(false)

  useEffect(() => {
    if (!joueur) return
    setPhotoEnEchec(false)
    const echap = (e) => { if (e.key === 'Escape') onFermer?.() }
    document.addEventListener('keydown', echap)
    return () => document.removeEventListener('keydown', echap)
  }, [joueur, onFermer])

  if (!joueur) return null

  // Fallback explicite à 0 plutôt que d'afficher "undefined" si un joueur
  // (ex. jeune tout juste intégré à l'effectif, jamais apparu en match
  // officiel) n'a pas encore ces champs en base.
  const matchsJoues = joueur.matchsJoues ?? 0
  const titularisations = joueur.titularisations ?? 0
  const buts = joueur.buts ?? 0
  const minutesJouees = joueur.minutesJouees ?? 0
  const cartonsJaunes = joueur.cartonsJaunes ?? 0
  const cartonsRouges = joueur.cartonsRouges ?? 0

  const afficherPhoto = joueur.photo && !photoEnEchec

  return (
    <div className="fiche-modale" role="dialog" aria-modal="true" onClick={onFermer}>
      <div className="fiche-modale__boite" onClick={(e) => e.stopPropagation()}>
        <button className="fiche-modale__fermer" onClick={onFermer} aria-label="Fermer">×</button>

        <div className="fiche-modale__portrait">
          {afficherPhoto ? (
            <img
              className="fiche-modale__photo"
              src={joueur.photo}
              alt=""
              loading="eager"
              onError={() => setPhotoEnEchec(true)}
            />
          ) : (
            <div className="fiche-modale__photo fiche-modale__photo--vide" aria-hidden="true">
              {(joueur.nom || '?').charAt(0).toUpperCase()}
            </div>
          )}
          {joueur.numeroMaillot != null && (
            <div className="fiche-modale__numero">{joueur.numeroMaillot}</div>
          )}
        </div>

        <div className="fiche-modale__entete">
          {joueur.poste && <p className="fiche-modale__poste">{joueur.poste}</p>}
          <h3 className="fiche-modale__nom">{joueur.nomComplet || joueur.nom}</h3>
          <p className="fiche-modale__meta">
            {[joueur.nationalite, joueur.age ? `${joueur.age} ans` : null, joueur.taille, joueur.poids]
              .filter(Boolean)
              .join(' · ')}
          </p>
        </div>

        <div className="fiche-modale__stats">
          <div className="fiche-modale__stat">
            <span className="fiche-modale__stat-valeur">{matchsJoues}</span>
            <span className="fiche-modale__stat-cle">Match{matchsJoues > 1 ? 's' : ''}</span>
          </div>
          <div className="fiche-modale__stat">
            <span className="fiche-modale__stat-valeur">{titularisations}</span>
            <span className="fiche-modale__stat-cle">Titu.</span>
          </div>
          <div className="fiche-modale__stat">
            <span className="fiche-modale__stat-valeur">{buts}</span>
            <span className="fiche-modale__stat-cle">But{buts > 1 ? 's' : ''}</span>
          </div>
          <div className="fiche-modale__stat">
            <span className="fiche-modale__stat-valeur">{minutesJouees}'</span>
            <span className="fiche-modale__stat-cle">Minutes</span>
          </div>
        </div>

        {(cartonsJaunes > 0 || cartonsRouges > 0) && (
          <div className="fiche-modale__discipline">
            {cartonsJaunes > 0 && (
              <span className="fiche-modale__carton fiche-modale__carton--jaune">{cartonsJaunes} carton{cartonsJaunes > 1 ? 's' : ''} jaune{cartonsJaunes > 1 ? 's' : ''}</span>
            )}
            {cartonsRouges > 0 && (
              <span className="fiche-modale__carton fiche-modale__carton--rouge">{cartonsRouges} carton{cartonsRouges > 1 ? 's' : ''} rouge{cartonsRouges > 1 ? 's' : ''}</span>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
