"use client";

import React from 'react';

const practicesList = [
  { num: "I", title: "Regulatory Strategy", desc: "Spectrum licensing management, compliance optimization, and strategic state liaison across Caribbean and Latin American jurisdictions. We ensure multinational deployment models align seamlessly with national sovereignty frameworks." },
  { num: "II", title: "Commercial Strategy", desc: "Comprehensive market entry architecture, pricing mechanics development, portfolio optimization, and data-driven revenue management models designed specifically for regional operators." },
  { num: "III", title: "Operator Advisory", desc: "Strategic counsel to board-level directors on sustainable growth trajectories, structural alignment, operational due diligence, and maximum readiness for M&A scenarios." },
  { num: "IV", title: "Digital Transformation", desc: "Modernization roadmaps for core telecommunications infrastructure, digital asset integration, and product innovation architectures engineered for the current regulatory landscape." },
  { num: "V", title: "Go-to-Market Execution", desc: "Launch engineering, precise competitive positioning, and commercial rollout mechanics calibrated to capture market share within complex, multi-stakeholder territories." }
];

export default function Practices() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-12 space-y-16 animate-fade-in">
      
      {/* ENCABEZADO */}
      <section className="space-y-4 border-b border-slate-100 pb-10">
        <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-slate-400 block">
          Capabilities Matrix &bull; Institutional Counsel
        </span>
        <h1 className="font-serif text-4xl md:text-5xl font-normal text-slate-900 tracking-tight">
          Practice Areas
        </h1>
        <p className="text-sm text-slate-500 font-light max-w-2xl leading-relaxed">
          Targeted executive services covering the strategic, commercial, and regulatory dimensions of global telecommunications.
        </p>
      </section>

      {/* REJILLA EDITORIAL DE SERVICIOS */}
      <section className="divide-y divide-slate-100">
        {practicesList.map((item, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-6 py-10 first:pt-0 last:pb-0 items-start">
            
            {/* Indicador Romano */}
            <div className="md:col-span-1 text-[11px] font-mono font-bold text-slate-300 tracking-widest">
              {item.num}.
            </div>
            
            {/* Título de la Práctica */}
            <div className="md:col-span-4">
              <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-900 leading-tight md:pt-0.5">
                {item.title}
              </h3>
            </div>
            
            {/* Descripción */}
            <div className="md:col-span-7">
              <p className="text-xs text-slate-500 leading-relaxed font-light">
                {item.desc}
              </p>
            </div>

          </div>
        ))}
      </section>

    </div>
  );
}
