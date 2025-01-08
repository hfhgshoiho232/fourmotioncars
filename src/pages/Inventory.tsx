import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Filter, Search, SlidersHorizontal } from 'lucide-react';
import { Car, FilterOptions } from '../types';

const cars: Car[] = [
  {
    id: '1',
    brand: 'Mercedes-Benz',
    model: 'S-Class',
    year: 2024,
    price: 110000,
    mileage: 0,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    color: 'Black',
    images: ['https://i.ytimg.com/vi/N5_6XDAmq6E/maxresdefault.jpg'],
    features: ['Leather Seats', 'Navigation', 'Premium Sound'],
    description: 'Luxury sedan with advanced features',
  },
  {
    id: '2',
    brand: 'BMW',
    model: 'M8 Competition',
    year: 2024,
    price: 125000,
    mileage: 500,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    color: 'Alpine White',
    images: ['https://images.unsplash.com/photo-1555215695-3004980ad54e'],
    features: ['M Sport Package', 'Carbon Fiber', 'Harman Kardon'],
    description: 'High-performance luxury coupe',
  },
  {
    id: '3',
    brand: 'Porsche',
    model: '911 GT3',
    year: 2024,
    price: 165000,
    mileage: 100,
    fuelType: 'Petrol',
    transmission: 'PDK',
    color: 'Guards Red',
    images: ['https://images.unsplash.com/photo-1503376780353-7e6692767b70'],
    features: ['Sport Chrono', 'Carbon Ceramic Brakes', 'Sport Exhaust'],
    description: 'Track-focused sports car',
  },
  {
    id: '4',
    brand: 'Aston Martin',
    model: 'DB11',
    year: 2023,
    price: 185000,
    mileage: 1500,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    color: 'British Racing Green',
    images: ['https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a'],
    features: ['Premium Audio', 'Bridge of Weir Leather', 'Carbon Fiber'],
    description: 'Grand touring excellence',
  },
  {
    id: '5',
    brand: 'Bentley',
    model: 'Continental GT',
    year: 2024,
    price: 225000,
    mileage: 0,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    color: 'Havana',
    images: ['https://images.unsplash.com/photo-1621135802920-133df287f89c'],
    features: ['Naim Audio', 'Mulliner Driving Specification', 'Rotating Display'],
    description: 'Ultimate luxury grand tourer',
  },
  // Add 10 more cars here with similar structure
];

export default function Inventory() {
  const [filters, setFilters] = useState<FilterOptions>({});
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const filteredCars = useMemo(() => {
    return cars.filter(car => {
      const matchesSearch = 
        car.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesBrand = !filters.brand || car.brand === filters.brand;
      const matchesPrice = (!filters.minPrice || car.price >= filters.minPrice) &&
                          (!filters.maxPrice || car.price <= filters.maxPrice);
      const matchesYear = (!filters.minYear || car.year >= filters.minYear) &&
                         (!filters.maxYear || car.year <= filters.maxYear);
      
      return matchesSearch && matchesBrand && matchesPrice && matchesYear;
    });
  }, [searchQuery, filters]);

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
          <h1 className="text-3xl font-bold text-gray-900">Our Inventory</h1>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto">
            <div className="relative flex-grow md:flex-grow-0">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search vehicles..."
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
            >
              <SlidersHorizontal className="h-5 w-5" />
              <span>Filters</span>
            </button>
          </div>
        </div>

        {showFilters && (
          <div className="bg-white p-6 rounded-lg shadow-lg mb-8 grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Add filter controls here */}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map(car => (
            <Link to={`/cars/${car.id}`} key={car.id} className="group">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:scale-[1.02]">
                <div className="relative h-48">
                  <img 
                    src={car.images[0]} 
                    alt={`${car.brand} ${car.model}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-full">
                    £{car.price.toLocaleString()}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{car.brand} {car.model}</h3>
                  <div className="flex justify-between text-gray-600 mb-4">
                    <span>{car.year}</span>
                    <span>{car.mileage.toLocaleString()} miles</span>
                    <span>{car.transmission}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {car.features.slice(0, 3).map((feature, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
