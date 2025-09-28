'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, UserCheck, Mail, Calendar } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function PrivacyPage() {
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const sections = [
    {
      icon: Database,
      title: 'Information We Collect',
      content: [
        'Personal information you provide (name, email, address, phone number)',
        'Payment information (processed securely through encrypted channels)',
        'Order history and preferences',
        'Communication records and customer service interactions',
        'Website usage data and analytics (cookies, IP address, browser type)',
        'Device information and location data (with your consent)'
      ]
    },
    {
      icon: Eye,
      title: 'How We Use Your Information',
      content: [
        'Process and fulfill your orders',
        'Provide customer support and respond to inquiries',
        'Send order confirmations, shipping updates, and delivery notifications',
        'Improve our products and services',
        'Send marketing communications (with your consent)',
        'Prevent fraud and ensure security',
        'Comply with legal obligations'
      ]
    },
    {
      icon: Lock,
      title: 'Data Security',
      content: [
        'We use industry-standard encryption to protect your data',
        'Secure servers and regular security audits',
        'Limited access to personal information on a need-to-know basis',
        'Regular staff training on data protection',
        'Secure payment processing through certified providers',
        'Regular backups and disaster recovery procedures'
      ]
    },
    {
      icon: UserCheck,
      title: 'Your Rights',
      content: [
        'Access your personal information',
        'Correct inaccurate or incomplete data',
        'Request deletion of your personal information',
        'Object to processing of your data',
        'Data portability (receive your data in a structured format)',
        'Withdraw consent for marketing communications',
        'Lodge a complaint with supervisory authorities'
      ]
    },
    {
      icon: Mail,
      title: 'Marketing Communications',
      content: [
        'We only send marketing emails with your explicit consent',
        'You can unsubscribe at any time using the link in our emails',
        'We may send transactional emails (order confirmations, shipping updates)',
        'We respect your communication preferences',
        'You can update your preferences in your account settings',
        'We do not sell your email address to third parties'
      ]
    },
    {
      icon: Calendar,
      title: 'Data Retention',
      content: [
        'We retain your information only as long as necessary',
        'Order information: 7 years (for tax and legal compliance)',
        'Account information: Until you delete your account',
        'Marketing data: Until you unsubscribe or withdraw consent',
        'Customer service records: 3 years',
        'We securely delete data when retention periods expire'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-pearl-white">
      
      {/* ===== HERO SECTION ===== */}
      <div className="bg-gradient-to-br from-pearl-white via-champagne/10 to-royal-gold/5">
        <div className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className={`${isMobile ? 'w-16 h-16' : 'w-20 h-20'} bg-royal-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Shield size={isMobile ? 32 : 40} className="text-royal-gold" />
            </motion.div>
            <motion.h1 
              className={`${isMobile ? 'text-3xl' : 'text-4xl lg:text-6xl'} font-display font-light text-obsidian-black mb-6`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Privacy Policy
            </motion.h1>
            <motion.p 
              className={`${isMobile ? 'text-base' : 'text-lg lg:text-xl'} text-graphite max-w-3xl mx-auto leading-relaxed`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Your privacy is important to us. Learn how we collect, use, and protect your personal information.
            </motion.p>
            <motion.p 
              className={`${isMobile ? 'text-xs' : 'text-sm'} text-graphite mt-4`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Last updated: January 15, 2024
            </motion.p>
          </div>
        </div>
      </div>

      {/* ===== INTRODUCTION ===== */}
      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-champagne/10 rounded-2xl p-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-semibold text-obsidian-black mb-4`}>
              Introduction
            </h2>
            <div className={`${isMobile ? 'space-y-3' : 'space-y-4'} text-graphite`}>
              <p className={`${isMobile ? 'text-sm' : 'text-base'} leading-relaxed`}>
                At ZYRA, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit 
                our website or make a purchase.
              </p>
              <p className={`${isMobile ? 'text-sm' : 'text-base'} leading-relaxed`}>
                By using our services, you agree to the collection and use of information in accordance with this policy. 
                If you do not agree with our policies and practices, please do not use our services.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ===== PRIVACY SECTIONS ===== */}
      <div className="px-4 py-12 sm:px-6 lg:px-8 bg-champagne/5">
        <div className="max-w-6xl mx-auto">
          <div className={`grid ${isMobile ? 'grid-cols-1 gap-6' : 'grid-cols-1 md:grid-cols-2 gap-8'}`}>
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.title}
                  className="bg-pearl-white rounded-2xl p-6 shadow-luxury-sm border border-champagne/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`${isMobile ? 'w-12 h-12' : 'w-14 h-14'} bg-royal-gold/10 rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Icon size={isMobile ? 20 : 24} className="text-royal-gold" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`${isMobile ? 'text-lg' : 'text-xl'} font-semibold text-obsidian-black mb-4`}>
                        {section.title}
                      </h3>
                      <ul className={`${isMobile ? 'space-y-2' : 'space-y-3'}`}>
                        {section.content.map((item, itemIndex) => (
                          <li key={itemIndex} className={`flex items-start gap-2`}>
                            <div className={`${isMobile ? 'w-1.5 h-1.5' : 'w-2 h-2'} bg-royal-gold rounded-full mt-2 flex-shrink-0`} />
                            <span className={`${isMobile ? 'text-xs' : 'text-sm'} text-graphite leading-relaxed`}>
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ===== COOKIES SECTION ===== */}
      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={`${isMobile ? 'text-2xl' : 'text-3xl lg:text-4xl'} font-display font-light text-obsidian-black mb-6`}>
              Cookies & Tracking
            </h2>
            <p className={`${isMobile ? 'text-sm' : 'text-base lg:text-lg'} text-graphite max-w-3xl mx-auto`}>
              We use cookies and similar technologies to enhance your browsing experience
            </p>
          </motion.div>

          <div className={`${isMobile ? 'space-y-4' : 'space-y-6'}`}>
            <motion.div
              className="bg-pearl-white rounded-2xl p-6 shadow-luxury-sm border border-champagne/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className={`${isMobile ? 'text-lg' : 'text-xl'} font-semibold text-obsidian-black mb-4`}>
                Types of Cookies We Use
              </h3>
              <div className={`${isMobile ? 'space-y-3' : 'space-y-4'}`}>
                <div>
                  <h4 className={`${isMobile ? 'text-sm' : 'text-base'} font-medium text-obsidian-black mb-2`}>
                    Essential Cookies
                  </h4>
                  <p className={`${isMobile ? 'text-xs' : 'text-sm'} text-graphite`}>
                    Necessary for the website to function properly (shopping cart, user authentication)
                  </p>
                </div>
                <div>
                  <h4 className={`${isMobile ? 'text-sm' : 'text-base'} font-medium text-obsidian-black mb-2`}>
                    Analytics Cookies
                  </h4>
                  <p className={`${isMobile ? 'text-xs' : 'text-sm'} text-graphite`}>
                    Help us understand how visitors interact with our website
                  </p>
                </div>
                <div>
                  <h4 className={`${isMobile ? 'text-sm' : 'text-base'} font-medium text-obsidian-black mb-2`}>
                    Marketing Cookies
                  </h4>
                  <p className={`${isMobile ? 'text-xs' : 'text-sm'} text-graphite`}>
                    Used to deliver relevant advertisements and track campaign performance
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ===== CONTACT SECTION ===== */}
      <div className="px-4 py-12 sm:px-6 lg:px-8 bg-champagne/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={`${isMobile ? 'text-2xl' : 'text-3xl lg:text-4xl'} font-display font-light text-obsidian-black mb-6`}>
              Questions About Privacy?
            </h2>
            <p className={`${isMobile ? 'text-sm' : 'text-base lg:text-lg'} text-graphite mb-8 max-w-2xl mx-auto`}>
              If you have any questions about this Privacy Policy or our data practices, please contact us.
            </p>
            <div className={`flex ${isMobile ? 'flex-col gap-3' : 'justify-center gap-4'}`}>
              <motion.a
                href="/contact"
                className={`${isMobile ? 'px-6 py-3 text-sm' : 'px-8 py-4 text-base'} bg-obsidian-black text-pearl-white rounded-lg font-medium hover:bg-royal-gold hover:text-obsidian-black transition-all duration-300 inline-flex items-center justify-center gap-2`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={isMobile ? 16 : 18} />
                Contact Us
              </motion.a>
              <motion.a
                href="mailto:privacy@zyra.com"
                className={`${isMobile ? 'px-6 py-3 text-sm' : 'px-8 py-4 text-base'} border border-royal-gold text-royal-gold rounded-lg font-medium hover:bg-royal-gold hover:text-obsidian-black transition-all duration-300 inline-flex items-center justify-center gap-2`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Shield size={isMobile ? 16 : 18} />
                Privacy Team
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

    </div>
  );
}