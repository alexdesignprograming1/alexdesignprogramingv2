'use client';

import React, { useEffect, useRef } from 'react';
import { X, Play, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Magnetic } from '@/components/ui/Magnetic';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { link } from 'fs';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MenuModal: React.FC<MenuModalProps> = ({ isOpen, onClose }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (isOpen) {
      gsap.set(containerRef.current, { visibility: 'visible' });
      gsap.to(containerRef.current, {
        clipPath: 'circle(150% at 95% 5%)',
        duration: 1.2,
        ease: 'expo.inOut',
      });

      gsap.from('.menu-main-link', {
        y: 100,
        rotateX: -45,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'expo.out',
        delay: 0.6,
      });

      gsap.from('.menu-sub-link', {
        x: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: 'power3.out',
        delay: 1,
      });
    } else {
      gsap.to(containerRef.current, {
        clipPath: 'circle(0% at 95% 5%)',
        duration: 0.8,
        ease: 'expo.inOut',
        onComplete: () => {
          gsap.set(containerRef.current, { visibility: 'hidden' });
        }
      });
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] bg-[#6a0000] text-white flex flex-col p-10 md:p-20 overflow-hidden invisible"
      style={{ clipPath: 'circle(0% at 95% 5%)' }}
    >
      {/* Noise Overlay */}
      <div className="noise-overlay opacity-10" />

      {/* Header */}
      <div className="flex justify-between items-start relative z-10">
        <div className="flex items-center gap-4">
          <span className="text-3xl font-black font-integral">Alex Design Programing®</span>
        </div>

        <div className="flex items-center gap-6">
          <span className="text-[12px] font-bold tracking-[0.4em] opacity-40 uppercase font-druk">Close Menu</span>
          <Magnetic strength={30}>
            <button
              onClick={onClose}
              className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center hover:bg-black hover:text-white transition-all duration-500 group"
            >
              <X className="w-6 h-6" />
            </button>
          </Magnetic>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow flex flex-col lg:flex-row items-center justify-between mt-20 relative z-10">
        <div className="flex flex-col gap-4">
          {['HOME', 'QUEM SOMOS', 'PROJETOS', 'SERVIÇOS'].map((link, i) => (
            <div key={link} className="overflow-hidden">
              <h2 className="menu-main-link text-[8vw] md:text-[6vw] font-black tracking-[-0.04em] leading-[0.9] font-integral uppercase cursor-pointer hover:text-white/40 transition-colors">
                {link}
                <span className="text-[12px] font-bold ml-4 align-top opacity-20">0{i + 1} /</span>
              </h2>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-8 text-right mt-20 lg:mt-0">
          {[
            { name: 'INSTAGRAM', url: 'https://www.instagram.com/alexdesignprograming/' },
            { name: 'LINKEDIN', url: 'https://www.linkedin.com/in/alex-silva-programing/' },
            { name: 'WHATSAPP', url: 'https://api.whatsapp.com/send/?phone=5581999246196&text=Ol%C3%A1%21+Acessei+o+site+e+gostaria+de+saber+mais.&type=phone_number&app_absent=0' },
            { name: 'alexsilva10san@gmail.com', url: 'mailto:alexsilva10san@gmail.com' }
          ].map((link) => (
            <div key={link.name} className="menu-sub-link flex items-center justify-end gap-4 group cursor-pointer">
              <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-[12px] font-bold tracking-tighter opacity-40 group-hover:opacity-100 transition-opacity font-druk uppercase">
                {link.name}
              </a >
              <ArrowUpRight className="w-4 h-4 opacity-20 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col md:flex-row justify-between items-end mt-auto relative z-10">
        <Magnetic strength={20}>
          <Button variant="hape" size="lg" icon={<Play className="w-4 h-4 fill-current" />}>
            ENTRAR EM CONTATO
          </Button>
        </Magnetic>

        {/* <div className="flex gap-12 mt-10 md:mt-0">
          <span className="text-[11px] font-bold tracking-[0.3em] opacity-40 hover:opacity-100 transition-opacity cursor-pointer font-druk uppercase">
            Terms & Conditions
          </span>
          <span className="text-[11px] font-bold tracking-[0.3em] opacity-40 hover:opacity-100 transition-opacity cursor-pointer font-druk uppercase">
            Privacy Policy
          </span>
        </div> */}
      </div>

      {/* Background Text */}
      <div className="absolute bottom-[-5%] left-1/2 -translate-x-1/2 opacity-5 pointer-events-none whitespace-nowrap overflow-hidden">
        <span className="text-[25vw] font-black font-integral uppercase">ALEX D </span>
      </div>
    </div>
  );
};
