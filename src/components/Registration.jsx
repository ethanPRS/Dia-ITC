import React, { useState } from 'react';

export default function Registration() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="section registration" id="registro" aria-labelledby="registroHeading">
      <div className="container">
        <header className="section-header reveal-up">
          <span className="section-tag">06 / REGISTRO</span>
          <h2 className="section-title" id="registroHeading">Regístrate ahora</h2>
          <p className="section-subtitle">Selecciona tu tipo de registro y asegura tu lugar en Día ITC 2026.</p>
        </header>

        <div className="reg-cards reveal-up">
          {/* Internal Students Card */}
          <article
            className={`reg-card reg-card--internal ${hoveredCard === 'internal' ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredCard('internal')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="reg-card__glow reg-card__glow--internal" aria-hidden="true"></div>
            <div className="reg-card__content">
              <div className="reg-card__icon-wrap reg-card__icon-wrap--internal">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5"/>
                </svg>
              </div>
              <span className="reg-card__tag reg-card__tag--internal">Comunidad UDEM</span>
              <h3 className="reg-card__title">Estudiante Interno</h3>
              <p className="reg-card__desc">
                ¿Eres estudiante, profesor o colaborador de la UDEM? Este registro es para ti.
              </p>
              <ul className="reg-card__perks">
                <li>
                  <span className="reg-card__perk-icon" aria-hidden="true">🎓</span>
                  <span>Registro con matrícula UDEM</span>
                </li>
                <li>
                  <span className="reg-card__perk-icon" aria-hidden="true">🍽️</span>
                  <span>Comida & catering incluido</span>
                </li>
                <li>
                  <span className="reg-card__perk-icon" aria-hidden="true">🎁</span>
                  <span>Rifa de premios exclusivos</span>
                </li>
              </ul>
              <div className="reg-card__price">
                <span className="reg-card__price-amount">$80 <small>MXN</small></span>
                <span className="reg-card__price-label">precio anticipado</span>
              </div>
              <a
                href="https://forms.gle/mekWvaAYoASKALE17"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary btn--lg btn--full reg-card__cta"
                id="regInternalBtn"
              >
                Registrarme como interno →
              </a>
            </div>
            {/* Decorative corners */}
            <div className="reg-card__corners" aria-hidden="true">
              <span></span><span></span><span></span><span></span>
            </div>
          </article>

          {/* External Students Card */}
          <article
            className={`reg-card reg-card--external ${hoveredCard === 'external' ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredCard('external')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="reg-card__glow reg-card__glow--external" aria-hidden="true"></div>
            <div className="reg-card__content">
              <div className="reg-card__icon-wrap reg-card__icon-wrap--external">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M2 12h20"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
              <span className="reg-card__tag reg-card__tag--external">Comunidad Externa</span>
              <h3 className="reg-card__title">Estudiante Externo</h3>
              <p className="reg-card__desc">
                ¿Vienes de otra universidad o institución? Bienvenido a Día ITC 2026.
              </p>
              <ul className="reg-card__perks">
                <li>
                  <span className="reg-card__perk-icon" aria-hidden="true">🌐</span>
                  <span>Abierto a todas las universidades</span>
                </li>
                <li>
                  <span className="reg-card__perk-icon" aria-hidden="true">🍽️</span>
                  <span>Comida & catering incluido</span>
                </li>
                <li>
                  <span className="reg-card__perk-icon" aria-hidden="true">🤝</span>
                  <span>Networking con la comunidad tech</span>
                </li>
              </ul>
              <div className="reg-card__price">
                <span className="reg-card__price-amount">$80 <small>MXN</small></span>
                <span className="reg-card__price-label">precio anticipado</span>
              </div>
              <a
                href="https://forms.gle/AB37gPTKFFnn18q5A"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--lg btn--full reg-card__cta reg-card__cta--external"
                id="regExternalBtn"
              >
                Registrarme como externo →
              </a>
            </div>
            {/* Decorative corners */}
            <div className="reg-card__corners" aria-hidden="true">
              <span></span><span></span><span></span><span></span>
            </div>
          </article>
        </div>

        <p className="reg-note reveal-up">
          🎟️ Ambos registros incluyen acceso total al evento, comida, catering y participación en la rifa de premios.
        </p>
      </div>
    </section>
  );
}
