import React, { useEffect } from 'react';
import { Analytics } from "@vercel/analytics/react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBand from './components/StatsBand';
import Speakers from './components/Speakers';
import Agenda from './components/Agenda';
import Sponsors from './components/Sponsors';
import Faqs from './components/Faqs';
import Registration from './components/Registration';
import Footer from './components/Footer';

// Splash Screen Component
function SplashScreen({ onDone }) {
  useEffect(() => {
    // Lock scroll
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = '0';
    document.body.style.width = '100%';

    const splash = document.getElementById('introSplash');
    
    const t1 = setTimeout(() => {
      splash?.classList.add('expanding');
      const t2 = setTimeout(() => {
        splash?.classList.add('done');
        // Restore scroll
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        
        onDone();
      }, 1800);
      return () => clearTimeout(t2);
    }, 2400);

    return () => {
      clearTimeout(t1);
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
    };
  }, [onDone]);

  return (
    <div className="intro-splash" id="introSplash">
      <div className="intro-orb" id="introOrb">
        <span className="intro-orb-label">SAITC PRESENTA</span>
        <span className="intro-orb-title">DÍA<span style={{color:'var(--color-lime)'}}>ITC</span></span>
        <span className="intro-orb-sub">2026</span>
      </div>
    </div>
  );
}

// Global Particles Background
function GlobalParticles() {
  return (
    <div id="starfield-bg" aria-hidden="true" style={{position:'fixed', inset:0, zIndex:0, pointerEvents:'none', overflow:'hidden'}}>
      <div id="bg-stars"></div>
      <div id="bg-stars2"></div>
      <div id="bg-stars3"></div>
    </div>
  );
}

function App() {
  const [showSplash, setShowSplash] = React.useState(true);

  // Global Scroll Reveal Hook
  useEffect(() => {
    if (showSplash) return; // Wait until splash is done to reveal
    
    // Trigger Hero Reveal right away
    document.querySelectorAll('.hero .reveal-up').forEach((el, i) => {
      setTimeout(() => {
        el.style.transitionDelay = '0ms';
        el.classList.add('visible');
      }, i * 110);
    });

    const els = document.querySelectorAll('.reveal-up:not(.hero .reveal-up)');
    if (!els.length) return;

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const siblings = Array.from(entry.target.parentElement?.children || []);
          const index = siblings.indexOf(entry.target);
          const delay = index > -1 ? index * 60 : 0;
          entry.target.style.transitionDelay = `${Math.min(delay, 400)}ms`;
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });

    els.forEach(el => io.observe(el));

    return () => {
      els.forEach(el => io.unobserve(el));
      io.disconnect();
    };
  }, [showSplash]);

  // Section Effects Hook
  useEffect(() => {
    const handleScroll = () => {
      const orbs = document.querySelectorAll('.section-orb');
      const sy = window.scrollY;
      orbs.forEach((orb, i) => {
        const dir  = i % 2 === 0 ? 1 : -1;
        const speed = 0.04 + (i % 3) * 0.015;
        orb.style.transform = `translateY(${dir * sy * speed}px)`;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Image Fallback Hook
  useEffect(() => {
    const spinner = () => `
      <div class="img-spinner-wrap" aria-hidden="true">
        <div class="img-spinner-bg"></div>
        <div class="img-spinner"></div>
      </div>`;

    const handleImgError = (e) => {
      const img = e.target;
      if (img.tagName === 'IMG' && !img.dataset.failed) {
        img.dataset.failed = true;
        const wrap = document.createElement('div');
        wrap.innerHTML = spinner();
        const el = wrap.firstElementChild;
        el.style.width  = img.width  ? img.width  + 'px' : '96px';
        el.style.height = img.height ? img.height + 'px' : '96px';
        img.parentNode?.replaceChild(el, img);
      }
    };

    document.addEventListener('error', handleImgError, true);
    return () => document.removeEventListener('error', handleImgError, true);
  }, []);

  return (
    <>
      <Analytics />
      {showSplash && <SplashScreen onDone={() => setShowSplash(false)} />}
      <GlobalParticles />
      
      <div style={{ position: 'relative', zIndex: 1, opacity: showSplash ? 0 : 1, transition: 'opacity 0.4s ease' }}>
        <Navbar />
        <main id="mainContent" tabIndex="-1">
          <Hero />
          <StatsBand />
          <Registration />
          <div className="section-orb section-orb--1" aria-hidden="true"></div>
          <Speakers />
          <div className="section-orb section-orb--2" aria-hidden="true"></div>
          <Agenda />
          <div className="section-orb section-orb--3" aria-hidden="true"></div>
          <Sponsors />
          <div className="section-orb section-orb--4" aria-hidden="true"></div>
          <Faqs />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
