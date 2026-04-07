import React from 'react';

export default function Sponsors() {
  return (
    <>
      {/* ═══════════ SPONSORS — LOGO CARDS ═══════════ */}
      <section className="section sponsors" id="sponsors" aria-labelledby="sponsorsHeading">
        <div className="container">
          <div className="section-header reveal-up">
            <span className="section-tag">04 / SPONSORS</span>
            <h2 className="section-title" id="sponsorsHeading">Patrocinadores</h2>
            <p className="section-subtitle">Empresas que hacen posible el Día ITC 2026.</p>
          </div>

          <div className="sp-grid reveal-up">

            {/* Accenture */}
            <a href="https://www.accenture.com" target="_blank" rel="noopener noreferrer"
               className="sp-card sp-card--acc" aria-label="Accenture">
              <b></b>
              <div className="sp-card__logo">
                <span style={{fontSize: '1.15rem', fontWeight: 900, letterSpacing: '-0.02em', color: '#A100FF'}}>Accenture</span>
              </div>
              <div className="sp-content">
                <p className="sp-title">Accenture<br/><span>Patrocinador Oficial</span></p>
              </div>
            </a>

            {/* SAP */}
            <div className="sp-card sp-card--sap" aria-label="SAP">
              <b></b>
              <div className="sp-card__logo">
                <span style={{fontSize: '2.2rem', fontWeight: 900, letterSpacing: '-0.04em', color: '#008FD3'}}>SAP</span>
              </div>
              <div className="sp-content">
                <p className="sp-title">SAP<br/><span>Patrocinador Oficial</span></p>
              </div>
            </div>

            {/* Hexaware */}
            <a href="https://www.hexaware.com" target="_blank" rel="noopener noreferrer"
               className="sp-card sp-card--hex" aria-label="Hexaware Technologies">
              <b></b>
              <div className="sp-card__logo">
                <span style={{fontSize: '1.3rem', fontWeight: 900, letterSpacing: '0.02em', color: '#06b6d4'}}>HEXAWARE</span>
              </div>
              <div className="sp-content">
                <p className="sp-title">Hexaware<br/><span>Patrocinador Oficial</span></p>
              </div>
            </a>

            {/* AWS */}
            <a href="https://www.instagram.com/aws.cloud.club.udem/" target="_blank" rel="noopener noreferrer"
               className="sp-card sp-card--aws" aria-label="Club AWS UDEM">
              <b></b>
              <div className="sp-card__logo">
                <span style={{fontSize: '1.8rem', fontWeight: 900, letterSpacing: '-0.02em', color: '#FF9900'}}>AWS</span>
              </div>
              <div className="sp-content">
                <p className="sp-title">Club AWS<br/><span>Patrocinador Oficial</span></p>
              </div>
            </a>

            {/* Snowflake */}
            <a href="https://www.snowflake.com" target="_blank" rel="noopener noreferrer"
               className="sp-card sp-card--snow" aria-label="Snowflake">
              <b></b>
              <div className="sp-card__logo">
                <span style={{fontSize: '1.25rem', fontWeight: 900, letterSpacing: '-0.02em', color: '#29ABE2'}}>Snowflake</span>
              </div>
              <div className="sp-content">
                <p className="sp-title">Snowflake<br/><span>Patrocinador Oficial</span></p>
              </div>
            </a>

            {/* Doña Tota */}
            <div className="sp-card sp-card--tota" aria-label="Doña Tota">
              <b></b>
              <div className="sp-card__logo">
                <span style={{fontSize: '1.1rem', fontWeight: 900, letterSpacing: '0.02em', color: '#F59E0B', textAlign: 'center', lineHeight: 1.2}}>Doña<br/>Tota</span>
              </div>
              <div className="sp-content">
                <p className="sp-title">Doña Tota<br/><span>Patrocinador Oficial</span></p>
              </div>
            </div>

            {/* OFF-XILE */}
            <div className="sp-card sp-card--offxile" aria-label="OFF-XILE">
              <b></b>
              <div className="sp-card__logo">
                <span style={{fontSize: '1.1rem', fontWeight: 900, letterSpacing: '0.06em', color: '#C8FF00', textAlign: 'center', lineHeight: 1.2}}>OFF-XILE</span>
              </div>
              <div className="sp-content">
                <p className="sp-title">OFF-XILE<br/><span>Patrocinador Oficial</span></p>
              </div>
            </div>

          </div>

          {/* CTA para nuevos patrocinadores */}
          <div className="sp-cta-wrap reveal-up">
            <p className="sp-cta-text">¿Tu empresa quiere ser patrocinadora del evento?</p>
            <a
              href="https://www.instagram.com/diaitc/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn sp-cta-btn"
              aria-label="Contáctanos en Instagram para ser patrocinador"
              id="sponsorsInstagramCta"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
              Contáctanos en Instagram
            </a>
          </div>

        </div>
      </section>

      {/* ═══════════ UBICACIÓN — CIRCULAR MAP ═══════════ */}
      <section className="section ubicacion" id="ubicacion" aria-labelledby="ubicacionHeading">
        <div className="container">
          <div className="section-header section-header--left reveal-up">
            <span className="section-tag">05 / UBICACIÓN</span>
            <h2 className="section-title" id="ubicacionHeading">Ubicación</h2>
            <p className="section-subtitle section-subtitle--left">Nos vemos en <span className="text-accent">San Pedro Garza
                García,</span> <span className="text-lime">Nuevo León</span></p>
          </div>

          <div className="ubicacion-layout reveal-up">
            {/* Circular map bubble */}
            <div className="ubicacion-globe-wrap">
              <div className="ubicacion-venue-label" aria-hidden="true">UDEM — CAMPUS SAN PEDRO<br/>ESTOA NIVEL B, SALAS 7, 8 Y 9
              </div>
              <div className="ubicacion-globe">
                <iframe className="ubicacion-iframe" title="Mapa UDEM Campus San Pedro" loading="lazy"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.3!2d-100.3942!3d25.6607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662953ec6b7af35%3A0x5a5a5a5a5a5a5a5a!2sUniversidad+de+Monterrey!5e0!3m2!1ses!2smx!4v1680000000000"
                  allowFullScreen="" aria-label="Mapa de UDEM San Pedro Garza García"></iframe>
              </div>
              <div className="ubicacion-pin-icon" aria-hidden="true">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                    fill="var(--color-accent)" />
                </svg>
              </div>
            </div>

            {/* Info panel */}
            <div className="ubicacion-info-panel">
              <div className="ubicacion-info-row">
                <span className="ubicacion-info-icon">🏛️</span>
                <div>
                  <p className="ubicacion-info-label">Venue</p>
                  <p className="ubicacion-info-value">UDEM — ESTOA Nivel B</p>
                  <p className="ubicacion-info-sub">Salas 7, 8 y 9</p>
                </div>
              </div>
              <div className="ubicacion-info-row">
                <span className="ubicacion-info-icon">📍</span>
                <div>
                  <p className="ubicacion-info-label">Dirección</p>
                  <p className="ubicacion-info-value">Ave. Ignacio Morones Prieto 4500 Pte.</p>
                  <p className="ubicacion-info-sub">San Pedro Garza García, N.L.</p>
                </div>
              </div>
              <div className="ubicacion-info-row">
                <span className="ubicacion-info-icon">📅</span>
                <div>
                  <p className="ubicacion-info-label">Fecha y hora</p>
                  <p className="ubicacion-info-value">21 de Abril 2026</p>
                  <p className="ubicacion-info-sub">9:00 AM – 5:00 PM</p>
                </div>
              </div>
              <a href="https://maps.google.com/?q=UDEM+San+Pedro+Garza+Garcia+Nuevo+Leon" target="_blank"
                rel="noopener noreferrer" className="btn btn--primary btn--lg ubicacion-cta btn--starry"><div className="star-1"><svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" version="1.1" viewBox="0 0 784.11 815.53"><g><path className="fil0" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"></path></g></svg></div><div className="star-2"><svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" version="1.1" viewBox="0 0 784.11 815.53"><g><path className="fil0" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"></path></g></svg></div><div className="star-3"><svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" version="1.1" viewBox="0 0 784.11 815.53"><g><path className="fil0" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"></path></g></svg></div><div className="star-4"><svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" version="1.1" viewBox="0 0 784.11 815.53"><g><path className="fil0" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"></path></g></svg></div><div className="star-5"><svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" version="1.1" viewBox="0 0 784.11 815.53"><g><path className="fil0" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"></path></g></svg></div><div className="star-6"><svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" version="1.1" viewBox="0 0 784.11 815.53"><g><path className="fil0" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"></path></g></svg></div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ COLABORADORES — LOGO CARDS ═══════════ */}
      <section className="section colaboradores" id="colaboradores" aria-labelledby="colaboradoresHeading">
        <div className="container">
          <div className="section-header reveal-up">
            <span className="section-tag">06 / COMUNIDAD</span>
            <h2 className="section-title section-title--sm" id="colaboradoresHeading">Colaboradores &amp; Comunidad</h2>
            <p className="section-subtitle">La red estudiantil que hace posible este evento.</p>
          </div>

          <div className="colab-grid reveal-up">

            <div className="colab-card">
              <div className="colab-card__img" aria-hidden="true">
                <span style={{fontSize: '1.6rem', fontWeight: 800, letterSpacing: '-.02em', color: '#0078D4'}}>ACM</span>
              </div>
              <span className="colab-card__name">ACM — UDEM</span>
              <span className="colab-card__role">Association for Computing Machinery · UDEM</span>
            </div>

            <div className="colab-card">
              <div className="colab-card__img" aria-hidden="true">
                <span style={{fontSize: '1.6rem', fontWeight: 800, letterSpacing: '-.02em', color: '#E53935'}}>HERC</span>
              </div>
              <span className="colab-card__name">HERC UDEM</span>
              <span className="colab-card__role">Human Exploration Rover Challenge · UDEM</span>
            </div>

            <div className="colab-card">
              <div className="colab-card__img" aria-hidden="true">
                <span style={{fontSize: '1.6rem', fontWeight: 800, letterSpacing: '-.02em', color: 'var(--color-cyan)'}}>ERA</span>
              </div>
              <span className="colab-card__name">ERA UDEM</span>
              <span className="colab-card__role">Engineering Research Association · UDEM</span>
            </div>

            <div className="colab-card">
              <div className="colab-card__img" aria-hidden="true">
                <span style={{fontSize: '1.1rem', fontWeight: 800, letterSpacing: '-.02em', color: 'var(--color-lime)', textAlign: 'center', lineHeight: 1.2}}>CPC</span>
              </div>
              <span className="colab-card__name">Club de Prog. Competitiva</span>
              <span className="colab-card__role">Programación Competitiva · UDEM</span>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
