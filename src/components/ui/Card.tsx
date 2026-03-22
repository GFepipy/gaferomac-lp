import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '../../utils/cn';

interface CardProps extends HTMLMotionProps<"div"> {
  hoverEffect?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, hoverEffect = true, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={hoverEffect ? { y: -4, transition: { type: 'spring', stiffness: 100, damping: 20 } } : {}}
        className={cn(
          'bg-transparent border border-[var(--color-foreground)] rounded-none p-8 md:p-10',
          'border border-[var(--color-foreground)]/10',
          'shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]',
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
Card.displayName = 'Card';
