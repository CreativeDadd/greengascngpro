// const jobOpenings = [
//     {
//       id: 1,
//       title: 'Software Engineer',
//       location: 'San Francisco',
//       company: 'Acme Inc.',
//       description: 'We are seeking a talented Software Engineer to join our team...',
//       requirements: [
//         'Bachelor\'s degree in Computer Science or related field',
//         '3+ years of experience in software development',
//         'Proficient in JavaScript, React, and Node.js',
//         // Add more requirements as needed
//       ],
//     },
//     {
//       id: 2,
//       title: 'Data Analyst',
//       location: 'New York',
//       company: 'Globex Corp.',
//       description: 'We are looking for a skilled Data Analyst to join our analytics team...',
//       requirements: [
//         'Bachelor\'s degree in Statistics, Mathematics, or related field',
//         '2+ years of experience in data analysis',
//         'Strong skills in SQL, Python, and data visualization tools',
//         // Add more requirements as needed
//       ],
//     },
//     // Add more job opening objects as needed
//   ];
  
//   export default jobOpenings;
  
  
  
// //   career.jsx:
  
// //   import React from 'react';
// //   import jobOpenings from './jobOpenings';
  
// //   const Career = () => {
// //     return (
// //       <div>
// //         <h1>Career Opportunities</h1>
// //         <ul>
// //           {jobOpenings.map((job) => (
// //             <li key={job.id}>
// //               <h2>{job.title}</h2>
// //               <p>Location: {job.location}</p>
// //               <p>Company: {job.company}</p>
// //               <p>{job.description}</p>
// //               <h3>Requirements:</h3>
// //               <ul>
// //                 {job.requirements.map((requirement, index) => (
// //                   <li key={index}>{requirement}</li>
// //                 ))}
// //               </ul>
// //             </li>
// //           ))}
// //         </ul>
// //       </div>
// //     );
// //   };
  
// //   export default Career;
  
  


const jobOpenings = [
  {
    id: 1,
    title: 'Graduate Trainees for CNG Installation Operations Management',
    location: 'Lagos, Nigeria',
    description: 'Join our dynamic team to lead the future of CNG technology.',
    details: `
      <h3>Job Description</h3>
      <p>We are looking for passionate and dedicated graduates to join our CNG Installation Operations Management team. You will be involved in...</p>
      <h3>Responsibilities</h3>
      <ul>
        <li>Overseeing installation and operation of CNG systems</li>
        <li>Ensuring compliance with safety and environmental standards</li>
        <li>Managing installation schedules and timelines</li>
        <li>Collaborating with cross-functional teams</li>
      </ul>
      <h3>Requirements</h3>
      <ul>
        <li>Bachelor’s degree in Engineering or related field</li>
        <li>Strong analytical and problem-solving skills</li>
        <li>Excellent communication and teamwork abilities</li>
        <li>Willingness to learn and adapt</li>
      </ul>
    `,
    applyLink: 'jobsform'
  },
  // ... other job openings
    {
    id: 2,
    title: 'Auto Technician - Mechanical',
    location: 'Lagos, Nigeria',
    description: 'We are seeking a skilled Auto Technician with expertise in mechanical systems to join our team. The ideal candidate will have experience working on CNG conversion systems and a strong background in automotive mechanics.',
  },
  {
    id: 3,
    title: 'Auto Technician - Electrical',
    location: 'Lagos, Nigeria',
    description: 'Join our team as an Auto Technician specializing in electrical systems. You will be responsible for installing and maintaining CNG conversion systems, ensuring all electrical components are functioning correctly.',
  },
  {
    id: 4,
    title: 'Graduate Gas Installation Trainer',
    location: 'Lagos, Nigeria',
    description: 'We are looking for a motivated individual to join our team as a Graduate Gas Installation Trainer. This role involves training new employees and customers on the installation and maintenance of CNG systems.',
  },
];

export default jobOpenings;

  
  