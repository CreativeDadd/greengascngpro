// // // // import React from 'react';
// // // // import { Link } from 'react-router-dom';
// // // // import { motion } from 'framer-motion';

// // // // const Hero = () => {
// // // //   return (
// // // //     <div className="relative bg-green-800 overflow-hidden">
// // // //       <div className="absolute inset-0">
// // // //         <img
// // // //           className="h-full w-full object-cover"
// // // //           src="https://images.unsplash.com/photo-1543946602-8f30ea593df9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
// // // //           alt="Green landscape"
// // // //         />
// // // //         <div className="absolute inset-0 bg-green-800 opacity-50"></div>
// // // //       </div>
// // // //       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // // //         <div className="flex items-center justify-center h-screen">
// // // //           <motion.div 
// // // //             className="text-center"
// // // //             initial={{ opacity: 0, y: 50 }}
// // // //             animate={{ opacity: 1, y: 0 }}
// // // //             transition={{ duration: 1 }}
// // // //           >
// // // //             <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
// // // //               <span className="block">Welcome to</span>
// // // //               <span className="block text-green-400">GreenGas Technologies Limited</span>
// // // //             </h1>
// // // //             <motion.p 
// // // //               className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl"
// // // //               initial={{ opacity: 0 }}
// // // //               animate={{ opacity: 1 }}
// // // //               transition={{ delay: 0.5, duration: 1 }}
// // // //             >
// // // //               Leading the way in clean and sustainable Compressed Natural Gas (CNG) solutions.
// // // //             </motion.p>
// // // //             <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
// // // //               <motion.div 
// // // //                 className="rounded-md shadow"
// // // //                 initial={{ opacity: 0, scale: 0.8 }}
// // // //                 animate={{ opacity: 1, scale: 1 }}
// // // //                 transition={{ delay: 1, duration: 0.5 }}
// // // //               >
// // // //                 <Link
// // // //                   to='/learnmore'
// // // //                   className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-800 bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10"
// // // //                 >
// // // //                   Learn More
// // // //                 </Link>
// // // //               </motion.div>
// // // //               <motion.div 
// // // //                 className="mt-3 sm:mt-0 sm:ml-3"
// // // //                 initial={{ opacity: 0, scale: 0.8 }}
// // // //                 animate={{ opacity: 1, scale: 1 }}
// // // //                 transition={{ delay: 1.5, duration: 0.5 }}
// // // //               >
// // // //                 <Link
// // // //                   to="/getstarted"
// // // //                   className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
// // // //                 >
// // // //                   Get Started
// // // //                 </Link>
// // // //               </motion.div>
// // // //             </div>
// // // //           </motion.div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Hero;


// // // import React from 'react';
// // // import { Link } from 'react-router-dom';
// // // import { motion } from 'framer-motion';
// // // import { Carousel } from 'react-responsive-carousel';
// // // import 'react-responsive-carousel/lib/styles/carousel.min.css';

// // // const slides = [
// // //   {
// // //     image: 'https://images.unsplash.com/photo-1543946602-8f30ea593df9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
// // //     heading: 'Welcome to GreenGas Technologies Limited',
// // //     subheading: 'Leading the way in clean and sustainable Compressed Natural Gas (CNG) solutions.',
// // //   },
// // //   {
// // //     image: 'https://images.unsplash.com/photo-1580910057072-99c0dbdd25c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
// // //     heading: 'Innovative CNG Solutions',
// // //     subheading: 'Providing cutting-edge technology for efficient and eco-friendly energy.',
// // //   },
// // //   {
// // //     image: 'https://images.unsplash.com/photo-1562564055-e0c1ef08f9e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
// // //     heading: 'Sustainable Energy for the Future',
// // //     subheading: 'Join us in making a positive impact on the environment.',
// // //   }
// // // ];

// // // const Hero = () => {
// // //   return (
// // //     <div className="relative overflow-hidden">
// // //       <Carousel 
// // //         autoPlay 
// // //         infiniteLoop 
// // //         showThumbs={false} 
// // //         showStatus={false} 
// // //         showArrows={false}
// // //         interval={5000}
// // //       >
// // //         {slides.map((slide, index) => (
// // //           <div key={index} className="relative bg-green-800 h-screen">
// // //             <img className="h-full w-full object-cover" src={slide.image} alt={`Slide ${index + 1}`} />
// // //             <div className="absolute inset-0 bg-green-800 opacity-50"></div>
// // //             <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
// // //               <motion.div 
// // //                 className="text-center"
// // //                 initial={{ opacity: 0, y: 50 }}
// // //                 animate={{ opacity: 1, y: 0 }}
// // //                 transition={{ duration: 1 }}
// // //               >
// // //                 <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
// // //                   <span className="block">{slide.heading}</span>
// // //                 </h1>
// // //                 <motion.p 
// // //                   className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl"
// // //                   initial={{ opacity: 0 }}
// // //                   animate={{ opacity: 1 }}
// // //                   transition={{ delay: 0.5, duration: 1 }}
// // //                 >
// // //                   {slide.subheading}
// // //                 </motion.p>
// // //                 <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
// // //                   <motion.div 
// // //                     className="rounded-md shadow"
// // //                     initial={{ opacity: 0, scale: 0.8 }}
// // //                     animate={{ opacity: 1, scale: 1 }}
// // //                     transition={{ delay: 1, duration: 0.5 }}
// // //                   >
// // //                     <Link
// // //                       to='/learnmore'
// // //                       className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-800 bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10"
// // //                     >
// // //                       Learn More
// // //                     </Link>
// // //                   </motion.div>
// // //                   <motion.div 
// // //                     className="mt-3 sm:mt-0 sm:ml-3"
// // //                     initial={{ opacity: 0, scale: 0.8 }}
// // //                     animate={{ opacity: 1, scale: 1 }}
// // //                     transition={{ delay: 1.5, duration: 0.5 }}
// // //                   >
// // //                     <Link
// // //                       to="/getstarted"
// // //                       className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
// // //                     >
// // //                       Get Started
// // //                     </Link>
// // //                   </motion.div>
// // //                 </div>
// // //               </motion.div>
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </Carousel>
// // //     </div>
// // //   );
// // // };

// // // export default Hero;


// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import { motion } from 'framer-motion';
// // import { Carousel } from 'react-responsive-carousel';
// // import 'react-responsive-carousel/lib/styles/carousel.min.css';

// // const slides = [
// //   {
// //     image: 'https://images.unsplash.com/photo-1543946602-8f30ea593df9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
// //     heading: 'Welcome to GreenGas Technologies Limited',
// //     subheading: 'Leading the way in clean and sustainable Compressed Natural Gas (CNG) solutions.',
// //   },
// //   {
// //     image: 'https://images.unsplash.com/photo-1580910057072-99c0dbdd25c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
// //     heading: 'Innovative CNG Solutions',
// //     subheading: 'Providing cutting-edge technology for efficient and eco-friendly energy.',
// //   },
// //   {
// //     image: 'https://images.unsplash.com/photo-1562564055-e0c1ef08f9e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
// //     heading: 'Sustainable Energy for the Future',
// //     subheading: 'Join us in making a positive impact on the environment.',
// //   }
// // ];

// // const Hero = () => {
// //   return (
// //     <div className="relative overflow-hidden">
// //       <Carousel 
// //         autoPlay 
// //         infiniteLoop 
// //         showThumbs={false} 
// //         showStatus={false} 
// //         showArrows={false}
// //         interval={5000}
// //       >
// //         {slides.map((slide, index) => (
// //           <div key={index} className="relative bg-green-800 h-screen">
// //             <img className="h-full w-full object-cover" src={slide.image} alt={`Slide ${index + 1}`} />
// //             <div className="absolute inset-0 bg-green-800 opacity-50"></div>
// //             <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
// //               <motion.div 
// //                 className="text-center"
// //                 initial={{ opacity: 0, y: 50 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 1 }}
// //               >
// //                 <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
// //                   <span className="block">{slide.heading}</span>
// //                 </h1>
// //                 <motion.p 
// //                   className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl"
// //                   initial={{ opacity: 0 }}
// //                   animate={{ opacity: 1 }}
// //                   transition={{ delay: 0.5, duration: 1 }}
// //                 >
// //                   {slide.subheading}
// //                 </motion.p>
// //                 <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
// //                   <motion.div 
// //                     className="rounded-md shadow"
// //                     initial={{ opacity: 0, scale: 0.8 }}
// //                     animate={{ opacity: 1, scale: 1 }}
// //                     transition={{ delay: 1, duration: 0.5 }}
// //                   >
// //                     <Link
// //                       to='/learnmore'
// //                       className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-800 bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10"
// //                     >
// //                       Learn More
// //                     </Link>
// //                   </motion.div>
// //                   <motion.div 
// //                     className="mt-3 sm:mt-0 sm:ml-3"
// //                     initial={{ opacity: 0, scale: 0.8 }}
// //                     animate={{ opacity: 1, scale: 1 }}
// //                     transition={{ delay: 1.5, duration: 0.5 }}
// //                   >
// //                     <Link
// //                       to="/getstarted"
// //                       className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
// //                     >
// //                       Get Started
// //                     </Link>
// //                   </motion.div>
// //                 </div>
// //               </motion.div>
// //             </div>
// //           </div>
// //         ))}
// //       </Carousel>
// //     </div>
// //   );
// // };

// // export default Hero;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

// const slides = [
//   {
//     image: 'slide1',
//     heading: 'Welcome to GreenGas Technologies Limited',
//     subheading: 'Leading the way in clean and sustainable Compressed Natural Gas (CNG) solutions.',
//   },
//   {
//     image: '/images/slide2.jpg',
//     heading: 'Innovative CNG Solutions',
//     subheading: 'Providing cutting-edge technology for efficient and eco-friendly energy.',
//   },
//   {
//     image: '/images/slide3.jpg',
//     heading: 'Sustainable Energy for the Future',
//     subheading: 'Join us in making a positive impact on the environment.',
//   }
// ];

// const Hero = () => {
//   return (
//     <div className="relative overflow-hidden">
//       <Carousel 
//         autoPlay 
//         infiniteLoop 
//         showThumbs={false} 
//         showStatus={false} 
//         showArrows={false}
//         interval={3000}
//       >
//         {slides.map((slide, index) => (
//           <div key={index} className="relative bg-green-800 h-screen">
//             <img className="h-full w-full object-cover" src={slide.image} alt={`Slide ${index + 1}`} />
//             <div className="absolute inset-0 bg-green-800 opacity-50"></div>
//             <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
//               <motion.div 
//                 className="text-center"
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 1 }}
//               >
//                 <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
//                   <span className="block">{slide.heading}</span>
//                 </h1>
//                 <motion.p 
//                   className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.5, duration: 1 }}
//                 >
//                   {slide.subheading}
//                 </motion.p>
//                 <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
//                   <motion.div 
//                     className="rounded-md shadow"
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ delay: 1, duration: 0.5 }}
//                   >
//                     <Link
//                       to='/learnmore'
//                       className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-800 bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10"
//                     >
//                       Learn More
//                     </Link>
//                   </motion.div>
//                   <motion.div 
//                     className="mt-3 sm:mt-0 sm:ml-3"
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ delay: 1.5, duration: 0.5 }}
//                   >
//                     <Link
//                       to="/getstarted"
//                       className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
//                     >
//                       Get Started
//                     </Link>
//                   </motion.div>
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         ))}
//       </Carousel>
//     </div>
//   );
// };

// export default Hero;


import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const slides = [
  {
    image: '/image/slide1.jpg',
    heading: 'Welcome to GreenGas Technologies Limited',
    subheading: 'Leading the way in clean and sustainable Compressed Natural Gas (CNG) solutions.',
  },
  {
    image: '/image/slide2.jpg',
    heading: 'Innovative CNG Solutions',
    subheading: 'Providing cutting-edge technology for efficient and eco-friendly energy.',
  },
  {
    image: '/image/slide3.jpg',
    heading: 'Sustainable Energy for the Future',
    subheading: 'Join us in making a positive impact on the environment.',
  }
];

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <Carousel 
        autoPlay 
        infiniteLoop 
        showThumbs={false} 
        showStatus={false} 
        showArrows={false}
        interval={3000}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative bg-green-800 h-screen">
            <img className="h-full w-full object-cover" src={slide.image} alt={`Slide ${index + 1}`} />
            <div className="absolute inset-0 bg-green-800 opacity-50"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block">{slide.heading}</span>
                </h1>
                <motion.p 
                  className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                >
                  {slide.subheading}
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
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
