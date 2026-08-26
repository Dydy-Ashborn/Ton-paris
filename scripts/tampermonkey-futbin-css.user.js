// ==UserScript==
// @name         Ton Paris — Export CSS calculé des cartes FUTBIN
// @namespace    ton-paris
// @version      1.0
// @description  Exporte en JSON les positions/tailles/styles RÉELS (calculés par le navigateur, pas devinés depuis une capture d'écran) des éléments d'une carte FUTBIN — sert à caler précisément components/CarteFut.css (entête, bloc nom/stats/badges, dégradé éventuel...) sur le vrai rendu FUTBIN plutôt qu'à l'œil.
// @author       Ton Paris
// @match        https://www.futbin.com/26/clubs/*
// @match        https://www.futbin.com/26/players*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

;(function () {
  'use strict'

  // Même sélecteur que scripts/tampermonkey-futbin-psg.user.js (confirmé
  // sur un export réel côté Ton Paris) — la carte racine dont on va mesurer
  // tous les descendants.
  const SELECTEUR_CARTE = '.playercard-26'

  // Propriétés calculées utiles pour reproduire le rendu en CSS "maison"
  // (voir components/CarteFut.css) — position/taille sont mesurées via
  // getBoundingClientRect (converties en % de la carte, pas gardées en px
  // bruts qui ne veulent rien dire hors contexte), le reste vient de
  // getComputedStyle.
  const PROPRIETES_STYLE = [
    'position', 'zIndex', 'display', 'flexDirection', 'justifyContent', 'alignItems', 'gap',
    'fontFamily', 'fontSize', 'fontWeight', 'fontStyle', 'textTransform', 'letterSpacing', 'lineHeight',
    'color', 'textAlign', 'textShadow', 'whiteSpace', 'textOverflow',
    'background', 'backgroundImage', 'backgroundColor', 'backgroundPosition', 'backgroundSize',
    'border', 'borderRadius', 'boxShadow', 'opacity', 'objectFit', 'objectPosition', 'filter',
    'mixBlendMode', 'padding', 'margin', 'transform', 'overflow'
  ]

  function compterCartes() {
    return document.querySelectorAll(SELECTEUR_CARTE).length
  }

  /** Rectangle d'un élément en % du rectangle de la carte (base commune pour
   * pouvoir réutiliser tel quel top/left/width/height en CSS responsive,
   * comme le reste de CarteFut.css). */
  function rectEnPourcent(rectEl, rectCarte) {
    return {
      topPct: +(((rectEl.top - rectCarte.top) / rectCarte.height) * 100).toFixed(2),
      leftPct: +(((rectEl.left - rectCarte.left) / rectCarte.width) * 100).toFixed(2),
      rightPct: +(((rectCarte.right - rectEl.right) / rectCarte.width) * 100).toFixed(2),
      bottomPct: +(((rectCarte.bottom - rectEl.bottom) / rectCarte.height) * 100).toFixed(2),
      widthPct: +((rectEl.width / rectCarte.width) * 100).toFixed(2),
      heightPct: +((rectEl.height / rectCarte.height) * 100).toFixed(2)
    }
  }

  function styleUtile(el, rectCarte) {
    const cs = getComputedStyle(el)
    const style = {}
    for (const prop of PROPRIETES_STYLE) {
      const val = cs[prop]
      if (val && val !== 'none' && val !== 'normal' && val !== 'auto' && val !== '0px') style[prop] = val
    }
    // font-size en % de la LARGEUR de carte (équivalent d'une unité cqw,
    // déjà utilisée ailleurs dans CarteFut.css) — directement réutilisable
    // dans un clamp()/cqw sans reconversion.
    const tailleFonte = parseFloat(cs.fontSize)
    if (tailleFonte) style.fontSizeCqwApprox = +((tailleFonte / rectCarte.width) * 100).toFixed(2)
    return style
  }

  /** Un élément est "digne d'intérêt" s'il porte une classe playercard-26-*
   * (balisage connu, voir functions/sources/futbinCartesPsg.js), OU s'il
   * porte un fond en dégradé / une ombre — filet de sécurité pour repérer
   * un éventuel voile/dégradé de lisibilité sous le nom qu'aucune classe
   * connue ne nous aurait signalé. */
  function digneDInteret(el) {
    const cls = String(el.className || '')
    if (cls.includes('playercard-26')) return true
    if (el.tagName === 'IMG' && cls.split(/\s+/).includes('nation')) return true
    const cs = getComputedStyle(el)
    if (cs.backgroundImage && cs.backgroundImage.includes('gradient')) return true
    if (cs.boxShadow && cs.boxShadow !== 'none') return true
    return false
  }

  function analyserCarte(carteEl, label) {
    const rectCarte = carteEl.getBoundingClientRect()
    const elements = []

    const tousDescendants = carteEl.querySelectorAll('*')
    for (const el of tousDescendants) {
      if (!digneDInteret(el)) continue
      const rectEl = el.getBoundingClientRect()
      // Élément non rendu (display:none, largeur/hauteur nulle) — inutile
      // à mesurer, souvent un état alternatif (ex. carte-fut__role-plus
      // masqué chez un joueur sans rôle+).
      if (rectEl.width === 0 && rectEl.height === 0) continue

      elements.push({
        tag: el.tagName.toLowerCase(),
        classes: String(el.className || '').trim(),
        texte: (el.textContent || '').trim().slice(0, 40) || undefined,
        src: el.tagName === 'IMG' ? (el.getAttribute('src') || '').slice(0, 80) : undefined,
        rect: rectEnPourcent(rectEl, rectCarte),
        style: styleUtile(el, rectCarte)
      })
    }

    return {
      label,
      carteRectPx: { width: Math.round(rectCarte.width), height: Math.round(rectCarte.height) },
      elements
    }
  }

  /** Choisit jusqu'à 3 cartes DIFFÉRENTES à analyser (variété plutôt que 3
   * fois la même mise en page) : une avec special-img (cutout complet),
   * une avec base-img (photo carrée simple — le cas Mayulu, celui qui
   * posait problème), une avec role-plus si trouvée (badge "++" en plus
   * dans l'entête, jamais vérifié niveau positionnement). */
  function choisirEchantillon() {
    const cartes = [...document.querySelectorAll(SELECTEUR_CARTE)]
    const echantillon = []

    const special = cartes.find((c) => c.querySelector('.playercard-26-special-img'))
    if (special) echantillon.push([special, 'special-img'])

    const base = cartes.find((c) => c.querySelector('.playercard-26-base-img'))
    if (base) echantillon.push([base, 'base-img'])

    const roleplus = cartes.find((c) => c.querySelector('.playercard-26-role-plus'))
    if (roleplus && !echantillon.some(([c]) => c === roleplus)) echantillon.push([roleplus, 'role-plus'])

    return echantillon.slice(0, 3)
  }

  function nomFichier() {
    const date = new Date().toISOString().slice(0, 10)
    return `futbin-css-carte-${date}.json`
  }

  function telechargerJson(donnees) {
    const blob = new Blob([JSON.stringify(donnees, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const lien = document.createElement('a')
    lien.href = url
    lien.download = nomFichier()
    document.body.appendChild(lien)
    lien.click()
    lien.remove()
    URL.revokeObjectURL(url)
  }

  function exporterCss() {
    const echantillon = choisirEchantillon()
    if (echantillon.length === 0) {
      alert('Aucune carte trouvée sur la page (attends le chargement, ou scrolle un peu).')
      return
    }
    const resultat = { page: location.href, genereLe: new Date().toISOString(), cartes: echantillon.map(([el, label]) => analyserCarte(el, label)) }
    telechargerJson(resultat)
  }

  function construireBarre() {
    const barre = document.createElement('div')
    barre.style.cssText = [
      'position:fixed', 'bottom:16px', 'left:16px', 'z-index:999999',
      'background:#050F24', 'color:#F3F6FA', 'font:13px/1.4 sans-serif',
      'border:1px solid rgba(125,154,184,0.4)', 'border-radius:10px',
      'padding:12px 14px', 'box-shadow:0 6px 20px rgba(0,0,0,0.4)',
      'display:flex', 'flex-direction:column', 'gap:8px', 'width:230px'
    ].join(';')

    const titre = document.createElement('strong')
    titre.textContent = 'Ton Paris — Export CSS carte'
    barre.appendChild(titre)

    const statut = document.createElement('span')
    statut.textContent = `${compterCartes()} carte(s) sur la page`
    barre.appendChild(statut)

    const bouton = document.createElement('button')
    bouton.textContent = '📐 Exporter le CSS calculé'
    bouton.style.cssText = 'cursor:pointer;padding:6px 8px;border-radius:6px;border:none;background:#E4022B;color:#F3F6FA;font-weight:bold'
    bouton.onclick = exporterCss
    barre.appendChild(bouton)

    const aide = document.createElement('span')
    aide.style.cssText = 'font-size:11px;opacity:0.7'
    aide.textContent = 'Envoie le .json téléchargé dans le chat.'
    barre.appendChild(aide)

    document.body.appendChild(barre)

    setInterval(() => { statut.textContent = `${compterCartes()} carte(s) sur la page` }, 1500)
  }

  construireBarre()
})()
