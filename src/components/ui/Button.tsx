import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, type HTMLMotionProps } from 'framer-motion';
import { cn } from '../../utils/cn';

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  magnetic?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', magnetic = true, children, ...props }, ref) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    
    const xSpring = useTransform(x, (latest) => latest * 0.2);
    const ySpring = useTransform(y, (latest) => latest * 0.2);

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!magnetic || !buttonRef.current) return;
      const rect = buttonRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      x.set(e.clientX - centerX);
      y.set(e.clientY - centerY);
    };

    const handleMouseLeave = () => {
      if (!magnetic) return;
      x.set(0);
      y.set(0);
    };

    const variants = {
      primary: 'bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] shadow-sm',
      secondary: 'bg-[var(--color-foreground)] text-white hover:bg-black',
      outline: 'border border-[var(--color-foreground)]/15 text-[var(--color-foreground)] hover:bg-[var(--color-foreground)]/5',
      ghost: 'text-[var(--color-foreground)] hover:bg-[var(--color-foreground)]/5',
      glass: 'bg-transparent',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    return (
      <motion.button
        ref={(node) => {
          // @ts-ignore
          buttonRef.current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) ref.current = node;
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ x: magnetic ? xSpring : 0, y: magnetic ? ySpring : 0 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className={cn(
          'inline-flex items-center justify-center rounded-full font-semibold transition-colors cursor-pointer',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);
Button.displayName = 'Button';
