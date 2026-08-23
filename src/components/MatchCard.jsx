import { PRIORITES, formaterHeure } from '../lib/recommandation'
import './MatchCard.css'

// a_verifier : plus de mention texte ("Chaîne à confirmer") — la chaîne
// reste affichée avec son style grisé (.chaine--incertaine) pour qui
// remarque la nuance, sans phrase supplémentaire qui alourdissait chaque
// carte de match.
const LIBELLES_STATUT = {
  confirme: null,
  a_verifier: null,
  manquant: 'Chaîne inconnue'
}

export default function MatchCard({ match, enCours = false, matchLive, onCorriger }) {
  const favori = match.priorite === PRIORITES.CLUB_FAVORI
  const croisee = match.priorite === PRIORITES.AFFICHE_CROISEE
  const chaines = match.chaines || []
  const libelleStatut = LIBELLES_STATUT[match.statut]

  // Résultat OFFICIEL : rempli après coup par functions/collecteResultatsMatchs.js
  // (deux passages par jour — 23h50 et 7h05, voir ce fichier), pour TOUS les
  // matchs du jour, pas seulement les clubs suivis. Absent tant que ce
  // passage n'a pas eu lieu, même pour un match déjà fini dans la réalité —
  // c'est justement ce que le score EN DIRECT ci-dessous comble en attendant.
  const termineOfficiel = match.termine === true && match.scoreDomicile != null && match.scoreExterieur != null

  // Score EN DIRECT (functions/collecteScoresDirect.js, lu via useScoresDirect
  // + onSnapshot par la page appelante, qui fait correspondre ce match à son
  // entrée live par id de club — voir trouverMatchLive dans
  // lib/recommandation.js — et passe le résultat ici) : disponible dès le
  // coup d'envoi, bien avant le résultat officiel du soir/matin, et se met à
  // jour tout seul (onSnapshot, pas de rechargement de page) à chaque
  // écriture du cron live. `minute == null && !termine` signifie que
  // l'entrée existe juste parce que la fenêtre de collecte est ouverte mais
  // le match n'a pas encore démarré (même logique que ScoresDirect.jsx) : on
  // l'ignore alors ici aussi.
  const enDirect = !termineOfficiel && Boolean(matchLive) && (matchLive.termine || matchLive.minute != null)

  const termine = termineOfficiel || (enDirect && matchLive.termine)
  const scoreDomicile = termineOfficiel ? match.scoreDomicile : matchLive?.scoreDomicile ?? 0
  const scoreExterieur = termineOfficiel ? match.scoreExterieur : matchLive?.scoreExterieur ?? 0
  const afficherScore = termineOfficiel || enDirect

  // `enCours` : signal générique transmis par la page appelante (Accueil.jsx,
  // voir statutMatch) quand le coup d'envoi programmé est passé sans qu'aucune
  // donnée live précise ne soit encore disponible (délai de collecte,
  // sélection nationale hors couverture du live...) — juste de quoi
  // remplacer l'heure programmée par un badge honnête, sans score ni minute
  // à afficher puisqu'on n'en a pas.
  const enCoursSansDetail = !termine && !enDirect && enCours

  const enCoursVisuel = (enDirect && !matchLive.termine) || enCoursSansDetail

  const libellePied = termine
    ? 'Terminé'
    : enDirect
      ? (matchLive.minute != null ? `● ${matchLive.minute}'` : '● En cours')
      : enCoursSansDetail
        ? '● En cours'
        : formaterHeure(match.debutISO)

  return (
    <article className={`match${favori ? ' match--favori' : ''}${croisee ? ' match--croisee' : ''}${enCoursVisuel ? ' match--en-cours' : ''}`}>
      <div className="match__tete">
        <span className="match__competition">{match.competition || 'Match'}</span>
        {match.motif && (
          <span className={`match__marque${croisee ? ' match__marque--croisee' : ''}`}>{match.motif}</span>
        )}
      </div>

      <div className="match__affiche">
        <span className="match__equipe">{match.domicile}</span>
        {afficherScore ? (
          <span className="match__score">{scoreDomicile} – {scoreExterieur}</span>
        ) : (
          <span className="match__separateur">vs</span>
        )}
        <span className="match__equipe">{match.exterieur}</span>
      </div>

      <div className="match__pied">
        <span className={`match__heure${termine ? ' match__heure--termine' : ''}${enCoursVisuel ? ' match__heure--en-cours' : ''}`}>
          {libellePied}
        </span>

        {chaines.length > 0 ? (
          chaines.map((chaine) => (
            <span
              key={chaine.nom}
              className={`chaine${chaine.statut === 'a_verifier' ? ' chaine--incertaine' : ''}`}
            >
              {chaine.nom}
            </span>
          ))
        ) : (
          <button className="chaine chaine--absente" onClick={() => onCorriger?.(match)}>
            Ajouter la chaîne
          </button>
        )}

        {libelleStatut && <span className="match__statut">{libelleStatut}</span>}
      </div>
    </article>
  )
}
