'use client';

import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-obsidian-black text-pearl-white mt-auto">
      {/* ===== LUXURY FOOTER ===== */}
      <div className="luxury-container py-8 lg:py-12 px-4 sm:px-6 lg:px-8">
        
        {/* ===== FOOTER CONTENT ===== */}
        <div className="text-center">
          
          {/* Brand Logo */}
          <div className="mb-6">
            <h2 className="text-2xl lg:text-3xl font-display font-light text-pearl-white tracking-wider mb-3">
              ZYRA
            </h2>
            <div className="w-16 h-px bg-royal-gold mx-auto mb-4"></div>
            <p className="text-xs lg:text-sm text-pearl-white/80 font-light tracking-wide max-w-md mx-auto leading-relaxed">
              Timeless elegance meets modern luxury
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm">
            <a href="/about" className="text-pearl-white/60 hover:text-royal-gold transition-colors duration-300">About</a>
            <a href="/contact" className="text-pearl-white/60 hover:text-royal-gold transition-colors duration-300">Contact</a>
            <a href="/size-guide" className="text-pearl-white/60 hover:text-royal-gold transition-colors duration-300">Size Guide</a>
            <a href="/shipping" className="text-pearl-white/60 hover:text-royal-gold transition-colors duration-300">Shipping</a>
            <a href="/returns" className="text-pearl-white/60 hover:text-royal-gold transition-colors duration-300">Returns</a>
            <a href="/privacy" className="text-pearl-white/60 hover:text-royal-gold transition-colors duration-300">Privacy</a>
            <a href="/terms" className="text-pearl-white/60 hover:text-royal-gold transition-colors duration-300">Terms</a>
          </div>

          {/* Social Media */}
          <div className="flex justify-center space-x-4 mb-6">
            <a href="#" className="luxury-touch p-2 text-pearl-white/60 hover:text-royal-gold transition-all duration-300 group">
              <Instagram size={18} className="group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a href="#" className="luxury-touch p-2 text-pearl-white/60 hover:text-royal-gold transition-all duration-300 group">
              <Twitter size={18} className="group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a href="#" className="luxury-touch p-2 text-pearl-white/60 hover:text-royal-gold transition-all duration-300 group">
              <Facebook size={18} className="group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a href="#" className="luxury-touch p-2 text-pearl-white/60 hover:text-royal-gold transition-all duration-300 group">
              <Youtube size={18} className="group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>

          {/* Copyright */}
          <div className="border-t border-pearl-white/20 pt-4">
            <p className="text-xs text-pearl-white/60 font-light tracking-wide">
              © 2024 ZYRA. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}