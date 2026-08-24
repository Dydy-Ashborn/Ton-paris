// ==UserScript==
// @name         Ton Paris — Export effectif PSG.fr
// @namespace    ton-paris
// @version      1.0.0
// @description  Récupère les deux photos (grille + fiche) et les infos bio de chaque joueur sur psg.fr, exportables en JSON + fichiers image pour scripts/maj-photos-effectif.mjs
// @author       Ton Paris
// @match        https://www.psg.fr/football-masculin/effectif*
// @match        https://www.psg.fr/joueurs/*
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_download
// @connect      media.psg.fr
// @run-at       document-idle
// ==/UserScript==

/**
 * ⚠️ Écrit sans accès direct au HTML réel de psg.fr (page en React/JS,
 * inaccessible depuis l'environnement où ce script a été rédigé — voir la
 * conversation). Les sélecteurs ci-dessous sont volontairement défensifs
 * (plusieurs stratégies de repli, jamais une seule classe CSS devinée) —
 * même caveat que les autres scrapers du projet (voir INSTALLATION.md,
 * "n'ont pas pu être testés en conditions réelles"). Le panneau affiche un
 * journal en direct : si une info manque pour un joueur, ça se voit tout de
 * suite plutôt que de produire un export silencieusement incomplet.
 *
 * UTILISATION
 * 1. Ouvre https://www.psg.fr/football-masculin/effectif — un panneau
 *    apparaît en bas à droite. Clique "1. Scanner la liste" : repère tous
 *    les joueurs (nom déduit du lien /joueurs/{slug}, numéro et poste
 *    extraits du texte de la carte, photo de la grille si trouvée).
 * 2. Clique "2. Parcourir les fiches" : navigue automatiquement, une fiche
 *    à la fois, récupère la photo hero + les infos bio (nom complet, date
 *    et lieu de naissance, profil, pied, nationalité), revient à la liste,
 *    passe au joueur suivant. Ne quitte pas l'onglet pendant ce temps.
 * 3. Une fois la queue épuisée (le panneau l'indique), clique
 *    "3. Exporter" : télécharge un fichier JSON (à mettre dans
 *    scripts/effectif-psg-export.json) + une image par joueur et par type
 *    (liste/hero, à mettre dans public/joueurs/psg/).
 */
(function () {
  'use strict'

  const CLE_STOCKAGE = 'psgEffectifScrape_v1'
  const POSTES_CONNUS = ['Gardien de but', 'Défenseur', 'Milieu de terrain', 'Attaquant']
  const LABELS_BIO = ['Nom complet', 'Date de naissance', 'Lieu de naissance', 'Profil', 'Pied', 'Nationalité', 'Numéro de maillot']
  const DELAI_NAVIGATION_MS = 1500

  function lireEtat() {
    const brut = GM_getValue(CLE_STOCKAGE, null)
    return brut ? JSON.parse(brut) : { joueurs: {}, queue: [], enCoursIndex: -1 }
  }

  function ecrireEtat(etat) {
    GM_setValue(CLE_STOCKAGE, JSON.stringify(etat))
  }

  function slugDepuisHref(href) {
    const m = href.match(/\/joueurs\/([a-z0-9-]+)\/?$/i)
    return m ? m[1] : null
  }

  /** "lucas-beraldo" → "Lucas Beraldo" — nom garanti disponible même si le texte de la carte est mal parsé (voir NOTE_FIABILITE en tête de fichier). */
  function nomDepuisSlug(slug) {
    return slug.split('-').map((mot) => mot.charAt(0).toUpperCase() + mot.slice(1)).join(' ')
  }

  /** Plus grande image plausible (pas une icône/logo) dans un conteneur donné. */
  function meilleureImage(conteneur) {
    const images = Array.from(conteneur.querySelectorAll('img'))
      .map((img) => ({ img, url: img.currentSrc || img.src || img.dataset?.src || img.dataset?.srcset?.split(' ')[0] }))
      .filter((x) => x.url && x.url.includes('media.psg.fr'))
    if (images.length === 0) return null
    // Trie par largeur naturelle décroissante quand connue — évite de
    // remonter une icône sponsor si elle apparaît avant la vraie photo dans le DOM.
    images.sort((a, b) => (b.img.naturalWidth || 0) - (a.img.naturalWidth || 0))
    return images[0].url
  }

  function extraireNumeroEtPoste(texte) {
    const numero = (texte.match(/(\d{1,3})\s*$/) || [])[1] || null
    const poste = POSTES_CONNUS.find((p) => texte.includes(p)) || null
    return { numero: numero ? Number(numero) : null, poste }
  }

  // ---------- Page liste ----------

  function scannerListe(journal) {
    const liens = Array.from(document.querySelectorAll('a[href*="/joueurs/"]'))
      .filter((a) => slugDepuisHref(a.getAttribute('href') || ''))

    const parSlug = new Map()
    for (const a of liens) {
      const slug = slugDepuisHref(a.getAttribute('href'))
      if (!slug || parSlug.has(slug)) continue // un joueur peut apparaître dans plusieurs <a> (image + nom) selon le markup
      parSlug.set(slug, a)
    }

    const etat = lireEtat()
    let nouveaux = 0

    for (const [slug, a] of parSlug) {
      const { numero, poste } = extraireNumeroEtPoste(a.textContent || '')
      const photoListe = meilleureImage(a) || meilleureImage(a.closest('li, article, div') || a)

      if (!etat.joueurs[slug]) nouveaux++
      etat.joueurs[slug] = {
        ...etat.joueurs[slug],
        slug,
        nom: nomDepuisSlug(slug),
        numeroMaillot: numero ?? etat.joueurs[slug]?.numeroMaillot ?? null,
        poste: poste || etat.joueurs[slug]?.poste || null,
        photoListeUrl: photoListe || etat.joueurs[slug]?.photoListeUrl || null,
        profilUrl: `https://www.psg.fr/joueurs/${slug}`
      }

      if (!photoListe) journal(`⚠ ${slug} : pas de photo de grille trouvée (repli sur la fiche possible plus tard).`)
    }

    etat.queue = Object.keys(etat.joueurs).filter((slug) => !etat.joueurs[slug].ficheScannee)
    ecrireEtat(etat)
    journal(`✓ Liste scannée : ${parSlug.size} joueur(s) sur la page, ${nouveaux} nouveau(x). ${etat.queue.length} fiche(s) restant à visiter.`)
    return etat
  }

  // ---------- Page fiche joueur ----------

  function trouverValeurLabel(label) {
    const tousLesNoeuds = document.querySelectorAll('body *')
    for (const el of tousLesNoeuds) {
      if (el.children.length > 0) continue // on ne veut que des éléments "feuilles"
      if ((el.textContent || '').trim() !== label) continue

      // Stratégie 1 : élément frère suivant
      if (el.nextElementSibling && el.nextElementSibling.textContent.trim()) {
        return el.nextElementSibling.textContent.trim()
      }
      // Stratégie 2 : frère suivant du PARENT (label et valeur dans des blocs voisins)
      const parent = el.parentElement
      if (parent?.nextElementSibling && parent.nextElementSibling.textContent.trim()) {
        return parent.nextElementSibling.textContent.trim()
      }
      // Stratégie 3 : second enfant du parent (label = 1er enfant, valeur = 2e)
      if (parent && parent.children.length >= 2) {
        const deuxieme = parent.children[1]
        if (deuxieme !== el && deuxieme.textContent.trim()) return deuxieme.textContent.trim()
      }
    }
    return null
  }

  function scannerFiche(journal) {
    const slug = slugDepuisHref(location.pathname)
    if (!slug) return null

    const heroCandidat = document.querySelector('img[src*="-Motion-"], img[src*="Motion"]')
    const photoHero = (heroCandidat && (heroCandidat.currentSrc || heroCandidat.src)) || meilleureImage(document.body)

    const bio = {}
    for (const label of LABELS_BIO) {
      const valeur = trouverValeurLabel(label)
      if (valeur) bio[label] = valeur
      else journal(`⚠ ${slug} : label "${label}" introuvable sur la fiche.`)
    }

    const profil = bio['Profil'] || ''
    const tailleMatch = profil.match(/(\d+)\s*cm/)
    const poidsMatch = profil.match(/(\d+)\s*kg/)

    const etat = lireEtat()
    etat.joueurs[slug] = {
      ...etat.joueurs[slug],
      slug,
      photoHeroUrl: photoHero || etat.joueurs[slug]?.photoHeroUrl || null,
      nomComplet: bio['Nom complet'] || etat.joueurs[slug]?.nomComplet || null,
      dateNaissance: bio['Date de naissance'] || etat.joueurs[slug]?.dateNaissance || null,
      lieuNaissance: bio['Lieu de naissance'] || etat.joueurs[slug]?.lieuNaissance || null,
      taille: tailleMatch ? `${tailleMatch[1]} cm` : etat.joueurs[slug]?.taille || null,
      poids: poidsMatch ? `${poidsMatch[1]} kg` : etat.joueurs[slug]?.poids || null,
      pied: bio['Pied'] || etat.joueurs[slug]?.pied || null,
      nationalite: bio['Nationalité'] || etat.joueurs[slug]?.nationalite || null,
      numeroMaillot: bio['Numéro de maillot'] ? Number(bio['Numéro de maillot']) : etat.joueurs[slug]?.numeroMaillot ?? null,
      ficheScannee: true
    }
    etat.queue = etat.queue.filter((s) => s !== slug)
    ecrireEtat(etat)
    journal(`✓ Fiche ${slug} scannée${photoHero ? '' : ' (⚠ pas de photo hero trouvée)'}.`)
    return etat
  }

  // ---------- Parcours automatique des fiches ----------

  function demarrerParcours(journal) {
    const etat = lireEtat()
    if (etat.queue.length === 0) {
      journal('Rien à parcourir — clique d\'abord "1. Scanner la liste", ou tout est déjà scanné.')
      return
    }
    etat.parcoursActif = true
    ecrireEtat(etat)
    journal(`Parcours démarré : ${etat.queue.length} fiche(s) à visiter, ne quitte pas cet onglet.`)
    location.href = `https://www.psg.fr/joueurs/${etat.queue[0]}`
  }

  function poursuivreParcoursDepuisFiche(journal) {
    const etat = scannerFiche(journal)
    if (!etat || !etat.parcoursActif) return

    if (etat.queue.length === 0) {
      etat.parcoursActif = false
      ecrireEtat(etat)
      journal('✓ Parcours terminé — toutes les fiches sont scannées. Clique "3. Exporter".')
      return
    }

    setTimeout(() => { location.href = `https://www.psg.fr/joueurs/${etat.queue[0]}` }, DELAI_NAVIGATION_MS)
  }

  // ---------- Export ----------

  function telechargerTexte(nomFichier, contenu) {
    const blob = new Blob([contenu], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = nomFichier
    document.body.appendChild(a)
    a.click()
    a.remove()
    setTimeout(() => URL.revokeObjectURL(url), 5000)
  }

  function extensionDepuisUrl(url) {
    const m = url.match(/\.(jpg|jpeg|png|webp|avif)(?:$|[?#])/i)
    return m ? m[1].toLowerCase() : 'jpg'
  }

  async function exporter(journal) {
    const etat = lireEtat()
    const slugs = Object.keys(etat.joueurs)
    if (slugs.length === 0) {
      journal('Rien à exporter — scanne la liste (et idéalement les fiches) avant.')
      return
    }

    const manifeste = { clubId: 'psg', exporteLe: new Date().toISOString(), joueurs: {} }
    let filesADemander = []

    for (const slug of slugs) {
      const j = etat.joueurs[slug]
      const extListe = j.photoListeUrl ? extensionDepuisUrl(j.photoListeUrl) : null
      const extHero = j.photoHeroUrl ? extensionDepuisUrl(j.photoHeroUrl) : null
      const photoListeFichier = extListe ? `${slug}-liste.${extListe}` : null
      const photoHeroFichier = extHero ? `${slug}-hero.${extHero}` : null

      manifeste.joueurs[slug] = {
        nom: j.nom,
        nomComplet: j.nomComplet,
        numeroMaillot: j.numeroMaillot,
        poste: j.poste,
        dateNaissance: j.dateNaissance,
        lieuNaissance: j.lieuNaissance,
        taille: j.taille,
        poids: j.poids,
        pied: j.pied,
        nationalite: j.nationalite,
        photoListeFichier,
        photoHeroFichier
      }

      if (j.photoListeUrl && photoListeFichier) filesADemander.push({ url: j.photoListeUrl, name: photoListeFichier })
      if (j.photoHeroUrl && photoHeroFichier) filesADemander.push({ url: j.photoHeroUrl, name: photoHeroFichier })
    }

    telechargerTexte('effectif-psg-export.json', JSON.stringify(manifeste, null, 2))
    journal(`✓ JSON exporté (${slugs.length} joueur(s)). Téléchargement de ${filesADemander.length} image(s)…`)

    // Téléchargements espacés : évite que le navigateur bloque une rafale
    // de dizaines de téléchargements simultanés (comportement par défaut
    // de Chrome sur beaucoup de fichiers d'un coup).
    for (let i = 0; i < filesADemander.length; i++) {
      const f = filesADemander[i]
      setTimeout(() => GM_download({ url: f.url, name: f.name, saveAs: false }), i * 400)
    }
    journal('Une fois terminé : dépose le JSON dans scripts/effectif-psg-export.json et les images dans public/joueurs/psg/, puis lance node scripts/maj-photos-effectif.mjs.')
  }

  // ---------- Panneau flottant ----------

  function creerPanneau() {
    const panneau = document.createElement('div')
    panneau.style.cssText = 'position:fixed;bottom:16px;right:16px;z-index:999999;background:#0A1B39;color:#F3F6FA;font:13px/1.4 system-ui,sans-serif;border-radius:8px;padding:12px;width:340px;box-shadow:0 8px 24px rgba(0,0,0,.4)'
    panneau.innerHTML = `
      <strong style="display:block;margin-bottom:8px">Ton Paris — Export effectif PSG.fr</strong>
      <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px">
        <button id="tp-scan-liste" style="flex:1;padding:6px;cursor:pointer">1. Scanner la liste</button>
        <button id="tp-parcourir" style="flex:1;padding:6px;cursor:pointer">2. Parcourir les fiches</button>
        <button id="tp-exporter" style="flex:1;padding:6px;cursor:pointer">3. Exporter</button>
      </div>
      <div id="tp-journal" style="max-height:180px;overflow:auto;font-size:11px;background:rgba(255,255,255,.05);padding:6px;border-radius:4px"></div>
    `
    document.body.appendChild(panneau)

    const zoneJournal = panneau.querySelector('#tp-journal')
    const journal = (msg) => {
      const ligne = document.createElement('div')
      ligne.textContent = msg
      zoneJournal.appendChild(ligne)
      zoneJournal.scrollTop = zoneJournal.scrollHeight
      console.log('[Ton Paris export]', msg)
    }

    panneau.querySelector('#tp-scan-liste').onclick = () => scannerListe(journal)
    panneau.querySelector('#tp-parcourir').onclick = () => demarrerParcours(journal)
    panneau.querySelector('#tp-exporter').onclick = () => exporter(journal)

    return journal
  }

  const journal = creerPanneau()

  if (location.pathname.startsWith('/joueurs/')) {
    const etat = lireEtat()
    if (etat.parcoursActif) {
      // Laisse la page finir de s'hydrater (contenu chargé en JS) avant de scanner.
      setTimeout(() => poursuivreParcoursDepuisFiche(journal), 1200)
    }
  }
})()
