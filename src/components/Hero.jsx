// import React from 'react';
// import { Link } from 'react-router-dom';

// const Hero = () => {
//   return (
//     <div className="relative bg-green-800 overflow-hidden">
//       <div className="absolute inset-0">
//         <img
//           className="h-full w-full object-cover"
//           src="https://images.unsplash.com/photo-1543946602-8f30ea593df9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
//           alt="Green landscape"
//         />
//         <div className="absolute inset-0 bg-green-800 opacity-50"></div>
//       </div>
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-center h-screen">
//           <div className="text-center">
//             <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
//               <span className="block">Welcome to</span>
//               <span className="block text-green-400">GreenGas Technologies Limited</span>
//             </h1>
//             <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
//               Leading the way in clean and sustainable Compressed Natural Gas (CNG) solutions.
//             </p>
//             <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
//               <div className="rounded-md shadow">
//                 <Link
//                   to='/learnmore'
//                   className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-800 bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10"
//                 >
//                   Learn More
//                 </Link>
//               </div>
//               <div className="mt-3 sm:mt-0 sm:ml-3">
//                 <Link
//                   to="/getstarted"
//                   className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
//                 >
//                   Get Started
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative bg-green-800 overflow-hidden">
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1543946602-8f30ea593df9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
          alt="Green landscape"
        />
        <div className="absolute inset-0 bg-green-800 opacity-50"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-screen">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block">Welcome to</span>
              <span className="block text-green-400">GreenGas Technologies Limited</span>
            </h1>
            <motion.p 
              className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Leading the way in clean and sustainable Compressed Natural Gas (CNG) solutions.
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
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-800 bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10"
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
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
