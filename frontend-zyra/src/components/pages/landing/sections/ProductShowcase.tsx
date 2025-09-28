'use client';

import { motion } from 'framer-motion';
import { ProductCard, Button } from '@/components/ui';
import { ShoppingBag, Heart } from 'lucide-react';

const sampleProducts = [
  {
    id: '1',
    name: 'Luxury Leather Handbag',
    price: 1299,
    originalPrice: 1599,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop&crop=center',
    brand: 'ZYRA',
    isNew: true,
    discount: 19,
    rating: 4.8,
    reviews: 124
  },
  {
    id: '2',
    name: 'Premium Silk Scarf',
    price: 299,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop&crop=center',
    brand: 'ZYRA',
    isSale: true,
    discount: 25,
    rating: 4.9,
    reviews: 89
  },
  {
    id: '3',
    name: 'Designer Sunglasses',
    price: 599,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&h=500&fit=crop&crop=center',
    brand: 'ZYRA',
    rating: 4.7,
    reviews: 203
  },
  {
    id: '4',
    name: 'Elegant Pearl Necklace',
    price: 899,
    originalPrice: 1099,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=500&fit=crop&crop=center',
    brand: 'ZYRA',
    isNew: true,
    discount: 18,
    rating: 4.9,
    reviews: 156
  }
];

export default function ProductShowcase() {

  return (
            <section className="py-8 sm:py-12 lg:py-16 bg-pearl-white">
              <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        
                {/* ===== SECTION HEADER ===== */}
                <motion.div 
                  className="text-center mb-6 sm:mb-8 lg:mb-12"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <motion.h2 
                    className="text-2xl sm:text-3xl lg:text-4xl font-display font-light text-obsidian-black mb-3 sm:mb-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    Featured Collection
                  </motion.h2>
                  <motion.p 
                    className="text-sm sm:text-base text-graphite max-w-xl mx-auto leading-relaxed px-2"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    Discover our curated selection of luxury fashion and accessories, 
                    crafted with the finest materials and attention to detail.
                  </motion.p>
                </motion.div>

                {/* ===== PRODUCT GRID ===== */}
                <motion.div 
                  className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4 mb-6 sm:mb-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                >
          {sampleProducts.map((product, index) => (
            <motion.div 
              key={product.id} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <a href={`/product/${product.id}`}>
                <ProductCard {...product} />
              </a>
            </motion.div>
          ))}
        </motion.div>

                {/* ===== CTA BUTTONS ===== */}
                <motion.div 
                  className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center items-center px-2"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  viewport={{ once: true }}
                >
                  <Button size="sm" icon={ShoppingBag} className="w-full sm:w-auto text-sm">
                    View All Products
                  </Button>
                  <Button variant="outline" size="sm" icon={Heart} className="w-full sm:w-auto text-sm">
                    Browse Collections
                  </Button>
                </motion.div>


      </div>
    </section>
  );
}
