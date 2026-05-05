'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Work', href: '#work' },
  { name: 'Stack', href: '#stack' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'FAQ', href: '#faq' },
];

export const Navbar = () => {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="glass-panel rounded-full px-2 py-2 flex items-center gap-2 max-w-fit shadow-2xl">
        <div className="flex items-center px-4 mr-2 border-r border-white/10">
          <span className="text-white font-semibold tracking-tighter text-lg">ALEX</span>
        </div>
        
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-zinc-400 hover:text-white px-4 py-2 text-sm font-medium transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="ml-2">
          <Button size="sm" className="bg-white text-black hover:bg-zinc-200">
            Contact
          </Button>
        </div>
      </nav>
    </div>
  );
};
