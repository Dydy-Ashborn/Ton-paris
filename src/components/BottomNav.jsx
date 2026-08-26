import { NavLink } from 'react-router-dom'
import './BottomNav.css'

// Icônes Font Awesome (chargées via CDN, voir index.html) plutôt que les
// glyphes Unicode d'origine (⌂ ▦ ≡ ☰ ⇄...) — rendu très inégal d'une police
// système à l'autre et clairement daté ("kitch"). Solid (fa-solid) partout
// pour un poids visuel homogène entre les icônes.
//
// "Packs" (jeu de cartes FUT, voir pages/Packs.jsx) ajoutée ici plutôt que
// dans une bannière contextuelle façon Chouchou (voir pages/Effectif.jsx,
// "Ton chouchou : ... — voir sa fiche →") : contrairement au chouchou, le
// paquet gratuit quotidien doit rester visible en permanence pour créer le
// réflexe de revenir chaque jour — choix par défaut de session, à revoir si
// 8 icônes tassent trop la barre sur petit écran.
const ENTREES = [
  { chemin: '/', libelle: 'Accueil', icone: 'fa-solid fa-house', exact: true },
  { chemin: '/matchs', libelle: 'Matchs', icone: 'fa-solid fa-calendar-days' },
  { chemin: '/compo', libelle: 'Compo', icone: 'fa-solid fa-users-rectangle' },
  { chemin: '/classement', libelle: 'Classement', icone: 'fa-solid fa-ranking-star' },
  { chemin: '/effectif', libelle: 'Effectif', icone: 'fa-solid fa-users' },
  { chemin: '/mercato', libelle: 'Mercato', icone: 'fa-solid fa-right-left' },
  { chemin: '/packs', libelle: 'Packs', icone: 'fa-solid fa-layer-group' },
  { chemin: '/reglages', libelle: 'Réglages', icone: 'fa-solid fa-gear' }
]

export default function BottomNav() {
  return (
    <nav className="nav" aria-label="Navigation principale">
      {ENTREES.map(({ chemin, libelle, icone, exact }) => (
        <NavLink
          key={chemin}
          to={chemin}
          end={exact}
          className={({ isActive }) => `nav__item${isActive ? ' nav__item--actif' : ''}`}
        >
          <i className={`nav__icone ${icone}`} aria-hidden="true" />
          <span className="nav__libelle">{libelle}</span>
        </NavLink>
      ))}
    </nav>
  )
}
