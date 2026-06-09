"use client";

import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-6rem)] flex flex-col justify-between bg-white">
      
      {/* SECCIÓN PRINCIPAL HERO (Estilo Editorial Premium) */}
      <section className="max-w-4xl mx-auto px-8 pt-24 pb-16 text-center space-y-12">
        <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-slate-400 block">
          Strategic Advisory &bull; Global Telecommunications
        </span>
        
        {/* Uso de la fuente Serif corporativa */}
        <h1 className="font-serif text-4xl md:text-6xl font-normal text-slate-900 leading-[1.2] tracking-tight max-w-4xl mx-auto">
          Navigating the regulatory, commercial, and technical complexities of connected markets.
        </h1>
        
        <p className="text-base md:text-lg text-slate-500 font-light leading-relaxed max-w-2xl mx-auto">
          International Network Advisors provides high-stakes counsel to multinational operators, investment funds, and sovereign entities across the Americas and the Caribbean Basin.
        </p>
        
        <div className="pt-4">
          <Link 
            href="/practices" 
            className="text-[11px] font-semibold tracking-[0.25em] uppercase border-b border-slate-900 pb-2 text-slate-900 hover:text-slate-400 hover:border-slate-400 transition-all duration-300"
          >
            Explore Practice Areas
          </Link>
        </div>
      </section>

      {/* BLOQUE DE TRES PILARES CORPORATIVOS (Simetría Absoluta) */}
      <section className="bg-[#fcfcfc] border-t border-b border-slate-100 py-20 w-full">
        <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-16">
          
          <div className="space-y-4">
            <span className="text-[10px] font-bold text-slate-300 tracking-widest block font-mono">I.</span>
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-900">Operator Advantage</h3>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              We leverage decades of operator-side C-suite execution to deliver practical, unvarnished guidance tailored for complex international markets.
            </p>
          </div>
          
          <div className="space-y-4">
            <span className="text-[10px] font-bold text-slate-300 tracking-widest block font-mono">II.</span>
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-900">Regulatory Strategy</h3>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              Expert synchronization of cross-border spectrum licensing, sovereign compliance frameworks, and multilateral governmental relations.
            </p>
          </div>
          
          <div className="space-y-4">
            <span className="text-[10px] font-bold text-slate-300 tracking-widest block font-mono">III.</span>
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-900">Global Connectivity</h3>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              Unrivaled strategic access to tier-one private operators and policy decision-makers across the Caribbean, Latin America, and global corridors.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
