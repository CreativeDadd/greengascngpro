import React from 'react';
import dieselcng from '../assets/images/dieselcng.jpg'; // Adjust the path as needed

const DieselGenSavings = () => {
  const titleStyle = "text-4xl font-extrabold text-green-700 mb-4 text-center";
  const sectionTitleStyle = "text-3xl font-bold text-yellow-300 mb-4";
  const subTitleStyle = "text-2xl font-semibold text-white mb-2";
  const paragraphStyle = "text-lg text-white mb-2";
  const highlightStyle = "text-xl font-bold text-yellow-300";

  return (
    <div className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 min-h-screen py-12 px-4 sm:px-6 lg:px-8 text-white mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h1 className={titleStyle}>Fuel Cost Savings with Dual-Fuel System</h1>
          <p className="mt-4 max-w-2xl text-xl text-gray-200 lg:mx-auto">
            We are pleased to present our proposal for converting your 30kVA diesel generator to a dual-fuel system using CNG and diesel. This conversion will lead to significant energy cost savings and a reduced environmental footprint.
          </p>
        </div>

        <div className="mt-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className={sectionTitleStyle}>Generator Specifications</h2>
              <p className={paragraphStyle}>• Total Operating Hours: 12 hours/day</p>
              <p className={paragraphStyle}>• Diesel Consumption per Hour: 7 liters</p>

              <h2 className={sectionTitleStyle}>Proposed Fuel Mix</h2>
              <p className={paragraphStyle}>• 60% CNG</p>
              <p className={paragraphStyle}>• 40% Diesel</p>

              <h2 className={sectionTitleStyle}>Fuel Equivalency</h2>
              <p className={paragraphStyle}>• 1 SCM of CNG = 1.127 liters of diesel</p>

              <h2 className={sectionTitleStyle}>Simplified Fuel Consumption Calculations</h2>
              <h3 className={subTitleStyle}>Current Diesel Consumption:</h3>
              <p className={paragraphStyle}>• Per Hour: 7 liters</p>
              <p className={paragraphStyle}>• Per Day (12 hours): 84 liters</p>
              <p className={paragraphStyle}>• Per Week (7 days): 588 liters</p>
              <p className={paragraphStyle}>• Per Month (30 days): 2,520 liters</p>

              <h3 className={subTitleStyle}>Proposed Dual-Fuel Consumption (60% CNG + 40% Diesel):</h3>
              <p className={paragraphStyle}>• Diesel Consumption:</p>
              <p className={paragraphStyle}>• Per Hour: 2.8 liters</p>
              <p className={paragraphStyle}>• Per Day (12 hours): 33.6 liters</p>
              <p className={paragraphStyle}>• Per Week (7 days): 235.2 liters</p>
              <p className={paragraphStyle}>• Per Month (30 days): 1,008 liters</p>

              <p className={paragraphStyle}>• CNG Consumption (in SCM):</p>
              <p className={paragraphStyle}>• Per Hour: 3.731 SCM</p>
              <p className={paragraphStyle}>• Per Day (12 hours): 44.772 SCM</p>
              <p className={paragraphStyle}>• Per Week (7 days): 313.404 SCM</p>
              <p className={paragraphStyle}>• Per Month (30 days): 1,343.16 SCM</p>
            </div>
            <div className="mt-10 lg:mt-0">
              <img
                className="mx-auto rounded-lg shadow-lg"
                src={dieselcng}
                alt="Dual-Fuel Generator" loading='lazy'
              />
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className={sectionTitleStyle}>Fuel Cost Analysis</h2>
          <h3 className={subTitleStyle}>Diesel Cost (NGN 1250 per liter):</h3>
          <p className={paragraphStyle}>• Current: NGN 105,000/day</p>
          <p className={paragraphStyle}>• After Conversion: NGN 42,000/day</p>

          <h3 className={subTitleStyle}>CNG Cost (NGN 250 per SCM):</h3>
          <p className={paragraphStyle}>• After Conversion: NGN 11,193/day</p>

          <h3 className={subTitleStyle}>Total Fuel Cost After Conversion:</h3>
          <p className={paragraphStyle}>• Diesel + CNG: NGN 53,193/day</p>

          <h2 className={sectionTitleStyle}>Daily Savings</h2>
          <p className={highlightStyle}>NGN 105,000 - NGN 53,193 = NGN 51,807</p>

          <h2 className={sectionTitleStyle}>Weekly Savings</h2>
          <p className={highlightStyle}>NGN 362,649 (NGN 51,807 x 7)</p>

          <h2 className={sectionTitleStyle}>Monthly Savings</h2>
          <p className={highlightStyle}>NGN 51,807 x 30 = NGN 1,554,210</p>

          <h2 className={sectionTitleStyle}>Investment Recovery</h2>
          <p className={paragraphStyle}>• Total Conversion Cost: NGN 3,493,750</p>
          <p className={paragraphStyle}>• Weekly Savings: NGN 362,649 (NGN 51,807 x 7)</p>
          <p className={paragraphStyle}>• Weeks to Recover Investment: NGN 3,493,750 / NGN 362,649 ≈ 9.64 weeks</p>
          <p className={paragraphStyle}>• Months to Recover Investment: 9.64 weeks / 4 = 2.41 Months</p>

          <h2 className={sectionTitleStyle}>Conclusion</h2>
          <p className={highlightStyle}>
            By converting to a dual-fuel system, LACVIS can save approximately NGN 1,554,210 per month and recover the investment in roughly 10 weeks or 2 and a half months. We look forward to partnering with you in this sustainable and cost-effective initiative.
          </p>
          <p className={paragraphStyle}>
            For further details and to schedule a consultation, please contact us at your earliest convenience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DieselGenSavings;
