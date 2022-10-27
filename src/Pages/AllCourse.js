import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetailsCard from './Shared/CourseDetailsCard';

const AllCourse = () => {
  const courseDetails = useLoaderData();
  console.log(courseDetails);

  return (
    <div>
      <h3 className='mb-3'>Single Course: {courseDetails.length}</h3>
      {
        courseDetails.map(courseDetail => <CourseDetailsCard
          key={courseDetail._id}
          courseDetail={courseDetail}></CourseDetailsCard>)
      }
    </div>
  );
};

export default AllCourse;