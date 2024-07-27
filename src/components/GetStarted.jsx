import React from 'react';
import { Link } from 'react-router-dom'
import cngkit1 from '../assets/images/cngkit1.jpg';
import daughterSation from '../assets/images/daughterSation.jpg';
import truckscetch from '../assets/images/truckscetch.jpg';
import dieselcng from '../assets/images/dieselcng.jpg';


const GetStarted = () => {
  return (
    <div className="bg-gray-200 min-h-screen py-10 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-green-800 text-center mb-10">Get Started with GreenGas Technologies</h1>

        {/* Petrol CNG Conversion Kits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-green-700 mb-4">Petrol CNG Conversion Kits</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-700 mb-4">
              Our Petrol CNG Conversion Kits are designed to help you transition from petrol to compressed natural gas (CNG) seamlessly. Our kits are reliable, efficient, and environmentally friendly.
            </p>
            <Link to='PetrolCarsCNGSavings'>
            <img
              className="w-full h-64 object-cover rounded-lg shadow-lg"
              src={cngkit1}
              alt="Petrol CNG Conversion Kit"
            />
            </Link>
          </div>
        </section>

        {/* Diesel CNG Conversion Kits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-green-700 mb-4">Diesel CNG Conversion Kits</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-700 mb-4">
              Convert your diesel vehicles to CNG with our advanced Diesel CNG Conversion Kits. Enjoy the benefits of cleaner fuel while maintaining performance and efficiency.
            </p>
            <Link to='/dieseltrucksavings'>
            <img
              className="w-full h-64 object-cover rounded-lg shadow-lg"
              src={truckscetch}
              alt="Diesel CNG Conversion Kit"
            />
            </Link>
          </div>
        </section>

        {/* Diesel Engine Power Generator Conversion Kits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-green-700 mb-4">Diesel Engine Power Generator Conversion Kits</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-700 mb-4">
              Our conversion kits for diesel engine power generators offer a cost-effective solution to reduce emissions and fuel costs. Convert your generators to CNG and contribute to a greener environment.
            </p>
            <Link to='/getstarted/dieselgensavings'>
            <img
              className="w-full h-64 object-cover rounded-lg shadow-lg"
              src={dieselcng}
              alt="Diesel Engine Power Generator Conversion Kit"
            />
            </Link>
          </div>
        </section>

        {/* Daughter Stations Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-green-700 mb-4">Daughter Stations</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-700 mb-4">
              Our Daughter Stations provide mobile fueling solutions for areas without access to fixed CNG stations. They are versatile, reliable, and perfect for expanding your CNG infrastructure.
            </p>
            <img
              className="w-full h-64 object-cover rounded-lg shadow-lg"
              src={daughterSation}
              alt="Daughter Station"
            />
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold text-green-700 mb-4">Connect with Us</h2>
          <p className="text-gray-700 mb-6">We are here to help you with all your CNG conversion needs. Get in touch with us through any of the following methods:</p>
          <div className="flex flex-col sm:flex-row sm:justify-center gap-6">
            <a
              href="mailto:info@greengas.com"
              className="inline-block px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
            >
              Email Us
            </a>
            <a
              href="https://wa.me/1234567890"
              className="inline-block px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
            >
              WhatsApp Us
            </a>
            <Link
              to="/contact"
              className="inline-block px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
            >
              Contact Form
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GetStarted;
