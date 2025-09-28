'use client';

import { ShopHeader, ProductGrid, ResultsCounter } from '@/components/pages/shop';

// Sample products data
const sampleProducts = [
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
    id: '2',
    name: 'Classic Silk Scarf',
    price: 250.00,
    image: 'https://images.unsplash.com/photo-1584208110707-38784106170a?w=500&h=500&fit=crop&crop=center',
    brand: 'ZYRA',
    isNew: false,
    isSale: false,
    rating: 4.5,
    reviews: 85,
    category: 'Accessories',
    color: 'Gold',
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
    id: '4',
    name: 'Men\'s Chronograph Watch',
    price: 3200.00,
    originalPrice: 4000.00,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop&crop=center',
    brand: 'ZYRA',
    isNew: false,
    isSale: true,
    discount: 20,
    rating: 4.7,
    reviews: 150,
    category: 'Watches',
    color: 'Silver',
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
  },
  {
    id: '6',
    name: 'Designer Sunglasses',
    price: 380.00,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&h=500&fit=crop&crop=center',
    brand: 'ZYRA',
    isNew: false,
    isSale: false,
    rating: 4.4,
    reviews: 75,
    category: 'Accessories',
    color: 'Black',
    size: 'One Size'
  }
];

export default function ShopPage() {

  return (
    <div className="min-h-screen bg-pearl-white">
      <ShopHeader />
      <ProductGrid products={sampleProducts} />
      <ResultsCounter count={sampleProducts.length} />
    </div>
  );
}

