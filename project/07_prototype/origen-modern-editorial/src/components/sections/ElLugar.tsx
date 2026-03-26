import { content } from '../../data/origenLanding';

export default function ElLugar() {
  const { elLugar } = content;
  
  return (
    <section className="py-24 md:py-32 w-full">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
        
        <div className="lg:col-span-5 lg:order-2">
          <h2 className="font-serif text-4xl md:text-5xl mb-10">{elLugar.title}</h2>
          <div className="space-y-8">
            {elLugar.paragraphs.map((p, idx) => (
              <p key={idx} className="font-sans text-lg md:text-xl text-brand-text/80 leading-relaxed font-light">
                {p}
              </p>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7 lg:order-1 relative h-[50vh] min-h-[400px] md:h-[70vh] w-full bg-brand-bgAlt overflow-hidden rounded-[2rem] shadow-2xl shadow-brand-text/5">
          <img 
            src="/young-woman-practicing-yoga-home.jpg" 
            alt="Mujer practicando yoga" 
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}
