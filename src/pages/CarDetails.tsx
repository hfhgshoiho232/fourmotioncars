import React from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Fuel, Gauge, Shield } from 'lucide-react';

const car = {
  id: '1',
  brand: 'Mercedes-Benz',
  model: 'S-Class',
  year: 2024,
  price: 110000,
  mileage: 0,
  fuelType: 'Gasoline',
  transmission: 'Automatic',
  color: 'Black',
  images: [
    'https://i.ytimg.com/vi/N5_6XDAmq6E/maxresdefault.jpg?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80'
  ],
  features: [
    'Leather Seats',
    'Navigation System',
    'Premium Sound System',
    'Panoramic Sunroof',
    'Driver Assistance Package',
    'Heated and Ventilated Seats',
    'Ambient Lighting',
    'Head-Up Display'
  ],
  description: 'Experience unparalleled luxury with the all-new Mercedes-Benz S-Class. This flagship sedan combines cutting-edge technology with exceptional comfort and sophisticated design.',
};

export default function CarDetails() {
  const { id } = useParams();

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">{car.brand} {car.model}</h1>
                <p className="text-2xl text-indigo-600 font-semibold">${car.price.toLocaleString()}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-6 w-6 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Year</p>
                    <p className="font-medium">{car.year}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Gauge className="h-6 w-6 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Mileage</p>
                    <p className="font-medium">{car.mileage.toLocaleString()} miles</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Fuel className="h-6 w-6 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Fuel Type</p>
                    <p className="font-medium">{car.fuelType}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Transmission</p>
                    <p className="font-medium">{car.transmission}</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Description</h2>
                <p className="text-gray-600 leading-relaxed">{car.description}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Features</h2>
                <div className="grid grid-cols-2 gap-3">
                  {car.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="h-2 w-2 bg-indigo-600 rounded-full" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <button className="flex-1 bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700">
                  Schedule Test Drive
                </button>
                <button className="flex-1 bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800">
                  Contact Dealer
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={car.images[0]} 
                  alt={`${car.brand} ${car.model}`}
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {car.images.slice(1).map((image, index) => (
                  <img 
                    key={index}
                    src={image}
                    alt={`${car.brand} ${car.model}`}
                    className="w-full h-24 object-cover rounded-lg cursor-pointer hover:opacity-75"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
