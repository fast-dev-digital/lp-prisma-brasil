import React from 'react';
import { cn } from '../../lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Container: React.FC<ContainerProps> = ({ 
  children, 
  className, 
  size = 'lg',
  ...props 
}) => {
  const sizes = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    xl: 'max-w-[1920px]',
  };

  return (
    <div 
      className={cn('mx-auto px-4 sm:px-6 lg:px-8 w-full', sizes[size], className)} 
      {...props}
    >
      {children}
    </div>
  );
};

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  centered?: boolean;
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  className, 
  centered = false,
  ...props 
}) => {
  return (
    <section 
      className={cn(
        'py-16 md:py-24 relative overflow-hidden',
        centered && 'flex flex-col items-center text-center',
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};
