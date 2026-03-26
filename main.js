/* ══════════════════════════════════════════════════════════════
   DÍA ITC 2026 — main.js  (complete)
   ══════════════════════════════════════════════════════════════ */

'use strict';

/* ─────────────────────────────────────────
   1. INTRO SPLASH ANIMATION
───────────────────────────────────────── */
function initIntro() {
  // Always start at the very top before the splash plays
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  document.documentElement.style.scrollBehavior = 'auto';

  const splash = document.createElement('div');
  splash.className = 'intro-splash';
  splash.id = 'introSplash';
  splash.innerHTML = `
    <div class="intro-orb" id="introOrb">
      <span class="intro-orb-label">SAITC PRESENTA</span>
      <span class="intro-orb-title">DÍA<span style="color:var(--color-lime)">ITC</span></span>
      <span class="intro-orb-sub">2026</span>
    </div>`;
  document.body.appendChild(splash);
  document.body.style.overflow = 'hidden';
  document.body.style.position = 'fixed';
  document.body.style.top = '0';
  document.body.style.width = '100%';

  setTimeout(() => {
    splash.classList.add('expanding');
    setTimeout(() => {
      splash.classList.add('done');
      // Restore scroll and re-anchor to top
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      document.documentElement.style.scrollBehavior = '';
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      triggerPageReveal();
    }, 1300);
  }, 1600);
}

/* ─────────────────────────────────────────
   2. GLOBAL BACKGROUND PARTICLE CANVAS
   Fixed behind entire page — subtle dots only
───────────────────────────────────────── */
function initGlobalParticles() {
  const canvas = document.createElement('canvas');
  canvas.id = 'globalCanvas';
  canvas.setAttribute('aria-hidden', 'true');
  canvas.style.cssText = [
    'position:fixed',
    'inset:0',
    'z-index:0',
    'pointer-events:none',
    'width:100%',
    'height:100%',
  ].join(';');
  document.body.prepend(canvas);

  const ctx = canvas.getContext('2d');
  const TOTAL = 100;
  let W, H, particles = [], raf;

  const rand = (a, b) => a + Math.random() * (b - a);
  const COLORS = [
    'rgba(108,99,255,PAL)',
    'rgba(200,255,0,PAL)',
    'rgba(6,182,212,PAL)',
  ];

  class Dot {
    constructor() { this.reset(); }
    reset() {
      this.x  = rand(0, W);
      this.y  = rand(0, H);
      this.vx = rand(-0.18, 0.18);
      this.vy = rand(-0.18, 0.18);
      this.r  = rand(0.8, 2.0);
      const c = COLORS[Math.floor(Math.random() * COLORS.length)];
      const a = rand(0.25, 0.55);
      this.color = c.replace('PAL', a);
    }
    tick() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < -8) this.x = W + 8;
      if (this.x > W + 8) this.x = -8;
      if (this.y < -8) this.y = H + 8;
      if (this.y > H + 8) this.y = -8;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  }

  const resize = () => {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
    if (!particles.length) particles = Array.from({ length: TOTAL }, () => new Dot());
    else particles.forEach(p => { if (p.x > W) p.x = rand(0, W); if (p.y > H) p.y = rand(0, H); });
  };

  const connect = () => {
    const MAX = 120;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < MAX) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(108,99,255,${(1 - d / MAX) * 0.1})`;
          ctx.lineWidth = 0.6;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  };

  const loop = () => {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.tick(); p.draw(); });
    connect();
    raf = requestAnimationFrame(loop);
  };

  window.addEventListener('resize', resize, { passive: true });
  resize();
  loop();
}

/* ─────────────────────────────────────────
   3. HERO CANVAS — dense vivid particles
───────────────────────────────────────── */
function initHeroCanvas() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, particles = [];
  const COUNT = 80;
  const MAX_DIST = 150;

  const rand = (a, b) => a + Math.random() * (b - a);

  class Particle {
    constructor() { this.init(); }
    init() {
      this.x  = rand(0, W);
      this.y  = rand(0, H);
      this.vx = rand(-0.35, 0.35);
      this.vy = rand(-0.35, 0.35);
      this.r  = rand(1.2, 2.8);
    }
    update() {
      this.x += this.vx; this.y += this.vy;
      if (this.x < -10) this.x = W + 10;
      if (this.x > W + 10) this.x = -10;
      if (this.y < -10) this.y = H + 10;
      if (this.y > H + 10) this.y = -10;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(108,99,255,0.85)';
      ctx.fill();
    }
  }

  const resize = () => {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  };

  const connect = () => {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < MAX_DIST) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(108,99,255,${(1 - d / MAX_DIST) * 0.4})`;
          ctx.lineWidth = 0.9;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  };

  const loop = () => {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    connect();
    requestAnimationFrame(loop);
  };

  window.addEventListener('resize', resize, { passive: true });
  resize();
  particles = Array.from({ length: COUNT }, () => new Particle());
  loop();
}

/* ─────────────────────────────────────────
   4. NAV
───────────────────────────────────────── */
function initNav() {
  const nav       = document.getElementById('nav');
  const hamburger = document.getElementById('navHamburger');
  const menu      = document.getElementById('navMenu');
  const stickyCTA = document.getElementById('stickyCTA');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
    if (stickyCTA) stickyCTA.style.display = window.scrollY > 600 ? '' : 'none';
  }, { passive: true });

  hamburger.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}

/* ─────────────────────────────────────────
   5. SCROLL REVEAL
───────────────────────────────────────── */
function initReveal() {
  const els = document.querySelectorAll('.reveal-up');
  if (!els.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const siblings = Array.from(entry.target.parentElement?.children ?? []);
        const delay = siblings.indexOf(entry.target) * 60;
        entry.target.style.transitionDelay = `${Math.min(delay, 400)}ms`;
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });

  els.forEach(el => io.observe(el));
}

function triggerPageReveal() {
  document.querySelectorAll('.hero .reveal-up').forEach((el, i) => {
    setTimeout(() => {
      el.style.transitionDelay = '0ms';
      el.classList.add('visible');
    }, i * 110);
  });
}

/* ─────────────────────────────────────────
   6. ANIMATED COUNTERS
───────────────────────────────────────── */
function initCounters() {
  const els = document.querySelectorAll('.stat-item__number[data-target]');
  if (!els.length) return;

  const easeOut = t => 1 - Math.pow(1 - t, 3);
  const DURATION = 2000;

  const animate = (el) => {
    const target = parseInt(el.dataset.target, 10);
    const start  = performance.now();
    const tick   = (now) => {
      const t = Math.min((now - start) / DURATION, 1);
      el.textContent = Math.round(easeOut(t) * target);
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { animate(e.target); io.unobserve(e.target); }
    });
  }, { threshold: 0.5 });

  els.forEach(el => io.observe(el));
}

/* ─────────────────────────────────────────
   7. SPEAKERS CAROUSEL
───────────────────────────────────────── */
function initSpeakersCarousel() {
  const track = document.getElementById('scTrack');
  if (!track) return;

  const cards    = Array.from(track.querySelectorAll('.sc-card'));
  const dotsWrap = document.getElementById('scDots');
  const prevBtn  = document.getElementById('scPrev');
  const nextBtn  = document.getElementById('scNext');
  const total    = cards.length;
  let current    = 0;
  let autoTimer  = null;

  const dots = cards.map((_, i) => {
    const d = document.createElement('button');
    d.className = 'sc-dot';
    d.setAttribute('role', 'tab');
    d.setAttribute('aria-label', `Speaker ${i + 1}`);
    d.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(d);
    return d;
  });

  const getOffset = (idx) => {
    const vp   = track.parentElement;
    const card = cards[idx];
    if (!card || !vp) return 0;
    const vpW  = vp.offsetWidth;
    const cardW = card.offsetWidth;
    const gap   = 24;
    let offset  = 0;
    for (let i = 0; i < idx; i++) offset += (cards[i]?.offsetWidth ?? cardW) + gap;
    offset -= (vpW / 2) - (cardW / 2);
    return Math.max(0, offset);
  };

  const update = () => {
    cards.forEach((c, i) => c.classList.toggle('active', i === current));
    dots.forEach((d, i) => {
      d.classList.toggle('active', i === current);
      d.setAttribute('aria-selected', String(i === current));
    });
    track.style.transform = `translateX(-${getOffset(current)}px)`;
  };

  const goTo = (idx) => {
    current = (idx + total) % total;
    update();
    resetAuto();
  };

  prevBtn?.addEventListener('click', () => goTo(current - 1));
  nextBtn?.addEventListener('click', () => goTo(current + 1));

  cards.forEach((c, i) => {
    c.addEventListener('click', () => { if (i !== current) goTo(i); });
    c.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft')  goTo(current - 1);
      if (e.key === 'ArrowRight') goTo(current + 1);
    });
  });

  let startX = 0; let dragging = false;
  track.addEventListener('pointerdown', e => { startX = e.clientX; dragging = true; });
  window.addEventListener('pointerup', e => {
    if (!dragging) return;
    dragging = false;
    const dx = e.clientX - startX;
    if (Math.abs(dx) > 40) goTo(current + (dx < 0 ? 1 : -1));
  });

  const resetAuto = () => {
    clearTimeout(autoTimer);
    autoTimer = setTimeout(() => goTo(current + 1), 5500);
  };
  track.parentElement?.addEventListener('mouseenter', () => clearTimeout(autoTimer));
  track.parentElement?.addEventListener('mouseleave', resetAuto);

  window.addEventListener('resize', update, { passive: true });
  update();
  resetAuto();
}

/* ─────────────────────────────────────────
   8. AGENDA FILTER TABS
───────────────────────────────────────── */
function initAgendaTabs() {
  const tabs = document.querySelectorAll('.agenda-tab');
  const rows = document.querySelectorAll('.ag-row');
  if (!tabs.length) return;

  const applyFilter = (filter) => {
    rows.forEach(row => {
      const track = row.dataset.track;   // "all" | "main" | "sala-a" | "sala-b" | "sala-c"
      const block = row.dataset.block;   // "always" | "summary" | "detail" | undefined (legacy)

      let visible;

      if (block === 'always') {
        // Breaks, registration, opening ceremony — always shown
        visible = true;
      } else if (block === 'summary') {
        // Combined block row — only for "all" view
        visible = filter === 'all';
      } else if (block === 'detail') {
        // Per-sala row — hidden in "all" view, shown when its track matches
        visible = filter !== 'all' && (track === filter);
      } else {
        // Legacy rows without data-block: original visibility logic
        visible = filter === 'all' || track === 'all' || track === filter;
      }

      row.classList.toggle('ag-row--hidden', !visible);
    });
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      applyFilter(tab.dataset.track);
    });
  });

  // Apply initial state
  applyFilter('all');
}

/* ─────────────────────────────────────────
   9. SECTION GLOW ORBS (CSS-driven via JS class)
   Scrolled position triggers colour shifts
───────────────────────────────────────── */
function initSectionEffects() {
  /* Subtle parallax on decorative orbs */
  const orbs = document.querySelectorAll('.section-orb');
  if (!orbs.length) return;
  window.addEventListener('scroll', () => {
    const sy = window.scrollY;
    orbs.forEach((orb, i) => {
      const dir  = i % 2 === 0 ? 1 : -1;
      const speed = 0.04 + (i % 3) * 0.015;
      orb.style.transform = `translateY(${dir * sy * speed}px)`;
    });
  }, { passive: true });
}

/* ─────────────────────────────────────────
   10. FAQs ACCORDION
───────────────────────────────────────── */
function initFaqs() {
  const triggers = document.querySelectorAll('.faq-trigger');
  triggers.forEach(btn => {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      const answer   = document.getElementById(btn.getAttribute('aria-controls'));

      triggers.forEach(other => {
        if (other === btn) return;
        other.setAttribute('aria-expanded', 'false');
        document.getElementById(other.getAttribute('aria-controls'))?.classList.add('hidden');
      });

      btn.setAttribute('aria-expanded', String(!expanded));
      answer?.classList.toggle('hidden', expanded);
    });
  });
}

/* ─────────────────────────────────────────
   BOOT
───────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  // Immediately snap to top — before any init runs
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  initIntro();
  initGlobalParticles();
  initNav();
  initHeroCanvas();
  initReveal();
  initCounters();
  initSpeakersCarousel();
  initAgendaTabs();
  initSectionEffects();
  initFaqs();
});
