import { useEffect, useState } from 'react'
import './Splash.css'

// SIGNALÉ EN SESSION ("c'est joli mais faut pas que ça mette trop de temps
// à s'ouvrir, sinon c'est chiant") : 3500ms + 750ms de sortie = 4250ms avant
// de pouvoir toucher l'app, calé sur l'ancien enchaînement (jauge de
// progression qui finissait vers 3.45s). Toute la chorégraphie (étoiles →
// blason → mots → barre, voir Splash.css) a été resserrée d'un même facteur
// pour garder EXACTEMENT le même enchaînement/le même rythme relatif, juste
// ~2x plus rapide — la jauge finit maintenant vers 1.9s. 2000ms laisse une
// toute petite marge après la fin de la jauge plutôt que de couper pile
// dessus.
const DUREE_MIN = 2000 // l'animation va toujours à son terme

// Même correctif que trouverLogo() (pages/Accueil.jsx) / cheminPublic()
// (lib/joueur.js) : sur Firebase Hosting (servi à "/") et sur GitHub Pages
// (servi dans "/Ton-paris/", voir BASE dans vite.config.js) les chemins
// stockés en dur ("/logos/...") doivent être résolus par rapport à
// import.meta.env.BASE_URL, pas à la racine du domaine. Pas d'import
// depuis lib/joueur.js ici : Splash n'a rien à voir avec un joueur, un
// petit helper local évite un import qui n'aurait aucun sens sémantique.
const chemin = (c) => `${import.meta.env.BASE_URL}${c.replace(/^\//, '')}`

export default function Splash({ pret = true, onTermine }) {
  const [sort, setSort] = useState(false)

  useEffect(() => {
    let annule = false

    const minuterie = setTimeout(() => {
      if (annule) return
      setSort(true)
      setTimeout(() => { if (!annule) onTermine?.() }, 450)
    }, DUREE_MIN)

    return () => { annule = true; clearTimeout(minuterie) }
  }, [onTermine])

  return (
    <div className={`splash${sort ? ' splash--sortie' : ''}`} role="status" aria-live="polite">
      <div className="splash__scene">
        {/* Les 2 étoiles de champion d'Europe, l'une après l'autre, PUIS le
            blason — DEMANDÉ EN SESSION. Même logique que sur un maillot :
            les étoiles sont AU-DESSUS du blason, pas dedans. Deux <img>
            séparées (pas une seule image dupliquée en CSS) : chacune anime
            sur son propre délai (voir Splash.css, --1/--2), et le fichier
            est un asset unique réutilisé deux fois, pas deux fichiers. */}
        <div className="splash__etoiles">
          <img
            className="splash__etoile splash__etoile--1"
            src={chemin('/logos/etoile-c1.png')}
            alt=""
            aria-hidden="true"
          />
          <img
            className="splash__etoile splash__etoile--2"
            src={chemin('/logos/etoile-c1.png')}
            alt=""
            aria-hidden="true"
          />
        </div>

        <div className="splash__blason">
          <span className="splash__blason-halo" aria-hidden="true" />
          {/* Anneaux "sonar" centrés sur le blason, PAS la bande diagonale
              d'origine — SIGNALÉ EN SESSION : la diagonale rouge/blanche qui
              balaie tout l'écran ne collait plus une fois le contenu
              recentré autour d'un blason rond (elle traversait l'écran sans
              rapport avec le cercle du blason). Trois anneaux qui partent du
              même centre que le blason et s'étendent en s'estompant : reste
              symétrique, colle à la forme ronde du blason, et garde une
              présence rouge/or (identité PSG) sans redessiner un élément qui
              n'a plus de sens avec cette mise en page. */}
          <span className="splash__blason-ping splash__blason-ping--1" aria-hidden="true" />
          <span className="splash__blason-ping splash__blason-ping--2" aria-hidden="true" />
          <span className="splash__blason-ping splash__blason-ping--3" aria-hidden="true" />
          <img className="splash__blason-image" src={chemin('/logos/psg.svg')} alt="" aria-hidden="true" />
        </div>

        <div className="splash__mots">
          <span className="splash__ligne splash__ligne--1"><i>Ici c'est</i></span>
          <span className="splash__ligne splash__ligne--2"><i>Ton</i></span>
          <span className="splash__ligne splash__ligne--3"><i>Paris</i></span>
        </div>
      </div>

      <div className="splash__barre">
        <span className={pret ? 'splash__barre-jauge' : 'splash__barre-jauge splash__barre-jauge--boucle'} />
      </div>
      <p className="splash__etat">Chargement du programme</p>
    </div>
  )
}
