// import React from 'react';
// import truckscetch from '../assets/images/truckscetch.jpg';
// import { motion } from 'framer-motion';

// const CNGPetrolCarsCNGSavings = () => {
//   const petrolPricePerLiter = 650;
//   const cngPricePerScm = 200;
//   const distanceKm = 6000;
//   const petrolConsumptionPer10Km = 1; // in liters
//   const cngConsumptionPer14Km = 1; // in scm

//   const petrolCost = (distanceKm / 10) * petrolConsumptionPer10Km * petrolPricePerLiter;
//   const cngCost = (distanceKm / 14) * cngConsumptionPer14Km * cngPricePerScm;
//   const totalSavings = petrolCost - cngCost;

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
//         <div className="lg:text-center">
//           <motion.h2 
//             className="text-base text-yellow-300 font-semibold tracking-wide uppercase"
//             variants={variants}
//           >
//             Cost Savings
//           </motion.h2>
//           <motion.h1 
//             className="text-4xl font-extrabold text-green-700 mb-4 text-center"
//             variants={variants}
//             transition={{ delay: 0.2 }}
//           >
//             Fuel Cost Savings with Dual-Fuel System
//           </motion.h1>
//           <motion.p 
//             className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl"
//             variants={variants}
//             transition={{ delay: 0.4 }}
//           >
//             Compare the cost of running 6,000 km on petrol versus CNG
//           </motion.p>
//           <motion.img
//             className="w-full h-64 object-cover mb-8 rounded-lg shadow-md mt-6"
//             src={truckscetch}
//             alt="Fuel Cost Comparison"
//             variants={variants} 
//             transition={{ delay: 0.6 }}
//           />
//         </div>

//         <div className="mt-10 prose prose-green prose-lg mx-auto text-gray-100 md:px-24">
//           <motion.div
//             className="mb-8"
//             variants={variants}
//             transition={{ delay: 0.8 }}
//           >
//             <h2 className="text-3xl font-semibold text-white">Running Cost on Petrol</h2>
//             <p className="text-xl">Cost of running 6,000 km on petrol:</p>
//             <p className="text-2xl font-bold text-yellow-300">₦{petrolCost.toLocaleString()}</p>
//           </motion.div>

//           <motion.div
//             className="mb-8"
//             variants={variants}
//             transition={{ delay: 1.0 }}
//           >
//             <h2 className="text-3xl font-semibold text-white">Running Cost on CNG</h2>
//             <p className="text-xl">Cost of running 6,000 km on CNG:</p>
//             <p className="text-2xl font-bold text-yellow-300">₦{cngCost.toLocaleString()}</p>
//           </motion.div>

//           <motion.div
//             className="mb-8"
//             variants={variants}
//             transition={{ delay: 1.2 }}
//           >
//             <h2 className="text-3xl font-semibold text-white">Total Savings</h2>
//             <p className="text-xl">Total savings when running on CNG:</p>
//             <p className="text-2xl font-bold text-yellow-300">₦{totalSavings.toLocaleString()}</p>
//           </motion.div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default CNGPetrolCarsCNGSavings;

import React from 'react';
import cngcars from '../assets/images/cngcars.jpg';
import { motion } from 'framer-motion';

const PetrolCarsCNGSavings = () => {
  const petrolPricePerLiter = 650;
  const cngPricePerScm = 200;
  const distanceKm = 6000;
  const petrolConsumptionPer10Km = 1; // in liters
  const cngConsumptionPer14Km = 1; // in scm

  const petrolCost = (distanceKm / 10) * petrolConsumptionPer10Km * petrolPricePerLiter;
  const cngCost = (distanceKm / 14) * cngConsumptionPer14Km * cngPricePerScm;
  const totalSavings = petrolCost - cngCost;

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 min-h-screen py-12 px-4 sm:px-6 lg:px-8 text-white mt-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <motion.h2 
            className="text-base text-yellow-300 font-semibold tracking-wide uppercase"
            variants={variants}
          >
            Cost Savings
          </motion.h2>
          <motion.h1 
            className="text-4xl font-extrabold text-green-700 mb-4 text-center"
            variants={variants}
            transition={{ delay: 0.2 }}
          >
            Fuel Cost Savings with Dual-Fuel System
          </motion.h1>
          <motion.p 
            className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl"
            variants={variants}
            transition={{ delay: 0.4 }}
          >
            Compare the cost of running 6,000 km on petrol versus CNG
          </motion.p>
          <motion.img
            className="w-full h-64 object-cover mb-8 rounded-lg shadow-md mt-6"
            src={cngcars}
            alt="Fuel Cost Comparison"
            variants={variants} 
            transition={{ delay: 0.6 }}
          />
        </div>

        <div className="mt-10 prose prose-green prose-lg mx-auto text-gray-100 md:px-24">
          <motion.div
            className="mb-8"
            variants={variants}
            transition={{ delay: 0.8 }}
          >
            <h2 className="text-3xl font-semibold text-yellow-300">Petrol Cost Calculation</h2>
            <p className="text-lg">For every 10 km, the petrol consumption is 1 liter.</p>
            <p className="text-lg">Total liters of petrol for 6,000 km = 6,000 / 10 = 600 liters.</p>
            <p className="text-lg">Total cost of petrol = 600 liters * ₦650 = ₦390,000.</p>
            <p className="text-2xl font-bold text-yellow-300">Total Petrol Cost: ₦{petrolCost.toLocaleString()}</p>
          </motion.div>

          <motion.div
            className="mb-8"
            variants={variants}
            transition={{ delay: 1.0 }}
          >
            <h2 className="text-3xl font-semibold text-yellow-300">CNG Cost Calculation</h2>
            <p className="text-lg">For every 14 km, the CNG consumption is 1 scm.</p>
            <p className="text-lg">Total scm of CNG for 6,000 km = 6,000 / 14 = approximately 428.57 scm.</p>
            <p className="text-lg">Total cost of CNG = 428.57 scm * ₦200 = approximately ₦85,714.</p>
            <p className="text-2xl font-bold text-yellow-300">Total CNG Cost: ₦{cngCost.toLocaleString()}</p>
          </motion.div>

          <motion.div
            className="mb-8"
            variants={variants}
            transition={{ delay: 1.2 }}
          >
            <h2 className="text-3xl font-semibold text-yellow-300">Total Savings Calculation</h2>
            <p className="text-lg">Total savings = Petrol cost - CNG cost = ₦390,000 - ₦85,714 = approximately ₦304,286.</p>
            <p className="text-2xl font-bold text-yellow-300">Total Savings: ₦{totalSavings.toLocaleString()}</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default PetrolCarsCNGSavings;
