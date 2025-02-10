import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">ONO</h3>
            <p className="mb-4">Challenging minds with innovative puzzles and intelligent toys.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-red-400 transition"><Facebook /></a>
              <a href="#" className="hover:text-red-400 transition"><Twitter /></a>
              <a href="#" className="hover:text-red-400 transition"><Instagram /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-red-400 transition">Home</a></li>
              <li><a href="#" className="hover:text-red-400 transition">Products</a></li>
              <li><a href="#" className="hover:text-red-400 transition">About Us</a></li>
              <li><a href="#" className="hover:text-red-400 transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-red-400 transition">Shipping Info</a></li>
              <li><a href="#" className="hover:text-red-400 transition">Returns</a></li>
              <li><a href="#" className="hover:text-red-400 transition">FAQ</a></li>
              <li><a href="#" className="hover:text-red-400 transition">Track Order</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                info@onopuzzles.com
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                123 Puzzle Street, NY 10001
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} ONO Puzzles. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;