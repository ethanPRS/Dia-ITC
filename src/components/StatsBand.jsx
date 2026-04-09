import React, { useEffect, useRef } from 'react';

export default function StatsBand() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.stat-item__number[data-target]');
    if (!els || !els.length) return;

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
    
    return () => {
      els.forEach(el => io.unobserve(el));
      io.disconnect();
    };
  }, []);

  return (
    <section className="stats-band" aria-label="Estadísticas del evento" ref={sectionRef}>
      <div className="container stats-band__grid">
        <div className="stat-item reveal-up">
          <span className="stat-item__number" data-target="250">0</span>
          <span className="stat-item__label">Lugares disponibles</span>
        </div>
        <div className="stat-item reveal-up">
          <span className="stat-item__number" data-target="16">0</span>
          <span className="stat-item__label">Speakers</span>
        </div>
        <div className="stat-item reveal-up">
          <span className="stat-item__number" data-target="13">0</span>
          <span className="stat-item__label">Charlas</span>
        </div>
        <div className="stat-item reveal-up">
          <span className="stat-item__number" data-target="8">0</span>
          <span className="stat-item__label">Horas de contenido</span>
        </div>
      </div>
    </section>
  );
}
