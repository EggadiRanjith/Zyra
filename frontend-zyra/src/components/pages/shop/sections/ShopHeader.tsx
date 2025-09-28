'use client';

import { motion } from 'framer-motion';

interface ShopHeaderProps {
  title?: string;
  description?: string;
}

export default function ShopHeader({ 
  title = "Shop ZYRA",
  description = "Discover our curated collection of luxury fashion and accessories"
}: ShopHeaderProps) {
  return (
    <div className="relative bg-pearl-white border-b border-champagne/30">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-royal-gold/20 to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          
          {/* Classic Accent Line */}
          <motion.div 
            className="w-16 h-0.5 bg-royal-gold mx-auto mb-6"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 64, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

          {/* Main Title */}
          <motion.h1 
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-light text-obsidian-black mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {title}
          </motion.h1>

          {/* Description */}
          <motion.p 
            className="text-base sm:text-lg text-graphite max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {description}
          </motion.p>

          {/* Bottom Accent Line */}
          <motion.div 
            className="w-20 h-px bg-royal-gold mx-auto mt-6"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 80, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          />
        </div>
      </div>
    </div>
  );
}
