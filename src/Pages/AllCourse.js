import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllCourse = () => {
  const courseDetails = useLoaderData();
  console.log(courseDetails);

  return (
    <div>
      <h2>all course</h2>
      <h2>All course: {courseDetails.length}</h2>
    </div>
  );
};

export default AllCourse;