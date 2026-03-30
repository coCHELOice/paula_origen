import { useEffect } from 'react';
import Hero from './components/sections/Hero';
import Paula from './components/sections/Paula';
import QueEsOrigen from './components/sections/QueEsOrigen';
import GaleriaLugar from './components/sections/GaleriaLugar';
import Programa from './components/sections/Programa';
import MujeresDetras from './components/sections/MujeresDetras';
import Reserva from './components/sections/Reserva';
import QueIncluye from './components/sections/QueIncluye';
import FaqCierre from './components/sections/FaqCierre';
import Header from './components/layout/Header';
import StickyCtaMobile from './components/ui/StickyCtaMobile';
import WhatsAppFloat from './components/ui/WhatsAppFloat';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('main > section:not(#hero)').forEach(el => {
      el.classList.add('reveal-on-scroll');
      observer.observe(el);
    });

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
      <div className="grain-overlay"></div>

      <Header />
      <Hero />
      <Paula />
      <QueEsOrigen />
      <GaleriaLugar />
      <Programa />
      <MujeresDetras />
      <Reserva />
      <QueIncluye />
      <FaqCierre />

      <StickyCtaMobile />
      <WhatsAppFloat />
    </main>
  );
}

export default App;
