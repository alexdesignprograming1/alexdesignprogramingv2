import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'hape';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', icon, children, ...props }, ref) => {
    const variants = {
      primary: 'bg-white/10 border-white/20 text-white hover:bg-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]',
      secondary: 'bg-zinc-800 border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500',
      outline: 'bg-transparent border-white/10 text-white hover:border-white/40',
      ghost: 'bg-transparent border-transparent text-zinc-400 hover:text-white',
      hape: 'group relative h-[56px] min-w-[56px] inline-flex items-center justify-center rounded-full overflow-hidden transition-all duration-300 text-white font-integral uppercase',
    };

    const sizes = {
      sm: 'text-[11px] tracking-[0.2em] font-bold',
      md: 'text-[13px] tracking-[0.2em] font-bold',
      lg: 'text-[15px] tracking-[0.3em] font-bold',
    };

    if (variant === 'hape') {
      return (
        <button
          ref={ref}
          className={cn(variants.hape, sizes[size], className)}
          {...props}
        >
          {/* Background Layer - subtle glass by default */}
          <div className="absolute inset-0 bg-white/5 border border-white/10 rounded-full z-0" />
          
          {/* Hover Glow Layer */}
          <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-700 ease-[cubic-bezier(0.165,0.84,0.44,1)] origin-center rounded-full z-0" />
          
          <div className="relative z-10 flex items-center justify-center gap-4 px-8 h-full w-full">
            {children && (
              <span className="opacity-100 transition-all duration-500">
                {children}
              </span>
            )}
            {icon && (
              <div className="relative w-9 h-9 rounded-full bg-white flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-colors duration-300 shrink-0">
                <div className="absolute inset-0 bg-white rounded-full scale-100 group-hover:scale-0 transition-transform duration-500" />
                <div className="relative z-10">{icon}</div>
              </div>
            )}
          </div>
        </button>
      );
    }

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-full transition-all duration-300 active:scale-95 disabled:opacity-40 disabled:pointer-events-none gap-3 uppercase',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
        {icon}
      </button>
    );
  }
);

Button.displayName = 'Button';
