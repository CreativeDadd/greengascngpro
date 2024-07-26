import React from 'react';
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <img
              className="h-8 w-auto mb-4"
              src={logo}
              alt="GreenGas Technologies"
            />
            <p>
              GreenGas (CNG) Technologies Limited is dedicated to providing top-notch conversion solutions for petrol and diesel engines, including CNG kits for cars, buses, distribution vans, tricycles, diesel trucks, trailers, vans, SUVs, and heavy-duty engines.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-2">
            <h3 className="text-lg font-bold mb-4">Navigation</h3>
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/about" className="hover:underline">About Us</Link>
            <Link to="/products" className="hover:underline">Products</Link>
            <Link to="/blog" className="hover:underline">Blog</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </div>

          {/* Contact Info and Subscription */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p>
              Email: <a href="mailto:greengasc@gmail.com" className="hover:underline">greengasc@gmail.com</a>
            </p>
            <p>
              Phone: <a href="tel:+2347035391488" className="hover:underline">+2347035391488</a>
            </p>
            <p>
              Address: No.9 NERDIC Road, Alausa, Ikeja, Lagos, Nigeria.
            </p>
            <form className="mt-4">
              <label htmlFor="email" className="block text-sm font-medium text-white">Subscribe to our newsletter</label>
              <div className="mt-1 flex">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="px-4 py-2 border border-transparent text-sm font-medium rounded-r-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-200">
          &copy; {new Date().getFullYear()} GreenGas (CNG) Technologies Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
