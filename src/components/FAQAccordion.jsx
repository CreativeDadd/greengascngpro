// import React, { useState } from 'react';
// import { Transition } from '@headlessui/react';

// const faqItems = [
//   {
//     id: 1,
//     question: "What is CNG conversion for petrol engine vehicles?",
//     answer: "CNG conversion involves modifying a petrol engine to run on compressed natural gas (CNG) instead of petrol, providing cleaner emissions and lower fuel costs.",
//     image: "cng-conversion.jpg"
//   },
//   {
//     id: 2,
//     question: "What is diesel dual fuel CNG technology?",
//     answer: "Diesel dual fuel CNG technology allows diesel engines to operate using a mix of diesel and CNG, reducing emissions and fuel costs.",
//     image: "dual-fuel.jpg"
//   },
//   {
//     id: 3,
//     question: "How does the diesel/CNG blend work in generators?",
//     answer: "Generators can be modified to use a blend of diesel and CNG, which helps in reducing fuel consumption and emissions while maintaining performance.",
//     image: "generator.jpg"
//   },
//   {
//     id: 4,
//     question: "Can boats and ships use CNG?",
//     answer: "Yes, boats and ships can be converted to use CNG, which provides a cleaner and more cost-effective fuel alternative.",
//     image: "boats.jpg"
//   },
//   {
//     id: 5,
//     question: "Is CNG applicable to trains?",
//     answer: "Trains can also be converted to use CNG, leading to significant reductions in emissions and operational costs.",
//     image: "trains.jpg"
//   },
//   {
//     id: 6,
//     question: "Can industrial boilers run on CNG?",
//     answer: "Industrial boilers can be converted to run on CNG, offering a cleaner and more efficient energy source.",
//     image: "boilers.jpg"
//   }
// ];

// const FAQAccordion = () => {
//   const [openItemId, setOpenItemId] = useState(null);

//   const toggleItem = (id) => {
//     setOpenItemId(openItemId === id ? null : id);
//   };

//   return (
//     <section className="bg-gray-100 py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Frequently Asked Questions</h2>
//         <div className="space-y-4">
//           {faqItems.map((item) => (
//             <div key={item.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
//               <div
//                 onClick={() => toggleItem(item.id)}
//                 className="flex items-center justify-between p-6 cursor-pointer"
//               >
//                 <h3 className="text-xl font-semibold">{item.question}</h3>
//                 <span className="text-2xl">{openItemId === item.id ? '-' : '+'}</span>
//               </div>
//               <Transition
//                 show={openItemId === item.id}
//                 enter="transition-opacity duration-300"
//                 enterFrom="opacity-0"
//                 enterTo="opacity-100"
//                 leave="transition-opacity duration-300"
//                 leaveFrom="opacity-100"
//                 leaveTo="opacity-0"
//               >
//                 <div className="p-6 border-t border-gray-200">
//                   <img src={item.image} alt={item.question} className="w-full h-56 object-cover mb-4" />
//                   <p className="text-gray-700">{item.answer}</p>
//                 </div>
//               </Transition>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQAccordion;

// import React, { useState } from 'react';
// import { Transition } from '@headlessui/react';

// const faqItems = [
//   {
//     id: 1,
//     question: "What is CNG conversion for petrol engine vehicles?",
//     answer: "CNG conversion involves retrofitting petrol engines to run on Compressed Natural Gas (CNG). This process includes installing a CNG tank, fuel lines, injectors, and an engine control unit. As experts in CNG technology, GreenGas CNG ensures efficient and reliable conversions, reducing fuel costs and emissions while maintaining engine performance.",
//     image: "https://example.com/cng-conversion.jpg" // Replace with actual image URL
//   },
//   {
//     id: 2,
//     question: "What is diesel dual fuel CNG technology?",
//     answer: "Diesel dual fuel CNG technology allows diesel engines to run on a blend of diesel and CNG. This technology involves modifying the engine to inject CNG along with diesel, significantly reducing fuel costs and emissions. Our expertise ensures seamless integration and optimal performance, making GreenGas CNG a leader in this field.",
//     image: "https://example.com/dual-fuel.jpg" // Replace with actual image URL
//   },
//   {
//     id: 3,
//     question: "How does the diesel/CNG blend work in generators?",
//     answer: "Generators modified to use a diesel/CNG blend offer a cost-effective and eco-friendly power solution. The conversion process involves installing a CNG fuel system that works alongside the existing diesel system. GreenGas CNG’s expert technicians ensure reliable performance and reduced emissions, making us the go-to provider for generator conversions.",
//     image: "https://example.com/generator.jpg" // Replace with actual image URL
//   },
//   {
//     id: 4,
//     question: "Can boats and ships use CNG?",
//     answer: "Yes, boats and ships can be converted to use CNG, offering a cleaner and more cost-effective fuel alternative. Our experienced team at GreenGas CNG specializes in maritime CNG conversions, ensuring safe and efficient operation. This transition not only reduces fuel costs but also lowers the environmental impact of maritime transport.",
//     image: "https://example.com/boats.jpg" // Replace with actual image URL
//   },
//   {
//     id: 5,
//     question: "Is CNG applicable to trains?",
//     answer: "Trains can also be converted to use CNG, resulting in significant reductions in emissions and operational costs. GreenGas CNG provides comprehensive conversion services, utilizing advanced technology and expertise to ensure the highest standards of performance and safety. Our solutions help rail operators transition to a more sustainable fuel option.",
//     image: "https://example.com/trains.jpg" // Replace with actual image URL
//   },
//   {
//     id: 6,
//     question: "Can industrial boilers run on CNG?",
//     answer: "Industrial boilers can be converted to run on CNG, offering a cleaner and more efficient energy source. Our team at GreenGas CNG specializes in such conversions, ensuring optimal performance and compliance with environmental regulations. This switch not only enhances efficiency but also reduces operational costs and emissions.",
//     image: "https://example.com/boilers.jpg" // Replace with actual image URL
//   },
//   {
//     id: 7,
//     question: "What are mother and daughter stations?",
//     answer: "Mother and daughter stations are part of a CNG distribution network where the mother station compresses natural gas and transports it to daughter stations. Daughter stations then dispense the CNG to vehicles. GreenGas CNG designs and implements these stations with expertise, ensuring efficient and reliable CNG supply across various locations.",
//     image: "https://example.com/stations.jpg" // Replace with actual image URL
//   }
// ];

// const FAQAccordion = () => {
//   const [openItemId, setOpenItemId] = useState(null);

//   const toggleItem = (id) => {
//     setOpenItemId(openItemId === id ? null : id);
//   };

//   return (
//     <section className="bg-gray-100 py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Frequently Asked Questions</h2>
//         <div className="space-y-4">
//           {faqItems.map((item) => (
//             <div key={item.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
//               <div
//                 onClick={() => toggleItem(item.id)}
//                 className="flex items-center justify-between p-6 cursor-pointer"
//               >
//                 <h3 className="text-xl font-semibold">{item.question}</h3>
//                 <span className="text-2xl">{openItemId === item.id ? '-' : '+'}</span>
//               </div>
//               <Transition
//                 show={openItemId === item.id}
//                 enter="transition-opacity duration-300"
//                 enterFrom="opacity-0"
//                 enterTo="opacity-100"
//                 leave="transition-opacity duration-300"
//                 leaveFrom="opacity-100"
//                 leaveTo="opacity-0"
//               >
//                 <div className="p-6 border-t border-gray-200">
//                   <img src={item.image} alt={item.question} className="w-full h-56 object-cover mb-4" />
//                   <p className="text-gray-700">{item.answer}</p>
//                 </div>
//               </Transition>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQAccordion;


import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

const faqItems = [
  {
    id: 1,
    question: "What is CNG conversion for petrol engine vehicles?",
    answer: "CNG conversion involves retrofitting petrol engines to run on Compressed Natural Gas (CNG). This process includes installing a CNG tank, fuel lines, injectors, and an engine control unit. As experts in CNG technology, GreenGas CNG ensures efficient and reliable conversions, reducing fuel costs and emissions while maintaining engine performance.",
    image: "https://www.mckinsey.com/~/media/mckinsey/dotcom/insights/energy%20resources%20materials/the%20future%20of%20natural%20gas/the-future-of-natural-gas_final.ashx" // Replace with actual image URL
  },
  {
    id: 2,
    question: "What is diesel dual fuel CNG technology?",
    answer: "Diesel dual fuel CNG technology allows diesel engines to run on a blend of diesel and CNG. This technology involves modifying the engine to inject CNG along with diesel, significantly reducing fuel costs and emissions. Our expertise ensures seamless integration and optimal performance, making GreenGas CNG a leader in this field.",
    image: "https://www.dieselnet.com/news/2021/06/images/ngv_truck_2021.jpg" // Replace with actual image URL
  },
  {
    id: 3,
    question: "How does the diesel/CNG blend work in generators?",
    answer: "Generators modified to use a diesel/CNG blend offer a cost-effective and eco-friendly power solution. The conversion process involves installing a CNG fuel system that works alongside the existing diesel system. GreenGas CNG’s expert technicians ensure reliable performance and reduced emissions, making us the go-to provider for generator conversions.",
    image: "https://www.europeanbiogas.eu/wp-content/uploads/2020/10/generator.jpg" // Replace with actual image URL
  },
  {
    id: 4,
    question: "Can boats and ships use CNG?",
    answer: "Yes, boats and ships can be converted to use CNG, offering a cleaner and more cost-effective fuel alternative. Our experienced team at GreenGas CNG specializes in maritime CNG conversions, ensuring safe and efficient operation. This transition not only reduces fuel costs but also lowers the environmental impact of maritime transport.",
    image: "https://img.freepik.com/free-photo/large-blue-container-ship-open-ocean_180624-3978.jpg" // Replace with actual image URL
  },
  {
    id: 5,
    question: "Is CNG applicable to trains?",
    answer: "Trains can also be converted to use CNG, resulting in significant reductions in emissions and operational costs. GreenGas CNG provides comprehensive conversion services, utilizing advanced technology and expertise to ensure the highest standards of performance and safety. Our solutions help rail operators transition to a more sustainable fuel option.",
    image: "https://media.istockphoto.com/id/1194783694/photo/generic-modern-high-speed-train-on-a-railway.jpg" // Replace with actual image URL
  },
  {
    id: 6,
    question: "Can industrial boilers run on CNG?",
    answer: "Industrial boilers can be converted to run on CNG, offering a cleaner and more efficient energy source. Our team at GreenGas CNG specializes in such conversions, ensuring optimal performance and compliance with environmental regulations. This switch not only enhances efficiency but also reduces operational costs and emissions.",
    image: "https://img.freepik.com/free-photo/boiler-room-large-industrial-boilers_1374-215.jpg" // Replace with actual image URL
  },
  {
    id: 7,
    question: "What are mother and daughter stations?",
    answer: "Mother and daughter stations are part of a CNG distribution network where the mother station compresses natural gas and transports it to daughter stations. Daughter stations then dispense the CNG to vehicles. GreenGas CNG designs and implements these stations with expertise, ensuring efficient and reliable CNG supply across various locations.",
    image: "https://image.shutterstock.com/image-photo/compressed-natural-gas-refueling-station-260nw-1868671984.jpg" // Replace with actual image URL
  }
];

const FAQAccordion = () => {
  const [openItemId, setOpenItemId] = useState(null);

  const toggleItem = (id) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <section className="bg-gray-100 py-12 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqItems.map((item) => (
            <div key={item.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div
                onClick={() => toggleItem(item.id)}
                className="flex items-center justify-between p-6 cursor-pointer"
              >
                <h3 className="text-xl font-semibold">{item.question}</h3>
                <span className="text-2xl">{openItemId === item.id ? '-' : '+'}</span>
              </div>
              <Transition
                show={openItemId === item.id}
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="p-6 border-t border-gray-200">
                  <img src={item.image} alt={item.question} className="w-full h-56 object-cover mb-4" />
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              </Transition>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;

