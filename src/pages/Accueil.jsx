import { useEffect, useMemo, useState } from 'react'
import { httpsCallable } from 'firebase/functions'
import { Link } from 'react-router-dom'
import { usePreferences } from '../hooks/usePreferences'
import { useDiffusions } from '../hooks/useDiffusions'
import { useActus } from '../hooks/useActus'
import { useRafraichir } from '../hooks/useRafraichir'
import { useScoresDirect } from '../hooks/useScoresDirect'
import { useHorlogeVivante } from '../hooks/useHorlogeVivante'
import { useDebug } from '../hooks/useDebug'
import { recommander, detecterChevauchements, memeJour, formaterHeure, formaterJour, trouverMatchLive, PRIORITES } from '../lib/recommandation'
import { correspond } from '../lib/equipes'
import { chargerClubs } from '../lib/catalogue'
import { fonctions } from '../lib/firebase'
import MatchCard from '../components/MatchCard'
import NewsItem from '../components/NewsItem'
import ConfirmModal from '../components/ConfirmModal'
import ScoresDirect from '../components/ScoresDirect'
import PanneauTest from '../components/PanneauTest'
import './Accueil.css'

export default function Accueil({ onOuvrirArticle }) {
  const { preferences } = usePreferences()
  const { diffusions, chargement: matchsEnCours } = useDiffusions()
  const { actus, chargement: actusEnCours } = useActus()
  const { matchFavori, autresMatchs, aDesMatchsEnDirect } = useScoresDirect(preferences)
  const debug = useDebug()
  const [correction, setCorrection] = useState(null)
  const [saisie, setSaisie] = useState('')
  const [clubs, setClubs] = useState([])
  const [logoDomicileEnEchec, setLogoDomicileEnEchec] = useState(false)
  const [logoExterieurEnEchec, setLogoExterieurEnEchec] = useState(false)

  useEffect(() => { chargerClubs().then(setClubs) }, [])

  // Force une réévaluation régulière des filtres basés sur l'heure
  // ci-dessous : un useMemo ne se redéclenche QUE si ses dépendances
  // changent, jamais juste parce que le temps a passé. Sans cette horloge,
  // un match qui démarre pendant que l'app reste ouverte restait figé
  // "à venir" avec son heure de coup d'envoi jusqu'au prochain
  // rafraîchissement de données (diffusions, live...) — pas avant.
  const horloge = useHorlogeVivante(30000)

  const recommandes = useMemo(() => recommander(diffusions, preferences, clubs), [diffusions, preferences, clubs])

  const duJour = useMemo(() => recommandes.filter((m) => memeJour(m.debutISO)), [recommandes])

  // Ids de club actuellement affichés dans le bandeau ScoresDirect (favori
  // en grand ou autre club suivi en discret) — sert de DEUXIÈME signal
  // "en cours" ci-dessous, en plus de l'heure. Comparaison par id de club
  // (partagé entre tvBroadcasts et live/scores), pas par nom d'équipe :
  // exact, et ça fonctionne aussi avec les scénarios de test de
  // functions/donneesTest.js (panneau debug), qui taguent leurs matchs
  // fictifs avec le VRAI id du club favori de l'utilisateur qui teste — un
  // clic sur "Favori en direct" fait donc immédiatement basculer la vraie
  // carte du favori ici en "En cours", sans attendre le vrai coup d'envoi.
  //
  // On ignore les matchs qui n'ont pas encore réellement démarré (présents
  // dans le doc juste parce que la fenêtre de collecte s'ouvre un peu avant
  // le coup d'envoi, voir AVANCE_FENETRE_MS dans
  // functions/collecteScoresDirect.js — pas de minute connue, pas terminé) :
  // sinon la carte "Aujourd'hui" du club passait "En cours" avant même que
  // le match ait commencé, alors qu'elle affiche encore l'heure programmée.
  const idsClubsEnDirect = useMemo(() => {
    const ids = new Set()
    for (const m of [matchFavori, ...autresMatchs].filter(Boolean)) {
      if (!m.termine && m.minute == null) continue
      for (const id of m.clubs || []) ids.add(id)
    }
    return ids
  }, [matchFavori, autresMatchs])

  // Matchs actuellement remontés par le bandeau live — voir trouverMatchLive
  // dans lib/recommandation.js, qui s'en sert pour donner à la carte du
  // favori (la seule affichée "en cours" ici, voir statutMatch) son score en
  // direct plutôt qu'un simple badge, avant même le résultat officiel.
  const matchsLive = useMemo(() => [matchFavori, ...autresMatchs].filter(Boolean), [matchFavori, autresMatchs])

  // Statut d'un match du calendrier (tvBroadcasts) : "en_cours" dès que
  // l'UN des deux signaux est vrai — couvert par le bandeau live (déjà
  // confirmé "en direct" côté serveur/test), OU coup d'envoi programmé
  // passé depuis moins de 2h45 (même marge que le live, voir
  // collecteScoresDirect.js) sans encore de résultat. Le second signal
  // couvre les cas où le bandeau live n'a rien remonté (sélection
  // nationale, délai de collecte) ; le premier permet aussi de prévisualiser
  // l'état via le panneau de test. `termine` (posé par
  // collecteResultatsMatchs.js) prime toujours sur les deux.
  const DUREE_MATCH_MS = 2 * 60 * 60 * 1000 + 45 * 60 * 1000
  const statutMatch = (match) => {
    if (match.termine) return 'termine'
    if ((match.clubs || []).some((id) => idsClubsEnDirect.has(id))) return 'en_cours'
    const debut = Date.parse(match.debutISO)
    if (!Number.isFinite(debut) || debut > horloge.getTime()) return 'a_venir'
    if (horloge.getTime() - debut < DUREE_MATCH_MS) return 'en_cours'
    return 'termine' // fenêtre dépassée sans résultat collecté : on ne le fait plus traîner ici
  }

  // Le badge "En cours" (et le maintien de la carte après le coup d'envoi)
  // ne concerne QUE le club favori — c'est le seul dont l'utilisateur attend
  // un suivi actif ici. Pour un autre club suivi (ex. Liverpool) ou une
  // sélection nationale, le comportement d'origine reste inchangé : la
  // carte disparaît d'"Aujourd'hui" dès qu'elle passe "en_cours" (qu'un vrai
  // live soit disponible ailleurs ou non) — pas de badge pour un match
  // secondaire, elle reste juste visible tant qu'elle est encore "a_venir".
  const aVenirAujourdhui = useMemo(
    () =>
      duJour.filter((m) => {
        const statut = statutMatch(m)
        if (statut === 'termine') return false
        if (statut === 'en_cours') return m.priorite === PRIORITES.CLUB_FAVORI
        return true // a_venir
      }),
    [duJour, horloge, idsClubsEnDirect]
  )

  // La bannière met en avant le club favori quand il joue, même si un
  // autre match suivi a lieu plus tôt le même jour (recommander() trie
  // d'abord par horaire, la priorité ne départage qu'à égalité) : on
  // cherche donc d'abord, parmi tous les matchs à venir, le prochain qui
  // concerne spécifiquement le favori (priorite === PRIORITES.CLUB_FAVORI),
  // et on ne retombe sur le tout prochain match (toutes priorités
  // confondues) que si le favori n'a rien de prévu.
  //
  // Si un match suivi est actuellement EN DIRECT (voir useScoresDirect),
  // le bandeau live prend le pas visuellement — inutile d'afficher aussi
  // "reçoit"/"à venir" pour une affiche déjà en cours de diffusion.
  const prochain = useMemo(
    () => recommandes.find((m) => Date.parse(m.debutISO) > horloge.getTime()),
    [recommandes, horloge]
  )
  const prochainFavori = useMemo(
    () => recommandes.find((m) => m.priorite === PRIORITES.CLUB_FAVORI && Date.parse(m.debutISO) > horloge.getTime()),
    [recommandes, horloge]
  )
  const chevauchements = useMemo(() => detecterChevauchements(aVenirAujourdhui), [aVenirAujourdhui])

  // Repli sur aVenirAujourdhui[0] plutôt que duJour[0] : un match déjà
  // démarré ne doit pas remonter en Une non plus, il est couvert par le
  // bandeau ScoresDirect (ou simplement passé, si hors couverture live).
  const aLaUne = matchFavori ? null : (prochainFavori || prochain || aVenirAujourdhui[0])

  // Le match déjà mis en avant dans la bannière "à la une" ne doit pas être
  // répété juste en dessous dans "Aujourd'hui" — même affiche deux fois sur
  // le même écran. Ne change rien quand aLaUne n'est pas un match du jour
  // (déjà absent d'aVenirAujourdhui dans ce cas).
  const aVenirAujourdhuiAffiches = useMemo(
    () => aVenirAujourdhui.filter((m) => m.id !== aLaUne?.id),
    [aVenirAujourdhui, aLaUne]
  )

  // Reconnaissance sur tout le catalogue (pas seulement les clubs suivis),
  // via la même fonction correspond() qui sert déjà à reconnaître les
  // clubs suivis (equipes.js) et à surligner le club favori sur les
  // classements — nom/court tolèrent les libellés partiels, un fragment
  // d'alias isolé (ex. "Barcelone" dans "Barca Barcelona") ne matche en
  // revanche qu'à l'identique, pour ne pas confondre deux clubs qui
  // partagent juste une ville (FC Barcelone / Espanyol Barcelone).
  //
  // club.logo est stocké en base comme chemin absolu depuis la racine du
  // domaine ("/logos/xxx.svg", voir scripts/seed-config.mjs). Ça fonctionne
  // sur Firebase Hosting (servi à "/"), mais casse sur GitHub Pages où l'app
  // vit dans un sous-dossier ("/Ton-paris/", voir BASE dans vite.config.js) :
  // le navigateur va chercher le fichier à la racine du domaine au lieu du
  // sous-dossier réel → 404 (https://dydy-ashborn.github.io/logos/psg.svg
  // au lieu de https://dydy-ashborn.github.io/Ton-paris/logos/psg.svg). On
  // rejoint donc le chemin stocké à BASE_URL (résolu par Vite selon la
  // cible de build) plutôt que de le prendre tel quel.
  const trouverLogo = (libelle) => {
    if (!libelle) return null

    const club = clubs.find((c) => correspond(c, libelle))
    if (!club?.logo) return null

    return `${import.meta.env.BASE_URL}${club.logo.replace(/^\//, '')}`
  }

  const logoDomicile = useMemo(() => {
    if (!aLaUne || clubs.length === 0) return null
    return trouverLogo(aLaUne.domicile)
  }, [aLaUne, clubs])

  const logoExterieur = useMemo(() => {
    if (!aLaUne || clubs.length === 0) return null
    return trouverLogo(aLaUne.exterieur)
  }, [aLaUne, clubs])

  useEffect(() => { setLogoDomicileEnEchec(false) }, [logoDomicile])
  useEffect(() => { setLogoExterieurEnEchec(false) }, [logoExterieur])

  const [confirmerCorrectionBrute] = useRafraichir(
    () => httpsCallable(fonctions, 'corrigerChaine')({ matchId: correction.id, chaine: saisie.trim() }),
    { libelleSucces: 'Chaîne enregistrée.', libelleErreur: "Échec de l'enregistrement de la chaîne." }
  )

  const confirmerCorrection = async () => {
    if (!correction || !saisie.trim()) return
    try {
      await confirmerCorrectionBrute()
    } catch {
      // Toast d'erreur déjà affiché par useRafraichir — on referme quand même la modale.
    } finally {
      setCorrection(null)
      setSaisie('')
    }
  }

  const [rafraichirActus, rafraichissementActus] = useRafraichir(
    () => httpsCallable(fonctions, 'rafraichirMaxifootNews')(),
    { libelleSucces: 'Actu à jour.', libelleErreur: "Échec de la mise à jour de l'actu." }
  )

  // Boutons de test (mode debug uniquement) : injectent un jeu de scores
  // live factice via functions/donneesTest.js pour vérifier l'affichage du
  // bandeau (favori en gros / autre club en discret / les deux) sans
  // attendre qu'un vrai match ait lieu. Aucune notif envoyée.
  const injecterScenario = (scenario) => httpsCallable(fonctions, 'injecterScoreTest')({ scenario })
  const [injecterFavori, injectionFavoriEnCours] = useRafraichir(
    () => injecterScenario('favori'),
    { libelleSucces: 'Scénario "club favori en direct" injecté.', libelleErreur: "Échec de l'injection." }
  )
  const [injecterAutre, injectionAutreEnCours] = useRafraichir(
    () => injecterScenario('autre'),
    { libelleSucces: 'Scénario "autre club suivi" injecté.', libelleErreur: "Échec de l'injection." }
  )
  const [injecterLesDeux, injectionLesDeuxEnCours] = useRafraichir(
    () => injecterScenario('les_deux'),
    { libelleSucces: 'Scénario "les deux à la fois" injecté.', libelleErreur: "Échec de l'injection." }
  )
  const [injecterTermine, injectionTermineEnCours] = useRafraichir(
    () => injecterScenario('termine'),
    { libelleSucces: 'Scénario "match terminé" injecté.', libelleErreur: "Échec de l'injection." }
  )
  const [effacerScores, effacementScoresEnCours] = useRafraichir(
    () => httpsCallable(fonctions, 'effacerScoreTest')(),
    { libelleSucces: 'Scores de test effacés.', libelleErreur: "Échec de l'effacement." }
  )

  // Scraper un match RÉEL sur maxifoot-live.com (n'importe lequel, pas
  // besoin d'un club suivi en train de jouer) et l'afficher via le vrai
  // bandeau ScoresDirect — vérifie que sources/maxifootLive.js analyse
  // encore correctement le HTML actuel du site (voir functions/donneesTest.js,
  // scénario "reel"), sans attendre qu'un club suivi joue.
  const [injecterReel, injectionReelEnCours] = useRafraichir(
    () => injecterScenario('reel'),
    {
      libelleSucces: (resultat) => `Scrapé : ${resultat.match}${resultat.enCours ? ' (en direct)' : ''}`,
      libelleErreur: (e) => e?.message || 'Échec du scraping réel.'
    }
  )

  return (
    <>
      {debug && (
        <div style={{ padding: '18px 18px 0' }}>
          <PanneauTest
            titre="Scores live de test"
            actions={[
              { libelle: 'Favori en direct', onClick: () => injecterFavori().catch(() => {}), enCours: injectionFavoriEnCours },
              { libelle: 'Autre club en direct', onClick: () => injecterAutre().catch(() => {}), enCours: injectionAutreEnCours },
              { libelle: 'Les deux', onClick: () => injecterLesDeux().catch(() => {}), enCours: injectionLesDeuxEnCours },
              { libelle: 'Match terminé', onClick: () => injecterTermine().catch(() => {}), enCours: injectionTermineEnCours },
              { libelle: 'Scraper un match réel', onClick: () => injecterReel().catch(() => {}), enCours: injectionReelEnCours },
              { libelle: 'Effacer', onClick: () => effacerScores().catch(() => {}), enCours: effacementScoresEnCours, efface: true }
            ]}
          />
        </div>
      )}

      {aDesMatchsEnDirect && <ScoresDirect matchFavori={matchFavori} autresMatchs={autresMatchs} />}

      {aLaUne && (
        <section className="une">
          <div className="une__logos">
            {logoDomicile && !logoDomicileEnEchec && (
              <img
                className="une__logo"
                src={logoDomicile}
                alt=""
                aria-hidden="true"
                loading="eager"
                onError={() => setLogoDomicileEnEchec(true)}
              />
            )}
            {logoDomicile && !logoDomicileEnEchec && logoExterieur && !logoExterieurEnEchec && (
              <span className="une__vs" aria-hidden="true">VS</span>
            )}
            {logoExterieur && !logoExterieurEnEchec && (
              <img
                className="une__logo"
                src={logoExterieur}
                alt=""
                aria-hidden="true"
                loading="eager"
                onError={() => setLogoExterieurEnEchec(true)}
              />
            )}
          </div>
          <div className="une__contenu">
            <h2 className="une__titre">
              {aLaUne.domicile} <em>reçoit</em> {aLaUne.exterieur}
            </h2>
            <p className="une__details">
              <span className="une__heure">{formaterHeure(aLaUne.debutISO)}</span>
              {[
                aLaUne.competition,
                memeJour(aLaUne.debutISO) ? null : formaterJour(aLaUne.debutISO)
              ].filter(Boolean).join(' · ')}
              {(aLaUne.chaines || []).map((chaine) => (
                <span
                  key={chaine.nom}
                  className={`une__chaine${aLaUne.statut === 'a_verifier' ? ' une__chaine--incertaine' : ''}`}
                >
                  {chaine.nom}
                </span>
              ))}
            </p>
          </div>
        </section>
      )}

      {/* Section masquée entièrement si plus aucun match à venir aujourd'hui
          (tous démarrés, ou aucun programmé) — sauf pendant le chargement,
          où on la garde affichée pour éviter un flash disparition/réapparition. */}
      {(matchsEnCours || aVenirAujourdhuiAffiches.length > 0 || chevauchements.length > 0) && (
        <section className="section">
          <div className="section__tete">
            <h2 className="section__titre">Aujourd'hui</h2>
            <Link className="section__lien" to="/matchs">Tout le calendrier</Link>
          </div>

          {matchsEnCours && <p className="attente">Chargement du programme…</p>}

          {chevauchements.length > 0 && (
            <div className="croise">
              <p>
                <strong>Deux affiches en même temps.</strong>{' '}
                {chevauchements[0][0].domicile} – {chevauchements[0][0].exterieur} à{' '}
                {formaterHeure(chevauchements[0][0].debutISO)}, {chevauchements[0][1].domicile} –{' '}
                {chevauchements[0][1].exterieur} à {formaterHeure(chevauchements[0][1].debutISO)}.
              </p>
            </div>
          )}

          {aVenirAujourdhuiAffiches.map((match) => (
            <MatchCard
              key={match.id}
              match={match}
              enCours={statutMatch(match) === 'en_cours'}
              matchLive={trouverMatchLive(match, matchsLive)}
              onCorriger={(m) => { setCorrection(m); setSaisie('') }}
            />
          ))}
        </section>
      )}

      <section className="section">
        <div className="section__tete">
          <h2 className="section__titre">Actu PSG</h2>
        </div>

        {actusEnCours && <p className="attente">Chargement de l'actu…</p>}

        {!actusEnCours && actus.length === 0 && (
          <p className="attente">Rien de neuf pour l'instant.</p>
        )}

        {actus.slice(0, 12).map((actu) => (
          <NewsItem key={actu.id} actu={actu} onOuvrir={onOuvrirArticle} />
        ))}

        {!actusEnCours && (
          <button className="rafraichir" onClick={() => rafraichirActus().catch(() => {})} disabled={rafraichissementActus}>
            {rafraichissementActus ? 'Mise à jour en cours…' : "Rafraîchir l'actu"}
          </button>
        )}
      </section>

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
    </>
  )
}
