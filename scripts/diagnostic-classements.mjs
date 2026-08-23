/**
 * Diagnostic classements : pourquoi la Premier League (et éventuellement
 * d'autres compétitions) affiche des points d'une saison passée alors que
 * la source Maxifoot vérifiée manuellement pointe déjà vers la saison
 * 2026-2027. Hypothèse : `collecteClassements` échoue silencieusement pour
 * cette compétition (erreur attrapée dans le `catch` de collecterClassements,
 * juste ajoutée à `incidents`) et ne réécrit donc jamais le document
 * `standings/{id}` existant, qui reste bloqué sur son dernier succès.
 *
 * Lancement : node scripts/diagnostic-classements.mjs
 * Requiert GOOGLE_APPLICATION_CREDENTIALS pointant vers la clé de service
 * (même schéma que scripts/seed-config.mjs et scripts/purge-actus-corrompues.mjs).
 */
import { initializeApp, applicationDefault } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'

const TENANT_ID = process.env.TENANT_ID || 'ton-paris'

initializeApp({ credential: applicationDefault() })
const db = getFirestore()

function formatDate(timestamp) {
  return timestamp ? timestamp.toDate().toLocaleString('fr-FR') : '(jamais)'
}

async function diagnostiquer() {
  console.log(`--- Journal de collecte (tenants/${TENANT_ID}/scrapeLogs/classements) ---`)
  const journal = await db.doc(`tenants/${TENANT_ID}/scrapeLogs/classements`).get()

  if (!journal.exists) {
    console.log("Aucun journal trouvé : collecteClassements n'a peut-être jamais tourné avec succès depuis le passage à Maxifoot.")
  } else {
    const d = journal.data()
    console.log(`Dernière tentative : ${formatDate(d.derniereTentative)}`)
    console.log(`Dernier succès      : ${formatDate(d.dernierSucces)}`)
    console.log(`En échec            : ${d.enEchec ? 'OUI' : 'non'}`)
    console.log(`Compétitions OK au dernier passage : ${d.dernierNombre ?? '?'}`)
    if (d.incidents?.length) {
      console.log('Incidents (compétition → erreur) :')
      for (const inc of d.incidents) console.log(`  - ${inc.competition} : ${inc.message}`)
    } else {
      console.log('Aucun incident enregistré au dernier passage.')
    }
  }

  console.log(`\n--- Documents standings (tenants/${TENANT_ID}/standings) ---`)
  const standings = await db.collection(`tenants/${TENANT_ID}/standings`).get()

  if (standings.empty) {
    console.log('Aucun document standings en base.')
    return
  }

  for (const doc of standings.docs) {
    const d = doc.data()
    const premiereLigne = d.groupes?.[0]?.lignes?.[0]
    console.log(
      `${doc.id} — maj le ${formatDate(d.majLe)} — saisonDemarree=${d.saisonDemarree} — ` +
      `${d.groupes?.reduce((n, g) => n + (g.lignes?.length || 0), 0) || 0} ligne(s) — ` +
      `1re ligne: ${premiereLigne ? `${premiereLigne.equipe} ${premiereLigne.points}pts` : '(vide)'}`
    )
  }
}

diagnostiquer().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1) })
