import Section from '../layout/Section';
import { content } from '../../data/origenLanding';

export default function MujeresDetras() {
  const { mujeresDetras } = content;

  return (
    <Section id="mujeres-detras" className="bg-brand-bgAlt/20">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12 md:mb-20 md:mb-28 text-center md:text-left md:w-3/4">
          <h2 className="font-serif text-[clamp(1.9rem,6vw,3.25rem)] mb-6 md:mb-10 lg:mb-12">
            {mujeresDetras.title}
          </h2>
          <p className="font-sans text-base sm:text-lg md:text-xl text-brand-text/80 leading-relaxed font-light italic">
            {mujeresDetras.intro}
          </p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 lg:gap-20">
          {mujeresDetras.members.map((member: any, idx: number) => (
            <div key={idx} className="flex flex-col group">
              {/* Portrait */}
              <div className="aspect-[4/5] bg-brand-bgAlt/50 mb-6 md:mb-10 overflow-hidden relative transition-all duration-700">
                {member.img ? (
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 group-hover:brightness-110"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-t from-brand-accent/20 to-transparent flex items-end p-8" />
                )}
              </div>
              {/* Info */}
              <div className="flex flex-col">
                <span className="font-sans text-[10px] sm:text-xs tracking-[0.25em] uppercase text-brand-muted mb-3 md:mb-4">
                  {member.role}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl mb-3 md:mb-6">{member.name}</h3>
                <p className="font-sans text-base sm:text-lg text-brand-text/70 leading-relaxed font-light">
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
