import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import sustainability from '../assets/images/sustainability.jpg';
import aboutimg from '../assets/images/aboutimg.png';

const AboutUs = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-purple-700 via-indigo-600 to-blue-700 min-h-screen py-16 px-8 sm:px-10 lg:px-12 text-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="lg:text-center mb-12"
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-base text-yellow-400 font-semibold tracking-wider uppercase">
            About Us
          </h2>
          <p className="mt-4 text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
            GreenGas (CNG) Technologies Limited
          </p>
          <p className="mt-6 max-w-2xl text-xl text-gray-300 lg:mx-auto">
            Leading the way in cleaner energy with comprehensive CNG conversion technologies, helping you save big and go green.
          </p>
        </motion.div>

        <motion.div
          className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center mb-12"
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ delay: 0.4 }}
        >
          <div>
            <h3 className="text-4xl font-bold text-white sm:text-5xl mb-6">
              Our CNG Conversion Services
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              We specialize in high-quality CNG conversion services for a variety of vehicles and engines, ensuring efficiency and substantial fuel savings.
            </p>
            <ul className="text-lg text-gray-300 space-y-3 list-disc list-inside">
              <li>Petrol cars and buses</li>
              <li>Distribution vans</li>
              <li>Tricycles</li>
              <li>Diesel trucks and trailers</li>
              <li>SUVs</li>
              <li>Heavy-duty engines</li>
            </ul>
            <p className="text-lg text-gray-300 leading-relaxed mt-6">
              Our state-of-the-art CNG kits guarantee seamless integration, allowing clients to reduce fuel costs, lower emissions, and adopt a sustainable energy solution.
            </p>
          </div>
          <motion.div
            className="mt-12 lg:mt-0"
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ delay: 0.6 }}
          >
            <img
              className="w-full rounded-xl shadow-xl"
              src={aboutimg}
              alt="Engineering Tech"
              loading="lazy"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-16"
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-4xl font-bold text-white text-center mb-8 sm:text-5xl">
            Why Choose Us?
          </h3>
          <div className="lg:flex lg:justify-center">
            <div className="max-w-lg mx-auto lg:max-w-7xl lg:grid lg:grid-cols-3 lg:gap-16">
              <motion.div
                className="text-center mb-12 lg:mb-0"
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ delay: 1.0 }}
              >
                <img
                  className="h-16 w-16 mx-auto mb-4"
                  src="https://img.icons8.com/color/96/000000/gas.png"
                  alt="Innovative Solutions"
                />
                <h4 className="text-lg font-semibold text-white mb-2">Innovative Solutions</h4>
                <p className="text-base text-gray-300 leading-relaxed">
                  Our CNG conversion kits are built with the latest technologies, ensuring unmatched performance and efficiency.
                </p>
              </motion.div>

              <motion.div
                className="text-center mb-12 lg:mb-0"
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ delay: 1.2 }}
              >
                <img
                  className="h-16 w-16 mx-auto mb-4"
                  src={sustainability}
                  alt="Sustainability"
                />
                <h4 className="text-lg font-semibold text-white mb-2">Sustainability</h4>
                <p className="text-base text-gray-300 leading-relaxed">
                  Our solutions help reduce emissions, providing a cleaner, greener alternative to traditional fuel options.
                </p>
              </motion.div>

              <motion.div
                className="text-center"
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ delay: 1.4 }}
              >
                <Link to="/contactlist">
                  <img
                    className="h-16 w-16 mx-auto mb-4"
                    src="https://img.icons8.com/color/96/000000/technical-support.png"
                    alt="Customer Support"
                  />
                </Link>
                <Link to="/contactlist">
                  <h4 className="text-lg font-semibold underline text-white mb-2">
                    Customer Support
                  </h4>
                </Link>
                <p className="text-base text-gray-300 leading-relaxed">
                  Our dedicated support team ensures you're covered every step of the way, from consultation to conversion.
                </p>
              </motion.div>
            </div>
          </div>
          <Link
                to='/learnmore'
                className="w-full flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-green-800 bg-white hover:bg-gray-100 md:py-3 md:text-lg md:px-8"
              >
                Learn More...
              </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutUs;


// import React from 'react';
// import { motion } from 'framer-motion';
// import { Link } from'react-router-dom';
// import sustainability from '../assets/images/sustainability.jpg';
// import aboutimg from '../assets/images/aboutimg.png';

// const AboutUs = () => {
//   const variants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <motion.div 
//       initial="hidden" 
//       animate="visible" 
//       variants={variants} 
//       transition={{ duration: 0.5 }}
//       className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 min-h-screen py-12 px-4 sm:px-6 lg:px-8 text-white mt-10"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div 
//           className="lg:text-center" 
//           initial="hidden" 
//           animate="visible" 
//           variants={variants} 
//           transition={{ delay: 0.2 }}
//         >
//           <h2 className="text-base text-yellow-300 font-semibold tracking-wide uppercase">About Us</h2>
//           <p className="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-white sm:text-5xl">
//             GreenGas (CNG) Technologies Limited
//           </p>
//           <p className="mt-4 max-w-2xl text-xl text-gray-200 lg:mx-auto">
//             Revolutionizing sustainable energy solutions through comprehensive CNG conversion technologies.
//           </p>
//         </motion.div>

//         <motion.div 
//           className="mt-10 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center" 
//           initial="hidden" 
//           animate="visible" 
//           variants={variants} 
//           transition={{ delay: 0.4 }}
//         >
//           <div>
//             <h3 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
//               Our CNG Conversion Services
//             </h3>
//             <p className="mt-3 max-w-3xl text-lg text-gray-200">
//               At GreenGas (CNG) Technologies Limited, we are committed to offering top-tier CNG conversion services for a wide range of vehicles and engines. Our expertise includes:
//             </p>
//             <ul className="mt-3 max-w-3xl text-lg text-gray-200 list-disc list-inside">
//               <li>Petrol cars and buses</li>
//               <li>Distribution vans</li>
//               <li>Tricycles</li>
//               <li>Diesel trucks and trailers</li>
//               <li>SUVs</li>
//               <li>Heavy-duty engines</li>
//             </ul>
//             <p className="mt-3 max-w-3xl text-lg text-gray-200">
//               By converting to CNG, our clients benefit from significant cost savings on fuel, reduced emissions, and a sustainable alternative to traditional fuel options. Our cutting-edge CNG conversion kits are designed for seamless integration, ensuring optimal performance and efficiency.
//             </p>
//             <p className="mt-3 max-w-3xl text-lg text-gray-200">
//               Our team of experts is dedicated to delivering high-quality conversion services, backed by years of experience and a commitment to innovation. Whether it's for personal vehicles, commercial fleets, or industrial machinery, we provide solutions that meet your energy needs.
//             </p>
//           </div>
//           <motion.div 
//             className="mt-10 lg:mt-0" 
//             initial="hidden" 
//             animate="visible" 
//             variants={variants} 
//             transition={{ delay: 0.6 }}
//           >
//             <img
//               className="mx-auto rounded-lg shadow-lg"
//               src={aboutimg}
//               alt="Engineering Tech" 
//               loading='lazy'
//             />
//           </motion.div>
//         </motion.div>

//         <motion.div 
//           className="mt-12" 
//           initial="hidden" 
//           animate="visible" 
//           variants={variants} 
//           transition={{ delay: 0.8 }}
//         >
//           <h3 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl lg:text-center">
//             Why Choose Us?
//           </h3>
//           <div className="mt-8 lg:flex lg:justify-center">
//             <div className="max-w-md mx-auto lg:max-w-7xl lg:grid lg:grid-cols-3 lg:gap-8">
//               <motion.div 
//                 className="flex flex-col items-center" 
//                 initial="hidden" 
//                 animate="visible" 
//                 variants={variants} 
//                 transition={{ delay: 1.0 }}
//               >
//                 <div className="flex-shrink-0">
//                   <img
//                     className="h-12 w-12"
//                     src="https://img.icons8.com/color/48/000000/gas.png"
//                     alt="Innovative Solutions"
//                   />
//                 </div>
//                 <div className="mt-2">
//                   <h4 className="text-lg leading-6 font-medium text-white text-center">Innovative Solutions</h4>
//                   <p className="mt-1 text-base text-gray-200 text-center">
//                     We utilize the latest technology to ensure our CNG conversion kits provide optimal performance and efficiency.
//                   </p>
//                 </div>
//               </motion.div>
//               <motion.div 
//                 className="mt-10 lg:mt-0 flex flex-col items-center" 
//                 initial="hidden" 
//                 animate="visible" 
//                 variants={variants} 
//                 transition={{ delay: 1.2 }}
//               >
//                 <div className="flex-shrink-0">
//                   <img
//                     className="h-12 w-12"
//                     src={sustainability}
//                     alt="sust"
//                   />
//                 </div>
//                 <div className="mt-2">
//                   <h4 className="text-lg leading-6 font-medium text-white text-center">Sustainability</h4>
//                   <p className="mt-1 text-base text-gray-200 text-center">
//                     Our solutions help reduce emissions and promote a cleaner, greener environment.
//                   </p>
//                 </div>
//               </motion.div>
//               <motion.div 
//                 className="mt-10 lg:mt-0 flex flex-col items-center" 
//                 initial="hidden" 
//                 animate="visible" 
//                 variants={variants} 
//                 transition={{ delay: 1.4 }}
//               >
//                 <div className="flex-shrink-0">
//                   <Link to="/contactlist">
//                   <img
//                     className="h-12 w-12"
//                     src="https://img.icons8.com/color/48/000000/technical-support.png"
//                     alt="Customer Support"
//                   />
//                   </Link>
//                 </div>
//                 <div className="mt-2">
//                 <Link to="/contactlist">
//                   <h4 className="text-lg leading-6 underline font-medium text-white text-center">Customer Support</h4></Link>
//                   <p className="mt-1 text-base text-gray-200 text-center">
//                     Our dedicated team is here to provide you with the best service and support every step of the way.
//                   </p>
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </motion.div>

//       </div>
//     </motion.div>
//   );
// };

// export default AboutUs;
