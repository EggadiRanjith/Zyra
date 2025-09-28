'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Share2, Star, Truck, Shield, RotateCcw, ArrowLeft, Plus, Minus, X, Check } from 'lucide-react';
import { useRouter, useParams } from 'next/navigation';

// Sample products database
const productsDatabase = {
  '1': {
    id: '1',
    name: 'Luxury Leather Handbag',
    price: 1200.00,
    originalPrice: 1500.00,
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=800&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1594223274512-ad480373d1f5?w=800&h=800&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&h=800&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=800&fit=crop&crop=center'
    ],
    brand: 'ZYRA',
    isNew: true,
    isSale: true,
    discount: 20,
    rating: 4.8,
    reviews: 120,
    category: 'Bags',
    colors: ['Black', 'Brown', 'Cream'],
    sizes: ['One Size'],
    selectedColor: 'Black',
    selectedSize: 'One Size',
    quantity: 1,
    description: 'Crafted from the finest Italian leather, this luxury handbag embodies timeless elegance and modern sophistication. Each piece is meticulously handcrafted by master artisans, ensuring exceptional quality and attention to detail.',
    features: [
      'Handcrafted from premium Italian leather',
      'Gold-tone hardware accents',
      'Adjustable shoulder strap',
      'Multiple interior compartments',
      'Lifetime craftsmanship guarantee'
    ],
    specifications: {
      'Material': 'Italian Leather',
      'Dimensions': '12" x 9" x 4"',
      'Weight': '1.2 lbs',
      'Care Instructions': 'Professional leather cleaning recommended',
      'Warranty': 'Lifetime craftsmanship guarantee'
    }
  },
  '2': {
    id: '2',
    name: 'Classic Silk Scarf',
    price: 250.00,
    originalPrice: undefined,
    images: [
      'https://images.unsplash.com/photo-1584208110707-38784106170a?w=800&h=800&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1594223274512-ad480373d1f5?w=800&h=800&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&h=800&fit=crop&crop=center'
    ],
    brand: 'ZYRA',
    isNew: false,
    isSale: false,
    discount: undefined,
    rating: 4.5,
    reviews: 85,
    category: 'Accessories',
    colors: ['Gold', 'Silver', 'Rose Gold'],
    sizes: ['One Size'],
    selectedColor: 'Gold',
    selectedSize: 'One Size',
    quantity: 1,
    description: 'Elegant silk scarf featuring intricate patterns and luxurious feel. Perfect for adding a touch of sophistication to any outfit.',
    features: [
      '100% Pure Silk',
      'Hand-rolled edges',
      'Versatile styling options',
      'Luxury gift packaging',
      'Care instructions included'
    ],
    specifications: {
      'Material': '100% Pure Silk',
      'Dimensions': '35" x 35"',
      'Weight': '0.2 lbs',
      'Care Instructions': 'Dry clean only',
      'Warranty': '1 year quality guarantee'
    }
  },
  '3': {
    id: '3',
    name: 'Diamond Stud Earrings',
    price: 5500.00,
    originalPrice: undefined,
    images: [
      'https://images.unsplash.com/photo-1612817166008-d1017779277c?w=800&h=800&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1594223274512-ad480373d1f5?w=800&h=800&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&h=800&fit=crop&crop=center'
    ],
    brand: 'ZYRA',
    isNew: true,
    isSale: false,
    discount: undefined,
    rating: 4.9,
    reviews: 200,
    category: 'Jewelry',
    colors: ['White Gold', 'Yellow Gold', 'Rose Gold'],
    sizes: ['One Size'],
    selectedColor: 'White Gold',
    selectedSize: 'One Size',
    quantity: 1,
    description: 'Exquisite diamond stud earrings featuring brilliant-cut diamonds set in precious metal. A timeless piece that adds elegance to any occasion.',
    features: [
      'Brilliant-cut diamonds',
      'Precious metal setting',
      'Secure back closure',
      'Certificate of authenticity',
      'Luxury presentation box'
    ],
    specifications: {
      'Material': 'White Gold & Diamonds',
      'Diamond Carat': '1.0ct total weight',
      'Setting': 'Prong setting',
      'Clarity': 'VS1',
      'Warranty': 'Lifetime warranty'
    }
  },
  '4': {
    id: '4',
    name: 'Men\'s Chronograph Watch',
    price: 3200.00,
    originalPrice: 4000.00,
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=800&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1594223274512-ad480373d1f5?w=800&h=800&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&h=800&fit=crop&crop=center'
    ],
    brand: 'ZYRA',
    isNew: false,
    isSale: true,
    discount: 20,
    rating: 4.7,
    reviews: 150,
    category: 'Watches',
    colors: ['Silver', 'Gold', 'Black'],
    sizes: ['One Size'],
    selectedColor: 'Silver',
    selectedSize: 'One Size',
    quantity: 1,
    description: 'Precision-engineered chronograph watch with Swiss movement and luxury materials. A statement piece for the discerning gentleman.',
    features: [
      'Swiss automatic movement',
      'Sapphire crystal glass',
      'Water resistant to 100m',
      'Leather strap included',
      '2-year international warranty'
    ],
    specifications: {
      'Movement': 'Swiss Automatic',
      'Case Material': 'Stainless Steel',
      'Crystal': 'Sapphire',
      'Water Resistance': '100m',
      'Warranty': '2 years international'
    }
  },
  '5': {
    id: '5',
    name: 'Luxury Cashmere Sweater',
    price: 450.00,
    originalPrice: undefined,
    images: [
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&h=800&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1594223274512-ad480373d1f5?w=800&h=800&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&h=800&fit=crop&crop=center'
    ],
    brand: 'ZYRA',
    isNew: true,
    isSale: false,
    discount: undefined,
    rating: 4.6,
    reviews: 90,
    category: 'Clothing',
    colors: ['Cream', 'Black', 'Navy'],
    sizes: ['S', 'M', 'L', 'XL'],
    selectedColor: 'Cream',
    selectedSize: 'M',
    quantity: 1,
    description: 'Ultra-soft cashmere sweater crafted from the finest materials. Perfect for both casual and formal occasions.',
    features: [
      '100% Pure Cashmere',
      'Hand-finished details',
      'Classic crew neck design',
      'Machine washable',
      'Luxury care instructions'
    ],
    specifications: {
      'Material': '100% Pure Cashmere',
      'Care': 'Machine wash cold',
      'Origin': 'Scotland',
      'Weight': 'Lightweight',
      'Warranty': '1 year quality guarantee'
    }
  },
  '6': {
    id: '6',
    name: 'Designer Sunglasses',
    price: 380.00,
    originalPrice: undefined,
    images: [
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&h=800&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1594223274512-ad480373d1f5?w=800&h=800&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&h=800&fit=crop&crop=center'
    ],
    brand: 'ZYRA',
    isNew: false,
    isSale: false,
    discount: undefined,
    rating: 4.4,
    reviews: 75,
    category: 'Accessories',
    colors: ['Black', 'Brown', 'Tortoise'],
    sizes: ['One Size'],
    selectedColor: 'Black',
    selectedSize: 'One Size',
    quantity: 1,
    description: 'Stylish designer sunglasses with UV protection and premium materials. A perfect blend of fashion and function.',
    features: [
      '100% UV Protection',
      'Premium acetate frames',
      'Polarized lenses',
      'Luxury case included',
      '1-year warranty'
    ],
    specifications: {
      'Lens Material': 'Polarized Glass',
      'Frame Material': 'Acetate',
      'UV Protection': '100%',
      'Lens Color': 'Dark',
      'Warranty': '1 year'
    }
  }
};

export default function ProductDetailPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  
  // Get product data based on ID, fallback to product 1 if not found
  const productData = productsDatabase[id as keyof typeof productsDatabase] || productsDatabase['1'];
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(productData.selectedColor);
  const [selectedSize, setSelectedSize] = useState(productData.selectedSize);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showSizeGuide, setShowSizeGuide] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: productData.name,
          text: `Check out this ${productData.name} from ZYRA`,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Product link copied to clipboard!');
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-pearl-white">
      {/* ===== DESKTOP LAYOUT ===== */}
      <div className="hidden lg:block">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="grid grid-cols-2 gap-8">
            
            {/* ===== LEFT SIDE - IMAGES ===== */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="aspect-square bg-champagne/10 rounded-2xl overflow-hidden">
                <motion.img
                  src={productData.images[selectedImage]}
                  alt={productData.name}
                  className="w-full h-full object-cover"
                  key={selectedImage}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              
              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-3">
                {productData.images.map((image, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                      selectedImage === index 
                        ? 'border-royal-gold shadow-lg' 
                        : 'border-champagne/30 hover:border-royal-gold/50'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img
                      src={image}
                      alt={`${productData.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.button>
                ))}
              </div>
            </div>

            {/* ===== RIGHT SIDE - PRODUCT INFO ===== */}
            <div className="space-y-4">
              
              {/* Brand & Badges */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-royal-gold uppercase tracking-wider">
                  {productData.brand}
                </span>
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-2">
                    {productData.isNew && (
                      <span className="px-3 py-1 bg-royal-gold text-obsidian-black text-xs font-semibold rounded-full">
                        NEW
                      </span>
                    )}
                    {productData.isSale && (
                      <span className="px-3 py-1 bg-obsidian-black text-pearl-white text-xs font-semibold rounded-full">
                        -{productData.discount}%
                      </span>
                    )}
                  </div>
                  
                  {/* Desktop Action Buttons */}
                  <div className="flex items-center space-x-2">
                    <motion.button
                      onClick={() => setIsWishlisted(!isWishlisted)}
                      className={`p-2 rounded-lg transition-all duration-300 ${
                        isWishlisted 
                          ? 'bg-royal-gold text-obsidian-black' 
                          : 'hover:bg-champagne/20 text-graphite'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Heart size={18} className={isWishlisted ? 'fill-current' : ''} />
                    </motion.button>
                    
                    <motion.button
                      onClick={handleShare}
                      className="p-2 hover:bg-champagne/20 rounded-lg transition-colors duration-300 text-graphite"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Share2 size={18} />
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Product Name */}
              <h1 className="text-2xl font-display font-light text-obsidian-black leading-tight">
                {productData.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={`${
                        i < Math.floor(productData.rating) ? 'text-royal-gold fill-current' : 'text-champagne'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-graphite">
                  {productData.rating} ({productData.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-3">
                <span className="text-3xl font-semibold text-obsidian-black">
                  {formatPrice(productData.price)}
                </span>
                {productData.originalPrice && (
                  <span className="text-lg text-graphite line-through">
                    {formatPrice(productData.originalPrice)}
                  </span>
                )}
              </div>

              {/* Color Selection */}
              <div>
                <h3 className="text-sm font-medium text-obsidian-black mb-3">Color: {selectedColor}</h3>
                <div className="flex space-x-3">
                  {productData.colors.map((color) => (
                    <motion.button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 rounded-lg border-2 transition-all duration-300 ${
                        selectedColor === color
                          ? 'border-royal-gold bg-royal-gold/10 text-obsidian-black'
                          : 'border-champagne/30 text-graphite hover:border-royal-gold/50'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {color}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-medium text-obsidian-black">Size: {selectedSize}</h3>
                  <motion.button
                    onClick={() => setShowSizeGuide(true)}
                    className="text-sm text-royal-gold hover:text-royal-gold/80 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    Size Guide
                  </motion.button>
                </div>
                <div className="flex space-x-3">
                  {productData.sizes.map((size) => (
                    <motion.button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-lg border-2 transition-all duration-300 ${
                        selectedSize === size
                          ? 'border-royal-gold bg-royal-gold/10 text-obsidian-black'
                          : 'border-champagne/30 text-graphite hover:border-royal-gold/50'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {size}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <h3 className="text-sm font-medium text-obsidian-black mb-3">Quantity</h3>
                <div className="flex items-center space-x-4 w-fit">
                  <motion.button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 border border-champagne/30 rounded-lg hover:bg-champagne/20 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Minus size={16} />
                  </motion.button>
                  <span className="text-lg font-medium text-obsidian-black min-w-[2rem] text-center">
                    {quantity}
                  </span>
                  <motion.button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 border border-champagne/30 rounded-lg hover:bg-champagne/20 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Plus size={16} />
                  </motion.button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <motion.button 
                  className="w-full py-3 bg-obsidian-black text-pearl-white rounded-xl font-medium hover:bg-royal-gold hover:text-obsidian-black transition-all duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ShoppingBag size={18} />
                  <span>Add to Cart</span>
                </motion.button>
                
                <motion.button 
                  className="w-full py-3 border border-obsidian-black text-obsidian-black rounded-xl font-medium hover:bg-obsidian-black hover:text-pearl-white transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Buy Now
                </motion.button>
              </div>

              {/* Trust Signals */}
              <div className="grid grid-cols-3 gap-3">
                <div className="text-center p-3 bg-champagne/10 rounded-lg">
                  <Truck className="mx-auto mb-1 text-royal-gold" size={20} />
                  <p className="text-xs text-graphite">Free Shipping</p>
                </div>
                <div className="text-center p-3 bg-champagne/10 rounded-lg">
                  <Shield className="mx-auto mb-1 text-royal-gold" size={20} />
                  <p className="text-xs text-graphite">Secure Payment</p>
                </div>
                <div className="text-center p-3 bg-champagne/10 rounded-lg">
                  <RotateCcw className="mx-auto mb-1 text-royal-gold" size={20} />
                  <p className="text-xs text-graphite">Easy Returns</p>
                </div>
              </div>
            </div>
          </div>

          {/* ===== PRODUCT DETAILS SECTION ===== */}
          <div className="mt-12 grid grid-cols-3 gap-6">
            
            {/* Features */}
            <div>
              <h3 className="text-base font-semibold text-obsidian-black mb-3">Features</h3>
              <ul className="space-y-2">
                {productData.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2 text-graphite">
                    <div className="w-1.5 h-1.5 bg-royal-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-xs">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-base font-semibold text-obsidian-black mb-3">Description</h3>
              <p className="text-xs text-graphite leading-relaxed">
                {productData.description}
              </p>
            </div>

            {/* Specifications */}
            <div>
              <h3 className="text-base font-semibold text-obsidian-black mb-3">Specifications</h3>
              <div className="space-y-2">
                {Object.entries(productData.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-1 border-b border-champagne/20">
                    <span className="text-xs font-medium text-obsidian-black">{key}</span>
                    <span className="text-xs text-graphite text-right max-w-[60%]">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== MOBILE LAYOUT ===== */}
      <div className="lg:hidden">


      {/* ===== PRODUCT IMAGES ===== */}
      <motion.div 
        className="relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Main Image */}
        <div className="aspect-[4/5] bg-champagne/10 relative overflow-hidden">
          <motion.img
            src={productData.images[selectedImage]}
            alt={productData.name}
            className="w-full h-full object-cover"
            key={selectedImage}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          />
          
          {/* Sticky Action Buttons */}
          <div className="absolute top-2 right-2 flex flex-col gap-1.5 z-10">
            <motion.button
              onClick={() => setIsWishlisted(!isWishlisted)}
              className={`p-2 backdrop-blur-sm rounded-full shadow-luxury-lg transition-all duration-300 ${
                isWishlisted 
                  ? 'bg-royal-gold text-obsidian-black' 
                  : 'bg-obsidian-black/90 text-pearl-white hover:bg-royal-gold hover:text-obsidian-black'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Heart size={16} className={isWishlisted ? 'fill-current' : ''} />
            </motion.button>
            
            <motion.button 
              onClick={handleShare}
              className="p-2 bg-obsidian-black/90 backdrop-blur-sm text-pearl-white rounded-full shadow-luxury-lg hover:bg-royal-gold hover:text-obsidian-black transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Share2 size={16} />
            </motion.button>
          </div>
          
          {/* Image Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {productData.isNew && (
              <motion.span 
                className="px-2 py-0.5 bg-royal-gold text-obsidian-black text-xs font-semibold rounded-full"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                NEW
              </motion.span>
            )}
            {productData.isSale && (
              <motion.span 
                className="px-2 py-0.5 bg-obsidian-black text-pearl-white text-xs font-semibold rounded-full"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                -{productData.discount}%
              </motion.span>
            )}
          </div>
        </div>

        {/* Image Thumbnails - Mobile */}
        <div className="flex space-x-2 px-3 py-2 overflow-x-auto lg:hidden">
          {productData.images.map((image, index) => (
            <motion.button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                selectedImage === index 
                  ? 'border-royal-gold shadow-lg' 
                  : 'border-champagne/30 hover:border-royal-gold/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={image}
                alt={`${productData.name} ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.button>
          ))}
        </div>

      </motion.div>

      {/* ===== PRODUCT INFO ===== */}
      <motion.div 
        className="px-4 py-4 bg-pearl-white relative z-10 -mt-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        
        {/* Brand */}
        <motion.div 
          className="mb-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <span className="text-xs font-medium text-royal-gold uppercase tracking-wider">
            {productData.brand}
          </span>
        </motion.div>

        {/* Product Name */}
        <motion.h1 
          className="text-lg font-display font-light text-obsidian-black mb-2 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          {productData.name}
        </motion.h1>

        {/* Rating */}
        <motion.div 
          className="flex items-center space-x-1 mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={12}
                className={`${
                  i < Math.floor(productData.rating) ? 'text-royal-gold fill-current' : 'text-champagne'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-graphite">
            {productData.rating} ({productData.reviews})
          </span>
        </motion.div>

        {/* Price */}
        <motion.div 
          className="flex items-center space-x-2 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <span className="text-xl font-semibold text-obsidian-black">
            {formatPrice(productData.price)}
          </span>
          {productData.originalPrice && (
            <span className="text-sm text-graphite line-through">
              {formatPrice(productData.originalPrice)}
            </span>
          )}
        </motion.div>

        {/* Color Selection */}
        <motion.div 
          className="mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          <h3 className="text-xs font-medium text-obsidian-black mb-2">Color: {selectedColor}</h3>
          <div className="flex space-x-1.5 overflow-x-auto pb-1">
            {productData.colors.map((color) => (
              <motion.button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`px-2.5 py-1.5 rounded-md border-2 transition-all duration-300 flex-shrink-0 text-xs ${
                  selectedColor === color
                    ? 'border-royal-gold bg-royal-gold/10 text-obsidian-black'
                    : 'border-champagne/30 text-graphite hover:border-royal-gold/50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {color}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Size Selection */}
        <motion.div 
          className="mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs font-medium text-obsidian-black">Size: {selectedSize}</h3>
            <motion.button
              onClick={() => setShowSizeGuide(true)}
              className="text-xs text-royal-gold hover:text-royal-gold/80 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Guide
            </motion.button>
          </div>
          <div className="flex space-x-1.5 overflow-x-auto pb-1">
            {productData.sizes.map((size) => (
              <motion.button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-2.5 py-1.5 rounded-md border-2 transition-all duration-300 flex-shrink-0 text-xs ${
                  selectedSize === size
                    ? 'border-royal-gold bg-royal-gold/10 text-obsidian-black'
                    : 'border-champagne/30 text-graphite hover:border-royal-gold/50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {size}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Quantity */}
        <motion.div 
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <h3 className="text-xs font-medium text-obsidian-black mb-2">Quantity</h3>
          <div className="flex items-center space-x-3 w-fit">
            <motion.button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-1.5 border border-champagne/30 rounded-md hover:bg-champagne/20 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Minus size={14} />
            </motion.button>
            <span className="text-base font-medium text-obsidian-black min-w-[1.5rem] text-center">
              {quantity}
            </span>
            <motion.button
              onClick={() => setQuantity(quantity + 1)}
              className="p-1.5 border border-champagne/30 rounded-md hover:bg-champagne/20 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Plus size={14} />
            </motion.button>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          className="space-y-2 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
        >
          <motion.button 
            className="w-full py-2.5 bg-obsidian-black text-pearl-white rounded-lg font-medium hover:bg-royal-gold hover:text-obsidian-black transition-all duration-300 flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <ShoppingBag size={16} />
            <span className="text-sm">Add to Cart</span>
          </motion.button>
          
          <motion.button 
            className="w-full py-2.5 border border-obsidian-black text-obsidian-black rounded-lg font-medium hover:bg-obsidian-black hover:text-pearl-white transition-all duration-300 text-sm"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Buy Now
          </motion.button>
        </motion.div>

        {/* Features */}
        <motion.div 
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          <h3 className="text-sm font-semibold text-obsidian-black mb-2">Features</h3>
          <ul className="space-y-1.5">
            {productData.features.map((feature, index) => (
              <motion.li 
                key={index} 
                className="flex items-start space-x-2 text-graphite"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 + index * 0.1 }}
              >
                <div className="w-1 h-1 bg-royal-gold rounded-full mt-1.5 flex-shrink-0"></div>
                <span className="text-xs leading-relaxed">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Description */}
        <motion.div 
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
        >
          <h3 className="text-sm font-semibold text-obsidian-black mb-2">Description</h3>
          <p className="text-xs text-graphite leading-relaxed">
            {productData.description}
          </p>
        </motion.div>

        {/* Specifications */}
        <motion.div 
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7 }}
        >
          <h3 className="text-sm font-semibold text-obsidian-black mb-2">Specifications</h3>
          <div className="space-y-1.5">
            {Object.entries(productData.specifications).map(([key, value]) => (
              <motion.div 
                key={key} 
                className="flex justify-between py-1.5 border-b border-champagne/20"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 }}
              >
                <span className="text-xs font-medium text-obsidian-black">{key}</span>
                <span className="text-xs text-graphite text-right max-w-[60%]">{value}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Signals */}
        <motion.div 
          className="grid grid-cols-3 gap-1.5 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9 }}
        >
          <motion.div 
            className="text-center p-2 bg-champagne/10 rounded-md"
            whileHover={{ scale: 1.05 }}
          >
            <Truck className="mx-auto mb-1 text-royal-gold" size={16} />
            <p className="text-xs text-graphite">Free Shipping</p>
          </motion.div>
          <motion.div 
            className="text-center p-2 bg-champagne/10 rounded-md"
            whileHover={{ scale: 1.05 }}
          >
            <Shield className="mx-auto mb-1 text-royal-gold" size={16} />
            <p className="text-xs text-graphite">Secure Payment</p>
          </motion.div>
          <motion.div 
            className="text-center p-2 bg-champagne/10 rounded-md"
            whileHover={{ scale: 1.05 }}
          >
            <RotateCcw className="mx-auto mb-1 text-royal-gold" size={16} />
            <p className="text-xs text-graphite">Easy Returns</p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ===== SIZE GUIDE MODAL ===== */}
      {showSizeGuide && (
        <motion.div 
          className="fixed inset-0 z-50 bg-obsidian-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="absolute inset-2 sm:inset-4 bg-pearl-white rounded-2xl p-4 sm:p-6 overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.3 }}
          >
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h3 className="text-base sm:text-lg font-semibold text-obsidian-black">Size Guide</h3>
              <motion.button
                onClick={() => setShowSizeGuide(false)}
                className="p-2 hover:bg-champagne/20 rounded-lg transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <X size={20} />
              </motion.button>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              <p className="text-xs sm:text-sm text-graphite leading-relaxed">
                This handbag is designed as a one-size piece that fits most body types comfortably.
              </p>
              <div className="bg-champagne/10 p-3 sm:p-4 rounded-lg">
                <h4 className="text-sm sm:text-base font-medium text-obsidian-black mb-2">Dimensions</h4>
                <p className="text-xs sm:text-sm text-graphite">12" x 9" x 4" (30cm x 23cm x 10cm)</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
      </div>
    </div>
  );
}

