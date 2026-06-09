"use client";

import React from 'react';

export default function Leadership() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-12 space-y-16 animate-fade-in">
      
      {/* ENCABEZADO DE LA SECCIÓN */}
      <section className="space-y-4 border-b border-slate-100 pb-10">
        <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-slate-400 block">
          Executive Leadership &bull; Expertise Matrix
        </span>
        <h1 className="font-serif text-4xl md:text-5xl font-normal text-slate-900 tracking-tight">
          Leadership
        </h1>
        <p className="text-sm text-slate-500 font-light tracking-wide uppercase">
          Decades of Operator-Side Advantage
        </p>
      </section>

      {/* PERFIL PRINCIPAL: ANTHONY MONARO */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        
        {/* Columna Izquierda: Nombre y Título */}
        <div className="md:col-span-4 space-y-2">
          <h2 className="font-serif text-2xl font-normal text-slate-900 leading-tight">
            Anthony Monaro
          </h2>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400">
            Founder & Principal Advisor
          </p>
          
          <div className="pt-6 hidden md:block">
            <div className="border-l-2 border-slate-900 pl-4 py-1 text-[11px] text-slate-400 tracking-wider uppercase">
              Global Telecom <br />
              & Regulatory Specialist
            </div>
          </div>
        </div>

        {/* Columna Derecha: Trayectoria Profesional Editorial */}
        <div className="md:col-span-8 space-y-6 text-sm text-slate-600 font-light leading-relaxed">
          <p>
            Anthony Monaro is a seasoned telecommunications executive and entrepreneur with over two decades of experience driving strategy, product development, and commercial growth across Caribbean, U.S., and international markets.
          </p>
          <p>
            He has held senior executive roles with leading regional operators, spearheading initiatives in network expansion, digital transformation, regulatory engagement, and go-to-market execution.
          </p>
          <p>
            Having worked extensively across multiple complex jurisdictions — each with its own specific regulatory, cultural, and commercial dynamics — Anthony brings a rare combination of C-suite strategic vision and deep operational expertise. This unique operator-side background gives INA clients an insider’s advantage at every stage of engagement.
          </p>
        </div>
      </section>

      {/* CUADRÍCULA DE CAPACIDADES CLAVE DIRECTIVAS */}
      <section className="pt-12 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-12">
        <div className="space-y-2">
          <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-900">
            Executive Directorship
          </h3>
          <p className="text-xs text-slate-400 font-light leading-relaxed">
            Proven record directing cross-functional corporate teams, evaluating joint ventures, and optimizing financial ROI on multinational technology deployments.
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-900">
            Institutional Relations
          </h3>
          <p className="text-xs text-slate-400 font-light leading-relaxed">
            Decades of collaborative frameworks with national regulators, state secretariats, and international multilateral telecom committees.
          </p>
        </div>
      </section>

    </div>
  );
}
