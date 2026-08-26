// ==UserScript==
// @name         Ton Paris — Export cartes FUTBIN PSG
// @namespace    ton-paris
// @version      1.0
// @description  Télécharge le HTML déjà rendu (après exécution du JS) d'une page FUTBIN, pour import manuel dans Ton Paris via scripts/importer-cartes-fut.mjs — solution "pour commencer" tant que le scraping serveur direct n'est pas confirmé (voir functions/sources/futbinCartesPsg.js).
// @author       Ton Paris
// @match        https://www.futbin.com/26/clubs/*
// @match        https://www.futbin.com/26/players*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

;(function () {
  'use strict'

  // Sélecteur confirmé sur un export FUTBIN réel (183 cartes PSG extraites
  // avec succès côté Ton Paris) — voir extraireCartes dans
  // functions/sources/futbinCartesPsg.js, la MÊME fonction lit le fichier
  // téléchargé ici. Si FUTBIN change son balisage, ce compteur tombera à 0
  // et le sera aussi côté extraction : signal fiable dans les deux cas.
  const SELECTEUR_CARTE = '.playercard-26'

  function compterCartes() {
    return document.querySelectorAll(SELECTEUR_CARTE).length
  }

  function nomFichier() {
    const date = new Date().toISOString().slice(0, 10)
    const slugPage = location.pathname.replace(/[^a-z0-9]+/gi, '-').replace(/^-+|-+$/g, '')
    return `futbin-${slugPage}-${date}.html`
  }

  function telechargerHtml() {
    const html = document.documentElement.outerHTML
    const blob = new Blob([html], { type: 'text/html' })
    const url = URL.createObjectURL(blob)
    const lien = document.createElement('a')
    lien.href = url
    lien.download = nomFichier()
    document.body.appendChild(lien)
    lien.click()
    lien.remove()
    URL.revokeObjectURL(url)
  }

  // FUTBIN charge probablement ses cartes en plusieurs vagues (lazy-load /
  // pagination au scroll) — un simple scroll jusqu'en bas quelques fois de
  // suite avant de proposer le téléchargement, plutôt qu'un scraping figé
  // au premier rendu qui manquerait les cartes chargées plus tard.
  async function chargerTouteLaPage(surProgres) {
    let dernierCompte = -1
    for (let tentative = 0; tentative < 20; tentative++) {
      window.scrollTo(0, document.body.scrollHeight)
      await new Promise((resolve) => setTimeout(resolve, 400))
      const compte = compterCartes()
      surProgres(compte)
      if (compte === dernierCompte) break
      dernierCompte = compte
    }
    window.scrollTo(0, 0)
  }

  function construireBarre() {
    const barre = document.createElement('div')
    barre.style.cssText = [
      'position:fixed', 'bottom:16px', 'right:16px', 'z-index:999999',
      'background:#050F24', 'color:#F3F6FA', 'font:13px/1.4 sans-serif',
      'border:1px solid rgba(125,154,184,0.4)', 'border-radius:10px',
      'padding:12px 14px', 'box-shadow:0 6px 20px rgba(0,0,0,0.4)',
      'display:flex', 'flex-direction:column', 'gap:8px', 'width:220px'
    ].join(';')

    const titre = document.createElement('strong')
    titre.textContent = 'Ton Paris — Export FUTBIN'
    barre.appendChild(titre)

    const statut = document.createElement('span')
    statut.textContent = `${compterCartes()} carte(s) détectée(s)`
    barre.appendChild(statut)

    const boutonCharger = document.createElement('button')
    boutonCharger.textContent = 'Charger tout (scroll auto)'
    boutonCharger.style.cssText = 'cursor:pointer;padding:6px 8px;border-radius:6px;border:1px solid rgba(125,154,184,0.4);background:#0b1c40;color:#F3F6FA'
    boutonCharger.onclick = async () => {
      boutonCharger.disabled = true
      boutonCharger.textContent = 'Chargement…'
      await chargerTouteLaPage((compte) => { statut.textContent = `${compte} carte(s) détectée(s)` })
      boutonCharger.disabled = false
      boutonCharger.textContent = 'Charger tout (scroll auto)'
    }
    barre.appendChild(boutonCharger)

    const boutonTelecharger = document.createElement('button')
    boutonTelecharger.textContent = '⬇️ Télécharger le HTML'
    boutonTelecharger.style.cssText = 'cursor:pointer;padding:6px 8px;border-radius:6px;border:none;background:#E4022B;color:#F3F6FA;font-weight:bold'
    boutonTelecharger.onclick = telechargerHtml
    barre.appendChild(boutonTelecharger)

    const aide = document.createElement('span')
    aide.style.cssText = 'font-size:11px;opacity:0.7'
    aide.textContent = 'Puis : node scripts/importer-cartes-fut.mjs <fichier>'
    barre.appendChild(aide)

    document.body.appendChild(barre)

    // Recompte périodique — pas besoin d'un MutationObserver précis ici,
    // c'est juste un indicateur visuel pour savoir quand cliquer "Charger tout".
    setInterval(() => {
      if (!boutonCharger.disabled) statut.textContent = `${compterCartes()} carte(s) détectée(s)`
    }, 1500)
  }

  construireBarre()
})()
