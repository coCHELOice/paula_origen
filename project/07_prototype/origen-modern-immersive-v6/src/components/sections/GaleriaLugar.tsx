import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  { src: '/media/house/portal.avif', label: 'Entrada' },
  { src: '/media/paula-origen-photos/WhatsApp Image 2026-03-30 at 21.46.30.jpeg', label: '' },
  { src: '/media/house/livin-centro-chimenea.avif', label: 'Living' },
  { src: '/media/paula-origen-photos/WhatsApp Image 2026-03-30 at 21.46.31.jpeg', label: '' },
  { src: '/media/house/piscina-monte.avif', label: 'Piscina' },
  { src: '/media/paula-origen-photos/WhatsApp Image 2026-03-30 at 21.46.31 (1).jpeg', label: '' },
  { src: '/media/house/terraza-monte.avif', label: 'Terraza' },
  { src: '/media/paula-origen-photos/WhatsApp Image 2026-03-30 at 21.46.31 (2).jpeg', label: '' },
  { src: '/media/house/piramide.avif', label: 'Pirámide' },
  { src: '/media/paula-origen-photos/WhatsApp Image 2026-03-30 at 21.46.32.jpeg', label: '' },
  { src: '/media/house/cava-gruta.avif', label: 'Cava' },
  { src: '/media/paula-origen-photos/WhatsApp Image 2026-03-30 at 21.46.32 (1).jpeg', label: '' },
  { src: '/media/house/desayuno.avif', label: 'Desayuno' },
  { src: '/media/paula-origen-photos/WhatsApp Image 2026-03-30 at 21.46.32 (2).jpeg', label: '' },
  { src: '/media/house/vino-pipas.avif', label: 'Viña Alcohuaz' },
  { src: '/media/paula-origen-photos/WhatsApp Image 2026-03-30 at 21.46.32 (3).jpeg', label: '' },
  { src: '/media/house/ventana-frutas.avif', label: 'Detalles' },
  { src: '/media/paula-origen-photos/WhatsApp Image 2026-03-30 at 21.46.32 (4).jpeg', label: '' },
  { src: '/media/house/frutera-naranjas.avif', label: 'Cocina' },
  { src: '/media/paula-origen-photos/WhatsApp Image 2026-03-30 at 21.46.33.jpeg', label: '' },
  { src: '/media/paula-origen-photos/WhatsApp Image 2026-03-30 at 21.46.33 (1).jpeg', label: '' },
  { src: '/media/paula-origen-photos/WhatsApp Image 2026-03-30 at 21.46.33 (2).jpeg', label: '' },
  { src: '/media/paula-origen-photos/WhatsApp Image 2026-03-30 at 21.46.33 (3).jpeg', label: '' },
  { src: '/media/paula-origen-photos/WhatsApp Image 2026-03-30 at 21.46.34.jpeg', label: '' },
  { src: '/media/paula-origen-photos/WhatsApp Image 2026-03-30 at 21.46.34 (1).jpeg', label: '' },
  { src: '/media/paula-origen-photos/WhatsApp Image 2026-03-30 at 21.46.34 (2).jpeg', label: '' },
  { src: '/media/paula-origen-photos/WhatsApp Image 2026-03-30 at 21.46.34 (3).jpeg', label: '' },
  { src: '/media/paula-origen-photos/WhatsApp Image 2026-03-30 at 21.46.34 (4).jpeg', label: '' },
  { src: '/media/paula-origen-photos/WhatsApp Image 2026-03-30 at 21.46.35.jpeg', label: '' },
  { src: '/media/paula-origen-photos/WhatsApp Image 2026-03-30 at 21.46.35 (1).jpeg', label: '' },
  { src: '/media/paula-origen-photos/WhatsApp Image 2026-03-30 at 21.46.35 (2).jpeg', label: '' },
  { src: '/media/paula-origen-photos/WhatsApp Image 2026-03-30 at 21.46.36.jpeg', label: '' },
  { src: '/media/paula-origen-photos/WhatsApp Image 2026-03-30 at 21.46.36 (1).jpeg', label: '' },
  { src: '/media/paula-origen-photos/WhatsApp Image 2026-03-30 at 21.46.36 (2).jpeg', label: '' },
  { src: '/media/paula-origen-photos/WhatsApp Image 2026-03-30 at 21.46.36 (3).jpeg', label: '' },
  { src: '/media/paula-origen-photos/WhatsApp Image 2026-03-30 at 21.46.36 (4).jpeg', label: '' },
];

const track = [...images, ...images];

export default function GaleriaLugar() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () => setLightbox(i => i !== null ? (i - 1 + images.length) % images.length : 0);
  const next = () => setLightbox(i => i !== null ? (i + 1) % images.length : 0);

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
    if (e.key === 'Escape') setLightbox(null);
  };

  return (
    <>
      <section id="el-espacio" className="py-20 md:py-32 lg:py-40 bg-brand-bg overflow-hidden">
        {/* Header */}
        <div className="px-5 sm:px-8 md:px-[8vw] mb-10 md:mb-16 max-w-6xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-12">
          <div>
            <span className="font-sans text-[10px] sm:text-xs tracking-[0.3em] uppercase text-brand-muted block mb-4">
              El Espacio
            </span>
            <h2 className="font-serif text-[clamp(1.9rem,5.5vw,3.25rem)] tracking-tight text-brand-text leading-[1.05]">
              Una casa en el corazón<br className="hidden sm:block" /> del Valle del Elqui.
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-brand-muted font-light md:text-right md:max-w-[260px] shrink-0">
            Haz clic en cada imagen para verla completa.
          </p>
        </div>

        {/* Infinite scroll strip */}
        <div className="overflow-hidden">
          <div className="flex gap-3 sm:gap-4 animate-infinite-scroll">
            {track.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setLightbox(idx % images.length)}
                className="shrink-0 w-[72vw] sm:w-[52vw] md:w-[36vw] lg:w-[26vw] xl:w-[22vw] relative overflow-hidden group cursor-zoom-in focus:outline-none"
              >
                <div className="aspect-[3/4] w-full overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.label}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <span className="absolute bottom-4 left-4 font-sans text-[10px] tracking-[0.2em] uppercase text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {img.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center"
          onClick={() => setLightbox(null)}
          onKeyDown={handleKey}
          tabIndex={0}
        >
          {/* Imagen */}
          <div
            className="relative max-w-5xl w-full mx-4 max-h-[90vh] flex items-center justify-center"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={images[lightbox].src}
              alt={images[lightbox].label}
              className="max-h-[85vh] max-w-full object-contain"
            />
            <span className="absolute bottom-4 left-0 right-0 text-center font-sans text-xs tracking-[0.2em] uppercase text-white/60">
              {images[lightbox].label}
            </span>
          </div>

          {/* Cerrar */}
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors"
            aria-label="Cerrar"
          >
            <X size={28} />
          </button>

          {/* Anterior */}
          <button
            onClick={e => { e.stopPropagation(); prev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft size={36} />
          </button>

          {/* Siguiente */}
          <button
            onClick={e => { e.stopPropagation(); next(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
            aria-label="Siguiente"
          >
            <ChevronRight size={36} />
          </button>

          {/* Contador */}
          <span className="absolute bottom-5 left-1/2 -translate-x-1/2 font-sans text-[11px] tracking-widest text-white/40">
            {lightbox + 1} / {images.length}
          </span>
        </div>
      )}
    </>
  );
}
