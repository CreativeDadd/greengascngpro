import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/images/logo.png';

const Hero = () => {
  return (
    <div className="relative bg-green-800 overflow-hidden h-screen">
      <div className="absolute inset-0">
        {/* Uncomment the following lines if you want to add a background image */}
        {/* <img className="h-full w-full object-cover" src={cngHero3} alt="Green landscape" /> */}
        {/* <div className="absolute inset-0 bg-green-800 opacity-50"></div> */}
      </div>
      <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-screen-lg mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center justify-center mb-1">
            <img
              className="h-24 w-auto sm:h-32 lg:h-40"
              src={logo}
              alt="Green landscape"
            />
          </div>
          <h1 className="text-2xl font-extrabold text-white sm:text-3xl md:text-4xl lg:text-5xl">
            <span className="block">Welcome to</span>
            <span className="block text-green-400">GreenGas (CNG) Technologies Limited</span>
          </h1>
          <motion.p 
            className="mt-3 text-sm text-gray-300 sm:mt-5 sm:text-base md:text-lg lg:text-xl sm:max-w-xl sm:mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          > "Unlock massive savings and go green with our advanced Compressed Natural Gas (CNG) conversion solutions. Transform your vehicles and generators to run cleaner, last longer, and cut fuel costs by minimum 50%. Start saving big today!"
          </motion.p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
            <motion.div 
              className="rounded-md shadow"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <Link
                to='/learnmore'
                className="w-full flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-green-800 bg-white hover:bg-gray-100 md:py-3 md:text-lg md:px-8"
              >
                Learn More
              </Link>
            </motion.div>
            <motion.div 
              className="mt-3 sm:mt-0 sm:ml-3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              <Link
                to="/getstarted"
                className="w-full flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-3 md:text-lg md:px-8"
              >
                Get Started
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;





