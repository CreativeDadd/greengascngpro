import React from 'react';
import { useParams, Link } from 'react-router-dom';
import jobOpenings from '../data/jobOpenings';

const JobDetails = () => {
  const { id } = useParams();
  const job = jobOpenings.find(job => job.id === parseInt(id));

  if (!job) {
    return <div>Job not found</div>;
  }

  return (
    <div className="container mx-auto py-16 px-4 bg-green-50">
      <h1 className="text-4xl font-bold text-center mb-12">{job.title}</h1>
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-2">{job.location}</h2>
        <div className="text-gray-600 mb-4" dangerouslySetInnerHTML={{ __html: job.details }}></div>
        <Link to={job.applyLink} className="text-indigo-600 hover:underline text-lg font-semibold">
          Apply Now
        </Link>
      </div>
    </div>
  );
};

export default JobDetails;
