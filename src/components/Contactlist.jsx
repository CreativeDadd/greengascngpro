import React from 'react';
import { motion } from 'framer-motion';

const Contactlist = () => {
  const contactItems = [
    {
      label: 'WhatsApp',
      link: 'https://wa.me/+2347035391488',
      icon: 'fab fa-whatsapp',
    },
    {
      label: 'Phone Call',
      link: 'tel:+234123456789',
      icon: 'fas fa-phone',
    },
    {
      label: 'SMS',
      link: 'sms:+2347035391488',
      icon: 'fas fa-sms',
    },
    {
      label: 'Email',
      link: 'mailto:example@example.com',
      icon: 'fas fa-envelope',
    },
    {
      label: 'Contact Form',
      link: "/greengascngpro/contact",
      icon: 'fas fa-id-card',
    },
  ];

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-4xl font-bold text-white mb-8"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
      >
        Contact Us
      </motion.h1>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            opacity: 0,
            scale: 0.8,
          },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              delayChildren: 0.3,
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {contactItems.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            // target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4 transform hover:scale-105 transition-transform duration-200"
            whileHover={{ scale: 1.1 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <i className={`${item.icon} text-green-500 text-3xl`}></i>
            <span className="text-lg font-semibold text-gray-800">{item.label}</span>
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Contactlist;
