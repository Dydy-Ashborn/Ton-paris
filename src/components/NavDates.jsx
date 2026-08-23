import './NavDates.css'

const JOURS_SEMAINE = ['dim', 'lun', 'mar', 'mer', 'jeu', 'ven', 'sam']

// BUG CORRIGÉ (round 2) : ce fichier utilisait encore toISOString().slice(0,10),
// alors que Matchs.jsx avait déjà été corrigé pour utiliser les composants
// locaux (getFullYear/getMonth/getDate). Résultat : les clés des boutons
// (calculées ici en UTC) ne correspondaient plus aux clés des matchs
// (calculées en heure locale dans Matchs.jsx), d'où le décalage d'un jour
// exactement reproductible : "Aujourd'hui" pointait sur la clé UTC de la
// veille (affichait les matchs d'hier), "Hier" pointait sur une clé sans
// aucun match (avant-hier en UTC), et "Demain" pointait sur la clé
// d'aujourd'hui (affichait les matchs d'aujourd'hui). On reconstruit
// maintenant la clé depuis les composants locaux du Date, exactement comme
// cleJourDepuisDate() dans Matchs.jsx, pour que les deux calculs restent
// synchronisés.
function cleJour(date) {
  const annee = date.getFullYear()
  const mois = String(date.getMonth() + 1).padStart(2, '0')
  const jour = String(date.getDate()).padStart(2, '0')
  return `${annee}-${mois}-${jour}`
}

/**
 * Rangée de boutons de dates scrollable horizontalement — Hier / Aujourd'hui
 * / Demain puis les jours suivants avec leur date (ex. "Sam 30") — pour
 * filtrer la page Matchs sur UN seul jour à la fois plutôt que de scroller
 * une longue liste continue. `nbJoursApres` contrôle combien de jours
 * futurs sont proposés après Demain (voir Matchs.jsx).
 */
export default function NavDates({ jourSelectionne, onSelectionner, nbJoursApres = 4 }) {
  const aujourdhui = new Date()
  aujourdhui.setHours(0, 0, 0, 0)

  const jours = []

  const hier = new Date(aujourdhui)
  hier.setDate(hier.getDate() - 1)
  jours.push({ cle: cleJour(hier), libelle: 'Hier' })

  jours.push({ cle: cleJour(aujourdhui), libelle: "Aujourd'hui" })

  const demain = new Date(aujourdhui)
  demain.setDate(demain.getDate() + 1)
  jours.push({ cle: cleJour(demain), libelle: 'Demain' })

  for (let i = 2; i <= nbJoursApres + 1; i++) {
    const date = new Date(aujourdhui)
    date.setDate(date.getDate() + i)
    jours.push({ cle: cleJour(date), libelle: `${JOURS_SEMAINE[date.getDay()]} ${date.getDate()}` })
  }

  return (
    <div className="nav-dates" role="tablist" aria-label="Choisir un jour">
      {jours.map((jour) => (
        <button
          key={jour.cle}
          role="tab"
          aria-selected={jourSelectionne === jour.cle}
          className={`nav-dates__item${jourSelectionne === jour.cle ? ' nav-dates__item--actif' : ''}`}
          onClick={() => onSelectionner(jour.cle)}
        >
          {jour.libelle}
        </button>
      ))}
    </div>
  )
}
