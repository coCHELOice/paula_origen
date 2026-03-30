import React from 'react';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClass?: string;
}

export default function Section({ id, children, className = '', containerClass = '' }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 sm:py-20 md:py-28 lg:py-36 px-5 sm:px-8 w-full ${className}`}
    >
      <div className={`mx-auto max-w-7xl ${containerClass}`}>
        {children}
      </div>
    </section>
  );
}
