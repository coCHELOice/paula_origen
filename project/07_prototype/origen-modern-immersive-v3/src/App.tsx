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
    document.querySelectorAll('main > section:not(#hero)').forEach(el => {
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
      <QueEsOrigen />
      <Programa />
      <MujeresDetras />
      <QueIncluye />
      <Reserva />
      <FaqCierre />
    </main>
  );
}

export default App;
