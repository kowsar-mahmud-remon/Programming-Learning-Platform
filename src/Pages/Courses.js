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
      <h2>ALL Course Details: {courseDetails.length}</h2>
      <Row>
        {
          courseDetails.map(courseDetail => <CourseDetailsCard key={courseDetail._id}
            courseDetail={courseDetail}></CourseDetailsCard>)
        }
      </Row>
    </div>
  );
};

export default Courses;