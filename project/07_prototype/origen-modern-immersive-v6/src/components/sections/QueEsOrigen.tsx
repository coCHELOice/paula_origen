import Section from '../layout/Section';
import { content } from '../../data/origenLanding';

export default function QueEsOrigen() {
  const { queEsOrigen } = content;

  return (
    <Section id="que-es" className="bg-brand-bgAlt border-y border-brand-text/5">
      <div className="max-w-6xl mx-auto">

        {/* Headline + intro */}
        <div className="mb-16 md:mb-24 lg:mb-32">
          <h2 className="font-serif text-[clamp(2.4rem,8vw,6rem)] mb-8 md:mb-12 lg:mb-16 tracking-tight text-brand-text leading-[1.0]">
            {queEsOrigen.title}
          </h2>
          <p className="font-sans text-[clamp(1.05rem,3.5vw,2.2rem)] text-brand-text leading-[1.5] font-light max-w-4xl italic">
            {queEsOrigen.intro}
          </p>
        </div>

        {/* Closing quote */}
        <p className="font-serif text-[clamp(1.2rem,3.5vw,2.75rem)] text-brand-accent italic border-t border-brand-text/10 pt-12 md:pt-20 max-w-4xl mb-16 md:mb-24">
          {queEsOrigen.closing}
        </p>

        {/* Pilares — discretos, al final */}
        <div className="border-t border-brand-text/8 pt-8 md:pt-12">
          <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-brand-muted block mb-6">
            Los pilares de la experiencia
          </span>
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {queEsOrigen.pillars.map((pillar, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="text-brand-accent/40 font-sans text-[10px]">0{idx + 1}</span>
                <span className="font-sans text-sm text-brand-text/60 font-light">{pillar.name}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </Section>
  );
}
