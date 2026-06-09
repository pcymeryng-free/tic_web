"use client";

import React from 'react';

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-12 space-y-16 animate-fade-in">
      
      {/* ENCABEZADO */}
      <section className="space-y-4 border-b border-slate-100 pb-10">
        <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-slate-400 block">
          Engagement Protocol &bull; Secure Channels
        </span>
        <h1 className="font-serif text-4xl md:text-5xl font-normal text-slate-900 tracking-tight">
          Contact Us
        </h1>
        <p className="text-sm text-slate-500 font-light tracking-wide uppercase">
          Initiate a Strategic Consultation
        </p>
      </section>

      {/* BLOQUE CENTRAL DE REQUISICIÓN */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        
        {/* Canales Directos */}
        <div className="md:col-span-4 space-y-6">
          <p className="text-xs text-slate-400 leading-relaxed font-light">
            Connect directly with our principal advisors to review infrastructure modernization, spectrum licensing frameworks, or international operator placement.
          </p>
          
          <div className="border-t border-slate-100 pt-6 space-y-3">
            <span className="text-[9px] font-semibold tracking-[0.2em] uppercase text-slate-400 block">General Inquiries</span>
            <a href="mailto:info@international-network-advisors.com" className="text-xs text-slate-900 hover:text-slate-400 transition-colors duration-300 font-medium block break-all">
              info@international-network-advisors.com
            </a>
          </div>
        </div>

        {/* Formulario Estilo Minimalista de Alta Gama */}
        <form className="md:col-span-8 space-y-8" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="relative border-b border-slate-200 pb-2 focus-within:border-slate-900 transition-colors">
              <label className="block text-[9px] tracking-widest uppercase text-slate-400 font-medium mb-1">Full Name</label>
              <input type="text" className="w-full bg-transparent text-xs text-slate-900 focus:outline-none font-light py-1" />
            </div>
            
            <div className="relative border-b border-slate-200 pb-2 focus-within:border-slate-900 transition-colors">
              <label className="block text-[9px] tracking-widest uppercase text-slate-400 font-medium mb-1">Corporate Email</label>
              <input type="email" className="w-full bg-transparent text-xs text-slate-900 focus:outline-none font-light py-1" />
            </div>
          </div>

          <div className="relative border-b border-slate-200 pb-2 focus-within:border-slate-900 transition-colors">
            <label className="block text-[9px] tracking-widest uppercase text-slate-400 font-medium mb-1">Organization</label>
            <input type="text" className="w-full bg-transparent text-xs text-slate-900 focus:outline-none font-light py-1" />
          </div>

          <div className="relative border-b border-slate-200 pb-2 focus-within:border-slate-900 transition-colors">
            <label className="block text-[9px] tracking-widest uppercase text-slate-400 font-medium mb-1">Message Brief</label>
            <textarea rows={4} className="w-full bg-transparent text-xs text-slate-900 focus:outline-none font-light py-1 resize-none" />
          </div>

          <div className="pt-4">
            <button type="submit" className="text-[10px] font-semibold tracking-[0.25em] uppercase border border-slate-900 bg-slate-900 text-white hover:bg-white hover:text-slate-900 px-6 py-3 rounded-none transition-all duration-300 shadow-sm">
              Submit Inquiry &rarr;
            </button>
          </div>
        </form>

      </section>

    </div>
  );
}
