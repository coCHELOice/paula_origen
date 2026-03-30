import Button from '../ui/Button';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF9F6]/80 backdrop-blur-md border-b border-brand-text/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <a href="#" className="font-serif text-xl tracking-wide text-brand-text">ORIGEN</a>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#que-es" className="text-sm font-sans text-brand-text/70 hover:text-brand-text transition-colors">Qué es</a>
          <a href="#experiencia" className="text-sm font-sans text-brand-text/70 hover:text-brand-text transition-colors">La experiencia</a>
          <a href="#programa" className="text-sm font-sans text-brand-text/70 hover:text-brand-text transition-colors">Programa</a>
        </nav>

        <Button variant="primary" href="#reserva" className="!py-2 !px-6 text-xs sm:text-sm">
          Reserva tu lugar
        </Button>
      </div>
    </header>
  );
}
