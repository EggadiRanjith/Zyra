'use client';

import { 
  HeroSection,
  ProductShowcase, 
  FeaturesSection, 
  TestimonialsSection 
} from '@/components/pages/landing';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-pearl-white">
      
      {/* ===== MAIN CONTENT ===== */}
      <main className="flex-1">
        {/* ===== HERO SECTION ===== */}
        <HeroSection />
        
        {/* ===== PRODUCT SHOWCASE ===== */}
        <ProductShowcase />
        
        {/* ===== FEATURES SECTION ===== */}
        <FeaturesSection />
        
        {/* ===== TESTIMONIALS SECTION ===== */}
        <TestimonialsSection />
        
      </main>
    </div>
  );
}
