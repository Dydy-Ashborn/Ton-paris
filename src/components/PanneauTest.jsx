import './PanneauTest.css'

/**
 * Bloc générique de boutons de test, visible seulement en mode debug
 * (voir hooks/useDebug.js — config/debug.actif). N'importe quelle page
 * peut y injecter ses propres actions ({ libelle, onClick, enCours }).
 * Toujours identifié visuellement (bordure pointillée jaune) pour ne
 * jamais être confondu avec une action réelle si le flag reste actif
 * par erreur.
 */
export default function PanneauTest({ titre = 'Zone de test', actions }) {
  return (
    <div className="panneau-test">
      <p className="panneau-test__titre">🧪 {titre}</p>
      <div className="panneau-test__boutons">
        {actions.map(({ libelle, onClick, enCours, efface }) => (
          <button
            key={libelle}
            className={`panneau-test__bouton${efface ? ' panneau-test__bouton--efface' : ''}`}
            onClick={onClick}
            disabled={enCours}
          >
            {libelle}
          </button>
        ))}
      </div>
    </div>
  )
}
