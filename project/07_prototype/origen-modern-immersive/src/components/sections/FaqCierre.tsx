import Section from '../layout/Section';
import Accordion from '../ui/Accordion';
import Button from '../ui/Button';
import { content } from '../../data/origenLanding';

export default function FaqCierre() {
  const { faqCierre } = content;
  
  return (
    <Section>
      <div className="max-w-2xl mx-auto mb-20 md:mb-28">
        <h2 className="font-serif text-3xl md:text-4xl mb-16 px-4">{faqCierre.title}</h2>
        <div className="border-t border-brand-text/10">
          {faqCierre.faqs.map((faq, idx) => (
            <Accordion key={idx} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>

      <div className="max-w-3xl mx-auto text-center px-4 pb-16 md:pb-24">
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-8">
          {faqCierre.closing}
        </h2>
        <p className="font-sans text-brand-muted text-sm md:text-base mb-10 font-light tracking-wide">
          16–20 de abril · Valle del Elqui · Cupos limitados
        </p>
        <Button variant="primary" href="#reserva" className="px-12 py-4 w-full sm:w-auto">
          {faqCierre.ctaFinal}
        </Button>
      </div>
    </Section>
  );
}
