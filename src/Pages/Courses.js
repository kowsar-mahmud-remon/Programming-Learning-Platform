import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet, useLoaderData } from 'react-router-dom';
import AllCourse from './AllCourse';
import LeftSide from './Shared/LeftSide';

const Courses = () => {
  // const courseDetails = useLoaderData();
  // console.log(courseDetails);
  return (
    <div>
      <Container>
        <Row>
          <Col lg='3'>
            <LeftSide></LeftSide>
          </Col>
          <Col lg='9'>
            <Outlet></Outlet>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Courses;