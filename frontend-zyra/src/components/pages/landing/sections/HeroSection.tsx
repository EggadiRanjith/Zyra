'use client';

import { useState, useEffect } from 'react';
import { ShoppingBag, Crown, Film, Palette } from 'lucide-react';

const heroSections = [
  {
    id: 'signature',
    title: 'ZYRA',
    subtitle: 'Signature Collection',
    description: 'Exquisite craftsmanship meets timeless elegance in our signature collection of premium t-shirts.',
    cta: 'Discover Collection',
    icon: Crown,
    accentColor: '#d4af37',
  },
  {
    id: 'movie',
    title: 'CINEMATIC',
    subtitle: 'Classic Collection',
    description: 'Iconic movie-inspired designs that capture the essence of Hollywood\'s golden age.',
    cta: 'View Collection',
    icon: Film,
    accentColor: '#dc2626',
  },
  {
    id: 'customized',
    title: 'BESPOKE',
    subtitle: 'Custom Collection',
    description: 'Your vision, our expertise. Create personalized luxury t-shirts tailored to your unique style.',
    cta: 'Start Creating',
    icon: Palette,
    accentColor: '#1d4ed8',
  }
];

export default function HeroSection() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-advance sections
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSection((prev) => (prev + 1) % heroSections.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentData = heroSections[currentSection];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white -mt-16 sm:mt-0">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-8 lg:px-12 max-w-4xl mx-auto flex flex-col items-center justify-center min-h-screen">
        <div className="space-y-6 sm:space-y-8 w-full">
          {/* Icon */}
          <div className="flex justify-center">
            <div 
              className="p-4 sm:p-6 rounded-full border-2"
              style={{
                backgroundColor: `${currentData.accentColor}15`,
                borderColor: `${currentData.accentColor}30`
              }}
            >
              <currentData.icon 
                size={isMobile ? 24 : 32} 
                style={{ color: currentData.accentColor }}
              />
            </div>
          </div>

          {/* Title */}
          <h1 
            className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light"
            style={{ color: '#1a1a1a' }}
          >
            {currentData.title}
          </h1>

          {/* Subtitle */}
          <h2 
            className="text-lg sm:text-xl lg:text-2xl font-light uppercase tracking-wider"
            style={{ color: '#666' }}
          >
            {currentData.subtitle}
          </h2>

          {/* Accent Line */}
          <div 
            className="w-16 h-0.5 mx-auto"
            style={{ backgroundColor: currentData.accentColor }}
          ></div>

          {/* Description */}
          <p 
            className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            {currentData.description}
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <button
              className="px-3 py-2 text-xs font-medium uppercase tracking-wide text-white transition-colors duration-300 whitespace-nowrap"
              style={{ 
                backgroundColor: currentData.accentColor,
                width: isMobile ? '140px' : '160px',
                height: isMobile ? '36px' : '40px',
                fontSize: isMobile ? '10px' : '11px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.9';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1';
              }}
            >
              <span className="flex items-center justify-center gap-1">
                <ShoppingBag size={isMobile ? 12 : 14} />
                {currentData.cta}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Section Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {heroSections.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSection(index)}
            className="w-2 h-2 rounded-full transition-colors duration-300"
            style={{
              backgroundColor: index === currentSection 
                ? currentData.accentColor 
                : '#ccc'
            }}
          />
        ))}
      </div>
    </section>
  );
}