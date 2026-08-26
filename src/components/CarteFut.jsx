import './CarteFut.css'

const LIBELLE_STAT = { pac: 'PAC', sho: 'SHO', pas: 'PAS', dri: 'DRI', def: 'DEF', phy: 'PHY' }

// Pouvoirs de cartes légendaires (25/08/2026, demandé en session : "mettre
// des pouvoirs qu'aux cartes légendaire... afficher les pouvoirs sur les
// cartes concernés"). Libellé/icône d'AFFICHAGE seulement — la vraie règle
// de jeu (effet sur Pile ou Face) est calculée côté serveur
// (functions/packsFut.js, POUVOIRS_LEGENDAIRES fait autorité là-bas) : ce
// tableau-ci ne fait QUE traduire carte.pouvoir en badge visuel, jamais de
// logique de jeu ici. Icônes Font Awesome cohérentes avec le thème de
// chaque pouvoir plutôt qu'un pictogramme générique répété trois fois.
const ICONE_POUVOIR = {
  'sang-froid': 'fa-solid fa-chess-king',
  'franc-tireur': 'fa-solid fa-bullseye',
  'assurance-maillot': 'fa-solid fa-shield-halved'
}
const LIBELLE_POUVOIR = {
  'sang-froid': 'Sang-froid',
  'franc-tireur': 'Franc-tireur',
  'assurance-maillot': 'Assurance maillot'
}

/**
 * Rendu fidèle d'une carte FUTBIN — géométrie recalée le 25/08/2026 sur un
 * export JSON précis fourni en session (coordonnées topPct/leftPct/widthPct/
 * heightPct de chaque élément `.playercard-26-*` réel, capturées sur deux
 * cartes PSG, une spéciale et une base). Tous les `top/left/width/height` de
 * CarteFut.css viennent directement de ces coordonnées plutôt que de valeurs
 * approximées à l'oeil — voir le commentaire en tête de CarteFut.css pour le
 * détail des correspondances.
 *
 * Deux tailles : "l" (détail, ouverture de paquet) et "s" (grille de
 * collection). Nom + stats affichés dans les deux (demandé en session pour
 * "s" — tout est en cqw dans CarteFut.css, donc ça reste lisible même en
 * petit) ; seuls les badges nation/ligue/club restent réservés à "l"
 * (surchargeraient une mini-carte sans vraie utilité à cette taille).
 *
 * Composant partagé entre pages/Packs.jsx (ouverture + album) plutôt que
 * dupliqué : une seule fois à corriger si FUTBIN change son balisage.
 *
 * PAS de badge positions alternatives (retiré en session — "le carré noir
 * j'en veux pas, la carte suffit") : carte.positionsAlt reste en base
 * (functions/sources/futbinCartesPsg.js) au cas où besoin plus tard, juste
 * plus affiché ici.
 *
 * PAS de bloc pied/compétences/pied faible/note FUTBIN non plus (retiré en
 * session — "j'en veux pas" sur le badge `.carte-fut__extra`) : les champs
 * carte.pied/competences/piedFaible/noteFutbin restent en base
 * (functions/sources/futbinCartesPsg.js) au cas où besoin plus tard, juste
 * plus affichés ici.
 *
 * BUG CORRIGÉ (25/08/2026, signalé en session sur une carte de test) : les
 * cartes spéciales/promo (imageJoueurCadrage:"plein", classe FUTBIN
 * `-special-img`) et les cartes normales gold/silver/bronze
 * (imageJoueurCadrage:"buste", classe FUTBIN `-base-img`) n'ont PAS le même
 * cadrage sur FUTBIN — la première est une silhouette détourée pensée pour
 * couvrir toute la carte, la seconde un portrait cadré dans une zone
 * restreinte du tiers supérieur. Les deux étaient affichées en plein cadre
 * (inset:0) faute de distinction côté extraction (voir
 * functions/sources/futbinCartesPsg.js), d'où un portrait "buste" étiré sur
 * toute la largeur/hauteur et qui déborde sur le nom. `imageJoueurCadrage`
 * (absent sur les cartes déjà en base avant ce correctif, voir repli
 * `?? 'plein'` ci-dessous — même comportement qu'avant pour elles, à
 * corriger par un nouveau scraping) choisit la classe CSS appliquée.
 *
 * PAS de dégradé bas assombrissant le nom/stats non plus (retiré
 * définitivement le 25/08/2026, voir CarteFut.css) : posait des problèmes
 * successifs (halo de rareté déformé, puis débordement visible même limité
 * au cadrage "plein") sans jamais être pleinement satisfaisant — retiré
 * plutôt que corrigé une troisième fois.
 */
export default function CarteFut({ carte, taille = 'l' }) {
  const style = {
    '--carte-couleur-texte': carte.couleurTexte || '#FFFFFF',
    '--carte-couleur-accent-fond': carte.couleurAccentFond || 'rgba(0,0,0,0.4)',
    '--carte-couleur-accent-bordure': carte.couleurAccentBordure || carte.couleurTexte || '#FFFFFF'
  }
  const cadrageJoueur = carte.imageJoueurCadrage || 'plein'
  // Fond de secours par rareté (voir .carte-fut--fond-* dans CarteFut.css)
  // — seulement pour une carte SANS imageFond réel (ex. la fausse carte
  // "résultat" du mini-jeu Pile ou Face) : une vraie carte FUTBIN a toujours
  // son propre PNG détouré, jamais ce dégradé générique.
  const fondSecours = !carte.imageFond && carte.rarete ? ` carte-fut--fond-${carte.rarete}` : ''

  return (
    <div className={`carte-fut carte-fut--${taille}${fondSecours}`} style={style}>
      {carte.imageFond && <img className="carte-fut__fond" src={carte.imageFond} alt="" aria-hidden="true" loading="lazy" />}
      {carte.imageJoueur && (
        <img
          className={`carte-fut__joueur carte-fut__joueur--${cadrageJoueur}`}
          src={carte.imageJoueur}
          alt=""
          aria-hidden="true"
          loading="lazy"
        />
      )}

      <div className="carte-fut__entete">
        <span className="carte-fut__note">{carte.note}</span>
        <span className="carte-fut__position">{carte.position}</span>
        {carte.roleplus && <span className="carte-fut__role-plus">++</span>}
      </div>

      {/* Badge de pouvoir légendaire — réservé aux cartes légendaires qui en
          portent un explicitement (carte.pouvoir rempli en base, voir
          POUVOIRS_LEGENDAIRES côté serveur) : jamais affiché sur les autres
          raretés, jamais déduit automatiquement. Affiché à TOUTE taille
          (comme les stats, voir plus bas) — coin haut-droit pour ne jamais
          chevaucher le bloc note/position en haut-gauche. */}
      {carte.rarete === 'legendaire' && carte.pouvoir && ICONE_POUVOIR[carte.pouvoir] && (
        <div className="carte-fut__pouvoir" title={LIBELLE_POUVOIR[carte.pouvoir]}>
          <i className={ICONE_POUVOIR[carte.pouvoir]} aria-hidden="true" />
        </div>
      )}

      <div className="carte-fut__bas">
        <p className="carte-fut__nom">{carte.nom}</p>

        {/* Affichées quelle que soit la taille (demandé en session :
            "même en petit je veux les stats du joueur sur la carte") — tout
            est déjà en cqw dans CarteFut.css, donc ça reste proportionnel
            et lisible sur la petite carte de la grille de collection/résumé
            comme sur la grande. */}
        {carte.stats && Object.keys(carte.stats).length > 0 && (
          <ul className="carte-fut__stats">
            {Object.entries(LIBELLE_STAT).map(([cle, libelle]) => (
              carte.stats[cle] != null && (
                <li key={cle}>
                  <strong>{carte.stats[cle]}</strong>
                  <span>{libelle}</span>
                </li>
              )
            ))}
          </ul>
        )}

        {taille === 'l' && (carte.nation || carte.ligue || carte.club) && (
          <div className="carte-fut__badges">
            {carte.nation?.image && <img src={carte.nation.image} alt="" title={carte.nation.nom} loading="lazy" />}
            {carte.ligue?.image && <img src={carte.ligue.image} alt="" title={carte.ligue.nom} loading="lazy" />}
            {carte.club?.image && <img src={carte.club.image} alt="" title={carte.club.nom} loading="lazy" />}
          </div>
        )}
      </div>
    </div>
  )
}
