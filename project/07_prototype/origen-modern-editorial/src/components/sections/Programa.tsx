import Section from '../layout/Section';
import { content } from '../../data/origenLanding';

export default function Programa() {
  const { programa } = content;
  
  return (
    <Section id="programa" className="bg-brand-bgAlt">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 md:mb-28 text-center md:text-left md:w-2/3">
          <h2 className="font-serif text-4xl md:text-5xl mb-8">{programa.title}</h2>
          <p className="font-sans text-lg md:text-xl text-brand-text/80 leading-relaxed font-light">
            {programa.intro}
          </p>
        </div>
        
        <dl className="grid gap-12 md:gap-16">
          {programa.days.map((day, idx) => {
            const [diaNum, titulo] = day.title.split(' — ');
            return (
              <div key={idx} className="grid md:grid-cols-12 gap-4 md:gap-12 relative">
                <dt className="md:col-span-4 flex flex-col pt-2">
                  <span className="font-sans text-sm tracking-[0.15em] uppercase text-brand-muted mb-3">{diaNum}</span>
                  <span className="font-serif text-2xl md:text-3xl leading-snug text-brand-text pr-4">{titulo}</span>
                </dt>
                <dd className="md:col-span-8 md:border-l border-brand-text/10 md:pl-12 pt-2 md:pt-4">
                  <p className="font-sans text-lg md:text-xl text-brand-text/70 leading-relaxed font-light">
                    {day.desc}
                  </p>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </Section>
  );
}
