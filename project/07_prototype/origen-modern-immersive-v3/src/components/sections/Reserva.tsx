import Section from '../layout/Section';
import Button from '../ui/Button';
import { content } from '../../data/origenLanding';

export default function Reserva() {
  const { reserva } = content;
  
  return (
    <Section id="reserva" className="bg-brand-bgAlt/30 border-t border-brand-text/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-24 md:mb-32 text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-5xl md:text-6xl mb-12 tracking-tight">{reserva.title}</h2>
          <div className="bg-brand-accent/5 border border-brand-accent/10 p-10 md:p-14 mb-16">
            <p className="font-sans text-xl md:text-2xl text-brand-text/80 leading-relaxed font-light italic">
              {reserva.intro}
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {reserva.options.map((option, idx) => (
            <div 
              key={idx} 
              className="flex flex-col bg-brand-bg border border-brand-text/5 overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-700"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img 
                  src={option.img} 
                  alt={option.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-brand-text/10 group-hover:bg-transparent transition-colors duration-700"></div>
              </div>
              <div className="px-10 py-12 md:px-12 md:py-16 flex flex-col flex-1">
                <span className="font-sans text-xs tracking-[0.25em] uppercase text-brand-muted mb-8">
                  {option.title}
                </span>
                <div className="mb-10">
                  <p className="font-serif text-4xl sm:text-5xl text-brand-text tracking-tight leading-none mb-3">
                    {option.price}
                  </p>
                  <span className="font-sans text-sm text-brand-muted tracking-wide">
                    por persona · todo incluido
                  </span>
                </div>
                <p className="font-sans text-lg text-brand-text/70 leading-relaxed font-light mb-12">
                  {option.desc}
                </p>
                <div className="mt-auto">
                  <Button
                    variant="primary"
                    href="#reserva"
                    className="w-full text-center py-5"
                  >
                    {reserva.ctaPrimary}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cupos Limitados / Contacto */}
        <div className="mt-24 md:mt-32 border-t border-brand-text/10 pt-20 text-center max-w-2xl mx-auto">
          <p className="font-sans text-lg md:text-xl text-brand-text/80 mb-10 leading-relaxed">
            Un grupo íntimo y reducido para cuidar cada detalle del proceso.
          </p>
          <p className="font-sans text-sm tracking-[0.1em] text-brand-muted mb-12 uppercase">
            Más información o reservas directas al: <span className="text-brand-text font-medium">+56 9 9799 2863</span>
          </p>
        </div>
      </div>
    </Section>
  );
}
