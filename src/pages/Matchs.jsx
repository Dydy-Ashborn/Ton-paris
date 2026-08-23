import { useEffect, useMemo, useState } from 'react'
import { httpsCallable } from 'firebase/functions'
import { usePreferences } from '../hooks/usePreferences'
import { useDiffusions, debutDuJourMoins } from '../hooks/useDiffusions'
import { useScoresDirect } from '../hooks/useScoresDirect'
import { useRafraichir } from '../hooks/useRafraichir'
import { recommander, formaterJour, trouverMatchLive } from '../lib/recommandation'
import { chargerClubs } from '../lib/catalogue'
import { fonctions } from '../lib/firebase'
import MatchCard from '../components/MatchCard'
import ConfirmModal from '../components/ConfirmModal'
import NavDates from '../components/NavDates'
import './Matchs.css'

const NB_JOURS_APRES_DEMAIN = 4

// Construit la clé de jour en heure LOCALE à partir d'un Date (même logique
// que NavDates.jsx). Centralisé ici pour être réutilisé par cleJourISO et
// cleJourAujourdhui ci-dessous — évite de dupliquer le padStart/etc.
function cleJourDepuisDate(date) {
  const annee = date.getFullYear()
  const mois = String(date.getMonth() + 1).padStart(2, '0')
  const jour = String(date.getDate()).padStart(2, '0')
  return `${annee}-${mois}-${jour}`
}

// BUG CORRIGÉ : dateISO.slice(0, 10) prenait la date telle qu'encodée en
// UTC dans la chaîne ISO (debutISO), pas le jour local. Un match à 21h
// heure de Paris (UTC+2) est stocké en "...T19:00:00.000Z" — le slice
// donnait donc le bon jour ce cas précis, mais un match tôt le matin
// (minuit-2h heure de Paris) bascule sur la date UTC de LA VEILLE, et
// inversement en hiver un match tard le soir peut basculer sur le
// lendemain UTC. Résultat : les clés calculées ici (UTC) ne correspondaient
// plus aux clés des boutons NavDates (heure locale), d'où le décalage
// signalé ("Aujourd'hui affiche hier", etc.). On reconstruit maintenant un
// vrai Date puis on prend ses composants locaux, comme pour les boutons.
function cleJourISO(dateISO) {
  return cleJourDepuisDate(new Date(dateISO))
}

function cleJourAujourdhui() {
  return cleJourDepuisDate(new Date())
}

export default function Matchs() {
  const { preferences } = usePreferences()
  // Hier inclus (voir NavDates) : la requête doit couvrir un jour de plus
  // dans le passé que le défaut (aujourd'hui minuit) utilisé par Accueil.
  const { diffusions, chargement } = useDiffusions({ depuis: debutDuJourMoins(1), nombre: 200 })
  const { matchFavori, autresMatchs } = useScoresDirect(preferences)
  const [jourSelectionne, setJourSelectionne] = useState(cleJourAujourdhui())
  const [correction, setCorrection] = useState(null)
  const [saisie, setSaisie] = useState('')
  const [clubs, setClubs] = useState([])

  useEffect(() => { chargerClubs().then(setClubs) }, [])

  // Matchs actuellement remontés par le bandeau live — voir trouverMatchLive
  // dans lib/recommandation.js, qui s'en sert pour donner à chaque carte son
  // score en direct (avant même le résultat officiel du soir/matin).
  const matchsLive = useMemo(() => [matchFavori, ...autresMatchs].filter(Boolean), [matchFavori, autresMatchs])

  // Plus de filtre par club : au maximum ~5 matchs par jour, pas besoin de
  // trier — on affiche tout ce qui est programmé ce jour-là.
  const recommandes = useMemo(() => recommander(diffusions, preferences, clubs), [diffusions, preferences, clubs])

  // Un seul jour affiché à la fois (voir NavDates) plutôt que la liste
  // continue groupée par jour d'avant — le bouton de date sert de filtre,
  // pas de simple raccourci de scroll.
  const duJourSelectionne = useMemo(
    () => recommandes.filter((m) => cleJourISO(m.debutISO) === jourSelectionne),
    [recommandes, jourSelectionne]
  )

  const libelleJour = duJourSelectionne[0] ? formaterJour(duJourSelectionne[0].debutISO) : null

  const [rafraichir, rafraichissement] = useRafraichir(
    () => httpsCallable(fonctions, 'rafraichirDiffusions')(),
    { libelleSucces: 'Chaînes à jour.', libelleErreur: 'Échec de la mise à jour des chaînes.' }
  )

  const [confirmerCorrectionBrute] = useRafraichir(
    () => httpsCallable(fonctions, 'corrigerChaine')({ matchId: correction.id, chaine: saisie.trim() }),
    { libelleSucces: 'Chaîne enregistrée.', libelleErreur: "Échec de l'enregistrement de la chaîne." }
  )

  const confirmerCorrection = async () => {
    if (!correction || !saisie.trim()) return
    try {
      await confirmerCorrectionBrute()
    } catch {
      // Le toast d'erreur est déjà affiché par useRafraichir — on ferme quand
      // même la modale pour ne pas bloquer l'utilisateur dessus.
    } finally {
      setCorrection(null)
      setSaisie('')
    }
  }

  return (
    <section className="section">
      <NavDates
        jourSelectionne={jourSelectionne}
        onSelectionner={setJourSelectionne}
        nbJoursApres={NB_JOURS_APRES_DEMAIN}
      />

      {chargement && <p className="attente">Chargement du calendrier…</p>}

      {!chargement && duJourSelectionne.length === 0 && (
        <div className="vide">
          <p className="vide__titre">Rien de programmé</p>
          <p className="vide__texte">Aucun match programmé ce jour-là.</p>
        </div>
      )}

      {duJourSelectionne.length > 0 && (
        <div className="jour">
          {libelleJour && <h2 className="jour__titre">{libelleJour}</h2>}
          {duJourSelectionne.map((match) => (
            <MatchCard
              key={match.id}
              match={match}
              matchLive={trouverMatchLive(match, matchsLive)}
              onCorriger={(m) => { setCorrection(m); setSaisie('') }}
            />
          ))}
        </div>
      )}

      {!chargement && (
        <button className="rafraichir" onClick={() => rafraichir().catch(() => {})} disabled={rafraichissement}>
          {rafraichissement ? 'Mise à jour en cours…' : 'Mettre à jour les chaînes'}
        </button>
      )}

      <ConfirmModal
        ouvert={Boolean(correction)}
        message={
          <>
            <span className="correction__intro">
              Sur quelle chaîne passe {correction?.domicile} – {correction?.exterieur} ?
            </span>
            <input
              className="correction__saisie"
              type="text"
              value={saisie}
              onChange={(e) => setSaisie(e.target.value)}
              placeholder="Ligue 1+, Canal+, DAZN…"
              autoFocus
            />
          </>
        }
        texteConfirmer="Enregistrer"
        onConfirm={confirmerCorrection}
        onCancel={() => { setCorrection(null); setSaisie('') }}
      />
    </section>
  )
}
