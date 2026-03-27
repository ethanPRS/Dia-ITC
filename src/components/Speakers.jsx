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
  { img: "Speakers/adrianTrevino.jpeg", name: "Alberto Treviño", company: "AstraZeneca", role: "Industry Leader", bio: "Charla magistral de apertura. Perspectiva desde la industria farmacéutica-tecnológica y el impacto de la IA en sectores no tradicionales.", gradient: "linear-gradient(135deg,#6C63FF,#a855f7)", trackClass: "track-main", trackName: "Escenario Principal", talkIcon: "🎤", talkName: "Charla de Apertura" },
  { initials: "BB", name: "Beatriz Barrera", company: "IA / Cloud", role: "Cloud & AI Specialist", bio: "Speaker especializada en Inteligencia Artificial y Cloud Computing con experiencia aplicada en la industria.", gradient: "linear-gradient(135deg,#7C3AED,#06b6d4)", trackClass: "track-a", trackName: "Cloud — Bloque 1", talkIcon: "🤖", talkName: "IA & Cloud Track" },
  { img: "Speakers/tato.jpeg", name: "Arturo Gallart", company: "Amazon Web Services (AWS)", role: "Cloud / Security Engineer", bio: "Especialista en seguridad y DevOps en AWS. Comparte casos reales de arquitecturas cloud seguras y buenas prácticas de ciberseguridad.", gradient: "linear-gradient(135deg,#FF9900,#e65c00)", trackClass: "track-b", trackName: "Cyber — Bloque 1", talkIcon: "🔐", talkName: "DevOps & CyberSec Track" },
  { initials: "KZ", name: "Karla Zapata", company: "Inclusión & Ética Tech", role: "Ethics & Diversity Leader", bio: "Charla sobre inclusión, visibilidad y ética en la tecnología. Perspectivas clave para construir carreras más humanas en el sector tech.", gradient: "linear-gradient(135deg,#f59e0b,#ef4444)", trackClass: "track-c", trackName: "Incude — Bloque 1", talkIcon: "⚖️", talkName: "Inclusión & Ética Track" },
  { img: "Speakers/mauroDelboy.jpeg", name: "Mauro Delboy", company: "ACM", role: "AI / Cloud Expert", bio: "Ponencia sobre tendencias emergentes en inteligencia artificial y cómputo en la nube desde la perspectiva ACM.", gradient: "linear-gradient(135deg,#0078D4,#00c6ff)", trackClass: "track-a", trackName: "Cloud — Bloque 2", talkIcon: "🤖", talkName: "IA & Cloud Track" },
  { img: "Speakers/eliEmmanuel.jpeg", name: "Eli Emmanuel Ruiz Avilés", company: "ACM", role: "DevOps / CyberSec Expert", bio: "Experto en seguridad y operaciones DevOps. Casos prácticos y estrategias de defensa en entornos empresariales modernos.", gradient: "linear-gradient(135deg,#059669,#6C63FF)", trackClass: "track-b", trackName: "Cyber — Bloque 2", talkIcon: "🔐", talkName: "DevOps & CyberSec Track" },
  { initials: "WIE", name: "IEEE WIE", company: "Women in Engineering", role: "Inclusión & Visibilidad", bio: "Women in Engineering — IEEE. Sesión sobre visibilidad femenina en ingeniería, liderazgo y cómo cerrar la brecha de género en tech.", gradient: "linear-gradient(135deg,#db2777,#9333ea)", trackClass: "track-c", trackName: "Incude — Bloque 2", talkIcon: "⚖️", talkName: "Inclusión & Ética Track" },
  { initials: "SR", name: "Santiago Reyes Chávez", company: "SAP", role: "Cloud / AI Specialist", bio: "Charla avanzada de IA y Cloud desde la perspectiva de SAP. Casos de uso empresariales y ecosistemas cloud modernos.", gradient: "linear-gradient(135deg,#008FD3,#00C4CC)", trackClass: "track-a", trackName: "Cloud — Bloque 3", talkIcon: "🤖", talkName: "IA & Cloud Track" },
  { initials: "PA", name: "Pedro Arredondo", company: "Accenture", role: "DevOps / Security Consultant", bio: "Consultor en DevOps y ciberseguridad en Accenture. Metodologías reales aplicadas en proyectos de transformación digital.", gradient: "linear-gradient(135deg,#a3335f,#6C63FF)", trackClass: "track-b", trackName: "Cyber — Bloque 3", talkIcon: "🔐", talkName: "DevOps & CyberSec Track" },
  { initials: "HX", name: "Representante Hexaware", company: "Hexaware Technologies", role: "Tech Specialist", bio: "Caso real de consultoría tecnológica y transformación digital. Empleabilidad y trayectorias tech para egresados de ingeniería.", gradient: "linear-gradient(135deg,#06b6d4,#6C63FF)", trackClass: "track-c", trackName: "Incude — Bloque 3", talkIcon: "💼", talkName: "Empleabilidad & Tech Careers" },
  { initials: "RF", name: "Rodolfo Flores & Ramiro Patiño", company: "Snowflake", role: "Data / Cloud Engineers", bio: "Panel de cierre sobre el futuro de la IA y el cómputo en la nube. Perspectiva desde Snowflake sobre data platforms y analítica moderna.", gradient: "linear-gradient(135deg,#00d4fe,#29ABE2)", trackClass: "track-a", trackName: "Cloud — Bloque 4", talkIcon: "🤖", talkName: "IA & Cloud — Panel Final" },
  { initials: "IO", name: "Ivan de Oca", company: "SAP", role: "DevOps / Security Expert", bio: "Panel de cierre sobre seguridad en entornos DevOps modernos. Experiencia directa en proyectos empresariales de alto impacto con SAP.", gradient: "linear-gradient(135deg,#008FD3,#003f7f)", trackClass: "track-b", trackName: "Cyber — Bloque 4", talkIcon: "🔐", talkName: "DevOps & CyberSec — Panel Final" },
  { initials: "EH", name: "Erasmo Hernández", company: "SAP", role: "Inclusion & Ethics Specialist", bio: "Panel de cierre sobre ética en IA, inclusión y trayectorias de carrera para ingenieros. Perspectiva desde SAP sobre empleabilidad tech.", gradient: "linear-gradient(135deg,#f59e0b,#008FD3)", trackClass: "track-c", trackName: "Incude — Bloque 4", talkIcon: "⚖️", talkName: "Inclusión & Ética — Panel Final" }
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

  // Pointer swipe logic
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let startX = 0;
    let dragging = false;
    let startOffset = 0;

    const onPointerDown = (e) => {
      track.setPointerCapture(e.pointerId);
      startX = e.clientX;
      dragging = true;
      startOffset = getOffset(current);
      track.style.transition = 'none';
      clearTimeout(autoTimerRef.current);
    };

    const onPointerMove = (e) => {
      if (!dragging) return;
      const dx = e.clientX - startX;
      track.style.transform = `translateX(-${startOffset - dx}px)`;
    };

    const onPointerUp = (e) => {
      if (!dragging) return;
      dragging = false;
      track.style.transition = '';
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 60) {
        setCurrent(prev => (prev + (dx < 0 ? 1 : -1) + total) % total);
      } else {
        update(); // snap back
      }
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
