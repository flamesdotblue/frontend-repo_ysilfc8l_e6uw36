import { useMemo } from 'react';
import { Star } from 'lucide-react';

const products = [
  {
    id: 'scope-pro-x',
    name: 'Pro X Riflescope 4-16x50',
    price: 349.99,
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1596079890733-969a6f16f24c?q=80&w=1920&auto=format&fit=crop',
    tag: 'Best Seller',
  },
  {
    id: 'camo-jacket',
    name: 'All-Season Camo Jacket',
    price: 129.0,
    rating: 4.5,
    image:
      'https://images.unsplash.com/photo-1503342217505-b0a15cf70489?q=80&w=1920&auto=format&fit=crop',
    tag: 'New',
  },
  {
    id: 'rangefinder-lite',
    name: 'Rangefinder Lite 1200',
    price: 179.5,
    rating: 4.3,
    image:
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1920&auto=format&fit=crop',
  },
  {
    id: 'backpack-65l',
    name: 'Backcountry Pack 65L',
    price: 159.99,
    rating: 4.6,
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1920&auto=format&fit=crop',
  },
  {
    id: 'binoculars-10x42',
    name: 'Binoculars HD 10x42',
    price: 219.99,
    rating: 4.4,
    image:
      'https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=1920&auto=format&fit=crop',
  },
  {
    id: 'boots-trakker',
    name: 'Trakker Waterproof Boots',
    price: 139.99,
    rating: 4.2,
    image:
      'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=1920&auto=format&fit=crop',
  },
];

const formatCurrency = (n) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(n);

const Stars = ({ rating }) => {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  return (
    <div className="flex items-center gap-1 text-amber-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`h-4 w-4 ${i < full ? '' : 'text-gray-300'}`} fill={i < full ? 'currentColor' : 'none'} />
      ))}
      {half && <span className="ml-1 text-xs text-gray-600">{rating.toFixed(1)}</span>}
    </div>
  );
};

const ProductCard = ({ item, onAdd }) => {
  return (
    <div className="group overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="relative">
        <img src={item.image} alt={item.name} className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
        {item.tag && (
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2 py-0.5 text-xs font-medium text-gray-900 shadow">
            {item.tag}
          </span>
        )}
      </div>
      <div className="space-y-2 p-4">
        <h3 className="font-semibold text-gray-900">{item.name}</h3>
        <Stars rating={item.rating} />
        <div className="flex items-center justify-between pt-2">
          <span className="text-lg font-bold text-gray-900">{formatCurrency(item.price)}</span>
          <button
            onClick={() => onAdd?.(item)}
            className="rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-emerald-700"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductGrid = ({ onAddToCart }) => {
  const featured = useMemo(() => products.slice(0, 6), []);

  return (
    <section id="catalog" className="bg-gradient-to-b from-white to-emerald-50/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Featured gear</h2>
            <p className="mt-1 text-gray-600">Quality equipment for every season and pursuit.</p>
          </div>
          <a href="#" className="text-emerald-700 hover:text-emerald-800">View all</a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProductCard key={p.id} item={p} onAdd={onAddToCart} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
