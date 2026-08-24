/**
 * Point d'entrée des Cloud Functions.
 * Chaque fonction doit être exportée explicitement : un fichier oublié
 * fait échouer le déploiement entier, pas seulement la fonction concernée.
 */
export { collecteQuotidienne, rafraichirDiffusions, corrigerChaine } from './scrapeTv.js'
export { collecteClassements, rafraichirClassements } from './fetchStandings.js'
export { collecteMaxifootPsg, rafraichirMaxifootPsg } from './collecteMaxifootPsg.js'
export { collecteMaxifootNews, rafraichirMaxifootNews, purgeActusAnciennes } from './collecteMaxifootNews.js'
export { collecteEffectifPsg, rafraichirEffectifPsg } from './collecteEffectifPsg.js'
export { collecteCompoPsg, rafraichirCompoPsg, declencherCompoSurNouvelleActu } from './collecteCompoPsg.js'
export { collecteScoresDirect, rafraichirScoresDirect } from './collecteScoresDirect.js'
export { collecteResultatsSoir, collecteResultatsMatin } from './collecteResultatsMatchs.js'
export { recupererDetailsJoueur } from './detailsJoueur.js'
export { diagnosticEffectif } from './diagnosticEffectif.js' // TEMPORAIRE — à retirer une fois le bug "0 joueur" élucidé
export { diagnosticResultats } from './diagnosticResultats.js' // TEMPORAIRE — même usage que diagnosticEffectif.js, pour le rapprochement de noms d'équipe
export {
  injecterCompoTest,
  effacerCompoTest,
  injecterScoreTest,
  effacerScoreTest,
  envoyerNotifTest
} from './donneesTest.js' // TEMPORAIRE — outils de debug visuel, gated par config/debug.actif
export { genererDigest } from './digestIA.js'
export {
  notifMatin,
  notifRappels,
  notifActu,
  enregistrerAppareil,
  retirerAppareil,
  purgeEnvois
} from './notifications.js'
