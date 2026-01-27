import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils'; // Adjust path if needed

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', fullWidth = false, children, ...props }, ref) => {
    const variants = {
      primary: 'bg-gray-100 text-black border-2 border-white hover:bg-white relative overflow-hidden after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-rainbow rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1',
      outline: 'bg-transparent text-white border border-white hover:border-transparent relative z-10 before:absolute before:-inset-[2px] before:-z-10 before:rounded-full before:bg-rainbow before:opacity-0 hover:before:opacity-100 before:transition-opacity',
      secondary: 'bg-white text-black hover:bg-gray-100',
      ghost: 'text-gray-400 hover:text-white hover:bg-white/5',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg font-bold',
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          'transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed',
          variants[variant],
          sizes[size],
          fullWidth ? 'w-full' : '',
          className
        )}
        {...(props as any)}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
