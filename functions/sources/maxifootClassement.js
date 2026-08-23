import { recupererHtml } from '../lib/http.js'

/**
 * Source classement : Maxifoot.fr (remplace football-data.org, en échec
 * HTTP 400 permanent sur toutes les compétitions).
 *
 * Chaque compétition suivie a sa page dédiée "/resultat-{slug}.htm", qui
 * contient un tableau <table class="clas1"> avec toujours la même
 * structure de colonnes, que ce soit un championnat classique (18-20
 * clubs, une seule table) ou la phase de ligue de la Ligue des Champions
 * (36 clubs, mêmes colonnes, juste plus de lignes et des zones de
 * qualification différentes). Un seul parseur couvre donc les deux cas.
 *
 * Attention : ne PAS confondre avec le mini-classement encarté dans la
 * fiche club (table.bcla2, Pts/J uniquement, tronqué) — ce n'est pas la
 * bonne source, seule la page /resultat-xxx.htm dédiée est fiable.
 */

// slug de l'URL Maxifoot ("/resultat-{slug}.htm") pour chaque compétition
// suivie par l'app (id interne = celui utilisé dans config/competitions).
//
// Piège annuel identifié le 21/08/2026 : l'URL sans suffixe de saison
// affiche la saison "courante" au sens de Maxifoot, mais Maxifoot ne bascule
// cette URL sur la nouvelle saison qu'une fois que celle-ci a une vraie
// phase de classement à afficher. Pour la Ligue des Champions, la phase de
// ligue démarre mi-septembre : jusque-là, l'URL sans suffixe (utilisée
// ci-dessous) continue de montrer le classement FINAL de la saison
// précédente — ce n'est pas un bug de notre côté, juste une absence de
// donnée "saison en cours" chez la source. Voir `saisonPrecedente` dans
// `recupererClassementMaxifoot` : on détecte ce cas plutôt que d'essayer de
// deviner/forcer un suffixe d'URL qui casserait le scraping tant que la
// nouvelle saison n'a pas encore de tableau (`resultat-xxx-2027.htm`
// n'a par exemple pour l'instant que les barrages, pas de <table class=clas1>).
const SLUGS_MAXIFOOT = {
  'ligue-1': 'ligue-1-france',
  'premier-league': 'premier-league-angleterre',
  liga: 'liga-espagne',
  'serie-a': 'serie-a-italie',
  bundesliga: 'bundesliga-allemagne',
  'ligue-des-champions': 'ligue-des-champions'
}

// Couleurs de fond observées dans le HTML de Maxifoot pour signaler une
// zone du classement (qualification Europe, relégation, etc.). Codées en
// dur ici car ce sont des constantes visuelles du site source lui-même
// (pas une donnée métier du projet) — si Maxifoot change sa charte, seul
// ce tableau est à mettre à jour.
const ZONES_COULEUR = {
  '#a5dea6': 'qualification', // vert soutenu : Ligue des Champions / barrages 1/8e
  '#bdffbe': 'qualification', // vert clair : barrages 16e de finale (C1)
  '#ffff99': 'suivi', // jaune : ligne mise en avant par Maxifoot (club du menu haut de page) — pas une vraie zone
  '#feabad': 'elimination', // rouge : relégation ou élimination de la compétition
  '#c9e9ff': 'europa', // bleu clair : zone Europa League (championnats)
  '#dbe9f9': 'europa'
}

function zoneDepuisCouleur(styleAttr) {
  const correspond = styleAttr?.match(/background:\s*(#[0-9a-fA-F]{3,6})/)
  if (!correspond) return null
  const couleur = correspond[1].toLowerCase()
  const zone = ZONES_COULEUR[couleur]
  // "suivi" n'est pas une vraie zone de classement, seulement une mise en
  // avant graphique côté Maxifoot (ex : club présent dans le bandeau haut
  // de page) : on l'ignore pour ne pas afficher une fausse info à l'utilisateur.
  return zone && zone !== 'suivi' ? zone : null
}

function nombre(texte) {
  const valeur = parseInt(String(texte).replace(/[^\d-]/g, ''), 10)
  return Number.isFinite(valeur) ? valeur : 0
}

/**
 * Saison actuellement en cours au sens calendaire du football (démarre
 * autour de juillet). Sert de référence pour détecter si la page Maxifoot
 * scrapée montre bien la saison en cours ou retombe encore sur la
 * précédente faute de données (cas typique de la Ligue des Champions entre
 * la fin d'une saison et le démarrage de la phase de ligue mi-septembre).
 */
function saisonAttendue(date = new Date()) {
  const annee = date.getFullYear()
  const debut = date.getMonth() >= 6 ? annee : annee - 1
  return `${debut}-${debut + 1}`
}

/** Extrait la mention "saison YYYY-YYYY" présente en texte libre sur la page. */
function saisonDepuisHtml(html) {
  return html.match(/saison\s*(\d{4}-\d{4})/i)?.[1] || null
}

/** Extrait les lignes d'un tableau class="clas1" à partir du HTML brut. */
function extraireLignes(htmlTable) {
  const lignesBrutes = [...htmlTable.matchAll(/<tr([^>]*)>([\s\S]*?)<\/tr>/g)]
  const lignes = []

  for (const [, attrsLigne, contenuLigne] of lignesBrutes) {
    // Ignore l'en-tête (tclas1) et la ligne "Mis à jour" en pied de tableau.
    if (/class=["']?tclas1/.test(attrsLigne) || /class=["']?maj/.test(contenuLigne)) continue

    const cellules = [...contenuLigne.matchAll(/<td[^>]*>([\s\S]*?)<\/td>/g)].map((m) => m[1])
    if (cellules.length < 10) continue

    const position = nombre(cellules[0])
    const nomMatch = cellules[1].match(/<a[^>]*>([\s\S]*?)<\/a>/)
    const equipe = (nomMatch ? nomMatch[1] : cellules[1]).replace(/<[^>]+>/g, '').trim()
    if (!position || !equipe) continue

    lignes.push({
      position,
      equipe,
      nomComplet: equipe,
      points: nombre(cellules[2]),
      joues: nombre(cellules[3]),
      gagnes: nombre(cellules[4]),
      nuls: nombre(cellules[5]),
      perdus: nombre(cellules[6]),
      marques: nombre(cellules[7]),
      encaisses: nombre(cellules[8]),
      difference: nombre(cellules[9]),
      zone: zoneDepuisCouleur(attrsLigne),
      forme: null
    })
  }

  return lignes
}

/**
 * Récupère et parse le classement d'une compétition depuis Maxifoot.
 * Retourne le même format que lireClassement() (functions/lib/apiFoot.js)
 * pour rester compatible avec le reste du pipeline (Firestore, front).
 */
export async function recupererClassementMaxifoot(competitionId) {
  const slug = SLUGS_MAXIFOOT[competitionId]
  if (!slug) throw new Error(`Pas de correspondance Maxifoot pour "${competitionId}"`)

  const html = await recupererHtml(`https://www.maxifoot.fr/resultat-${slug}.htm`)

  // Seul le premier bloc "GENE." (classement général, id=clastot) nous
  // intéresse : la page contient aussi les classements domicile/extérieur
  // (id=clasdom / id=clasext) dans des <div style="display:none"> juste après.
  const blocGeneral = html.match(/<div id=clastot>([\s\S]*?)<div id=clasdom/)
  if (!blocGeneral) throw new Error('Tableau de classement introuvable dans la page Maxifoot')

  const tableMatch = blocGeneral[1].match(/<table[^>]*class="clas1"[^>]*>([\s\S]*?)<\/table>/)
  if (!tableMatch) throw new Error('<table class="clas1"> introuvable')

  const lignes = extraireLignes(tableMatch[1])
  if (lignes.length === 0) throw new Error('Aucune ligne de classement extraite')

  const saison = saisonDepuisHtml(html)

  return {
    format: 'championnat',
    groupes: [{ libelle: null, lignes }],
    saison,
    // true seulement si on a pu lire une saison sur la page ET qu'elle ne
    // correspond pas à la saison en cours — jamais true par défaut en cas
    // de doute (mention introuvable), pour ne pas afficher un avertissement
    // à tort.
    saisonPrecedente: Boolean(saison) && saison !== saisonAttendue()
  }
}

export function competitionsSupportees() {
  return Object.keys(SLUGS_MAXIFOOT)
}
