import Section from '../layout/Section';
import { content } from '../../data/origenLanding';

export default function PaulaEquipo() {
  const { paulaEquipo } = content;
  
  return (
    <Section>
      <div className="grid md:grid-cols-12 gap-12 lg:gap-24">
        <div className="md:col-span-4">
          <h2 className="font-serif text-3xl md:text-4xl mb-8">{paulaEquipo.title}</h2>
          <p className="font-sans text-lg text-brand-text/80 leading-relaxed font-light">
            {paulaEquipo.intro}
          </p>
        </div>
        <div className="md:col-span-8 mt-8 md:mt-0">
          <ul className="grid gap-12">
            {paulaEquipo.members.map((member, idx) => (
              <li key={idx} className="flex flex-col">
                <span className="font-sans text-xl font-medium mb-3">{member.name}</span>
                <span className="font-sans text-lg text-brand-text/70 leading-relaxed font-light">
                  {member.desc}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
