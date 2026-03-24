import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
// Bloom/EffectComposer removed: it destroys canvas alpha, hiding content behind the fixed canvas

const state = {
  mouse: { x: 0, y: 0, targetX: 0, targetY: 0 },
  scrollProgress: 0,
  isMobile: false,
  isLoaded: false,
  time: 0,
};

function detectMobile() {
  state.isMobile = window.innerWidth < 768 ||
    /Android|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent);
}
detectMobile();

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

let scene, camera, renderer;
let maleFigure, femaleFigure, figureGroup;
let particles;

const FIGURE_START_X = 1.2;
const FIGURE_END_X = 0.16;
const MALE_CENTER_Y = -1.38;
const FEMALE_CENTER_Y = -1.30;
const CAMERA_START_Z = 7.0;
const CAMERA_END_Z = 5.2;

// ─── Man in suit ───
// Key fix: thicker trousers (0.14–0.12 not 0.07–0.09), rounder head,
// gentler jacket→trouser transition, proper body proportions
function createMaleProfile() {
  return [
    // Head — rounder, properly sized
    [0, 2.80],
    [0.06, 2.79],
    [0.12, 2.76],
    [0.16, 2.70],
    [0.17, 2.62],     // widest
    [0.16, 2.54],
    [0.13, 2.48],
    [0.09, 2.44],

    // Neck
    [0.065, 2.40],
    [0.06, 2.36],
    [0.08, 2.33],     // bow-tie bulge
    [0.06, 2.30],
    [0.06, 2.26],

    // Shoulders — broad for suit
    [0.09, 2.24],
    [0.24, 2.20],     // shoulder line
    [0.26, 2.18],     // shoulder edge

    // Suit jacket — tapers gently from chest to waist
    [0.255, 2.08],
    [0.25, 1.94],
    [0.24, 1.80],
    [0.23, 1.68],
    [0.215, 1.58],
    [0.21, 1.50],     // jacket bottom

    // Jacket→trouser transition (gradual, not cliff)
    [0.20, 1.47],
    [0.16, 1.44],     // trouser top

    // Trousers — properly thick, slight taper
    [0.15, 1.34],
    [0.145, 1.20],
    [0.14, 1.04],
    [0.135, 0.88],
    [0.13, 0.72],
    [0.125, 0.56],
    [0.12, 0.40],
    [0.115, 0.22],
    [0.11, 0.14],      // ankle

    // Shoes — subtle wider step
    [0.14, 0.11],
    [0.15, 0.05],
    [0.15, 0.00],
    [0, 0],
  ].map(([x, y]) => new THREE.Vector2(x, y));
}

// ─── Woman in wedding dress ───
// Key fix: softer waist (0.13 not 0.08), smoother bodice curves,
// proportional head, gentler dress flare transition
function createFemaleProfile() {
  return [
    // Head — rounder, proportional
    [0, 2.65],
    [0.05, 2.64],
    [0.10, 2.61],
    [0.14, 2.56],
    [0.15, 2.49],     // widest
    [0.14, 2.42],
    [0.11, 2.37],
    [0.08, 2.34],

    // Neck — graceful
    [0.055, 2.30],
    [0.05, 2.25],
    [0.05, 2.20],

    // Shoulders — soft, feminine
    [0.07, 2.18],
    [0.18, 2.15],     // shoulder
    [0.19, 2.13],

    // Bodice — gentle curve through bust and waist
    [0.185, 2.06],
    [0.18, 1.96],     // bust
    [0.175, 1.86],
    [0.16, 1.76],
    [0.15, 1.68],

    // Waist — defined but not pinched
    [0.135, 1.60],
    [0.13, 1.54],     // narrowest

    // Dress flare — smooth A-line into bell
    [0.14, 1.46],
    [0.16, 1.36],
    [0.20, 1.22],
    [0.25, 1.06],
    [0.31, 0.88],
    [0.37, 0.70],
    [0.42, 0.52],
    [0.46, 0.36],
    [0.49, 0.22],
    [0.51, 0.10],
    [0.52, 0.02],
    [0.52, 0.00],
    [0, 0],
  ].map(([x, y]) => new THREE.Vector2(x, y));
}

function createGlassMaterial(tint = 0xffffff) {
  return new THREE.MeshPhysicalMaterial({
    color: tint,
    transmission: 0.92,
    roughness: 0.08,
    metalness: 0.0,
    ior: 1.45,
    thickness: 0.4,
    envMapIntensity: 1.2,
    clearcoat: 0.6,
    clearcoatRoughness: 0.15,
    transparent: true,
    opacity: 0.85,
    side: THREE.DoubleSide,
    attenuationColor: new THREE.Color(0xe8ddd0),
    attenuationDistance: 3.0,
  });
}

// Bow tie: two mirrored cones with a glass center knot
function createBowtie() {
  const group = new THREE.Group();
  const mat = createGlassMaterial(0xf8f8ff);

  const wingGeo = new THREE.ConeGeometry(0.022, 0.05, 4);
  wingGeo.rotateZ(Math.PI / 2);

  const leftWing = new THREE.Mesh(wingGeo, mat);
  leftWing.position.x = -0.028;

  const rightWing = new THREE.Mesh(wingGeo.clone(), mat.clone());
  rightWing.position.x = 0.028;
  rightWing.rotation.z = Math.PI;

  const knotGeo = new THREE.OctahedronGeometry(0.01, 0);
  const knot = new THREE.Mesh(knotGeo, mat.clone());

  group.add(leftWing, rightWing, knot);
  return group;
}

function createFigure(profilePoints, offsetX, centerY, glassTint, addBowtie) {
  const group = new THREE.Group();

  const segments = 48;
  const geometry = new THREE.LatheGeometry(profilePoints, segments);
  geometry.computeVertexNormals();
  const mesh = new THREE.Mesh(geometry, createGlassMaterial(glassTint));
  group.add(mesh);

  // Very subtle gold edge wireframe (low opacity, fewer segments)
  const edgeGeometry = new THREE.LatheGeometry(
    profilePoints.map(p => new THREE.Vector2(p.x * 1.004, p.y)),
    24
  );
  group.add(new THREE.Mesh(edgeGeometry, new THREE.MeshPhysicalMaterial({
    color: 0xc8a97d,
    transmission: 0.4,
    roughness: 0.3,
    metalness: 0.5,
    transparent: true,
    opacity: 0.06,
    side: THREE.DoubleSide,
    wireframe: true,
  })));

  if (addBowtie) {
    const bowtie = createBowtie();
    bowtie.position.set(0, 2.33, 0.08);
    group.add(bowtie);
  }

  group.position.set(offsetX, centerY, 0);
  return group;
}

function createParticles() {
  const count = 50;
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 6;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 4;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 3;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  return new THREE.Points(geometry, new THREE.PointsMaterial({
    color: 0xc8a97d,
    size: 0.012,
    transparent: true,
    opacity: 0.25,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    sizeAttenuation: true,
  }));
}

function initThreeScene() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  scene = new THREE.Scene();

  const w = window.innerWidth;
  const h = window.innerHeight;

  camera = new THREE.PerspectiveCamera(34, w / h, 0.1, 100);
  camera.position.set(0, 0.15, CAMERA_START_Z);
  camera.lookAt(0, 0.05, 0);

  renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance',
  });
  renderer.setClearColor(0x000000, 0);
  renderer.setSize(w, h);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const pmremGenerator = new THREE.PMREMGenerator(renderer);
  pmremGenerator.compileEquirectangularShader();
  scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
  pmremGenerator.dispose();

  // Lighting: warm studio setup
  scene.add(new THREE.AmbientLight(0xfaf0e6, 0.25));

  const keyLight = new THREE.DirectionalLight(0xfff8f0, 0.6);
  keyLight.position.set(3, 5, 5);
  scene.add(keyLight);

  const fillLight = new THREE.DirectionalLight(0xd0dff0, 0.25);
  fillLight.position.set(-4, 3, 3);
  scene.add(fillLight);

  const rimLight = new THREE.PointLight(0xc8a97d, 1.2, 14);
  rimLight.position.set(0, 3, -4);
  scene.add(rimLight);

  const bottomGlow = new THREE.PointLight(0xc8a97d, 0.4, 8);
  bottomGlow.position.set(0, -2, 3);
  scene.add(bottomGlow);

  // Glass figures
  figureGroup = new THREE.Group();

  maleFigure = createFigure(
    createMaleProfile(), FIGURE_START_X, MALE_CENTER_Y, 0xf0f0f8, true
  );
  femaleFigure = createFigure(
    createFemaleProfile(), -FIGURE_START_X, FEMALE_CENTER_Y, 0xfff5f0, false
  );

  figureGroup.add(maleFigure);
  figureGroup.add(femaleFigure);
  scene.add(figureGroup);

  particles = createParticles();
  scene.add(particles);

  // Direct rendering (no post-processing) to preserve canvas alpha transparency
}

function animateScene() {
  if (!renderer) return;
  requestAnimationFrame(animateScene);

  state.time += 0.008;
  const t = state.time;
  const p = easeInOutCubic(Math.min(1, state.scrollProgress));

  state.mouse.x += (state.mouse.targetX - state.mouse.x) * 0.03;
  state.mouse.y += (state.mouse.targetY - state.mouse.y) * 0.03;

  if (camera) {
    camera.position.z = CAMERA_START_Z - (CAMERA_START_Z - CAMERA_END_Z) * p;
  }

  if (figureGroup) {
    figureGroup.position.y = Math.sin(t * 0.6) * 0.035;
    figureGroup.rotation.y = state.mouse.x * 0.06 + p * 0.10;
    figureGroup.rotation.x = state.mouse.y * 0.03;
  }

  const currentX = FIGURE_START_X - (FIGURE_START_X - FIGURE_END_X) * p;

  if (maleFigure) {
    maleFigure.position.x = currentX;
    maleFigure.position.y = MALE_CENTER_Y + Math.sin(t * 0.7 + 1) * 0.01;
    maleFigure.rotation.y = Math.sin(t * 0.4) * 0.015;
    maleFigure.rotation.z = -p * 0.05;
    maleFigure.rotation.x = p * 0.025;
  }

  if (femaleFigure) {
    femaleFigure.position.x = -currentX;
    femaleFigure.position.y = FEMALE_CENTER_Y + Math.sin(t * 0.7) * 0.01;
    femaleFigure.rotation.y = Math.sin(t * 0.4 + 2) * 0.015;
    femaleFigure.rotation.z = p * 0.05;
    femaleFigure.rotation.x = p * 0.025;
  }

  if (particles) {
    particles.rotation.y = t * 0.015;
    const pos = particles.geometry.attributes.position.array;
    for (let i = 0; i < pos.length; i += 3) {
      pos[i + 1] += Math.sin(t + i) * 0.0003;
    }
    particles.geometry.attributes.position.needsUpdate = true;
  }

  renderer.render(scene, camera);
}

function onWindowResize() {
  if (!camera || !renderer) return;
  const w = window.innerWidth;
  const h = window.innerHeight;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
}

function onMouseMove(e) {
  state.mouse.targetX = (e.clientX / window.innerWidth - 0.5) * 2;
  state.mouse.targetY = (e.clientY / window.innerHeight - 0.5) * 2;
}

function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('revealed');
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );
  document.querySelectorAll('.reveal-up').forEach((el) => observer.observe(el));
}

function initNavigation() {
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 80);
  }, { passive: true });

  if (toggle && mobileMenu) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });
    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        toggle.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }
}

function initCountdown() {
  const weddingDate = new Date('2026-10-18T16:00:00+02:00').getTime();
  function update() {
    const diff = Math.max(0, weddingDate - Date.now());
    const d = document.getElementById('cd-days');
    const h = document.getElementById('cd-hours');
    const m = document.getElementById('cd-minutes');
    const s = document.getElementById('cd-seconds');
    if (d) d.textContent = String(Math.floor(diff / 864e5)).padStart(3, '0');
    if (h) h.textContent = String(Math.floor((diff % 864e5) / 36e5)).padStart(2, '0');
    if (m) m.textContent = String(Math.floor((diff % 36e5) / 6e4)).padStart(2, '0');
    if (s) s.textContent = String(Math.floor((diff % 6e4) / 1e3)).padStart(2, '0');
  }
  update();
  setInterval(update, 1000);
}

function initScrollAnimation() {
  const heroContent = document.querySelector('.hero-content');
  const scrollRange = window.innerHeight * 2.5;

  function onScroll() {
    const scrollY = window.scrollY;
    const vh = window.innerHeight;
    state.scrollProgress = Math.min(1, scrollY / scrollRange);

    if (heroContent && scrollY < vh) {
      const p = scrollY / vh;
      heroContent.style.transform = `translateY(${p * 60}px)`;
      heroContent.style.opacity = String(1 - p * 1.3);
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
}

function initMicroInteractions() {
  document.querySelectorAll('.hero-cta, .event-card').forEach((el) => {
    el.addEventListener('mouseenter', () => {
      el.style.transition = 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    });
  });
}

function setupMobileFallback() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const fallback = document.createElement('div');
  fallback.className = 'hero-mobile-visual';
  fallback.style.display = 'block';
  canvas.parentElement.insertBefore(fallback, canvas);
  canvas.style.display = 'none';
}

function hideLoader() {
  const loader = document.getElementById('loader');
  if (!loader) return;
  setTimeout(() => {
    loader.classList.add('hidden');
    state.isLoaded = true;
    setTimeout(() => {
      document.querySelectorAll('.hero .reveal-up').forEach((el) => {
        el.classList.add('revealed');
      });
    }, 200);
  }, 600);
}

function init() {
  detectMobile();

  if (!state.isMobile) {
    try {
      initThreeScene();
      animateScene();
    } catch (e) {
      console.warn('Three.js failed, using fallback:', e);
      setupMobileFallback();
    }
  } else {
    setupMobileFallback();
  }

  initNavigation();
  initScrollReveal();
  initCountdown();
  initScrollAnimation();
  initMicroInteractions();

  window.addEventListener('mousemove', onMouseMove, { passive: true });
  window.addEventListener('resize', () => {
    detectMobile();
    onWindowResize();
  });

  hideLoader();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
