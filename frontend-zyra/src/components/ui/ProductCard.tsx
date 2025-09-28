'use client';

import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Eye, Share2 } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  brand: string;
  isNew?: boolean;
  isSale?: boolean;
  discount?: number;
  rating?: number;
  reviews?: number;
}

export default function ProductCard({
  id,
  name,
  price,
  originalPrice,
  image,
  brand,
  isNew = false,
  isSale = false,
  discount,
  rating = 0,
  reviews = 0
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const router = useRouter();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleProductClick = () => {
    router.push(`/product/${id}`);
  };

  return (
    <motion.div
      className="group relative bg-pearl-white rounded-2xl overflow-hidden shadow-luxury-sm hover:shadow-luxury-lg transition-all duration-500 perspective-1000 h-[320px] sm:h-[360px] lg:h-[400px] cursor-pointer"
      whileHover={{ 
        y: -12,
        rotateX: 5,
        rotateY: 5,
        scale: 1.02
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={handleProductClick}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* ===== IMAGE CONTAINER ===== */}
      <div className="relative h-[180px] sm:h-[200px] lg:h-[220px] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
        />
        
        {/* ===== HOVER OVERLAY ===== */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-obsidian-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
        />
        
        {/* ===== HOVER OVERLAY ACTIONS ===== */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-3">
            <motion.button
              className="p-3 bg-pearl-white/95 backdrop-blur-sm rounded-full shadow-luxury-lg hover:bg-royal-gold hover:text-obsidian-black transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.stopPropagation();
                setIsWishlisted(!isWishlisted);
              }}
            >
              <Heart 
                size={18} 
                className={isWishlisted ? 'fill-royal-gold text-royal-gold' : ''} 
              />
            </motion.button>
            
            <motion.button
              className="p-3 bg-pearl-white/95 backdrop-blur-sm rounded-full shadow-luxury-lg hover:bg-obsidian-black hover:text-pearl-white transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Share2 size={18} />
            </motion.button>
          </div>
        </motion.div>
        
        {/* ===== BADGES ===== */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {isNew && (
            <span className="bg-royal-gold text-obsidian-black px-3 py-1 text-xs font-semibold rounded-full">
              NEW
            </span>
          )}
          {isSale && discount && (
            <span className="bg-obsidian-black text-pearl-white px-3 py-1 text-xs font-semibold rounded-full">
              -{discount}%
            </span>
          )}
        </div>

      </div>

      {/* ===== CONTENT ===== */}
      <div className="p-3 sm:p-4 space-y-1.5 h-[140px] sm:h-[160px] lg:h-[180px] flex flex-col justify-between">
        {/* Brand */}
        <p className="text-xs sm:text-sm text-graphite font-medium uppercase tracking-wider">
          {brand}
        </p>

        {/* Product Name */}
        <h3 className="text-xs sm:text-sm font-medium text-obsidian-black leading-tight line-clamp-2 flex-1">
          {name}
        </h3>

        {/* Rating */}
        {rating > 0 && (
          <div className="flex items-center gap-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-xs ${
                    i < Math.floor(rating) ? 'text-royal-gold' : 'text-champagne'
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-xs text-graphite">
              ({reviews})
            </span>
          </div>
        )}

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-xs sm:text-sm font-semibold text-obsidian-black">
            {formatPrice(price)}
          </span>
          {originalPrice && originalPrice > price && (
            <span className="text-xs text-graphite line-through">
              {formatPrice(originalPrice)}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <motion.button
          className="w-full py-1.5 sm:py-2 bg-obsidian-black text-pearl-white rounded-lg font-medium hover:bg-royal-gold hover:text-obsidian-black transition-colors duration-300 flex items-center justify-center gap-1 text-xs sm:text-sm"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={(e) => e.stopPropagation()}
        >
          <ShoppingBag size={12} />
          Add to Cart
        </motion.button>
      </div>
    </motion.div>
  );
}
