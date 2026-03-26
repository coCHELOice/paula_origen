import Section from '../layout/Section';
import Button from '../ui/Button';
import { content } from '../../data/origenLanding';

export default function Hero() {
  const { hero } = content;
  
  return (
    <Section className="min-h-screen flex items-center pt-32 pb-16 md:py-24" containerClass="grid md:grid-cols-12 gap-y-16 gap-x-12 lg:gap-x-24 items-center">
      <div className="md:col-span-5 flex flex-col items-start z-10 md:pr-4">
        <span className="font-sans text-xs tracking-[0.2em] text-brand-muted uppercase mb-8">
          {hero.eyebrow}
        </span>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-8">
          {hero.title}
        </h1>
        <p className="font-sans text-lg md:text-xl text-brand-text/80 leading-relaxed mb-12 font-light max-w-md">
          {hero.subtitle}
        </p>
        <div className="flex flex-col mb-12 space-y-3 border-l-2 border-brand-accent/30 pl-6 animate-fade-in-up">
          {hero.meta.map((item, idx) => (
            <span key={idx} className="font-sans text-sm text-brand-text/70">{item}</span>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 w-full sm:w-auto">
          <Button variant="primary" href="#reserva" className="w-full sm:w-auto">{hero.ctaPrimary}</Button>
          <Button variant="secondary" href="#programa" className="w-full sm:w-auto">{hero.ctaSecondary}</Button>
        </div>
      </div>
      
      <div className="md:col-span-7 relative h-full flex items-center mt-12 md:mt-0">
        <div className="w-full aspect-[3/4] sm:aspect-[4/5] md:aspect-auto md:h-[85vh] overflow-hidden">
          <img
            src="/silhouette-woman-sunset-mountains.jpg"
            alt="Silueta de una mujer contemplando las montañas al atardecer"
            className="w-full h-full object-cover brightness-[0.8] saturate-[0.85] contrast-[1.02]"
          />
        </div>
      </div>
    </Section>
  );
}
