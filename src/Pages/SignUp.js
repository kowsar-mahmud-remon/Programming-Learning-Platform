import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className='mt-5'>
      <Form className='w-50 mx-auto border border-2 rounded'>
        <h2 className='text-center bg-secondary text-light py-2 '>Sign Up</h2>

        <Form.Group className="my-3 p-2" controlId="formBasicName">
          <Form.Label>Full name</Form.Label>
          <Form.Control name='name' type="text" placeholder="Enter name" />
        </Form.Group>

        <Form.Group className="my-3 p-2" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3  p-2" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name='password' type="password" placeholder="Password" />
        </Form.Group>
        <Form.Text className="  p-2">
          We'll never share your email with anyone else.
        </Form.Text>
        <br />
        <Button className='mt-2  p-2 w-100' variant="primary" type="submit">
          SignUp
        </Button>
        <Form.Text className="text-dark">
          <p className='px-2 pt-1'>Already have an account? Please <Link to='/login'>Login</Link></p>
        </Form.Text>

      </Form>
    </div>
  );
};

export default SignUp;