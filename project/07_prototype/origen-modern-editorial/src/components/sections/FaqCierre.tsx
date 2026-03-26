import Section from '../layout/Section';
import Accordion from '../ui/Accordion';
import Button from '../ui/Button';
import { content } from '../../data/origenLanding';

export default function FaqCierre() {
  const { faqCierre } = content;
  
  return (
    <Section>
      <div className="max-w-2xl mx-auto mb-32 md:mb-48">
        <h2 className="font-serif text-3xl md:text-4xl mb-16 px-4">{faqCierre.title}</h2>
        <div className="border-t border-brand-text/10">
          {faqCierre.faqs.map((faq, idx) => (
            <Accordion key={idx} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-16 px-4">
          {faqCierre.closing}
        </h2>
        <Button variant="primary" href="#reserva" className="text-lg px-14 py-5 w-full sm:w-auto">
          {faqCierre.ctaFinal}
        </Button>
      </div>
    </Section>
  );
}
