'use client';

import React, { useRef } from 'react';
import { Button } from '@/components/ui/Button';
import { Magnetic } from '@/components/ui/Magnetic';
import { GlassCard } from '@/components/ui/GlassCard';
import { NeuralBackground } from '@/components/ui/NeuralBackground';
import { Play, MoreHorizontal, ArrowUpRight, Volume2, ArrowRight, ArrowDown, Cpu, Zap, Globe, Shield, BarChart, MessageSquare, Layers } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MenuModal } from '@/components/layout/MenuModal';
import Spline from '@splinetool/react-spline';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

    // Entrance sequence
    tl.from('.hero-title span', {
      y: 200,
      rotateX: -45,
      opacity: 0,
      duration: 2,
      stagger: 0.2,
      ease: 'expo.out'
    }, 0.5)
      .from('.corner-ui-item', {
        y: -40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.05
      }, 1.2)
      .from('.hero-cta-pill', {
        scale: 0.8,
        opacity: 0,
        duration: 1.5,
        ease: 'elastic.out(1, 0.5)'
      }, 1.5)
      .from('.spline-container', {
        opacity: 0,
        duration: 2,
        ease: 'power2.inOut'
      }, 0.8);

    // Background Typography Parallax
    gsap.to('.hero-bg-text', {
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
      y: -200,
      opacity: 0.2,
    });
  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="relative bg-[#6a0000] hide-scrollbar overflow-hidden font-neue">
      {/* Noise Overlay */}
      <div className="noise-overlay" />

      {/* Mesh Background */}
      <div className="fixed inset-0 -z-10 bg-red-mesh" />

      {/* Hero Section */}
      <section className="hero-section relative h-screen w-full flex flex-col items-center justify-center overflow-hidden px-6">

        {/* Mobile Header (Hape Style) */}
        <div className="absolute top-6 left-6 right-6 z-50 flex md:hidden items-center justify-between pointer-events-none">
          <div className="pointer-events-auto">
            <span className="text-xl font-black font-integral text-white tracking-tighter">ADP®</span>
          </div>
          <div className="flex items-center gap-4 pointer-events-auto">
            <div className="flex flex-col items-end opacity-40">
              <div className="flex gap-0.5 h-3 items-end">
                {[0.4, 0.8, 0.6, 1].map((h, i) => <div key={i} className="w-[2px] bg-white" style={{ height: `${h * 100}%` }} />)}
              </div>
            </div>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center"
            >
              <div className="flex flex-col gap-1">
                <div className="w-5 h-[1.5px] bg-black" />
                <div className="w-5 h-[1.5px] bg-black" />
              </div>
            </button>
          </div>
        </div>

        {/* Desktop Header */}
        <div className="absolute top-10 left-10 z-50 hidden md:flex items-center gap-6 corner-ui-item">
          <Magnetic strength={20}>
            <Button variant="hape" size="md" icon={<Play className="w-4 h-4 fill-current" />}>
              Play Trailer
            </Button>
          </Magnetic>
          <div className="hidden lg:flex flex-col gap-1">
            <span className="text-[10px] font-bold tracking-[0.4em] opacity-40 uppercase font-druk">Fluxo produtivo
            </span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_#ef4444]" />
              <span className="text-[11px] font-bold tracking-[0.2em] text-white/80 uppercase font-druk">Ação: ativamente</span>
            </div>
          </div>
        </div>

        {/* <div className="absolute top-12 left-1/2 -translate-x-1/2 z-50 hidden md:block corner-ui-item">
          <span className="text-[12px] font-bold tracking-[0.4em] opacity-60 font-integral text-white">ALEX DESIGN & PROGRAMMING</span>
        </div> */}

        <div className="absolute top-10 right-10 z-50 hidden md:flex items-center gap-6 corner-ui-item">
          <Magnetic strength={20}>
            <Button variant="hape" size="md" icon={<MoreHorizontal className="w-5 h-5" />}>
              Entre em contato
            </Button>
          </Magnetic>
          <Magnetic strength={30}>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="h-14 w-14 flex flex-col gap-1.5 items-center justify-center rounded-full bg-black/80 border border-white/10 hover:bg-white hover:text-black transition-all duration-500 group"
            >
              <div className="w-5 h-[1.5px] bg-white group-hover:bg-black transition-colors" />
              <div className="w-5 h-[1.5px] bg-white group-hover:bg-black transition-colors" />
              <div className="w-5 h-[1.5px] bg-white group-hover:bg-black transition-colors" />
            </button>
          </Magnetic>
        </div>

        <MenuModal isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

        {/* Neural Network Backdrop */}
        <div className="absolute inset-0 z-0 opacity-30">
          <NeuralBackground />
        </div>

        {/* Spline 3D Scene - Center Side */}
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none spline-container">
          <div className="w-full h-full pointer-events-auto">
            <Spline scene="https://prod.spline.design/XPu1B3hT0CtD01bu/scene.splinecode" />
          </div>
        </div>

        {/* Large Background Typography */}
        <div className="hero-bg-text absolute inset-0 z-0 flex flex-col items-center justify-center select-none pointer-events-none opacity-80">
          <h1 className="text-[35vw] md:text-[8vw] font-black tracking-[-0.08em] leading-[0.75] text-black/90 font-integral flex flex-col items-center">
            <span className="inline-block translate-y-[-5%]">Alex Design Programing</span>
          </h1>
          {/* <div className="mt-8 text-center md:hidden px-10">
            <p className="text-[10px] font-bold tracking-[0.3em] opacity-40 uppercase font-druk">Fully 3D and ready to redefine digital fashion</p>
          </div> */}
        </div>

        {/* Desktop Bottom UI */}
        <div className="absolute bottom-10 left-10 z-50 hidden md:flex items-center gap-4 corner-ui-item">
          <div className="flex flex-col">
            <span className="text-hape-label opacity-40 mb-2">IA & automação</span>
            <Magnetic strength={15}>
              <div className="flex items-center gap-3 group cursor-pointer">
                <span className="text-[12px] font-bold tracking-[0.3em] uppercase text-white group-hover:text-red-400 transition-colors font-druk">Projetos</span>
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </Magnetic>
          </div>
        </div>

        {/* Mobile Bottom UI (Hape Style) */}
        <div className="absolute bottom-10 left-8 right-8 z-50 md:hidden flex items-end justify-between pointer-events-none">
          <div className="flex gap-4 pointer-events-auto">
            <div className="w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center">
              <Cpu className="w-5 h-5 text-white/60" />
            </div>
            <div className="w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center overflow-hidden">
              <div className="w-full h-full bg-white/20 flex items-center justify-center text-[8px] font-bold">ICON</div>
            </div>
          </div>

          {/* Mobile Scroll Indicator - Centered in the middle area */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 flex flex-col items-center gap-2 opacity-30 pointer-events-auto">
            <div className="w-[16px] h-[26px] rounded-full border border-white/30 relative overflow-hidden">
              <div className="animate-bounce absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full" />
            </div>
          </div>
        </div>

        {/* Scroll to Explore - Premium Centered Stack */}
        <div className="absolute bottom-10 left-0 right-0 z-50 hidden md:flex justify-center items-center corner-ui-item pointer-events-none">
          <div className="flex flex-col items-center gap-3 opacity-40 pointer-events-auto group cursor-pointer">
            <div className="w-8 h-12 rounded-full border border-white/20 relative overflow-hidden">
              <div className="animate-bounce absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full" />
            </div>
            <p className="text-[9px] font-bold tracking-[0.3em] uppercase font-druk text-center leading-none">
              Scroll <br /> <span className="opacity-60">to explore</span>
            </p>
          </div>
        </div>

        <div className="absolute bottom-10 right-10 z-50 flex flex-col items-end corner-ui-item">
          <span className="text-hape-label opacity-40 mb-2 text-right">Design & Programing</span>
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-end">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/60 font-druk">alexdp</span>
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-white hover:text-red-400 transition-colors cursor-pointer font-druk">Skills</span>
            </div>
            <Magnetic strength={20}>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer">
                <Volume2 className="w-4 h-4" />
              </div>
            </Magnetic>
          </div>
        </div>
      </section>

      {/* Immersive Scroll Content */}
      <div className="relative z-30 bg-black/80 backdrop-blur-[100px] border-t border-white/5">

        {/* Work Section */}
        <section id="work" className="py-64 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="flex flex-col mb-40 reveal-up">
            <span className="text-hape-label text-red-500 mb-10 block font-druk">Selected Works 2024—2025</span>
            <h2 className="text-[9vw] font-black tracking-[-0.05em] leading-[0.85] text-white font-integral uppercase">
              CRAFTING <br /> THE FUTURE.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-32">
            {[
              { title: "NeuroSync OS", tag: "AI Platform", desc: "Next-gen operating system for neural-link devices.", num: "01" },
              { title: "Aether Fashion", tag: "Digital Wear", desc: "Redefining high-fashion in the digital metaverse.", num: "02" }
            ].map((item, i) => (
              <div key={i} className="group reveal-up cursor-pointer">
                <div className="aspect-[16/10] rounded-[40px] bg-zinc-950 border border-white/5 mb-12 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-950/60 to-black opacity-90 group-hover:scale-110 transition-transform duration-[2s] ease-out" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700">
                    <Magnetic strength={30}>
                      <Button variant="hape" size="md" icon={<ArrowUpRight className="w-4 h-4" />}>Explore Case</Button>
                    </Magnetic>
                  </div>
                  {/* Number Overlay */}
                  <span className="absolute top-8 left-8 text-[40px] font-black text-white/5 font-integral">{item.num}</span>
                </div>
                <div className="flex items-center gap-6 mb-6">
                  <span className="text-hape-label text-red-600 font-druk">{item.tag}</span>
                  <div className="h-[1px] flex-grow bg-white/10" />
                </div>
                <h4 className="text-4xl font-bold mb-6 text-white group-hover:translate-x-3 transition-transform duration-700 font-integral uppercase tracking-tight">{item.title}</h4>
                <p className="text-zinc-500 leading-relaxed max-w-md text-lg font-neue">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services & Strategy */}
        <section id="services" className="py-64 bg-white text-black relative overflow-hidden">
          {/* Subtle noise on white bg */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/noise.png')] bg-repeat" />

          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">
              <div className="reveal-up sticky top-32">
                <span className="text-[11px] font-bold tracking-[0.5em] uppercase text-red-600 mb-10 block font-druk">Agency DNA</span>
                <h2 className="text-[7vw] font-black tracking-[-0.04em] leading-[0.85] mb-14 font-integral uppercase">
                  WE BUILD <br /> WHAT OTHERS <br /> DREAM.
                </h2>
                <Magnetic strength={20}>
                  <Button variant="hape" size="lg" className="bg-black text-white hover:bg-zinc-900 border-none px-10 h-16" icon={<ArrowRight className="w-5 h-5" />}>
                    View Capabilities
                  </Button>
                </Magnetic>
              </div>
              <div className="grid grid-cols-1 gap-16 reveal-up pt-10">
                {[
                  { title: "Generative AI", desc: "Custom LLMs and image generation pipelines tailored for high-end brand experiences." },
                  { title: "Creative Dev", desc: "Award-winning motion design and immersive WebGL environments that captivate." },
                  { title: "Digital Fashion", desc: "Bridging the gap between physical craft and digital identity through 3D assets." },
                  { title: "Cloud Scale", desc: "Robust, high-performance infrastructure built for global scalability and security." }
                ].map((s, i) => (
                  <div key={i} className="border-b border-black/10 pb-12 group cursor-pointer">
                    <div className="flex items-start justify-between mb-6">
                      <h5 className="text-4xl font-black font-integral uppercase tracking-tighter group-hover:translate-x-2 transition-transform duration-500">
                        {s.title}
                      </h5>
                      <span className="text-red-600 font-druk text-sm">0{i + 1}</span>
                    </div>
                    <p className="text-zinc-600 text-xl leading-relaxed font-neue max-w-lg">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer / Contact */}
        <footer className="py-48 px-6 relative overflow-hidden flex flex-col items-center">
          <div className="reveal-up relative z-10 w-full">
            <span className="text-hape-label opacity-40 mb-16 block text-center font-druk">Available for global projects</span>
            <h2 className="text-[14vw] font-black tracking-[-0.06em] leading-none mb-20 text-white font-integral text-center uppercase">
              LET&apos;S <br /> CONNECT.
            </h2>
            <div className="flex flex-wrap justify-center gap-x-16 gap-y-8">
              {['Instagram', 'Twitter', 'LinkedIn', 'Behance'].map((s) => (
                <Magnetic key={s} strength={15}>
                  <span className="text-hape-label hover:text-red-500 transition-colors cursor-pointer font-druk text-xs">{s}</span>
                </Magnetic>
              ))}
            </div>
            <div className="mt-40 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 w-full max-w-7xl mx-auto px-6 opacity-40">
              <span className="text-[10px] font-bold tracking-widest uppercase">© 2025 ADP AGENCY</span>
              <span className="text-[10px] font-bold tracking-widest uppercase">London / São Paulo / Tokyo</span>
              <span className="text-[10px] font-bold tracking-widest uppercase">Pixel Perfect Logic</span>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
