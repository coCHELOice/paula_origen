import Section from '../layout/Section';
import { content } from '../../data/origenLanding';

export default function MujeresDetras() {
  const { mujeresDetras } = content;
  
  return (
    <Section id="mujeres-detras" className="bg-brand-bgAlt/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-20 md:mb-32 text-center md:text-left md:w-3/4">
          <h2 className="font-serif text-4xl md:text-5xl mb-12">{mujeresDetras.title}</h2>
          <p className="font-sans text-xl md:text-2xl text-brand-text/80 leading-relaxed font-light italic">
            {mujeresDetras.intro}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
          {mujeresDetras.members.map((member, idx) => (
            <div key={idx} className="flex flex-col group">
              <div className="aspect-[4/5] bg-brand-bgAlt/50 mb-10 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-1000">
                {/* Image placeholder for future real assets */}
                <div className="w-full h-full bg-gradient-to-t from-brand-accent/20 to-transparent flex items-end p-8">
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-xs tracking-[0.25em] uppercase text-brand-muted mb-4">
                  {member.role}
                </span>
                <h3 className="font-serif text-3xl mb-6">{member.name}</h3>
                <p className="font-sans text-lg text-brand-text/70 leading-relaxed font-light">
                  {member.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
