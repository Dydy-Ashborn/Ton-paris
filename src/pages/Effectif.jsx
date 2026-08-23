import { useMemo, useState } from 'react'
import { httpsCallable } from 'firebase/functions'
import { Link, useNavigate } from 'react-router-dom'
import { useEffectif } from '../hooks/useEffectif'
import { useDebug } from '../hooks/useDebug'
import { useRafraichir } from '../hooks/useRafraichir'
import { usePreferences } from '../hooks/usePreferences'
import { fonctions } from '../lib/firebase'
import { identifiantJoueur, trouverChouchou } from '../lib/joueur'
import CarteJoueurModal from '../components/CarteJoueurModal'
import './Effectif.css'

// Ordre d'affichage fixe, indépendant de l'ordre d'apparition en base
// (qui suit déjà cet ordre côté Maxifoot, mais autant ne pas en dépendre).
const ORDRE_POSTES = ['Gardien', 'Défenseur', 'Milieu', 'Attaquant']

// BUG SIGNALÉ : cliquer l'étoile ouvrait la fiche joueur en grand au lieu de
// choisir le chouchou. L'étoile était un <button> imbriqué DANS le <li>
// cliquable (onClick + stopPropagation) : en théorie suffisant, mais pour
// éliminer tout risque lié à l'imbrication (et pouvoir le diagnostiquer si
// ça persiste malgré tout — voir les console.debug ci-dessous), l'étoile et
// la zone "ouvrir la fiche" sont maintenant deux <button> FRÈRES, plus
// aucun parent cliquable ne les englobe : structurellement impossible pour
// un clic sur l'un de déclencher l'autre.
function JoueurLigne({ joueur, chouchou, onOuvrir, onChoisirChouchou }) {
  const { nom, nationalite, age, matchsJoues, titularisations, buts, cartonsJaunes, cartonsRouges, minutesJouees } = joueur

  return (
    <li className="effectif__ligne">
      <button
        type="button"
        className={`effectif__etoile${chouchou ? ' effectif__etoile--actif' : ''}`}
        onClick={() => {
          console.debug('[Effectif] étoile cliquée', { nom: joueur.nom, id: joueur.id })
          onChoisirChouchou(joueur)
        }}
        aria-label={chouchou ? 'Ton chouchou' : 'Choisir comme chouchou'}
        aria-pressed={chouchou}
      >
        {chouchou ? '★' : '☆'}
      </button>

      <button
        type="button"
        className="effectif__ouvrir"
        onClick={() => {
          console.debug('[Effectif] ligne cliquée (ouverture fiche)', { nom: joueur.nom })
          onOuvrir(joueur)
        }}
      >
        <div className="effectif__corps">
          <p className="effectif__joueur">{nom}</p>
          <p className="effectif__detail">
            {[nationalite, age ? `${age} ans` : null].filter(Boolean).join(' · ')}
          </p>
        </div>
        <div className="effectif__stats">
          <span className="effectif__stat" title="Matchs joués (titularisations)">
            {matchsJoues} <em>{titularisations > 0 ? `(${titularisations} tit.)` : ''}</em>
          </span>
          {buts > 0 && <span className="effectif__stat effectif__stat--but" title="Buts">⚽ {buts}</span>}
          {cartonsJaunes > 0 && <span className="effectif__stat effectif__stat--jaune" title="Cartons jaunes">{cartonsJaunes}</span>}
          {cartonsRouges > 0 && <span className="effectif__stat effectif__stat--rouge" title="Cartons rouges">{cartonsRouges}</span>}
          <span className="effectif__stat effectif__stat--minutes" title="Minutes jouées">{minutesJouees}'</span>
        </div>
      </button>
    </li>
  )
}

export default function Effectif() {
  const { effectif, chargement } = useEffectif()
  const { preferences, enregistrer } = usePreferences()
  const debug = useDebug()
  const navigue = useNavigate()
  const [joueurOuvert, setJoueurOuvert] = useState(null)
  const [diagnostic, setDiagnostic] = useState(null)

  // e.message porte le message HttpsError envoyé par la Cloud Function
  // (voir functions/collecteEffectifPsg.js) : plus parlant qu'un message générique.
  const [rafraichir, rafraichissement] = useRafraichir(
    () => httpsCallable(fonctions, 'rafraichirEffectifPsg')(),
    {
      libelleSucces: "Effectif à jour.",
      libelleErreur: (e) => e?.message || "Le rafraîchissement a échoué."
    }
  )

  // BUG SIGNALÉ : après clic sur l'étoile, rien ne semblait se passer. En
  // creusant, deux problèmes distincts (voir aussi Chouchou.jsx pour le
  // même correctif côté retrait) : 1) navigue('/chouchou') était appelée
  // en dehors du .then(), donc SYSTÉMATIQUEMENT, même si l'écriture
  // Firestore échouait — l'utilisateur atterrissait sur la page chouchou
  // (ou restait bloqué) sans aucun indice que la sélection n'avait pas
  // pris. 2) aucun retour visuel (toast) en cas d'échec silencieux — seul
  // un console.error invisible sans devtools ouverts. useRafraichir
  // (même pattern que le bouton "Rafraîchir l'effectif" juste au-dessus)
  // corrige les deux : navigation uniquement après écriture confirmée, et
  // toast succès/erreur systématique.
  const [choisirChouchouAction] = useRafraichir(
    async (joueur) => {
      const id = identifiantJoueur(joueur)
      console.debug('[Chouchou] sélection', { nom: joueur.nom, id })
      await enregistrer({ joueurChouchouId: id })
      return joueur
    },
    {
      libelleSucces: (joueur) => `★ ${joueur.nom} est maintenant ton chouchou.`,
      libelleErreur: 'Impossible de définir ce chouchou pour le moment, réessaie.'
    }
  )

  // Bouton de diagnostic, visible seulement si config/debug.actif est vrai
  // (voir hooks/useDebug.js) — reste dans le code en permanence, pas besoin
  // de le retirer une fois la source stabilisée : on le masque juste via le
  // flag, et on le rallume en un instant depuis Firestore si ça recasse un
  // jour (voir functions/diagnosticEffectif.js pour le callable associé).
  const [diagnostiquerBrut, diagnosticEnCours] = useRafraichir(
    async () => {
      const resultat = await httpsCallable(fonctions, 'diagnosticEffectif')()
      setDiagnostic(resultat.data)
      return resultat.data
    },
    { libelleSucces: 'Diagnostic terminé.', libelleErreur: 'Échec du diagnostic.' }
  )
  const diagnostiquer = () => diagnostiquerBrut().catch((e) => setDiagnostic({ ok: false, erreur: e.message }))

  const groupes = useMemo(() => {
    const joueurs = effectif?.joueurs || []
    return ORDRE_POSTES.map((poste) => ({
      poste,
      joueurs: joueurs.filter((j) => j.poste === poste)
    })).filter((g) => g.joueurs.length > 0)
  }, [effectif])

  const chouchou = useMemo(
    () => trouverChouchou(effectif?.joueurs, preferences?.joueurChouchouId),
    [effectif, preferences]
  )

  // Choisir un chouchou emmène directement le voir sur sa page dédiée
  // (voir pages/Chouchou.jsx) — la sélection se fait ici, la mise en avant
  // stylée se fait là-bas. identifiantJoueur() plutôt que joueur.id : voir
  // lib/joueur.js pour le bug que ça corrige (id manquant chez plusieurs
  // joueurs de l'effectif → tout le monde partageait le même id `null`).
  const choisirChouchou = (joueur) => {
    choisirChouchouAction(joueur)
      .then(() => navigue('/chouchou'))
      .catch((e) => console.error('[Chouchou] échec enregistrement', e)) // toast déjà affiché par useRafraichir
  }

  if (chargement) {
    return <p className="attente attente--marge">Chargement de l'effectif…</p>
  }

  return (
    <section className="section">
      <div className="section__tete">
        <h2 className="section__titre">Effectif <em>PSG</em></h2>
      </div>

      {chouchou && (
        <Link className="effectif__bandeau-chouchou" to="/chouchou">
          ★ Ton chouchou : <strong>{chouchou.nom}</strong> — voir sa fiche →
        </Link>
      )}

      {groupes.length === 0 && (
        <p className="attente">Effectif pas encore disponible.</p>
      )}

      {effectif?.entraineur && (
        <p className="effectif__entraineur">
          Entraîneur : <strong>{effectif.entraineur.nom}</strong>
          {effectif.entraineur.nationalite ? ` · ${effectif.entraineur.nationalite}` : ''}
        </p>
      )}

      {groupes.map(({ poste, joueurs }) => (
        <div className="effectif__groupe" key={poste}>
          <h3 className="effectif__titre-groupe">{poste}{joueurs.length > 1 ? 's' : ''}</h3>
          <ul className="effectif__liste">
            {joueurs.map((joueur) => (
              <JoueurLigne
                key={identifiantJoueur(joueur)}
                joueur={joueur}
                chouchou={Boolean(preferences?.joueurChouchouId) && identifiantJoueur(joueur) === preferences.joueurChouchouId}
                onOuvrir={setJoueurOuvert}
                onChoisirChouchou={choisirChouchou}
              />
            ))}
          </ul>
        </div>
      ))}

      <button className="rafraichir" onClick={() => rafraichir().catch(() => {})} disabled={rafraichissement}>
        {rafraichissement ? 'Mise à jour en cours…' : "Rafraîchir l'effectif"}
      </button>

      {debug && (
        <>
          <button className="rafraichir" onClick={diagnostiquer} disabled={diagnosticEnCours} style={{ marginTop: 8 }}>
            {diagnosticEnCours ? 'Diagnostic en cours…' : 'Diagnostiquer'}
          </button>

          {diagnostic && (
            <pre
              style={{
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
                fontSize: 11,
                color: 'var(--acier)',
                background: 'rgba(255,255,255,0.05)',
                padding: 12,
                marginTop: 8,
                maxHeight: 400,
                overflow: 'auto'
              }}
            >
              {JSON.stringify(diagnostic, null, 2)}
            </pre>
          )}
        </>
      )}

      <CarteJoueurModal joueur={joueurOuvert} onFermer={() => setJoueurOuvert(null)} />
    </section>
  )
}
