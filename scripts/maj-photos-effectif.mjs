/**
 * Importe dans Firestore les photos + infos bio PSG.fr récupérées via
 * l'userscript Tampermonkey (voir scripts/tampermonkey/scraper-effectif-psg.user.js).
 * Écrit dans tenants/{TENANT_ID}/config/photosEffectif-{clubId} — un doc
 * SÉPARÉ de l'effectif Maxifoot (voir lib/firebase.js, chemins.photosEffectif,
 * et hooks/useEffectif.js pour la fusion côté client), jamais touché par le
 * cron quotidien : relancer ce script est donc sans risque, aussi souvent
 * que tu remets à jour les photos.
 *
 * Lancement :
 *   node scripts/maj-photos-effectif.mjs [chemin-du-json-exporte] [clubId]
 * Par défaut : scripts/effectif-psg-export.json, clubId "psg".
 * Requiert cle-service.json à la racine du projet (voir lib/admin.mjs —
 * détecté automatiquement, pas besoin d'exporter GOOGLE_APPLICATION_CREDENTIALS).
 *
 * Avant de lancer : place les images téléchargées par l'userscript dans
 * public/joueurs/{clubId}/. L'extension réelle sur le disque fait foi (pas
 * celle du JSON, voir résoudreFichier ci-dessous) : le CDN media.psg.fr
 * négocie le format à la volée (l'URL scrapée contient parfois ".png"/".jpg"
 * en apparence, mais répond en AVIF selon l'Accept du navigateur), donc
 * l'extension devinée par l'userscript à partir du texte de l'URL n'est pas
 * fiable — seul ce qui est effectivement sur le disque compte ici.
 *
 * Distinctions individuelles (Ballon d'Or, trophées personnels...) :
 * DEMANDÉ EN SESSION ("afficher ce genre d'info de manière stylée sur la
 * page chouchou"). Aucune source scrapée (ni Maxifoot ni psg.fr) ne liste
 * ça de façon fiable — vérifié en session sur la fiche Maxifoot de Dembélé,
 * pas de section palmarès. Champ 100% manuel : ajoute
 * `"distinctions": ["Ballon d'Or 2025"]` (tableau de chaînes, un texte par
 * ligne affichée) à l'entrée du joueur concerné dans
 * scripts/effectif-psg-export.json avant de relancer ce script — inutile
 * de repasser par l'userscript Tampermonkey pour ça, juste éditer le JSON à
 * la main. Absent ou vide : rien ne s'affiche (voir Chouchou.jsx).
 */
import { readFileSync, readdirSync } from 'node:fs'
import { initFirebaseAdmin, TENANT_ID } from './lib/admin.mjs'

const CHEMIN_EXPORT = process.argv[2] || 'scripts/effectif-psg-export.json'
const CLUB_ID = process.argv[3] || 'psg'
const DOSSIER_PUBLIC = `public/joueurs/${CLUB_ID}`

const db = initFirebaseAdmin()

function chargerExport(chemin) {
  const brut = readFileSync(chemin, 'utf8')
  const donnees = JSON.parse(brut)
  if (!donnees.joueurs || typeof donnees.joueurs !== 'object') {
    throw new Error(`Format inattendu dans ${chemin} : champ "joueurs" manquant ou invalide.`)
  }
  return donnees.joueurs
}

/**
 * Retrouve le fichier réel `{prefixe}.*` dans public/joueurs/{clubId}/,
 * quelle que soit son extension — voir avertissement en tête de fichier.
 * `fichiersDisponibles` est lu une seule fois par amorcer() et passé ici
 * plutôt que d'appeler readdirSync à chaque joueur.
 */
function resoudreFichier(fichiersDisponibles, prefixe, slug, avertissements) {
  const trouve = fichiersDisponibles.find((f) => f.startsWith(`${prefixe}.`))
  if (!trouve) {
    avertissements.push(`${slug} : aucun fichier "${prefixe}.*" dans ${DOSSIER_PUBLIC}/ (photo manquante sur le disque).`)
    return null
  }
  return `/joueurs/${CLUB_ID}/${trouve}`
}

/** Convertit une entrée exportée en document Firestore — bio telle quelle, photos résolues sur le disque (voir résoudreFichier). */
function normaliserJoueur(entree, slug, fichiersDisponibles, avertissements) {
  return {
    nom: entree.nom || null,
    nomComplet: entree.nomComplet || null,
    numeroMaillot: entree.numeroMaillot ?? null,
    poste: entree.poste || null,
    dateNaissance: entree.dateNaissance || null,
    lieuNaissance: entree.lieuNaissance || null,
    taille: entree.taille || null,
    poids: entree.poids || null,
    pied: entree.pied || null,
    nationalite: entree.nationalite || null,
    distinctions: Array.isArray(entree.distinctions) ? entree.distinctions : [],
    photoListe: resoudreFichier(fichiersDisponibles, `${slug}-liste`, slug, avertissements),
    photoHero: resoudreFichier(fichiersDisponibles, `${slug}-hero`, slug, avertissements)
  }
}

function listerFichiersPublics() {
  try {
    return readdirSync(DOSSIER_PUBLIC)
  } catch (e) {
    if (e.code === 'ENOENT') {
      throw new Error(`Dossier introuvable : ${DOSSIER_PUBLIC}/ — dépose-y les images téléchargées par l'userscript avant de relancer.`)
    }
    throw e
  }
}

async function amorcer() {
  const joueursExportes = chargerExport(CHEMIN_EXPORT)
  const fichiersDisponibles = listerFichiersPublics()
  const avertissements = []

  const joueurs = {}
  for (const [slug, entree] of Object.entries(joueursExportes)) {
    joueurs[slug] = normaliserJoueur(entree, slug, fichiersDisponibles, avertissements)
  }

  const ref = db.doc(`tenants/${TENANT_ID}/config/photosEffectif-${CLUB_ID}`)
  await ref.set({ clubId: CLUB_ID, joueurs, majLe: new Date() })

  console.log(`Photos/bio écrites dans ${ref.path} : ${Object.keys(joueurs).length} joueur(s).`)
  if (avertissements.length > 0) {
    console.log(`⚠ ${avertissements.length} photo(s) introuvable(s) sur le disque :`)
    avertissements.forEach((a) => console.log(`  - ${a}`))
  } else {
    console.log('Toutes les photos référencées ont été trouvées sur le disque.')
  }
}

amorcer().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1) })
