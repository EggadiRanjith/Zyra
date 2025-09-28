'use client';

import { Upload, Palette, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CustomizedHero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-pearl-white via-warm-cream to-champagne/20">
      {/* Luxury Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-royal-gold/10 via-transparent to-royal-gold/10"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-royal-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-autumn-cognac/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 px-4 py-6 sm:py-8 lg:py-10 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Luxury Accent Line */}
          <motion.div 
            className="w-16 h-0.5 sm:w-24 bg-gradient-to-r from-transparent via-royal-gold to-transparent mx-auto mb-4 sm:mb-6"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 64, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          />

          {/* Main Title */}
          <motion.h1 
            className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-display font-light text-obsidian-black mb-3 sm:mb-4 tracking-tight"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              textShadow: '0 0 20px rgba(212, 175, 55, 0.12)'
            }}
          >
            Design Your Perfect T-Shirt
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            className="mb-4 sm:mb-5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="text-xs sm:text-sm font-light text-royal-gold uppercase tracking-[0.25em]">
              CUSTOM DESIGN STUDIO
            </span>
          </motion.div>

          {/* Description */}
          <motion.p 
            className="text-sm sm:text-base text-obsidian-black/80 max-w-xl mx-auto leading-relaxed font-light mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Upload your design, choose your style, and create unique t-shirts that reflect your personality.
          </motion.p>

          {/* Design Guide Steps - Enhanced Luxury Layout */}
          <motion.div 
            className="flex flex-row items-center justify-center gap-2 sm:gap-6 lg:gap-8 max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {/* 1st Step - Upload */}
            <motion.div 
              className="flex flex-col items-center group relative"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.3 }}
            >
              {/* Step Number Badge */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-royal-gold text-obsidian-black text-xs font-bold rounded-full flex items-center justify-center shadow-luxury-sm">
                1
              </div>
              
              {/* Icon Container with Enhanced Effects */}
              <div className="relative">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-royal-gold/20 via-royal-gold/10 to-champagne/20 rounded-2xl flex items-center justify-center group-hover:from-royal-gold group-hover:to-royal-gold group-hover:text-obsidian-black transition-all duration-500 group-hover:scale-110 group-hover:shadow-luxury-lg border border-royal-gold/20 group-hover:border-royal-gold">
                  <Upload size={18} className="sm:w-7 sm:h-7 text-royal-gold group-hover:text-obsidian-black transition-colors duration-300" />
                </div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-royal-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10"></div>
              </div>
              
              {/* Text Content */}
              <div className="mt-3 text-center">
                <h3 className="text-sm sm:text-base font-semibold text-obsidian-black group-hover:text-royal-gold transition-colors duration-300">Upload</h3>
                <p className="text-xs sm:text-sm text-graphite group-hover:text-obsidian-black/80 transition-colors duration-300">Your Design</p>
              </div>
            </motion.div>

            {/* Enhanced Arrow */}
            <motion.div 
              className="text-royal-gold/60 text-xl sm:text-2xl mt-6"
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.div>

            {/* 2nd Step - Customize */}
            <motion.div 
              className="flex flex-col items-center group relative"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.3 }}
            >
              {/* Step Number Badge */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-royal-gold text-obsidian-black text-xs font-bold rounded-full flex items-center justify-center shadow-luxury-sm">
                2
              </div>
              
              {/* Icon Container with Enhanced Effects */}
              <div className="relative">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-royal-gold/20 via-royal-gold/10 to-champagne/20 rounded-2xl flex items-center justify-center group-hover:from-royal-gold group-hover:to-royal-gold group-hover:text-obsidian-black transition-all duration-500 group-hover:scale-110 group-hover:shadow-luxury-lg border border-royal-gold/20 group-hover:border-royal-gold">
                  <Palette size={18} className="sm:w-7 sm:h-7 text-royal-gold group-hover:text-obsidian-black transition-colors duration-300" />
                </div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-royal-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10"></div>
              </div>
              
              {/* Text Content */}
              <div className="mt-3 text-center">
                <h3 className="text-sm sm:text-base font-semibold text-obsidian-black group-hover:text-royal-gold transition-colors duration-300">Customize</h3>
                <p className="text-xs sm:text-sm text-graphite group-hover:text-obsidian-black/80 transition-colors duration-300">Colors & Style</p>
              </div>
            </motion.div>

            {/* Enhanced Arrow */}
            <motion.div 
              className="text-royal-gold/60 text-xl sm:text-2xl mt-6"
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              →
            </motion.div>

            {/* 3rd Step - Generate */}
            <motion.div 
              className="flex flex-col items-center group relative"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.3 }}
            >
              {/* Step Number Badge */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-royal-gold text-obsidian-black text-xs font-bold rounded-full flex items-center justify-center shadow-luxury-sm">
                3
              </div>
              
              {/* Icon Container with Enhanced Effects */}
              <div className="relative">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-royal-gold/20 via-royal-gold/10 to-champagne/20 rounded-2xl flex items-center justify-center group-hover:from-royal-gold group-hover:to-royal-gold group-hover:text-obsidian-black transition-all duration-500 group-hover:scale-110 group-hover:shadow-luxury-lg border border-royal-gold/20 group-hover:border-royal-gold">
                  <Sparkles size={18} className="sm:w-7 sm:h-7 text-royal-gold group-hover:text-obsidian-black transition-colors duration-300" />
                </div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-royal-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10"></div>
              </div>
              
              {/* Text Content */}
              <div className="mt-3 text-center">
                <h3 className="text-sm sm:text-base font-semibold text-obsidian-black group-hover:text-royal-gold transition-colors duration-300">Generate</h3>
                <p className="text-xs sm:text-sm text-graphite group-hover:text-obsidian-black/80 transition-colors duration-300">AI Creates</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom Accent Line */}
          <motion.div 
            className="w-20 h-px sm:w-32 bg-gradient-to-r from-transparent via-royal-gold to-transparent mx-auto mt-6 sm:mt-8"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 80, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </div>
      </div>
    </div>
  );
}
