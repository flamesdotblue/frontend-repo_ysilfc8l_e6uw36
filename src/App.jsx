import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount((c) => c + 1);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar cartCount={cartCount} />
      <main>
        <Hero />
        <ProductGrid onAddToCart={handleAddToCart} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
