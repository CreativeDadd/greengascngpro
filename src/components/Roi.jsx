import React from 'react';
import { Link } from 'react-router-dom';

const Roi = () => {
  return (
    <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center mb-6 text-green-800">The Return On Investment (ROI) on Conversion of 4-cylinder and 6-cylinder Petrol Engines to 100% CNG</h1>
      <h2 className="text-xl font-semibold mb-4 text-green-800">Executive Summary</h2>
      <p className="mb-4">
        With the rising cost of petrol in Nigeria, converting petrol engines to 100% Compressed Natural Gas (CNG) is a proven,
        cost-effective solution that offers substantial fuel savings. CNG not only costs significantly less but also covers
        more kilometers per unit compared to petrol. This proposal outlines the financial and operational benefits of converting
        your 4-cylinder and 6-cylinder vehicles to CNG and demonstrates how the conversion costs will be recovered within a short period.
      </p>

      <h2 className="text-xl font-semibold mb-4 text-green-800">Benefits of Conversion to CNG</h2>
      <ol className="list-decimal list-inside mb-4">
        <li className="mb-2">
          <strong className='text-green-800'>Cost Efficiency:</strong>
          <ul className="list-disc list-inside ml-4">
            <li>CNG costs NGN 230 per scm while petrol costs NGN 910 per liter.</li>
            <li>CNG covers 16 km per scm, while petrol only covers 10 km per liter.</li>
          </ul>
        </li>
        <li>
          <strong className='text-green-800'>Environmental Impact:</strong>
          <p>
            CNG produces lower emissions than petrol, reducing your carbon footprint and contributing to a more sustainable business operation.
          </p>
        </li>
      </ol>

      <h2 className="text-xl font-semibold mb-4 text-green-800">ROI and Cost Savings</h2>
      <div className="bg-green-50 shadow-sm p-4 rounded-lg mb-4">
        <h3 className="font-bold mb-2">Vehicle A: 4-cylinder Petrol Engine</h3>
        <p>Monthly distance: 8,500 km</p>
        <p className="font-semibold">Fuel cost comparison (for 6 months):</p>
        <ul className="list-none ml-4">
          <li>Petrol cost: NGN 4,641,000</li>
          <li>CNG cost: NGN 733,125</li>
          <li>Total savings with CNG: NGN 3,907,875</li>
          <li>Conversion cost: NGN 1,650,000</li>
          <li>Return on Investment (ROI) after 6 months: NGN 2,257,875</li>
        </ul>
      </div>
      
      <div className="bg-green-50 shadow-sm mb-4 p-4 rounded-lg">
        <h3 className="font-bold mb-2">Vehicle B: 6-cylinder Petrol Engine</h3>
        <p>Monthly distance: 8,500 km</p>
        <p className="font-semibold">Fuel cost comparison (for 6 months):</p>
        <ul className="list-none ml-4">
          <li>Petrol cost: NGN 6,961,500</li>
          <li>CNG cost: NGN 1,099,687.5</li>
          <li>Total savings with CNG: NGN 5,861,812.5</li>
          <li>Conversion cost: NGN 2,145,000</li>
          <li>Return on Investment (ROI) after 6 months: NGN 3,716,812.50</li>
        </ul>
      </div>

      <h2 className="text-xl font-bold mb-4 text-green-800">Conclusion</h2>
      <p className="mb-4">
        By converting your fleet to CNG, you will not only recover your investment in under 6 months but also achieve substantial long-term savings. 
        The projected total savings over 6 months for the 4-cylinder vehicle amounts to NGN 3,907,875, and for the 6-cylinder vehicle, NGN 5,861,812.5. 
        After deducting conversion costs, the net ROI is NGN 2,257,875 for the 4-cylinder engine and NGN 3,716,812.5 for the 6-cylinder engine.
      </p>
      <p className="mb-4">
        Switching to CNG offers you both economic and environmental advantages, ensuring your fleet operates more efficiently and sustainably.
      </p>
      <Link to="/contactlist" className='py-2 px-6 text-white bg-green-700 rounded-full mt-2 font-semibold shadow-sm mb-20'>Book an Appointment With Us...</Link>
      
    </div>
  );
};

export default Roi;
