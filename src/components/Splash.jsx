import { useEffect, useState } from 'react'
import './Splash.css'

const DUREE_MIN = 3500 // l'animation va toujours à son terme

export default function Splash({ pret = true, onTermine }) {
  const [sort, setSort] = useState(false)

  useEffect(() => {
    let annule = false

    const minuterie = setTimeout(() => {
      if (annule) return
      setSort(true)
      setTimeout(() => { if (!annule) onTermine?.() }, 750)
    }, DUREE_MIN)

    return () => { annule = true; clearTimeout(minuterie) }
  }, [onTermine])

  return (
    <div className={`splash${sort ? ' splash--sortie' : ''}`} role="status" aria-live="polite">
      <div className="splash__bande splash__bande--rouge" />
      <div className="splash__bande splash__bande--blanche" />

      <div className="splash__mots">
        <span className="splash__ligne splash__ligne--1"><i>Ici c'est</i></span>
        <span className="splash__ligne splash__ligne--2"><i>Ton</i></span>
        <span className="splash__ligne splash__ligne--3"><i>Paris</i></span>
      </div>

      <div className="splash__barre">
        <span className={pret ? 'splash__barre-jauge' : 'splash__barre-jauge splash__barre-jauge--boucle'} />
      </div>
      <p className="splash__etat">Chargement du programme</p>
    </div>
  )
}
