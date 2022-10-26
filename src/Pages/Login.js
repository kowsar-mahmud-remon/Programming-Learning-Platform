import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='mt-5'>
      <Form className='w-50 mx-auto border border-2 rounded'>
        <h2 className='text-center bg-secondary text-light py-2 '>Log In</h2>
        <Form.Group className="my-3 p-2" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3  p-2" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name='password' type="password" placeholder="Password" />
        </Form.Group>
        <Form.Text className="text-muted  p-2">
          New to Ema-john? Create New Account
        </Form.Text>
        <br />
        <Button className='mt-2  p-2 w-100' variant="primary" type="submit">
          Login
        </Button>
        <Form.Text className="text-dark">
          <p className='px-2 pt-1'>New to Ema-john? <Link to='/signup'>Create New Account</Link></p>
        </Form.Text>
      </Form>
    </div>
  );
};

export default Login;