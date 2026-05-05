'use client';

import React, { useRef } from 'react';
import { Button } from '@/components/ui/Button';
import { Magnetic } from '@/components/ui/Magnetic';
import { GlassCard } from '@/components/ui/GlassCard';
import { NeuralBackground } from '@/components/ui/NeuralBackground';
import { ArrowRight, ArrowDown, Cpu, Zap, Globe, Shield, BarChart, MessageSquare, Layers } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Entrance Animation
    const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

    tl.from('.hero-tag', {
      y: 20,
      opacity: 0,
      duration: 1,
    }, 0.5)
    .from('.hero-title span', {
      y: 100,
      opacity: 0,
      duration: 1.5,
      stagger: 0.1,
      skewY: 7,
      ease: 'expo.out'
    }, 0.7)
    .from('.hero-p', {
      y: 20,
      opacity: 0,
      duration: 1,
    }, 1.2)
    .from('.hero-cta', {
      scale: 0.8,
      opacity: 0,
      duration: 1,
    }, 1.4)
    .from('.scroll-indicator', {
      y: -20,
      opacity: 0,
      duration: 1,
      repeat: -1,
      yoyo: true
    }, 2);

    // Scroll Effects for Hero
    gsap.to('.hero-bg', {
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
      scale: 1.2,
      y: 100,
      opacity: 0.2,
    });

    gsap.to('.hero-content-inner', {
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
      y: -100,
      opacity: 0,
    });

    // Fade-in animations for all sections
    const fadeElements = gsap.utils.toArray('.scroll-fade');
    fadeElements.forEach((el: any) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          toggleActions: 'play none none none'
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });
    });

  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="relative bg-black hide-scrollbar">
      {/* Background Mesh */}
      <div className="hero-bg fixed inset-0 -z-10 bg-mesh opacity-40 transition-opacity duration-1000" />
      
      {/* Immersive Hero Section */}
      <section className="hero-section relative h-screen w-full flex items-center justify-center overflow-hidden px-6">
        <NeuralBackground />
        <div className="hero-content-inner text-center z-10">
          <div className="hero-tag inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-500">Engineered for the Future</span>
          </div>
          
          <h1 className="hero-title text-[12vw] md:text-[8vw] font-bold tracking-tighter leading-[0.9] mb-12 overflow-hidden py-4">
            <span className="inline-block">ALEX</span> <br />
            <span className="inline-block text-zinc-600">DESIGN</span>
          </h1>

          <div className="hero-p-container overflow-hidden mb-12">
            <p className="hero-p text-lg md:text-xl text-zinc-400 max-w-xl mx-auto leading-relaxed">
              Pioneering the intersection of artificial intelligence and avant-garde digital design.
            </p>
          </div>

          <div className="hero-cta flex justify-center">
            <Magnetic strength={50}>
              <Button 
                onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg" 
                className="h-24 w-24 md:h-32 md:w-32 rounded-full bg-white text-black hover:scale-110 transition-transform duration-500 text-sm font-bold flex flex-col gap-1 items-center justify-center group"
              >
                <span className="group-hover:-translate-y-1 transition-transform">START</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Magnetic>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Scroll</span>
          <ArrowDown className="w-4 h-4 text-zinc-500" />
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-32 px-6 md:px-12 max-w-7xl mx-auto relative z-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6 scroll-fade">
          <div className="max-w-xl">
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-zinc-600 mb-6">Featured Work</h2>
            <h3 className="text-4xl md:text-6xl font-semibold leading-tight">High-impact automation for visionary brands.</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "Nexus E-Commerce Sync", desc: "Automated inventory and order routing system reducing manual processing time by 85%." },
            { title: "Lumina AI Copilot", desc: "Custom trained LLM integration for an enterprise SaaS platform, providing contextual user assistance." },
            { title: "Quantum Data Pipeline", desc: "Real-time predictive analytics dashboard combining multiple unstructured data sources." },
            { title: "Aether Lead Gen", desc: "Multi-channel autonomous lead qualification agent increasing conversion rates by 40%." }
          ].map((item, i) => (
            <GlassCard key={i} className="group scroll-fade p-8">
              <div className="aspect-[16/10] rounded-xl bg-zinc-900 border border-white/5 mb-8 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-black opacity-50 group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <Button variant="outline" className="bg-white/10 backdrop-blur-md border-white/20">View Case Study</Button>
                </div>
              </div>
              <h4 className="text-2xl font-semibold mb-3 group-hover:text-white transition-colors">{item.title}</h4>
              <p className="text-zinc-500 leading-relaxed">{item.desc}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Workflow Showcase */}
      <section id="stack" className="py-32 px-6 md:px-12 bg-zinc-950/30 relative border-y border-white/5 z-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 scroll-fade text-center md:text-left">
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-zinc-600 mb-6">Workflow Showcase</h2>
            <h3 className="text-4xl md:text-5xl font-semibold">Transforming Manual into Automatic</h3>
          </div>

          <div className="space-y-8">
            {[
              {
                title: "Automated Content Engine",
                before: "Manual topic research, drafting, editing, and scheduling taking 15+ hours weekly.",
                after: "AI generates topic clusters, drafts variations, and auto-schedules to platforms.",
                metric: "13 hrs/week saved"
              },
              {
                title: "Intelligent Lead Gen Bot",
                before: "Static contact forms leading to high drop-off rates and unqualified sales calls.",
                after: "Conversational AI qualifies leads 24/7, scores intent, and books calendar slots directly.",
                metric: "+45% Conversion Lift"
              },
              {
                title: "Client Onboarding Sync",
                before: "Manual data entry across CRM, billing, and project management tools.",
                after: "Single form submission triggers automated account creation across 5 platforms instantly.",
                metric: "0% Errors"
              }
            ].map((item, i) => (
              <GlassCard key={i} className="flex flex-col md:flex-row gap-12 items-center scroll-fade p-10 hover:border-white/20">
                <div className="flex-1">
                  <h4 className="text-3xl font-semibold mb-10">{item.title}</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                    <div className="relative pl-6 border-l border-red-500/20">
                      <span className="text-[10px] font-bold tracking-widest uppercase text-red-500/40 mb-3 block">Process Before</span>
                      <p className="text-zinc-500 text-sm leading-relaxed">{item.before}</p>
                    </div>
                    <div className="relative pl-6 border-l border-emerald-500/20">
                      <span className="text-[10px] font-bold tracking-widest uppercase text-emerald-500/60 mb-3 block">Intelligent After</span>
                      <p className="text-zinc-300 text-sm leading-relaxed">{item.after}</p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-56 p-8 rounded-2xl bg-white/5 border border-white/10 text-center backdrop-blur-xl">
                  <span className="text-3xl font-bold text-white block mb-2">{item.metric.split(' ')[0]}</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold leading-none">{item.metric.split(' ').slice(1).join(' ')}</span>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 md:px-12 max-w-7xl mx-auto relative z-20">
        <div className="text-center mb-20 scroll-fade">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-zinc-600 mb-6">Core Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-semibold">Bespoke AI designed for scale.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Custom LLM Integration", desc: "Embed language models tailored to your specific business data and domain expertise.", icon: Cpu },
            { title: "Voice AI Agents", desc: "Deploy conversational voice bots for customer support, inbound sales, and interactive experiences.", icon: MessageSquare },
            { title: "Predictive Analytics", desc: "Transform raw data into actionable foresight with custom-built visual analytics and forecasting.", icon: BarChart },
            { title: "Workflow Automation", desc: "Connect disparate SaaS tools into seamless, zero-touch operational pipelines.", icon: Zap },
            { title: "Generative Media", desc: "Automate the creation of high-quality images, video, and audio assets for marketing.", icon: Layers },
            { title: "AI Security", desc: "Ensure your AI implementations are secure, private, and compliant with industry regulations.", icon: Shield },
          ].map((service, i) => (
            <GlassCard key={i} className="scroll-fade group p-10">
              <service.icon className="w-12 h-12 text-zinc-500 group-hover:text-white mb-8 transition-colors duration-500" strokeWidth={1} />
              <h4 className="text-xl font-semibold mb-4 group-hover:text-white transition-colors">{service.title}</h4>
              <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-400 transition-colors">{service.desc}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 md:px-12 border-t border-white/5 relative z-20">
        <div className="max-w-7xl mx-auto">
           <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-12">
            <div className="flex items-center gap-3">
              <span className="text-white font-bold tracking-tighter text-3xl">ALEX</span>
              <span className="text-zinc-700 font-medium">/</span>
              <span className="text-zinc-600 text-xs tracking-widest uppercase font-bold">Engineered for the Future</span>
            </div>
            
            <div className="flex gap-10">
              {['Privacy', 'Terms', 'LinkedIn', 'GitHub'].map((item) => (
                <a key={item} href="#" className="text-zinc-600 hover:text-white text-[10px] transition-colors uppercase tracking-[0.3em] font-bold">
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="text-center md:text-left pt-8 border-t border-white/5">
             <p className="text-zinc-800 text-[10px] uppercase tracking-widest">© 2024 ALEX DESIGN & PROGRAMMING. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
