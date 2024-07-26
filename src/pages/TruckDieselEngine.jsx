import React from 'react';
import { Link } from 'react-router-dom';
import truckscetch from '../assets/images/truckscetch.jpg'; 
 import { motion } from 'framer-motion'; 

const TruckDieselEngine = () => {
  return (
    <div className="bg-gray-100 min-h-screen mt-16">
      <h1 className="text-2xl font-semibold text-center mt-5">
        Converting Haulage Truck Diesel Engine to Run on Dual-Fuel CNG + Diesel
      </h1>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex-shrink-0">
          <motion.img
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 2 }}
              className="h-96 w-full object-cover"
              src={truckscetch}
              alt="Haulage Truck Diesel Engine Conversion Kit"
            />
          </div>
          <div className="p-8 bg-green-50">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Haulage Truck Diesel Engine Conversion Kit
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The Haulage Truck Diesel Engine Conversion Kit is designed to convert traditional diesel engines of haulage trucks to run on Compressed Natural Gas (CNG). This conversion offers a more economical and environmentally friendly energy solution.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Key Features:</h3>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Reduces fuel costs significantly by utilizing CNG</li>
              <li>Lowers emissions, contributing to a cleaner environment</li>
              <li>Maintains performance and efficiency of diesel engines</li>
              <li>Easy installation and minimal maintenance</li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Why Choose Our Conversion Kit?</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our conversion kit is developed by experts in CNG technology, ensuring a seamless and efficient transition from diesel to CNG. With our kit, you can enjoy the benefits of reduced operational costs and a smaller carbon footprint, without compromising on performance.
            </p>
            <div className="mt-6 flex justify-center">
              <Link
                to="/dieseltrucksavings"
                className="w-full max-w-xs flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
              >
                Learn More
              </Link>
            </div>
            <div className="mt-6 flex justify-center">
              <Link
                to="/products"
                className="text-green-600 hover:text-green-700 font-semibold"
              >
                Back to Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TruckDieselEngine;
