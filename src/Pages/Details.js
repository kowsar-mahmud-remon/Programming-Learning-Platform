import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaStar } from 'react-icons/fa';

const Details = () => {
  const courseDetails = useLoaderData();
  console.log(courseDetails);
  const { title, course_price, img, rating, details, course_id } = courseDetails;
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text className='py-2'>
            {details}
          </Card.Text>
          <Link to={`/courses/course/${course_id}`}><Button variant="primary">Go Previous Course</Button></Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Details;