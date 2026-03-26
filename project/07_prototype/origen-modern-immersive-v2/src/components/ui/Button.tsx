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
    primary: "bg-[#FDFBFA] text-[#151515] hover:bg-[#EBE9E2] active:bg-[#D5CCB4] px-9 py-4 shadow-sm",
    secondary: "bg-transparent text-[#EBE9E2] border-b border-[#EBE9E2]/30 hover:border-[#EBE9E2] hover:text-[#FDFBFA] px-0 py-2" /* Text link with thin underline */
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
