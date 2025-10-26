import { useState } from 'react';
import { ShoppingCart, Search, User, Menu } from 'lucide-react';

const Navbar = ({ cartCount = 0 }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Brand */}
          <div className="flex items-center gap-3">
            <button
              className="lg:hidden p-2 rounded-md hover:bg-gray-100"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
            <a href="#" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-emerald-600 text-white grid place-items-center font-bold">H</div>
              <span className="text-lg font-semibold tracking-tight">HuntPro</span>
            </a>
          </div>

          {/* Center: Nav links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm text-gray-700">
            <a href="#" className="hover:text-emerald-700">Shop</a>
            <a href="#" className="hover:text-emerald-700">New Arrivals</a>
            <a href="#" className="hover:text-emerald-700">Best Sellers</a>
            <a href="#" className="hover:text-emerald-700">About</a>
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 rounded-md border border-gray-200 px-3 py-2">
              <Search className="h-4 w-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search gear..."
                className="w-40 bg-transparent text-sm focus:outline-none placeholder:text-gray-400"
              />
            </div>
            <button className="p-2 rounded-md hover:bg-gray-100" aria-label="Account">
              <User className="h-5 w-5" />
            </button>
            <button className="relative p-2 rounded-md hover:bg-gray-100" aria-label="Cart">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-emerald-600 text-[10px] font-semibold text-white">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden pb-4">
            <div className="mt-2 grid gap-2">
              <a href="#" className="rounded-md px-3 py-2 hover:bg-gray-50">Shop</a>
              <a href="#" className="rounded-md px-3 py-2 hover:bg-gray-50">New Arrivals</a>
              <a href="#" className="rounded-md px-3 py-2 hover:bg-gray-50">Best Sellers</a>
              <a href="#" className="rounded-md px-3 py-2 hover:bg-gray-50">About</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
