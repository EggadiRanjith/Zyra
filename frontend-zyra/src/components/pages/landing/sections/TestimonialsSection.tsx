'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Fashion Director',
    location: 'New York',
    rating: 5,
    text: 'ZYRA has completely transformed my wardrobe. The quality is exceptional and the personal styling service is unmatched.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
  },
  {
    name: 'Marcus Thompson',
    role: 'Luxury Consultant',
    location: 'London',
    rating: 5,
    text: 'The attention to detail and customer service is what sets ZYRA apart. Every piece tells a story of luxury and craftsmanship.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
  },
  {
    name: 'Isabella Rodriguez',
    role: 'Art Collector',
    location: 'Milan',
    rating: 5,
    text: 'Shopping at ZYRA is like stepping into a world of curated excellence. The collections are always ahead of trends.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
  }
];

export default function TestimonialsSection() {
  return (
            <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-pearl-white to-champagne/20">
              <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        
                {/* ===== SECTION HEADER ===== */}
                <div className="text-center mb-6 sm:mb-8 lg:mb-12">
                  <motion.h2 
                    className="text-2xl sm:text-3xl lg:text-4xl font-display font-light text-obsidian-black mb-3 sm:mb-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    What Our Clients Say
                  </motion.h2>
                  <motion.p 
                    className="text-sm sm:text-base text-graphite max-w-2xl mx-auto leading-relaxed px-2"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    Join thousands of satisfied customers who have experienced the ZYRA difference.
                  </motion.p>
                </div>

                {/* ===== TESTIMONIALS GRID ===== */}
                <motion.div 
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="group bg-pearl-white rounded-2xl p-4 sm:p-6 shadow-luxury-sm hover:shadow-luxury-lg transition-all duration-500"
              initial={{ opacity: 0, y: 50, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, rotateX: -5 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* ===== QUOTE ICON ===== */}
              <div className="mb-4 sm:mb-6">
                <Quote size={28} className="sm:w-8 sm:h-8 text-royal-gold/30 group-hover:text-royal-gold transition-colors duration-300" />
              </div>

              {/* ===== RATING ===== */}
              <div className="flex mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={14} className="sm:w-4 sm:h-4 text-royal-gold fill-current" />
                ))}
              </div>

              {/* ===== TESTIMONIAL TEXT ===== */}
              <p className="text-sm sm:text-base text-graphite leading-relaxed mb-4 sm:mb-6 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* ===== CLIENT INFO ===== */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mr-3 sm:mr-4"
                />
                <div>
                  <h4 className="text-sm sm:text-base font-semibold text-obsidian-black">{testimonial.name}</h4>
                  <p className="text-xs sm:text-sm text-graphite">{testimonial.role}, {testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

                {/* ===== STATS ===== */}
                <motion.div 
                  className="mt-6 sm:mt-8 lg:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="p-3 sm:p-4 bg-pearl-white/50 rounded-xl">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-display font-light text-royal-gold mb-1">10K+</div>
                    <div className="text-xs sm:text-sm text-graphite uppercase tracking-wider">Happy Customers</div>
                  </div>
                  <div className="p-3 sm:p-4 bg-pearl-white/50 rounded-xl">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-display font-light text-royal-gold mb-1">500+</div>
                    <div className="text-xs sm:text-sm text-graphite uppercase tracking-wider">Premium Products</div>
                  </div>
                  <div className="p-3 sm:p-4 bg-pearl-white/50 rounded-xl">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-display font-light text-royal-gold mb-1">50+</div>
                    <div className="text-xs sm:text-sm text-graphite uppercase tracking-wider">Designer Brands</div>
                  </div>
                  <div className="p-3 sm:p-4 bg-pearl-white/50 rounded-xl">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-display font-light text-royal-gold mb-1">24/7</div>
                    <div className="text-xs sm:text-sm text-graphite uppercase tracking-wider">Luxury Service</div>
                  </div>
        </motion.div>

      </div>
    </section>
  );
}
