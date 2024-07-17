import React from 'react';
import project1CNG from '../assets/images/project1CNG.jpg';
import project2CNG from '../assets/images/project2CNG.jpg';
import project3CNG from '../assets/images/project3CNG.jpg';

const projects = [
  {
    id: 1,
    title: 'Petrol Car CNG Conversion',
    description: 'Successfully converted petrol cars to CNG, ensuring better fuel efficiency and lower emissions.',
    imageUrl: 'project1CNG',
  },
  {
    id: 2,
    title: 'Diesel Truck Dual-Fuel Conversion',
    description: 'Implemented dual-fuel conversion for diesel trucks, combining diesel and CNG for cost-effective fuel usage.',
    imageUrl: 'project2CNG',
  },
  {
    id: 3,
    title: 'Distribution Vans CNG Conversion',
    description: 'Converted distribution vans to CNG, providing a greener alternative for urban deliveries.',
    imageUrl: 'project3CNG',
  },
  {
    id: 4,
    title: 'Heavy-Duty Engine CNG Conversion',
    description: 'Engineered CNG conversion for heavy-duty engines, enhancing performance and reducing carbon footprint.',
    imageUrl: 'https://via.placeholder.com/400x300.png?text=Project+4',
  },
  {
    id: 5,
    title: 'Tricycle CNG Conversion',
    description: 'Successfully converted tricycles to CNG, promoting eco-friendly transportation in urban areas.',
    imageUrl: 'https://via.placeholder.com/400x300.png?text=Project+5',
  },
  {
    id: 6,
    title: 'Diesel Power Generator Conversion',
    description: 'Converted diesel power generators to use CNG, significantly reducing operating costs and emissions.',
    imageUrl: 'https://via.placeholder.com/400x300.png?text=Project+6',
  },
];

const ProjectGallery = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                className="w-full h-48 object-cover"
                src={project.imageUrl}
                alt={project.title}
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
