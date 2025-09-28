'use client';

import { motion } from 'framer-motion';
import { Award, Users, Globe, Heart, Star, CheckCircle, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function AboutPage() {
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

  const stats = [
    { number: '50K+', label: 'Happy Customers', icon: Users },
    { number: '100+', label: 'Countries Served', icon: Globe },
    { number: '4.9', label: 'Average Rating', icon: Star },
    { number: '5+', label: 'Years Experience', icon: Award }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion for Quality',
      description: 'Every product is crafted with meticulous attention to detail and uncompromising quality standards.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving customers worldwide with fast, reliable shipping and exceptional customer service.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering the finest luxury products that exceed expectations.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      description: 'Visionary leader with 15+ years in luxury retail'
    },
    {
      name: 'Michael Chen',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      description: 'Award-winning designer passionate about innovation'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      description: 'Operations expert ensuring seamless customer experience'
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
              About ZYRA
            </motion.h1>
            <motion.p 
              className={`${isMobile ? 'text-base' : 'text-lg lg:text-xl'} text-graphite max-w-3xl mx-auto leading-relaxed`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We are passionate about creating exceptional luxury experiences through our carefully curated collection of premium products.
            </motion.p>
          </div>
        </div>
      </div>

      {/* ===== STATS SECTION ===== */}
      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className={`grid ${isMobile ? 'grid-cols-2 gap-4' : 'grid-cols-4 gap-8'}`}>
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`${isMobile ? 'w-12 h-12' : 'w-16 h-16'} bg-royal-gold/10 rounded-full flex items-center justify-center mx-auto mb-3`}>
                    <Icon size={isMobile ? 20 : 24} className="text-royal-gold" />
                  </div>
                  <h3 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-semibold text-obsidian-black mb-1`}>
                    {stat.number}
                  </h3>
                  <p className={`${isMobile ? 'text-xs' : 'text-sm'} text-graphite`}>
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ===== STORY SECTION ===== */}
      <div className="px-4 py-12 sm:px-6 lg:px-8 bg-champagne/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={`${isMobile ? 'text-2xl' : 'text-3xl lg:text-4xl'} font-display font-light text-obsidian-black mb-6`}>
              Our Story
            </h2>
            <div className={`${isMobile ? 'space-y-4' : 'space-y-6'} text-graphite`}>
              <p className={`${isMobile ? 'text-sm' : 'text-base lg:text-lg'} leading-relaxed`}>
                Founded in 2019, ZYRA began as a vision to bring luxury fashion to the modern world. 
                We believe that everyone deserves access to exceptional quality and timeless design.
              </p>
              <p className={`${isMobile ? 'text-sm' : 'text-base lg:text-lg'} leading-relaxed`}>
                Our journey started with a simple mission: to curate the finest products that combine 
                traditional craftsmanship with contemporary style, creating pieces that last a lifetime.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ===== VALUES SECTION ===== */}
      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={`${isMobile ? 'text-2xl' : 'text-3xl lg:text-4xl'} font-display font-light text-obsidian-black mb-6`}>
              Our Values
            </h2>
            <p className={`${isMobile ? 'text-sm' : 'text-base lg:text-lg'} text-graphite max-w-3xl mx-auto`}>
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className={`grid ${isMobile ? 'grid-cols-1 gap-6' : 'grid-cols-1 md:grid-cols-3 gap-8'}`}>
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className={`${isMobile ? 'w-16 h-16' : 'w-20 h-20'} bg-gradient-to-br from-royal-gold/20 to-royal-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <Icon size={isMobile ? 24 : 28} className="text-royal-gold" />
                  </div>
                  <h3 className={`${isMobile ? 'text-lg' : 'text-xl'} font-semibold text-obsidian-black mb-3`}>
                    {value.title}
                  </h3>
                  <p className={`${isMobile ? 'text-sm' : 'text-base'} text-graphite leading-relaxed`}>
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ===== TEAM SECTION ===== */}
      <div className="px-4 py-12 sm:px-6 lg:px-8 bg-champagne/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={`${isMobile ? 'text-2xl' : 'text-3xl lg:text-4xl'} font-display font-light text-obsidian-black mb-6`}>
              Meet Our Team
            </h2>
            <p className={`${isMobile ? 'text-sm' : 'text-base lg:text-lg'} text-graphite max-w-3xl mx-auto`}>
              The passionate individuals behind ZYRA's success
            </p>
          </motion.div>

          <div className={`grid ${isMobile ? 'grid-cols-1 gap-8' : 'grid-cols-1 md:grid-cols-3 gap-8'}`}>
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className={`${isMobile ? 'w-24 h-24' : 'w-32 h-32'} rounded-full overflow-hidden mx-auto mb-4 shadow-luxury-sm`}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className={`${isMobile ? 'text-lg' : 'text-xl'} font-semibold text-obsidian-black mb-1`}>
                  {member.name}
                </h3>
                <p className={`${isMobile ? 'text-sm' : 'text-base'} text-royal-gold mb-2`}>
                  {member.role}
                </p>
                <p className={`${isMobile ? 'text-xs' : 'text-sm'} text-graphite`}>
                  {member.description}
                </p>
              </motion.div>
            ))}
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
              Join Our Journey
            </h2>
            <p className={`${isMobile ? 'text-sm' : 'text-base lg:text-lg'} text-graphite mb-8 max-w-2xl mx-auto`}>
              Experience the luxury and quality that defines ZYRA. Discover our collection today.
            </p>
            <motion.a
              href="/shop"
              className={`${isMobile ? 'px-6 py-3 text-sm' : 'px-8 py-4 text-base'} bg-obsidian-black text-pearl-white rounded-lg font-medium hover:bg-royal-gold hover:text-obsidian-black transition-all duration-300 inline-flex items-center gap-2`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Collection
              <ArrowRight size={isMobile ? 16 : 18} />
            </motion.a>
          </motion.div>
        </div>
      </div>

    </div>
  );
}