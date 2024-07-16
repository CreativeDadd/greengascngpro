import React from 'react';
import { Link } from 'react-router-dom';
import cngDieselGenset from '../assets/images/cngDieselGenset.jpg'; // Adjust the path as needed

const DieselCngGenset = () => {
  return (
    <div className="bg-gray-100 min-h-screen mt-16">
      <h1 className='text-2xl font-semibold text-center mt-5 '>Converting Diesel Engine to Run on Dual-Fuel CNG + Diesel</h1>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex-shrink-0">
            <img className="h-96 w-full object-cover" src={cngDieselGenset} alt="Diesel Engine Power Generator Conversion Kit" />
          </div>
          <div className="p-8 bg-green-50">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Diesel Engine Power Generator Conversion Kit</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The Diesel Engine Power Generator Conversion Kit is designed to convert traditional diesel generators to run on Compressed Natural Gas (CNG). This conversion offers a more economical and environmentally friendly energy solution.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Key Features:</h3>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Reduces fuel costs significantly by utilizing CNG</li>
              <li>Lowers emissions, contributing to a cleaner environment</li>
              <li>Maintains performance and efficiency of diesel generators</li>
              <li>Easy installation and minimal maintenance</li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Why Choose Our Conversion Kit?</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our conversion kit is developed by experts in CNG technology, ensuring a seamless and efficient transition from diesel to CNG. With our kit, you can enjoy the benefits of reduced operational costs and a smaller carbon footprint, without compromising on performance.
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

export default DieselCngGenset;
