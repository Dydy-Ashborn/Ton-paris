/**
 * Callable TEMPORAIRE de diagnostic — même esprit que diagnosticEffectif.js
 * (fetch réel depuis l'infra Cloud Functions, ne rien écrire en base),
 * mais pour la classe de bug rencontrée avec "Rennes-PSG" resté sans score :
 * un rapprochement de nom (memeEquipe, voir lib/normalize.js) qui échoue
 * silencieusement entre tvBroadcasts (noms officiels, ex. "Stade Rennais
 * FC") et maxifoot-live.com (noms courts, ex. "Rennes").
 *
 * Plutôt que de deviner à l'œil quel club casse le rapprochement, ce
 * callable liste CÔTE À CÔTE les diffusions du jour visé et les matchs
 * scrapés (live + finis) avec, pour chacun, s'il a trouvé une correspondance
 * — pour repérer d'un coup d'œil un futur cas comme "rennais"/"Rennes" sans
 * avoir à relire tout le code.
 */
import { onCall, HttpsError } from 'firebase-functions/v2/https'
import { db, chemins } from './lib/admin.js'
import { memeEquipe } from './lib/normalize.js'
import { scraperMatchsLive, scraperMatchsFinisDuJour, scraperMatchsFinisDate } from './sources/maxifootLive.js'
import { cleJourLocal } from './collecteScoresDirect.js'

const REGION = 'europe-west9'

function limitesJourLocal(reference) {
  const minuit = new Date(reference)
  minuit.setHours(0, 0, 0, 0)
  return {
    debut: new Date(minuit.getTime() - 6 * 60 * 60 * 1000),
    fin: new Date(minuit.getTime() + 30 * 60 * 60 * 1000)
  }
}

export const diagnosticResultats = onCall(
  { region: REGION, memory: '256MiB', timeoutSeconds: 60 },
  async (requete) => {
    if (!requete.auth) throw new HttpsError('unauthenticated', 'Connecte-toi.')

    try {
      // dateISO optionnel (YYYY-MM-DD) : par défaut aujourd'hui, comme
      // collecteResultatsSoir. Passer la date d'hier pour diagnostiquer ce
      // que collecteResultatsMatin aurait dû trouver ce matin-là.
      const dateISO = requete.data?.dateISO || cleJourLocal(new Date())
      const reference = new Date(`${dateISO}T12:00:00`)
      const aujourdhui = dateISO === cleJourLocal(new Date())

      const [matchsLive, matchsFinis] = await Promise.all([
        aujourdhui ? scraperMatchsLive() : Promise.resolve([]),
        aujourdhui ? scraperMatchsFinisDuJour() : scraperMatchsFinisDate(dateISO)
      ])

      const { debut, fin } = limitesJourLocal(reference)
      const diffusions = await db
        .collection(chemins.diffusions())
        .where('debut', '>=', debut)
        .where('debut', '<=', fin)
        .get()

      const tousLesMatchsScrapes = [...matchsLive, ...matchsFinis]

      const rapprochements = diffusions.docs.map((doc) => {
        const d = doc.data()
        const trouve = tousLesMatchsScrapes.find(
          (m) => memeEquipe(m.domicile, d.domicile) && memeEquipe(m.exterieur, d.exterieur)
        )

        return {
          diffusionId: doc.id,
          domicile: d.domicile,
          exterieur: d.exterieur,
          debutISO: d.debutISO || null,
          termineEnBase: Boolean(d.termine),
          scoreEnBase: d.termine ? `${d.scoreDomicile ?? '?'}-${d.scoreExterieur ?? '?'}` : null,
          correspondanceTrouvee: Boolean(trouve),
          matchScrapeCorrespondant: trouve
            ? { domicile: trouve.domicile, exterieur: trouve.exterieur, termine: trouve.termine, score: `${trouve.scoreDomicile ?? '?'}-${trouve.scoreExterieur ?? '?'}` }
            : null
        }
      })

      return {
        ok: true,
        dateISO,
        diffusionsDuJour: diffusions.docs.length,
        matchsScrapesTrouves: tousLesMatchsScrapes.length,
        // Le vrai signal à regarder : une diffusion SANS correspondance alors
        // qu'un match scrapé du même jour semble bien être le même (à l'œil)
        // — c'est très probablement un rapprochement de nom à corriger dans
        // SYNONYMES_MOT (lib/normalize.js), comme "rennais" → "rennes".
        sansCorrespondance: rapprochements.filter((r) => !r.correspondanceTrouvee),
        rapprochements,
        matchsScrapesBruts: tousLesMatchsScrapes.map((m) => ({ domicile: m.domicile, exterieur: m.exterieur, termine: m.termine }))
      }
    } catch (e) {
      return { ok: false, erreur: e.message }
    }
  }
)
