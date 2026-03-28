import Section from '../layout/Section';
import { content } from '../../data/origenLanding';

export default function QueEsOrigen() {
  const { queEsOrigen } = content;

  return (
    <Section id="que-es" className="bg-brand-bgAlt border-y border-brand-text/5">
      <div className="max-w-6xl mx-auto">
        {/* Headline + intro */}
        <div className="lg:col-span-10 lg:col-start-2 mb-16 md:mb-24 lg:mb-32">
          <h2 className="font-serif text-[clamp(2.4rem,8vw,6rem)] mb-8 md:mb-12 lg:mb-16 tracking-tight text-brand-text leading-[1.0]">
            {queEsOrigen.title}
          </h2>
          <p className="font-sans text-[clamp(1.05rem,3.5vw,2.2rem)] text-brand-text leading-[1.5] font-light max-w-4xl italic">
            {queEsOrigen.intro}
          </p>
        </div>

        {/* Pillars */}
        <div className="border-t border-brand-text/10 pt-12 md:pt-20 lg:pt-24">
          <h3 className="font-sans text-[10px] sm:text-xs tracking-[0.3em] uppercase text-brand-muted mb-10 md:mb-16 lg:mb-20">
            LOS PILARES DE LA EXPERIENCIA
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 md:gap-x-16 gap-y-12 md:gap-y-16 lg:gap-y-24 items-start">
            {queEsOrigen.pillars.map((pillar, idx) => (
              <li key={idx} className="flex flex-col">
                <span className="font-sans text-3xl sm:text-4xl mb-6 md:mb-10 lg:mb-12 opacity-25 font-light">
                  0{idx + 1}
                </span>
                <span className="font-serif text-2xl sm:text-3xl md:text-4xl leading-tight text-brand-text tracking-tight pr-4">
                  {pillar.name}
                </span>
              </li>
            ))}
          </ul>

          {/* Closing quote */}
          <p className="mt-16 md:mt-24 lg:mt-32 font-serif text-[clamp(1.2rem,3.5vw,2.75rem)] text-brand-accent italic border-t border-brand-text/10 pt-12 md:pt-20 lg:pt-24 max-w-4xl">
            {queEsOrigen.closing}
          </p>
        </div>
      </div>
    </Section>
  );
}
