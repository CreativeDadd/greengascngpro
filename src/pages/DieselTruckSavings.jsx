import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/dieselTruckSavins.css'; 

const DieselTruckSavings = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-4 bg-green-50">
            <h1 className="text-4xl font-extrabold text-green-700 mb-4 text-center">Diesel Cost Savings with 60%Diesel & 40%CNG Dual-Fuel System</h1>
            
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Objective</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              To compare the monthly cost of running a haulage diesel truck vehicle over 15,000 km using:
              <br />
              <strong>100% Diesel</strong> vs. <strong>A dual-fuel mixture of 60% Diesel and 40% CNG</strong>.
            </p>
            
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Assumptions</h2>
            <ul className="list-disc list-inside text-gray-700 mb-8">
              <li>Cost of Diesel: NGN 1160 per liter</li>
              <li>Cost of CNG: NGN 200 per scm</li>
              <li>Fuel consumption with 100% Diesel: 50 liters per 100 km</li>
              <li>1 scm of CNG = 1.127 liters of Diesel</li>
            </ul>
            
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Calculations</h2>
            <div className="bg-white p-4 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Option 1: Fuel Consumption for 15,000 km with 100% Diesel</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Fuel consumption per 100 km: 50 liters
                <br />
                Total fuel consumption for 15,000 km: (15,000 km / 100 km) * 50 liters = 7,500 liters
                <br />
                Total cost for 15,000 km with 100% Diesel: 7,500 liters * NGN 1160/liter = NGN 8,745,000
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Option 2: Fuel Consumption for 15,000 km with Dual-Fuel (60% Diesel + 40% CNG)</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Diesel Consumption</strong> per 100 km with Dual-Fuel: @ 60% Diesel = 4,500 liters (60% * 7500)
                <br />
                Naira Value = 4,500 * NGN 1160 = NGN 5,220,000
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>CNG Consumption</strong> per 100 km with Dual-Fuel: @ 40% Diesel = 3000 liters (40% * 7500)
                <br />
                Convert 3000 liters (Diesel) consumption to scm: 3000 liters / 1.127 = 2,662 scm
                <br />
                CNG component = 2,662 scm * NGN 200/scm = NGN 532,500
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Total cost for 15,000 km with Dual-Fuel:
                <br />
                60% Diesel (4,500 liters) = NGN 5,220,000
                <br />
                2662 scm (3000 liters) = NGN 532,500
                <br />
                <strong>Total = NGN 5,752,000</strong>
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Cost Savings</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Cost with 100% Diesel for 15,000 km: NGN 8,745,000
                <br />
                Less: Cost with Dual-Fuel for 15,000 km: NGN 5,752,000
                <br />
                <strong>Total Savings per month using Dual-Fuel: NGN 2,993,000</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Summary:
                <br />
                By converting to a dual-fuel system (60% Diesel + 40% CNG), you can achieve substantial savings in fuel costs. For a diesel haulage truck running 15,000 km per month, Saving is NGN 2,993,000;
                <br />
                1 year = NGN 2,993,000 * 12 = NGN 35.916 million/truck per annum
                <br />
                1000 trucks will save = NGN 35,916,000 * 1000 = NGN 35.916 billion savings per annum
                <br />
                5 years savings on 1000 trucks = NGN 35,376,000,000 * 5 = NGN 179.580 billion
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Other Significant Benefits of Dual-Fuel Conversion</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Cost Efficiency: Significant reduction in monthly fuel expenses.</li>
                <li>Environmental Impact: Lower emissions due to the use of cleaner burning CNG.</li>
                <li>Extended Engine Life: Dual-fuel systems can lead to less wear and tear on the engine.</li>
                <li>Operational Efficiency: Better and complete diesel combustion leading to better fuel management.</li>
              </ul>
            </div>
            
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Conclusion</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Converting your fleet to a dual-fuel system offers substantial financial and environmental benefits. We recommend proceeding with the conversion to optimize your operational costs and contribute to a greener environment.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              For any further inquiries or clarifications, please feel free to contact us.
            </p>
            
            <div className="bg-green-600 text-white p-4 rounded-lg shadow-md text-center">
              <p className="font-bold">
                GreenGas (CNG) Technologies Ltd
              </p>
              <p>No.9 NERDC Road, Alausa, Ikeja, Lagos.</p>
              <p>Phone: +234 703 539 1488, +234 803 373 7613.</p>
              <p>Email: greengasc@gmail.com</p>
            </div>
            
            <div className="mt-6 flex justify-center">
              <Link to="/products" className="text-green-600 hover:text-green-700 font-semibold">Back to Products</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DieselTruckSavings;
