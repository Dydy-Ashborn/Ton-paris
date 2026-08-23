/**
 * Amorce les regles de classement des actus (categorie/importance).
 * La source des actus elle-meme (news.maxifoot.fr) n'est plus configurable
 * en base : les flux RSS ont ete retires (source unique desormais, voir
 * collecteMaxifootNews.js). config/fluxActus n'est donc plus utilise.
 * Lancement : node scripts/seed-actus.mjs
 */
import { initializeApp, applicationDefault } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'

const TENANT_ID = process.env.TENANT_ID || 'ton-paris'

initializeApp({ credential: applicationDefault() })
const db = getFirestore()

const REGLES = {
  categories: [
    { libelle: 'Groupe', importante: true, motsCles: ['groupe', 'convoques', 'onze de depart', 'compo', 'composition', 'titulaire'] },
    { libelle: 'Infirmerie', importante: true, motsCles: ['blessure', 'blesse', 'forfait', 'absent', 'indisponible', 'operation', 'rechute'] },
    { libelle: 'Mercato', importante: true, motsCles: ['transfert', 'mercato', 'signe', 'signature', 'recrue', 'prolonge', 'prolongation', 'offre', 'depart', 'arrivee'] },
    { libelle: 'Sanction', importante: true, motsCles: ['suspendu', 'suspension', 'carton rouge', 'expulse', 'commission de discipline'] },
    { libelle: 'Resultat', importante: false, motsCles: ['victoire', 'defaite', 'match nul', 'resume', 'reaction', 'buts'] },
    { libelle: 'Avant-match', importante: false, motsCles: ['avant-match', 'conference de presse', 'a suivre'] },
    { libelle: 'Club', importante: false, motsCles: ['stade', 'billetterie', 'maillot', 'partenaire', 'campus', 'academie'] }
  ],
  majLe: new Date()
}

async function amorcer() {
  const base = `tenants/${TENANT_ID}/config`
  await db.doc(`${base}/actualites`).set(REGLES)
  console.log(`Regles de classement configurees : ${REGLES.categories.length} categories.`)
}

amorcer().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1) })
