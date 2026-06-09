import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "International Network Advisors | Telecom & Regulatory Strategy",
  description: "Boutique executive consulting firm specializing in telecommunications regulatory strategy across the Americas and Caribbean.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        
        {/* SIDEBAR — Left identity column */}
        <aside className="ina-sidebar">
          <Link href="/" className="ina-brand">
            <div className="ina-monogram">
              <span>INA</span>
            </div>
            <div className="ina-brand-text">
              <span className="ina-brand-name">International</span>
              <span className="ina-brand-sub">Network Advisors</span>
            </div>
          </Link>
          
          {/* Meridian line — the signature visual element */}
          <div className="meridian-container" aria-hidden="true">
            <svg viewBox="0 0 2 180" preserveAspectRatio="none" className="meridian-svg">
              <line x1="1" y1="0" x2="1" y2="180" className="meridian-line" />
              <circle cx="1" cy="60" r="1.5" className="meridian-dot" />
              <circle cx="1" cy="120" r="1" className="meridian-dot meridian-dot--small" />
            </svg>
            <div className="meridian-labels">
              <span>Americas</span>
              <span>Caribbean</span>
            </div>
          </div>

          <div className="ina-sidebar-footer">
            <span className="ina-tagline">Boutique Advisory</span>
            <span className="ina-year">Est. 2026</span>
          </div>
        </aside>

        {/* MAIN CONTENT AREA */}
        <div className="ina-main">
          
          {/* TOP NAV */}
          <header className="ina-header">
            <nav className="ina-nav">
              <Link href="/about" className="ina-nav-link">About Us</Link>
              <Link href="/practices" className="ina-nav-link">Practice Areas</Link>
              <Link href="/leadership" className="ina-nav-link">Leadership</Link>
              <Link href="/contact" className="ina-nav-link">Contact</Link>
            </nav>

            <div className="ina-status">
              <span className="ina-status-dot" />
              <span>Global Intelligence</span>
            </div>
          </header>

          {/* PAGE CONTENT */}
          <main className="ina-content">
            {children}
          </main>

          {/* FOOTER */}
          <footer className="ina-footer">
            <div className="ina-footer-inner">
              <p>&copy; {new Date().getFullYear()} International Network Advisors. All rights reserved.</p>
              <p className="ina-footer-note">Confidential &mdash; Institutional Use Only</p>
            </div>
          </footer>
        </div>

      </body>
    </html>
  );
}
