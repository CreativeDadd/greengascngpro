import React from 'react';
import { Link } from 'react-router-dom';
import jobOpenings from '../data/jobOpenings';

const Careers = () => {
  return (
    <div className="container mx-auto py-16 px-4 bg-green-50">
      <h1 className="text-4xl font-bold text-center mb-12">Careers at GreenGas CNG</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {jobOpenings.map(job => (
          <div key={job.id} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-2">{job.title}</h2>
            <p className="text-gray-700 mb-4">{job.location}</p>
            <p className="text-gray-600 mb-4">{job.description}</p>
            {/* <Link to={`/careers/${job.id}`} className="text-indigo-600 hover:underline">View Details & Apply</Link> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Careers;

  
 