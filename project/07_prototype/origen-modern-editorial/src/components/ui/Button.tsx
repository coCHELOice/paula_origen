import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  href?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  id?: string;
}

export default function Button({ variant = 'primary', href, children, className = '', ...props }: ButtonProps) {
  const baseStyle = "inline-flex items-center justify-center tracking-wide text-sm font-medium transition-all duration-300 px-8 py-4";
  const variants = {
    primary: "bg-[#1C1C1D] text-[#FAF9F6] hover:bg-[#A67C52]",
    secondary: "bg-transparent text-brand-text border border-brand-text/30 hover:border-brand-accent hover:text-brand-accent"
  };

  const combinedClassName = `${baseStyle} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
