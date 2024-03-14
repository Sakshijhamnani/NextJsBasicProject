import React from 'react';
import { useRouter } from 'next/router';

const Developer = () => {
  const router = useRouter();

  const details = [
    { id: 1, name: 'Yash', role: 'Senior Developer' },
    { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
    { id: 3, name: 'Suresh', role: 'Frontend Developer' }
  ];

  
  const developerId = parseInt(router.query.developerId);

  
  const developer = details.find(developer => developer.id === developerId);

 
  return (
    <>
      {developer ? (
        <>
          <h1>{developer.name}</h1>
          <p>{developer.role}</p>
        </>
      ) : (
        <h1>Developer doesn't exist</h1>
      )}
    </>
  );
};

export default Developer;
