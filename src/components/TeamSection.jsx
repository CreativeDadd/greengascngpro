import React from 'react';

const TeamSection = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Our Team</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Meet Our Experts
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our team of dedicated professionals is here to provide the best CNG conversion solutions for your needs.
          </p>
        </div>
        
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {/* Engineer 1 */}
            <div className="text-center">
              <img className="mx-auto h-40 w-40 rounded-full" src="https://via.placeholder.com/150" alt="John Doe" />
              <h3 className="mt-6 text-lg font-medium text-gray-900">John Doe</h3>
              <p className="mt-1 text-sm text-gray-500">Senior Conversion Engineer</p>
              <p className="mt-2 text-gray-500">
                John specializes in converting petrol engines to CNG, ensuring high efficiency and performance.
              </p>
            </div>
            {/* Engineer 2 */}
            <div className="text-center">
              <img className="mx-auto h-40 w-40 rounded-full" src="https://via.placeholder.com/150" alt="Jane Smith" />
              <h3 className="mt-6 text-lg font-medium text-gray-900">Jane Smith</h3>
              <p className="mt-1 text-sm text-gray-500">Lead Conversion Engineer</p>
              <p className="mt-2 text-gray-500">
                Jane is an expert in diesel engine conversions, delivering top-notch dual fuel solutions.
              </p>
            </div>
            {/* Manager 1 */}
            <div className="text-center">
              <img className="mx-auto h-40 w-40 rounded-full" src="https://via.placeholder.com/150" alt="Mark Taylor" />
              <h3 className="mt-6 text-lg font-medium text-gray-900">Mark Taylor</h3>
              <p className="mt-1 text-sm text-gray-500">Chief Executive Officer</p>
              <p className="mt-2 text-gray-500">
                Mark leads our company with a vision for innovation and sustainability in CNG technologies.
              </p>
            </div>
            {/* Manager 2 */}
            <div className="text-center">
              <img className="mx-auto h-40 w-40 rounded-full" src="https://via.placeholder.com/150" alt="Emily Johnson" />
              <h3 className="mt-6 text-lg font-medium text-gray-900">Emily Johnson</h3>
              <p className="mt-1 text-sm text-gray-500">Chief Operations Officer</p>
              <p className="mt-2 text-gray-500">
                Emily ensures smooth and efficient operations across all our projects and services.
              </p>
            </div>
            {/* Manager 3 */}
            <div className="text-center">
              <img className="mx-auto h-40 w-40 rounded-full" src="https://via.placeholder.com/150" alt="Michael Brown" />
              <h3 className="mt-6 text-lg font-medium text-gray-900">Michael Brown</h3>
              <p className="mt-1 text-sm text-gray-500">Chief Technology Officer</p>
              <p className="mt-2 text-gray-500">
                Michael oversees our technological advancements, driving innovation in CNG conversion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
