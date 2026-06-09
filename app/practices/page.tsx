"use client";

import React, { useState } from 'react';
import { Shield, TrendingUp, Users, Cpu, Rocket } from 'lucide-react';

const services = [
  { id: 'regulatory', icon: Shield, title: 'Regulatory Strategy', desc: 'Spectrum licensing, compliance frameworks, and government liaison across Caribbean and Latin American jurisdictions. We align corporate goals with national regulatory mandates.' },
  { id: 'commercial', icon: TrendingUp, title: 'Commercial Strategy', desc: 'Comprehensive market entry models, pricing architecture optimization, product portfolio development, and data-driven revenue optimization for operators.' },
  { id: 'operator', icon: Users, title: 'Operator Advisory', desc: 'Strategic counsel to regional telecom operators on sustainable growth, operational alignment, and maximum readiness for Mergers & Acquisitions (M&A).' },
  { id: 'digital', icon: Cpu, title: 'Digital Transformation', desc: 'Technology roadmap development, legacy infrastructure modernization, digital marketing integration, and product innovation advisory for the digital age.' },
  { id: 'gtm', icon: Rocket, title: 'Go-to-Market Execution', desc: 'Launch planning mechanics, precise competitive positioning, and commercial rollout strategies designed to capture market share securely.' }
];

export default function Practices() {
  const [activeTab, setActiveTab] = useState('regulatory');
  const activeService = services.find(s => s.id === activeTab) || services[0];
  const Icon = activeService.icon;

  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <div className="mb-16">
        <span className="text-xs font-bold tracking-widest uppercase text-blue-500 block mb-2">Our Capabilities</span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Core Practice Areas</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start bg-slate-900/20 border border-slate-900 p-8 rounded-xl backdrop-blur-sm">
        {/* Menú de selección izquierdo */}
        <div className="lg:col-span-4 space-y-2">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`w-full text-left px-4 py-3 rounded text-sm font-medium transition-all flex items-center justify-between group ${
                activeTab === service.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-transparent text-slate-400 hover:bg-slate-900 hover:text-slate-200'
              }`}
            >
              <span>{service.title}</span>
            </button>
          ))}
        </div>

        {/* Panel de visualización derecho */}
        <div className="lg:col-span-8 p-6 bg-slate-950/50 border border-slate-900 rounded-lg min-h-[250px] flex flex-col justify-between animate-fade-in">
          <div>
            <div className="w-12 h-12 rounded bg-blue-950/80 border border-blue-900/50 flex items-center justify-center text-blue-400 mb-6">
              <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{activeService.title}</h3>
            <p className="text-slate-300 text-sm leading-relaxed font-light">{activeService.desc}</p>
          </div>
          <div className="text-xs text-slate-500 border-t border-slate-900 pt-4 mt-6">
            International Network Advisors &bull; Strategic Execution
          </div>
        </div>
      </div>
    </div>
  );
}
