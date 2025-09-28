'use client';

import { CustomizedHero, UploadSection, SampleDesigns, TopSellingDesigns } from '@/components/pages/customized';

// Sample generated designs
const sampleDesigns = [
  {
    id: '1',
    name: 'Vintage Band Logo',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&crop=center',
    price: 29.99,
    rating: 4.8,
    sales: 156,
    category: 'Music'
  },
  {
    id: '2',
    name: 'Abstract Art Design',
    image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&h=400&fit=crop&crop=center',
    price: 34.99,
    rating: 4.9,
    sales: 203,
    category: 'Art'
  },
  {
    id: '3',
    name: 'Minimalist Quote',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop&crop=center',
    price: 24.99,
    rating: 4.7,
    sales: 189,
    category: 'Text'
  },
  {
    id: '4',
    name: 'Nature Photography',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center',
    price: 39.99,
    rating: 4.6,
    sales: 142,
    category: 'Photo'
  }
];

// Top selling designs
const topSellingDesigns = [
  {
    id: '1',
    name: 'Classic Logo Design',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center',
    price: 29.99,
    sales: 1250,
    rating: 4.9,
    creator: 'DesignPro'
  },
  {
    id: '2',
    name: 'Vintage Typography',
    image: 'https://images.unsplash.com/photo-1583743814966-8936f37f0c4a?w=400&h=400&fit=crop&crop=center',
    price: 32.99,
    sales: 980,
    rating: 4.8,
    creator: 'VintageStudio'
  },
  {
    id: '3',
    name: 'Modern Geometric',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center',
    price: 27.99,
    sales: 856,
    rating: 4.7,
    creator: 'GeometricArt'
  },
  {
    id: '4',
    name: 'Watercolor Effect',
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop&crop=center',
    price: 35.99,
    sales: 743,
    rating: 4.9,
    creator: 'WatercolorPro'
  }
];

export default function CustomizedPage() {
  const handleFileSelect = (file: File, previewUrl: string) => {
    console.log('File selected:', file.name, previewUrl);
    // Handle file selection logic here
  };

  return (
    <div className="min-h-screen bg-pearl-white">
      <CustomizedHero />
      <UploadSection onFileSelect={handleFileSelect} />
      <SampleDesigns designs={sampleDesigns} />
      <TopSellingDesigns designs={topSellingDesigns} />
    </div>
  );
}