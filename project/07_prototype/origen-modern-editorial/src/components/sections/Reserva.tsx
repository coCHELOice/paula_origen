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
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {reserva.options.map((option, idx) => {
            const isSuite = idx === 1;
            return (
              <div 
                key={idx} 
                className={`flex flex-col p-10 md:p-14 ${isSuite ? 'bg-[#EAE8E0]' : 'bg-brand-bgAlt'}`}
              >
                <h3 className="font-sans text-sm md:text-base tracking-[0.15em] uppercase text-brand-text/60 mb-8">
                  {option.title}
                </h3>
                <p className="font-serif text-4xl md:text-5xl mb-8 text-brand-text">
                  {option.price}
                </p>
                <p className="font-sans text-lg text-brand-text/80 leading-relaxed font-light mb-16">
                  {option.desc}
                </p>
                <div className="mt-auto pt-4 border-t border-brand-text/10">
                  <Button variant={isSuite ? 'primary' : 'secondary'} href="#reserva" className={isSuite ? 'w-full' : 'mt-4'}>
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
