import Section from '../layout/Section';
import { content } from '../../data/origenLanding';

export default function Paula() {
  const { paula } = content;
  
  return (
    <Section id="paula" className="bg-brand-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-24 items-center">
          <div className="md:col-span-12 lg:col-span-10 lg:col-start-2">
            <blockquote className="mb-16 md:mb-20">
              <p className="font-serif text-3xl md:text-5xl lg:text-6xl text-brand-text leading-[1.1] mb-8 italic">
                {paula.quote}
              </p>
              <footer className="font-sans text-sm tracking-[0.2em] uppercase text-brand-muted">
                — {paula.author}
              </footer>
            </blockquote>
            
            <div className="grid md:grid-cols-12 gap-12 border-t border-brand-text/10 pt-16">
              <div className="md:col-span-6">
                <p className="font-sans text-lg md:text-xl text-brand-text/80 leading-relaxed font-light mb-8">
                  {paula.description}
                </p>
              </div>
              <div className="md:col-span-6">
                <div className="bg-brand-bgAlt/40 p-10 md:p-12 border border-brand-accent/10">
                  <h3 className="font-serif text-2xl mb-6">Método Surya Flow</h3>
                  <p className="font-sans text-lg text-brand-text/80 leading-relaxed font-light">
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
