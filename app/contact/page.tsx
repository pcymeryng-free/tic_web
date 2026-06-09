"use client";

import React from 'react';
import { Mail, Globe, ExternalLink } from 'lucide-react';

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <span className="text-xs font-bold tracking-widest uppercase text-blue-500 block mb-2">Engagement</span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Initiate a Strategic Consultation</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start bg-slate-900/20 border border-slate-900 p-8 md:p-12 rounded-xl">
        <div className="md:col-span-5 space-y-6">
          <p className="text-sm text-slate-400 leading-relaxed font-light">
            Connect directly with our principal advisors to review infrastructure modernization, international spectrum licensing frameworks, or commercial rollout positioning.
          </p>
          <div className="space-y-4 border-t border-slate-900 pt-6">
            <a href="mailto:info@international-network-advisors.com" className="flex items-center space-x-3 text-xs text-slate-300 hover:text-blue-400 transition-colors group">
              <Mail className="w-4 h-4 text-slate-500 group-hover:text-blue-400" />
              <span>info@international-network-advisors.com</span>
            </a>
            <a href="https://www.international-network-advisors.com" target="_blank" rel="noreferrer" className="flex items-center space-x-3 text-xs text-slate-300 hover:text-blue-400 transition-colors group">
              <Globe className="w-4 h-4 text-slate-500 group-hover:text-blue-400" />
              <span className="flex items-center gap-1">www.international-network-advisors.com <ExternalLink className="w-3 h-3 text-slate-600" /></span>
            </a>
          </div>
        </div>

        <form className="md:col-span-7 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">Full Name</label>
              <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors" />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">Corporate Email</label>
              <input type="email" className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1">Organization</label>
            <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors" />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1">Message</label>
            <textarea rows={5} className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium py-3 rounded transition-all shadow-md shadow-blue-600/10">
            Submit Inquiry
          </button>
        </form>
      </div>
    </div>
  );
}
