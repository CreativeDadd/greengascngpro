import React from 'react';
import { Link } from 'react-router-dom';

const LearnMore = () => {
  return (
    <div className="bg-white mt-14">
      <header className="bg-green-800 text-white">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Learn More About GreenGas Technologies Limited</h1>
        </div>
      </header>
      <main className="mt-10">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            <p className="mt-4 text-gray-700">
              GreenGas Technologies Limited is dedicated to providing clean and sustainable Compressed Natural Gas (CNG) solutions. Our mission is to reduce carbon emissions and promote eco-friendly alternatives to traditional fossil fuels.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900">Our Services</h2>
            <div className="mt-6 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-green-50 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-green-800">CNG Conversion Kits</h3>
                <p className="mt-2 text-gray-700">
                  We offer high-quality CNG conversion kits for vehicles, ensuring a smooth and efficient transition from traditional fuel to CNG.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-green-800">CNG Fueling Stations</h3>
                <p className="mt-2 text-gray-700">
                  Our network of CNG fueling stations is expanding rapidly, providing convenient refueling options for CNG-powered vehicles.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-green-800">Maintenance and Support</h3>
                <p className="mt-2 text-gray-700">
                  We offer comprehensive maintenance and support services to ensure the longevity and performance of CNG systems.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900">Why Choose CNG?</h2>
            <div className="mt-6 flex flex-col lg:flex-row">
              <div className="lg:w-1/2 lg:pr-8">
                <p className="mt-2 text-gray-700">
                  Compressed Natural Gas (CNG) is a cleaner and more sustainable alternative to traditional fossil fuels. It produces fewer emissions, reduces air pollution, and is more cost-effective in the long run. By choosing CNG, you are contributing to a healthier environment and a sustainable future.
                </p>
              </div>
              <div className="lg:w-1/2 lg:pl-8">
                <img
                  className="mt-4 lg:mt-0 w-full h-64 object-cover rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1561911759-025f63d078c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
                  alt="CNG fuel"
                />
              </div>
            </div>
          </section>

          <section className="text-center mt-16">
            <h2 className="text-2xl font-bold text-gray-900">Get Started with GreenGas Technologies Today!</h2>
            <p className="mt-4 text-gray-700">
              Ready to make the switch to cleaner energy? Contact us today to learn more about our CNG solutions and how we can help you transition to a more sustainable future.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-block px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
              >
                Contact Us
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default LearnMore;
