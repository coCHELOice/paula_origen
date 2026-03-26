import Section from '../layout/Section';
import Button from '../ui/Button';
import { content } from '../../data/origenLanding';

export default function Reserva() {
  const { reserva } = content;
  
  return (
    <Section id="reserva" className="border-t border-brand-text/10">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 md:mb-24 text-center max-w-2xl mx-auto px-4">
          <h2 className="font-serif text-4xl md:text-5xl mb-8">{reserva.title}</h2>
          <p className="font-sans text-lg md:text-xl text-brand-text/80 leading-relaxed font-light">
            {reserva.intro}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-[1px] bg-brand-text/8">
          {reserva.options.map((option, idx) => {
            const isSuite = idx === 1;
            return (
              <div 
                key={idx} 
                className={`flex flex-col px-8 py-12 sm:px-10 sm:py-14 md:px-14 md:py-20 ${isSuite ? 'bg-brand-bgAlt' : 'bg-white/40'}`}
              >
                <span className="font-sans text-[11px] md:text-xs tracking-[0.2em] uppercase text-brand-muted mb-10">
                  {option.title}
                </span>
                <div className="mb-10">
                  <p className="font-serif text-4xl sm:text-5xl md:text-6xl text-brand-text tracking-tight leading-none">
                    {option.price}
                  </p>
                  <span className="font-sans text-xs text-brand-muted mt-2 block tracking-wide">
                    por persona · todo incluido
                  </span>
                </div>
                <p className="font-sans text-base md:text-lg text-brand-text/70 leading-relaxed font-light mb-auto">
                  {option.desc}
                </p>
                <div className="pt-12">
                  <Button
                    variant="primary"
                    href="#reserva"
                    className="w-full text-center"
                  >
                    {reserva.ctaPrimary}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
