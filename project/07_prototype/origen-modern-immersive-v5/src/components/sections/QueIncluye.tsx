import Section from '../layout/Section';
import { content } from '../../data/origenLanding';

export default function QueIncluye() {
  const { queIncluye } = content;

  return (
    <Section id="experiencia" className="bg-brand-bgAlt/50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 md:mb-24 lg:mb-32 max-w-2xl mx-auto">
          <h2 className="font-serif text-[clamp(2rem,7vw,3.75rem)] mb-6 md:mb-10 tracking-tight">
            {queIncluye.title}
          </h2>
          <p className="font-sans text-base sm:text-lg md:text-xl text-brand-muted font-light italic leading-relaxed">
            {queIncluye.intro}
          </p>
        </div>

        {/* Items grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 sm:gap-y-14 md:gap-y-20 gap-x-8 md:gap-x-12 lg:gap-x-20">
          {queIncluye.includes.map((item, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="font-sans text-[10px] sm:text-xs tracking-[0.25em] uppercase text-brand-accent mb-4 sm:mb-6 md:mb-8">
                {item.t}
              </span>
              <p className="font-sans text-base sm:text-lg md:text-xl text-brand-text/80 leading-relaxed font-light">
                {item.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
