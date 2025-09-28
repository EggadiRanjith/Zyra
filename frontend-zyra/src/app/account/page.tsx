'use client';

import { motion } from 'framer-motion';
import { User, ShoppingBag, Heart, Settings, Package, CreditCard, MapPin, Bell, Edit3 } from 'lucide-react';
import Link from 'next/link';

export default function AccountPage() {
  return (
    <div className="min-h-screen bg-pearl-white">
      
      {/* ===== SIMPLE HEADER ===== */}
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-display font-light text-obsidian-black">
            My Account
          </h1>
        </div>
      </div>

      {/* ===== ACCOUNT SECTIONS ===== */}
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Profile Section - Clickable */}
          <Link href="/account/profile">
            <motion.div 
              className="bg-pearl-white rounded-2xl p-6 shadow-luxury-sm border border-champagne/20 mb-6 hover:shadow-luxury-md transition-all duration-300 cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -2 }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-royal-gold/20 to-royal-gold/10 rounded-full flex items-center justify-center group-hover:from-royal-gold group-hover:to-royal-gold/20 transition-all duration-300">
                    <User size={24} className="text-royal-gold group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-obsidian-black group-hover:text-royal-gold transition-colors duration-300">Profile Information</h3>
                    <p className="text-sm text-graphite">Manage your personal details</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-royal-gold group-hover:text-obsidian-black transition-colors duration-300">
                  <Edit3 size={18} />
                  <span className="text-sm font-medium">Edit</span>
                </div>
              </div>
              
              {/* Current Profile Info Display */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-graphite mb-1">First Name</label>
                  <p className="text-sm text-obsidian-black font-medium">John</p>
                </div>
                <div>
                  <label className="block text-xs font-medium text-graphite mb-1">Last Name</label>
                  <p className="text-sm text-obsidian-black font-medium">Doe</p>
                </div>
                <div>
                  <label className="block text-xs font-medium text-graphite mb-1">Email</label>
                  <p className="text-sm text-obsidian-black font-medium">john.doe@email.com</p>
                </div>
                <div>
                  <label className="block text-xs font-medium text-graphite mb-1">Phone</label>
                  <p className="text-sm text-obsidian-black font-medium">+1 (555) 123-4567</p>
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Orders */}
            <Link href="/orders">
              <motion.div 
                className="bg-pearl-white rounded-2xl p-6 shadow-luxury-sm border border-champagne/20 hover:shadow-luxury-md transition-all duration-300 cursor-pointer group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ y: -2 }}
              >
                <div className="w-12 h-12 bg-royal-gold/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-royal-gold/20 transition-colors duration-300">
                  <Package size={20} className="text-royal-gold group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h4 className="text-lg font-semibold text-obsidian-black mb-2 group-hover:text-royal-gold transition-colors duration-300">My Orders</h4>
                <p className="text-sm text-graphite mb-4">Track and manage your orders</p>
                <span className="text-xs text-royal-gold font-medium group-hover:text-obsidian-black transition-colors duration-300">View Orders →</span>
              </motion.div>
            </Link>

            {/* Wishlist */}
            <Link href="/wishlist">
              <motion.div 
                className="bg-pearl-white rounded-2xl p-6 shadow-luxury-sm border border-champagne/20 hover:shadow-luxury-md transition-all duration-300 cursor-pointer group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ y: -2 }}
              >
                <div className="w-12 h-12 bg-royal-gold/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-royal-gold/20 transition-colors duration-300">
                  <Heart size={20} className="text-royal-gold group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h4 className="text-lg font-semibold text-obsidian-black mb-2 group-hover:text-royal-gold transition-colors duration-300">Wishlist</h4>
                <p className="text-sm text-graphite mb-4">Your saved favorites</p>
                <span className="text-xs text-royal-gold font-medium group-hover:text-obsidian-black transition-colors duration-300">View Wishlist →</span>
              </motion.div>
            </Link>

            {/* Cart */}
            <Link href="/cart">
              <motion.div 
                className="bg-pearl-white rounded-2xl p-6 shadow-luxury-sm border border-champagne/20 hover:shadow-luxury-md transition-all duration-300 cursor-pointer group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ y: -2 }}
              >
                <div className="w-12 h-12 bg-royal-gold/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-royal-gold/20 transition-colors duration-300">
                  <ShoppingBag size={20} className="text-royal-gold group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h4 className="text-lg font-semibold text-obsidian-black mb-2 group-hover:text-royal-gold transition-colors duration-300">Shopping Cart</h4>
                <p className="text-sm text-graphite mb-4">Review your items</p>
                <span className="text-xs text-royal-gold font-medium group-hover:text-obsidian-black transition-colors duration-300">View Cart →</span>
              </motion.div>
            </Link>

            {/* Addresses */}
            <Link href="/account/addresses">
              <motion.div 
                className="bg-pearl-white rounded-2xl p-6 shadow-luxury-sm border border-champagne/20 hover:shadow-luxury-md transition-all duration-300 cursor-pointer group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ y: -2 }}
              >
                <div className="w-12 h-12 bg-royal-gold/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-royal-gold/20 transition-colors duration-300">
                  <MapPin size={20} className="text-royal-gold group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h4 className="text-lg font-semibold text-obsidian-black mb-2 group-hover:text-royal-gold transition-colors duration-300">Addresses</h4>
                <p className="text-sm text-graphite mb-4">Manage shipping addresses</p>
                <span className="text-xs text-royal-gold font-medium group-hover:text-obsidian-black transition-colors duration-300">Manage →</span>
              </motion.div>
            </Link>

            {/* Payment Methods */}
            <Link href="/account/payment">
              <motion.div 
                className="bg-pearl-white rounded-2xl p-6 shadow-luxury-sm border border-champagne/20 hover:shadow-luxury-md transition-all duration-300 cursor-pointer group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                whileHover={{ y: -2 }}
              >
                <div className="w-12 h-12 bg-royal-gold/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-royal-gold/20 transition-colors duration-300">
                  <CreditCard size={20} className="text-royal-gold group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h4 className="text-lg font-semibold text-obsidian-black mb-2 group-hover:text-royal-gold transition-colors duration-300">Payment Methods</h4>
                <p className="text-sm text-graphite mb-4">Manage payment options</p>
                <span className="text-xs text-royal-gold font-medium group-hover:text-obsidian-black transition-colors duration-300">Manage →</span>
              </motion.div>
            </Link>

            {/* Settings */}
            <Link href="/account/settings">
              <motion.div 
                className="bg-pearl-white rounded-2xl p-6 shadow-luxury-sm border border-champagne/20 hover:shadow-luxury-md transition-all duration-300 cursor-pointer group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ y: -2 }}
              >
                <div className="w-12 h-12 bg-royal-gold/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-royal-gold/20 transition-colors duration-300">
                  <Settings size={20} className="text-royal-gold group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h4 className="text-lg font-semibold text-obsidian-black mb-2 group-hover:text-royal-gold transition-colors duration-300">Settings</h4>
                <p className="text-sm text-graphite mb-4">Account preferences</p>
                <span className="text-xs text-royal-gold font-medium group-hover:text-obsidian-black transition-colors duration-300">Manage →</span>
              </motion.div>
            </Link>

          </div>

        </div>
      </div>

    </div>
  );
}