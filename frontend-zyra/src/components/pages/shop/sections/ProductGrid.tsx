import ProductCard from '@/components/ui/ProductCard';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  brand: string;
  isNew?: boolean;
  isSale?: boolean;
  discount?: number;
  rating: number;
  reviews: number;
  category: string;
  color: string;
  size: string;
}

interface ProductGridProps {
  products: Product[];
  columns?: '2' | '3' | '4';
}

export default function ProductGrid({ 
  products, 
  columns = '4' 
}: ProductGridProps) {
  const gridClasses = {
    '2': 'grid-cols-2',
    '3': 'grid-cols-2 sm:grid-cols-3',
    '4': 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'
  };

  return (
    <div className="px-4 py-6 sm:px-6 lg:px-8">
      <div className={`grid gap-4 sm:gap-6 ${gridClasses[columns]}`}>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
