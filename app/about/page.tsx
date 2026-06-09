"use client";

import React from 'react';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-12 space-y-24 animate-fade-in">
      
      {/* SECCIÓN ENCABEZADO / MANIFIESTO */}
      <section className="space-y-6 text-center md:text-left">
        <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-slate-400 block">
          Corporate Profile &bull; International Network Advisors
        </span>
        <h1 className="font-serif text-4xl md:text-5xl font-normal text-slate-900 leading-tight tracking-tight">
          Our Mission
        </h1>
        <p className="text-lg text-slate-600 font-light leading-relaxed max-w-3xl pt-2">
          Major telecommunications projects are inherently complex, spanning strict regulatory hurdles, multi-stakeholder environments, and demanding deployment timelines. INA cuts through this complexity to maximize business ROI.
        </p>
      </section>

      {/* SECCIÓN DE VISIÓN DESTACADA (Estilo Editorial) */}
      <section className="py-16 border-t border-b border-slate-100 bg-[#fcfcfc] -mx-8 px-8 md:-mx-24 md:px-24 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-slate-400 block">
            Institutional Vision
          </span>
          <p className="font-serif text-xl md:text-2xl font-normal text-slate-800 italic leading-relaxed">
            &ldquo;To be the premier strategic partner for telecommunications enterprises and governments seeking to build, grow, and govern connected markets, fostering innovation, inclusive access, and economic development across the Americas and beyond.&rdquo;
          </p>
        </div>
      </section>

      {/* PILARES ESTRATÉGICOS (Simetría de Alta Gama) */}
      <section className="space-y-12">
        <div className="space-y-2">
          <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-slate-400 block">
            Operating Framework
          </span>
          <h2 className="font-serif text-2xl font-normal text-slate-900 tracking-tight">
            Strategic Pillars
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-4">
          <div className="space-y-3">
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-900">
              Strategic Intelligence
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed font-light">
              We provide data-driven insights and forward-looking strategies to map complex telecommunications landscapes, identifying risks and positioning before market-entry operations.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-900">
              Jurisdictional Expertise
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed font-light">
              Deep, localized regulatory understanding across Caribbean and Latin American jurisdictions, ensuring absolute alignment between business growth and state compliance mandates.
            </p>
          </div>

          <div className="space-y-3 pt-4">
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-900">
              Global Network Alignment
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed font-light">
              Unparalleled access to key decision-makers across state regulatory bodies, multilateral institutions, and tier-one private sector operators to accelerate complex engagements.
            </p>
          </div>

          <div className="space-y-3 pt-4">
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-900">
              Boutique Focus
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed font-light">
              We intentionally limit our active engagements to ensure our principal advisors maintain hands-on execution and high-impact attention on every client project.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
