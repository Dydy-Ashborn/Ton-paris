import { useState } from 'react'
import './NewsItem.css'

export default function NewsItem({ actu, onOuvrir }) {
  const [imageEnEchec, setImageEnEchec] = useState(false)
  const afficherImage = Boolean(actu.image) && !imageEnEchec

  const date = actu.publieLeISO
    ? new Date(actu.publieLeISO).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit' })
    : ''

  return (
    <button className={`actu${afficherImage ? ' actu--image' : ''}`} onClick={() => onOuvrir?.(actu)}>
      <span className="actu__date">{date}</span>
      <div className="actu__corps">
        {actu.categorie && (
          <span className={`actu__categorie${actu.importante ? ' actu__categorie--chaude' : ''}`}>
            {actu.categorie}
          </span>
        )}
        <h3 className="actu__titre">{actu.titre}</h3>
      </div>
      {afficherImage && (
        <img
          className="actu__image"
          src={actu.image}
          alt=""
          loading="lazy"
          onError={() => setImageEnEchec(true)}
        />
      )}
    </button>
  )
}
