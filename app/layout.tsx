import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "International Network Advisors | Telecom & Regulatory Strategy",
  description: "Boutique executive consulting firm specializing in telecommunications.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-slate-50 text-slate-800 flex flex-col min-h-screen`}>
        
        {/* HEADER / NAVBAR ELEGANTE Y SEPARADO */}
        <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-200/60">
          <div className="max-w-7xl mx-auto px-8 h-24 flex items-center justify-between">
            
            {/* Brand / Logo */}
            <Link href="/" className="flex items-center space-x-4 group">
              <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-blue-700 to-indigo-600 flex items-center justify-center shadow-md shadow-blue-500/10 group-hover:scale-105 transition-transform">
                <span className="font-bold text-white tracking-tighter text-sm">INA</span>
              </div>
              <div>
                <span className="font-semibold text-lg tracking-tight block text-slate-900">International</span>
                <span className="text-[10px] tracking-[0.28em] uppercase text-slate-500 block -mt-0.5 font-medium">Network Advisors</span>
              </div>
            </Link>
            
            {/* Menú con opciones más separadas y elegantes */}
            <nav className="hidden md:flex items-center space-x-12 text-sm font-medium tracking-wide text-slate-600">
              <Link href="/about" className="hover:text-blue-600 transition-colors py-2 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 hover:after:w-full after:transition-all">
                About Us
              </Link>
              <Link href="/practices" className="hover:text-blue-600 transition-colors py-2 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 hover:after:w-full after:transition-all">
                Practice Areas
              </Link>
              <Link href="/leadership" className="hover:text-blue-600 transition-colors py-2 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 hover:after:w-full after:transition-all">
                Leadership
              </Link>
              <Link href="/contact" className="bg-slate-900 hover:bg-blue-600 text-white font-normal px-5 py-2.5 rounded transition-all shadow-sm">
                Contact Us
              </Link>
            </nav>
          </div>
        </header>

        {/* CONTENIDO PRINCIPAL */}
        <main className="flex-grow">
          {children}
        </main>

        {/* FOOTER LIMPIO */}
        <footer className="border-t border-slate-200/60 bg-white py-10 text-center text-xs text-slate-400">
          <div className="max-w-7xl mx-auto px-6 space-y-2 font-light">
            <p>&copy; 2026 International Network Advisors. All rights reserved. | Confidential</p>
            <p className="text-slate-300 tracking-widest uppercase text-[10px] font-medium">Confidential &mdash; For Authorized Recipient Use Only</p>
          </div>
        </footer>

      </body>
    </html>
  );
}
