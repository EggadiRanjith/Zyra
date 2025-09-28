'use client';

import { motion } from 'framer-motion';
import { Settings, ArrowLeft, Bell, Shield, Globe, Palette, Moon, Sun, Smartphone, Mail, Lock } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function SettingsPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      sms: false,
      push: true,
      marketing: false
    },
    privacy: {
      profileVisibility: 'private',
      dataSharing: false,
      analytics: true
    },
    appearance: {
      theme: 'light',
      language: 'en',
      currency: 'USD'
    },
    security: {
      twoFactor: false,
      loginAlerts: true,
      sessionTimeout: 30
    }
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

  const updateSetting = (category: string, key: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category as keyof typeof prev],
        [key]: value
      }
    }));
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
                Settings
              </h1>
              <p className={`${isMobile ? 'text-sm' : 'text-base'} text-graphite`}>
                Manage your account preferences
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== SETTINGS SECTIONS ===== */}
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Notifications */}
          <motion.div
            className="bg-pearl-white rounded-2xl p-6 shadow-luxury-sm border border-champagne/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-royal-gold/10 rounded-xl flex items-center justify-center">
                <Bell size={20} className="text-royal-gold" />
              </div>
              <h2 className={`${isMobile ? 'text-lg' : 'text-xl'} font-semibold text-obsidian-black`}>
                Notifications
              </h2>
            </div>
            
            <div className="space-y-4">
              {Object.entries(settings.notifications).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {key === 'email' && <Mail size={isMobile ? 16 : 18} className="text-graphite" />}
                    {key === 'sms' && <Smartphone size={isMobile ? 16 : 18} className="text-graphite" />}
                    {key === 'push' && <Bell size={isMobile ? 16 : 18} className="text-graphite" />}
                    {key === 'marketing' && <Mail size={isMobile ? 16 : 18} className="text-graphite" />}
                    <div>
                      <p className={`${isMobile ? 'text-sm' : 'text-base'} font-medium text-obsidian-black`}>
                        {key.charAt(0).toUpperCase() + key.slice(1)} Notifications
                      </p>
                      <p className={`${isMobile ? 'text-xs' : 'text-sm'} text-graphite`}>
                        {key === 'email' && 'Receive updates via email'}
                        {key === 'sms' && 'Receive updates via SMS'}
                        {key === 'push' && 'Receive push notifications'}
                        {key === 'marketing' && 'Receive marketing emails and offers'}
                      </p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={value}
                      onChange={(e) => updateSetting('notifications', key, e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-champagne/30 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-royal-gold/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-royal-gold"></div>
                  </label>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Privacy */}
          <motion.div
            className="bg-pearl-white rounded-2xl p-6 shadow-luxury-sm border border-champagne/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-royal-gold/10 rounded-xl flex items-center justify-center">
                <Shield size={20} className="text-royal-gold" />
              </div>
              <h2 className={`${isMobile ? 'text-lg' : 'text-xl'} font-semibold text-obsidian-black`}>
                Privacy & Security
              </h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className={`${isMobile ? 'text-sm' : 'text-base'} font-medium text-obsidian-black`}>
                    Profile Visibility
                  </p>
                  <p className={`${isMobile ? 'text-xs' : 'text-sm'} text-graphite`}>
                    Control who can see your profile
                  </p>
                </div>
                <select
                  value={settings.privacy.profileVisibility}
                  onChange={(e) => updateSetting('privacy', 'profileVisibility', e.target.value)}
                  className={`${isMobile ? 'px-3 py-1.5 text-sm' : 'px-4 py-2'} border border-champagne/30 rounded-lg focus:border-royal-gold focus:outline-none`}
                >
                  <option value="private">Private</option>
                  <option value="friends">Friends Only</option>
                  <option value="public">Public</option>
                </select>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className={`${isMobile ? 'text-sm' : 'text-base'} font-medium text-obsidian-black`}>
                    Data Sharing
                  </p>
                  <p className={`${isMobile ? 'text-xs' : 'text-sm'} text-graphite`}>
                    Allow data sharing for better experience
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.privacy.dataSharing}
                    onChange={(e) => updateSetting('privacy', 'dataSharing', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-champagne/30 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-royal-gold/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-royal-gold"></div>
                </label>
              </div>
            </div>
          </motion.div>

          {/* Appearance */}
          <motion.div
            className="bg-pearl-white rounded-2xl p-6 shadow-luxury-sm border border-champagne/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-royal-gold/10 rounded-xl flex items-center justify-center">
                <Palette size={20} className="text-royal-gold" />
              </div>
              <h2 className={`${isMobile ? 'text-lg' : 'text-xl'} font-semibold text-obsidian-black`}>
                Appearance
              </h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className={`${isMobile ? 'text-sm' : 'text-base'} font-medium text-obsidian-black`}>
                    Theme
                  </p>
                  <p className={`${isMobile ? 'text-xs' : 'text-sm'} text-graphite`}>
                    Choose your preferred theme
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateSetting('appearance', 'theme', 'light')}
                    className={`p-2 rounded-lg ${settings.appearance.theme === 'light' ? 'bg-royal-gold text-obsidian-black' : 'bg-champagne/20 text-graphite'}`}
                  >
                    <Sun size={isMobile ? 16 : 18} />
                  </button>
                  <button
                    onClick={() => updateSetting('appearance', 'theme', 'dark')}
                    className={`p-2 rounded-lg ${settings.appearance.theme === 'dark' ? 'bg-royal-gold text-obsidian-black' : 'bg-champagne/20 text-graphite'}`}
                  >
                    <Moon size={isMobile ? 16 : 18} />
                  </button>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className={`${isMobile ? 'text-sm' : 'text-base'} font-medium text-obsidian-black`}>
                    Language
                  </p>
                  <p className={`${isMobile ? 'text-xs' : 'text-sm'} text-graphite`}>
                    Select your preferred language
                  </p>
                </div>
                <select
                  value={settings.appearance.language}
                  onChange={(e) => updateSetting('appearance', 'language', e.target.value)}
                  className={`${isMobile ? 'px-3 py-1.5 text-sm' : 'px-4 py-2'} border border-champagne/30 rounded-lg focus:border-royal-gold focus:outline-none`}
                >
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                </select>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className={`${isMobile ? 'text-sm' : 'text-base'} font-medium text-obsidian-black`}>
                    Currency
                  </p>
                  <p className={`${isMobile ? 'text-xs' : 'text-sm'} text-graphite`}>
                    Select your preferred currency
                  </p>
                </div>
                <select
                  value={settings.appearance.currency}
                  onChange={(e) => updateSetting('appearance', 'currency', e.target.value)}
                  className={`${isMobile ? 'px-3 py-1.5 text-sm' : 'px-4 py-2'} border border-champagne/30 rounded-lg focus:border-royal-gold focus:outline-none`}
                >
                  <option value="USD">USD ($)</option>
                  <option value="EUR">EUR (€)</option>
                  <option value="GBP">GBP (£)</option>
                  <option value="CAD">CAD (C$)</option>
                </select>
              </div>
            </div>
          </motion.div>

          {/* Security */}
          <motion.div
            className="bg-pearl-white rounded-2xl p-6 shadow-luxury-sm border border-champagne/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-royal-gold/10 rounded-xl flex items-center justify-center">
                <Lock size={20} className="text-royal-gold" />
              </div>
              <h2 className={`${isMobile ? 'text-lg' : 'text-xl'} font-semibold text-obsidian-black`}>
                Security Settings
              </h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className={`${isMobile ? 'text-sm' : 'text-base'} font-medium text-obsidian-black`}>
                    Two-Factor Authentication
                  </p>
                  <p className={`${isMobile ? 'text-xs' : 'text-sm'} text-graphite`}>
                    Add an extra layer of security
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.security.twoFactor}
                    onChange={(e) => updateSetting('security', 'twoFactor', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-champagne/30 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-royal-gold/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-royal-gold"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className={`${isMobile ? 'text-sm' : 'text-base'} font-medium text-obsidian-black`}>
                    Login Alerts
                  </p>
                  <p className={`${isMobile ? 'text-xs' : 'text-sm'} text-graphite`}>
                    Get notified of new login attempts
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.security.loginAlerts}
                    onChange={(e) => updateSetting('security', 'loginAlerts', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-champagne/30 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-royal-gold/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-royal-gold"></div>
                </label>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

    </div>
  );
}
