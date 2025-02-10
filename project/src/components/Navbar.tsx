import React from 'react';
import { ShoppingCart, Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-3xl font-bold bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
              ONO
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-red-600 transition">Home</a>
            <a href="#products" className="text-gray-700 hover:text-red-600 transition">Products</a>
            <a href="#about" className="text-gray-700 hover:text-red-600 transition">About</a>
            <a href="#contact" className="text-gray-700 hover:text-red-600 transition">Contact</a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="hidden md:block bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition">
              Register
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition">
              <ShoppingCart className="h-6 w-6 text-gray-700" />
            </button>
            <button className="md:hidden p-2 hover:bg-gray-100 rounded-full transition">
              <Menu className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;