import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Discover Luxury on Four Wheels
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Experience the finest collection of premium vehicles. From classic elegance to modern innovation,
              find your perfect drive with us.
            </p>
            <div className="flex justify-center space-x-4">
              <Link 
                to="/inventory"
                className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center"
              >
                Browse Inventory
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact" 
                className="bg-white text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Schedule Test Drive
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}