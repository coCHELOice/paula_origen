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
  const baseStyle = "inline-flex items-center justify-center uppercase tracking-[0.12em] text-[13px] font-medium transition-all duration-300 ease-out px-8 py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/40 focus-visible:ring-offset-2";
  const variants = {
    primary: "bg-[#1C1C1D] text-[#FAF9F6] hover:bg-[#3a3a3b] active:bg-[#A67C52]",
    secondary: "bg-transparent text-brand-text border border-brand-text/20 hover:border-brand-text/50 hover:text-brand-text active:border-brand-accent active:text-brand-accent"
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
