import { useEffect } from 'react';
import Hero from './components/sections/Hero';
import QueEsOrigen from './components/sections/QueEsOrigen';
import ParaQuienEs from './components/sections/ParaQuienEs';
import LaExperiencia from './components/sections/LaExperiencia';
import ElLugar from './components/sections/ElLugar';
import Programa from './components/sections/Programa';
import PaulaEquipo from './components/sections/PaulaEquipo';
import Reserva from './components/sections/Reserva';
import FaqCierre from './components/sections/FaqCierre';
import Header from './components/layout/Header';

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

    // Apply reveal to all top-level sections except hero
    document.querySelectorAll('main > section:not(#hero), #que-es > section, main > div > section').forEach(el => {
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
      {/* Global Grain Sensory Layer */}
      <div className="grain-overlay"></div>

      <Header />
      <Hero />
      <div id="que-es">
        <QueEsOrigen />
      </div>
      <ParaQuienEs />
      <LaExperiencia />
      <ElLugar />
      <Programa />
      <PaulaEquipo />
      <Reserva />
      <FaqCierre />
    </main>
  );
}

export default App;
