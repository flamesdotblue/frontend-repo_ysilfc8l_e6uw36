const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-emerald-600 text-white grid place-items-center font-bold">H</div>
              <span className="text-lg font-semibold tracking-tight">HuntPro</span>
            </div>
            <p className="text-sm text-gray-600">Premium hunting gear curated for performance, durability, and value.</p>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-gray-900">Shop</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-emerald-700">Optics</a></li>
              <li><a href="#" className="hover:text-emerald-700">Apparel</a></li>
              <li><a href="#" className="hover:text-emerald-700">Footwear</a></li>
              <li><a href="#" className="hover:text-emerald-700">Accessories</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-gray-900">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-emerald-700">About</a></li>
              <li><a href="#" className="hover:text-emerald-700">Sustainability</a></li>
              <li><a href="#" className="hover:text-emerald-700">Careers</a></li>
              <li><a href="#" className="hover:text-emerald-700">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-gray-900">Support</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-emerald-700">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-emerald-700">Warranty</a></li>
              <li><a href="#" className="hover:text-emerald-700">FAQ</a></li>
              <li><a href="#" className="hover:text-emerald-700">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-100 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} HuntPro. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
