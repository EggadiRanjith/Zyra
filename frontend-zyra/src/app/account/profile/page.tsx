'use client';

import { motion } from 'framer-motion';
import { User, ArrowLeft, Save, Eye, EyeOff, Mail, Phone, MapPin, Calendar } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ProfilePage() {
  const [isMobile, setIsMobile] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@email.com',
    phone: '+1 (555) 123-4567',
    dateOfBirth: '1990-01-15',
    address: '123 Main Street',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    country: 'United States',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Profile updated:', formData);
  };

  return (
    <div className="min-h-screen bg-pearl-white">
      
      {/* ===== HEADER ===== */}
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
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
                Edit Profile
              </h1>
              <p className={`${isMobile ? 'text-sm' : 'text-base'} text-graphite`}>
                Update your personal information
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== PROFILE FORM ===== */}
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Personal Information */}
            <motion.div
              className="bg-pearl-white rounded-2xl p-6 shadow-luxury-sm border border-champagne/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-royal-gold/10 rounded-xl flex items-center justify-center">
                  <User size={20} className="text-royal-gold" />
                </div>
                <h2 className={`${isMobile ? 'text-lg' : 'text-xl'} font-semibold text-obsidian-black`}>
                  Personal Information
                </h2>
              </div>
              
              <div className={`grid ${isMobile ? 'grid-cols-1 gap-4' : 'grid-cols-1 sm:grid-cols-2 gap-6'}`}>
                <div>
                  <label className={`block ${isMobile ? 'text-xs' : 'text-sm'} font-medium text-obsidian-black ${isMobile ? 'mb-1' : 'mb-2'}`}>
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className={`w-full ${isMobile ? 'px-3 py-2 text-sm' : 'px-4 py-3'} border border-champagne/30 rounded-lg focus:border-royal-gold focus:outline-none`}
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className={`block ${isMobile ? 'text-xs' : 'text-sm'} font-medium text-obsidian-black ${isMobile ? 'mb-1' : 'mb-2'}`}>
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className={`w-full ${isMobile ? 'px-3 py-2 text-sm' : 'px-4 py-3'} border border-champagne/30 rounded-lg focus:border-royal-gold focus:outline-none`}
                    placeholder="Enter your last name"
                  />
                </div>
                <div>
                  <label className={`block ${isMobile ? 'text-xs' : 'text-sm'} font-medium text-obsidian-black ${isMobile ? 'mb-1' : 'mb-2'}`}>
                    Email *
                  </label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-graphite" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`w-full ${isMobile ? 'px-10 py-2 text-sm' : 'px-12 py-3'} border border-champagne/30 rounded-lg focus:border-royal-gold focus:outline-none`}
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div>
                  <label className={`block ${isMobile ? 'text-xs' : 'text-sm'} font-medium text-obsidian-black ${isMobile ? 'mb-1' : 'mb-2'}`}>
                    Phone *
                  </label>
                  <div className="relative">
                    <Phone size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-graphite" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className={`w-full ${isMobile ? 'px-10 py-2 text-sm' : 'px-12 py-3'} border border-champagne/30 rounded-lg focus:border-royal-gold focus:outline-none`}
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                <div>
                  <label className={`block ${isMobile ? 'text-xs' : 'text-sm'} font-medium text-obsidian-black ${isMobile ? 'mb-1' : 'mb-2'}`}>
                    Date of Birth
                  </label>
                  <div className="relative">
                    <Calendar size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-graphite" />
                    <input
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                      className={`w-full ${isMobile ? 'px-10 py-2 text-sm' : 'px-12 py-3'} border border-champagne/30 rounded-lg focus:border-royal-gold focus:outline-none`}
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Address Information */}
            <motion.div
              className="bg-pearl-white rounded-2xl p-6 shadow-luxury-sm border border-champagne/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-royal-gold/10 rounded-xl flex items-center justify-center">
                  <MapPin size={20} className="text-royal-gold" />
                </div>
                <h2 className={`${isMobile ? 'text-lg' : 'text-xl'} font-semibold text-obsidian-black`}>
                  Address Information
                </h2>
              </div>
              
              <div className={`grid ${isMobile ? 'grid-cols-1 gap-4' : 'grid-cols-1 sm:grid-cols-2 gap-6'}`}>
                <div className={`${isMobile ? 'col-span-1' : 'sm:col-span-2'}`}>
                  <label className={`block ${isMobile ? 'text-xs' : 'text-sm'} font-medium text-obsidian-black ${isMobile ? 'mb-1' : 'mb-2'}`}>
                    Street Address
                  </label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    className={`w-full ${isMobile ? 'px-3 py-2 text-sm' : 'px-4 py-3'} border border-champagne/30 rounded-lg focus:border-royal-gold focus:outline-none`}
                    placeholder="Enter your street address"
                  />
                </div>
                <div>
                  <label className={`block ${isMobile ? 'text-xs' : 'text-sm'} font-medium text-obsidian-black ${isMobile ? 'mb-1' : 'mb-2'}`}>
                    City
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    className={`w-full ${isMobile ? 'px-3 py-2 text-sm' : 'px-4 py-3'} border border-champagne/30 rounded-lg focus:border-royal-gold focus:outline-none`}
                    placeholder="Enter your city"
                  />
                </div>
                <div>
                  <label className={`block ${isMobile ? 'text-xs' : 'text-sm'} font-medium text-obsidian-black ${isMobile ? 'mb-1' : 'mb-2'}`}>
                    State
                  </label>
                  <input
                    type="text"
                    value={formData.state}
                    onChange={(e) => handleInputChange('state', e.target.value)}
                    className={`w-full ${isMobile ? 'px-3 py-2 text-sm' : 'px-4 py-3'} border border-champagne/30 rounded-lg focus:border-royal-gold focus:outline-none`}
                    placeholder="Enter your state"
                  />
                </div>
                <div>
                  <label className={`block ${isMobile ? 'text-xs' : 'text-sm'} font-medium text-obsidian-black ${isMobile ? 'mb-1' : 'mb-2'}`}>
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    value={formData.zipCode}
                    onChange={(e) => handleInputChange('zipCode', e.target.value)}
                    className={`w-full ${isMobile ? 'px-3 py-2 text-sm' : 'px-4 py-3'} border border-champagne/30 rounded-lg focus:border-royal-gold focus:outline-none`}
                    placeholder="Enter your ZIP code"
                  />
                </div>
                <div>
                  <label className={`block ${isMobile ? 'text-xs' : 'text-sm'} font-medium text-obsidian-black ${isMobile ? 'mb-1' : 'mb-2'}`}>
                    Country
                  </label>
                  <select
                    value={formData.country}
                    onChange={(e) => handleInputChange('country', e.target.value)}
                    className={`w-full ${isMobile ? 'px-3 py-2 text-sm' : 'px-4 py-3'} border border-champagne/30 rounded-lg focus:border-royal-gold focus:outline-none`}
                  >
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Australia">Australia</option>
                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                  </select>
                </div>
              </div>
            </motion.div>

            {/* Password Section */}
            <motion.div
              className="bg-pearl-white rounded-2xl p-6 shadow-luxury-sm border border-champagne/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-royal-gold/10 rounded-xl flex items-center justify-center">
                  <Eye size={20} className="text-royal-gold" />
                </div>
                <h2 className={`${isMobile ? 'text-lg' : 'text-xl'} font-semibold text-obsidian-black`}>
                  Change Password
                </h2>
              </div>
              
              <div className={`grid ${isMobile ? 'grid-cols-1 gap-4' : 'grid-cols-1 sm:grid-cols-2 gap-6'}`}>
                <div>
                  <label className={`block ${isMobile ? 'text-xs' : 'text-sm'} font-medium text-obsidian-black ${isMobile ? 'mb-1' : 'mb-2'}`}>
                    Current Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={formData.currentPassword}
                      onChange={(e) => handleInputChange('currentPassword', e.target.value)}
                      className={`w-full ${isMobile ? 'px-3 py-2 text-sm' : 'px-4 py-3'} pr-10 border border-champagne/30 rounded-lg focus:border-royal-gold focus:outline-none`}
                      placeholder="Enter current password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-graphite hover:text-royal-gold transition-colors duration-300"
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>
                <div>
                  <label className={`block ${isMobile ? 'text-xs' : 'text-sm'} font-medium text-obsidian-black ${isMobile ? 'mb-1' : 'mb-2'}`}>
                    New Password
                  </label>
                  <input
                    type="password"
                    value={formData.newPassword}
                    onChange={(e) => handleInputChange('newPassword', e.target.value)}
                    className={`w-full ${isMobile ? 'px-3 py-2 text-sm' : 'px-4 py-3'} border border-champagne/30 rounded-lg focus:border-royal-gold focus:outline-none`}
                    placeholder="Enter new password"
                  />
                </div>
                <div className={`${isMobile ? 'col-span-1' : 'sm:col-span-2'}`}>
                  <label className={`block ${isMobile ? 'text-xs' : 'text-sm'} font-medium text-obsidian-black ${isMobile ? 'mb-1' : 'mb-2'}`}>
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    className={`w-full ${isMobile ? 'px-3 py-2 text-sm' : 'px-4 py-3'} border border-champagne/30 rounded-lg focus:border-royal-gold focus:outline-none`}
                    placeholder="Confirm new password"
                  />
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className={`flex ${isMobile ? 'flex-col gap-3' : 'items-center justify-between'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link href="/account">
                <motion.button
                  type="button"
                  className={`${isMobile ? 'w-full px-6 py-3 text-sm' : 'px-8 py-3'} bg-champagne/20 text-obsidian-black rounded-lg font-medium hover:bg-champagne/30 transition-colors duration-300 flex items-center justify-center gap-2`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ArrowLeft size={isMobile ? 16 : 18} />
                  Cancel
                </motion.button>
              </Link>
              
              <motion.button
                type="submit"
                className={`${isMobile ? 'w-full px-6 py-3 text-sm' : 'px-8 py-3'} bg-obsidian-black text-pearl-white rounded-lg font-medium hover:bg-royal-gold hover:text-obsidian-black transition-colors duration-300 flex items-center justify-center gap-2`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Save size={isMobile ? 16 : 18} />
                Save Changes
              </motion.button>
            </motion.div>

          </form>
        </div>
      </div>

    </div>
  );
}
