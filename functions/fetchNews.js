/**
 * ANCIEN pipeline d'ingestion RSS — retiré du projet.
 *
 * Les actus/mercato sont désormais alimentées exclusivement par
 * news.maxifoot.fr (voir sources/maxifootNews.js + collecteMaxifootNews.js),
 * source unique choisie pour remplacer les flux RSS (CulturePSG, Foot
 * Mercato, L'Équipe, RMC Sport) qui posaient des problèmes de fiabilité et
 * de cohérence. Le Mercato structuré (onglet dédié) reste alimenté
 * séparément par sources/maxifootPsg.js + collecteMaxifootPsg.js, non
 * concerné par ce changement.
 *
 * Ce fichier est volontairement laissé vide (plutôt que supprimé : le pont
 * de fichiers utilisé pour ce projet ne permet pas de suppression à
 * distance). Il n'est plus importé nulle part (voir index.js) et ne
 * déclare plus aucune fonction. Le paquet rss-parser a été retiré de
 * package.json — supprime aussi functions/node_modules/rss-parser (et
 * relance `npm install` dans functions/) si le dossier existe déjà en
 * local, sinon le prochain `npm install` s'en chargera de lui-même.
 */

export {}
