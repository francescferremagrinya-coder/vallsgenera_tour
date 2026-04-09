/* ============================================================
   Vallsgenera Tour Virtual 360°
   ============================================================ */

'use strict';

/* ── Scene data ─────────────────────────────────────────── */
const SCENES = [
  {
    id: 'feina-ocupacio',
    name: 'Feina i Ocupació',
    color: '#0F6E56',
    shade: '#0a5040',
    // image: 'images/feina-ocupacio.jpg',   // descomenta quan tinguis la foto real
    hotspots: [
      {
        id: 'fo-info-1', lon: 30, lat: 8, type: 'info',
        title: 'Borsa de Treball',
        content: 'Accedeix a les ofertes de feina actualitzades diàriament. Servei personalitzat d\'orientació laboral per a persones en recerca de feina a la comarca de l\'Alt Camp.'
      },
      {
        id: 'fo-info-2', lon: -55, lat: 10, type: 'info',
        title: 'Orientació Professional',
        content: 'Sessions individuals d\'orientació laboral, elaboració del currículum, preparació d\'entrevistes i definició de l\'itinerari professional personalitzat.'
      },
      {
        id: 'fo-info-3', lon: -130, lat: 2, type: 'info',
        title: 'Autoocupació i Emprenedoria',
        content: 'Suport i assessorament per a persones que volen crear el seu propi negoci o projecte professional. Accions formatives i acompanyament en totes les fases.'
      },
      {
        id: 'fo-nav-1', lon: 170, lat: -8, type: 'nav',
        title: 'Anar a Formació',
        targetScene: 'formacio'
      }
    ]
  },
  {
    id: 'formacio',
    name: 'Formació',
    color: '#1a7d63',
    shade: '#145e4a',
    // image: 'images/formacio.jpg',
    hotspots: [
      {
        id: 'fm-info-1', lon: -30, lat: 8, type: 'info',
        title: 'Cursos i Tallers',
        content: 'Àmplia oferta formativa: idiomes, ofimàtica, habilitats professionals, competències digitals i molt més. Formació presencial, semipresencial i en línia.'
      },
      {
        id: 'fm-info-2', lon: 60, lat: 5, type: 'info',
        title: 'Formació Ocupacional',
        content: 'Cursos de formació professional per a treballadors i persones en situació d\'atur. Certificats de professionalitat reconeguts a tot l\'Estat.'
      },
      {
        id: 'fm-info-3', lon: -100, lat: 3, type: 'info',
        title: 'Aula Digital',
        content: 'Espai equipat amb ordinadors d\'última generació per a la formació en competències digitals, teletreball i eines tecnològiques actuals.'
      },
      {
        id: 'fm-nav-1', lon: 165, lat: -8, type: 'nav',
        title: 'Anar a Empresa i Emprenedoria',
        targetScene: 'empresa-emprenedoria'
      }
    ]
  },
  {
    id: 'empresa-emprenedoria',
    name: 'Empresa i Emprenedoria',
    color: '#0d5e48',
    shade: '#083d30',
    // image: 'images/empresa-emprenedoria.jpg',
    hotspots: [
      {
        id: 'ee-info-1', lon: 40, lat: 10, type: 'info',
        title: 'Assessorament Empresarial',
        content: 'Suport expert a nous projectes empresarials: pla de negoci, fonts de finançament, tràmits de constitució i estratègia de creixement sostenible.'
      },
      {
        id: 'ee-info-2', lon: -40, lat: 5, type: 'info',
        title: 'Incubadora d\'Empreses',
        content: 'Espai per a startups i emprenedors en fase inicial. Oficines i despatxos equipats, mentoria especialitzada i accés a xarxa d\'inversors i contactes.'
      },
      {
        id: 'ee-info-3', lon: -115, lat: 3, type: 'info',
        title: 'Finançament i Subvencions',
        content: 'Informació i assessorament sobre línies de finançament, subvencions europees, nacionals i locals disponibles per a empreses i autònoms.'
      },
      {
        id: 'ee-nav-1', lon: 160, lat: -8, type: 'nav',
        title: 'Anar al Col·laboratori',
        targetScene: 'col-laboratori'
      }
    ]
  },
  {
    id: 'col-laboratori',
    name: 'Col·laboratori',
    color: '#127566',
    shade: '#0d5550',
    // image: 'images/col-laboratori.jpg',
    hotspots: [
      {
        id: 'cl-info-1', lon: -20, lat: 8, type: 'info',
        title: 'Espai de Coworking',
        content: 'Espai de treball compartit equipat amb fibra òptica, sala de reunions, cabines de trucades i zona de desconnexió. Disponible per hores o mensualitat.'
      },
      {
        id: 'cl-info-2', lon: 75, lat: 5, type: 'info',
        title: 'Sala de Reunions i Formació',
        content: 'Sala polivalent per a reunions, presentacions i formació. Equipada amb projector, pantalla i connexió de videoconferència. Reserva disponible en línia.'
      },
      {
        id: 'cl-info-3', lon: -110, lat: 3, type: 'info',
        title: 'Projectes Col·laboratius',
        content: 'Punt de trobada per a empreses, entitats i professionals que volen col·laborar en projectes d\'innovació, recerca i desenvolupament territorial.'
      },
      {
        id: 'cl-nav-1', lon: 170, lat: -8, type: 'nav',
        title: 'Anar al Campus URV i Pacte',
        targetScene: 'campus-urv-pacte'
      }
    ]
  },
  {
    id: 'campus-urv-pacte',
    name: 'Campus URV i Pacte',
    color: '#0b4f3c',
    shade: '#073328',
    // image: 'images/campus-urv-pacte.jpg',
    hotspots: [
      {
        id: 'cu-info-1', lon: -35, lat: 8, type: 'info',
        title: 'Campus URV Valls',
        content: 'Espai de col·laboració estratègica amb la Universitat Rovira i Virgili. Programes conjunts de formació superior, recerca aplicada i transferència de coneixement.'
      },
      {
        id: 'cu-info-2', lon: 65, lat: 5, type: 'info',
        title: 'Pacte Local per l\'Ocupació',
        content: 'Acord de Desenvolupament Local subscrit per l\'Ajuntament de Valls, empreses, sindicats i entitats per millorar l\'ocupació i la qualificació professional a la comarca.'
      },
      {
        id: 'cu-info-3', lon: -115, lat: 3, type: 'info',
        title: 'Pràctiques Universitàries',
        content: 'Gestió de programes de pràctiques per a estudiants universitaris a empreses locals. Pont entre el món acadèmic i el teixit empresarial de l\'Alt Camp.'
      },
      {
        id: 'cu-nav-1', lon: 170, lat: -8, type: 'nav',
        title: 'Anar a Atenció i Tràmits',
        targetScene: 'atencio-tramits'
      }
    ]
  },
  {
    id: 'atencio-tramits',
    name: 'Atenció i Tràmits',
    color: '#1c9070',
    shade: '#156850',
    // image: 'images/atencio-tramits.jpg',
    hotspots: [
      {
        id: 'at-info-1', lon: 30, lat: 8, type: 'info',
        title: 'Punt d\'Atenció Presencial',
        content: 'Servei d\'atenció personalitzada. El nostre equip t\'orienta i t\'acompanya en tots els tràmits administratius, inscripcions a activitats i sol·licitud de serveis.'
      },
      {
        id: 'at-info-2', lon: -50, lat: 5, type: 'info',
        title: 'Tràmits en Línia',
        content: 'Accedeix als serveis telemàtics de Vallsgenera: inscripcions a cursos, sol·licituds, descàrrega de documents i gestió de la teva àrea personal 24/7.'
      },
      {
        id: 'at-info-3', lon: -120, lat: 3, type: 'info',
        title: 'Cita Prèvia',
        content: 'Reserva la teva cita amb els nostres tècnics per a assessorament personalitzat. Disponible en persona, per telèfon o videoconferència.'
      },
      {
        id: 'at-nav-1', lon: 170, lat: -8, type: 'nav',
        title: 'Tornar a Feina i Ocupació',
        targetScene: 'feina-ocupacio'
      }
    ]
  }
];

/* ── Helpers ─────────────────────────────────────────────── */
function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return { r, g, b };
}

function drawRoundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.arcTo(x + w, y, x + w, y + r, r);
  ctx.lineTo(x + w, y + h - r);
  ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
  ctx.lineTo(x + r, y + h);
  ctx.arcTo(x, y + h, x, y + h - r, r);
  ctx.lineTo(x, y + r);
  ctx.arcTo(x, y, x + r, y, r);
  ctx.closePath();
}

/* ── Main Tour Class ─────────────────────────────────────── */
class VirtualTour {
  constructor() {
    this.scenes = SCENES;
    this.currentIndex = 0;
    this.isTransitioning = false;

    // Three.js objects
    this.threeScene = null;
    this.camera = null;
    this.renderer = null;
    this.sphere = null;

    // Camera state
    this.lon = 0;
    this.lat = 0;
    this.fov = 75;

    // Interaction state
    this.pointerDown = false;
    this.startX = 0;
    this.startY = 0;
    this.startLon = 0;
    this.startLat = 0;
    this.velLon = 0;
    this.velLat = 0;
    this.lastX = 0;
    this.lastY = 0;
    this.lastMoveTime = 0;
    this.userInteractedAt = 0;

    // Pinch-to-zoom
    this.lastPinchDist = null;

    this.init();
  }

  /* ── Initialise ─────── */
  init() {
    this.setupThree();
    this.buildDots();
    this.setupEvents();
    this.loadScene(0, false);
    this.animate();

    // Fade out controls hint after 4 seconds
    setTimeout(() => {
      const hint = document.getElementById('controls-hint');
      if (hint) hint.classList.add('hidden');
    }, 4000);
  }

  /* ── Three.js setup ─────── */
  setupThree() {
    const container = document.getElementById('viewer-container');

    this.threeScene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      this.fov,
      container.clientWidth / container.clientHeight,
      0.1, 1000
    );
    this.camera.position.set(0, 0, 0.01);

    const canvas = document.getElementById('panorama-canvas');
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(container.clientWidth, container.clientHeight);

    // Sphere (inside-out)
    const geo = new THREE.SphereGeometry(500, 64, 48);
    geo.scale(-1, 1, 1);
    const mat = new THREE.MeshBasicMaterial({ color: 0x0a1a14 });
    this.sphere = new THREE.Mesh(geo, mat);
    this.threeScene.add(this.sphere);
  }

  /* ── Placeholder textures ─────── */
  createPlaceholderTexture(scene) {
    const W = 2048, H = 1024;
    const canvas = document.createElement('canvas');
    canvas.width = W; canvas.height = H;
    const ctx = canvas.getContext('2d');
    const { r, g, b } = hexToRgb(scene.color);
    const { r: sr, g: sg, b: sb } = hexToRgb(scene.shade);

    /* ── Background ── */
    const bg = ctx.createLinearGradient(0, 0, 0, H);
    bg.addColorStop(0,   `rgb(${Math.min(r+25,255)},${Math.min(g+25,255)},${Math.min(b+25,255)})`);
    bg.addColorStop(0.45, `rgb(${r},${g},${b})`);
    bg.addColorStop(1,   `rgb(${sr},${sg},${sb})`);
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, W, H);

    /* ── Subtle radial vignette ── */
    const vig = ctx.createRadialGradient(W/2, H/2, 100, W/2, H/2, H*0.85);
    vig.addColorStop(0, 'rgba(0,0,0,0)');
    vig.addColorStop(1, 'rgba(0,0,0,0.35)');
    ctx.fillStyle = vig;
    ctx.fillRect(0, 0, W, H);

    /* ── Grid (equirectangular reference) ── */
    ctx.strokeStyle = 'rgba(255,255,255,0.07)';
    ctx.lineWidth = 1;
    for (let y = 0; y <= H; y += 64) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
    }
    for (let x = 0; x <= W; x += 64) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
    }

    /* ── Stylised room elements ── */
    // Ceiling band
    const ceil = ctx.createLinearGradient(0, 0, 0, 200);
    ceil.addColorStop(0, `rgba(${Math.min(r+40,255)},${Math.min(g+40,255)},${Math.min(b+40,255)},0.25)`);
    ceil.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = ceil;
    ctx.fillRect(0, 0, W, 200);

    // Floor band
    const floor = ctx.createLinearGradient(0, H-220, 0, H);
    floor.addColorStop(0, 'rgba(0,0,0,0)');
    floor.addColorStop(1, `rgba(${sr},${sg},${sb},0.6)`);
    ctx.fillStyle = floor;
    ctx.fillRect(0, H-220, W, 220);

    // Horizon line
    ctx.strokeStyle = 'rgba(255,255,255,0.14)';
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(0, 620); ctx.lineTo(W, 620); ctx.stroke();

    // Window left
    ctx.fillStyle = 'rgba(255,255,255,0.07)';
    drawRoundRect(ctx, 100, 320, 220, 260, 6);
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.18)'; ctx.lineWidth = 2;
    drawRoundRect(ctx, 100, 320, 220, 260, 6);
    ctx.stroke();
    // Window cross bar
    ctx.strokeStyle = 'rgba(255,255,255,0.12)'; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(210, 320); ctx.lineTo(210, 580); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(100, 450); ctx.lineTo(320, 450); ctx.stroke();

    // Window right
    ctx.fillStyle = 'rgba(255,255,255,0.07)';
    drawRoundRect(ctx, W-320, 320, 220, 260, 6);
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.18)'; ctx.lineWidth = 2;
    drawRoundRect(ctx, W-320, 320, 220, 260, 6);
    ctx.stroke();
    ctx.strokeStyle = 'rgba(255,255,255,0.12)'; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(W-210, 320); ctx.lineTo(W-210, 580); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(W-320, 450); ctx.lineTo(W-100, 450); ctx.stroke();

    // Centre panel / wall feature
    ctx.fillStyle = 'rgba(255,255,255,0.06)';
    drawRoundRect(ctx, W/2 - 200, 360, 400, 240, 8);
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.2)'; ctx.lineWidth = 2;
    drawRoundRect(ctx, W/2 - 200, 360, 400, 240, 8);
    ctx.stroke();

    // Desk silhouette at bottom
    ctx.fillStyle = `rgba(${sr},${sg},${sb},0.5)`;
    drawRoundRect(ctx, W/2 - 240, 650, 480, 30, 4);
    ctx.fill();

    /* ── Text ── */
    // Drop shadow
    ctx.shadowColor = 'rgba(0,0,0,0.5)';
    ctx.shadowBlur = 20;
    ctx.shadowOffsetY = 4;

    // Department name
    ctx.fillStyle = 'rgba(255,255,255,0.95)';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = 'bold 68px system-ui,-apple-system,sans-serif';
    ctx.fillText(scene.name, W / 2, H / 2 - 20);

    ctx.shadowBlur = 0; ctx.shadowOffsetY = 0;

    // Subtitle
    ctx.font = '26px system-ui,-apple-system,sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.55)';
    ctx.fillText('Tour Virtual · Vallsgenera', W / 2, H / 2 + 55);

    // "Sample image" badge
    ctx.fillStyle = 'rgba(0,0,0,0.35)';
    drawRoundRect(ctx, W/2 - 130, H/2 + 90, 260, 38, 19);
    ctx.fill();
    ctx.font = '16px system-ui,-apple-system,sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.7)';
    ctx.fillText('Imatge de mostra · Foto real pendent', W / 2, H/2 + 109);

    return new THREE.CanvasTexture(canvas);
  }

  /* ── Load a scene ─────── */
  loadScene(index, animate = true) {
    if (this.isTransitioning) return;
    if (index === this.currentIndex && animate) return;

    this.isTransitioning = true;
    const overlay = document.getElementById('transition-overlay');

    const doLoad = () => {
      this.currentIndex = index;
      const s = this.scenes[index];

      // Update sidebar
      document.querySelectorAll('.dept-btn').forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
      });

      // Update title
      document.getElementById('scene-title').textContent = s.name;

      // Update dots
      document.querySelectorAll('.scene-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });

      // Update counter
      document.getElementById('scene-dots').setAttribute('data-current', index);

      // Load texture
      if (s.image) {
        const loader = new THREE.TextureLoader();
        loader.load(
          s.image,
          (tex) => this.applyTexture(tex, s),
          undefined,
          () => this.applyTexture(this.createPlaceholderTexture(s), s)
        );
      } else {
        const tex = this.createPlaceholderTexture(s);
        this.applyTexture(tex, s);
      }
    };

    if (animate) {
      overlay.classList.add('active');
      setTimeout(() => {
        doLoad();
        setTimeout(() => {
          overlay.classList.remove('active');
          this.isTransitioning = false;
        }, 280);
      }, 250);
    } else {
      doLoad();
      this.isTransitioning = false;
    }
  }

  applyTexture(texture, sceneData) {
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.encoding = THREE.sRGBEncoding || THREE.LinearEncoding;
    this.sphere.material = new THREE.MeshBasicMaterial({ map: texture });
    this.sphere.material.needsUpdate = true;

    // Reset camera gently
    this.lon = 0; this.lat = 0;
    this.velLon = 0; this.velLat = 0;

    // Rebuild hotspots
    this.buildHotspots(sceneData);

    // Hide info panel
    this.hideInfoPanel();
  }

  /* ── Hotspots ─────── */
  buildHotspots(sceneData) {
    const overlay = document.getElementById('hotspots-overlay');
    overlay.innerHTML = '';

    sceneData.hotspots.forEach(hs => {
      const el = document.createElement('div');
      el.className = `hotspot hotspot-${hs.type}`;
      el.dataset.lon = hs.lon;
      el.dataset.lat = hs.lat;

      // Inner circle with icon
      const inner = document.createElement('div');
      inner.className = 'hotspot-inner';

      if (hs.type === 'info') {
        inner.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="8" x2="12" y2="12.5"/>
          <circle cx="12" cy="16" r="0.8" fill="currentColor" stroke="none"/>
        </svg>`;
      } else {
        inner.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="9 18 15 12 9 6"/>
        </svg>`;
      }

      // Label
      const label = document.createElement('div');
      label.className = 'hotspot-label';
      label.textContent = hs.title;

      el.appendChild(inner);
      el.appendChild(label);
      overlay.appendChild(el);

      // Events
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        if (hs.type === 'info') {
          this.showInfoPanel(hs);
        } else {
          const idx = this.scenes.findIndex(s => s.id === hs.targetScene);
          if (idx >= 0) this.loadScene(idx);
        }
      });
    });
  }

  updateHotspots() {
    const container = document.getElementById('viewer-container');
    const W = container.clientWidth;
    const H = container.clientHeight;

    const camDir = new THREE.Vector3();
    this.camera.getWorldDirection(camDir);

    document.querySelectorAll('.hotspot').forEach(el => {
      const lon = parseFloat(el.dataset.lon);
      const lat = parseFloat(el.dataset.lat);

      const phi   = THREE.MathUtils.degToRad(90 - lat);
      const theta = THREE.MathUtils.degToRad(lon);

      const dir = new THREE.Vector3(
        Math.sin(phi) * Math.cos(theta),
        Math.cos(phi),
        Math.sin(phi) * Math.sin(theta)
      );

      const dot = camDir.dot(dir);

      if (dot < 0.15) {
        el.style.display = 'none';
        return;
      }

      // Project to screen
      const pos = dir.clone().multiplyScalar(500);
      pos.project(this.camera);

      const x = (pos.x + 1) / 2 * W;
      const y = -(pos.y - 1) / 2 * H;

      el.style.display = 'block';
      el.style.left = `${x}px`;
      el.style.top  = `${y}px`;

      // Fade near edges of view (dot 0.15→0.4 = fade in)
      const opacity = Math.min(1, (dot - 0.15) / 0.25);
      el.style.opacity = opacity;

      // Subtle scale for depth feel
      const scale = 0.85 + dot * 0.15;
      const inner = el.querySelector('.hotspot-inner');
      if (inner) inner.style.transform = `scale(${scale})`;
    });
  }

  /* ── Info panel ─────── */
  showInfoPanel(hs) {
    document.getElementById('info-title').textContent = hs.title;
    document.getElementById('info-content').textContent = hs.content;
    document.getElementById('info-panel').classList.add('visible');
  }

  hideInfoPanel() {
    document.getElementById('info-panel').classList.remove('visible');
  }

  /* ── Scene dots ─────── */
  buildDots() {
    const container = document.getElementById('scene-dots');
    this.scenes.forEach((s, i) => {
      const dot = document.createElement('button');
      dot.className = 'scene-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', s.name);
      dot.addEventListener('click', () => this.loadScene(i));
      container.appendChild(dot);
    });
  }

  /* ── Events ─────────── */
  setupEvents() {
    const canvas = document.getElementById('panorama-canvas');

    // Pointer (mouse)
    canvas.addEventListener('pointerdown', e => this.onPointerDown(e));
    canvas.addEventListener('pointermove', e => this.onPointerMove(e));
    canvas.addEventListener('pointerup',   e => this.onPointerUp(e));
    canvas.addEventListener('pointerleave', e => this.onPointerUp(e));

    // Touch (pinch zoom)
    canvas.addEventListener('touchstart', e => this.onTouchStart(e), { passive: false });
    canvas.addEventListener('touchmove',  e => this.onTouchMove(e),  { passive: false });
    canvas.addEventListener('touchend',   () => { this.lastPinchDist = null; });

    // Wheel zoom
    canvas.addEventListener('wheel', e => this.onWheel(e), { passive: false });

    // Keyboard
    window.addEventListener('keydown', e => this.onKeyDown(e));

    // UI buttons
    document.getElementById('info-close').addEventListener('click', () => this.hideInfoPanel());
    document.getElementById('prev-scene').addEventListener('click', () => this.prevScene());
    document.getElementById('next-scene').addEventListener('click', () => this.nextScene());
    document.getElementById('menu-toggle').addEventListener('click', () => this.toggleSidebar());
    document.getElementById('sidebar-overlay').addEventListener('click', () => this.closeSidebar());
    document.getElementById('fullscreen-btn').addEventListener('click', () => this.toggleFullscreen());

    // Dept buttons
    document.querySelectorAll('.dept-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.index, 10);
        this.loadScene(idx);
        this.closeSidebar();
      });
    });

    // Close info panel clicking outside
    document.getElementById('viewer-container').addEventListener('click', (e) => {
      if (!e.target.closest('#info-panel') && !e.target.closest('.hotspot')) {
        this.hideInfoPanel();
      }
    });

    window.addEventListener('resize', () => this.onResize());
  }

  onPointerDown(e) {
    this.pointerDown = true;
    this.startX = e.clientX;
    this.startY = e.clientY;
    this.lastX  = e.clientX;
    this.lastY  = e.clientY;
    this.startLon = this.lon;
    this.startLat = this.lat;
    this.velLon = 0; this.velLat = 0;
    this.userInteractedAt = performance.now();
  }

  onPointerMove(e) {
    if (!this.pointerDown) return;
    const now = performance.now();
    const dx = e.clientX - this.startX;
    const dy = e.clientY - this.startY;
    const newLon = this.startLon - dx * 0.22;
    const newLat = this.startLat + dy * 0.22;

    this.velLon = (newLon - this.lon) * 0.4;
    this.velLat = (newLat - this.lat) * 0.4;
    this.lon = newLon;
    this.lat = newLat;
    this.lastX = e.clientX;
    this.lastY = e.clientY;
    this.lastMoveTime = now;
    this.userInteractedAt = now;
  }

  onPointerUp() {
    this.pointerDown = false;
  }

  onTouchStart(e) {
    if (e.touches.length === 2) {
      e.preventDefault();
      this.lastPinchDist = this.pinchDist(e.touches);
    }
  }

  onTouchMove(e) {
    if (e.touches.length === 2 && this.lastPinchDist !== null) {
      e.preventDefault();
      const dist = this.pinchDist(e.touches);
      const delta = this.lastPinchDist - dist;
      this.fov = Math.max(30, Math.min(100, this.fov + delta * 0.12));
      this.camera.fov = this.fov;
      this.camera.updateProjectionMatrix();
      this.lastPinchDist = dist;
      this.userInteractedAt = performance.now();
    }
  }

  pinchDist(touches) {
    return Math.hypot(
      touches[0].clientX - touches[1].clientX,
      touches[0].clientY - touches[1].clientY
    );
  }

  onWheel(e) {
    e.preventDefault();
    this.fov = Math.max(30, Math.min(100, this.fov + e.deltaY * 0.05));
    this.camera.fov = this.fov;
    this.camera.updateProjectionMatrix();
    this.userInteractedAt = performance.now();
  }

  onKeyDown(e) {
    const step = 5;
    switch (e.key) {
      case 'ArrowLeft':  this.lon -= step; this.userInteractedAt = performance.now(); break;
      case 'ArrowRight': this.lon += step; this.userInteractedAt = performance.now(); break;
      case 'ArrowUp':    this.lat = Math.min(85, this.lat + step); this.userInteractedAt = performance.now(); break;
      case 'ArrowDown':  this.lat = Math.max(-85, this.lat - step); this.userInteractedAt = performance.now(); break;
      case 'Escape':     this.hideInfoPanel(); this.closeSidebar(); break;
      case '+': case '=':
        this.fov = Math.max(30, this.fov - 5);
        this.camera.fov = this.fov; this.camera.updateProjectionMatrix(); break;
      case '-':
        this.fov = Math.min(100, this.fov + 5);
        this.camera.fov = this.fov; this.camera.updateProjectionMatrix(); break;
    }
    // 1-6 direct scene navigation
    const n = parseInt(e.key, 10);
    if (n >= 1 && n <= 6) this.loadScene(n - 1);
  }

  prevScene() {
    const idx = (this.currentIndex - 1 + this.scenes.length) % this.scenes.length;
    this.loadScene(idx);
  }

  nextScene() {
    const idx = (this.currentIndex + 1) % this.scenes.length;
    this.loadScene(idx);
  }

  toggleSidebar() {
    const sb = document.getElementById('sidebar');
    const ov = document.getElementById('sidebar-overlay');
    const open = sb.classList.toggle('open');
    ov.classList.toggle('visible', open);
  }

  closeSidebar() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebar-overlay').classList.remove('visible');
  }

  toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }

  onResize() {
    const container = document.getElementById('viewer-container');
    this.camera.aspect = container.clientWidth / container.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(container.clientWidth, container.clientHeight);
  }

  /* ── Animation loop ─────── */
  animate() {
    requestAnimationFrame(() => this.animate());
    this.update();
    this.renderer.render(this.threeScene, this.camera);
  }

  update() {
    // Inertia
    if (!this.pointerDown) {
      this.lon += this.velLon;
      this.lat += this.velLat;
      this.velLon *= 0.93;
      this.velLat *= 0.93;

      // Auto-rotate when idle > 3s
      const idle = performance.now() - this.userInteractedAt;
      if (idle > 3000) {
        this.lon += 0.018; // ~1 deg/sec at 60fps
      }
    }

    // Clamp latitude
    this.lat = Math.max(-85, Math.min(85, this.lat));

    // Camera look target
    const phi   = THREE.MathUtils.degToRad(90 - this.lat);
    const theta = THREE.MathUtils.degToRad(this.lon);

    this.camera.lookAt(
      Math.sin(phi) * Math.cos(theta),
      Math.cos(phi),
      Math.sin(phi) * Math.sin(theta)
    );

    // Update hotspot positions every frame
    this.updateHotspots();
  }
}

/* ── Boot ────────────────────────────────────────────────── */
window.addEventListener('DOMContentLoaded', () => {
  // Check Three.js is available
  if (typeof THREE === 'undefined') {
    document.getElementById('loading').innerHTML =
      '<p style="color:white;padding:20px;text-align:center">' +
      'Error: no s\'ha pogut carregar Three.js.<br>' +
      'Comprova la connexió a internet i torna-ho a intentar.</p>';
    return;
  }

  // Brief delay to show loading screen
  setTimeout(() => {
    window.tour = new VirtualTour();
    document.getElementById('loading').classList.add('hidden');
  }, 600);
});
