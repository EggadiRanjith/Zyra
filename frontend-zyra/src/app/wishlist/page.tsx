'use client';

import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Share2 } from 'lucide-react';
import { useState, useEffect } from 'react';

// Sample wishlisted products data
const wishlistProducts = [
  {
    id: '1',
    name: 'Luxury Leather Handbag',
    price: 1200.00,
    originalPrice: 1500.00,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop&crop=center',
    brand: 'ZYRA',
    isNew: true,
    isSale: true,
    discount: 20,
    rating: 4.8,
    reviews: 120,
    category: 'Bags',
    color: 'Black',
    size: 'One Size'
  },
  {
    id: '3',
    name: 'Diamond Stud Earrings',
    price: 5500.00,
    image: 'https://images.unsplash.com/photo-1612817166008-d1017779277c?w=500&h=500&fit=crop&crop=center',
    brand: 'ZYRA',
    isNew: true,
    isSale: false,
    rating: 4.9,
    reviews: 200,
    category: 'Jewelry',
    color: 'White Gold',
    size: 'One Size'
  },
  {
    id: '5',
    name: 'Luxury Cashmere Sweater',
    price: 450.00,
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&h=500&fit=crop&crop=center',
    brand: 'ZYRA',
    isNew: true,
    isSale: false,
    rating: 4.6,
    reviews: 90,
    category: 'Clothing',
    color: 'Cream',
    size: 'M'
  }
];

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState(wishlistProducts);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
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

  const removeFromWishlist = (productId: string) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== productId));
    setSelectedItems(selectedItems.filter(id => id !== productId));
  };

  const toggleSelectItem = (productId: string) => {
    setSelectedItems(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const selectAll = () => {
    setSelectedItems(wishlistItems.map(item => item.id));
  };

  const deselectAll = () => {
    setSelectedItems([]);
  };

  const addSelectedToCart = () => {
    // Add selected items to cart logic here
    console.log('Adding to cart:', selectedItems);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-pearl-white">
      
      {/* ===== SIMPLE HEADER ===== */}
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-display font-light text-obsidian-black">
            My Wishlist
          </h1>
        </div>
      </div>

      {/* ===== WISHLIST PRODUCTS ===== */}
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        {wishlistItems.length > 0 ? (
          <>
            {/* Selection Controls - Mobile Optimized */}
            <div className={`flex ${isMobile ? 'flex-col gap-3' : 'items-center justify-between'} mb-4 sm:mb-6`}>
              <div className={`flex items-center ${isMobile ? 'justify-between' : 'gap-4'}`}>
                <button
                  onClick={selectedItems.length === wishlistItems.length ? deselectAll : selectAll}
                  className={`${isMobile ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-sm'} bg-champagne/20 text-obsidian-black rounded-lg font-medium hover:bg-champagne/30 transition-colors duration-300`}
                >
                  {selectedItems.length === wishlistItems.length ? 'Deselect All' : 'Select All'}
                </button>
                <span className={`${isMobile ? 'text-xs' : 'text-sm'} text-graphite`}>
                  {selectedItems.length} of {wishlistItems.length} selected
                </span>
              </div>
              
              {selectedItems.length > 0 && (
                <motion.button
                  onClick={addSelectedToCart}
                  className={`${isMobile ? 'w-full px-4 py-2 text-sm' : 'px-6 py-2 text-sm'} bg-obsidian-black text-pearl-white rounded-lg font-medium hover:bg-royal-gold hover:text-obsidian-black transition-colors duration-300 flex items-center justify-center gap-2`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ShoppingBag size={isMobile ? 14 : 16} />
                  Add to Cart ({selectedItems.length})
                </motion.button>
              )}
            </div>

            <div className={`grid ${isMobile ? 'grid-cols-2 gap-3' : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6'}`}>
            {wishlistItems.map((product) => (
              <motion.div
                key={product.id}
                className={`group relative bg-pearl-white rounded-2xl overflow-hidden shadow-luxury-sm hover:shadow-luxury-lg transition-all duration-500 ${isMobile ? 'h-[280px]' : 'h-[320px] sm:h-[360px] lg:h-[400px]'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Image Container */}
                <div className={`relative ${isMobile ? 'h-[140px]' : 'h-[180px] sm:h-[200px] lg:h-[220px]'} overflow-hidden`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                  
                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-obsidian-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                  
                  {/* Hover Actions */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="flex items-center gap-3">
                      <motion.button
                        className="p-3 bg-pearl-white/95 backdrop-blur-sm rounded-full shadow-luxury-lg hover:bg-obsidian-black hover:text-pearl-white transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => removeFromWishlist(product.id)}
                      >
                        <Heart size={18} className="fill-royal-gold text-royal-gold" />
                      </motion.button>
                      
                      <motion.button
                        className="p-3 bg-pearl-white/95 backdrop-blur-sm rounded-full shadow-luxury-lg hover:bg-obsidian-black hover:text-pearl-white transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Share2 size={18} />
                      </motion.button>
                    </div>
                  </motion.div>
                  
                  {/* Selection Checkbox - Mobile Optimized */}
                  <div className={`absolute ${isMobile ? 'top-2 left-2' : 'top-4 left-4'}`}>
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(product.id)}
                      onChange={() => toggleSelectItem(product.id)}
                      className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'} text-royal-gold bg-pearl-white border-2 border-royal-gold rounded focus:ring-royal-gold focus:ring-1`}
                    />
                  </div>

                  {/* Badges - Mobile Optimized */}
                  <div className={`absolute ${isMobile ? 'top-2 right-2' : 'top-4 right-4'} flex flex-col gap-1 sm:gap-2`}>
                    {product.isNew && (
                      <span className={`${isMobile ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-xs'} bg-royal-gold text-obsidian-black font-semibold rounded-full`}>
                        NEW
                      </span>
                    )}
                    {product.isSale && product.discount && (
                      <span className={`${isMobile ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-xs'} bg-obsidian-black text-pearl-white font-semibold rounded-full`}>
                        -{product.discount}%
                      </span>
                    )}
                  </div>
                </div>

                {/* Content - Mobile Optimized */}
                <div className={`${isMobile ? 'p-2 space-y-1' : 'p-3 sm:p-4 space-y-1.5'} ${isMobile ? 'h-[140px]' : 'h-[140px] sm:h-[160px] lg:h-[180px]'} flex flex-col justify-between`}>
                  {/* Brand */}
                  <p className={`${isMobile ? 'text-xs' : 'text-xs sm:text-sm'} text-graphite font-medium uppercase tracking-wider`}>
                    {product.brand}
                  </p>

                  {/* Product Name */}
                  <h3 className={`${isMobile ? 'text-xs' : 'text-xs sm:text-sm'} font-medium text-obsidian-black leading-tight line-clamp-2 flex-1`}>
                    {product.name}
                  </h3>

                  {/* Rating */}
                  {product.rating > 0 && (
                    <div className="flex items-center gap-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`${isMobile ? 'text-xs' : 'text-xs'} ${
                              i < Math.floor(product.rating) ? 'text-royal-gold' : 'text-champagne'
                            }`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <span className={`${isMobile ? 'text-xs' : 'text-xs'} text-graphite`}>
                        ({product.reviews})
                      </span>
                    </div>
                  )}

                  {/* Price */}
                  <div className="flex items-center gap-2">
                    <span className={`${isMobile ? 'text-xs' : 'text-xs sm:text-sm'} font-semibold text-obsidian-black`}>
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && product.originalPrice > product.price && (
                      <span className={`${isMobile ? 'text-xs' : 'text-xs'} text-graphite line-through`}>
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>

                  {/* Add to Cart Button - Mobile Optimized */}
                  <motion.button
                    className={`w-full ${isMobile ? 'py-1.5 text-xs' : 'py-1.5 sm:py-2 text-xs sm:text-sm'} bg-obsidian-black text-pearl-white rounded-lg font-medium hover:bg-royal-gold hover:text-obsidian-black transition-colors duration-300 flex items-center justify-center gap-1`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ShoppingBag size={isMobile ? 10 : 12} />
                    Cart
                  </motion.button>
                </div>
              </motion.div>
            ))}
            </div>
          </>
        ) : (
          /* Empty Wishlist */
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-24 h-24 bg-champagne/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart size={32} className="text-graphite" />
            </div>
            <h3 className="text-xl font-semibold text-obsidian-black mb-2">Your wishlist is empty</h3>
            <p className="text-graphite mb-6">Start adding items you love to your wishlist</p>
            <motion.button
              className="px-6 py-3 bg-obsidian-black text-pearl-white rounded-lg font-medium hover:bg-royal-gold hover:text-obsidian-black transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Browse Products
            </motion.button>
          </motion.div>
        )}
      </div>

      {/* ===== RESULTS COUNTER ===== */}
      {wishlistItems.length > 0 && (
        <div className="px-4 py-4 bg-champagne/10 sm:px-6 lg:px-8">
          <p className="text-sm text-graphite text-center">
            {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} in your wishlist
          </p>
        </div>
      )}

    </div>
  );
}