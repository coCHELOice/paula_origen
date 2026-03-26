import Section from '../layout/Section';
import { content } from '../../data/origenLanding';

export default function ParaQuienEs() {
  const { paraQuienEs } = content;
  
  return (
    <Section className="bg-[#1C1C1D] text-[#FAF9F6]">
      <div className="grid md:grid-cols-12 gap-12 lg:gap-24 items-center">
        <div className="md:col-span-6 relative aspect-square md:aspect-[3/4] mb-8 md:mb-0">
          <img 
            src="/fresh-salad-with-grilled-avocado-tomatoes-pickled-onions-bowl.jpg" 
            alt="Plato nutritivo fresco y consciente" 
            className="w-full h-full object-cover opacity-90"
          />
        </div>
        <div className="md:col-span-6 md:pr-12 lg:pr-24 py-12">
          <h2 className="font-serif text-3xl md:text-4xl mb-12">{paraQuienEs.title}</h2>
          <div className="space-y-8">
            {paraQuienEs.paragraphs.map((p, idx) => (
              <p key={idx} className="font-sans text-lg md:text-xl text-[#FAF9F6]/80 leading-relaxed font-light">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
