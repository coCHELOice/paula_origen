import Section from '../layout/Section';
import Accordion from '../ui/Accordion';
import Button from '../ui/Button';
import { content } from '../../data/origenLanding';

export default function FaqCierre() {
  const { faqCierre } = content;

  return (
    <Section>
      {/* FAQ */}
      <div className="max-w-2xl mx-auto mb-16 md:mb-24 lg:mb-28">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-10 md:mb-16 px-0">
          {faqCierre.title}
        </h2>
        <div className="border-t border-brand-text/10">
          {faqCierre.faqs.map((faq, idx) => (
            <Accordion key={idx} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>

      {/* Cierre */}
      <div className="max-w-3xl mx-auto text-center px-2 sm:px-4 pb-12 md:pb-20 lg:pb-24">
        <h2 className="font-serif text-[clamp(2rem,8vw,4.5rem)] leading-[1.05] tracking-tight mb-6 md:mb-8">
          {faqCierre.closing}
        </h2>
        <p className="font-sans text-brand-muted text-xs sm:text-sm md:text-base mb-8 md:mb-10 font-light tracking-wide">
          16–20 de abril · Valle del Elqui · Cupos limitados
        </p>
        <Button
          variant="primary"
          href="#reserva"
          className="px-8 sm:px-12 py-4 w-full sm:w-auto"
        >
          {faqCierre.ctaFinal}
        </Button>
      </div>
    </Section>
  );
}
