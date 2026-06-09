import React from 'react';
import { Shield, TrendingUp, Users, Cpu, Rocket, Mail, Globe, ExternalLink } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-600 selection:text-white">
      
      {/* HEADER / NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {/* Isotipo Simbolizado */}
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-700 to-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <span className="font-bold text-white tracking-tighter text-sm">INA</span>
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight block text-white">International</span>
              <span className="text-xs tracking-[0.25em] uppercase text-slate-400 block -mt-1">Network Advisors</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#services" className="hover:text-blue-400 transition-colors">Practice Areas</a>
            <a href="#leadership" className="hover:text-blue-400 transition-colors">Leadership</a>
            <a href="#reach" className="hover:text-blue-400 transition-colors">Global Reach</a>
            <a href="#contact" className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md transition-all shadow-md shadow-blue-600/10">
              Contact Us
            </a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-20 pb-32 border-b border-slate-900">
        {/* Efecto de luz de fondo sutil */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-950 text-blue-400 border border-blue-900/50 mb-6">
            <Globe className="w-3.5 h-3.5" /> Connecting Global Markets. Delivering Strategic Intelligence. [cite: 2]
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent mb-6 balance">
            Navigating the Complexity of Global Telecommunications
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            International Network Advisors (INA) is a boutique executive consulting firm specializing in telecommunications, regulatory strategy, and market development across the Americas, the Caribbean, and emerging international markets. [cite: 4]
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="#contact" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-medium px-8 py-4 rounded-md transition-all text-center shadow-lg shadow-blue-600/20">
              Connect with an Advisor
            </a>
            <a href="#services" className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-slate-300 font-medium px-8 py-4 rounded-md transition-all text-center border border-slate-800">
              Explore Practice Areas
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT & STRATEGIC PILLARS */}
      <section id="about" className="py-24 max-w-7xl mx-auto px-6 border-b border-slate-900">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-xs font-bold tracking-widest uppercase text-blue-500 mb-3">Our Mission</h2>
            <p className="text-3xl font-bold tracking-tight text-white mb-6">
              Cutting through complexity to maximize business ROI. [cite: 8]
            </p>
            <p className="text-slate-400 leading-relaxed mb-6">
              Major telecommunications projects are inherently complex; spanning regulatory hurdles, multi-stakeholder environments, and demanding deployment timelines. [cite: 7]
            </p>
            <p className="text-slate-400 leading-relaxed">
              INA bridges the gap between regulatory environments, multinational operators, and market-entry strategy, bringing decades of hands-on executive leadership to every engagement. [cite: 5]
            </p>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: 'Strategic Intelligence', desc: 'Data-driven insights and forward-looking strategies to map complex telecommunications landscapes.', source: '[cite: 38]' },
              { title: 'Regional Expertise', desc: 'Deep jurisdictional understanding across Caribbean, Latin American, and international markets.', source: '[cite: 17, 38]' },
              { title: 'Global Connectivity', desc: 'Unparalleled access to key decision-makers across regulatory bodies and private sector operators.', source: '[cite: 34, 38]' }
            ].map((pillar, i) => (
              <div key={i} className="p-6 rounded-lg bg-slate-900/40 border border-slate-900 hover:border-slate-800/80 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded bg-blue-950 flex items-center justify-center text-blue-400 mb-4 font-bold text-sm">
                    0{i+1}
                  </div>
                  <h3 className="font-bold text-white mb-2">{pillar.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* VISION BLOCKQUOTE */}
        <div className="mt-16 p-8 rounded-xl bg-gradient-to-r from-blue-950/40 to-slate-900/40 border border-blue-900/30 text-center max-w-4xl mx-auto">
          <span className="text-xs uppercase tracking-widest font-bold text-blue-400 block mb-2">Our Vision</span>
          <p className="text-lg md:text-xl text-slate-300 italic font-light">
            "To be the premier strategic partner for telecommunications enterprises and governments seeking to build, grow, and govern connected markets, fostering innovation, inclusive access, and economic development across the Americas and beyond." [cite: 36]
          </p>
        </div>
      </section>

      {/* CORE PRACTICE AREAS */}
      <section id="services" className="py-24 bg-slate-950 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold tracking-widest uppercase text-blue-500 mb-3">Advisory Focus</h2> [cite: 19]
            <p className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Targeted Services across Core Practice Areas [cite: 20]
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: 'Regulatory Strategy', desc: 'Spectrum licensing, compliance frameworks, and government liaison across Caribbean and Latin American jurisdictions.', source: '[cite: 21]' },
              { icon: TrendingUp, title: 'Commercial Strategy', desc: 'Market entry, pricing architecture, product portfolio development, and revenue optimization.', source: '[cite: 22]' },
              { icon: Users, title: 'Operator Advisory', desc: 'Strategic counsel to regional telecom operators on growth, M&A readiness, and operational alignment.', source: '[cite: 23]' },
              { icon: Cpu, title: 'Digital Transformation', desc: 'Technology roadmap development, digital marketing integration, and product innovation advisory.', source: '[cite: 24]' },
              { icon: Rocket, title: 'Go-to-Market Execution', desc: 'Launch planning, competitive positioning, and commercial rollout strategy.', source: '[cite: 25]' }
            ].map((service, i) => {
              const Icon = service.icon;
              return (
                <div key={i} className="p-8 rounded-lg bg-slate-900/20 border border-slate-900 hover:border-blue-900/30 transition-all group">
                  <div className="w-12 h-12 rounded-md bg-slate-900 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all mb-6">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* EXECUTIVE LEADERSHIP */}
      <section id="leadership" className="py-24 max-w-7xl mx-auto px-6 border-b border-slate-900">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold tracking-widest uppercase text-blue-500 mb-3">Executive Leadership</h2> [cite: 9]
          <p className="text-3xl font-bold tracking-tight text-white">Decades of Operator-Side Advantage</p> [cite: 5, 18]
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Marcador de posición para imagen profesional */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="w-72 h-96 bg-gradient-to-b from-slate-800 to-slate-950 rounded-lg border border-slate-800 shadow-xl relative overflow-hidden flex items-center justify-center group">
              <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-center p-6">
                <p className="text-sm font-semibold text-white">Anthony Monaro</p> [cite: 10]
                <p className="text-xs text-slate-400 mt-1">Founder & Principal Advisor</p> [cite: 10]
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white">Anthony Monaro</h3> [cite: 10]
              <p className="text-blue-400 text-sm font-medium mt-1">Founder & Principal Advisor</p> [cite: 10]
            </div>
            <p className="text-slate-300 leading-relaxed">
              Anthony Monaro is a seasoned telecommunications executive and entrepreneur with over two decades of experience driving strategy, product development, and commercial growth across Caribbean, U.S., and international markets. [cite: 11]
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              He has held senior executive roles with leading regional operators, spearheading initiatives in network expansion, digital transformation, regulatory engagement, and go-to-market execution. [cite: 12] His hands-on experience includes leading commercial and product teams through market liberalization, competitive launches, and network modernization programs. [cite: 16]
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Having worked across multiple jurisdictions, each with its own regulatory, cultural, and commercial dynamics [cite: 17], Anthony brings a rare combination of C-suite strategic vision and deep operational expertise[cite: 13]. This operator-side background gives INA clients an insider’s advantage at every stage of engagement[cite: 18].
            </p>
          </div>
        </div>
      </section>

      {/* GLOBAL REACH */}
      <section id="reach" className="py-24 bg-slate-950 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-xs font-bold tracking-widest uppercase text-blue-500 mb-3">Global Reach</h2> [cite: 26]
              <p className="text-3xl font-bold tracking-tight text-white mb-6">
                Strategic Footprint Across Crucial Corridors
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                Our advisors maintain active networks across regulatory bodies, multilateral institutions, and private sector operators — providing clients with unparalleled access to decision-makers and market intelligence across these regions. [cite: 34]
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Caribbean Basin', 'United States', 'Latin America', 
                  'Central America', 'Emerging Markets', 'International Corridors'
                ].map((region, i) => (
                  <div key={i} className="flex items-center space-x-2 text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span className="text-sm font-medium">{region}</span> [cite: 28, 29, 30, 31, 32, 33]
                  </div>
                ))}
              </div>
            </div>

            {/* Representación gráfica minimalista de la red global */}
            <div className="bg-slate-900/30 border border-slate-900 rounded-xl p-8 h-80 flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
              <div className="space-y-4 relative z-10">
                <div className="text-xs font-mono text-blue-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Active Networks Established
                </div>
                <div className="text-2xl font-bold text-white tracking-tight">
                  Multilateral & Private Alignment
                </div>
                <p className="text-xs text-slate-400 leading-relaxed max-w-md">
                  Connecting cross-market regulatory dynamics with corporate operational goals to maintain unique insider positioning. [cite: 17, 18]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto rounded-xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-900 p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-xs font-bold tracking-widest uppercase text-blue-500 mb-3">Contact</h2> [cite: 39]
            <p className="text-2xl md:text-3xl font-bold text-white">Initiate a Strategic Consultation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-5 space-y-6">
              <p className="text-sm text-slate-400 leading-relaxed">
                Reach out to our principal advisors to discuss regulatory strategy, market entry, or operational alignment. [cite: 21, 22, 23]
              </p>
              <div className="space-y-4">
                <a href="mailto:info@international-network-advisors.com" className="flex items-center space-x-3 text-sm text-slate-300 hover:text-blue-400 transition-colors group">
                  <Mail className="w-4 h-4 text-slate-500 group-hover:text-blue-400" />
                  <span>info@international-network-advisors.com</span> [cite: 39]
                </a>
                <a href="https://www.international-network-advisors.com" target="_blank" rel="noreferrer" className="flex items-center space-x-3 text-sm text-slate-300 hover:text-blue-400 transition-colors group">
                  <Globe className="w-4 h-4 text-slate-500 group-hover:text-blue-400" />
                  <span className="flex items-center gap-1">www.international-network-advisors.com <ExternalLink className="w-3 h-3 text-slate-600" /></span> [cite: 39]
                </a>
              </div>
            </div>

            {/* FORMULARIO DE CONTACTO */}
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
                <textarea rows={4} className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium py-2.5 rounded transition-all shadow-md shadow-blue-600/10">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-900 bg-slate-950 py-8 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-6 space-y-2">
          <p>© 2025 International Network Advisors. All rights reserved. | Confidential [cite: 41]</p>
          <p className="text-slate-600 tracking-wider">Confidential — For Authorized Recipient Use Only [cite: 40]</p>
        </div>
      </footer>

    </div>
  );
}
