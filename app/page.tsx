"use client";

import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-24 max-w-3xl animate-fade-in">
      
      {/* SECCIÓN BIENVENIDA MÁS EDITORIAL */}
      <section className="pt-12 space-y-6">
        <h1 className="text-4xl md:text-5xl font-light tracking-tight text-slate-900 leading-tight">
          Navigating the complexity of <br />
          <span className="font-semibold text-blue-600">global telecommunications.</span>
        </h1>
        
        <p className="text-base text-slate-500 leading-relaxed font-light max-w-2xl">
          International Network Advisors (INA) is a boutique executive consulting firm bridging the gap between complex regulatory environments, multinational operators, and strategic market entry across the Americas and the Caribbean.
        </p>

        <div className="pt-4">
          <Link 
            href="/practices" 
            className="text-xs font-semibold tracking-widest uppercase border-b border-slate-900 pb-1 text-slate-900 hover:text-blue-600 hover:border-blue-600 transition-colors"
          >
            Explore Practice Areas &rarr;
          </Link>
        </div>
      </section>

      {/*RESUMEN DE ENFOQUE EN TRES COLUMNAS SIMPLES */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-slate-100">
        <div className="space-y-2">
          <h3 className="text-xs font-bold tracking-widest uppercase text-slate-900">Operator Advantage</h3>
          <p className="text-xs text-slate-500 leading-relaxed font-light">
            Decades of practical C-suite execution in complex, high-stakes telecom markets.
          </p>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-xs font-bold tracking-widest uppercase text-slate-900">Regional Footprint</h3>
          <p className="text-xs text-slate-500 leading-relaxed font-light">
            Active networks and deep jurisdiction understanding across the Caribbean and Americas.
          </p>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-xs font-bold tracking-widest uppercase text-slate-900">Regulatory Strategy</h3>
          <p className="text-xs text-slate-500 leading-relaxed font-light">
            Expert management of spectrum licensing and alignment with state institutions.
          </p>
        </div>
      </section>

    </div>
  );
}
