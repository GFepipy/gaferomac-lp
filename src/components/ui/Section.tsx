import React from 'react';
import { cn } from '../../utils/cn';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  containerSize?: 'default' | 'narrow' | 'full';
  background?: 'primary' | 'white' | 'dark';
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, children, containerSize = 'default', background = 'primary', ...props }, ref) => {
    
    const backgrounds = {
      primary: 'bg-[var(--color-background)]',
      white: 'bg-white',
      dark: 'bg-[var(--color-foreground)] text-[var(--color-background)]',
    };

    const containers = {
      default: 'max-w-7xl',
      narrow: 'max-w-4xl',
      full: 'max-w-full px-0',
    };

    return (
      <section
        ref={ref}
        className={cn('py-16 md:py-24', backgrounds[background], className)}
        {...props}
      >
        <div className={cn('mx-auto px-4 md:px-8', containers[containerSize])}>
          {children}
        </div>
      </section>
    );
  }
);
Section.displayName = 'Section';
