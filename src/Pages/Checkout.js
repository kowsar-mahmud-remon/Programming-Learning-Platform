import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaStar } from "react-icons/fa";

const Checkout = () => {
  const details = useLoaderData();
  const { name, title, course_price, rating } = details;
  return (
    <div>
      <h2 className='text-center'>Check Out</h2>
      <Card className="text-center">
        <Card.Header className='fs-4'>{name}</Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            Course Price: ${course_price}
          </Card.Text>
          <Button variant="primary">Enroll Now</Button>
        </Card.Body>
        <Card.Footer className="text-muted"><FaStar className='text-warning'></FaStar> {rating}</Card.Footer>
      </Card>
    </div>
  );
};

export default Checkout;