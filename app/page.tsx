"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Globe, Shield, Cpu } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative overflow-hidden min-h-[calc(100vh-6rem)] flex items-center bg-gradient-to-b from-white to-slate-50">
      {/* Luces de fondo sutiles en tonos pasteles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-50 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-8 py-16 text-center relative z-10">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100/80 mb-8 tracking-wide">
          <Globe className="w-3.5 h-3.5" /> Connecting Global Markets. Delivering Strategic Intelligence.
        </span>
        
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-8 leading-[1.15]">
          Navigating the Complexity <br />of Global Telecommunications
        </h1>
        
        <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
          International Network Advisors (INA) is a boutique executive consulting firm bridging the gap between complex regulatory environments, multinational operators, and strategic market entry.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
          <Link href="/practices" className="w-full sm:w-auto group bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 rounded transition-all text-center flex items-center justify-center gap-2 shadow-lg shadow-blue-600/10">
            Explore Practice Areas <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/contact" className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-700 font-medium px-8 py-4 rounded transition-all text-center border border-slate-200 shadow-sm">
            Get in Touch
          </Link>
        </div>

        {/* Pilares inferiores refinados */}
        <div className="mt-28 grid grid-cols-1 sm:grid-cols-3 gap-12 pt-16 border-t border-slate-200/80 max-w-4xl mx-auto text-left">
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-slate-900 flex items-center gap-2"><Shield className="w-4 h-4 text-blue-600" /> Operator Advantage</h3>
            <p className="text-xs text-slate-500 leading-relaxed font-light">Decades of practical C-suite execution in complex telecom markets.</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-slate-900 flex items-center gap-2"><Globe className="w-4 h-4 text-blue-600" /> Regional Footprint</h3>
            <p className="text-xs text-slate-500 leading-relaxed font-light">Active networks across the Caribbean, Americas, and corridors.</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-slate-900 flex items-center gap-2"><Cpu className="w-4 h-4 text-blue-600" /> Regulatory Strategy</h3>
            <p className="text-xs text-slate-500 leading-relaxed font-light">Spectrum licensing and alignment with strict state frameworks.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
