import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface AccordionProps {
  question: string;
  answer: string;
}

export default function Accordion({ question, answer }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-brand-text/10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-7 flex justify-between items-center text-left focus:outline-none group"
      >
        <span className="font-sans font-medium text-base md:text-lg pr-8 leading-snug">{question}</span>
        <span className="text-brand-muted shrink-0 transition-all duration-300 group-hover:text-brand-text">
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="font-sans text-brand-muted text-base leading-relaxed md:pr-12">
          {answer}
        </p>
      </div>
    </div>
  );
}
