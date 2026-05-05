'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface MagneticProps {
  children: React.ReactNode;
  strength?: number;
}

export const Magnetic = ({ children, strength = 40 }: MagneticProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const container = containerRef.current;
    if (!container) return;

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = container.getBoundingClientRect();
      
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      const moveX = (clientX - centerX) / (width / 2);
      const moveY = (clientY - centerY) / (height / 2);

      gsap.to(container, {
        x: moveX * strength,
        y: moveY * strength,
        duration: 1,
        ease: 'power3.out',
      });
    };

    const onMouseLeave = () => {
      gsap.to(container, {
        x: 0,
        y: 0,
        duration: 1,
        ease: 'elastic.out(1, 0.3)',
      });
    };

    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('mouseleave', onMouseLeave);

    return () => {
      container.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('mouseleave', onMouseLeave);
    };
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="magnetic inline-block">
      {children}
    </div>
  );
};
