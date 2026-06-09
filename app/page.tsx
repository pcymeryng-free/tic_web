"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Globe, Shield, Cpu } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative overflow-hidden min-h-[calc(100vh-5rem)] flex items-center">
      {/* Efectos de luces de fondo premium */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-slate-800/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 py-20 text-center relative z-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-950/60 text-blue-400 border border-blue-900/40 mb-8 animate-fade-in">
          <Globe className="w-3.5 h-3.5" /> Connecting Global Markets. Delivering Strategic Intelligence.
        </span>
        
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent mb-8 leading-[1.15]">
          Navigating the Complexity <br />of Global Telecommunications
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
          International Network Advisors (INA) is a boutique executive consulting firm bridging the gap between complex regulatory environments, multinational operators, and strategic market entry.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link href="/practices" className="w-full sm:w-auto group bg-blue-600 hover:bg-blue-500 text-white font-medium px-8 py-4 rounded-md transition-all text-center flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20">
            Explore Practice Areas <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/contact" className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-slate-300 font-medium px-8 py-4 rounded-md transition-all text-center border border-slate-800">
            Get in Touch
          </Link>
        </div>

        {/* Pequeño resumen de confianza al fondo */}
        <div className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-slate-900 max-w-4xl mx-auto text-left">
          <div>
            <h3 className="text-sm font-semibold text-white mb-1 flex items-center gap-2"><Shield className="w-4 h-4 text-blue-500" /> Operator Advantage</h3>
            <p className="text-xs text-slate-400">Decades of practical C-suite execution in complex markets.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white mb-1 flex items-center gap-2"><Globe className="w-4 h-4 text-blue-500" /> Regional Footprint</h3>
            <p className="text-xs text-slate-400">Active networks across the Caribbean, Americas, and corridors.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white mb-1 flex items-center gap-2"><Cpu className="w-4 h-4 text-blue-500" /> Regulatory Strategy</h3>
            <p className="text-xs text-slate-400">Spectrum licensing and alignment with state institutions.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
