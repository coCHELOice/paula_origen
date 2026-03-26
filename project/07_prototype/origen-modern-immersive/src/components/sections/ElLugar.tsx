import { content } from '../../data/origenLanding';

export default function ElLugar() {
  const { elLugar } = content;
  
  return (
    <section className="relative w-full overflow-hidden bg-[#221F1C]">
      <div className="grid lg:grid-cols-2">
        {/* Cinematic full-bleed image side */}
        <div className="relative h-[60vh] lg:h-auto min-h-[500px] w-full">
          <img 
            src="/young-woman-practicing-yoga-home.jpg" 
            alt="Mujer practicando yoga" 
            className="w-full h-full object-cover saturate-[0.8] brightness-[0.85]"
          />
          {/* Gradient to smooth transition on mobile */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#221F1C] to-transparent lg:hidden"></div>
        </div>

        {/* Text floating in deep space */}
        <div className="relative z-10 px-8 py-20 lg:p-32 flex flex-col justify-center">
          <div className="max-w-xl">
            <h2 className="font-serif text-5xl md:text-6xl mb-12 text-[#EBE9E2] leading-[1.1]">{elLugar.title}</h2>
            <div className="space-y-10">
              {elLugar.paragraphs.map((p, idx) => (
                <p key={idx} className="font-sans text-[18px] md:text-[21px] text-[#EBE9E2]/70 leading-[1.65] font-light">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
