import React, { useEffect, useRef } from 'react';

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    let width, height, stars;
    let animationFrameId;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initStars();
    };

    const initStars = () => {
      stars = Array.from({ length: window.innerWidth < 768 ? 100 : 250 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.5,
        targetR: Math.random() * 1.5,
        speed: Math.random() * 0.2 + 0.05,
        glow: Math.random() > 0.8
      }));
    };

    const draw = () => {
      ctx.fillStyle = '#0A0A0F';
      ctx.fillRect(0, 0, width, height);

      stars.forEach(star => {
        star.y -= star.speed;
        if (star.y < 0) {
          star.y = height;
          star.x = Math.random() * width;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);

        if (star.glow) {
          ctx.fillStyle = 'rgba(108, 99, 255, 0.8)';
          ctx.shadowBlur = 8;
          ctx.shadowColor = '#6C63FF';
        } else {
          ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
          ctx.shadowBlur = 0;
        }

        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    
    // Defer the heavy animation slightly so it doesn't block the UI thread during mount
    const timeoutId = setTimeout(() => {
      draw();
    }, 100);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section className="hero" id="hero" aria-labelledby="heroHeadline">
      <canvas className="hero__canvas" id="heroCanvas" aria-hidden="true" ref={canvasRef}></canvas>
      <div className="hero__overlay" aria-hidden="true"></div>
      <div className="hero__content">
        <p className="hero__eyebrow reveal-up">SAITC PRESENTA</p>
        <h1 className="hero__title reveal-up" id="heroHeadline">
          <span className="hero__title-dia">DÍA</span>
          <span className="hero__title-itc">ITC</span>
          <span className="hero__title-year">2026</span>
        </h1>
        <p className="hero__tagline reveal-up">El futuro de la tecnología empieza aquí.</p>
        <p className="hero__meta reveal-up">
          <span className="hero__date-badge">21 de Abril · 8:30 AM–5 PM</span>
          <span className="hero__location">ESTOA Nivel B, Salas 5, 7, 8, 9 y 10 · UDEM, San Pedro Garza García</span>
          <span className="hero__ticket-price" aria-label="Costo del boleto: $80 pesos mexicanos — precio anticipado">
            🎟️ Boleto <strong>$80 MXN</strong>
            <span className="hero__ticket-tag">precio anticipado</span>
            <span className="hero__ticket-perks">· Comida &amp; Catering · Acceso total · Rifa de premios</span>
          </span>
        </p>
        <div className="hero__ctas reveal-up">
          <a href="#registro"
            className="btn btn--primary btn--lg btn--starry">Registrarme →
            <div className="star-1"><svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" version="1.1" viewBox="0 0 784.11 815.53"><g><path className="fil0" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"></path></g></svg></div><div className="star-2"><svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" version="1.1" viewBox="0 0 784.11 815.53"><g><path className="fil0" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"></path></g></svg></div><div className="star-3"><svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" version="1.1" viewBox="0 0 784.11 815.53"><g><path className="fil0" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"></path></g></svg></div><div className="star-4"><svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" version="1.1" viewBox="0 0 784.11 815.53"><g><path className="fil0" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"></path></g></svg></div><div className="star-5"><svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" version="1.1" viewBox="0 0 784.11 815.53"><g><path className="fil0" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"></path></g></svg></div><div className="star-6"><svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" version="1.1" viewBox="0 0 784.11 815.53"><g><path className="fil0" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"></path></g></svg></div>
          </a>
          <a href="#agenda" className="btn btn--ghost btn--lg">Ver agenda</a>
        </div>
        <div className="hero__motto reveal-up" aria-label="Inspirando. Transformando. Conectando.">
          <span>--INSPIRANDO.</span>
          <span>----TRANSFORMANDO.</span>
          <span>------CONECTANDO.</span>
        </div>
      </div>
      <div className="hero__scroll-indicator" aria-hidden="true">
        <div className="scroll-dot"></div>
      </div>
    </section>
  );
}
