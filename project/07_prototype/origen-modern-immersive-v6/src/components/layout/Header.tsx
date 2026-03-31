import { useState, useEffect } from 'react';
import Button from '../ui/Button';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { href: '#que-es', label: 'Qué es' },
    { href: '#programa', label: 'Programa' },
    { href: '#mujeres-detras', label: 'El equipo' },
    { href: '#reserva', label: 'Reserva' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#FAF9F6]/92 backdrop-blur-md border-b border-brand-text/10 shadow-sm'
            : 'bg-[#FAF9F6]/80 backdrop-blur-md border-b border-brand-text/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 h-16 sm:h-18 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="font-serif text-lg sm:text-xl tracking-wide text-brand-text z-10">
            ORIGEN
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-sans text-brand-text/70 hover:text-brand-text transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button variant="primary" href="#reserva" className="!py-2 !px-6 text-xs">
              Reserva tu lugar
            </Button>
          </div>

          {/* Mobile: Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] z-10"
          >
            <span
              className={`block w-6 h-[1.5px] bg-brand-text transition-all duration-300 origin-center ${
                menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] bg-brand-text transition-all duration-300 ${
                menuOpen ? 'opacity-0 scale-x-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] bg-brand-text transition-all duration-300 origin-center ${
                menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-400 ${
          menuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 bg-brand-text/30 backdrop-blur-sm transition-opacity duration-300 ${
            menuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />
        {/* Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[80vw] max-w-xs bg-[#FAF9F6] shadow-2xl flex flex-col pt-24 pb-12 px-8 transition-transform duration-400 ease-out ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <nav className="flex flex-col gap-2 mb-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-sans text-base text-brand-text/80 hover:text-brand-text py-3 border-b border-brand-text/8 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <Button
            variant="primary"
            href="#reserva"
            className="w-full text-center"
            onClick={() => setMenuOpen(false)}
          >
            Reserva tu lugar
          </Button>
        </div>
      </div>
    </>
  );
}
