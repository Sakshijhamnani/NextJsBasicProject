import Link from 'next/link';
import React from 'react';

const aboutus = () => {
  const details = [
    { id: 1, name: 'Yash', role: 'Senior Developer' },
    { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
    { id: 3, name: 'Suresh', role: 'Frontend Developer' }
  ];
  return (
    <div>
     
      <ul>
        {details.map((person) => (
          <Link href={`/aboutus/${person.id}`}>
          <div key={person.id}>
          <h3> {person.name}</h3> 
          </div>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default aboutus;
