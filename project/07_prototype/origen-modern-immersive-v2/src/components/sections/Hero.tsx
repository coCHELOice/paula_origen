
import Button from '../ui/Button';
import { content } from '../../data/origenLanding';

export default function Hero() {
  const { hero } = content;
  
  return (
    <section className="relative min-h-[100svh] w-full flex items-center pt-24 pb-16 overflow-hidden">
      {/* Immersive Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="/silhouette-woman-sunset-mountains.jpg"
          alt="Valle del Elqui atardecer"
          className="w-full h-full object-cover brightness-[0.85] saturate-[0.9]"
        />
        {/* Soft atmospheric gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#EBE9E2] via-[#EBE9E2]/40 to-transparent"></div>
        <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-y-16 gap-x-12 lg:gap-x-24 items-center">
        <div className="md:col-span-8 lg:col-span-7 flex flex-col items-start">
        <span className="font-sans text-xs tracking-[0.2em] text-brand-muted uppercase mb-8">
          {hero.eyebrow}
        </span>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-8">
          {hero.title}
        </h1>
        <p className="font-sans text-lg md:text-xl text-brand-text/80 leading-relaxed mb-12 font-light max-w-md">
          {hero.subtitle}
        </p>
        <div className="flex flex-col mb-14 space-y-4 border-l border-brand-text/20 pl-6 animate-fade-in-up">
          {hero.meta.map((item, idx) => (
            <span key={idx} className="font-sans text-[15px] md:text-base text-brand-text/90 tracking-wide">{item}</span>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 w-full sm:w-auto">
          <Button variant="primary" href="#reserva" className="w-full sm:w-auto">{hero.ctaPrimary}</Button>
          <Button variant="secondary" href="#programa" className="w-full sm:w-auto">{hero.ctaSecondary}</Button>
        </div>
        </div>
      </div>
    </section>
  );
}
