import Section from '../layout/Section';
import Button from '../ui/Button';
import { content } from '../../data/origenLanding';

export default function Reserva() {
  const { reserva } = content;

  return (
    <Section id="reserva" className="bg-brand-bgAlt/30 border-t border-brand-text/5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-20 lg:mb-28 text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-[clamp(2rem,7vw,3.75rem)] mb-8 md:mb-12 tracking-tight">
            {reserva.title}
          </h2>

          {/* Cupos badge */}
          <div className="flex items-center justify-center gap-2 mb-6 md:mb-10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent" />
            </span>
            <span className="font-sans text-xs sm:text-sm tracking-[0.12em] uppercase text-brand-accent font-medium">
              Últimos cupos disponibles
            </span>
          </div>

          <div className="bg-brand-accent/5 border border-brand-accent/10 p-7 sm:p-10 md:p-14">
            <p className="font-sans text-base sm:text-lg md:text-xl text-brand-text/80 leading-relaxed font-light italic">
              {reserva.intro}
            </p>
          </div>
        </div>

        {/* Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {reserva.options.map((option, idx) => (
            <div
              key={idx}
              className="flex flex-col bg-brand-bg border border-brand-text/5 overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-700"
            >
              {/* Image */}
              <div className="aspect-[16/9] sm:aspect-[16/10] overflow-hidden relative">
                <img
                  src={option.img}
                  alt={option.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-brand-text/10 group-hover:bg-transparent transition-colors duration-700" />
              </div>

              {/* Card body */}
              <div className="px-7 py-8 sm:px-10 sm:py-10 md:px-12 md:py-14 flex flex-col flex-1">
                <span className="font-sans text-[10px] sm:text-xs tracking-[0.25em] uppercase text-brand-muted mb-5 sm:mb-8">
                  {option.title}
                </span>
                <div className="mb-6 md:mb-10">
                  <p className="font-serif text-[clamp(2rem,6vw,3.25rem)] text-brand-text tracking-tight leading-none mb-2">
                    {option.price}
                  </p>
                  <span className="font-sans text-xs sm:text-sm text-brand-muted tracking-wide">
                    por persona · todo incluido
                  </span>
                </div>
                <p className="font-sans text-sm sm:text-base md:text-lg text-brand-text/70 leading-relaxed font-light mb-8 md:mb-12">
                  {option.desc}
                </p>
                <div className="mt-auto">
                  <Button
                    variant="primary"
                    href="#reserva"
                    className="w-full text-center py-4 sm:py-5"
                  >
                    {reserva.ctaPrimary}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact footer */}
        <div className="mt-16 md:mt-24 lg:mt-32 border-t border-brand-text/10 pt-12 md:pt-20 text-center max-w-2xl mx-auto">
          <p className="font-sans text-base sm:text-lg md:text-xl text-brand-text/80 mb-6 md:mb-10 leading-relaxed">
            Un grupo íntimo y reducido para cuidar cada detalle del proceso.
          </p>
          <p className="font-sans text-xs sm:text-sm tracking-[0.1em] text-brand-muted uppercase">
            Más información o reservas directas al:{' '}
            <a
              href="tel:+56997992863"
              className="text-brand-text font-medium hover:text-brand-accent transition-colors"
            >
              +56 9 9799 2863
            </a>
          </p>
        </div>
      </div>
    </Section>
  );
}
