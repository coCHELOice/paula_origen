import { useEffect } from 'react';
import Hero from './components/sections/Hero';
import Paula from './components/sections/Paula';
import QueEsOrigen from './components/sections/QueEsOrigen';
import Programa from './components/sections/Programa';
import MujeresDetras from './components/sections/MujeresDetras';
import QueIncluye from './components/sections/QueIncluye';
import Reserva from './components/sections/Reserva';
import FaqCierre from './components/sections/FaqCierre';
import Header from './components/layout/Header';
import VisualInterlude from './components/ui/VisualInterlude';

function App() {
  useEffect(() => {
    // Scroll Reveal functionality mapping to native IntersectionObserver without external heavy libraries
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    // Apply reveal to all top-level sections AND visual interludes
    document.querySelectorAll('main > section:not(#hero), .visual-interlude img').forEach(el => {
      el.classList.add('reveal-on-scroll');
      observer.observe(el);
    });

    // Simple Background Parallax
    const handleScroll = () => {
      const scrollY = window.scrollY;
      document.querySelectorAll('.parallax-bg').forEach((el: any) => {
        const speed = el.dataset.speed || 0.15;
        el.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="relative w-full overflow-x-hidden bg-brand-bg text-brand-text">
      {/* Global Grain Sensory Layer (placeholder div for CSS noise) */}
      <div className="grain-overlay"></div>

      <Header />
      <Hero />
      <Paula />

      {/* PAUSA 1 — Transición desde lo conceptual */}
      <QueEsOrigen />
      <VisualInterlude 
        src="/media/house/portal.avif" 
        alt="Portal hacia ORIGEN" 
        height="75vh"
        maxWidth="1200px"
        className="px-5 sm:px-8"
      />

      <QueIncluye />

      {/* PAUSA 2 — Sensorial / Vida vivida */}
      <VisualInterlude 
        src="/media/house/desayuno.avif" 
        alt="Desayuno pausado y consciente" 
        height="60vh"
        maxWidth="1000px"
        className="px-5 sm:px-8"
      />

      <Programa />
      
      <MujeresDetras />

      {/* PAUSA 3 — Emocional de alto impacto (Habitación Suite) */}
      <VisualInterlude 
        src="/media/house/habitacion-suite.jpg" 
        alt="Habitación Suite — Tu refugio privado" 
        height="85vh"
        maxWidth="100%"
        overlay={0.15}
        className="!my-0 pb-16 md:pb-28 lg:pb-36"
      />

      <Reserva />
      <FaqCierre />
    </main>
  );
}

export default App;
