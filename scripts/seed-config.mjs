/**
 * Amorce le catalogue de clubs, nations et chaînes dans Firestore.
 * Lancement : node scripts/seed-config.mjs
 * Requiert cle-service.json à la racine du projet (voir lib/admin.mjs —
 * détecté automatiquement, pas besoin d'exporter GOOGLE_APPLICATION_CREDENTIALS).
 */
import { initFirebaseAdmin, TENANT_ID } from './lib/admin.mjs'

const db = initFirebaseAdmin()

// Catalogue complet : les 5 grands championnats européens (saison 2026-2027),
// soit 96 clubs (Ligue 1 : 18, Liga : 20, Serie A : 20, Bundesliga : 18,
// Premier League : 20).
//
// `slugMatchsTv`/`slugFootmercato` sont du "best-effort" (dérivés du nom
// officiel) : à corriger manuellement si un flux ne matche pas, un slug mort
// casse silencieusement l'ingestion pour ce club (voir fetchDiffusions).
// `logo` pointe vers public/logos/<id>.svg : le fichier est à déposer
// manuellement, l'app affiche un repli neutre tant qu'il est absent (voir
// MatchCard/Accueil).
const CLUBS = [
  // Ligue 1
  // alias: 'PSG' seul (pas 'PSG Paris') — un alias "Paris" isolé est trop
  // générique et matchait aussi Paris FC (club distinct de Ligue 1) dans le
  // classement et la reconnaissance TV, voir equipes.js/normalize.js.
  { id: 'psg', nom: 'Paris Saint-Germain', alias: 'PSG', court: 'PSG', championnat: 'ligue-1', pays: 'FR', slugMatchsTv: 'paris-saint-germain', slugFootmercato: 'paris-saint-germain', logo: '/logos/psg.svg' },
  { id: 'marseille', nom: 'Olympique de Marseille', alias: 'OM', court: 'Marseille', championnat: 'ligue-1', pays: 'FR', slugMatchsTv: 'olympique-de-marseille', slugFootmercato: 'olympique-de-marseille', logo: '/logos/marseille.svg' },
  { id: 'lens', nom: 'RC Lens', alias: 'Lens', court: 'Lens', championnat: 'ligue-1', pays: 'FR', slugMatchsTv: 'rc-lens', slugFootmercato: 'rc-lens', logo: '/logos/lens.svg' },
  { id: 'lyon', nom: 'Olympique Lyonnais', alias: 'OL Lyon', court: 'Lyon', championnat: 'ligue-1', pays: 'FR', slugMatchsTv: 'olympique-lyonnais', slugFootmercato: 'olympique-lyonnais', logo: '/logos/lyon.svg' },
  { id: 'monaco', nom: 'AS Monaco', alias: 'ASM', court: 'Monaco', championnat: 'ligue-1', pays: 'FR', slugMatchsTv: 'as-monaco', slugFootmercato: 'as-monaco', logo: '/logos/monaco.svg' },
  { id: 'lille', nom: 'LOSC Lille', alias: 'LOSC', court: 'Lille', championnat: 'ligue-1', pays: 'FR', slugMatchsTv: 'losc-lille', slugFootmercato: 'losc-lille', logo: '/logos/lille.svg' },
  { id: 'rennes', nom: 'Stade Rennais', alias: 'SRFC Rennes', court: 'Rennes', championnat: 'ligue-1', pays: 'FR', slugMatchsTv: 'stade-rennais', slugFootmercato: 'stade-rennais', logo: '/logos/rennes.svg' },
  { id: 'nice', nom: 'OGC Nice', alias: 'OGCN', court: 'Nice', championnat: 'ligue-1', pays: 'FR', slugMatchsTv: 'ogc-nice', slugFootmercato: 'ogc-nice', logo: '/logos/nice.svg' },
  { id: 'angers', nom: 'Angers SCO', alias: 'SCO', court: 'Angers', championnat: 'ligue-1', pays: 'FR', slugMatchsTv: 'angers-sco', slugFootmercato: 'angers-sco', logo: '/logos/angers.svg' },
  { id: 'auxerre', nom: 'AJ Auxerre', alias: 'AJA', court: 'Auxerre', championnat: 'ligue-1', pays: 'FR', slugMatchsTv: 'aj-auxerre', slugFootmercato: 'aj-auxerre', logo: '/logos/auxerre.svg' },
  { id: 'brest', nom: 'Stade Brestois 29', alias: 'Brestois', court: 'Brest', championnat: 'ligue-1', pays: 'FR', slugMatchsTv: 'stade-brestois-29', slugFootmercato: 'stade-brestois-29', logo: '/logos/brest.svg' },
  { id: 'le-havre', nom: 'Le Havre AC', alias: 'HAC', court: 'Le Havre', championnat: 'ligue-1', pays: 'FR', slugMatchsTv: 'le-havre-ac', slugFootmercato: 'le-havre-ac', logo: '/logos/le-havre.svg' },
  { id: 'le-mans', nom: 'Le Mans FC', alias: 'MUC72', court: 'Le Mans', championnat: 'ligue-1', pays: 'FR', slugMatchsTv: 'le-mans-fc', slugFootmercato: 'le-mans-fc', logo: '/logos/le-mans.svg' },
  { id: 'lorient', nom: 'FC Lorient', alias: 'Merlus', court: 'Lorient', championnat: 'ligue-1', pays: 'FR', slugMatchsTv: 'fc-lorient', slugFootmercato: 'fc-lorient', logo: '/logos/lorient.svg' },
  { id: 'paris-fc', nom: 'Paris FC', alias: 'PFC', court: 'Paris FC', championnat: 'ligue-1', pays: 'FR', slugMatchsTv: 'paris-fc', slugFootmercato: 'paris-fc', logo: '/logos/paris-fc.svg' },
  { id: 'strasbourg', nom: 'RC Strasbourg', alias: 'Racing Strasbourg', court: 'Strasbourg', championnat: 'ligue-1', pays: 'FR', slugMatchsTv: 'rc-strasbourg', slugFootmercato: 'rc-strasbourg', logo: '/logos/strasbourg.svg' },
  { id: 'toulouse', nom: 'Toulouse FC', alias: 'TFC', court: 'Toulouse', championnat: 'ligue-1', pays: 'FR', slugMatchsTv: 'toulouse-fc', slugFootmercato: 'toulouse-fc', logo: '/logos/toulouse.svg' },
  { id: 'troyes', nom: 'ESTAC Troyes', alias: 'ESTAC', court: 'Troyes', championnat: 'ligue-1', pays: 'FR', slugMatchsTv: 'estac-troyes', slugFootmercato: 'estac-troyes', logo: '/logos/troyes.svg' },

  // Liga
  { id: 'barcelone', nom: 'FC Barcelone', alias: 'Barca Barcelona', court: 'Barcelone', championnat: 'liga', pays: 'ES', slugMatchsTv: 'fc-barcelone', slugFootmercato: 'fc-barcelone', logo: '/logos/barcelone.svg' },
  { id: 'real-madrid', nom: 'Real Madrid', alias: 'Merengue', court: 'Real Madrid', championnat: 'liga', pays: 'ES', slugMatchsTv: 'real-madrid', slugFootmercato: 'real-madrid', logo: '/logos/real-madrid.svg' },
  { id: 'atletico', nom: 'Atletico Madrid', alias: 'Atleti', court: 'Atletico', championnat: 'liga', pays: 'ES', slugMatchsTv: 'atletico-madrid', slugFootmercato: 'atletico-madrid', logo: '/logos/atletico.svg' },
  { id: 'villarreal', nom: 'Villarreal CF', alias: 'Sous-marin jaune', court: 'Villarreal', championnat: 'liga', pays: 'ES', slugMatchsTv: 'villarreal-cf', slugFootmercato: 'villarreal-cf', logo: '/logos/villarreal.svg' },
  { id: 'real-betis', nom: 'Real Betis', alias: 'Betis Verdiblancos', court: 'Betis', championnat: 'liga', pays: 'ES', slugMatchsTv: 'real-betis', slugFootmercato: 'real-betis', logo: '/logos/real-betis.svg' },
  { id: 'celta-vigo', nom: 'Celta de Vigo', alias: 'Celta', court: 'Celta Vigo', championnat: 'liga', pays: 'ES', slugMatchsTv: 'celta-de-vigo', slugFootmercato: 'celta-de-vigo', logo: '/logos/celta-vigo.svg' },
  { id: 'real-sociedad', nom: 'Real Sociedad', alias: 'Txuri-Urdin', court: 'Real Sociedad', championnat: 'liga', pays: 'ES', slugMatchsTv: 'real-sociedad', slugFootmercato: 'real-sociedad', logo: '/logos/real-sociedad.svg' },
  { id: 'getafe', nom: 'Getafe CF', alias: 'Geta', court: 'Getafe', championnat: 'liga', pays: 'ES', slugMatchsTv: 'getafe-cf', slugFootmercato: 'getafe-cf', logo: '/logos/getafe.svg' },
  { id: 'athletic-bilbao', nom: 'Athletic Club', alias: 'Athletic Bilbao', court: 'Athletic Bilbao', championnat: 'liga', pays: 'ES', slugMatchsTv: 'athletic-club', slugFootmercato: 'athletic-club', logo: '/logos/athletic-bilbao.svg' },
  { id: 'valence', nom: 'Valencia CF', alias: 'Valence Che', court: 'Valence', championnat: 'liga', pays: 'ES', slugMatchsTv: 'valencia-cf', slugFootmercato: 'valencia-cf', logo: '/logos/valence.svg' },
  { id: 'seville', nom: 'Sevilla FC', alias: 'Seville', court: 'Seville', championnat: 'liga', pays: 'ES', slugMatchsTv: 'sevilla-fc', slugFootmercato: 'sevilla-fc', logo: '/logos/seville.svg' },
  { id: 'rayo-vallecano', nom: 'Rayo Vallecano', alias: 'Rayo', court: 'Rayo Vallecano', championnat: 'liga', pays: 'ES', slugMatchsTv: 'rayo-vallecano', slugFootmercato: 'rayo-vallecano', logo: '/logos/rayo-vallecano.svg' },
  { id: 'osasuna', nom: 'CA Osasuna', alias: 'Osasuna', court: 'Osasuna', championnat: 'liga', pays: 'ES', slugMatchsTv: 'ca-osasuna', slugFootmercato: 'ca-osasuna', logo: '/logos/osasuna.svg' },
  { id: 'espanyol', nom: 'RCD Espanyol', alias: 'Espanyol Barcelone', court: 'Espanyol', championnat: 'liga', pays: 'ES', slugMatchsTv: 'rcd-espanyol', slugFootmercato: 'rcd-espanyol', logo: '/logos/espanyol.svg' },
  { id: 'alaves', nom: 'Deportivo Alaves', alias: 'Alaves', court: 'Alaves', championnat: 'liga', pays: 'ES', slugMatchsTv: 'deportivo-alaves', slugFootmercato: 'deportivo-alaves', logo: '/logos/alaves.svg' },
  { id: 'levante', nom: 'Levante UD', alias: 'Levante', court: 'Levante', championnat: 'liga', pays: 'ES', slugMatchsTv: 'levante-ud', slugFootmercato: 'levante-ud', logo: '/logos/levante.svg' },
  { id: 'elche', nom: 'Elche CF', alias: 'Elche', court: 'Elche', championnat: 'liga', pays: 'ES', slugMatchsTv: 'elche-cf', slugFootmercato: 'elche-cf', logo: '/logos/elche.svg' },
  { id: 'racing-santander', nom: 'Racing de Santander', alias: 'Racing Santander', court: 'Racing Santander', championnat: 'liga', pays: 'ES', slugMatchsTv: 'racing-de-santander', slugFootmercato: 'racing-de-santander', logo: '/logos/racing-santander.svg' },
  { id: 'la-corogne', nom: 'Deportivo La Corogne', alias: 'Deportivo A Coruna Depor', court: 'La Corogne', championnat: 'liga', pays: 'ES', slugMatchsTv: 'deportivo-la-corogne', slugFootmercato: 'deportivo-la-corogne', logo: '/logos/la-corogne.svg' },
  { id: 'malaga', nom: 'Malaga CF', alias: 'Malaga', court: 'Malaga', championnat: 'liga', pays: 'ES', slugMatchsTv: 'malaga-cf', slugFootmercato: 'malaga-cf', logo: '/logos/malaga.svg' },

  // Serie A
  { id: 'inter', nom: 'Inter Milan', alias: 'Nerazzurri Internazionale', court: 'Inter', championnat: 'serie-a', pays: 'IT', slugMatchsTv: 'inter-milan', slugFootmercato: 'inter-milan', logo: '/logos/inter.svg' },
  { id: 'ac-milan', nom: 'AC Milan', alias: 'Rossoneri Milan', court: 'Milan', championnat: 'serie-a', pays: 'IT', slugMatchsTv: 'ac-milan', slugFootmercato: 'ac-milan', logo: '/logos/ac-milan.svg' },
  { id: 'juventus', nom: 'Juventus Turin', alias: 'Juve', court: 'Juventus', championnat: 'serie-a', pays: 'IT', slugMatchsTv: 'juventus-turin', slugFootmercato: 'juventus-turin', logo: '/logos/juventus.svg' },
  { id: 'naples', nom: 'Napoli', alias: 'SSC Napoli Naples', court: 'Naples', championnat: 'serie-a', pays: 'IT', slugMatchsTv: 'napoli', slugFootmercato: 'napoli', logo: '/logos/naples.svg' },
  { id: 'roma', nom: 'AS Roma', alias: 'Giallorossi Roma', court: 'Roma', championnat: 'serie-a', pays: 'IT', slugMatchsTv: 'as-roma', slugFootmercato: 'as-roma', logo: '/logos/roma.svg' },
  { id: 'lazio', nom: 'SS Lazio', alias: 'Lazio Rome', court: 'Lazio', championnat: 'serie-a', pays: 'IT', slugMatchsTv: 'ss-lazio', slugFootmercato: 'ss-lazio', logo: '/logos/lazio.svg' },
  { id: 'atalanta', nom: 'Atalanta BC', alias: 'Dea Atalanta', court: 'Atalanta', championnat: 'serie-a', pays: 'IT', slugMatchsTv: 'atalanta-bc', slugFootmercato: 'atalanta-bc', logo: '/logos/atalanta.svg' },
  { id: 'fiorentina', nom: 'ACF Fiorentina', alias: 'Viola Fiorentina', court: 'Fiorentina', championnat: 'serie-a', pays: 'IT', slugMatchsTv: 'acf-fiorentina', slugFootmercato: 'acf-fiorentina', logo: '/logos/fiorentina.svg' },
  { id: 'bologne', nom: 'Bologna FC', alias: 'Bologne Rossoblu', court: 'Bologne', championnat: 'serie-a', pays: 'IT', slugMatchsTv: 'bologna-fc', slugFootmercato: 'bologna-fc', logo: '/logos/bologne.svg' },
  { id: 'torino', nom: 'Torino FC', alias: 'Toro Torino', court: 'Torino', championnat: 'serie-a', pays: 'IT', slugMatchsTv: 'torino-fc', slugFootmercato: 'torino-fc', logo: '/logos/torino.svg' },
  { id: 'genoa', nom: 'Genoa CFC', alias: 'Genoa', court: 'Genoa', championnat: 'serie-a', pays: 'IT', slugMatchsTv: 'genoa-cfc', slugFootmercato: 'genoa-cfc', logo: '/logos/genoa.svg' },
  { id: 'udinese', nom: 'Udinese Calcio', alias: 'Udinese', court: 'Udinese', championnat: 'serie-a', pays: 'IT', slugMatchsTv: 'udinese-calcio', slugFootmercato: 'udinese-calcio', logo: '/logos/udinese.svg' },
  { id: 'sassuolo', nom: 'US Sassuolo', alias: 'Sassuolo', court: 'Sassuolo', championnat: 'serie-a', pays: 'IT', slugMatchsTv: 'us-sassuolo', slugFootmercato: 'us-sassuolo', logo: '/logos/sassuolo.svg' },
  { id: 'lecce', nom: 'US Lecce', alias: 'Lecce', court: 'Lecce', championnat: 'serie-a', pays: 'IT', slugMatchsTv: 'us-lecce', slugFootmercato: 'us-lecce', logo: '/logos/lecce.svg' },
  { id: 'cagliari', nom: 'Cagliari Calcio', alias: 'Cagliari', court: 'Cagliari', championnat: 'serie-a', pays: 'IT', slugMatchsTv: 'cagliari-calcio', slugFootmercato: 'cagliari-calcio', logo: '/logos/cagliari.svg' },
  { id: 'parme', nom: 'Parma Calcio', alias: 'Parme', court: 'Parme', championnat: 'serie-a', pays: 'IT', slugMatchsTv: 'parma-calcio', slugFootmercato: 'parma-calcio', logo: '/logos/parme.svg' },
  { id: 'como', nom: 'Como 1907', alias: 'Como', court: 'Como', championnat: 'serie-a', pays: 'IT', slugMatchsTv: 'como-1907', slugFootmercato: 'como-1907', logo: '/logos/como.svg' },
  { id: 'monza', nom: 'AC Monza', alias: 'Monza', court: 'Monza', championnat: 'serie-a', pays: 'IT', slugMatchsTv: 'ac-monza', slugFootmercato: 'ac-monza', logo: '/logos/monza.svg' },
  { id: 'frosinone', nom: 'Frosinone Calcio', alias: 'Frosinone', court: 'Frosinone', championnat: 'serie-a', pays: 'IT', slugMatchsTv: 'frosinone-calcio', slugFootmercato: 'frosinone-calcio', logo: '/logos/frosinone.svg' },
  { id: 'venise', nom: 'Venezia FC', alias: 'Venise Venezia', court: 'Venise', championnat: 'serie-a', pays: 'IT', slugMatchsTv: 'venezia-fc', slugFootmercato: 'venezia-fc', logo: '/logos/venise.svg' },

  // Bundesliga
  { id: 'bayern', nom: 'Bayern Munich', alias: 'FCB', court: 'Bayern', championnat: 'bundesliga', pays: 'DE', slugMatchsTv: 'bayern-munich', slugFootmercato: 'bayern-munich', logo: '/logos/bayern.svg' },
  { id: 'dortmund', nom: 'Borussia Dortmund', alias: 'BVB', court: 'Dortmund', championnat: 'bundesliga', pays: 'DE', slugMatchsTv: 'borussia-dortmund', slugFootmercato: 'borussia-dortmund', logo: '/logos/dortmund.svg' },
  { id: 'leipzig', nom: 'RB Leipzig', alias: 'RasenBallsport Leipzig', court: 'Leipzig', championnat: 'bundesliga', pays: 'DE', slugMatchsTv: 'rb-leipzig', slugFootmercato: 'rb-leipzig', logo: '/logos/leipzig.svg' },
  { id: 'leverkusen', nom: 'Bayer Leverkusen', alias: 'Bayer 04', court: 'Leverkusen', championnat: 'bundesliga', pays: 'DE', slugMatchsTv: 'bayer-leverkusen', slugFootmercato: 'bayer-leverkusen', logo: '/logos/leverkusen.svg' },
  { id: 'francfort', nom: 'Eintracht Francfort', alias: 'Eintracht Frankfurt', court: 'Francfort', championnat: 'bundesliga', pays: 'DE', slugMatchsTv: 'eintracht-francfort', slugFootmercato: 'eintracht-francfort', logo: '/logos/francfort.svg' },
  { id: 'fribourg', nom: 'SC Fribourg', alias: 'Freiburg', court: 'Fribourg', championnat: 'bundesliga', pays: 'DE', slugMatchsTv: 'sc-fribourg', slugFootmercato: 'sc-fribourg', logo: '/logos/fribourg.svg' },
  { id: 'gladbach', nom: 'Borussia Monchengladbach', alias: 'Gladbach BMG', court: 'Gladbach', championnat: 'bundesliga', pays: 'DE', slugMatchsTv: 'borussia-monchengladbach', slugFootmercato: 'borussia-monchengladbach', logo: '/logos/gladbach.svg' },
  { id: 'stuttgart', nom: 'VfB Stuttgart', alias: 'Stuttgart', court: 'Stuttgart', championnat: 'bundesliga', pays: 'DE', slugMatchsTv: 'vfb-stuttgart', slugFootmercato: 'vfb-stuttgart', logo: '/logos/stuttgart.svg' },
  { id: 'mayence', nom: 'FSV Mayence 05', alias: 'Mainz 05', court: 'Mayence', championnat: 'bundesliga', pays: 'DE', slugMatchsTv: 'fsv-mayence-05', slugFootmercato: 'fsv-mayence-05', logo: '/logos/mayence.svg' },
  { id: 'hoffenheim', nom: 'TSG Hoffenheim', alias: '1899 Hoffenheim', court: 'Hoffenheim', championnat: 'bundesliga', pays: 'DE', slugMatchsTv: 'tsg-hoffenheim', slugFootmercato: 'tsg-hoffenheim', logo: '/logos/hoffenheim.svg' },
  { id: 'cologne', nom: '1 FC Cologne', alias: 'Koln Cologne', court: 'Cologne', championnat: 'bundesliga', pays: 'DE', slugMatchsTv: '1-fc-cologne', slugFootmercato: '1-fc-cologne', logo: '/logos/cologne.svg' },
  { id: 'werder-breme', nom: 'Werder Breme', alias: 'SV Werder Bremen', court: 'Breme', championnat: 'bundesliga', pays: 'DE', slugMatchsTv: 'werder-breme', slugFootmercato: 'werder-breme', logo: '/logos/werder-breme.svg' },
  { id: 'union-berlin', nom: '1 FC Union Berlin', alias: 'Union Berlin', court: 'Union Berlin', championnat: 'bundesliga', pays: 'DE', slugMatchsTv: '1-fc-union-berlin', slugFootmercato: '1-fc-union-berlin', logo: '/logos/union-berlin.svg' },
  { id: 'augsbourg', nom: 'FC Augsbourg', alias: 'Augsburg', court: 'Augsbourg', championnat: 'bundesliga', pays: 'DE', slugMatchsTv: 'fc-augsbourg', slugFootmercato: 'fc-augsbourg', logo: '/logos/augsbourg.svg' },
  { id: 'schalke', nom: 'FC Schalke 04', alias: 'Schalke', court: 'Schalke 04', championnat: 'bundesliga', pays: 'DE', slugMatchsTv: 'fc-schalke-04', slugFootmercato: 'fc-schalke-04', logo: '/logos/schalke.svg' },
  { id: 'hambourg', nom: 'Hamburger SV', alias: 'HSV Hambourg', court: 'Hambourg', championnat: 'bundesliga', pays: 'DE', slugMatchsTv: 'hamburger-sv', slugFootmercato: 'hamburger-sv', logo: '/logos/hambourg.svg' },
  { id: 'paderborn', nom: 'SC Paderborn 07', alias: 'Paderborn', court: 'Paderborn', championnat: 'bundesliga', pays: 'DE', slugMatchsTv: 'sc-paderborn-07', slugFootmercato: 'sc-paderborn-07', logo: '/logos/paderborn.svg' },
  { id: 'elversberg', nom: 'SV Elversberg', alias: 'Elversberg', court: 'Elversberg', championnat: 'bundesliga', pays: 'DE', slugMatchsTv: 'sv-elversberg', slugFootmercato: 'sv-elversberg', logo: '/logos/elversberg.svg' },

  // Premier League
  { id: 'arsenal', nom: 'Arsenal FC', alias: 'Gunners', court: 'Arsenal', championnat: 'premier-league', pays: 'EN', slugMatchsTv: 'arsenal-fc', slugFootmercato: 'arsenal-fc', logo: '/logos/arsenal.svg' },
  { id: 'aston-villa', nom: 'Aston Villa', alias: 'Villans', court: 'Aston Villa', championnat: 'premier-league', pays: 'EN', slugMatchsTv: 'aston-villa', slugFootmercato: 'aston-villa', logo: '/logos/aston-villa.svg' },
  { id: 'bournemouth', nom: 'AFC Bournemouth', alias: 'Cherries', court: 'Bournemouth', championnat: 'premier-league', pays: 'EN', slugMatchsTv: 'afc-bournemouth', slugFootmercato: 'afc-bournemouth', logo: '/logos/bournemouth.svg' },
  { id: 'brentford', nom: 'Brentford FC', alias: 'Bees', court: 'Brentford', championnat: 'premier-league', pays: 'EN', slugMatchsTv: 'brentford-fc', slugFootmercato: 'brentford-fc', logo: '/logos/brentford.svg' },
  { id: 'brighton', nom: 'Brighton Hove Albion', alias: 'Seagulls', court: 'Brighton', championnat: 'premier-league', pays: 'EN', slugMatchsTv: 'brighton-hove-albion', slugFootmercato: 'brighton-hove-albion', logo: '/logos/brighton.svg' },
  { id: 'chelsea', nom: 'Chelsea FC', alias: 'Blues', court: 'Chelsea', championnat: 'premier-league', pays: 'EN', slugMatchsTv: 'chelsea-fc', slugFootmercato: 'chelsea-fc', logo: '/logos/chelsea.svg' },
  { id: 'coventry', nom: 'Coventry City', alias: 'Sky Blues', court: 'Coventry', championnat: 'premier-league', pays: 'EN', slugMatchsTv: 'coventry-city', slugFootmercato: 'coventry-city', logo: '/logos/coventry.svg' },
  { id: 'crystal-palace', nom: 'Crystal Palace', alias: 'Eagles', court: 'Crystal Palace', championnat: 'premier-league', pays: 'EN', slugMatchsTv: 'crystal-palace', slugFootmercato: 'crystal-palace', logo: '/logos/crystal-palace.svg' },
  { id: 'everton', nom: 'Everton FC', alias: 'Toffees', court: 'Everton', championnat: 'premier-league', pays: 'EN', slugMatchsTv: 'everton-fc', slugFootmercato: 'everton-fc', logo: '/logos/everton.svg' },
  { id: 'fulham', nom: 'Fulham FC', alias: 'Cottagers', court: 'Fulham', championnat: 'premier-league', pays: 'EN', slugMatchsTv: 'fulham-fc', slugFootmercato: 'fulham-fc', logo: '/logos/fulham.svg' },
  { id: 'hull', nom: 'Hull City', alias: 'Tigers', court: 'Hull City', championnat: 'premier-league', pays: 'EN', slugMatchsTv: 'hull-city', slugFootmercato: 'hull-city', logo: '/logos/hull.svg' },
  { id: 'ipswich', nom: 'Ipswich Town', alias: 'Tractor Boys', court: 'Ipswich', championnat: 'premier-league', pays: 'EN', slugMatchsTv: 'ipswich-town', slugFootmercato: 'ipswich-town', logo: '/logos/ipswich.svg' },
  { id: 'leeds', nom: 'Leeds United', alias: 'Whites Peacocks', court: 'Leeds', championnat: 'premier-league', pays: 'EN', slugMatchsTv: 'leeds-united', slugFootmercato: 'leeds-united', logo: '/logos/leeds.svg' },
  { id: 'liverpool', nom: 'Liverpool FC', alias: 'Reds', court: 'Liverpool', championnat: 'premier-league', pays: 'EN', slugMatchsTv: 'liverpool-fc', slugFootmercato: 'liverpool-fc', logo: '/logos/liverpool.svg' },
  { id: 'man-city', nom: 'Manchester City', alias: 'City Citizens', court: 'Man City', championnat: 'premier-league', pays: 'EN', slugMatchsTv: 'manchester-city', slugFootmercato: 'manchester-city', logo: '/logos/man-city.svg' },
  { id: 'man-united', nom: 'Manchester United', alias: 'MU Red Devils', court: 'Man United', championnat: 'premier-league', pays: 'EN', slugMatchsTv: 'manchester-united', slugFootmercato: 'manchester-united', logo: '/logos/man-united.svg' },
  { id: 'newcastle', nom: 'Newcastle United', alias: 'Magpies', court: 'Newcastle', championnat: 'premier-league', pays: 'EN', slugMatchsTv: 'newcastle-united', slugFootmercato: 'newcastle-united', logo: '/logos/newcastle.svg' },
  { id: 'nottingham-forest', nom: 'Nottingham Forest', alias: 'Forest', court: 'Nottingham Forest', championnat: 'premier-league', pays: 'EN', slugMatchsTv: 'nottingham-forest', slugFootmercato: 'nottingham-forest', logo: '/logos/nottingham-forest.svg' },
  { id: 'sunderland', nom: 'Sunderland AFC', alias: 'Black Cats', court: 'Sunderland', championnat: 'premier-league', pays: 'EN', slugMatchsTv: 'sunderland-afc', slugFootmercato: 'sunderland-afc', logo: '/logos/sunderland.svg' },
  { id: 'tottenham', nom: 'Tottenham Hotspur', alias: 'Spurs', court: 'Tottenham', championnat: 'premier-league', pays: 'EN', slugMatchsTv: 'tottenham-hotspur', slugFootmercato: 'tottenham-hotspur', logo: '/logos/tottenham.svg' }
]

const NATIONS = [
  { id: 'fr', nom: 'France', alias: 'Bleus', code: 'FR' },
  { id: 'pt', nom: 'Portugal', code: 'PT' },
  { id: 'es', nom: 'Espagne', alias: 'Roja', code: 'ES' },
  { id: 'ar', nom: 'Argentine', code: 'AR' },
  { id: 'br', nom: 'Bresil', alias: 'Selecao', code: 'BR' },
  { id: 'ma', nom: 'Maroc', alias: 'Lions de Atlas', code: 'MA' },
  { id: 'dz', nom: 'Algerie', alias: 'Fennecs', code: 'DZ' },
  { id: 'it', nom: 'Italie', alias: 'Squadra', code: 'IT' },
  { id: 'de', nom: 'Allemagne', alias: 'Mannschaft', code: 'DE' },
  { id: 'en', nom: 'Angleterre', code: 'EN' }
]

const CHAINES = [
  { id: 'ligue1plus', nom: 'Ligue 1+' },
  { id: 'canal', nom: 'Canal+' },
  { id: 'dazn', nom: 'DAZN' },
  { id: 'bein', nom: 'beIN Sports' },
  { id: 'disney', nom: 'Disney+' },
  { id: 'lequipe', nom: "L'Equipe" },
  { id: 'rmc', nom: 'RMC Sport' }
]

async function amorcer() {
  const base = `tenants/${TENANT_ID}/config`
  await db.doc(`${base}/clubs`).set({ liste: CLUBS, majLe: new Date() })
  await db.doc(`${base}/nations`).set({ liste: NATIONS, majLe: new Date() })
  await db.doc(`${base}/chaines`).set({ liste: CHAINES, majLe: new Date() })
  console.log(`Catalogue ecrit dans ${base} : ${CLUBS.length} clubs, ${NATIONS.length} nations, ${CHAINES.length} chaines.`)
}

amorcer().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1) })
