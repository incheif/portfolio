import React from 'react';

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  multiline?: boolean;
  rows?: number;
}

export const TextField: React.FC<TextFieldProps> = ({
  label,
  multiline = false,
  rows = 4,
  id,
  className = '',
  ...props
}) => {
  const inputId = id || `input-${label.toLowerCase().replace(/\s+/g, '-')}`;

  // Common classes: bottom border only, zero radius, custom focus thickening, transparent background
  const fieldClasses = `w-full bg-white text-black font-sans text-base py-3 border-b-2 border-l-0 border-t-0 border-r-0 border-black outline-none placeholder:text-neutral-500 placeholder:italic transition-all duration-100 focus:border-b-[4px] focus:outline-none focus-visible:border-b-[4px]`;

  return (
    <div className={`flex flex-col gap-2 w-full ${className}`}>
      <label
        htmlFor={inputId}
        className="font-mono text-xs tracking-widest uppercase text-black font-medium select-none"
      >
        {label}
      </label>
      {multiline ? (
        <textarea
          id={inputId}
          rows={rows}
          className={`${fieldClasses} resize-y`}
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          id={inputId}
          type="text"
          className={fieldClasses}
          {...props}
        />
      )}
    </div>
  );
};
