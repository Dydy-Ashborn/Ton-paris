import { useEffect, useState } from 'react'
import { cheminPublic } from '../lib/joueur'
import './CarteJoueurModal.css'

// Champs bio affichés dans la grille sous le hero, dans l'ordre de la fiche
// psg.fr (voir captures fournies en session) : Nom complet, Date de
// naissance, Lieu de naissance, Profil (taille + poids réunis, comme sur
// psg.fr), Pied, Nationalité. Numéro de maillot déjà affiché en filigrane
// sur le hero — pas répété ici.
function champsBio(joueur) {
  const profil = [joueur.taille, joueur.poids].filter(Boolean).join(' / ')
  return [
    { cle: 'Nom complet', valeur: joueur.nomComplet },
    { cle: 'Date de naissance', valeur: joueur.dateNaissance },
    { cle: 'Lieu de naissance', valeur: joueur.lieuNaissance },
    { cle: 'Profil', valeur: profil || null },
    { cle: 'Pied', valeur: joueur.pied },
    { cle: 'Nationalité', valeur: joueur.nationalite }
  ].filter((c) => c.valeur)
}

/**
 * Fiche joueur, ouverte au clic sur une carte de l'effectif (voir
 * Effectif.jsx). Reprend le langage visuel déjà utilisé partout ailleurs
 * dans l'app (bandeau rouge, fond --navy-700, typo --font-display) plutôt
 * qu'un habillage à part — l'essai précédent façon carte FIFA Ultimate
 * Team (note globale + 6 stats sur fond doré à facettes) a été jugé raté
 * visuellement et abandonné.
 *
 * Hero + numéro géant en filigrane + bloc bio : mise en page inspirée de la
 * fiche joueur psg.fr (voir captures fournies en session — photo "Motion"
 * scrapée via l'userscript Tampermonkey, voir scripts/maj-photos-effectif.mjs),
 * habillée en navy/rouge au lieu du blanc du site officiel. Les stats de
 * match (Maxifoot) déjà présentes avant cette refonte restent affichées
 * sous le bloc bio, inchangées.
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

  // photoHero (PSG.fr) uniquement — PAS de repli sur photo (Maxifoot, ex.
  // https://photo.maxifoot.fr/phoj/...) : ce hero repose sur une détourure
  // transparente (numéro géant en filigrane DERRIÈRE le joueur, voir
  // .fiche-modale__numero-geant), incompatible avec la photo Maxifoot qui
  // est un cadrage plein cadre opaque. Tant que photoHero n'a pas été
  // importée pour ce joueur (voir scripts/maj-photos-effectif.mjs), on
  // affiche le repli stylé (initiale sur fond uni) plutôt qu'une photo qui
  // casserait visuellement le hero.
  const source = joueur.photoHero ? cheminPublic(joueur.photoHero) : null
  const afficherPhoto = source && !photoEnEchec

  const bio = champsBio(joueur)

  return (
    <div className="fiche-modale" role="dialog" aria-modal="true" onClick={onFermer}>
      <div className="fiche-modale__boite" onClick={(e) => e.stopPropagation()}>
        <button className="fiche-modale__fermer" onClick={onFermer} aria-label="Fermer">×</button>

        <div className="fiche-modale__hero">
          {joueur.numeroMaillot != null && (
            <span className="fiche-modale__numero-geant" aria-hidden="true">{joueur.numeroMaillot}</span>
          )}
          {afficherPhoto ? (
            <img
              className="fiche-modale__photo"
              src={source}
              alt=""
              loading="eager"
              onError={() => setPhotoEnEchec(true)}
            />
          ) : (
            <div className="fiche-modale__photo fiche-modale__photo--vide" aria-hidden="true">
              {(joueur.nom || '?').charAt(0).toUpperCase()}
            </div>
          )}

          <div className="fiche-modale__entete">
            {joueur.poste && <p className="fiche-modale__poste">{joueur.poste}</p>}
            <h3 className="fiche-modale__nom">{joueur.nomComplet || joueur.nom}</h3>
          </div>
        </div>

        {bio.length > 0 && (
          <dl className="fiche-modale__bio">
            {bio.map(({ cle, valeur }) => (
              <div className="fiche-modale__bio-champ" key={cle}>
                <dt className="eyebrow">{cle}</dt>
                <dd>{valeur}</dd>
              </div>
            ))}
          </dl>
        )}

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
