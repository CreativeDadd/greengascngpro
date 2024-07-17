import React from 'react';
import multipro from '../assets/images/multipro.jpg';
import petrocam from '../assets/images/petrocam.webp';

const testimonials = [
  {
    id: 1,
    company: "Multipro Limited",
    text: "We have worked for Multipro Limited.",
    image: "multipro" // Placeholder image name
  },
  {
    id: 2,
    company: "PetroCam Energy Filling Station",
    text: "We have worked for PetroCam Energy Filling Station in converting their fleet of distribution vans, cars, and diesel trucks and diesel generators to using CNG gas.",
    image: "petrocam" // Placeholder image name
  }
];

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={testimonial.image}
                alt={`${testimonial.company} testimonial `}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{testimonial.company}</h3>
                <p className="text-gray-700">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
