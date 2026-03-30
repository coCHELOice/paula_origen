
import { content } from '../../data/origenLanding';

export default function QueEsOrigen() {
  const { queEsOrigen } = content;
  
  return (
    <section id="que-es" className="py-24 md:py-32 px-6 w-full bg-brand-bg relative z-10">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row gap-12 lg:gap-24 items-start">
        <div className="md:w-5/12">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-text leading-[1.1]">{queEsOrigen.title}</h2>
        </div>
        <div className="md:w-7/12 max-w-2xl space-y-10">
          {queEsOrigen.paragraphs.map((p, idx) => (
            <p key={idx} className="font-sans text-[19px] md:text-[22px] text-brand-text/80 leading-[1.6] font-light">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
