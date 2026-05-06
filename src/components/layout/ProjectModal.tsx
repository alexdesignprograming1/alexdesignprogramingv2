'use client';

import React, { useEffect, useRef } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import { Magnetic } from '@/components/ui/Magnetic';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export interface ProjectData {
  title: string;
  tag: string;
  desc: string;
  num: string;
  image?: string;
  url?: string;
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectData | null;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (isOpen) {
      gsap.set(containerRef.current, { visibility: 'visible' });
      gsap.to(containerRef.current, {
        opacity: 1,
        duration: 0.5,
        ease: 'power3.out',
      });
      gsap.fromTo(contentRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'expo.out', delay: 0.2 }
      );
    } else {
      gsap.to(containerRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: 'power3.inOut',
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

  // We render the wrapper even when project is null so animations can play out during close
  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-md text-white flex items-center justify-center p-6 md:p-12 invisible opacity-0"
    >
      <div className="absolute top-6 right-6 md:top-10 md:right-10 z-[210]">
        <Magnetic strength={30}>
          <button
            onClick={onClose}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white text-black flex items-center justify-center hover:bg-red-600 hover:text-white transition-all duration-500 group"
          >
            <X className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </Magnetic>
      </div>

      <div ref={contentRef} className="w-full max-w-7xl h-auto md:h-[80vh] flex flex-col lg:flex-row gap-8 md:gap-12 items-center relative mt-16 md:mt-0">
        {/* Project Image Area */}
        <div className="w-full lg:w-1/2 h-[40vh] md:h-full rounded-[30px] md:rounded-[40px] bg-zinc-950 border border-white/5 overflow-hidden relative flex items-center justify-center group shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-red-950/60 to-black opacity-90" />
          <span className="text-white/10 font-integral text-[15vw] md:text-[8vw] absolute tracking-tighter">
            {project?.num}
          </span>
          {project?.image && (
            <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
          )}
        </div>

        {/* Project Details Area */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <span className="text-hape-label text-red-600 font-druk mb-4 md:mb-6">{project?.tag}</span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black font-integral uppercase tracking-tight mb-6 md:mb-8 text-white">
            {project?.title}
          </h2>
          <p className="text-zinc-400 text-lg md:text-2xl font-neue leading-relaxed mb-8 md:mb-12 max-w-xl">
            {project?.desc}
          </p>

          <div className="flex items-center gap-6">
            <a href={project?.url} target="_blank" rel="noopener noreferrer" className="px-6 py-4 md:px-8 md:py-4 rounded-full bg-white text-black font-bold font-druk uppercase tracking-wider hover:bg-red-600 hover:text-white transition-colors text-xs md:text-sm flex items-center gap-3 group">
              Visitar Projeto
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
