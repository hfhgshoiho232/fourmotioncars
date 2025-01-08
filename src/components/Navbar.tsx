import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Car, Search, User, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Car className="h-8 w-8 text-indigo-600" />
              <span className="text-2xl font-bold text-gray-900">Four Motion Cars</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/inventory" className="text-gray-700 hover:text-indigo-600 font-medium">
              Inventory
            </Link>
            <Link to="/brands" className="text-gray-700 hover:text-indigo-600 font-medium">
              Brands
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-indigo-600 font-medium">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-indigo-600 font-medium">
              Contact
            </Link>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-indigo-600">
                <Search className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-indigo-600">
                <User className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 hover:text-indigo-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/inventory"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Inventory
            </Link>
            <Link
              to="/brands"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Brands
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}