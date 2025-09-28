'use client';

import { motion } from 'framer-motion';
import { Film, Star, Clock, Users } from 'lucide-react';

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-pearl-white">
      
      {/* ===== SIMPLE HEADER ===== */}
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-display font-light text-obsidian-black">
            Movie Collections
          </h1>
        </div>
      </div>

      {/* ===== COMING SOON CONTENT ===== */}
      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Movie Icon */}
          <motion.div
            className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-royal-gold/20 to-royal-gold/10 rounded-full flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Film size={40} className="text-royal-gold" />
          </motion.div>

          {/* Coming Soon Text */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl font-display font-light text-obsidian-black mb-4">
              Coming Soon
            </h2>
            <p className="text-lg text-graphite max-w-2xl mx-auto">
              We're working on bringing you an amazing collection of movie-themed t-shirts. 
              Stay tuned for the ultimate cinematic fashion experience.
            </p>
          </motion.div>

          {/* Features Preview */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-pearl-white rounded-2xl p-6 shadow-luxury-sm border border-champagne/20">
              <div className="w-12 h-12 bg-royal-gold/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Star size={20} className="text-royal-gold" />
              </div>
              <h3 className="text-lg font-semibold text-obsidian-black mb-2">Premium Quality</h3>
              <p className="text-sm text-graphite">High-quality materials and printing</p>
            </div>

            <div className="bg-pearl-white rounded-2xl p-6 shadow-luxury-sm border border-champagne/20">
              <div className="w-12 h-12 bg-royal-gold/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Film size={20} className="text-royal-gold" />
              </div>
              <h3 className="text-lg font-semibold text-obsidian-black mb-2">Movie Themes</h3>
              <p className="text-sm text-graphite">Your favorite movies and characters</p>
            </div>

            <div className="bg-pearl-white rounded-2xl p-6 shadow-luxury-sm border border-champagne/20">
              <div className="w-12 h-12 bg-royal-gold/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users size={20} className="text-royal-gold" />
              </div>
              <h3 className="text-lg font-semibold text-obsidian-black mb-2">Fan Community</h3>
              <p className="text-sm text-graphite">Connect with fellow movie lovers</p>
            </div>
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock size={16} className="text-royal-gold" />
              <span className="text-sm font-medium text-graphite">Development Progress</span>
            </div>
            <div className="w-full max-w-md mx-auto bg-champagne/20 rounded-full h-2">
              <div className="bg-gradient-to-r from-royal-gold to-royal-gold/80 h-2 rounded-full w-3/4"></div>
            </div>
            <p className="text-xs text-graphite mt-2">75% Complete</p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <button className="bg-royal-gold text-pearl-white px-8 py-3 rounded-full font-medium hover:bg-royal-gold/90 transition-colors duration-300">
              Notify Me When Ready
            </button>
          </motion.div>

        </div>
      </div>

    </div>
  );
}
