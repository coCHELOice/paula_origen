import Section from '../layout/Section';
import { content } from '../../data/origenLanding';

export default function QueIncluye() {
  const { queIncluye } = content;
  
  return (
    <Section id="que-incluye" className="bg-brand-bgAlt/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-24 md:mb-32">
          <h2 className="font-serif text-5xl md:text-6xl mb-10 tracking-tight">{queIncluye.title}</h2>
          <p className="font-sans text-xl md:text-2xl text-brand-muted font-light italic">
            {queIncluye.intro}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-12 lg:gap-x-20">
          {queIncluye.includes.map((item, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="font-sans text-xs tracking-[0.25em] uppercase text-brand-accent mb-8">
                {item.t}
              </span>
              <p className="font-sans text-lg md:text-xl text-brand-text/80 leading-relaxed font-light">
                {item.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
