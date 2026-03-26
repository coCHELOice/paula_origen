import Section from '../layout/Section';
import { content } from '../../data/origenLanding';

export default function LaExperiencia() {
  const { laExperiencia } = content;
  
  return (
    <Section className="bg-brand-bgAlt">
      <div className="grid md:grid-cols-12 gap-12 lg:gap-24">
        <div className="md:col-span-4 lg:col-span-5">
          <h2 className="font-serif text-4xl md:text-5xl mb-8">{laExperiencia.title}</h2>
          <p className="font-sans text-lg md:text-xl text-brand-text/80 leading-relaxed font-light">
            {laExperiencia.intro}
          </p>
        </div>
        <div className="md:col-span-8 lg:col-span-7 mt-8 md:mt-0">
          <ul className="space-y-12">
            {laExperiencia.pillars.map((pillar, idx) => (
              <li key={idx} className="border-t border-brand-text/10 pt-8 first:border-0 first:pt-0">
                <p className="font-sans text-lg md:text-xl leading-relaxed">
                  <span className="font-medium mr-2 block mb-2 md:inline md:mb-0">{pillar.name}</span>
                  <span className="text-brand-text/90 font-light">{pillar.desc}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
