import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "International Network Advisors | Telecommunications & Regulatory Strategy",
  description: "Boutique executive consulting firm specializing in global telecommunications strategy.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-[#fafafa] text-[#1a1a1a] min-h-screen flex flex-col">
        
        {/* GLOBAL EXECUTIVE NAVBAR */}
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100/80">
          <div className="max-w-6xl mx-auto px-8 h-24 flex items-center justify-between">
            
            {/* LOGOTIPO INSTITUCIONAL */}
            <Link href="/" className="flex items-center space-x-3 tracking-[0.2em] uppercase">
              <div className="w-2.5 h-2.5 bg-slate-900 rounded-full" />
              <div className="leading-tight">
                <span className="font-semibold text-sm block text-slate-900">International</span>
                <span className="text-[9px] text-slate-400 block font-medium tracking-[0.3em]">Network Advisors</span>
              </div>
            </Link>
            
            {/* NAVEGACIÓN PRINCIPAL HORIZONTAL */}
            <nav className="hidden md:flex items-center space-x-12 text-[11px] font-medium tracking-[0.25em] uppercase text-slate-500">
              <Link href="/about" className="hover:text-slate-900 transition-colors duration-300 relative py-2 group">
                About us
                <span className="absolute bottom-0 left-0 w-0 h-px bg-slate-950 transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link href="/practices" className="hover:text-slate-900 transition-colors duration-300 relative py-2 group">
                Practice Areas
                <span className="absolute bottom-0 left-0 w-0 h-px bg-slate-950 transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link href="/leadership" className="hover:text-slate-900 transition-colors duration-300 relative py-2 group">
                Leadership
                <span className="absolute bottom-0 left-0 w-0 h-px bg-slate-950 transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link href="/contact" className="hover:text-slate-900 transition-colors duration-300 relative py-2 group">
                Contact us
                <span className="absolute bottom-0 left-0 w-0 h-px bg-slate-950 transition-all duration-300 group-hover:w-full" />
              </Link>
            </nav>
            
            {/* INDICADOR GEOGRÁFICO */}
            <div className="hidden lg:block text-[9px] tracking-[0.25em] uppercase text-slate-400 font-medium">
              HQ &bull; New York
            </div>

          </div>
        </header>

        {/* CONTENIDO PRINCIPAL */}
        <main className="flex-grow">
          {children}
        </main>

        {/* FOOTER CORPORATIVO SOBERBIO */}
        <footer className="border-t border-slate-100 bg-white py-16 text-[10px] tracking-[0.2em] uppercase text-slate-400 font-medium">
          <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <p>&copy; 2026 International Network Advisors LLC.</p>
            <div className="flex space-x-8 text-slate-300">
              <span>Privacy Policy</span>
              <span>&bull;</span>
              <span>Terms of Engagement</span>
              <span>&bull;</span>
              <span className="text-slate-400">Confidential</span>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
