'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Headphones } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function ContactPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
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
    console.log('Contact form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'hello@zyra.com',
      description: 'We\'ll respond within 24 hours'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: '123 Luxury Avenue',
      description: 'New York, NY 10001'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Monday - Friday',
      description: '9:00 AM - 6:00 PM EST'
    }
  ];

  const faqs = [
    {
      question: 'How long does shipping take?',
      answer: 'Standard shipping takes 3-5 business days, while express shipping takes 1-2 business days.'
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for all items in original condition with tags attached.'
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Yes, we ship to over 100 countries worldwide with tracking included.'
    },
    {
      question: 'How can I track my order?',
      answer: 'You\'ll receive a tracking number via email once your order ships.'
    }
  ];

  return (
    <div className="min-h-screen bg-pearl-white">
      
      {/* ===== HERO SECTION ===== */}
      <div className="bg-gradient-to-br from-pearl-white via-champagne/10 to-royal-gold/5">
        <div className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className={`${isMobile ? 'text-3xl' : 'text-4xl lg:text-6xl'} font-display font-light text-obsidian-black mb-6`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Contact Us
            </motion.h1>
            <motion.p 
              className={`${isMobile ? 'text-base' : 'text-lg lg:text-xl'} text-graphite max-w-3xl mx-auto leading-relaxed`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We're here to help. Get in touch with our team for any questions or support.
            </motion.p>
          </div>
        </div>
      </div>

      {/* ===== CONTACT INFO ===== */}
      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className={`grid ${isMobile ? 'grid-cols-1 gap-6' : 'grid-cols-2 lg:grid-cols-4 gap-8'}`}>
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.title}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`${isMobile ? 'w-16 h-16' : 'w-20 h-20'} bg-royal-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <Icon size={isMobile ? 24 : 28} className="text-royal-gold" />
                  </div>
                  <h3 className={`${isMobile ? 'text-lg' : 'text-xl'} font-semibold text-obsidian-black mb-2`}>
                    {info.title}
                  </h3>
                  <p className={`${isMobile ? 'text-sm' : 'text-base'} font-medium text-obsidian-black mb-1`}>
                    {info.details}
                  </p>
                  <p className={`${isMobile ? 'text-xs' : 'text-sm'} text-graphite`}>
                    {info.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ===== CONTACT FORM & FAQ ===== */}
      <div className="px-4 py-12 sm:px-6 lg:px-8 bg-champagne/5">
        <div className="max-w-6xl mx-auto">
          <div className={`grid ${isMobile ? 'grid-cols-1 gap-8' : 'grid-cols-1 lg:grid-cols-2 gap-12'}`}>
            
            {/* Contact Form */}
            <motion.div
              className="bg-pearl-white rounded-2xl p-6 shadow-luxury-sm border border-champagne/20"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-semibold text-obsidian-black mb-6 flex items-center gap-2`}>
                <MessageCircle size={isMobile ? 20 : 24} className="text-royal-gold" />
                Send us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className={`grid ${isMobile ? 'grid-cols-1 gap-4' : 'grid-cols-2 gap-4'}`}>
                  <div>
                    <label className={`block ${isMobile ? 'text-xs' : 'text-sm'} font-medium text-obsidian-black ${isMobile ? 'mb-1' : 'mb-2'}`}>
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className={`w-full ${isMobile ? 'px-3 py-2 text-sm' : 'px-4 py-3'} border border-champagne/30 rounded-lg focus:border-royal-gold focus:outline-none`}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className={`block ${isMobile ? 'text-xs' : 'text-sm'} font-medium text-obsidian-black ${isMobile ? 'mb-1' : 'mb-2'}`}>
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`w-full ${isMobile ? 'px-3 py-2 text-sm' : 'px-4 py-3'} border border-champagne/30 rounded-lg focus:border-royal-gold focus:outline-none`}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className={`block ${isMobile ? 'text-xs' : 'text-sm'} font-medium text-obsidian-black ${isMobile ? 'mb-1' : 'mb-2'}`}>
                    Subject *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    className={`w-full ${isMobile ? 'px-3 py-2 text-sm' : 'px-4 py-3'} border border-champagne/30 rounded-lg focus:border-royal-gold focus:outline-none`}
                    placeholder="How can we help?"
                  />
                </div>
                
                <div>
                  <label className={`block ${isMobile ? 'text-xs' : 'text-sm'} font-medium text-obsidian-black ${isMobile ? 'mb-1' : 'mb-2'}`}>
                    Message *
                  </label>
                  <textarea
                    required
                    rows={isMobile ? 4 : 6}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className={`w-full ${isMobile ? 'px-3 py-2 text-sm' : 'px-4 py-3'} border border-champagne/30 rounded-lg focus:border-royal-gold focus:outline-none resize-none`}
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  className={`w-full ${isMobile ? 'py-2.5 text-sm' : 'py-3 text-base'} bg-obsidian-black text-pearl-white rounded-lg font-medium hover:bg-royal-gold hover:text-obsidian-black transition-all duration-300 flex items-center justify-center gap-2`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={isMobile ? 16 : 18} />
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* FAQ Section */}
            <motion.div
              className="bg-pearl-white rounded-2xl p-6 shadow-luxury-sm border border-champagne/20"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-semibold text-obsidian-black mb-6 flex items-center gap-2`}>
                <Headphones size={isMobile ? 20 : 24} className="text-royal-gold" />
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    className="border-b border-champagne/20 pb-4 last:border-b-0"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <h3 className={`${isMobile ? 'text-sm' : 'text-base'} font-medium text-obsidian-black mb-2`}>
                      {faq.question}
                    </h3>
                    <p className={`${isMobile ? 'text-xs' : 'text-sm'} text-graphite leading-relaxed`}>
                      {faq.answer}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* ===== CTA SECTION ===== */}
      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={`${isMobile ? 'text-2xl' : 'text-3xl lg:text-4xl'} font-display font-light text-obsidian-black mb-6`}>
              Need Immediate Help?
            </h2>
            <p className={`${isMobile ? 'text-sm' : 'text-base lg:text-lg'} text-graphite mb-8 max-w-2xl mx-auto`}>
              Our customer support team is available 24/7 to assist you with any questions or concerns.
            </p>
            <div className={`flex ${isMobile ? 'flex-col gap-3' : 'justify-center gap-4'}`}>
              <motion.a
                href="tel:+15551234567"
                className={`${isMobile ? 'px-6 py-3 text-sm' : 'px-8 py-4 text-base'} bg-royal-gold text-obsidian-black rounded-lg font-medium hover:bg-royal-gold/90 transition-all duration-300 inline-flex items-center justify-center gap-2`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone size={isMobile ? 16 : 18} />
                Call Now
              </motion.a>
              <motion.a
                href="mailto:hello@zyra.com"
                className={`${isMobile ? 'px-6 py-3 text-sm' : 'px-8 py-4 text-base'} border border-royal-gold text-royal-gold rounded-lg font-medium hover:bg-royal-gold hover:text-obsidian-black transition-all duration-300 inline-flex items-center justify-center gap-2`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={isMobile ? 16 : 18} />
                Email Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

    </div>
  );
}