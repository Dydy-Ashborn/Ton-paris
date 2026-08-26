import { useEffect, useState } from 'react'
import CarteFut from './CarteFut'
import './CadeauModal.css'

/**
 * Popup plein écran "cadeau à ouvrir" (25/08/2026, demandé en session :
 * "quand j'envoie une carte à mon ami je veux qu'il reçoive une
 * notification... quand il ouvre l'app ou qu'il est déjà dessus si je lui
 * envoie une carte je veux qu'il ait une pop up stylé plein écran avec
 * animation. Un cadeau à ouvrir, il clique et le cadeau s'offre la carte
 * s'affiche") — voir hooks/useCadeauxFut.js pour la détection (onSnapshot
 * sur cadeauxFut(uid)) et functions/packsFut.js, envoyerCarteFut pour
 * l'écriture + le push qui accompagne ce même événement.
 *
 * Montée GLOBALEMENT dans App.jsx (pas dans pages/Packs.jsx) — doit pouvoir
 * s'afficher quelle que soit la page où se trouve le destinataire, même
 * s'il n'a jamais ouvert l'onglet Packs. CSS totalement autonome (pas de
 * dépendance à Packs.css), même si le style s'inspire volontairement de
 * OverlayOuverture/CarteFlip (Packs.jsx) pour rester visuellement cohérent
 * avec le reste du système de cartes.
 *
 * Une file plutôt qu'un seul cadeau (voir `cadeaux` dans useCadeauxFut) —
 * si plusieurs sont en attente, on affiche toujours le PREMIER de la liste
 * ici ; une fois ouvert (marquerOuvert), l'onSnapshot le retire du tableau
 * et le suivant apparaît automatiquement au prochain rendu.
 */
export default function CadeauModal({ cadeaux, onOuvrir }) {
  const cadeau = cadeaux?.[0] || null
  // Deux étapes : emballé (tap pour ouvrir) -> révélé (la carte, plein
  // écran, façon CarteFlip dans Packs.jsx). Remis à zéro à chaque nouveau
  // cadeau (voir la key posée sur le conteneur plus bas) pour ne jamais
  // hériter de l'état "révélé" du cadeau précédent.
  const [ouvert, setOuvert] = useState(false)

  useEffect(() => {
    if (!cadeau) return
    const echap = (e) => { if (e.key === 'Escape' && ouvert) fermer() }
    document.addEventListener('keydown', echap)
    return () => document.removeEventListener('keydown', echap)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cadeau?.id, ouvert])

  if (!cadeau) return null

  const fermer = () => {
    onOuvrir(cadeau.id)
    setOuvert(false)
  }

  return (
    <div key={cadeau.id} className="cadeau-modale" role="dialog" aria-modal="true">
      {!ouvert ? (
        <button type="button" className="cadeau-modale__paquet-zone" onClick={() => setOuvert(true)}>
          <div className="cadeau-modale__boite" aria-hidden="true">
            <i className="fa-solid fa-gift" />
          </div>
          <p className="cadeau-modale__titre">Un cadeau de {cadeau.dePseudo || 'un ami'} !</p>
          <p className="cadeau-modale__aide">Touche pour l'ouvrir</p>
        </button>
      ) : (
        <div className="cadeau-modale__revele" onClick={fermer}>
          <p className="cadeau-modale__titre cadeau-modale__titre--revele">Tu as reçu :</p>
          {cadeau.carte ? (
            <div className="cadeau-modale__carte" onClick={(e) => e.stopPropagation()}>
              <CarteFut carte={cadeau.carte} taille="l" />
            </div>
          ) : (
            <p className="cadeau-modale__aide">Carte introuvable (peut-être retirée du catalogue depuis).</p>
          )}
          <button type="button" className="cadeau-modale__fermer" onClick={fermer}>Merci !</button>
        </div>
      )}
    </div>
  )
}
