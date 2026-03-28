import Section from '../layout/Section';
import { content } from '../../data/origenLanding';

export default function Paula() {
  const { paula } = content;

  return (
    <Section id="paula" className="bg-brand-bg">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24 items-center">
          <div className="lg:col-span-10 lg:col-start-2">
            {/* Quote */}
            <blockquote className="mb-12 md:mb-16 lg:mb-20">
              <p className="font-serif text-[clamp(1.6rem,5vw,3.75rem)] text-brand-text leading-[1.15] mb-6 sm:mb-8 italic">
                {paula.quote}
              </p>
              <footer className="font-sans text-xs sm:text-sm tracking-[0.2em] uppercase text-brand-muted">
                — {paula.author}
              </footer>
            </blockquote>

            {/* Description + Method */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 border-t border-brand-text/10 pt-10 md:pt-16">
              <div>
                <p className="font-sans text-base sm:text-lg md:text-xl text-brand-text/80 leading-relaxed font-light">
                  {paula.description}
                </p>
              </div>
              <div>
                <div className="bg-brand-bgAlt/40 p-7 sm:p-10 md:p-12 border border-brand-accent/10">
                  <h3 className="font-serif text-xl sm:text-2xl mb-4 sm:mb-6">Método Surya Flow</h3>
                  <p className="font-sans text-base sm:text-lg text-brand-text/80 leading-relaxed font-light">
                    {paula.method}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
