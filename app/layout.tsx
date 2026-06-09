import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Asegúrate de que tu archivo de estilos se llame así

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "International Network Advisors | Telecom & Regulatory Strategy",
  description: "Boutique executive consulting firm specializing in telecommunications, regulatory strategy, and market development across the Americas and the Caribbean.",
  keywords: ["Telecommunications", "Regulatory Strategy", "Spectrum Licensing", "Caribbean", "Latin America", "Anthony Monaro"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-slate-950 text-slate-100`}>
        {children}
      </body>
    </html>
  );
}
