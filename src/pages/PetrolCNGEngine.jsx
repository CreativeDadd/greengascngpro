import React from 'react';
import { Link } from 'react-router-dom';
import cngKITimg from '../assets/images/cngKITimg.jpg';

const PetrolCNGEngine = () => {
  return (
    <div className="bg-gray-100 min-h-screen mt-11">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex-shrink-0">
            <img className="h-96 w-full object-cover" src={cngKITimg} alt="Petrol Engine Conversion Kit" />
          </div>
          <div className="p-8 bg-green-50">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Petrol Engine Conversion Kit</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The Petrol Engine Conversion Kit allows you to switch your petrol engine to use Compressed Natural Gas (CNG), offering significant cost savings and cleaner energy. With a simple digital button on your dashboard, you can easily switch between petrol and CNG.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Key Features:</h3>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Switch between petrol and CNG with a digital dashboard button</li>
              <li>Significant fuel cost savings using CNG</li>
              <li>Reduces emissions for a cleaner environment</li>
              <li>Maintains engine performance and efficiency</li>
              <li>Easy installation and minimal maintenance</li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Why Choose Our Conversion Kit?</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Developed by CNG technology experts, our conversion kit ensures seamless transition and optimal performance. Enjoy the benefits of lower operational costs and reduced environmental impact, without compromising on engine reliability.
            </p>
            <div className="mt-6">
              <Link to="/products" className="text-green-600 hover:text-green-700 font-semibold">Back to Products</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetrolCNGEngine;
