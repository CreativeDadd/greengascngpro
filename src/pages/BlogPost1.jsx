

// // import React from 'react';

// // const BlogPost1 = () => {
// //   return (
// //     <div className="bg-white py-12 mt-12">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="lg:text-center">
// //           <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Blog</h2>
// //           <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
// //             The Benefits of Converting Your Petrol Car to CNG
// //           </h1>
// //         </div>

// //         <div className="mt-10 prose prose-green prose-lg mx-auto text-gray-600 md:px-24">
// //           <p>
// //             With rising fuel prices and growing environmental concerns, many car owners are exploring alternative fuels to power their vehicles. Compressed Natural Gas (CNG) has emerged as a popular choice due to its economic and environmental benefits. If you're considering converting your petrol car to CNG, here are some compelling reasons to make the switch.
// //           </p>

// //           <h2>Cost Savings</h2>
// //           <p>
// //             One of the most significant advantages of converting your petrol car to CNG is the cost savings. CNG is considerably cheaper than petrol, which can lead to substantial savings over time. Although the initial conversion cost may seem high, the long-term savings on fuel expenses make it a financially sound decision.
// //           </p>

// //           <h2>Environmental Benefits</h2>
// //           <p>
// //             CNG is a cleaner-burning fuel compared to petrol. It produces fewer pollutants and greenhouse gases, which helps reduce your carbon footprint. By switching to CNG, you contribute to a healthier environment by lowering emissions of harmful substances such as carbon monoxide, nitrogen oxides, and particulate matter.
// //           </p>

// //           <h2>Engine Longevity</h2>
// //           <p>
// //             Using CNG can also extend the life of your engine. CNG combustion produces less residue and deposits, which means cleaner engine oil and fewer maintenance issues. This results in a longer-lasting engine with fewer repair costs.
// //           </p>

// //           <h2>Enhanced Safety</h2>
// //           <p>
// //             CNG is a safer fuel option due to its high ignition temperature and low flammability range. In the event of a leak, CNG disperses quickly into the atmosphere, reducing the risk of fire. Additionally, CNG tanks are built to rigorous safety standards, ensuring robust protection against impacts and extreme conditions.
// //           </p>

// //           <h2>Government Incentives</h2>
// //           <p>
// //             Many governments offer incentives and subsidies for vehicles converted to CNG. These can include tax rebates, reduced registration fees, and access to carpool lanes. These incentives further enhance the economic benefits of switching to CNG.
// //           </p>

// //           <h2>Availability and Convenience</h2>
// //           <p>
// //             The infrastructure for CNG refueling is expanding rapidly, making it increasingly convenient to find CNG stations. With advancements in technology, modern CNG refueling stations offer quick and efficient refueling services, ensuring minimal inconvenience for drivers.
// //           </p>

// //           <h2>Resale Value</h2>
// //           <p>
// //             Cars converted to CNG can have a higher resale value due to their lower running costs and environmental benefits. Prospective buyers are often willing to pay a premium for vehicles that promise long-term savings and reduced environmental impact.
// //           </p>

// //           <h2>Conclusion</h2>
// //           <p>
// //             Converting your petrol car to CNG is a smart choice for both your wallet and the environment. With cost savings, environmental benefits, enhanced safety, and potential government incentives, CNG conversion offers numerous advantages. As the CNG infrastructure continues to grow, making the switch becomes even more convenient and beneficial. Start your journey towards a greener and more economical driving experience today!
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default BlogPost1;

// import React from 'react';
// import { motion } from 'framer-motion';

// const BlogPost1 = () => {
//   const variants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <div className="bg-white py-12 mt-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="lg:text-center">
//           <motion.h2 
//             className="text-base text-green-600 font-semibold tracking-wide uppercase"
//             initial="hidden"
//             animate="visible"
//             variants={variants}
//             transition={{ duration: 0.5 }}
//           >
//             Blog
//           </motion.h2>
//           <motion.h1 
//             className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
//             initial="hidden"
//             animate="visible"
//             variants={variants}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             The Benefits of Converting Your Petrol Car to CNG
//           </motion.h1>
//         </div>

//         <motion.div 
//           className="mt-10 prose prose-green prose-lg mx-auto text-gray-600 md:px-24"
//           initial="hidden"
//           animate="visible"
//           variants={variants}
//           transition={{ duration: 0.5, delay: 0.4 }}
//         >
//           <p>
//             With rising fuel prices and growing environmental concerns, many car owners are exploring alternative fuels to power their vehicles. Compressed Natural Gas (CNG) has emerged as a popular choice due to its economic and environmental benefits. If you're considering converting your petrol car to CNG, here are some compelling reasons to make the switch.
//           </p>

//           <h2>Cost Savings</h2>
//           <p>
//             One of the most significant advantages of converting your petrol car to CNG is the cost savings. CNG is considerably cheaper than petrol, which can lead to substantial savings over time. Although the initial conversion cost may seem high, the long-term savings on fuel expenses make it a financially sound decision.
//           </p>

//           <h2>Environmental Benefits</h2>
//           <p>
//             CNG is a cleaner-burning fuel compared to petrol. It produces fewer pollutants and greenhouse gases, which helps reduce your carbon footprint. By switching to CNG, you contribute to a healthier environment by lowering emissions of harmful substances such as carbon monoxide, nitrogen oxides, and particulate matter.
//           </p>

//           <h2>Engine Longevity</h2>
//           <p>
//             Using CNG can also extend the life of your engine. CNG combustion produces less residue and deposits, which means cleaner engine oil and fewer maintenance issues. This results in a longer-lasting engine with fewer repair costs.
//           </p>

//           <h2>Enhanced Safety</h2>
//           <p>
//             CNG is a safer fuel option due to its high ignition temperature and low flammability range. In the event of a leak, CNG disperses quickly into the atmosphere, reducing the risk of fire. Additionally, CNG tanks are built to rigorous safety standards, ensuring robust protection against impacts and extreme conditions.
//           </p>

//           <h2>Government Incentives</h2>
//           <p>
//             Many governments offer incentives and subsidies for vehicles converted to CNG. These can include tax rebates, reduced registration fees, and access to carpool lanes. These incentives further enhance the economic benefits of switching to CNG.
//           </p>

//           <h2>Availability and Convenience</h2>
//           <p>
//             The infrastructure for CNG refueling is expanding rapidly, making it increasingly convenient to find CNG stations. With advancements in technology, modern CNG refueling stations offer quick and efficient refueling services, ensuring minimal inconvenience for drivers.
//           </p>

//           <h2>Resale Value</h2>
//           <p>
//             Cars converted to CNG can have a higher resale value due to their lower running costs and environmental benefits. Prospective buyers are often willing to pay a premium for vehicles that promise long-term savings and reduced environmental impact.
//           </p>

//           <h2>Conclusion</h2>
//           <p>
//             Converting your petrol car to CNG is a smart choice for both your wallet and the environment. With cost savings, environmental benefits, enhanced safety, and potential government incentives, CNG conversion offers numerous advantages. As the CNG infrastructure continues to grow, making the switch becomes even more convenient and beneficial. Start your journey towards a greener and more economical driving experience today!
//           </p>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default BlogPost1;


import React from 'react';
import { motion } from 'framer-motion';

const BlogPost1 = () => {
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
      className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 mt-10 bg-white"
    >
      <motion.h2 
        className="text-base text-green-600 font-semibold tracking-wide uppercase"
        variants={variants}
      >
        Blog
      </motion.h2>
      <motion.h1 
        className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
        variants={variants}
        transition={{ delay: 0.2 }}
      >
        The Benefits of Converting Your Petrol Car to CNG
      </motion.h1>

      <motion.div 
        className="mt-10 prose prose-green prose-lg mx-auto text-gray-600 md:px-24"
        variants={variants}
        transition={{ delay: 0.4 }}
      >
        <motion.p 
          className="mb-6" 
          variants={variants} 
          transition={{ delay: 0.6 }}
        >
          With rising fuel prices and growing environmental concerns, many car owners are exploring alternative fuels to power their vehicles. Compressed Natural Gas (CNG) has emerged as a popular choice due to its economic and environmental benefits. If you're considering converting your petrol car to CNG, here are some compelling reasons to make the switch.
        </motion.p>

        <motion.h2 
          className="text-3xl font-semibold text-green-800 mb-4" 
          variants={variants} 
          transition={{ delay: 0.8 }}
        >
          Cost Savings
        </motion.h2>
        <motion.p 
          className="mb-6" 
          variants={variants} 
          transition={{ delay: 1.0 }}
        >
          One of the most significant advantages of converting your petrol car to CNG is the cost savings. CNG is considerably cheaper than petrol, which can lead to substantial savings over time. Although the initial conversion cost may seem high, the long-term savings on fuel expenses make it a financially sound decision.
        </motion.p>

        <motion.h2 
          className="text-3xl font-semibold text-green-800 mb-4" 
          variants={variants} 
          transition={{ delay: 1.2 }}
        >
          Environmental Benefits
        </motion.h2>
        <motion.p 
          className="mb-6" 
          variants={variants} 
          transition={{ delay: 1.4 }}
        >
          CNG is a cleaner-burning fuel compared to petrol. It produces fewer pollutants and greenhouse gases, which helps reduce your carbon footprint. By switching to CNG, you contribute to a healthier environment by lowering emissions of harmful substances such as carbon monoxide, nitrogen oxides, and particulate matter.
        </motion.p>

        <motion.h2 
          className="text-3xl font-semibold text-green-800 mb-4" 
          variants={variants} 
          transition={{ delay: 1.6 }}
        >
          Engine Longevity
        </motion.h2>
        <motion.p 
          className="mb-6" 
          variants={variants} 
          transition={{ delay: 1.8 }}
        >
          Using CNG can also extend the life of your engine. CNG combustion produces less residue and deposits, which means cleaner engine oil and fewer maintenance issues. This results in a longer-lasting engine with fewer repair costs.
        </motion.p>

        <motion.h2 
          className="text-3xl font-semibold text-green-800 mb-4" 
          variants={variants} 
          transition={{ delay: 2.0 }}
        >
          Enhanced Safety
        </motion.h2>
        <motion.p 
          className="mb-6" 
          variants={variants} 
          transition={{ delay: 2.2 }}
        >
          CNG is a safer fuel option due to its high ignition temperature and low flammability range. In the event of a leak, CNG disperses quickly into the atmosphere, reducing the risk of fire. Additionally, CNG tanks are built to rigorous safety standards, ensuring robust protection against impacts and extreme conditions.
        </motion.p>

        <motion.h2 
          className="text-3xl font-semibold text-green-800 mb-4" 
          variants={variants} 
          transition={{ delay: 2.4 }}
        >
          Government Incentives
        </motion.h2>
        <motion.p 
          className="mb-6" 
          variants={variants} 
          transition={{ delay: 2.6 }}
        >
          Many governments offer incentives and subsidies for vehicles converted to CNG. These can include tax rebates, reduced registration fees, and access to carpool lanes. These incentives further enhance the economic benefits of switching to CNG.
        </motion.p>

        <motion.h2 
          className="text-3xl font-semibold text-green-800 mb-4" 
          variants={variants} 
          transition={{ delay: 2.8 }}
        >
          Availability and Convenience
        </motion.h2>
        <motion.p 
          className="mb-6" 
          variants={variants} 
          transition={{ delay: 3.0 }}
        >
          The infrastructure for CNG refueling is expanding rapidly, making it increasingly convenient to find CNG stations. With advancements in technology, modern CNG refueling stations offer quick and efficient refueling services, ensuring minimal inconvenience for drivers.
        </motion.p>

        <motion.h2 
          className="text-3xl font-semibold text-green-800 mb-4" 
          variants={variants} 
          transition={{ delay: 3.2 }}
        >
          Resale Value
        </motion.h2>
        <motion.p 
          className="mb-6" 
          variants={variants} 
          transition={{ delay: 3.4 }}
        >
          Cars converted to CNG can have a higher resale value due to their lower running costs and environmental benefits. Prospective buyers are often willing to pay a premium for vehicles that promise long-term savings and reduced environmental impact.
        </motion.p>

        <motion.h2 
          className="text-3xl font-semibold text-green-800 mb-4" 
          variants={variants} 
          transition={{ delay: 3.6 }}
        >
          Conclusion
        </motion.h2>
        <motion.p 
          className="mb-6" 
          variants={variants} 
          transition={{ delay: 3.8 }}
        >
          Converting your petrol car to CNG is a smart choice for both your wallet and the environment. With cost savings, environmental benefits, enhanced safety, and potential government incentives, CNG conversion offers numerous advantages. As the CNG infrastructure continues to grow, making the switch becomes even more convenient and beneficial. Start your journey towards a greener and more economical driving experience today!
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default BlogPost1;
