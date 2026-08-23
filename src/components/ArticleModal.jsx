import { useEffect } from 'react'
import './ArticleModal.css'

/**
 * Lecture d'un article sans quitter l'app : titre, image, et le texte
 * intégral quand la source le fournit (champ `corps`) — sinon repli sur le
 * résumé seul (ex. Mercato structuré, qui n'a pas de corps dédié). Aucune
 * mention de la source ni lien externe : l'article complet est déjà affiché
 * ici, pas besoin de renvoyer ailleurs.
 */
export default function ArticleModal({ actu, onFermer }) {
  useEffect(() => {
    if (!actu) return
    const echap = (e) => { if (e.key === 'Escape') onFermer?.() }
    document.addEventListener('keydown', echap)
    return () => document.removeEventListener('keydown', echap)
  }, [actu, onFermer])

  if (!actu) return null

  const date = actu.publieLeISO
    ? new Date(actu.publieLeISO).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' })
    : ''

  return (
    <div className="article-modale" role="dialog" aria-modal="true" onClick={onFermer}>
      <div className="article-modale__boite" onClick={(e) => e.stopPropagation()}>
        <button className="article-modale__fermer" onClick={onFermer} aria-label="Fermer">×</button>

        {actu.image && (
          <img className="article-modale__image" src={actu.image} alt="" loading="eager" />
        )}

        <div className="article-modale__contenu">
          {actu.categorie && (
            <span className={`article-modale__categorie${actu.importante ? ' article-modale__categorie--chaude' : ''}`}>
              {actu.categorie}
            </span>
          )}

          <h2 className="article-modale__titre">{actu.titre}</h2>

          {date && <p className="article-modale__meta">{date}</p>}

          {actu.corps ? (
            actu.corps.split('\n\n').map((paragraphe, index) => (
              <p key={index} className="article-modale__resume">{paragraphe}</p>
            ))
          ) : (
            actu.resume && <p className="article-modale__resume">{actu.resume}</p>
          )}
        </div>
      </div>
    </div>
  )
}
