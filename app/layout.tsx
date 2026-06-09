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
        
{/* HEADER / NAVBAR ELEGANTE DISTRIBUIDO A LO ANCHO */}
<header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-slate-200/60 shadow-sm">
  <div className="max-w-7xl mx-auto px-8 h-24 flex items-center justify-between gap-12">
    
    {/* 1. Brand / Logo (Alineado a la izquierda) */}
    <Link href="/" className="flex items-center space-x-3 group flex-shrink-0">
      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-700 to-indigo-600 flex items-center justify-center shadow-md shadow-blue-500/10 group-hover:scale-105 transition-transform">
        <span className="font-bold text-white tracking-tighter text-xs">INA</span>
      </div>
      <div className="hidden sm:block">
        <span className="font-semibold text-base tracking-tight block text-slate-900 leading-tight">International</span>
        <span className="text-[9px] tracking-[0.28em] uppercase text-slate-500 block font-medium">Network Advisors</span>
      </div>
    </Link>
    
    {/* 2. Menú de Navegación (Distribuido a lo ancho en el espacio central) */}
    <nav className="flex-1 max-w-3xl mx-auto hidden md:flex items-center justify-between text-sm font-medium tracking-widest uppercase text-[11px] text-slate-600">
      <Link href="/about" className="hover:text-blue-600 transition-colors py-2 relative group">
        About Us
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full" />
      </Link>
      
      <Link href="/practices" className="hover:text-blue-600 transition-colors py-2 relative group">
        Practice Areas
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full" />
      </Link>
      
      <Link href="/leadership" className="hover:text-blue-600 transition-colors py-2 relative group">
        Leadership
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full" />
      </Link>
    </nav>
    
    {/* 3. Acción Destacada (Alineado a la derecha) */}
    <div className="flex-shrink-0">
      <Link href="/contact" className="bg-slate-900 hover:bg-blue-600 text-white text-xs tracking-widest uppercase font-medium px-5 py-3 rounded transition-all shadow-sm">
        Contact Us
      </Link>
    </div>

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
