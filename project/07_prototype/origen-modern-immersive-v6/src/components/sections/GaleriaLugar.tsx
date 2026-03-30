const images = [
  { src: '/media/house/portal.avif', label: 'Entrada' },
  { src: '/media/house/livin-centro-chimenea.avif', label: 'Living' },
  { src: '/media/house/piscina-monte.avif', label: 'Piscina' },
  { src: '/media/house/terraza-monte.avif', label: 'Terraza' },
  { src: '/media/house/piramide.avif', label: 'Pirámide' },
  { src: '/media/house/cava-gruta.avif', label: 'Cava' },
  { src: '/media/house/desayuno.avif', label: 'Desayuno' },
  { src: '/media/house/vino-pipas.avif', label: 'Viña Alcohuaz' },
  { src: '/media/house/ventana-frutas.avif', label: 'Detalles' },
  { src: '/media/house/frutera-naranjas.avif', label: 'Cocina' },
];

// Duplicamos para el loop infinito
const track = [...images, ...images];

export default function GaleriaLugar() {
  return (
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
          Pasa el cursor para pausar y explorar cada imagen.
        </p>
      </div>

      {/* Infinite scroll strip */}
      <div className="overflow-hidden">
        <div className="flex gap-3 sm:gap-4 animate-infinite-scroll">
          {track.map((img, idx) => (
            <div
              key={idx}
              className="shrink-0 w-[72vw] sm:w-[52vw] md:w-[36vw] lg:w-[26vw] xl:w-[22vw] relative overflow-hidden group"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
