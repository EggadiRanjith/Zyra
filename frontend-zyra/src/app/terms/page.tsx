'use client';

import { motion } from 'framer-motion';
import { FileText, Scale, CreditCard, Truck, RotateCcw, AlertTriangle, CheckCircle, Calendar } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function TermsPage() {
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
      icon: FileText,
      title: 'Acceptance of Terms',
      content: [
        'By accessing and using ZYRA\'s website and services, you accept and agree to be bound by these Terms of Service',
        'If you do not agree to these terms, please do not use our services',
        'We reserve the right to modify these terms at any time without prior notice',
        'Your continued use of our services after changes constitutes acceptance of the new terms',
        'These terms apply to all users, including visitors, customers, and registered users'
      ]
    },
    {
      icon: CreditCard,
      title: 'Orders & Payments',
      content: [
        'All orders are subject to acceptance and availability',
        'We reserve the right to refuse or cancel any order at our discretion',
        'Prices are subject to change without notice',
        'Payment must be received before order processing',
        'We accept major credit cards and other approved payment methods',
        'All transactions are processed securely through encrypted channels'
      ]
    },
    {
      icon: Truck,
      title: 'Shipping & Delivery',
      content: [
        'Shipping costs and delivery times vary by location',
        'We are not responsible for delays caused by shipping carriers',
        'Risk of loss transfers to you upon delivery',
        'We reserve the right to use any shipping method we deem appropriate',
        'International orders may be subject to customs duties and taxes',
        'Delivery addresses cannot be changed after order confirmation'
      ]
    },
    {
      icon: RotateCcw,
      title: 'Returns & Exchanges',
      content: [
        'Returns must be initiated within 30 days of delivery',
        'Items must be in original condition with tags attached',
        'Custom or personalized items are not eligible for return',
        'Return shipping costs are the responsibility of the customer',
        'Refunds will be processed within 5-10 business days',
        'Exchanges are subject to availability and may incur additional charges'
      ]
    },
    {
      icon: Scale,
      title: 'Intellectual Property',
      content: [
        'All content on our website is protected by copyright and trademark laws',
        'You may not reproduce, distribute, or modify our content without permission',
        'Our trademarks and logos are our exclusive property',
        'User-generated content remains your property but grants us usage rights',
        'We respect the intellectual property rights of others',
        'Report any copyright infringement to our legal team'
      ]
    },
    {
      icon: AlertTriangle,
      title: 'Limitation of Liability',
      content: [
        'Our liability is limited to the maximum extent permitted by law',
        'We are not liable for indirect, incidental, or consequential damages',
        'Our total liability shall not exceed the amount paid for the product',
        'We are not responsible for third-party actions or content',
        'Some jurisdictions do not allow limitation of liability',
        'These limitations apply to the fullest extent permitted by law'
      ]
    }
  ];

  const policies = [
    {
      title: 'Product Availability',
      description: 'All products are subject to availability. We reserve the right to discontinue any product at any time.',
      icon: CheckCircle
    },
    {
      title: 'Pricing Information',
      description: 'Prices are subject to change without notice. We strive to maintain accurate pricing information.',
      icon: CheckCircle
    },
    {
      title: 'User Accounts',
      description: 'You are responsible for maintaining the confidentiality of your account information.',
      icon: CheckCircle
    },
    {
      title: 'Prohibited Uses',
      description: 'You may not use our services for any unlawful purpose or to solicit others to perform unlawful acts.',
      icon: CheckCircle
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
              <FileText size={isMobile ? 32 : 40} className="text-royal-gold" />
            </motion.div>
            <motion.h1 
              className={`${isMobile ? 'text-3xl' : 'text-4xl lg:text-6xl'} font-display font-light text-obsidian-black mb-6`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Terms of Service
            </motion.h1>
            <motion.p 
              className={`${isMobile ? 'text-base' : 'text-lg lg:text-xl'} text-graphite max-w-3xl mx-auto leading-relaxed`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Please read these terms carefully before using our services. By using ZYRA, you agree to these terms.
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
              Agreement to Terms
            </h2>
            <div className={`${isMobile ? 'space-y-3' : 'space-y-4'} text-graphite`}>
              <p className={`${isMobile ? 'text-sm' : 'text-base'} leading-relaxed`}>
                These Terms of Service ("Terms") govern your use of ZYRA's website, products, and services. 
                By accessing or using our services, you agree to be bound by these Terms and our Privacy Policy.
              </p>
              <p className={`${isMobile ? 'text-sm' : 'text-base'} leading-relaxed`}>
                We may update these Terms from time to time. We will notify you of any material changes by posting 
                the new Terms on this page and updating the "Last updated" date.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ===== TERMS SECTIONS ===== */}
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

      {/* ===== ADDITIONAL POLICIES ===== */}
      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={`${isMobile ? 'text-2xl' : 'text-3xl lg:text-4xl'} font-display font-light text-obsidian-black mb-6`}>
              Additional Policies
            </h2>
            <p className={`${isMobile ? 'text-sm' : 'text-base lg:text-lg'} text-graphite max-w-3xl mx-auto`}>
              Important information about using our services
            </p>
          </motion.div>

          <div className={`grid ${isMobile ? 'grid-cols-1 gap-4' : 'grid-cols-1 md:grid-cols-2 gap-6'}`}>
            {policies.map((policy, index) => {
              const Icon = policy.icon;
              return (
                <motion.div
                  key={policy.title}
                  className="bg-pearl-white rounded-2xl p-6 shadow-luxury-sm border border-champagne/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-3">
                    <div className={`${isMobile ? 'w-8 h-8' : 'w-10 h-10'} bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Icon size={isMobile ? 16 : 18} className="text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`${isMobile ? 'text-base' : 'text-lg'} font-semibold text-obsidian-black mb-2`}>
                        {policy.title}
                      </h3>
                      <p className={`${isMobile ? 'text-xs' : 'text-sm'} text-graphite leading-relaxed`}>
                        {policy.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ===== GOVERNING LAW ===== */}
      <div className="px-4 py-12 sm:px-6 lg:px-8 bg-champagne/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={`${isMobile ? 'text-2xl' : 'text-3xl lg:text-4xl'} font-display font-light text-obsidian-black mb-6`}>
              Governing Law
            </h2>
            <div className={`${isMobile ? 'space-y-4' : 'space-y-6'} text-graphite max-w-3xl mx-auto`}>
              <p className={`${isMobile ? 'text-sm' : 'text-base'} leading-relaxed`}>
                These Terms shall be governed by and construed in accordance with the laws of the State of New York, 
                without regard to its conflict of law provisions.
              </p>
              <p className={`${isMobile ? 'text-sm' : 'text-base'} leading-relaxed`}>
                Any disputes arising from these Terms or your use of our services shall be resolved through binding 
                arbitration in accordance with the rules of the American Arbitration Association.
              </p>
              <p className={`${isMobile ? 'text-sm' : 'text-base'} leading-relaxed`}>
                If any provision of these Terms is found to be unenforceable, the remaining provisions will remain 
                in full force and effect.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ===== CONTACT SECTION ===== */}
      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={`${isMobile ? 'text-2xl' : 'text-3xl lg:text-4xl'} font-display font-light text-obsidian-black mb-6`}>
              Questions About Terms?
            </h2>
            <p className={`${isMobile ? 'text-sm' : 'text-base lg:text-lg'} text-graphite mb-8 max-w-2xl mx-auto`}>
              If you have any questions about these Terms of Service, please contact our legal team.
            </p>
            <div className={`flex ${isMobile ? 'flex-col gap-3' : 'justify-center gap-4'}`}>
              <motion.a
                href="/contact"
                className={`${isMobile ? 'px-6 py-3 text-sm' : 'px-8 py-4 text-base'} bg-obsidian-black text-pearl-white rounded-lg font-medium hover:bg-royal-gold hover:text-obsidian-black transition-all duration-300 inline-flex items-center justify-center gap-2`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FileText size={isMobile ? 16 : 18} />
                Contact Us
              </motion.a>
              <motion.a
                href="mailto:legal@zyra.com"
                className={`${isMobile ? 'px-6 py-3 text-sm' : 'px-8 py-4 text-base'} border border-royal-gold text-royal-gold rounded-lg font-medium hover:bg-royal-gold hover:text-obsidian-black transition-all duration-300 inline-flex items-center justify-center gap-2`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Scale size={isMobile ? 16 : 18} />
                Legal Team
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

    </div>
  );
}