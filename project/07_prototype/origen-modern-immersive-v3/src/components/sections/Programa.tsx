import Section from '../layout/Section';
import { content } from '../../data/origenLanding';

export default function Programa() {
  const { programa } = content;
  
  return (
    <Section id="programa" className="bg-brand-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-32 md:mb-48 text-center max-w-2xl mx-auto px-4">
          <h2 className="font-serif text-5xl md:text-7xl mb-12 tracking-tight">{programa.title}</h2>
          <p className="font-sans text-xl md:text-2xl text-brand-text/70 leading-relaxed font-light italic">
            {programa.intro}
          </p>
        </div>
        
        <div className="grid gap-24 md:gap-40 lg:gap-48">
          {programa.days.map((day, idx) => {
            const [diaNum, titulo] = day.title.split(' — ');
            return (
              <div key={idx} className="grid md:grid-cols-12 gap-12 md:gap-24 relative group">
                <div className="md:col-start-2 md:col-span-12 flex flex-col md:flex-row items-baseline gap-12 lg:gap-24">
                  <div className="md:w-1/3 flex flex-col pt-2 shrink-0">
                    <span className="font-sans text-sm tracking-[0.3em] uppercase text-brand-accent mb-6 font-medium">
                      {diaNum}
                    </span>
                    <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-brand-text pr-4 mb-10 md:mb-12">
                      {titulo}
                    </h3>
                    <blockquote className="font-sans text-lg md:text-xl text-brand-muted italic leading-relaxed font-light border-l-2 border-brand-accent/20 pl-8 transition-transform duration-500 group-hover:translate-x-2">
                      {day.quote}
                    </blockquote>
                  </div>
                  <div className="md:w-2/3 md:pl-16 pt-2 md:pt-4">
                    <p className="font-sans text-xl md:text-2xl text-brand-text/80 leading-[1.7] font-light max-w-3xl">
                      {day.desc}
                    </p>
                  </div>
                </div>
                {/* Visual indicator (optional line/marker) */}
                <div className="absolute -left-4 md:-left-12 top-0 bottom-0 w-[1px] bg-brand-accent/5 overflow-hidden hidden md:block">
                  <div className="h-full w-full origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-1000 bg-brand-accent/30"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
