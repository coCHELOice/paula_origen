
import { content } from '../../data/origenLanding';

export default function ParaQuienEs() {
  const { paraQuienEs } = content;
  
  return (
    <section className="relative w-full overflow-hidden">
      {/* Immersive background image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img 
          src="/fresh-salad-with-grilled-avocado-tomatoes-pickled-onions-bowl.jpg" 
          alt="Plato nutritivo fresco y consciente" 
          className="w-full h-full object-cover brightness-[0.6] saturate-[0.8]"
        />
        {/* Soft immersive clay gradient over the image */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2A231F] via-[#2A231F]/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#2A231F] via-transparent to-[#2A231F]/40 sm:hidden"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 md:py-40 grid md:grid-cols-12 gap-12 lg:gap-24 items-center">
        <div className="md:col-span-12 lg:col-span-7">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-5xl text-[#EBE9E2] mb-12 leading-[1.1]">{paraQuienEs.title}</h2>
          <div className="space-y-10 max-w-2xl">
            {paraQuienEs.paragraphs.map((p, idx) => (
              <p key={idx} className="font-sans text-[19px] md:text-[21px] text-[#EBE9E2]/80 leading-[1.65] font-light">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
