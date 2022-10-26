import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
  const courseDetails = useLoaderData();
  console.log(courseDetails);
  return (
    <div>
      <h2>{courseDetails.title}</h2>
    </div>
  );
};

export default Details;