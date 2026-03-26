import Section from '../layout/Section';
import { content } from '../../data/origenLanding';

export default function QueEsOrigen() {
  const { queEsOrigen } = content;
  
  return (
    <Section id="que-es" containerClass="flex flex-col md:flex-row gap-12 lg:gap-24 items-start">
      <div className="md:w-1/3">
        <h2 className="font-serif text-3xl md:text-4xl">{queEsOrigen.title}</h2>
      </div>
      <div className="md:w-2/3 max-w-2xl space-y-8">
        {queEsOrigen.paragraphs.map((p, idx) => (
          <p key={idx} className="font-sans text-lg md:text-xl text-brand-text/80 leading-relaxed font-light">
            {p}
          </p>
        ))}
      </div>
    </Section>
  );
}
