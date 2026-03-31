import Section from '../layout/Section';
import { content } from '../../data/origenLanding';

export default function Paula() {
  const { paula } = content;

  return (
    <Section id="paula" className="relative bg-brand-bg overflow-hidden">
      <div className="relative max-w-6xl mx-auto">

        {/* Cita — ancho completo, protagonista */}
        <blockquote className="mb-16 md:mb-24 max-w-4xl">
          <p className="font-serif text-[clamp(1.6rem,4.5vw,3.25rem)] text-brand-text leading-[1.15] mb-5 italic">
            {paula.quote}
          </p>
          <footer className="font-sans text-xs tracking-[0.2em] uppercase text-brand-muted">
            — {paula.author}
          </footer>
        </blockquote>

        {/* Dos columnas: texto + imagen */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start border-t border-brand-text/10 pt-12 md:pt-16">

          {/* Izquierda: descripción + método */}
          <div className="flex flex-col gap-8 md:gap-12">
            <p className="font-sans text-base sm:text-lg md:text-xl text-brand-text/80 leading-relaxed font-light">
              {paula.description}
            </p>
            <div className="border-l-2 border-brand-accent/30 pl-6 md:pl-8">
              <h3 className="font-serif text-xl sm:text-2xl mb-3 sm:mb-4">Método Surya Flow</h3>
              <p className="font-sans text-base sm:text-lg text-brand-text/70 leading-relaxed font-light">
                {paula.method}
              </p>
            </div>
          </div>

          {/* Derecha: foto de Paula */}
          <div className="relative overflow-hidden">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="/media/Influencers/paula-suryaflow.jpg"
                alt="Paula Suryaflow"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
}
