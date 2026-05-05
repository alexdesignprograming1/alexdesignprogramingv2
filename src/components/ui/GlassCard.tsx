import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
}

export const GlassCard = ({ className, children, hoverable = true, ...props }: GlassCardProps) => {
  return (
    <div
      className={cn(
        'glass-panel rounded-2xl p-6 transition-all duration-500',
        hoverable && 'hover:glass-panel-active hover:translate-y-[-4px]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
