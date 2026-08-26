import { useEffect, useMemo, useRef, useState } from 'react'
import { useCartesFut, marquerOnboardingPacksVuFut } from '../hooks/useCartesFut'
import { useAmisFut } from '../hooks/useAmisFut'
import { usePileOuFace } from '../hooks/usePileOuFace'
import { useRafraichir } from '../hooks/useRafraichir'
import { useToasts } from '../hooks/useToasts'
import CarteFut from '../components/CarteFut'
import './Packs.css'

const LIBELLE_RARETE = { commune: 'Commune', rare: 'Rare', epique: 'Épique', legendaire: 'Légendaire' }

// Durée minimum de rotation de la pièce Pile ou Face (25/08/2026, demandé
// en session : "elle tourne pas assez longtemps avant d'afficher le
// resultat... faut qu'elle tourne vite dès le départ et qu'elle tourne plus
// doucement jusqu'à s'arrêter"). DOIT rester égale à la durée de l'animation
// packs-piece-tourne dans Packs.css (une seule rotation à décélération, pas
// une boucle) — voir OngletPileOuFace, lancerPartie.
const DUREE_MIN_TOURNE_MS = 1800

// Pouvoirs de cartes légendaires (25/08/2026) — libellé/description
// d'AFFICHAGE seulement, même table que components/CarteFut.jsx pour le
// libellé. La vraie règle de jeu (quel pouvoir est actif, son effet exact
// sur le tirage) est décidée côté serveur (functions/packsFut.js,
// POUVOIRS_LEGENDAIRES fait autorité) et revient dans `pouvoirActif` sur
// chaque résultat de jouerPileOuFace — jamais recalculée ici.
//
// 'sang-froid' REMPLACÉ par 'intouchable' (25/08/2026, signalé en session :
// "il sert à rien ce pouvoir non ?" — devenu sans effet le jour même où la
// mise est passée libre jusqu'au solde). 4 pouvoirs ajoutés le même jour
// (idées fournies en session, voir scripts/assigner-pouvoirs.mjs pour
// l'assignation aux cartes) : 'le-jackpot', 'mise-protegee', 'serie-noire',
// 'main-chanceuse'.
const POUVOIRS_LEGENDAIRES = {
  'intouchable': { libelle: 'Intouchable', description: 'Après une victoire, ton prochain lancer ne peut pas te faire perdre plus d’une demi-mise.', icone: 'fa-solid fa-shield-heart' },
  'franc-tireur': { libelle: 'Franc-tireur', description: 'Multiplicateur de gain amélioré.', icone: 'fa-solid fa-bullseye' },
  'assurance-maillot': { libelle: 'Assurance maillot', description: 'Une défaite sur deux ne coûte que la moitié de la mise.', icone: 'fa-solid fa-shield-halved' },
  'le-jackpot': { libelle: 'Le jackpot', description: 'Chaque victoire consécutive augmente encore le multiplicateur de gain.', icone: 'fa-solid fa-coins' },
  'mise-protegee': { libelle: 'Mise protégée', description: 'Après deux victoires consécutives, ta prochaine mise est protégée en cas de défaite.', icone: 'fa-solid fa-lock' },
  'serie-noire': { libelle: 'Série noire', description: 'Plus tu enchaînes les défaites, plus ton prochain gain est important.', icone: 'fa-solid fa-cloud-bolt' },
  'main-chanceuse': { libelle: 'Main chanceuse', description: 'Une fois par série, tu peux relancer un résultat qui ne te convient pas.', icone: 'fa-solid fa-dice' }
}
// Ordre d'affichage FIXE du teaser des pouvoirs (voir OngletPileOuFace,
// packs__pouvoirs-teaser) — indépendant de l'ordre de priorité serveur
// (prioritePari dans functions/packsFut.js, qui décide quel pouvoir
// s'applique en cas de double possession) : ici on liste juste tous les
// pouvoirs, toujours dans le même ordre, qu'ils soient possédés ou non.
const ORDRE_PRIORITE_POUVOIRS_AFFICHAGE = [
  'intouchable', 'franc-tireur', 'assurance-maillot', 'le-jackpot', 'mise-protegee', 'serie-noire', 'main-chanceuse'
]
const ORDRE_RARETE_AFFICHAGE = ['legendaire', 'epique', 'rare', 'commune']
// Même ordre que functions/sources/futbinCartesPsg.js (ORDRE_RARETE) — sert
// à trier les 5 cartes d'un paquet du moins rare au plus rare avant de les
// révéler une à une, pour garder la plus belle carte pour la fin (suspense).
// Le DERNIER palier de cet ordre est aussi celui qui déclenche l'animation
// spéciale dans CarteRevelation ci-dessous ("le niveau de rareté le plus
// rare", demandé en session) — un seul et même tableau pour les deux.
const ORDRE_RARETE_TIRAGE = ['commune', 'rare', 'epique', 'legendaire']
const RARETE_LA_PLUS_RARE = ORDRE_RARETE_TIRAGE[ORDRE_RARETE_TIRAGE.length - 1]

function trierParRarete(cartes) {
  return [...cartes].sort((a, b) => ORDRE_RARETE_TIRAGE.indexOf(a.carte.rarete) - ORDRE_RARETE_TIRAGE.indexOf(b.carte.rarete))
}

// Affichage uniquement ("2025-26" -> "2025/26", demandé en session) — l'id
// de saison stocké en base (voir functions/sources/futbinCartesPsg.js,
// SAISON_PAR_DEFAUT) garde le tiret, plus sûr dans un id de document Firestore.
function formatSaison(saison) {
  return String(saison || '').replace('-', '/')
}

/**
 * Étoile PSG (monnaie du jeu de packs, demandé en session — "les étoiles du
 * psg qu'on a en image") plutôt que l'emoji ⭐. Fichier déposé par
 * l'utilisateur dans public/etoile-c1.png (chemin respectant le basename
 * GitHub Pages, voir App.jsx) — repli sur ⭐ si l'image ne charge pas, pour
 * ne jamais afficher une icône cassée.
 *
 * BUG CORRIGÉ (25/08/2026) : le composant pointait vers "EtoileC1.png"
 * (casse différente du fichier réel "etoile-c1.png") — invisible en dev sur
 * un système de fichiers insensible à la casse (macOS par défaut), mais
 * casse une fois déployé sur un hébergeur sensible à la casse (GitHub
 * Pages, Firebase Hosting), d'où le repli emoji affiché à la place partout
 * où l'étoile est utilisée (solde, bouton d'ouverture, message de manque).
 */
function EtoilePsg({ taille = 16 }) {
  const [enEchec, setEnEchec] = useState(false)
  if (enEchec) return <span aria-hidden="true">⭐</span>
  return (
    <img
      src={`${import.meta.env.BASE_URL}etoile-c1.png`}
      alt="Étoile PSG"
      className="packs__etoile"
      style={{ width: taille, height: taille }}
      onError={() => setEnEchec(true)}
    />
  )
}

/**
 * Solde d'étoiles animé (25/08/2026, demandé en session : "doit se mettre à
 * jour dès qu'on gagne ou perd des étoiles, avec une animation stylée") —
 * remplace le `<p className="packs__solde">` dupliqué dans OngletOuvrir ET
 * OngletPileOuFace par UN SEUL composant partagé, pour ne corriger l'anim
 * qu'à un endroit si besoin plus tard.
 *
 * Le solde lui-même était déjà à jour en temps réel (onSnapshot sur
 * etatPacksFut, voir useCartesFut.js) — ce qui manquait, c'est le retour
 * visuel au moment du changement. `useRef` (pas un state) pour garder
 * l'ANCIENNE valeur entre deux rendus sans provoquer de rendu
 * supplémentaire : à chaque changement de `solde`, on compare avec la
 * valeur précédente, on affiche un badge flottant "+X"/"-X" qui monte puis
 * disparaît (voir Packs.css, packs__solde-badge), et on fait pulser le
 * chiffre lui-même — puis on referme la fenêtre après la durée de
 * l'animation pour ne pas la relancer sur un rendu sans changement réel.
 */
function SoldeEtoiles({ solde }) {
  const precedent = useRef(solde)
  const [variation, setVariation] = useState(null)
  const [cle, setCle] = useState(0)

  useEffect(() => {
    const ancien = precedent.current
    if (solde !== ancien) {
      setVariation(solde - ancien)
      setCle((c) => c + 1)
      precedent.current = solde
      const minuteur = setTimeout(() => setVariation(null), 1100)
      return () => clearTimeout(minuteur)
    }
  }, [solde])

  return (
    <p className="packs__solde">
      {/* `key={cle}` force React à remonter le badge à chaque nouvelle
          variation (même signe/valeur deux fois de suite) — sans ça, une
          deuxième victoire de +1 juste après la première ne relancerait pas
          l'animation CSS (même élément DOM, même classe déjà posée). */}
      {variation != null && (
        <span key={cle} className={`packs__solde-badge${variation > 0 ? ' packs__solde-badge--gain' : ' packs__solde-badge--perte'}`}>
          {variation > 0 ? `+${variation}` : variation}
        </span>
      )}
      <EtoilePsg />
      <span key={`chiffre-${cle}`} className="packs__solde-chiffre">{solde}</span>
    </p>
  )
}

/**
 * Petite modale maison réutilisable pour confirmer l'envoi d'une carte à un
 * ami — jamais de confirm() natif (règle du projet). Un composant local à
 * cette page plutôt qu'un composant partagé : useAmisFut/envoyerCarteFut
 * sont propres au système de cartes FUT, pas de besoin ailleurs dans l'app
 * pour l'instant.
 */
function ModaleEnvoiCarte({ carte, amis, onAnnuler, onConfirmer, envoiEnCours }) {
  const [amiChoisi, setAmiChoisi] = useState(null)

  return (
    // CORRIGÉ le 25/08/2026 (demandé en session : "centre la pop up au
    // milieu de l'écran quand on partage une carte à un ami") — il
    // manquait packs__voile--detail (voir .packs__voile.packs__voile
    // --detail dans Packs.css, align-items:center) : cette modale collait
    // en bas comme les modales "coulissantes" (CarteDetailModal l'avait
    // déjà, PouvoirsModal/TauxRareteModal/CarteJoueurModal aussi — celle-ci
    // avait été oubliée à sa création).
    <div className="packs__voile packs__voile--detail" role="dialog" aria-modal="true">
      <div className="packs__modale packs__modale--envoi">
        <h3 className="packs__modale-titre">Envoyer {carte.nom}</h3>

        {amis.length === 0 ? (
          <p className="attente">Ajoute d'abord un ami dans l'onglet Amis pour pouvoir lui envoyer des cartes.</p>
        ) : !amiChoisi ? (
          <>
            <p className="packs__modale-aide">Choisis un ami :</p>
            <div className="packs__liste-amis-choix">
              {amis.map((ami) => (
                <button key={ami.uid} type="button" className="packs__ami-choix" onClick={() => setAmiChoisi(ami)}>
                  {ami.pseudo || 'Supporter'}
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            <p className="packs__modale-aide">
              Envoyer <strong>{carte.nom}</strong> à <strong>{amiChoisi.pseudo || 'Supporter'}</strong> ? Tu n'en garderas qu'un seul exemplaire.
            </p>
            <div className="packs__modale-actions">
              <button type="button" className="packs__bouton-secondaire" onClick={() => setAmiChoisi(null)} disabled={envoiEnCours}>
                Retour
              </button>
              <button
                type="button"
                className="packs__bouton"
                onClick={() => onConfirmer(amiChoisi.uid)}
                disabled={envoiEnCours}
              >
                {envoiEnCours ? 'Envoi…' : 'Confirmer l’envoi'}
              </button>
            </div>
          </>
        )}

        {(amis.length === 0 || !amiChoisi) && (
          <button type="button" className="packs__modale-fermer" onClick={onAnnuler}>Annuler</button>
        )}
      </div>
    </div>
  )
}

/**
 * Vue agrandie d'une carte de l'album, ouverte au clic depuis
 * OngletCollection ("ça l'ouvre pas en grand" — le clic sur une case ne
 * faisait jusqu'ici rien du tout sauf pour les cartes envoyables, voir
 * OngletCollection ci-dessous). Modale maison (jamais de confirm() natif,
 * règle du projet), fermeture au clic sur le voile, sur la croix ou sur
 * Échap — même pattern que CarteJoueurModal (fiche joueur de l'effectif).
 * Le bouton "Envoyer à un ami" ne s'affiche que si la carte est envoyable
 * (double + au moins un ami) ; le cliquer délègue à onEnvoyer, qui rouvre
 * ModaleEnvoiCarte via onDemanderEnvoi côté parent — cette modale-ci se
 * ferme au même moment pour ne jamais avoir les deux empilées.
 *
 * Navigation flèches (demandé en session : "défiler celles qu'on possède")
 * — `cartes` est la liste possédée du GROUPE affiché dans la grille (même
 * rareté/saison que la carte ouverte, voir OngletCollection), `index` sa
 * position dedans. Flèches masquées quand il n'y a rien à voir de l'autre
 * côté (bord de liste) plutôt que désactivées-mais-visibles, et la touche
 * ← / → navigue aussi au clavier comme Échap ferme déjà.
 */
function CarteDetailModal({ cartes, index, peutEnvoyer, onFermer, onEnvoyer, onNaviguer }) {
  const carte = cartes[index]

  useEffect(() => {
    const gererTouche = (e) => {
      if (e.key === 'Escape') onFermer()
      if (e.key === 'ArrowLeft' && index > 0) onNaviguer(index - 1)
      if (e.key === 'ArrowRight' && index < cartes.length - 1) onNaviguer(index + 1)
    }
    document.addEventListener('keydown', gererTouche)
    return () => document.removeEventListener('keydown', gererTouche)
  }, [onFermer, onNaviguer, index, cartes.length])

  return (
    <div className="packs__voile packs__voile--detail" role="dialog" aria-modal="true" onClick={onFermer}>
      <div className="packs__detail" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="packs__detail-fermer" onClick={onFermer} aria-label="Fermer">×</button>

        {index > 0 && (
          <button
            type="button"
            className="packs__detail-fleche packs__detail-fleche--gauche"
            onClick={() => onNaviguer(index - 1)}
            aria-label="Carte précédente"
          >‹</button>
        )}

        <div className="packs__detail-carte">
          <CarteFut carte={carte} taille="l" />
          {carte.quantite > 1 && <span className="packs__detail-quantite">×{carte.quantite}</span>}
        </div>

        {index < cartes.length - 1 && (
          <button
            type="button"
            className="packs__detail-fleche packs__detail-fleche--droite"
            onClick={() => onNaviguer(index + 1)}
            aria-label="Carte suivante"
          >›</button>
        )}

        {peutEnvoyer && (
          <button type="button" className="packs__bouton" onClick={onEnvoyer}>Envoyer à un ami</button>
        )}
      </div>
    </div>
  )
}

/** Dos de carte réutilisé partout (paquet fermé ET chaque carte avant d'être
 * retournée, demandé en session : "partant du principe que le visuel TP
 * soit l'arrière des cartes"). Composant séparé plutôt qu'inline : identique
 * dans .packs__overlay-intro (paquet fermé) et dans chaque face de
 * CarteFlip ci-dessous. */
function DosCarte() {
  return (
    <div className="packs__dos-carte">
      <div className="packs__dos-carte-emblème">
        <span className="packs__dos-carte-monogramme">TP</span>
        <span className="packs__dos-carte-mot">Ton Paris</span>
      </div>
    </div>
  )
}

/**
 * Une carte de la révélation, retournable (demandé en session : "quand je
 * clique elle se retourne"). Dos = DosCarte, devant = la vraie carte + les
 * animations d'impact (flash, reflet, halo par rareté, rayons + bandeau
 * pour la rareté la plus rare — RARETE_LA_PLUS_RARE encode déjà note +
 * variante combinées, voir calculerRarete côté scraper). Les animations
 * d'impact sont déclenchées par la classe --retournee plutôt que rejouées
 * au montage : le flip 3D remplace l'ancienne entrée en fondu/rotation.
 */
function CarteFlip({ carte, nouvelle, retournee }) {
  const laPlusRare = carte.rarete === RARETE_LA_PLUS_RARE

  return (
    <div className={`packs__carte-flip${retournee ? ' packs__carte-flip--retournee' : ''}`}>
      <div className="packs__carte-flip-interieur">
        <div className="packs__carte-flip-face packs__carte-flip-dos">
          <DosCarte />
        </div>
        <div className={`packs__carte-flip-face packs__carte-flip-avant packs__carte-flip-avant--${carte.rarete}${laPlusRare ? ' packs__carte-flip-avant--sommet' : ''}`}>
          {/* Rayons tournants retirés définitivement (25/08/2026, demandé en
              session — testé désactivé en devtools d'abord) : la carte la
              plus rare garde son halo drop-shadow doré (voir Packs.css,
              .packs__carte-flip-avant--sommet) et le bandeau texte
              ci-dessous, juste sans l'animation de rayons par-dessus. */}
          {nouvelle && <span className="packs__badge-nouvelle">Nouvelle</span>}
          <CarteFut carte={carte} taille="l" />
          {laPlusRare && <p className="packs__texte-sommet">{LIBELLE_RARETE[RARETE_LA_PLUS_RARE]} !</p>}
        </div>
      </div>
    </div>
  )
}

/**
 * Ouverture plein écran, une carte à la fois (demandé en session : "que
 * l'animation de l'ouverture prenne tout l'écran, que ça m'affiche de
 * manière stylé les cartes une par une", puis "quand je clique elle se
 * retourne" — repère Dokkan Battle assumé). Deux taps par carte : le
 * premier la retourne (déclenche les animations d'impact), le second passe
 * à la suivante — le paquet fermé partage le même visuel de dos (DosCarte),
 * donc l'ouverture du paquet enchaîne directement sur le dos de la carte 1
 * sans coupure visuelle.
 */
function OverlayOuverture({ cartes, onFermer }) {
  // -1 = paquet fermé (tap pour ouvrir), 0..cartes.length-1 = carte en
  // cours, cartes.length = résumé final.
  const [etape, setEtape] = useState(-1)
  const [retournee, setRetournee] = useState(false)
  const termine = etape >= cartes.length
  // Flash plein écran doré tant que la carte affichée est la plus rare
  // possible ET déjà retournée (voir .packs__overlay-plein-ecran--sommet
  // dans Packs.css) — pas seulement la carte elle-même, tout l'écran
  // participe à l'impact, mais seulement une fois le devant révélé.
  const carteActuelle = etape >= 0 && etape < cartes.length ? cartes[etape].carte : null
  const estSommet = retournee && carteActuelle?.rarete === RARETE_LA_PLUS_RARE

  const gererClic = () => {
    if (termine) return
    if (etape === -1) { setEtape(0); return }
    if (!retournee) { setRetournee(true); return }
    setRetournee(false)
    setEtape((e) => Math.min(e + 1, cartes.length))
  }

  const toutReveler = (e) => {
    e.stopPropagation()
    setRetournee(false)
    setEtape(cartes.length)
  }

  return (
    <div
      className={`packs__overlay-plein-ecran${estSommet ? ' packs__overlay-plein-ecran--sommet' : ''}`}
      role="dialog"
      aria-modal="true"
      onClick={gererClic}
    >
      {etape === -1 && (
        <div className="packs__overlay-intro">
          <div className="packs__carte-flip packs__carte-flip--paquet" aria-hidden="true">
            <div className="packs__carte-flip-interieur">
              <div className="packs__carte-flip-face packs__carte-flip-dos">
                <DosCarte />
              </div>
            </div>
          </div>
          <p className="packs__overlay-aide">Touche l'écran pour ouvrir le paquet</p>
        </div>
      )}

      {etape >= 0 && etape < cartes.length && (
        <>
          <p className="packs__overlay-compteur">{etape + 1} / {cartes.length}</p>
          <CarteFlip key={etape} carte={cartes[etape].carte} nouvelle={cartes[etape].nouvelle} retournee={retournee} />
          <p className="packs__overlay-aide">
            {retournee ? "Touche l'écran pour continuer" : "Touche l'écran pour révéler"}
          </p>
        </>
      )}

      {termine && (
        <div className="packs__overlay-resume" onClick={(e) => e.stopPropagation()}>
          <p className="packs__soustitre">Paquet ouvert !</p>
          <div className="packs__overlay-resume-grille">
            {cartes.map((c, i) => (
              <div className={`packs__overlay-resume-carte packs__overlay-resume-carte--${c.carte.rarete}`} key={`${c.carte.id}-${i}`}>
                <CarteFut carte={c.carte} taille="s" />
              </div>
            ))}
          </div>
          <button type="button" className="packs__bouton" onClick={onFermer}>Fermer</button>
        </div>
      )}

      {!termine && (
        <button type="button" className="packs__overlay-passer" onClick={toutReveler}>
          Tout révéler
        </button>
      )}
    </div>
  )
}

/**
 * Tableau comparatif des taux de rareté unité vs paquet (25/08/2026,
 * demandé en session : "faut l'informer à l'utilisateur l'histoire de taux
 * de drop selon le choix de pack ou de carte individuel") — mêmes
 * pourcentages que le serveur appliquera réellement (voir
 * calculerProbabilitesPaquetAffichage dans hooks/useCartesFut.js, calcul
 * dupliqué mais jamais utilisé pour décider un tirage, uniquement pour
 * afficher).
 *
 * DÉPLACÉ dans une popup le 25/08/2026 (demandé en session, capture à
 * l'appui : "le tableau de change de drop on le met dans une pop up centré
 * au milieu de l'écran qui s'affiche quand on clique sur un btn qui est au
 * dessus avant d'ouvrir un pack") — n'occupe plus en permanence la colonne
 * de l'onglet Ouvrir, voir TauxRareteModal juste en dessous et le bouton
 * déclencheur packs__taux-rarete-bouton dans OngletOuvrir.
 */
function TableauTauxRarete({ probabilitesUnite, probabilitesPaquet }) {
  return (
    <div className="packs__taux-rarete">
      <table className="packs__taux-rarete-table">
        <thead>
          <tr>
            <th scope="col">Rareté</th>
            <th scope="col">Carte seule</th>
            <th scope="col">Paquet de 5</th>
          </tr>
        </thead>
        <tbody>
          {ORDRE_RARETE_TIRAGE.map((rarete) => (
            <tr key={rarete}>
              <th scope="row" className={`packs__taux-rarete-nom packs__taux-rarete-nom--${rarete}`}>{LIBELLE_RARETE[rarete]}</th>
              <td>{Math.round((probabilitesUnite[rarete] || 0) * 1000) / 10}%</td>
              <td className="packs__taux-rarete-boostee">{Math.round((probabilitesPaquet[rarete] || 0) * 1000) / 10}%</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="packs__aide">En achetant le paquet de 5, chaque carte a plus de chances d'être rare, épique ou légendaire qu'en achetant une carte seule.</p>
    </div>
  )
}

/**
 * Popup du tableau des taux de rareté (25/08/2026) — même gabarit que
 * PouvoirsModal (voile centré .packs__voile--detail, Escape + clic en
 * dehors pour fermer, bouton × en haut) plutôt qu'un nouveau pattern de
 * modale : cohérence avec le reste de l'onglet Packs.
 */
function TauxRareteModal({ probabilitesUnite, probabilitesPaquet, onFermer }) {
  useEffect(() => {
    const gererTouche = (e) => { if (e.key === 'Escape') onFermer() }
    document.addEventListener('keydown', gererTouche)
    return () => document.removeEventListener('keydown', gererTouche)
  }, [onFermer])

  return (
    <div className="packs__voile packs__voile--detail" role="dialog" aria-modal="true" onClick={onFermer}>
      <div className="packs__modale packs__modale--taux-rarete" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="packs__modale-fermer" onClick={onFermer} aria-label="Fermer">×</button>
        <h3 className="packs__modale-titre">Chances d'obtenir chaque rareté</h3>
        <TableauTauxRarete probabilitesUnite={probabilitesUnite} probabilitesPaquet={probabilitesPaquet} />
      </div>
    </div>
  )
}

function OngletOuvrir({
  etat, paquetGratuitDispo, coutEtoiles, coutEtoilesUnite, probabilitesUnite, probabilitesPaquet,
  ouvrirPaquet, modeDebug, ouvrirPaquetDebug, chargement, onAllerVersJeu
}) {
  const [cartesOuverture, setCartesOuverture] = useState(null)
  // Popup des taux de rareté (25/08/2026, voir TauxRareteModal) — fermée
  // par défaut, ouverte via le bouton packs__taux-rarete-bouton placé
  // au-dessus des boutons d'ouverture (voir plus bas).
  const [tauxRareteOuvert, setTauxRareteOuvert] = useState(false)

  const [lancerOuverture, ouvertureEnCours] = useRafraichir(
    async () => {
      const donnees = await ouvrirPaquet('paquet')
      setCartesOuverture(trierParRarete(donnees.cartes))
      return donnees
    },
    { libelleErreur: (e) => e?.message || 'Échec de l’ouverture du paquet, réessaie.' }
  )

  // Achat à l'unité (25/08/2026, demandé en session) — même wrapper
  // useRafraichir que l'ouverture de paquet, état enCours séparé pour ne
  // pas désactiver le mauvais bouton pendant l'appel. OverlayOuverture
  // reçoit un tableau d'une seule carte : réutilise exactement la même UI
  // de révélation (retournement, flash si légendaire...) sans variante.
  const [lancerOuvertureUnite, ouvertureUniteEnCours] = useRafraichir(
    async () => {
      const donnees = await ouvrirPaquet('unite')
      setCartesOuverture(trierParRarete(donnees.cartes))
      return donnees
    },
    { libelleErreur: (e) => e?.message || 'Échec de l’ouverture de la carte, réessaie.' }
  )

  const [lancerOuvertureDebug, ouvertureDebugEnCours] = useRafraichir(
    async () => {
      const donnees = await ouvrirPaquetDebug()
      setCartesOuverture(trierParRarete(donnees.cartes))
      return donnees
    },
    { libelleErreur: (e) => e?.message || 'Échec du tirage de test, réessaie.' }
  )

  const manqueEtoiles = Math.max(0, coutEtoiles - (etat.soldeEtoiles || 0))
  const manqueEtoilesUnite = Math.max(0, coutEtoilesUnite - (etat.soldeEtoiles || 0))
  const uneActionEnCours = ouvertureEnCours || ouvertureUniteEnCours

  return (
    <section className="packs__ouvrir">
      <SoldeEtoiles solde={etat.soldeEtoiles || 0} />

      {modeDebug && (
        <div className="packs__debug-bandeau">
          <span>🐞 Mode debug actif</span>
          <button
            type="button"
            className="packs__bouton-secondaire"
            onClick={() => lancerOuvertureDebug().catch(() => {})}
            disabled={ouvertureDebugEnCours}
          >
            {ouvertureDebugEnCours ? 'Tirage…' : 'Tirage de test (illimité)'}
          </button>
        </div>
      )}

      {/* Déclencheur de la popup des taux de rareté (25/08/2026, demandé en
          session : "le tableau de change de drop on le met dans une pop up
          [...] qui s'affiche quand on clique sur un btn qui est au dessus
          avant d'ouvrir un pack") — placé juste avant packs__zone-paquet,
          donc bien au-dessus des boutons d'ouverture. Remplace l'ancien
          tableau toujours affiché en ligne (voir TableauTauxRarete). */}
      <button type="button" className="packs__taux-rarete-bouton" onClick={() => setTauxRareteOuvert(true)}>
        <i className="fa-solid fa-chart-simple" aria-hidden="true" /> Voir les chances de chaque rareté
      </button>
      {tauxRareteOuvert && (
        <TauxRareteModal
          probabilitesUnite={probabilitesUnite}
          probabilitesPaquet={probabilitesPaquet}
          onFermer={() => setTauxRareteOuvert(false)}
        />
      )}

      <div className="packs__zone-paquet">
        <div className={`packs__paquet${ouvertureEnCours ? ' packs__paquet--secoue' : ''}`} aria-hidden="true">
          <DosCarte />
        </div>
        <button
          type="button"
          className="packs__bouton"
          onClick={() => lancerOuverture().catch(() => {})}
          disabled={uneActionEnCours || chargement}
        >
          {ouvertureEnCours ? (
            'Ouverture…'
          ) : paquetGratuitDispo ? (
            'Ouvrir un paquet (gratuit)'
          ) : (
            <>Ouvrir un paquet ({coutEtoiles} <EtoilePsg taille={20} />)</>
          )}
        </button>
        {!paquetGratuitDispo && manqueEtoiles > 0 && (
          <p className="packs__aide">
            Paquet gratuit du jour déjà utilisé — il te manque {manqueEtoiles} <EtoilePsg taille={16} /> pour un paquet payant.{' '}
            <button type="button" className="packs__aide-lien" onClick={onAllerVersJeu}>Gagne-les à Pile ou Face →</button>
          </p>
        )}

        {/* Achat à l'unité (25/08/2026) — séparateur visuel "ou" plutôt
            qu'un second gros bouton identique, pour bien marquer que c'est
            une alternative moins avantageuse (voir la popup des taux,
            packs__taux-rarete-bouton plus haut) au paquet de 5 ci-dessus,
            jamais le choix mis en avant. */}
        <p className="packs__separateur-ou">ou</p>
        <button
          type="button"
          className="packs__bouton-secondaire"
          onClick={() => lancerOuvertureUnite().catch(() => {})}
          disabled={uneActionEnCours || chargement || (etat.soldeEtoiles || 0) < coutEtoilesUnite}
        >
          {ouvertureUniteEnCours ? 'Ouverture…' : <>Ouvrir une seule carte ({coutEtoilesUnite} <EtoilePsg taille={14} />)</>}
        </button>
        {manqueEtoilesUnite > 0 && (etat.soldeEtoiles || 0) < coutEtoilesUnite && (
          <p className="packs__aide">
            Il te manque {manqueEtoilesUnite} <EtoilePsg taille={16} /> pour ouvrir une carte.{' '}
            <button type="button" className="packs__aide-lien" onClick={onAllerVersJeu}>Gagne-les à Pile ou Face →</button>
          </p>
        )}
      </div>

      {cartesOuverture && (
        <OverlayOuverture cartes={cartesOuverture} onFermer={() => setCartesOuverture(null)} />
      )}
    </section>
  )
}

/**
 * Album collection — clic sur une case POSSÉDÉE ouvre désormais toujours
 * CarteDetailModal en grand ("ça l'ouvre pas en grand" : avant cette
 * session, le onClick n'existait QUE sur les cartes envoyables — un double
 * + au moins un ami — donc la quasi-totalité des cartes ne réagissait à
 * aucun clic). L'envoi à un ami se fait maintenant DEPUIS cette modale
 * (bouton visible seulement si envoyable) plutôt que directement au clic
 * sur la case, qui sert uniquement à l'agrandir.
 *
 * Filtres rareté + doublons (demandé en session) : appliqués UNIQUEMENT à
 * la grille affichée, jamais à la progression "X / Y · Z%" par saison
 * (calculée sur `groupes`, non filtré) — sinon activer un filtre donnerait
 * l'impression trompeuse d'avoir moins de cartes au total que la réalité.
 */
function OngletCollection({ collection, saisons, nombrePossedees, catalogue, chargement, amis, onDemanderEnvoi }) {
  const [filtreRarete, setFiltreRarete] = useState('toutes')
  const [doublonsUniquement, setDoublonsUniquement] = useState(false)
  // Cartes naviguables (flèches ‹ › de CarteDetailModal, demandé en
  // session) + index courant dedans, plutôt qu'une seule carte : posées
  // ensemble au clic sur une case (voir plus bas), c'est TOUJOURS la liste
  // des cartes POSSÉDÉES du groupe rareté/saison affiché à ce moment-là —
  // le même sous-ensemble que l'utilisateur voit défiler dans la grille,
  // pas tout l'album (naviguer d'une carte commune à une légendaire au clic
  // suivant serait déroutant).
  const [cartesNaviguables, setCartesNaviguables] = useState(null)
  const [carteDetailIndex, setCarteDetailIndex] = useState(0)

  const groupes = useMemo(() => {
    const parSaison = {}
    for (const saison of saisons) {
      parSaison[saison] = { legendaire: [], epique: [], rare: [], commune: [] }
    }
    for (const carte of collection) {
      if (!carte.saison || !parSaison[carte.saison]) continue
      parSaison[carte.saison][carte.rarete]?.push(carte)
    }
    return parSaison
  }, [collection, saisons])

  const raretesAffichees = filtreRarete === 'toutes' ? ORDRE_RARETE_AFFICHAGE : [filtreRarete]
  const peutEnvoyerCarte = (carte) => carte.quantite > 1 && amis.length > 0

  return (
    <section className="packs__collection">
      <div className="packs__collection-tete">
        <h3 className="packs__soustitre">Ton album</h3>
        <span className="packs__compteur">{nombrePossedees} / {catalogue.length}</span>
      </div>

      {/* Précision demandée en session : le catalogue ne couvre pour
          l'instant qu'une seule édition — évite de laisser croire qu'il
          manque des saisons "cachées" plutôt que pas encore ajoutées. */}
      <p className="packs__saison-info">
        Saison{saisons.length > 1 ? 's' : ''} actuellement disponible{saisons.length > 1 ? 's' : ''} : {saisons.length > 0 ? saisons.map(formatSaison).join(', ') : '2025/26'}. D'autres éditions arriveront plus tard.
      </p>

      <div className="packs__filtres">
        <select
          className="packs__filtre-select"
          value={filtreRarete}
          onChange={(e) => setFiltreRarete(e.target.value)}
          aria-label="Filtrer par rareté"
        >
          <option value="toutes">Toutes raretés</option>
          {ORDRE_RARETE_AFFICHAGE.map((rarete) => (
            <option key={rarete} value={rarete}>{LIBELLE_RARETE[rarete]}</option>
          ))}
        </select>
        <button
          type="button"
          className={`packs__filtre-toggle${doublonsUniquement ? ' packs__filtre-toggle--actif' : ''}`}
          onClick={() => setDoublonsUniquement((v) => !v)}
          aria-pressed={doublonsUniquement}
        >
          Doublons uniquement
        </button>
      </div>

      {chargement && <p className="attente">Chargement…</p>}

      {!chargement && catalogue.length === 0 && <p className="attente">Aucune carte disponible pour le moment.</p>}

      {!chargement && saisons.map((saison) => {
        const cartesSaison = Object.values(groupes[saison]).flat()
        const possedeesSaison = cartesSaison.filter((c) => c.quantite > 0).length
        const pourcentage = cartesSaison.length > 0 ? Math.round((possedeesSaison / cartesSaison.length) * 100) : 0
        const aucunDoublon = doublonsUniquement && cartesSaison.every((c) => c.quantite < 2)

        return (
          <div className="packs__saison" key={saison}>
            <div className="packs__saison-tete">
              <p className="packs__saison-titre">Saison {formatSaison(saison)}</p>
              <span className="packs__saison-progression">{possedeesSaison} / {cartesSaison.length} · {pourcentage}%</span>
            </div>

            {raretesAffichees.map((rarete) => {
              const cartesGroupe = groupes[saison][rarete].filter((c) => !doublonsUniquement || c.quantite > 1)
              const cartesPossedeesGroupe = cartesGroupe.filter((c) => c.quantite > 0)
              return cartesGroupe.length > 0 && (
                <div className="packs__groupe" key={rarete}>
                  <p className={`packs__groupe-titre packs__groupe-titre--${rarete}`}>{LIBELLE_RARETE[rarete]}</p>
                  <div className="packs__grille">
                    {cartesGroupe.map((carte) => {
                      const possedee = carte.quantite > 0
                      const envoyable = peutEnvoyerCarte(carte)

                      return (
                        <div
                          key={carte.id}
                          className={`packs__case${possedee ? '' : ' packs__case--verrouillee'}${envoyable ? ' packs__case--envoyable' : ''}`}
                          onClick={possedee ? () => {
                            setCartesNaviguables(cartesPossedeesGroupe)
                            setCarteDetailIndex(cartesPossedeesGroupe.findIndex((c) => c.id === carte.id))
                          } : undefined}
                          role={possedee ? 'button' : undefined}
                          tabIndex={possedee ? 0 : undefined}
                        >
                          {possedee ? (
                            <>
                              <CarteFut carte={carte} taille="s" />
                              {carte.quantite > 1 && <span className="packs__case-quantite">×{carte.quantite}</span>}
                            </>
                          ) : (
                            <div className="packs__case-verrou" aria-hidden="true">?</div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}

            {aucunDoublon && <p className="attente">Aucun doublon dans cette saison.</p>}
          </div>
        )
      })}

      {cartesNaviguables && (
        <CarteDetailModal
          cartes={cartesNaviguables}
          index={carteDetailIndex}
          peutEnvoyer={peutEnvoyerCarte(cartesNaviguables[carteDetailIndex])}
          onFermer={() => setCartesNaviguables(null)}
          onNaviguer={setCarteDetailIndex}
          onEnvoyer={() => { onDemanderEnvoi(cartesNaviguables[carteDetailIndex]); setCartesNaviguables(null) }}
        />
      )}
    </section>
  )
}

function OngletAmis({ amis, codeAmi, genererCode, ajouterAmi, chargement }) {
  const [saisieCode, setSaisieCode] = useState('')
  const { notifier } = useToasts()

  const [lancerGeneration, generationEnCours] = useRafraichir(genererCode, {
    libelleErreur: (e) => e?.message || 'Échec de la génération du code, réessaie.'
  })

  const [lancerAjout, ajoutEnCours] = useRafraichir(
    async () => {
      const resultat = await ajouterAmi(saisieCode.trim().toUpperCase())
      setSaisieCode('')
      return resultat
    },
    {
      libelleSucces: (r) => `${r.pseudo} ajouté à tes amis !`,
      libelleErreur: (e) => e?.message || 'Code invalide, réessaie.'
    }
  )

  // Copier le code ami (25/08/2026, demandé en session : "ajoute un bouton
  // pour copier le code d'ami à côté du code") — navigator.clipboard
  // nécessite un contexte sécurisé (https, ce que l'app est déjà partout en
  // prod) ; repli sur execCommand('copy') via un <textarea> temporaire si
  // l'API moderne est absente/refusée (vieux navigateur, webview
  // restrictive), pour ne jamais laisser le clic sans effet silencieux.
  const copierCode = async () => {
    if (!codeAmi) return
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(codeAmi)
      } else {
        const zoneTemp = document.createElement('textarea')
        zoneTemp.value = codeAmi
        zoneTemp.style.position = 'fixed'
        zoneTemp.style.opacity = '0'
        document.body.appendChild(zoneTemp)
        zoneTemp.select()
        document.execCommand('copy')
        document.body.removeChild(zoneTemp)
      }
      notifier('Code copié !', { type: 'succes' })
    } catch {
      notifier('Impossible de copier le code.', { type: 'erreur' })
    }
  }

  return (
    <section className="packs__amis">
      <div className="packs__mon-code">
        <p className="packs__soustitre">Ton code ami</p>
        {codeAmi ? (
          <div className="packs__code-ligne">
            <p className="packs__code">{codeAmi}</p>
            <button type="button" className="packs__code-copier" onClick={copierCode} aria-label="Copier le code ami">
              <i className="fa-regular fa-copy" aria-hidden="true" />
            </button>
          </div>
        ) : (
          <button type="button" className="packs__bouton-secondaire" onClick={() => lancerGeneration().catch(() => {})} disabled={generationEnCours}>
            {generationEnCours ? 'Génération…' : 'Générer mon code'}
          </button>
        )}
      </div>

      <form
        className="packs__form-ajout"
        onSubmit={(e) => { e.preventDefault(); if (saisieCode.trim()) lancerAjout().catch(() => {}) }}
      >
        <label className="packs__soustitre" htmlFor="code-ami-saisi">Ajouter un ami</label>
        <div className="packs__form-ajout-ligne">
          <input
            id="code-ami-saisi"
            type="text"
            className="packs__champ"
            placeholder="Code ami"
            value={saisieCode}
            onChange={(e) => setSaisieCode(e.target.value)}
            maxLength={6}
            disabled={ajoutEnCours}
          />
          <button type="submit" className="packs__bouton" disabled={ajoutEnCours || !saisieCode.trim()}>
            {ajoutEnCours ? 'Ajout…' : 'Ajouter'}
          </button>
        </div>
      </form>

      <div className="packs__liste-amis">
        <p className="packs__soustitre">Tes amis ({amis.length})</p>
        {chargement && <p className="attente">Chargement…</p>}
        {!chargement && amis.length === 0 && <p className="attente">Aucun ami pour le moment — partage ton code !</p>}
        {!chargement && amis.map((ami) => (
          <div className="packs__ami" key={ami.uid}>{ami.pseudo || 'Supporter'}</div>
        ))}
      </div>
    </section>
  )
}

// URL du logo affiché en résultat du mini-jeu (25/08/2026, SIMPLIFIÉ en
// session — capture à l'appui : "enleve toutes les animations et tout pour
// le pile ou face juste gagné logo psg perdu logo marseille enleve les
// trucs legendaire, carré de cartes etc"). Remplace l'ancienne fausse carte
// CarteFut/CarteFlip (halo, rayons, flip 3D, bandeau "LÉGENDAIRE !") par un
// simple <img> — plus aucune notion de rareté/carte sur cet écran.
function urlLogoResultat(gagne) {
  return `${import.meta.env.BASE_URL}logos/${gagne ? 'psg' : 'marseille'}.svg`
}

/**
 * Popup listant les 3 pouvoirs légendaires (25/08/2026, remplace l'ancien
 * bloc "teaser" toujours déplié dans OngletPileOuFace — demandé en session :
 * "un btn pouvoirs légendaires, pop up s'ouvre avec la liste des pouvoirs").
 * Même mécanique que CarteDetailModal (voile + clic dehors + Échap ferme) :
 * TOUJOURS les 3 pouvoirs, chacun marqué possédé/à débloquer via
 * `pouvoirsPossedes` (calculé dans Packs() à partir de la collection réelle)
 * — jamais lequel débloque quel pouvoir, ça reste la surprise ("ça fait
 * rêver"). Purement informatif, comme l'ancien bloc : le pouvoir réellement
 * actif à la prochaine partie reste décidé côté serveur.
 */
function PouvoirsModal({ pouvoirsPossedes, onFermer }) {
  useEffect(() => {
    const gererTouche = (e) => { if (e.key === 'Escape') onFermer() }
    document.addEventListener('keydown', gererTouche)
    return () => document.removeEventListener('keydown', gererTouche)
  }, [onFermer])

  return (
    <div className="packs__voile packs__voile--detail" role="dialog" aria-modal="true" onClick={onFermer}>
      <div className="packs__modale packs__modale--pouvoirs" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="packs__modale-fermer" onClick={onFermer} aria-label="Fermer">×</button>
        <h3 className="packs__modale-titre">Pouvoirs de cartes légendaires</h3>
        <p className="packs__modale-aide">
          Certaines cartes légendaires débloquent un pouvoir sur Pile ou Maillot. Lesquelles ? À toi de le découvrir.
        </p>
        <div className="packs__pouvoirs-teaser-liste">
          {ORDRE_PRIORITE_POUVOIRS_AFFICHAGE.map((id) => {
            const info = POUVOIRS_LEGENDAIRES[id]
            const possede = pouvoirsPossedes.has(id)
            return (
              <div key={id} className={`packs__pouvoir-teaser${possede ? ' packs__pouvoir-teaser--possede' : ''}`}>
                <i className={info.icone} aria-hidden="true" />
                <div className="packs__pouvoir-teaser-texte">
                  <p className="packs__pouvoir-teaser-nom">{info.libelle}</p>
                  <p className="packs__pouvoir-teaser-description">{info.description}</p>
                </div>
                <span className="packs__pouvoir-teaser-statut">{possede ? 'Débloqué' : 'À débloquer'}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

/**
 * Mini-jeu "Pile ou Maillot" (demandé en session : "un mini jeu rapide,
 * addictif pour gagner de la monnaie du jeu rapidement", illimité — pas de
 * limite 1x/jour, mise à risque choisie explicitement plutôt qu'un jeu
 * gratuit à rejouer sans fin — voir functions/packsFut.js, jouerPileOuFace,
 * pour le raisonnement complet sur la marge maison). Pile = pièce du club,
 * Maillot = écusson PSG — thème simple à 2 côtés, cohérent avec l'identité
 * du reste de l'app plutôt qu'une pièce générique.
 *
 * SIMPLIFIÉ le 25/08/2026 (après plusieurs essais visuels plus élaborés —
 * pièce qui tourne, puis fausse carte CarteFut/CarteFlip avec halo/rayons —
 * demandé en session : "enleve toutes les animations et tout pour le pile
 * ou face juste gagné logo psg perdu logo marseille enleve les trucs
 * legendaire, carré de cartes etc"). Plus aucune animation ni notion de
 * carte/rareté sur cet écran : juste l'écusson du club gagnant (voir
 * urlLogoResultat) + le texte du résultat. "Jouer" lance directement la
 * partie (plus d'étape à taper pour révéler), et le joueur peut soit
 * rejouer la même mise soit la changer (voir rejouerMemeMise ci-dessous).
 *
 * Résultat et solde ENTIÈREMENT décidés côté serveur (voir jouer() dans
 * usePileOuFace.js) — le logo affiché reflète `gagne`, jamais l'inverse
 * (pas de résultat choisi côté client puis "confirmé" par le serveur).
 */
function OngletPileOuFace({ soldeEtoiles, paliersMise, multiplicateurGain, pouvoirsPossedes, historique, setHistorique, jouer, chargement }) {
  const [mise, setMise] = useState(null)
  const [choix, setChoix] = useState(null)
  // Solde GELÉ pendant la rotation de la pièce (25/08/2026, signalé en
  // session : "le compteur d'étoiles se met à jour avant que la pièce est
  // finis de tourner donc ça spoil") — `soldeEtoiles` (prop) vient d'un
  // onSnapshot Firestore (voir useCartesFut.js) qui pousse le NOUVEAU solde
  // dès que la transaction serveur a écrit, largement avant la fin du délai
  // d'animation minimum (DUREE_MIN_TOURNE_MS, voir lancerPartie plus bas) :
  // le joueur voyait le solde (donc le gain/la perte) changer AVANT que la
  // pièce ne s'arrête et révèle le résultat, ce qui trahit l'issue. On garde
  // ici la DERNIÈRE valeur affichée tant qu'une partie est en cours ou que
  // le résultat n'est pas encore révélé (partieEnCours), et on ne rattrape
  // le vrai solde qu'une fois la pièce arrêtée.
  const [soldeAffiche, setSoldeAffiche] = useState(soldeEtoiles)
  // SIMPLIFIÉ le 25/08/2026 (demandé en session : "enleve toutes les
  // animations et tout... enleve les trucs legendaire, carré de cartes
  // etc") — plus d'étape carte dos/devant (l'ancien flip 3D), juste
  // `dernierResultat` : non-null = écran résultat (logo + texte) affiché,
  // null = écran de sélection (camp + mise) affiché.
  const [dernierResultat, setDernierResultat] = useState(null)
  // `historique`/`setHistorique` reçus en props depuis Packs() (25/08/2026,
  // demandé en session : "garder en mémoire les dernières parties même si
  // on change d'onglet") — plus un state local ici, qui était perdu à
  // chaque démontage de ce composant (changement d'onglet). Voir Packs(),
  // historiquePileOuFace.
  // Liste des 3 pouvoirs déplacée dans une popup à la demande (25/08/2026,
  // capture à l'appui : "les pouvoirs légendaires faut les rendre plus
  // discrets, un btn pouvoirs légendaires, pop up s'ouvre avec la liste").
  // Fermé par défaut — remplace l'ancien bloc toujours affiché en haut de
  // l'onglet, qui prenait trop de place et forçait à scroller.
  const [pouvoirsOuverts, setPouvoirsOuverts] = useState(false)
  // Connu seulement APRÈS une première partie (le pouvoir actif revient
  // dans la réponse de jouerPileOuFace, jamais deviné/annoncé à l'avance
  // côté client) — avant ça, aucun bandeau affiché plutôt qu'une supposition.
  const [pouvoirActif, setPouvoirActif] = useState(undefined)

  const [lancerPartie, partieEnCours] = useRafraichir(
    // `utiliserRelance` (25/08/2026, pouvoir 'main-chanceuse') — passé tel
    // quel à jouer(), false par défaut pour un lancer normal (voir
    // utiliserRelanceMainChanceuse plus bas pour l'appel avec true).
    async (utiliserRelance = false) => {
      // Délai minimum de rotation (25/08/2026, demandé en session : "elle
      // tourne pas assez longtemps avant d'afficher le résultat") — sur un
      // réseau rapide, jouer() peut répondre en quelques dizaines de ms,
      // trop court pour voir la pièce tourner (voir DUREE_MIN_TOURNE_MS et
      // packs-piece-tourne dans Packs.css, décélération vite→lent sur cette
      // même durée). On attend le PLUS LONG des deux — jamais raccourci
      // l'attente réseau réelle si elle dépasse ce minimum, jamais un
      // résultat affiché avant que l'animation ait eu le temps de jouer.
      const [donnees] = await Promise.all([
        jouer(mise, choix, { utiliserRelance }),
        new Promise((resolve) => setTimeout(resolve, DUREE_MIN_TOURNE_MS))
      ])
      setDernierResultat(donnees)
      setPouvoirActif(donnees.pouvoirActif || null)
      // Une relance REMPLACE la ligne d'historique du coup relancé plutôt
      // que d'en ajouter une (25/08/2026, 'main-chanceuse') — le coup
      // original perdu n'a jamais réellement compté pour le joueur, qui n'a
      // payé sa mise qu'une fois.
      setHistorique((h) => (utiliserRelance ? [donnees, ...h.slice(1)] : [donnees, ...h]).slice(0, 20))
      // CORRIGÉ le 25/08/2026 (demandé en session : "quand je clique sur
      // jouer le pile ou face doit se lancer direct") — le résultat
      // s'affiche dès la réponse du serveur (et du délai minimum
      // ci-dessus), plus d'étape intermédiaire à taper pour le révéler.
      return donnees
    },
    {
      libelleErreur: (e) => e?.message || 'Échec de la partie, réessaie.'
    }
  )

  // Relance immédiate sur la même mise/camp (25/08/2026, demandé en
  // session : "après je peux rejouer la même mise ou changer de mise") —
  // `mise`/`choix` ne sont JAMAIS remis à null par "Rejouer" (voir plus bas),
  // donc rejouerMemeMise peut relancer direct sans repasser par les
  // sélecteurs.
  //
  // CORRIGÉ le 25/08/2026 (signalé en session : "quand je fais rejouer ça
  // affiche un court instant le menu jeu d'avant, moi je veux que la pièce
  // seulement se mette à jour") — auparavant `setDernierResultat(null)`
  // ÉTAIT posé ici avant de relancer, ce qui démontait le bloc résultat et
  // affichait le picker (camp/mise/bouton Jouer) le temps d'un rendu avant
  // que `partieEnCours` ne redevienne vrai. `dernierResultat` reste
  // maintenant INTACT pendant la relance : seule la pièce (voir plus bas,
  // packs__piece--tourne piloté par partieEnCours) se remet à tourner, le
  // bloc résultat/boutons est juste masqué le temps de l'appel (voir
  // `dernierResultat && !partieEnCours` plus bas) sans jamais redevenir le
  // picker de sélection.
  const rejouerMemeMise = () => {
    lancerPartie(false).catch(() => {})
  }

  // 'main-chanceuse' (25/08/2026) — relance GRATUITE du dernier coup perdu,
  // uniquement quand le serveur a confirmé qu'elle est disponible (voir
  // dernierResultat.relanceDisponible) : jamais déclenchée automatiquement,
  // le joueur choisit explicitement de s'en servir ou de garder son résultat.
  const utiliserRelanceMainChanceuse = () => {
    lancerPartie(true).catch(() => {})
  }

  // Rattrape le vrai solde UNE FOIS la pièce arrêtée (partieEnCours retombe
  // à false après le délai minimum ci-dessus, jamais avant) — voir
  // soldeAffiche plus haut. Pendant partieEnCours, `soldeEtoiles` peut déjà
  // avoir changé (onSnapshot Firestore) sans que soldeAffiche ne bouge.
  useEffect(() => {
    if (!partieEnCours) setSoldeAffiche(soldeEtoiles)
  }, [soldeEtoiles, partieEnCours])

  const infoPouvoir = pouvoirActif ? POUVOIRS_LEGENDAIRES[pouvoirActif] : null
  // Multiplicateur AFFICHÉ avant de jouer — 'le-jackpot'/'serie-noire' ont un
  // vrai multiplicateur qui varie selon la série en cours (voir
  // functions/packsFut.js, BONUS_JACKPOT_*/BONUS_SERIE_NOIRE_*), jamais
  // recalculé ici : plutôt qu'afficher un chiffre potentiellement faux, on
  // affiche le multiplicateur de base pour ces deux pouvoirs (le vrai gain
  // reste toujours celui renvoyé par le serveur dans dernierResultat).
  const multiplicateurAffiche = pouvoirActif === 'franc-tireur' ? 2.1 : multiplicateurGain
  // 'sang-froid' (retiré le 25/08/2026, voir POUVOIRS_LEGENDAIRES) ajoutait
  // un palier de mise supplémentaire — plus nécessaire, paliersAffiches
  // reprend simplement paliersMise tel quel maintenant que la mise est
  // libre jusqu'au solde (voir miseMaxAutorisee ci-dessous).
  const paliersAffiches = paliersMise
  // Mise LIBRE jusqu'au solde réel du joueur (25/08/2026, signalé en
  // session : "j'ai 1500 étoiles je peux pas miser 400, pas normal") —
  // auparavant plafonnée au plus haut PALIER fixe (50, ou 100 avec l'ancien
  // sang-froid) même quand le solde le permettait largement. Le serveur
  // applique désormais la même règle (voir jouerPileOuFace) : la seule
  // vraie borne haute est ce que le joueur possède.
  const miseMaxAutorisee = soldeEtoiles

  const miseValide = mise != null && mise >= 1 && mise <= soldeEtoiles && mise <= miseMaxAutorisee
  const peutJouer = miseValide && choix != null && !partieEnCours && !chargement && dernierResultat == null

  return (
    <section className="packs__pile-ou-face">
      <SoldeEtoiles solde={soldeAffiche} />

      {/* Pouvoirs légendaires — accès discret par bouton (25/08/2026,
          demandé en session : "les pouvoirs légendaires faut les rendre
          plus discrets, un btn pouvoirs légendaires, pop up s'ouvre avec la
          liste" — remplace l'ancien bloc toujours déplié, trop imposant et
          qui forçait à scroller pour voir les boutons de jeu). Le badge
          reste visible même fermé (nombre débloqués/total) pour garder
          l'effet "ça fait rêver" sans occuper toute la hauteur de l'écran.
          Total passé de 3 à 7 le même jour (voir POUVOIRS_LEGENDAIRES) —
          calculé sur ORDRE_PRIORITE_POUVOIRS_AFFICHAGE.length plutôt qu'en
          dur, pour ne plus jamais désynchroniser ce chiffre d'un ajout de
          pouvoir futur. */}
      <button
        type="button"
        className="packs__pouvoirs-bouton"
        onClick={() => setPouvoirsOuverts(true)}
      >
        <i className="fa-solid fa-crown" aria-hidden="true" /> Pouvoirs légendaires
        <span className="packs__pouvoirs-bouton-badge">{pouvoirsPossedes.size}/{ORDRE_PRIORITE_POUVOIRS_AFFICHAGE.length}</span>
      </button>
      {pouvoirsOuverts && (
        <PouvoirsModal pouvoirsPossedes={pouvoirsPossedes} onFermer={() => setPouvoirsOuverts(false)} />
      )}

      {/* Bandeau de pouvoir actif — reflète UNIQUEMENT ce que le serveur a
          renvoyé après une partie (voir pouvoirActif ci-dessus), jamais une
          déduction côté client de la collection : évite tout écart avec la
          règle réelle appliquée au tirage suivant. */}
      {infoPouvoir && (
        <p className="packs__pouvoir-actif">
          <i className={infoPouvoir.icone} aria-hidden="true" /> Pouvoir actif : <strong>{infoPouvoir.libelle}</strong> — {infoPouvoir.description}
        </p>
      )}

      {/* Pièce ronde (25/08/2026, REVU en session — remplace le simple <img>
          logo introduit au tour précédent : "avant de lancer le pile ou
          face tu fais un rond avec le visuel TP, la pièce tourne quand on
          lance et ça affiche soit le logo de marseille soit de paris").
          Trois états dans le MÊME rond (packs__piece) : au repos et pendant
          l'appel serveur (partieEnCours) le visuel TP tourne
          (packs__piece--tourne, voir Packs.css) ; dès que dernierResultat
          arrive, elle s'arrête et affiche le logo du club gagnant. Pas de
          minutage arbitraire côté client : la rotation dure exactement le
          temps de la requête réelle (résultat toujours décidé par le
          serveur, voir jouer() dans usePileOuFace.js). */}
      <div className="packs__pile-ou-face-zone">
        <div className={`packs__piece${partieEnCours ? ' packs__piece--tourne' : ''}`} aria-hidden="true">
          {dernierResultat ? (
            <img
              className="packs__piece-logo"
              src={urlLogoResultat(dernierResultat.gagne)}
              alt={dernierResultat.gagne ? 'PSG' : 'Marseille'}
            />
          ) : (
            // Même emblème rond que DosCarte (voir plus haut), SANS le
            // rectangle carte autour — ici on veut un rond façon pièce, pas
            // une carte à jouer.
            <div className="packs__dos-carte-emblème packs__piece-emblème">
              <span className="packs__dos-carte-monogramme">TP</span>
              <span className="packs__dos-carte-mot">Ton Paris</span>
            </div>
          )}
        </div>
      </div>

      {/* Écran résultat (25/08/2026, SIMPLIFIÉ en session : "enleve toutes
          les animations et tout... juste gagné logo psg perdu logo
          marseille") — juste le texte, le logo est maintenant dans la pièce
          ci-dessus. Masqué pendant partieEnCours (25/08/2026, "je veux que
          la pièce seulement se mette à jour") — pendant une relance
          (rejouerMemeMise), dernierResultat reste l'ANCIEN résultat le
          temps de l'appel (voir plus haut), donc ce bloc doit disparaître
          lui aussi pour ne laisser que la pièce qui tourne, sans montrer
          l'ancien score ni des boutons cliquables entre-temps. */}
      {dernierResultat && !partieEnCours && (
        <div className="packs__pile-ou-face-resultat-bloc">
          <p className={`packs__pile-ou-face-resultat${dernierResultat.gagne ? ' packs__pile-ou-face-resultat--gagne' : ' packs__pile-ou-face-resultat--perdu'}`}>
            {dernierResultat.gagne
              ? `Gagné ! +${dernierResultat.variation}`
              : dernierResultat.miseProtegeeDeclenchee
                ? 'Perdu, mais mise protégée — rien perdu'
                : dernierResultat.assuranceDeclenchee
                  ? `Perdu, mais assuré — ${dernierResultat.variation} seulement`
                  : dernierResultat.intouchableDeclenche
                    ? `Perdu, mais intouchable — ${dernierResultat.variation} seulement`
                    : `Perdu — ${dernierResultat.variation}`} <EtoilePsg taille={16} />
          </p>
          {/* 'main-chanceuse' (25/08/2026) — proposée UNIQUEMENT quand le
              serveur confirme relanceDisponible (voir jouerPileOuFace),
              jamais devinée côté client. Bouton dédié, distinct de
              "Rejouer" : la relance ne coûte rien (mise déjà prélevée),
              alors que "Rejouer" engagerait une NOUVELLE mise. */}
          {dernierResultat.relanceDisponible && (
            <button type="button" className="packs__bouton-relance" onClick={utiliserRelanceMainChanceuse} disabled={partieEnCours}>
              <i className="fa-solid fa-dice" aria-hidden="true" /> {partieEnCours ? 'Relance…' : 'Relancer gratuitement (main chanceuse)'}
            </button>
          )}
          {/* Deux issues distinctes (demandé en session : "après je peux
              rejouer la même mise ou changer de mise") — rejouerMemeMise
              relance direct sans repasser par les sélecteurs (mise/choix
              inchangés) ; "Changer la mise" repasse par setDernierResultat
              (null) pour retrouver les paliers/camps, mise/choix restent
              pré-sélectionnés (jamais remis à null ici) mais modifiables
              avant de rejouer. */}
          <div className="packs__pile-ou-face-actions-resultat">
            <button type="button" className="packs__bouton-secondaire" onClick={() => setDernierResultat(null)} disabled={partieEnCours}>
              Changer la mise
            </button>
            <button type="button" className="packs__bouton" onClick={rejouerMemeMise} disabled={partieEnCours || !miseValide}>
              {partieEnCours ? 'Lancement…' : `Rejouer ${mise} `}
              <EtoilePsg taille={14} />
            </button>
          </div>
        </div>
      )}

      {dernierResultat == null && (
        <>
          <div className="packs__pile-ou-face-choix">
            <p className="packs__soustitre">Ton camp</p>
            <div className="packs__pile-ou-face-cotes">
              <button
                type="button"
                className={`packs__cote${choix === 'pile' ? ' packs__cote--actif' : ''}`}
                onClick={() => setChoix('pile')}
                disabled={partieEnCours}
              >
                Pile
              </button>
              {/* Libellé "Face" (25/08/2026, demandé en session : "change
                  maillot en face pour vraiment faire un pile ou face") —
                  valeur interne `choix` INCHANGÉE ('maillot', voir
                  jouerPileOuFace côté serveur qui valide sur cette valeur
                  exacte), seul le texte affiché change. */}
              <button
                type="button"
                className={`packs__cote${choix === 'maillot' ? ' packs__cote--actif' : ''}`}
                onClick={() => setChoix('maillot')}
                disabled={partieEnCours}
              >
                Face
              </button>
            </div>
          </div>

          <div className="packs__pile-ou-face-mises">
            <p className="packs__soustitre">Ta mise</p>
            {/* MASQUÉS (pas juste désactivés) au lieu du solde (25/08/2026,
                demandé en session : "au lieu de les bloquer on les masque
                si j'ai pas assez d'étoiles") — un palier que le joueur ne
                peut pas se permettre n'a plus sa place dans la rangée du
                tout, plutôt que d'y rester grisé. `paliersDisponibles`
                filtré AVANT le rendu, pas un simple `disabled` conditionnel
                comme avant. */}
            <div className="packs__pile-ou-face-paliers">
              {paliersAffiches.filter((valeur) => valeur <= soldeEtoiles).map((valeur) => (
                <button
                  key={valeur}
                  type="button"
                  className={`packs__palier${mise === valeur ? ' packs__palier--actif' : ''}`}
                  onClick={() => setMise(valeur)}
                  disabled={partieEnCours}
                >
                  {valeur} <EtoilePsg taille={12} />
                </button>
              ))}
            </div>
            {/* Saisie manuelle (25/08/2026, demandé en session : "je veux
                aussi un sélecteur manuel si je veux miser moins que 5 ou
                plus que 50") — même state `mise` que les paliers, bornée
                par le serveur à [1, palier max autorisé] (voir
                jouerPileOuFace, plus de restriction aux valeurs exactes des
                paliers). value="" quand mise correspond à un palier
                (contrôlé par les boutons ci-dessus) évite d'afficher un
                nombre dans le champ alors qu'un bouton palier est
                sélectionné. */}
            <input
              type="number"
              inputMode="numeric"
              className="packs__pile-ou-face-mise-manuelle"
              placeholder="Autre montant"
              min={1}
              max={soldeEtoiles}
              value={mise != null && !paliersAffiches.includes(mise) ? mise : ''}
              onChange={(e) => {
                const valeur = e.target.value === '' ? null : Math.max(1, Math.floor(Number(e.target.value)))
                setMise(Number.isFinite(valeur) ? valeur : null)
              }}
              disabled={partieEnCours}
            />
            {/* Plus de "mise maximum" distinct du solde (25/08/2026) — depuis
                que miseMaxAutorisee = soldeEtoiles (plus de plafond palier
                fixe), la seule limite possible est de ne pas avoir assez
                d'étoiles, déjà couvert par ce seul message. */}
            {mise != null && mise > soldeEtoiles && (
              <p className="packs__aide">Pas assez d'étoiles pour cette mise.</p>
            )}
          </div>

          <button
            type="button"
            className="packs__bouton"
            onClick={() => lancerPartie().catch(() => {})}
            disabled={!peutJouer}
          >
            {partieEnCours ? 'Lancement…' : `Jouer (gain ×${multiplicateurAffiche})`}
          </button>
        </>
      )}

      {historique.length > 0 && (
        <div className="packs__pile-ou-face-historique">
          <p className="packs__soustitre">Dernières parties</p>
          <ul>
            {historique.map((h, i) => (
              <li
                key={i}
                className={h.gagne ? 'packs__historique-ligne--gagne' : h.assuranceDeclenchee ? 'packs__historique-ligne--assure' : 'packs__historique-ligne--perdu'}
              >
                {h.gagne ? `+${h.variation}` : h.variation} <EtoilePsg taille={12} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}

/**
 * Onboarding en deux popups de l'onglet Packs (25/08/2026, demandé en
 * session : "quand on arrive pour la première fois on explique le
 * fonctionnement des packs et du mini jeu, ensuite nouvelle popup on dit
 * que pour le lancement on offre 60 étoiles"). Un SEUL composant avec un
 * état d'étape interne (1 ou 2) plutôt que deux modales séparées gérées par
 * le parent : les deux s'enchaînent toujours dans le même ordre et
 * partagent le même bouton "Suivant"/"Compris" en bas, plus simple à
 * maintenir synchronisé. `onTermine` n'est appelé qu'à la fermeture de la
 * DEUXIÈME étape (voir marquerOnboardingPacksVuFut) — fermer la première
 * avec la croix ferme tout l'onboarding directement (pas de sortie à
 * mi-chemin qui laisserait l'utilisateur bloqué sur la popup bonus au
 * prochain chargement).
 */
function OnboardingPacksModal({ onTermine }) {
  const [etape, setEtape] = useState(1)

  return (
    <div className="packs__voile packs__voile--detail" role="dialog" aria-modal="true">
      <div className="packs__modale packs__modale--onboarding">
        {etape === 1 && (
          <>
            <h3 className="packs__modale-titre">Bienvenue dans Packs</h3>
            <p className="packs__modale-aide">
              Collectionne les cartes des joueurs du PSG façon album Panini. Ouvre un paquet gratuit chaque jour,
              ou une carte à l'unité, avec tes étoiles. Range tes cartes dans ta collection, envoie tes doublons à
              tes amis, et certaines cartes légendaires débloquent même un pouvoir spécial dans le mini-jeu.
            </p>
            <p className="packs__modale-aide">
              Pour gagner des étoiles rapidement, direction l'onglet <strong>Pile ou Face</strong> : un mini-jeu
              à mise à risque, rejouable autant de fois que tu veux.
            </p>
            <button type="button" className="packs__bouton" onClick={() => setEtape(2)}>Suivant</button>
          </>
        )}

        {etape === 2 && (
          <>
            <h3 className="packs__modale-titre">Cadeau de lancement</h3>
            <p className="packs__modale-aide">
              Pour le lancement, on t'offre <strong>100 étoiles</strong> <EtoilePsg taille={18} /> — de quoi ouvrir
              3 paquets ou tenter ta chance à Pile ou Face dès maintenant.
            </p>
            <button type="button" className="packs__bouton" onClick={onTermine}>Compris, merci !</button>
          </>
        )}
      </div>
    </div>
  )
}

/**
 * Système de packs de cartes FUT — voir hooks/useCartesFut.js (catalogue/
 * collection/état, callable ouvrirPackFut) et hooks/useAmisFut.js (code ami,
 * envoi de cartes). Remplace pages/Invocations.jsx : "packs" de 5 cartes
 * qu'on OUVRE (pas des invocations à l'unité, terminologie corrigée en
 * session), visuels calés sur le vrai balisage FUTBIN (voir
 * components/CarteFut.jsx), collection organisée en album façon Panini
 * (un groupe par saison, voir OngletCollection), et envoi de cartes à un
 * ami via code (voir components ModaleEnvoiCarte / OngletAmis).
 */
export default function Packs() {
  const [onglet, setOnglet] = useState('ouvrir')
  const [carteAEnvoyer, setCarteAEnvoyer] = useState(null)
  // Historique Pile ou Face remonté ICI (25/08/2026, signalé en session :
  // "on peut garder en mémoire les 10/20 dernières parties même si on
  // change d'onglet ? actuellement ça s'efface") — OngletPileOuFace est
  // démonté/remonté à chaque changement d'onglet (rendu conditionnel
  // `{onglet === 'pile-ou-face' && ...}` plus bas), donc un state local à
  // ce composant perdait tout son historique. Packs() reste monté tant
  // qu'on est sur la page, donc l'historique survit au changement d'onglet
  // — seulement perdu sur un vrai rechargement de page, ce qui reste
  // attendu pour un historique de session (pas persisté en base).
  const [historiquePileOuFace, setHistoriquePileOuFace] = useState([])

  const {
    catalogue, collection, saisons, nombrePossedees, etat,
    paquetGratuitDispo, coutEtoiles, coutEtoilesUnite, probabilitesUnite, probabilitesPaquet,
    ouvrirPaquet, modeDebug, ouvrirPaquetDebug, chargement
  } = useCartesFut()

  const { amis, codeAmi, genererCode, ajouterAmi, envoyerCarte, chargement: chargementAmis } = useAmisFut()

  const { paliersMise, multiplicateurGain, jouer: jouerPileOuFace } = usePileOuFace()

  // Teaser des pouvoirs légendaires (25/08/2026, demandé en session : "faut
  // mettre en avant qu'on peut débloquer des pouvoirs même si on a pas
  // encore débloqué les cartes ça fait rêver") — calculé ici à partir de
  // `collection` (déjà disponible pour l'album), PAS pour décider quoi que
  // ce soit côté jeu (jouerPileOuFace reste seul juge côté serveur), juste
  // pour AFFICHER "possédé"/"à débloquer" dans OngletPileOuFace avant même
  // de jouer une partie.
  const pouvoirsPossedes = useMemo(
    () => new Set(collection.filter((c) => c.rarete === 'legendaire' && c.pouvoir && c.quantite > 0).map((c) => c.pouvoir)),
    [collection]
  )

  const [lancerEnvoi, envoiEnCours] = useRafraichir(
    async (amiUid) => {
      const resultat = await envoyerCarte(carteAEnvoyer.id, amiUid)
      setCarteAEnvoyer(null)
      return resultat
    },
    {
      libelleSucces: 'Carte envoyée !',
      libelleErreur: (e) => e?.message || 'Échec de l’envoi, réessaie.'
    }
  )

  // Onboarding deux popups (25/08/2026) — affiché une seule fois par
  // compte, dès que etat.onboardingPacksVu est connu et vaut false. La
  // garde `!chargement` évite un flash de la popup pendant que etat.
  // arrive encore de Firestore (repli ETAT_PAR_DEFAUT.onboardingPacksVu =
  // false tant que le vrai document n'est pas encore chargé). Fermée
  // localement dès le clic (setOnboardingVuLocal) pour une disparition
  // instantanée, sans attendre l'aller-retour réseau du callable — best
  // effort comme les autres bonus, échec silencieux si le callable lève.
  const [onboardingVuLocal, setOnboardingVuLocal] = useState(false)
  const afficherOnboarding = !chargement && !etat.onboardingPacksVu && !onboardingVuLocal

  return (
    <div className="packs">
      <header className="packs__tete">
        <h2 className="packs__titre">Packs</h2>
      </header>

      {afficherOnboarding && (
        <OnboardingPacksModal
          onTermine={() => {
            setOnboardingVuLocal(true)
            marquerOnboardingPacksVuFut().catch(() => {})
          }}
        />
      )}

      <nav className="packs__onglets">
        <button type="button" className={`packs__onglet${onglet === 'ouvrir' ? ' packs__onglet--actif' : ''}`} onClick={() => setOnglet('ouvrir')}>
          Ouvrir
        </button>
        <button type="button" className={`packs__onglet${onglet === 'collection' ? ' packs__onglet--actif' : ''}`} onClick={() => setOnglet('collection')}>
          Collection
        </button>
        <button type="button" className={`packs__onglet${onglet === 'amis' ? ' packs__onglet--actif' : ''}`} onClick={() => setOnglet('amis')}>
          Amis
        </button>
        <button type="button" className={`packs__onglet${onglet === 'pile-ou-face' ? ' packs__onglet--actif' : ''}`} onClick={() => setOnglet('pile-ou-face')}>
          Pile ou Face
        </button>
      </nav>

      {onglet === 'ouvrir' && (
        <OngletOuvrir
          etat={etat}
          paquetGratuitDispo={paquetGratuitDispo}
          coutEtoiles={coutEtoiles}
          coutEtoilesUnite={coutEtoilesUnite}
          probabilitesUnite={probabilitesUnite}
          probabilitesPaquet={probabilitesPaquet}
          ouvrirPaquet={ouvrirPaquet}
          modeDebug={modeDebug}
          ouvrirPaquetDebug={ouvrirPaquetDebug}
          chargement={chargement}
          onAllerVersJeu={() => setOnglet('pile-ou-face')}
        />
      )}

      {onglet === 'collection' && (
        <OngletCollection
          collection={collection}
          saisons={saisons}
          nombrePossedees={nombrePossedees}
          catalogue={catalogue}
          chargement={chargement}
          amis={amis}
          onDemanderEnvoi={setCarteAEnvoyer}
        />
      )}

      {onglet === 'amis' && (
        <OngletAmis
          amis={amis}
          codeAmi={codeAmi}
          genererCode={genererCode}
          ajouterAmi={ajouterAmi}
          chargement={chargementAmis}
        />
      )}

      {onglet === 'pile-ou-face' && (
        <OngletPileOuFace
          soldeEtoiles={etat.soldeEtoiles || 0}
          paliersMise={paliersMise}
          multiplicateurGain={multiplicateurGain}
          pouvoirsPossedes={pouvoirsPossedes}
          historique={historiquePileOuFace}
          setHistorique={setHistoriquePileOuFace}
          jouer={jouerPileOuFace}
          chargement={chargement}
        />
      )}

      {carteAEnvoyer && (
        <ModaleEnvoiCarte
          carte={carteAEnvoyer}
          amis={amis}
          onAnnuler={() => setCarteAEnvoyer(null)}
          onConfirmer={(amiUid) => lancerEnvoi(amiUid).catch(() => {})}
          envoiEnCours={envoiEnCours}
        />
      )}
    </div>
  )
}
