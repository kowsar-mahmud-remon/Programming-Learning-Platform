import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import LeftSide from '../Pages/Shared/LeftSide';

const OtherMain = () => {
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

export default OtherMain;