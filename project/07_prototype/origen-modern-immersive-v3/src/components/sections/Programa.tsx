import Section from '../layout/Section';
import { content } from '../../data/origenLanding';

export default function Programa() {
  const { programa } = content;

  return (
    <Section id="programa" className="bg-brand-bg">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-14 md:mb-28 lg:mb-40 text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-[clamp(2rem,7vw,4.5rem)] mb-6 md:mb-12 tracking-tight">
            {programa.title}
          </h2>
          <p className="font-sans text-base sm:text-lg md:text-xl text-brand-text/70 leading-relaxed font-light italic">
            {programa.intro}
          </p>
        </div>

        {/* Days */}
        <div className="flex flex-col gap-14 md:gap-28 lg:gap-40">
          {programa.days.map((day, idx) => {
            const [diaNum, titulo] = day.title.split(' — ');
            return (
              <div key={idx} className="relative group">
                {/* Vertical line indicator – desktop only */}
                <div className="absolute -left-4 md:-left-10 top-0 bottom-0 w-[1px] bg-brand-accent/5 overflow-hidden hidden md:block">
                  <div className="h-full w-full origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-1000 bg-brand-accent/30" />
                </div>

                <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16 lg:gap-24">
                  {/* Left: day label + title + quote */}
                  <div className="flex flex-col md:w-[38%] lg:w-1/3 shrink-0 pt-1">
                    <span className="font-sans text-xs tracking-[0.3em] uppercase text-brand-accent mb-4 md:mb-6 font-medium">
                      {diaNum}
                    </span>
                    <h3 className="font-serif text-[clamp(1.6rem,5vw,3.25rem)] leading-[1.05] text-brand-text pr-2 mb-6 md:mb-10 lg:mb-12">
                      {titulo}
                    </h3>
                    <blockquote className="font-sans text-base md:text-lg text-brand-muted italic leading-relaxed font-light border-l-2 border-brand-accent/20 pl-5 md:pl-8 transition-transform duration-500 group-hover:translate-x-1">
                      {day.quote}
                    </blockquote>
                  </div>

                  {/* Right: description */}
                  <div className="md:w-[62%] lg:w-2/3 md:pl-4 lg:pl-8 pt-0 md:pt-4">
                    <p className="font-sans text-base sm:text-lg md:text-xl text-brand-text/80 leading-[1.75] font-light">
                      {day.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
