
import { content } from '../../data/origenLanding';

export default function LaExperiencia() {
  const { laExperiencia } = content;
  
  return (
    <section id="experiencia" className="py-24 md:py-32 px-6 w-full bg-[#EBE9E2]">
      <div className="mx-auto max-w-7xl grid md:grid-cols-12 gap-16 lg:gap-24">
        <div className="md:col-span-5 lg:col-span-5 relative">
          <div className="sticky top-32">
            <h2 className="font-serif text-5xl md:text-6xl mb-10 text-brand-text leading-[1.05]">{laExperiencia.title}</h2>
            <p className="font-sans text-[18px] md:text-[20px] text-brand-text/70 leading-[1.6] font-light">
              {laExperiencia.intro}
            </p>
          </div>
        </div>
        <div className="md:col-span-7 lg:col-span-7 mt-8 md:mt-0">
          <ul className="space-y-16">
            {laExperiencia.pillars.map((pillar, idx) => (
              <li key={idx} className="relative before:absolute before:-left-6 before:top-2 before:h-16 before:w-[1px] before:bg-brand-accent/30 pl-2 md:pl-0 md:before:hidden">
                <p className="font-sans text-[18px] md:text-[20px] leading-[1.6]">
                  <span className="font-serif font-medium text-2xl md:text-3xl text-brand-text block mb-4">{pillar.name}</span>
                  <span className="text-brand-text/80 font-light block md:max-w-xl">{pillar.desc}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
