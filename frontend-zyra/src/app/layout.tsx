import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header, Footer, MobileBottomNav } from "@/components/layout";

export const metadata: Metadata = {
  title: "ZYRA - Timeless Elegance, Modern Luxury",
  description: "Discover our curated collection of premium fashion and accessories. Timeless elegance meets modern luxury at ZYRA.",
  keywords: "luxury fashion, premium clothing, designer accessories, high-end fashion",
  authors: [{ name: "ZYRA" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-pearl-white text-obsidian-black font-sans">
        {/* ===== LUXURY LAYOUT STRUCTURE ===== */}
        <div className="min-h-screen flex flex-col">
          
          {/* ===== HEADER ===== */}
          <Header />
          
          {/* ===== MAIN CONTENT ===== */}
          <main className="flex-1">
            {children}
          </main>
          
          {/* ===== FOOTER ===== */}
          <Footer />
          
          {/* ===== MOBILE BOTTOM NAVIGATION ===== */}
          <MobileBottomNav />
          
        </div>
      </body>
    </html>
  );
}
