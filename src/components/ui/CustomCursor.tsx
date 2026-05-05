'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out',
      });
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: 'power3.out',
      });
    };

    const onMouseDown = () => {
      gsap.to([cursor, follower], { scale: 0.8, duration: 0.3 });
    };

    const onMouseUp = () => {
      gsap.to([cursor, follower], { scale: 1, duration: 0.3 });
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
    };
  });

  useEffect(() => {
    const targets = document.querySelectorAll('a, button, .magnetic');
    
    const onEnter = () => {
      gsap.to(followerRef.current, {
        scale: 2.5,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: '0px',
        duration: 0.3
      });
      gsap.to(cursorRef.current, {
        scale: 0,
        duration: 0.3
      });
    };

    const onLeave = () => {
      gsap.to(followerRef.current, {
        scale: 1,
        backgroundColor: 'transparent',
        borderWidth: '1px',
        duration: 0.3
      });
      gsap.to(cursorRef.current, {
        scale: 1,
        duration: 0.3
      });
    };

    targets.forEach(t => {
      t.addEventListener('mouseenter', onEnter);
      t.addEventListener('mouseleave', onLeave);
    });

    return () => {
      targets.forEach(t => {
        t.removeEventListener('mouseenter', onEnter);
        t.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-10 h-10 border border-white/30 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 mix-blend-difference transition-transform"
      />
    </>
  );
};
