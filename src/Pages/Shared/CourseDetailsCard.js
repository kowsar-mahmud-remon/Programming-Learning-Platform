import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import { Col, Row } from 'react-bootstrap';
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";


const ref = React.createRef();

const CourseDetailsCard = ({ courseDetail }) => {
  const { _id, name, title, course_price, img, rating, details } = courseDetail;
  console.log(courseDetail);
  return (
    <Col ref={ref} lg='6'>
      <Card className="mb-5">
        <Card.Header className='text-center d-flex justify-content-between'>
          <h4>{name}</h4>
          <Pdf targetRef={ref} filename="course-details.pdf">
            {({ toPdf }) => <Button onClick={toPdf}>Generate Pdf</Button>}
          </Pdf>
        </Card.Header>
        <Card.Body className='pb-3'>
          <Card.Img style={{ height: '250px' }} variant="top" src={img} />
          <Card.Title className='mt-3'>{title}</Card.Title>
          <Card.Text className='pt-2'>
            {
              details.length > 100 ?
                <p>{details.slice(0, 150) + "..."} <Link to={`/courses/details/${_id}`}>Read More</Link></p>
                :
                <p>{details}</p>
            }
          </Card.Text>
          <Link to={`/courses/checkout/${_id}`}><Button variant="primary">Get premium access</Button></Link>
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