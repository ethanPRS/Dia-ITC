import React, { useRef, useEffect, useState, useCallback } from 'react';

// Subcomponent for the cyber tilt logic
function SpeakerCard({ speaker, index, isCurrent, onClick }) {
  const cardRef = useRef(null);
  const [isTilting, setIsTilting] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const mouseEnter = () => setIsTilting(true);
    const mouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rotX = ((y - cy) / cy) * -15;
      const rotY = ((x - cx) / cx) * 15;
      card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.03)`;
    };
    const mouseLeave = () => {
      setIsTilting(false);
      card.style.transform = '';
    };

    card.addEventListener('mouseenter', mouseEnter);
    card.addEventListener('mousemove', mouseMove);
    card.addEventListener('mouseleave', mouseLeave);

    return () => {
      card.removeEventListener('mouseenter', mouseEnter);
      card.removeEventListener('mousemove', mouseMove);
      card.removeEventListener('mouseleave', mouseLeave);
    };
  }, []);

  return (
    <article 
      ref={cardRef}
      className={`sc-card ${isTilting ? 'tilting' : ''} ${isCurrent ? 'active' : ''}`} 
      data-index={index} 
      tabIndex="0"
      onClick={onClick}
    >
      <div className="sc-card__av" style={{ '--g': speaker.gradient }}>
        {speaker.img ? <img src={speaker.img} alt={speaker.name} loading="lazy" /> : <span>{speaker.initials}</span>}
      </div>
      <div className="sc-card__body">
        <span className={`sc-card__badge ${speaker.trackClass}`}>{speaker.trackName}</span>
        <h3 className="sc-card__name">{speaker.name}</h3>
        <p className="sc-card__company">{speaker.company}</p>
        <p className="sc-card__role">{speaker.role}</p>
        <p className="sc-card__bio">{speaker.bio}</p>
        <div className="sc-card__footer">
          <span className="sc-card__talk">{speaker.talkIcon} {speaker.talkName}</span>
          <a href="#agenda" className="btn btn--ghost btn--sm">Ver en agenda →</a>
        </div>
      </div>

      {/* Cyber Inject */}
      <div className="sc-card-glare" aria-hidden="true"></div>
      <div className="sc-scan-line" aria-hidden="true"></div>
      <div className="sc-cyber-lines" aria-hidden="true">
        <span></span><span></span><span></span><span></span>
      </div>
      <div className="sc-glowing-elements" aria-hidden="true">
        <div className="sc-glow-orb"></div>
        <div className="sc-glow-orb"></div>
        <div className="sc-glow-orb"></div>
      </div>
      <div className="sc-particles" aria-hidden="true">
        <span></span><span></span><span></span>
        <span></span><span></span><span></span>
      </div>
      <div className="sc-corners" aria-hidden="true">
        <span></span><span></span><span></span><span></span>
      </div>
    </article>
  );
}

// Data Array to keep JSX clean
const speakersData = [
  // 1 — Charla de Apertura
  { img: "Speakers/adrianTrevino.jpeg", name: "Alberto Adrián Treviño González", company: "AstraZeneca", role: "Industry Leader", bio: "Charla magistral de apertura. Perspectiva desde la industria farmacéutica-tecnológica y el impacto de la IA en sectores no tradicionales.", gradient: "linear-gradient(135deg,#6C63FF,#a855f7)", trackClass: "track-main", trackName: "Escenario Principal", talkIcon: "🎤", talkName: "Charla de Apertura" },
  // 2 — Cloud Bloque 1 (Eugenio)
  { img: "Speakers/eugenioPerez.jpeg", name: "José Eugenio Pérez Fernández", company: "Danu", role: "Data Engineer Intern", bio: "Sesión sobre Inteligencia Artificial y Cloud Computing con perspectivas aplicadas desde la industria tecnológica.", gradient: "linear-gradient(135deg,#7C3AED,#06b6d4)", trackClass: "track-a", trackName: "Cloud — Bloque 1", talkIcon: "🤖", talkName: "IA & Cloud Track" },
  // 3 — Cloud Bloque 1 (Vianey)
  { img: "Speakers/vianeyMiriam.jpeg", name: "Vianey Mariam Elizondo", company: "Danu", role: "Estudiante de Economía", bio: "Sesión sobre Inteligencia Artificial y Cloud Computing con perspectivas aplicadas desde la industria tecnológica.", gradient: "linear-gradient(135deg,#db2777,#7C3AED)", trackClass: "track-a", trackName: "Cloud — Bloque 1", talkIcon: "🤖", talkName: "IA & Cloud Track" },
  // 4 — Cyber Bloque 1
  { img: "Speakers/arturoGallart.jpeg", name: "Arturo Gallart", company: "Amazon Web Services (AWS)", role: "Cloud / Security Engineer", bio: "Especialista en seguridad y DevOps en AWS. Comparte casos reales de arquitecturas cloud seguras y buenas prácticas de ciberseguridad.", gradient: "linear-gradient(135deg,#FF9900,#e65c00)", trackClass: "track-b", trackName: "Cyber — Bloque 1", talkIcon: "🔐", talkName: "DevOps & CyberSec Track" },
  // 5 — Include Bloque 1
  { img: "Speakers/sebastianMiranda.jpeg", name: "Sebastian Miranda Forero", company: "Endava", role: "Country Manager", bio: "Charla sobre tecnología, desarrollo profesional y cómo construir una carrera sólida en el sector tech.", gradient: "linear-gradient(135deg,#f59e0b,#ef4444)", trackClass: "track-c", trackName: "Include — Bloque 1", talkIcon: "⚖️", talkName: "Inclusión & Ética Track" },
  // 6 — Cloud Bloque 2
  { img: "Speakers/Eduardo Emmanuel.jpeg", name: "Dr. Eduardo Emmanuel Rodríguez López", company: "UDEM", role: "Full-Time Professor · PhD Applied Sciences & Tech", bio: "Profesor de tiempo completo en UDEM con doctorado en Ciencias y Tecnologías Aplicadas y maestría en Ciencias de la Computación. Investigación de frontera en IA y sistemas inteligentes.", gradient: "linear-gradient(135deg,#0078D4,#00c6ff)", trackClass: "track-a", trackName: "Cloud — Bloque 2", talkIcon: "🤖", talkName: "IA & Cloud Track" },
  // 7 — Cyber Bloque 2
  { img: "Speakers/eliEmmanuel.jpeg", name: "Eli Emmanuel Ruiz Avilés", company: "ACM", role: "DevOps / CyberSec Expert", bio: "Experto en seguridad y operaciones DevOps. Casos prácticos y estrategias de defensa en entornos empresariales modernos.", gradient: "linear-gradient(135deg,#059669,#6C63FF)", trackClass: "track-b", trackName: "Cyber — Bloque 2", talkIcon: "🔐", talkName: "DevOps & CyberSec Track" },
  // 8 — Include Bloque 2
  { img: "Speakers/ceciliavillarreal.jpeg", name: "Cecilia de la Paz Villarreal Cavazos", company: "IT Management & Delivery", role: "Deputy Director · IT Manager · Scrum Master · Technical Lead", bio: "Deputy Director of Development con experiencia como IT Manager, Scrum Master y Delivery Manager. Liderazgo femenino y gestión ágil en proyectos de tecnología.", gradient: "linear-gradient(135deg,#db2777,#9333ea)", trackClass: "track-c", trackName: "Include — Bloque 2", talkIcon: "⚖️", talkName: "Inclusión & Ética Track" },
  // 9 — Cloud Bloque 3
  { img: "Speakers/santiagoReyes.jpeg", name: "Santiago Reyes Chávez", company: "SAP", role: "GCID AIOps Engineer (SRE) · MS Applied AI ITESM", bio: "AIOps Engineer en SAP con maestría en Inteligencia Artificial Aplicada del ITESM. Especialista en SRE, innovación y analítica avanzada de datos con enfoque en energías renovables.", gradient: "linear-gradient(135deg,#008FD3,#00C4CC)", trackClass: "track-a", trackName: "Cloud — Bloque 3", talkIcon: "🤖", talkName: "IA & Cloud Track" },
  // 10 — Cyber Bloque 3
  { img: "Speakers/pedroArredondo.jpeg", name: "Pedro Arredondo", company: "Accenture", role: "Lead 3D Visual Designer", bio: "Lead 3D Visual Designer en Accenture. Diseño visual avanzado y creatividad tecnológica aplicada a grandes proyectos de transformación digital.", gradient: "linear-gradient(135deg,#a3335f,#6C63FF)", trackClass: "track-b", trackName: "Cyber — Bloque 3", talkIcon: "🎨", talkName: "Design & Tech Track" },
  // 11 — Include Bloque 3
  { img: "Speakers/jairoDeLaRosa.jpeg", name: "Jairo de la Rosa", company: "Hexaware Technologies", role: "Service Delivery Director", bio: "Toma de decisiones bajo incertidumbre. Perspectivas sobre tecnología, empleabilidad y trayectorias de carrera en el sector tech.", gradient: "linear-gradient(135deg,#06b6d4,#6C63FF)", trackClass: "track-c", trackName: "Include — Bloque 3", talkIcon: "💼", talkName: "Empleabilidad & Tech Careers" },
  // 12 — Cloud Bloque 4 (Rodolfo)
  { img: "Speakers/rodolfoFlores.jpeg", name: "Rodolfo Flores", company: "Snowflake", role: "Senior Solution Engineer · Data Analytics & AI Solutions", bio: "Especialista en soluciones de datos y analítica avanzada. Perspectiva desde Snowflake sobre data platforms, analítica moderna y The Data Cloud.", gradient: "linear-gradient(135deg,#00d4fe,#29ABE2)", trackClass: "track-a", trackName: "Cloud — Bloque 4", talkIcon: "🤖", talkName: "IA & Cloud — Panel Final" },
  // 13 — Cloud Bloque 4 (Ramiro)
  { img: "Speakers/ramiroPatino.jpeg", name: "Ramiro Patiño", company: "Snowflake", role: "Enterprise Account Executive · The Data Cloud", bio: "Panel de cierre sobre el futuro de la IA y el cómputo en la nube. Perspectiva desde Snowflake sobre data platforms, analítica moderna y The Data Cloud.", gradient: "linear-gradient(135deg,#29ABE2,#0078D4)", trackClass: "track-a", trackName: "Cloud — Bloque 4", talkIcon: "🤖", talkName: "IA & Cloud — Panel Final" },
  // 14 — Cloud Bloque 4 (Javier)
  { img: "Speakers/javierRuiz.jpeg", name: "Javier Ruiz", company: "Snowflake", role: "Sales Engineering Manager · BI & Data Strategist", bio: "Sales Engineering Manager en Snowflake con amplia experiencia en Business Intelligence y estrategia de datos. Speaker en The BI Leadership Forum.", gradient: "linear-gradient(135deg,#00d4fe,#6C63FF)", trackClass: "track-a", trackName: "Cloud — Bloque 4", talkIcon: "🤖", talkName: "IA & Cloud — Panel Final" },
  // 15 — Cyber Bloque 4
  { img: "Speakers/ivanMontes.jpeg", name: "Ivan F Montes de Oca T", company: "SAP", role: "DevOps Engineering · ITIL-ITSM · Data Science & Analytics", bio: "Especialista en DevOps con experiencia en ITIL-ITSM y Data Science. Panel de cierre sobre seguridad y operaciones en entornos DevOps modernos de alto impacto.", gradient: "linear-gradient(135deg,#008FD3,#003f7f)", trackClass: "track-b", trackName: "Cyber — Bloque 4", talkIcon: "🔐", talkName: "DevOps & CyberSec — Panel Final" },
  // 16 — Include Bloque 4
  { img: "Speakers/erasmoHernandez.jpeg", name: "Erasmo Hernández", company: "Digital Transformation", role: "Senior Digital Transformation Advisor · Commercial Executive", bio: "Panel de cierre sobre transformación digital, ética en IA, inclusión y trayectorias de carrera. Visión estratégica y comercial de un senior advisor con amplia experiencia en la industria.", gradient: "linear-gradient(135deg,#f59e0b,#008FD3)", trackClass: "track-c", trackName: "Include — Bloque 4", talkIcon: "⚖️", talkName: "Inclusión & Ética — Panel Final" }
];

export default function Speakers() {
  const [current, setCurrent] = useState(0); // Alberto is at 0 in this array format since we pushed him. Usually it was Alberto -> Beatriz -> Arturo.
  const trackRef = useRef(null);
  const autoTimerRef = useRef(null);
  
  const total = speakersData.length;

  const getOffset = useCallback((idx) => {
    const track = trackRef.current;
    if (!track) return 0;
    const vp = track.parentElement;
    const cards = Array.from(track.querySelectorAll('.sc-card'));
    const card = cards[idx];
    if (!card || !vp) return 0;
    const vpW = vp.offsetWidth;
    const cardW = card.offsetWidth;
    const gap = 24;
    let offset = 0;
    for (let i = 0; i < idx; i++) offset += (cards[i]?.offsetWidth || cardW) + gap;
    offset -= (vpW / 2) - (cardW / 2);
    return Math.max(0, offset);
  }, []);

  const update = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    track.style.transform = `translateX(-${getOffset(current)}px)`;
  }, [current, getOffset]);

  const goTo = useCallback((idx) => {
    const maxIdx = (idx + total) % total;
    setCurrent(maxIdx);
  }, [total]);

  const resetAuto = useCallback(() => {
    clearTimeout(autoTimerRef.current);
    autoTimerRef.current = setTimeout(() => goTo(current + 1), 5500);
  }, [current, goTo]);

  useEffect(() => {
    update();
    resetAuto();
    window.addEventListener('resize', update, { passive: true });
    return () => {
      window.removeEventListener('resize', update);
      clearTimeout(autoTimerRef.current);
    };
  }, [update, resetAuto]);

  // Pointer swipe logic — only capture horizontal drags, let vertical page scroll through
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let startX = null;
    let startY = null;
    let dragging = false;
    let directionLocked = false;
    let startOffset = 0;

    const onPointerDown = (e) => {
      // Only respond to primary pointer (no multi-touch conflicts)
      if (e.button !== 0) return;
      startX = e.clientX;
      startY = e.clientY;
      dragging = false; // Will become true only if horizontal
      directionLocked = false;
      startOffset = getOffset(current);
      clearTimeout(autoTimerRef.current);
    };

    const onPointerMove = (e) => {
      if (startX === null) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;

      // Determine drag direction once we have enough movement
      if (!directionLocked) {
        if (Math.abs(dx) < 5 && Math.abs(dy) < 5) return; // Too small, wait
        if (Math.abs(dy) > Math.abs(dx)) {
          // Vertical scroll — release and let page scroll normally
          startX = null;
          startY = null;
          return;
        }
        // Horizontal drag — lock and capture
        directionLocked = true;
        dragging = true;
        track.setPointerCapture(e.pointerId);
        track.style.transition = 'none';
      }

      if (!dragging) return;
      e.preventDefault();
      track.style.transform = `translateX(-${startOffset - dx}px)`;
    };

    const onPointerUp = (e) => {
      if (startX === null && !dragging) return;
      if (dragging) {
        track.style.transition = '';
        const dx = e.clientX - startX;
        if (Math.abs(dx) > 60) {
          setCurrent(prev => (prev + (dx < 0 ? 1 : -1) + total) % total);
        } else {
          update(); // snap back
        }
      }
      startX = null;
      startY = null;
      dragging = false;
      directionLocked = false;
      resetAuto();
    };

    track.addEventListener('pointerdown', onPointerDown);
    track.addEventListener('pointermove', onPointerMove);
    track.addEventListener('pointerup', onPointerUp);
    track.addEventListener('pointercancel', onPointerUp);

    return () => {
      track.removeEventListener('pointerdown', onPointerDown);
      track.removeEventListener('pointermove', onPointerMove);
      track.removeEventListener('pointerup', onPointerUp);
      track.removeEventListener('pointercancel', onPointerUp);
    };
  }, [current, getOffset, total, update, resetAuto]);

  return (
    <section className="section speakers" id="speakers" aria-labelledby="speakersHeading">
      <div className="container">
        <div className="section-header reveal-up">
          <span className="section-tag">02 / SPEAKERS</span>
          <h2 className="section-title" id="speakersHeading">Ponentes</h2>
          <p className="section-subtitle">Líderes de la industria tech compartiendo su visión del futuro.</p>
        </div>
      </div>

      <div className="sc-wrap reveal-up">
        <button className="sc-arrow sc-arrow--prev" id="scPrev" aria-label="Speaker anterior" onClick={() => goTo(current - 1)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button className="sc-arrow sc-arrow--next" id="scNext" aria-label="Speaker siguiente" onClick={() => goTo(current + 1)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        <div className="sc-viewport">
          <div className="sc-track" id="scTrack" ref={trackRef}>
            {speakersData.map((sp, idx) => (
              <SpeakerCard 
                key={idx} 
                speaker={sp} 
                index={idx} 
                isCurrent={idx === current}
                onClick={() => { if (idx !== current) goTo(idx); }}
              />
            ))}
          </div>
        </div>

        <div className="sc-dots" id="scDots" role="tablist" aria-label="Navegar speaker">
          {speakersData.map((_, idx) => (
            <button 
              key={idx}
              className={`sc-dot ${idx === current ? 'active' : ''}`}
              role="tab"
              aria-label={`Speaker ${idx + 1}`}
              aria-selected={idx === current}
              onClick={() => goTo(idx)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
