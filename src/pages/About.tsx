import React from 'react';
import { Award, Shield, Clock, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Four Motion Cars</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            London's premier luxury automotive destination, where exceptional service meets unparalleled expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Heritage</h2>
            <p className="text-gray-600 leading-relaxed">
              Established in Mayfair, London, Four Motion Cars has been the cornerstone of luxury automotive excellence for over two decades. Our commitment to providing the finest vehicles and exceptional service has made us a trusted name in the industry.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Promise</h2>
            <p className="text-gray-600 leading-relaxed">
              We believe in delivering more than just vehicles; we provide an experience. Every car in our collection is meticulously selected and maintained to ensure the highest standards of quality and performance.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <Award className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Excellence</h3>
            <p className="text-gray-600">Committed to the highest standards</p>
          </div>
          <div className="text-center">
            <Shield className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Trust</h3>
            <p className="text-gray-600">Building lasting relationships</p>
          </div>
          <div className="text-center">
            <Clock className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Service</h3>
            <p className="text-gray-600">Available when you need us</p>
          </div>
          <div className="text-center">
            <Users className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community</h3>
            <p className="text-gray-600">Part of London's automotive culture</p>
          </div>
        </div>

        <div className="bg-gray-900 text-white rounded-xl p-12 transform hover:scale-[1.02] transition-transform duration-300">
          <h2 className="text-3xl font-bold mb-6">Why Choose Four Motion Cars?</h2>
          <ul className="grid md:grid-cols-2 gap-6">
            <li className="flex items-start space-x-3">
              <div className="h-2 w-2 bg-indigo-600 rounded-full mt-2.5" />
              <span>Curated selection of premium vehicles</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="h-2 w-2 bg-indigo-600 rounded-full mt-2.5" />
              <span>Expert automotive knowledge</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="h-2 w-2 bg-indigo-600 rounded-full mt-2.5" />
              <span>Transparent pricing and documentation</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="h-2 w-2 bg-indigo-600 rounded-full mt-2.5" />
              <span>Comprehensive after-sales support</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}