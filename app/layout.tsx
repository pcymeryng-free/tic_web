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
      <body className={`${inter.className} antialiased bg-slate-950 text-slate-100 flex flex-col min-h-screen`}>
        
        {/* HEADER / NAVBAR FIJO */}
        <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/70 border-b border-slate-900">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-700 to-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
                <span className="font-bold text-white tracking-tighter text-sm">INA</span>
              </div>
              <div>
                <span className="font-bold text-lg tracking-tight block text-white">International</span>
                <span className="text-xs tracking-[0.25em] uppercase text-slate-400 block -mt-1">Network Advisors</span>
              </div>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
              <Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link>
              <Link href="/practices" className="hover:text-blue-400 transition-colors">Practice Areas</Link>
              <Link href="/leadership" className="hover:text-blue-400 transition-colors">Leadership</Link>
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md transition-all shadow-md shadow-blue-600/10">
                Contact Us
              </Link>
            </nav>
          </div>
        </header>

        {/* CONTENIDO DINÁMICO DE CADA PÁGINA */}
        <main className="flex-grow">
          {children}
        </main>

        {/* FOOTER UNIFICADO */}
        <footer className="border-t border-slate-900 bg-slate-950 py-8 text-center text-xs text-slate-500">
          <div className="max-w-7xl mx-auto px-6 space-y-2">
            <p>&copy; 2026 International Network Advisors. All rights reserved. | Confidential</p>
            <p className="text-slate-600 tracking-wider">Confidential &mdash; For Authorized Recipient Use Only</p>
          </div>
        </footer>

      </body>
    </html>
  );
}
