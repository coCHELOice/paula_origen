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
  const baseStyle = "inline-flex items-center justify-center uppercase tracking-[0.14em] text-[13px] font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/40 focus-visible:ring-offset-2";
  const variants = {
    primary: "bg-[#8C5A35] text-[#FDFBFA] hover:bg-[#6D4228] active:bg-[#4C2E1C] px-9 py-4 shadow-sm",
    secondary: "bg-transparent text-brand-text border border-brand-text/30 hover:border-brand-text/50 px-8 py-4"
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
