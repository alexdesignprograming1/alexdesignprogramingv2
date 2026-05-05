'use client';

import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/Button';
import { GlassCard } from '@/components/ui/GlassCard';
import { ArrowRight, Cpu, Zap, Globe, Shield, BarChart, MessageSquare, Layers } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.from('.hero-content > *', {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power4.out',
      });

      // Section Fade-in
      const sections = gsap.utils.toArray('.scroll-fade');
      sections.forEach((section: any) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
          },
          y: 60,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="flex-grow">
      {/* Background Glows */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] glow-soft rounded-full opacity-50" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] glow-soft rounded-full opacity-30" />
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="pt-44 pb-24 px-6 md:px-12 flex flex-col items-center text-center">
        <div className="hero-content max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-white/10 bg-white/5 mb-8">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-xs font-semibold tracking-widest uppercase text-zinc-400">Trusted by Visionaries</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.05]">
            ALEX DESIGN & <br />
            <span className="text-zinc-500">PROGRAMMING</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Dive into intelligent workflows, where innovative AI technology meets high-end web design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-zinc-200">
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline">
              View Work
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section id="work" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 scroll-fade">
          <div className="max-w-xl">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-zinc-500 mb-4">Portfolio</h2>
            <h3 className="text-4xl font-semibold">High-impact automation solutions delivered for forward-thinking brands.</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <GlassCard className="group scroll-fade">
            <div className="aspect-video rounded-lg bg-zinc-900 border border-white/5 mb-6 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-black opacity-50 group-hover:scale-105 transition-transform duration-700" />
            </div>
            <h4 className="text-2xl font-semibold mb-2">Nexus E-Commerce Sync</h4>
            <p className="text-zinc-400">Automated inventory and order routing system reducing manual processing time by 85%.</p>
          </GlassCard>

          <GlassCard className="group scroll-fade">
            <div className="aspect-video rounded-lg bg-zinc-900 border border-white/5 mb-6 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-black opacity-50 group-hover:scale-105 transition-transform duration-700" />
            </div>
            <h4 className="text-2xl font-semibold mb-2">Lumina AI Copilot</h4>
            <p className="text-zinc-400">Custom trained LLM integration for an enterprise SaaS platform, providing contextual user assistance.</p>
          </GlassCard>

          <GlassCard className="group scroll-fade">
            <div className="aspect-video rounded-lg bg-zinc-900 border border-white/5 mb-6 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-black opacity-50 group-hover:scale-105 transition-transform duration-700" />
            </div>
            <h4 className="text-2xl font-semibold mb-2">Quantum Data Pipeline</h4>
            <p className="text-zinc-400">Real-time predictive analytics dashboard combining multiple unstructured data sources.</p>
          </GlassCard>

          <GlassCard className="group scroll-fade">
            <div className="aspect-video rounded-lg bg-zinc-900 border border-white/5 mb-6 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-black opacity-50 group-hover:scale-105 transition-transform duration-700" />
            </div>
            <h4 className="text-2xl font-semibold mb-2">Aether Lead Gen</h4>
            <p className="text-zinc-400">Multi-channel autonomous lead qualification agent increasing conversion rates by 40%.</p>
          </GlassCard>
        </div>
      </section>

      {/* Workflow Showcase */}
      <section id="stack" className="py-24 px-6 md:px-12 bg-zinc-950/50 relative border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-fade">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-zinc-500 mb-4">Workflow Showcase</h2>
            <h3 className="text-4xl font-semibold">Transforming Manual into Automatic</h3>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Automated Content Engine",
                before: "Manual topic research, drafting, editing, and scheduling taking 15+ hours weekly.",
                after: "AI generates topic clusters, drafts variations, and auto-schedules. Time saved: 13 hrs/week",
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
              <GlassCard key={i} className="flex flex-col md:flex-row gap-8 items-center scroll-fade">
                <div className="flex-1">
                  <h4 className="text-2xl font-semibold mb-6">{item.title}</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <span className="text-[10px] font-bold tracking-widest uppercase text-red-500/50 mb-2 block">Before</span>
                      <p className="text-zinc-500 text-sm">{item.before}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold tracking-widest uppercase text-emerald-500/50 mb-2 block">After</span>
                      <p className="text-zinc-300 text-sm">{item.after}</p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-48 p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                  <span className="text-2xl font-bold text-white block mb-1">{item.metric.split(' ')[0]}</span>
                  <span className="text-[10px] uppercase tracking-widest text-zinc-500">{item.metric.split(' ').slice(1).join(' ')}</span>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16 scroll-fade">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-zinc-500 mb-4">Core Services</h2>
          <h3 className="text-4xl font-semibold">Bespoke artificial intelligence designed for scale.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Custom LLM Integration", desc: "Embed language models tailored to your specific business data.", icon: Cpu },
            { title: "Voice AI Agents", desc: "Deploy conversational voice bots for customer support and sales.", icon: MessageSquare },
            { title: "Predictive Analytics", desc: "Transform raw data into actionable foresight with custom visuals.", icon: BarChart },
            { title: "Workflow Automation", desc: "Connect disparate SaaS tools into seamless, zero-touch pipelines.", icon: Zap },
            { title: "Generative Media", desc: "Automate high-quality images, video, and audio asset creation.", icon: Layers },
            { title: "AI Security", desc: "Ensure your AI implementations are secure, private, and compliant.", icon: Shield },
          ].map((service, i) => (
            <GlassCard key={i} className="scroll-fade">
              <service.icon className="w-10 h-10 text-white mb-6" strokeWidth={1} />
              <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">{service.desc}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold tracking-tighter text-xl">ALEX</span>
            <span className="text-zinc-500 text-sm">© 2024 ENGINEERED FOR THE FUTURE.</span>
          </div>
          
          <div className="flex gap-8">
            {['Privacy', 'Terms', 'LinkedIn', 'GitHub'].map((item) => (
              <a key={item} href="#" className="text-zinc-500 hover:text-white text-sm transition-colors uppercase tracking-widest font-medium">
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
