import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet, useLoaderData } from 'react-router-dom';
import AllCourse from './AllCourse';
import CourseDetailsCard from './Shared/CourseDetailsCard';
import LeftSide from './Shared/LeftSide';

const Courses = () => {
  const courseDetails = useLoaderData();
  console.log(courseDetails);
  return (
    <div>
      <h2>course details: {courseDetails.length}</h2>
      {
        courseDetails.map(courseDetail => <CourseDetailsCard key={courseDetail._id}
          courseDetail={courseDetail}></CourseDetailsCard>)
      }
    </div>
  );
};

export default Courses;