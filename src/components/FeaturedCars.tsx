import React from 'react';
import { Car } from '../types';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function CarCard({ car }: { car: Car }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden min-w-[300px] md:min-w-[400px]">
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
        <Link to={`/cars/${car.id}`}>
          <button className="w-full bg-gray-900 text-white py-2 rounded hover:bg-gray-800 transition-colors">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}

export default function FeaturedCars() {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 400;
      if (direction === 'left') {
        current.scrollLeft -= scrollAmount;
      } else {
        current.scrollLeft += scrollAmount;
      }
    }
  };

  const featuredCars: Car[] = [
    {
      id: '1',
      brand: 'Mercedes-Benz',
      model: 'S-Class',
      year: 2024,
      price: 110000,
      mileage: 0,
      fuelType: 'Gasoline',
      transmission: 'Automatic',
      color: 'Black',
      images: ['https://images.unsplash.com/photo-1622200284414-a1f0b23a0d6e?auto=format&fit=crop&q=80'],
      features: [],
      description: '',
    },
    {
      id: '2',
      brand: 'BMW',
      model: 'M8',
      year: 2024,
      price: 125000,
      mileage: 500,
      fuelType: 'Petrol',
      transmission: 'Automatic',
      color: 'Alpine White',
      images: ['https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80'],
      features: [],
      description: '',
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
      images: ['https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80'],
      features: [],
      description: '',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Popular Inventory</h2>
        <div className="relative">
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <div 
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto scroll-smooth scrollbar-hide py-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {featuredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}