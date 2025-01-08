import React from 'react';
import { Brand } from '../types';

const brands: Brand[] = [
  {
    id: '1',
    name: 'Mercedes-Benz',
    logo: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80',
    description: 'The best or nothing.',
  },
  {
    id: '2',
    name: 'BMW',
    logo: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80',
    description: 'The Ultimate Driving Machine',
  },
  {
    id: '3',
    name: 'Porsche',
    logo: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80',
    description: 'There is no substitute.',
  },
];

export default function Brands() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Premium Brands</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our curated selection of the world's most prestigious automotive brands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {brands.map(brand => (
            <div key={brand.id} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <img 
                  src={brand.logo}
                  alt={brand.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h2 className="text-3xl font-bold text-white">{brand.name}</h2>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{brand.description}</p>
                <button className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition-colors">
                  View Collection
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}