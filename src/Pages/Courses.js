import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSide from './Shared/LeftSide';

const Courses = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg='3'>
            <LeftSide></LeftSide>
          </Col>
          <Col lg='9'>
            <h2>all details</h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Courses;