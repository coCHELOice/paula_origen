import React from 'react';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClass?: string;
}

export default function Section({ id, children, className = '', containerClass = '' }: SectionProps) {
  return (
    <section id={id} className={`py-24 md:py-32 px-6 w-full ${className}`}>
      <div className={`mx-auto max-w-7xl ${containerClass}`}>
        {children}
      </div>
    </section>
  );
}
