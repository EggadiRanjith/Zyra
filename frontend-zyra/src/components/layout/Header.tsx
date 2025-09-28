'use client';

import { useState } from 'react';
import { ShoppingBag, Heart, Menu, X, User } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* ===== LUXURY HEADER ===== */}
      <header className="sticky top-0 z-50 bg-pearl-white/80 backdrop-blur-xl border-b border-champagne/30 shadow-luxury-sm">
        <div className="luxury-container px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* ===== LEFT SIDE - MOBILE MENU + LOGO ===== */}
            <div className="flex items-center">
              {/* ===== MOBILE MENU BUTTON ===== */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-obsidian-black hover:text-royal-gold transition-all duration-300 hover:scale-110 hover:bg-royal-gold/10 rounded-lg mr-4 group"
                aria-label="Toggle mobile menu"
              >
                <div className="transition-transform duration-300 group-hover:rotate-90">
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </div>
              </button>

              {/* ===== LOGO ===== */}
              <Link href="/" className="flex items-center group cursor-pointer">
                <h1 className="text-2xl lg:text-3xl font-display font-light tracking-tight text-obsidian-black transition-all duration-500 group-hover:tracking-wider group-hover:text-royal-gold group-hover:scale-105">
                  ZYRA
                </h1>
              </Link>
            </div>

            {/* ===== CENTER - DESKTOP NAVIGATION ===== */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="/shop" className="luxury-link text-sm font-medium hover:scale-105 transition-transform duration-200">Shop</a>
              <a href="/collections" className="luxury-link text-sm font-medium hover:scale-105 transition-transform duration-200">Movie Collections</a>
              <a href="/customized" className="luxury-link text-sm font-medium hover:scale-105 transition-transform duration-200">Customized T-Shirts</a>
              <a href="/about" className="luxury-link text-sm font-medium hover:scale-105 transition-transform duration-200">About</a>
            </nav>

            {/* ===== RIGHT SIDE - ACTION BUTTONS ===== */}
            <div className="flex items-center space-x-2">
              
              {/* Wishlist */}
              <a href="/wishlist" className="p-2 text-obsidian-black hover:text-royal-gold transition-all duration-300 hover:scale-110 hover:bg-royal-gold/10 rounded-lg group">
                <Heart size={20} className="group-hover:scale-110 transition-transform duration-200" />
              </a>

              {/* Shopping Cart */}
              <a href="/cart" className="p-2 text-obsidian-black hover:text-royal-gold transition-all duration-300 hover:scale-110 hover:bg-royal-gold/10 rounded-lg group">
                <ShoppingBag size={20} className="group-hover:scale-110 transition-transform duration-200" />
              </a>

              {/* User Account - Desktop Only */}
              <a href="/account" className="hidden lg:flex p-2 text-obsidian-black hover:text-royal-gold transition-all duration-300 hover:scale-110 hover:bg-royal-gold/10 rounded-lg group">
                <User size={20} className="group-hover:scale-110 transition-transform duration-200" />
              </a>
            </div>
          </div>

        </div>

        {/* ===== MOBILE MENU ===== */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-pearl-white/95 backdrop-blur-xl border-b border-champagne/30 shadow-luxury animate-luxury-slide-up">
            <nav className="px-4 sm:px-6 py-6">
              <div className="space-y-2">
                <a href="/shop" className="block luxury-link text-lg py-3 px-4 rounded-lg hover:bg-royal-gold/10 transition-all duration-300 hover:scale-105 hover:translate-x-2">Shop</a>
                <a href="/collections" className="block luxury-link text-lg py-3 px-4 rounded-lg hover:bg-royal-gold/10 transition-all duration-300 hover:scale-105 hover:translate-x-2">Movie Collections</a>
                <a href="/customized" className="block luxury-link text-lg py-3 px-4 rounded-lg hover:bg-royal-gold/10 transition-all duration-300 hover:scale-105 hover:translate-x-2">Customized T-Shirts</a>
                <a href="/about" className="block luxury-link text-lg py-3 px-4 rounded-lg hover:bg-royal-gold/10 transition-all duration-300 hover:scale-105 hover:translate-x-2">About</a>
                <a href="/contact" className="block luxury-link text-lg py-3 px-4 rounded-lg hover:bg-royal-gold/10 transition-all duration-300 hover:scale-105 hover:translate-x-2">Contact</a>
                <a href="/orders" className="block luxury-link text-lg py-3 px-4 rounded-lg hover:bg-royal-gold/10 transition-all duration-300 hover:scale-105 hover:translate-x-2">Orders</a>
                <a href="/account" className="block luxury-link text-lg py-3 px-4 rounded-lg hover:bg-royal-gold/10 transition-all duration-300 hover:scale-105 hover:translate-x-2">Account</a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
