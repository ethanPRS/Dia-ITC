import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className={`nav ${isScrolled ? 'scrolled' : ''}`} id="nav" role="navigation" aria-label="Navegación principal">
        <a href="#" className="nav__brand" aria-label="Volver al inicio" onClick={closeMenu}>
          <span className="nav__logo">DÍA<span className="accent">ITC</span></span>
          <span className="nav__year">2026</span>
        </a>
        <button 
          className={`nav__hamburger ${isOpen ? 'open' : ''}`} 
          id="navHamburger" 
          aria-label="Abrir menú" 
          aria-expanded={isOpen}
          aria-controls="navMenu"
          onClick={toggleMenu}
        >
          <span></span><span></span><span></span>
        </button>
        <ul className={`nav__menu ${isOpen ? 'open' : ''}`} id="navMenu" role="list">
          <li>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeKawtS5thfRsITdo1GixjfXJAVAwKvEn2UldyQeDGq9feR-A/viewform" target="_blank" rel="noopener noreferrer" className="nav__link" onClick={closeMenu}>Registro</a>
          </li>
          <li><a href="#speakers" className="nav__link" onClick={closeMenu}>Speakers</a></li>
          <li><a href="#agenda" className="nav__link" onClick={closeMenu}>Agenda</a></li>
          <li><a href="#sponsors" className="nav__link" onClick={closeMenu}>Sponsors</a></li>
          <li><a href="#ubicacion" className="nav__link" onClick={closeMenu}>Ubicación</a></li>
          <li><a href="#faqs" className="nav__link" onClick={closeMenu}>FAQs</a></li>
          <li>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeKawtS5thfRsITdo1GixjfXJAVAwKvEn2UldyQeDGq9feR-A/viewform" target="_blank" rel="noopener noreferrer" className="btn--gradient-border nav__cta" onClick={closeMenu}>
              <strong>REGISTRARME</strong>
            </a>
          </li>
        </ul>
      </nav>

      <a 
        href="https://docs.google.com/forms/d/e/1FAIpQLSeKawtS5thfRsITdo1GixjfXJAVAwKvEn2UldyQeDGq9feR-A/viewform" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="sticky-cta"
        id="stickyCTA" 
        aria-label="Registrarme en el evento"
        style={{ display: isScrolled ? '' : 'none' }}
      >
        <strong>REGISTRARME →</strong>
        <div className="sticky-stars-container">
          <div className="sticky-stars"></div>
        </div>
        <div className="sticky-glow">
          <div className="sticky-glow-circle"></div>
          <div className="sticky-glow-circle"></div>
        </div>
      </a>
    </>
  );
}
