'use client';

import { motion } from 'framer-motion';
import { Truck, Shield, Headphones, Award, Star, Users } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Free Worldwide Shipping',
    description: 'Complimentary express delivery on all orders over $500',
    color: 'text-royal-gold'
  },
  {
    icon: Shield,
    title: 'Secure Payment',
    description: 'Your payment information is protected with bank-level security',
    color: 'text-obsidian-black'
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Dedicated luxury concierge service available around the clock',
    color: 'text-royal-gold'
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Handpicked items from the world\'s finest luxury brands',
    color: 'text-obsidian-black'
  },
  {
    icon: Star,
    title: 'Exclusive Access',
    description: 'Early access to limited edition collections and private sales',
    color: 'text-royal-gold'
  },
  {
    icon: Users,
    title: 'Personal Stylist',
    description: 'Complimentary personal styling consultation with every purchase',
    color: 'text-obsidian-black'
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-16 lg:py-24 bg-pearl-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ===== PROFESSIONAL SECTION HEADER ===== */}
        <div className="text-center mb-16 lg:mb-24">
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-light text-obsidian-black mb-6 tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Why Choose ZYRA
          </motion.h2>
          
          <motion.div 
            className="w-24 h-px bg-royal-gold mx-auto mb-8"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          ></motion.div>
          
          <motion.p 
            className="text-lg lg:text-xl text-graphite max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Experience the pinnacle of luxury shopping with our exclusive services and unparalleled attention to detail.
          </motion.p>
        </div>

        {/* ===== PROFESSIONAL FEATURES GRID ===== */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className="group text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* ===== PROFESSIONAL ICON ===== */}
                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto mb-3 sm:mb-4 lg:mb-6 bg-obsidian-black rounded-lg flex items-center justify-center group-hover:bg-royal-gold transition-colors duration-300">
                  <Icon size={18} className="sm:w-6 sm:h-6 text-pearl-white group-hover:text-obsidian-black transition-colors duration-300" />
                </div>
                
                {/* ===== PROFESSIONAL CONTENT ===== */}
                <h3 className="text-sm sm:text-lg lg:text-xl xl:text-2xl font-semibold text-obsidian-black mb-2 sm:mb-3 lg:mb-4 group-hover:text-royal-gold transition-colors duration-300 text-center">
                  {feature.title}
                </h3>
                
                <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-graphite leading-relaxed font-light text-center">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* ===== PROFESSIONAL BOTTOM SECTION ===== */}
        <motion.div 
          className="mt-20 lg:mt-32 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-obsidian-black text-pearl-white py-16 lg:py-20 px-8 lg:px-16">
            <h3 className="text-2xl lg:text-3xl font-display font-light mb-6">
              Experience the ZYRA Difference
            </h3>
            <div className="w-16 h-px bg-royal-gold mx-auto mb-8"></div>
            <p className="text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed font-light text-pearl-white/90">
              Join thousands of discerning customers who have made ZYRA their trusted destination for luxury fashion and exceptional service.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
