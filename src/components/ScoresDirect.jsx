import './ScoresDirect.css'

// Vrai si la source a effectivement des données de jeu pour ce match (score
// qui bouge, minute connue, ou terminé) — par opposition à un match qui
// apparaît dans le doc simplement parce que la fenêtre de collecte s'est
// ouverte un peu avant le coup d'envoi (voir AVANCE_FENETRE_MS dans
// functions/collecteScoresDirect.js) mais qui n'a pas encore démarré dans
// les faits. Sert à ne jamais traiter un match "à venir" comme s'il était
// réellement en direct, que ce soit pour la mise en avant (grand/secondaire)
// ou pour le libellé affiché.
function aDemarre(match) {
  return match.termine || match.minute != null
}

/**
 * Bandeau de scores en direct, affiché en haut de l'Accueil quand au
 * moins un club suivi a un match dans le doc (ou a joué il y a moins de
 * 30 min, voir useScoresDirect). Pas de notification associée (voir
 * functions/collecteScoresDirect.js) — l'utilisateur ne le voit que s'il
 * ouvre l'app, jamais poussé.
 *
 * Le format compact (MatchDirectSecondaire) n'a de sens que pour désencombrer
 * l'écran quand DEUX matchs suivis sont RÉELLEMENT en direct EN MÊME TEMPS —
 * le favori occupe alors le gros bandeau, l'autre passe en discret pour ne
 * pas le concurrencer visuellement. Un match pas encore démarré (juste "à
 * venir", voir aDemarre) n'y a en revanche jamais sa place : "Aujourd'hui",
 * juste en dessous, l'affiche déjà avec son heure de coup d'envoi — le
 * répéter ici en discret serait redondant, et pire, se lisait comme un
 * second direct alors que rien n'a commencé.
 *
 * Priorité du gros bandeau ("grands") :
 *   1. Le favori s'il a réellement démarré (ou est terminé).
 *   2. Sinon, tout autre club suivi réellement en direct (peut être
 *      plusieurs à la fois) — un favori pas-encore-démarré ne s'affiche
 *      alors nulle part dans ce bandeau (couvert par "Aujourd'hui").
 *   3. Sinon (rien n'a encore démarré) : aperçu "à venir" habituel, un seul
 *      bloc — favori en priorité s'il existe, sinon les autres clubs
 *      suivis. Jamais de secondaire ici : par définition, rien d'autre
 *      n'est simultané puisque rien n'a démarré.
 *
 * Un match terminé — ou pas encore démarré — perd la couleur "live" (rouge,
 * pastille pulsante) au profit d'un traitement neutre : le rouge signale un
 * match EN COURS, ni un résultat déjà acquis, ni un match qui n'a pas
 * commencé.
 */
export default function ScoresDirect({ matchFavori, autresMatchs }) {
  if (!matchFavori && autresMatchs.length === 0) return null

  const favoriActif = matchFavori && aDemarre(matchFavori)
  const autresActifs = autresMatchs.filter(aDemarre)

  let grands
  let secondaires

  if (favoriActif) {
    grands = [matchFavori]
    secondaires = autresActifs
  } else if (autresActifs.length > 0) {
    grands = autresActifs
    secondaires = []
  } else {
    grands = matchFavori ? [matchFavori] : autresMatchs
    secondaires = []
  }

  return (
    <div className="direct">
      {grands.map((match) => (
        <MatchDirectGrand key={match.idBrut} match={match} />
      ))}

      {secondaires.length > 0 && (
        <div className="direct__secondaires">
          {secondaires.map((match) => (
            <MatchDirectSecondaire key={match.idBrut} match={match} />
          ))}
        </div>
      )}
    </div>
  )
}

function MatchDirectGrand({ match }) {
  const demarre = aDemarre(match)
  return (
    <div
      className={`direct__favori${match.termine ? ' direct__favori--termine' : ''}${!demarre ? ' direct__favori--a-venir' : ''}`}
    >
      <span className="direct__puce" aria-hidden="true">
        {match.termine ? 'TERMINÉ' : demarre ? '● DIRECT' : 'À VENIR'}
      </span>
      <div className="direct__affiche">
        <span className="direct__equipe">{match.domicile}</span>
        <span className="direct__score">
          {match.scoreDomicile ?? 0} – {match.scoreExterieur ?? 0}
        </span>
        <span className="direct__equipe">{match.exterieur}</span>
      </div>
      {/* Minute affichée uniquement quand le match joue réellement : le
          "TERMINÉ" et le "À VENIR" ci-dessus suffisent déjà à couvrir les
          deux autres états, pas besoin d'une seconde ligne redondante. */}
      {match.minute != null && (
        <span className="direct__minute">{match.minute}'</span>
      )}
    </div>
  )
}

// N'est jamais appelé pour un match "à venir" (voir ScoresDirect : secondaires
// ne contient que le résultat de .filter(aDemarre)) — donc uniquement les
// états réellement en direct ou terminé à couvrir ici.
function MatchDirectSecondaire({ match }) {
  return (
    <div className={`direct__ligne${match.termine ? ' direct__ligne--termine' : ''}`}>
      <span className={`direct__puce direct__puce--petite${match.termine ? ' direct__puce--petite-termine' : ''}`} aria-hidden="true">●</span>
      <span className="direct__ligne-texte">
        {match.domicile} {match.scoreDomicile ?? 0} – {match.scoreExterieur ?? 0} {match.exterieur}
      </span>
      <span className="direct__ligne-minute">
        {match.termine ? 'Fin' : `${match.minute}'`}
      </span>
    </div>
  )
}
