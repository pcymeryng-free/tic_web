"use client";

import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>

      {/* ── HERO ── */}
      <section style={{ paddingTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
        
        <span className="ina-eyebrow">Executive Advisory</span>

        <h1 className="ina-display">
          Navigating the complexity of<br />
          <strong>global telecommunications.</strong>
        </h1>

        <p className="ina-lead">
          International Network Advisors (INA) is a boutique executive consulting firm 
          bridging the gap between complex regulatory environments, multinational operators, 
          and strategic market entry across the Americas and the Caribbean.
        </p>

        <div style={{ paddingTop: '0.5rem' }}>
          <Link href="/practices" className="ina-cta">
            Explore Practice Areas &rarr;
          </Link>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <hr className="ina-divider" />

      {/* ── THREE PILLARS ── */}
      <section>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
          gap: '0',
          borderTop: '1px solid var(--mist)'
        }}>
          
          <div className="ina-pillar" style={{ borderRight: '1px solid var(--mist)', paddingRight: '2rem' }}>
            <h3 className="ina-pillar-title">Operator Advantage</h3>
            <p className="ina-pillar-text">
              Decades of practical C-suite execution in complex, high-stakes telecom markets.
            </p>
          </div>

          <div className="ina-pillar" style={{ borderRight: '1px solid var(--mist)', padding: '2rem 2rem 0' }}>
            <h3 className="ina-pillar-title">Regional Footprint</h3>
            <p className="ina-pillar-text">
              Active networks and deep jurisdiction understanding across the Caribbean and Americas.
            </p>
          </div>

          <div className="ina-pillar" style={{ paddingLeft: '2rem' }}>
            <h3 className="ina-pillar-title">Regulatory Strategy</h3>
            <p className="ina-pillar-text">
              Expert management of spectrum licensing and alignment with state institutions.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
