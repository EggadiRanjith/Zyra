'use client';

import { motion } from 'framer-motion';
import { MapPin, Plus, Edit3, Trash2, ArrowLeft, Check } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AddressesPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      type: 'Home',
      name: 'John Doe',
      address: '123 Main Street',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'United States',
      phone: '+1 (555) 123-4567',
      isDefault: true
    },
    {
      id: 2,
      type: 'Work',
      name: 'John Doe',
      address: '456 Business Ave',
      city: 'New York',
      state: 'NY',
      zipCode: '10002',
      country: 'United States',
      phone: '+1 (555) 987-6543',
      isDefault: false
    }
  ]);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const setDefaultAddress = (id: number) => {
    setAddresses(addresses.map(addr => ({
      ...addr,
      isDefault: addr.id === id
    })));
  };

  const deleteAddress = (id: number) => {
    setAddresses(addresses.filter(addr => addr.id !== id));
  };

  return (
    <div className="min-h-screen bg-pearl-white">
      
      {/* ===== HEADER ===== */}
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Link href="/account">
                <motion.button
                  className="p-2 text-graphite hover:text-royal-gold transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ArrowLeft size={isMobile ? 20 : 24} />
                </motion.button>
              </Link>
              <div>
                <h1 className={`${isMobile ? 'text-2xl' : 'text-3xl'} font-display font-light text-obsidian-black`}>
                  Addresses
                </h1>
                <p className={`${isMobile ? 'text-sm' : 'text-base'} text-graphite`}>
                  Manage your shipping addresses
                </p>
              </div>
            </div>
            <motion.button
              className={`${isMobile ? 'px-4 py-2 text-sm' : 'px-6 py-3'} bg-royal-gold text-obsidian-black rounded-lg font-medium hover:bg-royal-gold/90 transition-colors duration-300 flex items-center gap-2`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Plus size={isMobile ? 16 : 18} />
              Add Address
            </motion.button>
          </div>
        </div>
      </div>

      {/* ===== ADDRESSES LIST ===== */}
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {addresses.length > 0 ? (
            <div className={`grid ${isMobile ? 'grid-cols-1 gap-4' : 'grid-cols-1 md:grid-cols-2 gap-6'}`}>
              {addresses.map((address, index) => (
                <motion.div
                  key={address.id}
                  className="bg-pearl-white rounded-2xl p-6 shadow-luxury-sm border border-champagne/20 relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Default Badge */}
                  {address.isDefault && (
                    <div className="absolute top-4 right-4 bg-royal-gold text-obsidian-black px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                      <Check size={12} />
                      Default
                    </div>
                  )}

                  {/* Address Type */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 bg-royal-gold/10 rounded-lg flex items-center justify-center">
                      <MapPin size={16} className="text-royal-gold" />
                    </div>
                    <h3 className={`${isMobile ? 'text-base' : 'text-lg'} font-semibold text-obsidian-black`}>
                      {address.type} Address
                    </h3>
                  </div>

                  {/* Address Details */}
                  <div className="space-y-2 mb-6">
                    <p className={`${isMobile ? 'text-sm' : 'text-base'} font-medium text-obsidian-black`}>
                      {address.name}
                    </p>
                    <p className={`${isMobile ? 'text-sm' : 'text-base'} text-graphite`}>
                      {address.address}
                    </p>
                    <p className={`${isMobile ? 'text-sm' : 'text-base'} text-graphite`}>
                      {address.city}, {address.state} {address.zipCode}
                    </p>
                    <p className={`${isMobile ? 'text-sm' : 'text-base'} text-graphite`}>
                      {address.country}
                    </p>
                    <p className={`${isMobile ? 'text-sm' : 'text-base'} text-graphite`}>
                      {address.phone}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className={`flex ${isMobile ? 'flex-col gap-2' : 'items-center justify-between'}`}>
                    <div className={`flex ${isMobile ? 'gap-2' : 'gap-3'}`}>
                      <motion.button
                        className={`${isMobile ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-sm'} bg-royal-gold/10 text-royal-gold rounded-lg font-medium hover:bg-royal-gold hover:text-obsidian-black transition-colors duration-300 flex items-center gap-1`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Edit3 size={isMobile ? 12 : 14} />
                        Edit
                      </motion.button>
                      <motion.button
                        className={`${isMobile ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-sm'} bg-red-50 text-red-600 rounded-lg font-medium hover:bg-red-600 hover:text-white transition-colors duration-300 flex items-center gap-1`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => deleteAddress(address.id)}
                      >
                        <Trash2 size={isMobile ? 12 : 14} />
                        Delete
                      </motion.button>
                    </div>
                    
                    {!address.isDefault && (
                      <motion.button
                        className={`${isMobile ? 'w-full px-3 py-1.5 text-xs' : 'px-4 py-2 text-sm'} bg-obsidian-black text-pearl-white rounded-lg font-medium hover:bg-royal-gold hover:text-obsidian-black transition-colors duration-300`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setDefaultAddress(address.id)}
                      >
                        Set as Default
                      </motion.button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            /* Empty State */
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-24 h-24 bg-champagne/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin size={32} className="text-graphite" />
              </div>
              <h3 className="text-xl font-semibold text-obsidian-black mb-2">No addresses yet</h3>
              <p className="text-graphite mb-6">Add your first shipping address to get started</p>
              <motion.button
                className="px-6 py-3 bg-obsidian-black text-pearl-white rounded-lg font-medium hover:bg-royal-gold hover:text-obsidian-black transition-colors duration-300 flex items-center gap-2 mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Plus size={18} />
                Add Address
              </motion.button>
            </motion.div>
          )}
        </div>
      </div>

    </div>
  );
}
