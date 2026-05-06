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
            <a href="#work">
              <Button variant="hape" size="md" icon={<Play className="w-4 h-4 fill-current" />}>
                Ver Portfolio
              </Button>
            </a>
          </Magnetic>
          <div className="hidden lg:flex flex-col gap-1">
            <span className="text-[10px] font-bold tracking-[0.4em] opacity-40 uppercase font-druk">Status do Sistema
            </span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_#ef4444]" />
              <span className="text-[11px] font-bold tracking-[0.2em] text-white/80 uppercase font-druk">Aceitando Projetos</span>
            </div>
          </div>
        </div>

        {/* <div className="absolute top-12 left-1/2 -translate-x-1/2 z-50 hidden md:block corner-ui-item">
          <span className="text-[12px] font-bold tracking-[0.4em] opacity-60 font-integral text-white">ALEX DESIGN & PROGRAMMING</span>
        </div> */}

        <div className="absolute top-10 right-10 z-50 hidden md:flex items-center gap-6 corner-ui-item">
          <Magnetic strength={20}>
            <a href="https://api.whatsapp.com/send/?phone=5581999246196&text=Ol%C3%A1%21+Acessei+o+site+e+gostaria+de+saber+mais.&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
              <Button variant="hape" size="md" icon={<MoreHorizontal className="w-5 h-5" />}>
                Iniciar Projeto
              </Button>
            </a>
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
        <div className="hero-bg-text absolute inset-0 z-20 flex flex-col items-center justify-start pt-40 select-none pointer-events-none opacity-80">
          <h1 className="text-[35vw] md:text-[8vw] font-black tracking-[-0.08em] leading-[0.75] text-white/90 font-integral flex flex-col items-center">
            <span className="inline-block translate-y-[-5%]">Alex Design Programing</span>
          </h1>

          <div className="flex justify-between w-full gap-4">
            <div className="mt-8 text-center px-10 max-w-[30%]">
              <p className="text-[12px] font-bold tracking-[0.3em] opacity-100 uppercase font-druk">LANDING PAGES DE ALTA PERFORMANCE, AUTOMAÇÕES INTELIGENTES</p>
            </div>
            <div className="mt-8 text-center px-10 max-w-[30%]">
              <p className="text-[12px] font-bold tracking-[0.3em] opacity-100 uppercase font-druk">DESIGN FOCADO EM CONVERSÃO, PROCESSOS 100% AUTOMATIZADOS COM IA</p>
            </div>
          </div>
        </div>

        {/* Desktop Bottom UI */}
        <div className="absolute bottom-10 left-10 z-50 hidden md:flex items-center gap-4 corner-ui-item">
          <div className="flex flex-col">
            <span className="text-hape-label opacity-40 mb-2">IA & automação</span>
            <Magnetic strength={15}>
              <div className="flex items-center gap-3 group cursor-pointer">
                <a href="#work" className="text-[12px] font-bold tracking-[0.3em] uppercase text-white group-hover:text-red-400 transition-colors font-druk">Projetos</a>
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
              <div className="w-full h-full bg-white/20 flex items-center justify-center text-[8px] font-bold">IA</div>
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
              Role para <br /> <span className="opacity-60">explorar</span>
            </p>
          </div>
        </div>

        <div className="absolute bottom-10 right-10 z-50 flex flex-col items-end corner-ui-item">
          <span className="text-hape-label opacity-40 mb-2 text-right">Design & Programing</span>
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-end">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/60 font-druk">Tech Stack</span>
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
            <span className="text-hape-label text-red-500 mb-10 block font-druk">Projetos em destaque</span>
            <h2 className="text-[7vw] font-black tracking-[-0.05em] leading-[0.85] text-white font-integral uppercase">
              DESIGN & <br /> AUTOMAÇÃO & <br /> IA
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
                      <a href="#">
                        <Button variant="hape" size="md" icon={<ArrowUpRight className="w-4 h-4" />}>Ver Projeto</Button>
                      </a>
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
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">
              <div className="reveal-up sticky top-32 lg:col-span-7">
                <span className="text-[11px] font-bold tracking-[0.5em] uppercase text-red-600 mb-10 block font-druk">NOSSAS SOLUÇÕES</span>
                <h2 className="text-[15vw] lg:text-[6vw] font-black tracking-[-0.04em] leading-[0.85] mb-24 font-integral uppercase text-black">
                  NÓS <br /> CRIAMOS, <br /> A I.A. <br /> TRABALHA.
                </h2>
                <Magnetic strength={20}>
                  <a href="https://api.whatsapp.com/send/?phone=5581999246196&text=Ol%C3%A1%21+Acessei+o+site+e+gostaria+de+saber+mais.&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                    <Button variant="hape" size="lg" className="bg-black text-white hover:bg-zinc-900 border-none px-10 h-16" icon={<ArrowRight className="w-5 h-5" />}>
                      Entrar em contato
                    </Button>
                  </a>
                </Magnetic>
              </div>
              <div className="flex flex-col gap-0 reveal-up lg:col-span-5 pt-10 lg:pt-0">
                {[
                  { title: "Landing Pages", desc: "Design focado em conversão extrema. Páginas ultra rápidas que transformam visitantes casuais em clientes qualificados." },
                  { title: "Automação de Fluxos", desc: "Conectamos todos os seus aplicativos. Sistemas inteligentes que rodam 24 horas por dia, 7 dias por semana, sem intervenção humana." },
                  { title: "Chatbots & IA", desc: "Assistentes virtuais avançados treinados com os dados do seu negócio para atendimento ao cliente e triagem de leads." },
                  { title: "Integrações de API", desc: "Sincronização de sistemas complexos. Tudo conectado em perfeita harmonia para escalar a infraestrutura da sua empresa." }
                ].map((s, i) => (
                  <div key={i} className="border-b border-black/10 pb-12 pt-12 first:pt-0 group cursor-pointer">
                    <div className="flex items-start justify-between mb-4">
                      <h5 className="text-2xl lg:text-3xl font-black font-integral uppercase tracking-tighter group-hover:translate-x-2 transition-transform duration-500 text-black">
                        {s.title}
                      </h5>
                      <span className="text-red-600 font-druk text-sm mt-1">0{i + 1}</span>
                    </div>
                    <p className="text-zinc-600 text-lg leading-relaxed font-neue max-w-md">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer / Contact */}
        <footer className="pt-20 pb-8 px-6 md:px-12 relative overflow-hidden bg-black text-white">
          {/* Deep Red Glow and Noise */}
          <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-red-950/80 to-transparent pointer-events-none opacity-80" />
          <div className="absolute inset-0 opacity-[0.25] pointer-events-none bg-[url('/noise.png')] bg-repeat mix-blend-overlay" />

          <div className="max-w-7xl mx-auto relative z-10 w-full">
            {/* Top Red Line (Partial) */}
            {/* <div className="w-full w-full h-[2px] bg-red-700 mb-20 opacity-20" /> */}

            <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
              {/* Col 1: Quote */}
              <div className="md:col-span-5 reveal-up">
                <h3 className="text-3xl md:text-[2rem] font-black font-integral uppercase leading-[1.1] mb-8 tracking-tight">
                  O DESIGN ATRAI.<br />
                  A IA PROCESSA.<br />
                  A AUTOMAÇÃO ESCALA.
                </h3>
                <p className="text-zinc-500 font-neue text-sm">Alex Silva</p>
              </div>

              {/* Col 2: Connect */}
              <div className="md:col-span-3 md:col-start-7 reveal-up">
                <h3 className="text-2xl md:text-1xl font-black font-integral uppercase leading-[1.1] mb-8 tracking-tight">
                  CONTATE-NOS
                </h3>
              </div>

              {/* Col 3: Links */}
              <div className="md:col-span-3 flex flex-col gap-4 reveal-up">
                {[
                  { name: 'Instagram', url: 'https://www.instagram.com/alexdesignprograming/' },
                  { name: 'WhatsApp', url: 'https://api.whatsapp.com/send/?phone=5581999246196&text=Ol%C3%A1%21+Acessei+o+site+e+gostaria+de+saber+mais.&type=phone_number&app_absent=0' },
                  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/alex-silva-programing/' },
                  { name: 'alexsilva10san@gmail.com', url: 'mailto:alexsilva10san@gmail.com' }
                ].map((link) => (
                  <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors font-neue text-sm flex items-center gap-3 w-fit group">
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                ))}
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 w-full text-[9px] font-bold tracking-[0.2em] uppercase font-druk text-zinc-500 reveal-up">
              <div className="flex gap-4">
                <span>© {new Date().getFullYear()} - ALEX DESIGN PROGRAMING</span>
              </div>
              {/* <div>
                <span className="text-white">STYLED BY @ALEX SILVA</span>
              </div> */}
              {/* <div className="flex gap-8">
                <span className="hover:text-white cursor-pointer transition-colors">TERMOS & CONDIÇÕES </span>
                <span className="hover:text-white cursor-pointer transition-colors">POLÍTICA DE PRIVACIDADE</span>
              </div> */}
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
