'use client';

import { Star, TrendingUp, Eye, Download } from 'lucide-react';
import { motion } from 'framer-motion';

interface TopSellingDesign {
  id: string;
  name: string;
  image: string;
  price: number;
  sales: number;
  rating: number;
  creator: string;
}

interface TopSellingDesignsProps {
  designs: TopSellingDesign[];
}

export default function TopSellingDesigns({ designs }: TopSellingDesignsProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(price);
  };

  return (
    <div className="px-4 py-8 sm:py-12 lg:py-16 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 sm:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-display font-light text-obsidian-black mb-3 sm:mb-4">
            Top Selling Designs
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-graphite max-w-2xl mx-auto">
            Most popular designs created by our community
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {designs.map((design, index) => (
            <motion.div
              key={design.id}
              className="bg-pearl-white rounded-xl sm:rounded-2xl overflow-hidden shadow-luxury-sm hover:shadow-luxury-lg transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="aspect-square bg-champagne/10 overflow-hidden relative">
                <img
                  src={design.image}
                  alt={design.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                  <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-royal-gold text-obsidian-black text-xs font-semibold rounded-full">
                    #{index + 1}
                  </span>
                </div>
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex flex-col space-y-1 sm:space-y-2">
                    <button className="p-1.5 sm:p-2 bg-pearl-white/90 backdrop-blur-sm text-graphite rounded-full hover:bg-royal-gold hover:text-obsidian-black transition-all duration-300">
                      <Eye size={12} className="sm:w-4 sm:h-4" />
                    </button>
                    <button className="p-1.5 sm:p-2 bg-pearl-white/90 backdrop-blur-sm text-graphite rounded-full hover:bg-royal-gold hover:text-obsidian-black transition-all duration-300">
                      <Download size={12} className="sm:w-4 sm:h-4" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-3 sm:p-4">
                <h3 className="text-sm sm:text-base font-semibold text-obsidian-black mb-1 sm:mb-2 line-clamp-1">{design.name}</h3>
                <p className="text-xs sm:text-sm text-graphite mb-2 sm:mb-3">by {design.creator}</p>
                <div className="flex items-center justify-between mb-1 sm:mb-2">
                  <span className="text-royal-gold font-semibold text-sm sm:text-base">{formatPrice(design.price)}</span>
                  <div className="flex items-center space-x-1">
                    <Star size={12} className="sm:w-3.5 sm:h-3.5 text-royal-gold fill-current" />
                    <span className="text-xs sm:text-sm text-graphite">{design.rating}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm text-graphite">
                  <span className="flex items-center space-x-1">
                    <TrendingUp size={12} className="sm:w-3.5 sm:h-3.5" />
                    <span>{design.sales} sales</span>
                  </span>
                  <button className="px-2 sm:px-3 py-0.5 sm:py-1 bg-royal-gold/10 text-royal-gold rounded-full text-xs hover:bg-royal-gold hover:text-obsidian-black transition-colors duration-300">
                    Use Design
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
