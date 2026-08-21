import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'standard' | 'inverted' | 'borderless';
  hoverInvert?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'standard',
  hoverInvert = false,
  className = '',
  ...props
}) => {
  let baseStyle = 'transition-all duration-100 ease-in-out border-0';
  let variantStyle = '';

  if (variant === 'standard') {
    variantStyle = 'bg-white text-black border border-black p-8';
    if (hoverInvert) {
      variantStyle += ' hover:bg-black hover:text-white hover:border-black';
    }
  } else if (variant === 'inverted') {
    variantStyle = 'bg-black text-white p-8';
  } else if (variant === 'borderless') {
    variantStyle = 'bg-transparent text-black p-0';
  }

  const combinedClassName = `${baseStyle} ${variantStyle} ${className}`;

  return (
    <div className={combinedClassName} {...props}>
      {children}
    </div>
  );
};
