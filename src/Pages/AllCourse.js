import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetailsCard from './Shared/CourseDetailsCard';

const AllCourse = () => {
  const courseDetails = useLoaderData();
  console.log(courseDetails);

  return (
    <div>
      <h2>All course: {courseDetails.length}</h2>
      {
        courseDetails.map(courseDetail => <CourseDetailsCard
          key={courseDetail._id}
          courseDetail={courseDetail}></CourseDetailsCard>)
      }
    </div>
  );
};

export default AllCourse;