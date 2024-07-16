const jobOpenings = [
    {
      id: 1,
      title: 'Software Engineer',
      location: 'San Francisco',
      company: 'Acme Inc.',
      description: 'We are seeking a talented Software Engineer to join our team...',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years of experience in software development',
        'Proficient in JavaScript, React, and Node.js',
        // Add more requirements as needed
      ],
    },
    {
      id: 2,
      title: 'Data Analyst',
      location: 'New York',
      company: 'Globex Corp.',
      description: 'We are looking for a skilled Data Analyst to join our analytics team...',
      requirements: [
        'Bachelor\'s degree in Statistics, Mathematics, or related field',
        '2+ years of experience in data analysis',
        'Strong skills in SQL, Python, and data visualization tools',
        // Add more requirements as needed
      ],
    },
    // Add more job opening objects as needed
  ];
  
  export default jobOpenings;
  
  
  
//   career.jsx:
  
//   import React from 'react';
//   import jobOpenings from './jobOpenings';
  
//   const Career = () => {
//     return (
//       <div>
//         <h1>Career Opportunities</h1>
//         <ul>
//           {jobOpenings.map((job) => (
//             <li key={job.id}>
//               <h2>{job.title}</h2>
//               <p>Location: {job.location}</p>
//               <p>Company: {job.company}</p>
//               <p>{job.description}</p>
//               <h3>Requirements:</h3>
//               <ul>
//                 {job.requirements.map((requirement, index) => (
//                   <li key={index}>{requirement}</li>
//                 ))}
//               </ul>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   };
  
//   export default Career;
  
  
  
  