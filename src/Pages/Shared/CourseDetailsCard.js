import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import { Col, Row } from 'react-bootstrap';


const CourseDetailsCard = ({ courseDetail }) => {
  const { _id, name, title, course_price, img, rating, details } = courseDetail;
  console.log(courseDetail);
  return (
    <Col lg='6'>
      <Card className="mb-5">
        <Card.Header className='text-center'><h4>{name}</h4></Card.Header>
        <Card.Body className='pb-3'>
          <Card.Img style={{ height: '300px' }} variant="top" src={img} />
          <Card.Title className='mt-3'>{title}</Card.Title>
          <Card.Text>
            {
              details.length > 100 ?
                <p>{details.slice(0, 150) + "..."} <Link to={`/courses/details/${_id}`}>Read More</Link></p>
                :
                <p>{details}</p>
            }
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between py-3">
          <div className="">Course Price: ${course_price}</div>
          <div className=""><FaStar className='text-warning'></FaStar> {rating}</div>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default CourseDetailsCard;