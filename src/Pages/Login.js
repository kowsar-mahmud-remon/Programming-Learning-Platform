import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
  return (
    <div className='mt-5'>
      <Form className='w-50 mx-auto'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name='password' type="password" placeholder="Password" />
        </Form.Group>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
        <br />
        <Button className='mt-2' variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;