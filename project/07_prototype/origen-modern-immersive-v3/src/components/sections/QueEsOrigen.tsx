import Section from '../layout/Section';
import { content } from '../../data/origenLanding';

export default function QueEsOrigen() {
  const { queEsOrigen } = content;
  
  return (
    <Section id="que-es" className="bg-brand-bgAlt border-y border-brand-text/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-16 lg:gap-24 mb-32 items-baseline">
          <div className="md:col-span-12 lg:col-span-10 lg:col-start-2">
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-16 tracking-tight text-brand-text leading-tight md:leading-none">
              {queEsOrigen.title}
            </h2>
            <p className="font-sans text-2xl md:text-3xl lg:text-[2.5rem] text-brand-text leading-tight md:leading-[1.4] font-light max-w-5xl italic">
              {queEsOrigen.intro}
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-12 gap-12 border-t border-brand-text/10 pt-24">
          <div className="md:col-span-12 lg:col-span-10 lg:col-start-2">
            <h3 className="font-sans text-xs tracking-[0.3em] uppercase text-brand-muted mb-20 md:mb-24">
              LOS PILARES DE LA EXPERIENCIA
            </h3>
            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-24 items-start">
              {queEsOrigen.pillars.map((pillar, idx) => (
                <li key={idx} className="flex flex-col">
                  <span className="font-sans text-4xl mb-12 opacity-30 font-light">
                    0{idx + 1}
                  </span>
                  <span className="font-serif text-3xl md:text-4xl leading-tight text-brand-text tracking-tight pr-6">
                    {pillar.name}
                  </span>
                </li>
              ))}
            </ul>
            
            <p className="mt-32 font-serif text-2xl md:text-4xl lg:text-5xl text-brand-accent italic border-t border-brand-text/10 pt-24 max-w-4xl">
              {queEsOrigen.closing}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
