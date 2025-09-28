'use client';

import { motion } from 'framer-motion';
import { ShoppingBag, Plus, Minus, Trash2 } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

// Sample cart items data
const cartItems = [
  {
    id: '1',
    name: 'Luxury Leather Handbag',
    price: 1200.00,
    originalPrice: 1500.00,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop&crop=center',
    brand: 'ZYRA',
    quantity: 1,
    size: 'One Size',
    color: 'Black'
  },
  {
    id: '4',
    name: 'Men\'s Chronograph Watch',
    price: 3200.00,
    originalPrice: 4000.00,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop&crop=center',
    brand: 'ZYRA',
    quantity: 2,
    size: 'One Size',
    color: 'Silver'
  }
];

export default function CartPage() {
  const [items, setItems] = useState(cartItems);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id);
    } else {
      setItems(items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const savings = items.reduce((sum, item) => sum + ((item.originalPrice - item.price) * item.quantity), 0);
  const total = subtotal;

  return (
    <div className="min-h-screen bg-pearl-white">
      
      {/* ===== SIMPLE HEADER ===== */}
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-display font-light text-obsidian-black">
            Shopping Cart
          </h1>
        </div>
      </div>

      {/* ===== CART CONTENT ===== */}
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        {items.length > 0 ? (
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {items.map((item, index) => (
                  <motion.div
                    key={item.id}
                    className="bg-pearl-white rounded-2xl p-4 sm:p-6 shadow-luxury-sm border border-champagne/20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex gap-4">
                      {/* Product Image */}
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm sm:text-base font-semibold text-obsidian-black mb-1">
                          {item.name}
                        </h3>
                        <p className="text-xs text-graphite mb-2">{item.brand}</p>
                        <p className="text-xs text-graphite mb-3">
                          {item.color} • {item.size}
                        </p>

                        {/* Price */}
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-sm sm:text-base font-semibold text-obsidian-black">
                            {formatPrice(item.price)}
                          </span>
                          {item.originalPrice && item.originalPrice > item.price && (
                            <span className="text-xs text-graphite line-through">
                              {formatPrice(item.originalPrice)}
                            </span>
                          )}
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-3">
                          <div className="flex items-center border border-champagne/30 rounded-lg">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-2 hover:bg-champagne/20 transition-colors duration-200"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="px-3 py-2 text-sm font-medium min-w-[3rem] text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-2 hover:bg-champagne/20 transition-colors duration-200"
                            >
                              <Plus size={16} />
                            </button>
                          </div>

                          {/* Remove Button */}
                          <button
                            onClick={() => removeItem(item.id)}
                            className="p-2 text-graphite hover:text-obsidian-black hover:bg-champagne/20 rounded-lg transition-colors duration-200"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <motion.div 
                  className="bg-pearl-white rounded-2xl p-6 shadow-luxury-sm border border-champagne/20 sticky top-24"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <h3 className="text-lg font-semibold text-obsidian-black mb-4">Order Summary</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-graphite">Subtotal</span>
                      <span className="text-obsidian-black">{formatPrice(subtotal)}</span>
                    </div>
                    
                    {savings > 0 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-graphite">Savings</span>
                        <span className="text-royal-gold">-{formatPrice(savings)}</span>
                      </div>
                    )}
                    
                    <div className="flex justify-between text-sm">
                      <span className="text-graphite">Shipping</span>
                      <span className="text-obsidian-black">Free</span>
                    </div>
                    
                    <div className="border-t border-champagne/30 pt-3">
                      <div className="flex justify-between text-base font-semibold">
                        <span className="text-obsidian-black">Total</span>
                        <span className="text-obsidian-black">{formatPrice(total)}</span>
                      </div>
                    </div>
                  </div>

                  <Link href="/checkout">
                    <motion.button
                      className="w-full py-4 bg-obsidian-black text-pearl-white rounded-xl font-medium hover:bg-royal-gold hover:text-obsidian-black transition-all duration-300 mb-4"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Proceed to Checkout
                    </motion.button>
                  </Link>

                  <Link href="/shop">
                    <button className="w-full py-3 border border-obsidian-black text-obsidian-black rounded-xl font-medium hover:bg-obsidian-black hover:text-pearl-white transition-all duration-300">
                      Continue Shopping
                    </button>
                  </Link>
                </motion.div>
              </div>

            </div>
          </div>
        ) : (
          /* Empty Cart */
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-24 h-24 bg-champagne/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag size={32} className="text-graphite" />
            </div>
            <h3 className="text-xl font-semibold text-obsidian-black mb-2">Your cart is empty</h3>
            <p className="text-graphite mb-6">Add some items to get started</p>
            <Link href="/shop">
              <motion.button
                className="px-6 py-3 bg-obsidian-black text-pearl-white rounded-lg font-medium hover:bg-royal-gold hover:text-obsidian-black transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Browse Products
              </motion.button>
            </Link>
          </motion.div>
        )}
      </div>

      {/* ===== RESULTS COUNTER ===== */}
      {items.length > 0 && (
        <div className="px-4 py-4 bg-champagne/10 sm:px-6 lg:px-8">
          <p className="text-sm text-graphite text-center">
            {items.length} {items.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>
      )}

    </div>
  );
}