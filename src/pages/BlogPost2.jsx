
import React from 'react';
import truckscetch3 from '../assets/images/truckscetch3.jpeg';
import { motion } from 'framer-motion';

const BlogPost2 = () => {
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
      className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 mt-10"
    >
      <motion.h1 
        className="text-4xl font-bold text-green-900 mb-4" 
        variants={variants}
      >
        The Advantages of Diesel CNG Dual-Fuel Conversion
      </motion.h1>
      <motion.p 
        className="text-green-600 mb-8" 
        variants={variants} 
        transition={{ delay: 0.2 }}
      >
        June 25, 2024 | By Engr. Oyebola D.
      </motion.p>
      <motion.img
        className="w-full h-64 object-cover mb-8 rounded-lg shadow-md"
        src={truckscetch3}
        alt="Diesel CNG Dual-Fuel Conversion"
        variants={variants} 
        transition={{ delay: 0.4 }}
      />
      <motion.div 
        className="prose prose-lg mx-auto text-gray-800" 
        variants={variants} 
        transition={{ delay: 0.6 }}
      >
        <motion.p 
          className="mb-6" 
          variants={variants} 
          transition={{ delay: 0.8 }}
        >
          Diesel CNG dual-fuel conversion is gaining popularity among fleet operators and heavy-duty vehicle owners. This innovative technology allows diesel engines to operate on a mixture of diesel and compressed natural gas (CNG), offering numerous benefits.
        </motion.p>
        <motion.h2 
          className="text-3xl font-semibold text-green-800 mb-4" 
          variants={variants} 
          transition={{ delay: 1.0 }}
        >
          Cost Savings
        </motion.h2>
        <motion.p 
          className="mb-6" 
          variants={variants} 
          transition={{ delay: 1.2 }}
        >
          One of the primary advantages of diesel CNG dual-fuel conversion is the significant cost savings. CNG is generally cheaper than diesel fuel, and using a combination of both fuels can reduce overall fuel costs. This is particularly beneficial for businesses with large fleets, as fuel expenses constitute a major portion of operating costs.
        </motion.p>
        <motion.h2 
          className="text-3xl font-semibold text-green-800 mb-4" 
          variants={variants} 
          transition={{ delay: 1.4 }}
        >
          Environmental Benefits
        </motion.h2>
        <motion.p 
          className="mb-6" 
          variants={variants} 
          transition={{ delay: 1.6 }}
        >
          Dual-fuel systems help reduce harmful emissions. CNG burns cleaner than diesel, producing fewer pollutants such as nitrogen oxides (NOx) and particulate matter (PM). This makes dual-fuel vehicles more environmentally friendly and can help businesses comply with stringent emission regulations.
        </motion.p>
        <motion.h2 
          className="text-3xl font-semibold text-green-800 mb-4" 
          variants={variants} 
          transition={{ delay: 1.8 }}
        >
          Extended Engine Life
        </motion.h2>
        <motion.p 
          className="mb-6" 
          variants={variants} 
          transition={{ delay: 2.0 }}
        >
          Engines running on a mixture of diesel and CNG tend to have longer lifespans. CNG's cleaner combustion process results in less carbon buildup and reduced engine wear and tear. This can lead to lower maintenance costs and longer intervals between overhauls.
        </motion.p>
        <motion.h2 
          className="text-3xl font-semibold text-green-800 mb-4" 
          variants={variants} 
          transition={{ delay: 2.2 }}
        >
          Seamless Integration
        </motion.h2>
        <motion.p 
          className="mb-6" 
          variants={variants} 
          transition={{ delay: 2.4 }}
        >
          Modern dual-fuel conversion kits are designed for seamless integration with existing diesel engines. The conversion process is relatively straightforward and does not require major modifications to the engine. This means minimal downtime for vehicles undergoing conversion.
        </motion.p>
        <motion.h2 
          className="text-3xl font-semibold text-green-800 mb-4" 
          variants={variants} 
          transition={{ delay: 2.6 }}
        >
          Conclusion
        </motion.h2>
        <motion.p 
          className="mb-6" 
          variants={variants} 
          transition={{ delay: 2.8 }}
        >
          Diesel CNG dual-fuel conversion offers a viable solution for reducing fuel costs and minimizing environmental impact. As technology continues to advance, more businesses are likely to adopt this approach to enhance their fleet operations.
        </motion.p>
        <motion.p 
          className="mb-6" 
          variants={variants} 
          transition={{ delay: 3.0 }}
        >
          For more information on how GreenGas (CNG) Technologies Limited can help you with diesel CNG dual-fuel conversion, contact us today.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default BlogPost2;
