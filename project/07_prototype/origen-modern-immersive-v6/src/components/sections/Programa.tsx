import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Section from '../layout/Section';
import { content } from '../../data/origenLanding';

const dayImages = [
  '/media/house/portal.avif',
  '/media/ambient/temazcal.webp',
  '/media/house/vino-pipas.avif',
  '/media/house/piscina-monte.avif',
  '/media/house/terraza-monte.avif',
];

export default function Programa() {
  const { programa } = content;
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <Section id="programa" className="relative bg-brand-bg overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <img
          src="/media/selected_images/ventana-frutas.avif"
          alt=""
          className="w-full h-full object-cover object-center opacity-[0.06]"
          style={{ animation: 'slowZoom 25s ease-in-out infinite alternate' }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <div className="mb-14 md:mb-28 lg:mb-40 text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-[clamp(2rem,7vw,4.5rem)] mb-6 md:mb-12 tracking-tight">
            {programa.title}
          </h2>
          <p className="font-sans text-base sm:text-lg md:text-xl text-brand-text/70 leading-relaxed font-light italic">
            {programa.intro}
          </p>
        </div>

        {/* ── Mobile: acordeón ── */}
        <div className="md:hidden border-t border-brand-text/10">
          {programa.days.map((day, idx) => {
            const [diaNum, titulo] = day.title.split(' — ');
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="border-b border-brand-text/10">
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full py-6 flex items-center justify-between text-left gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-brand-accent font-medium shrink-0">
                      {diaNum}
                    </span>
                    <span className="font-serif text-xl leading-tight text-brand-text">
                      {titulo}
                    </span>
                  </div>
                  <span className="text-brand-muted shrink-0 transition-colors duration-300">
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>

                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[600px] opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                  <div className="flex flex-col gap-5">
                    <div className="aspect-[16/9] overflow-hidden">
                      <img
                        src={dayImages[idx]}
                        alt=""
                        aria-hidden="true"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <blockquote className="font-sans text-sm text-brand-muted italic leading-relaxed border-l-2 border-brand-accent/20 pl-4">
                      {day.quote}
                    </blockquote>
                    <p className="font-sans text-base text-brand-text/80 leading-[1.75] font-light">
                      {day.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Desktop: layout original ── */}
        <div className="hidden md:flex flex-col gap-28 lg:gap-40">
          {programa.days.map((day, idx) => {
            const [diaNum, titulo] = day.title.split(' — ');
            return (
              <div key={idx} className="relative group">
                <div className="absolute -left-10 top-0 bottom-0 w-[1px] bg-brand-accent/5 overflow-hidden">
                  <div className="h-full w-full origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-1000 bg-brand-accent/30" />
                </div>

                <div className="flex items-start gap-16 lg:gap-24">
                  <div className="flex flex-col w-[38%] lg:w-1/3 shrink-0 pt-1">
                    <span className="font-sans text-xs tracking-[0.3em] uppercase text-brand-accent mb-4 md:mb-6 font-medium">
                      {diaNum}
                    </span>
                    <h3 className="font-serif text-[clamp(1.6rem,5vw,3.25rem)] leading-[1.05] text-brand-text pr-2 mb-10 lg:mb-12">
                      {titulo}
                    </h3>
                    <blockquote className="font-sans text-lg text-brand-muted italic leading-relaxed font-light border-l-2 border-brand-accent/20 pl-8 transition-transform duration-500 group-hover:translate-x-1">
                      {day.quote}
                    </blockquote>
                  </div>

                  <div className="w-[62%] lg:w-2/3 pl-4 lg:pl-8 pt-4 flex flex-col lg:flex-row gap-8 lg:gap-12">
                    <p className="font-sans text-lg md:text-xl text-brand-text/80 leading-[1.75] font-light flex-1">
                      {day.desc}
                    </p>
                    <div className="hidden lg:block shrink-0 w-44 xl:w-52">
                      <div className="aspect-[3/4] overflow-hidden">
                        <img
                          src={dayImages[idx]}
                          alt=""
                          aria-hidden="true"
                          className="w-full h-full object-cover opacity-75 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    </div>
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
