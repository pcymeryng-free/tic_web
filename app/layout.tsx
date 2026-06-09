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
      <body className={`${inter.className} antialiased bg-white text-slate-900 min-h-screen flex`}>
        
        {/* 1. BARRA LATERAL FIJA (Izquierda): Identidad de la Empresa */}
        <aside className="w-80 border-r border-slate-100 min-h-screen fixed left-0 top-0 hidden lg:flex flex-col justify-between p-12 bg-white z-50">
          <Link href="/" className="space-y-2 group">
            <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="font-bold text-white text-xs tracking-tighter">I</span>
            </div>
            <div className="pt-4">
              <span className="font-medium text-xl tracking-tight block text-slate-900">International</span>
              <span className="text-[10px] tracking-[0.25em] uppercase text-slate-400 block font-semibold mt-1">Network Advisors</span>
            </div>
          </Link>
          
          <div className="text-[10px] tracking-widest text-slate-300 uppercase font-medium">
            Boutique Advisory &bull; 2026
          </div>
        </aside>

        {/* 2. CONTENEDOR PRINCIPAL DERECHO (Ocupa el resto de la pantalla) */}
        <div className="flex-1 lg:pl-80 flex flex-col min-h-screen">
          
          {/* BARRA HORIZONTAL SUPERIOR: Menú de opciones */}
          <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100">
            <div className="max-w-5xl mx-auto px-12 h-24 flex items-center justify-between">
              
              {/* Menú Superior Limpio y Ordenado */}
              <nav className="flex items-center space-x-12 text-xs font-semibold tracking-[0.2em] uppercase text-slate-500">
                <Link href="/about" className="hover:text-slate-900 transition-colors relative py-2 group">
                  About Us
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-slate-900 transition-all group-hover:w-full" />
                </Link>
                <Link href="/practices" className="hover:text-slate-900 transition-colors relative py-2 group">
                  Practice Areas
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-slate-900 transition-all group-hover:w-full" />
                </Link>
                <Link href="/leadership" className="hover:text-slate-900 transition-colors relative py-2 group">
                  Leadership
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-slate-900 transition-all group-hover:w-full" />
                </Link>
                <Link href="/contact" className="hover:text-slate-900 transition-colors relative py-2 group">
                  Contact Us
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-slate-900 transition-all group-hover:w-full" />
                </Link>
              </nav>

              {/* Pequeño indicador de estatus (reemplaza botones toscos) */}
              <div className="hidden sm:flex items-center space-x-2 text-[10px] tracking-widest text-slate-400 uppercase font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                <span>Global Intelligence</span>
              </div>
            </div>
          </header>

          {/* CONTENIDO INTERNO DE LAS PÁGINAS */}
          <main className="flex-grow max-w-5xl w-full mx-auto px-12 py-16">
            {children}
          </main>

          {/* FOOTER INTEGRADO */}
          <footer className="border-t border-slate-100 bg-white py-12">
            <div className="max-w-5xl mx-auto px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] tracking-widest text-slate-400 uppercase font-medium">
              <p>&copy; INA. All rights reserved.</p>
              <p className="text-slate-300">Confidential &mdash; Institutional Use Only</p>
            </div>
          </footer>

        </div>
      </body>
    </html>
  );
}
