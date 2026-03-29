import Section from '../layout/Section';
import { content } from '../../data/origenLanding';

export default function Paula() {
  const { paula } = content;

  return (
    <Section id="paula" className="relative bg-brand-bg overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <img
          src="/media/selected_images/paula-manos.png"
          alt=""
          className="w-full h-full object-cover object-center"
          style={{ animation: 'slowZoom 25s ease-in-out infinite alternate', transform: 'scaleX(-1)' }}
        />
      </div>

      {/* Contrast gradient over text area */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-bg via-brand-bg/85 to-transparent pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-6 lg:col-start-1">
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
            <div className="flex flex-col gap-8 md:gap-12 border-t border-brand-text/10 pt-10 md:pt-16">
              <p className="font-sans text-base sm:text-lg md:text-xl text-brand-text/80 leading-relaxed font-light">
                {paula.description}
              </p>
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
    </Section>
  );
}
