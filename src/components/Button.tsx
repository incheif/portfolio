import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  showArrow?: boolean;
  inverted?: boolean; // For dark background sections
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  showArrow = false,
  inverted = false,
  className = '',
  ...props
}) => {
  // Base style classes
  let baseStyle = 'inline-flex items-center justify-center font-mono text-xs tracking-widest uppercase font-medium focus-visible:outline-none transition-colors duration-100 cursor-pointer select-none';

  // Variant styling
  let variantStyle = '';
  if (inverted) {
    if (variant === 'primary') {
      variantStyle = 'bg-white text-black border border-transparent px-8 py-4 hover:bg-black hover:text-white hover:border-white focus-visible:outline-3 focus-visible:outline-white focus-visible:outline-offset-3';
    } else if (variant === 'secondary') {
      variantStyle = 'bg-transparent text-white border-2 border-white px-8 py-4 hover:bg-white hover:text-black focus-visible:outline-3 focus-visible:outline-white focus-visible:outline-offset-3';
    } else {
      variantStyle = 'bg-transparent text-white border-none underline hover:no-underline focus-visible:outline-3 focus-visible:outline-white focus-visible:outline-offset-3';
    }
  } else {
    if (variant === 'primary') {
      variantStyle = 'bg-black text-white border border-transparent px-8 py-4 hover:bg-white hover:text-black hover:border-black focus-visible:outline-3 focus-visible:outline-black focus-visible:outline-offset-3';
    } else if (variant === 'secondary') {
      variantStyle = 'bg-transparent text-black border-2 border-black px-8 py-4 hover:bg-black hover:text-white focus-visible:outline-3 focus-visible:outline-black focus-visible:outline-offset-3';
    } else {
      variantStyle = 'bg-transparent text-black border-none hover:underline focus-visible:outline-3 focus-visible:outline-black focus-visible:outline-offset-3';
    }
  }

  // Combine inline styling rules to guarantee sharp appearance and typography styles
  const combinedClassName = `${baseStyle} ${variantStyle} ${className}`;

  return (
    <button className={combinedClassName} {...props}>
      <span className="flex items-center gap-2">
        {children}
        {showArrow && <span className="font-sans font-bold text-sm">→</span>}
      </span>
    </button>
  );
};
