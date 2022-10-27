import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const Login = () => {
  const [error, setError] = useState('');
  const { signIn, providerLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const googleProvider = new GoogleAuthProvider();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError('');
        navigate(from, { replace: true });
      })
      .catch(error => {
        console.error(error);
        setError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch(error => console.error(error));
  };

  return (
    <div className='my-5'>
      <Form onSubmit={handleSubmit} className='w-50 mx-auto border border-2 rounded'>
        <h2 className='text-center bg-secondary text-light py-2 '>Log In</h2>
        <Form.Group className="my-3 p-2" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3  p-2" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name='password' type="password" placeholder="Password" required />
        </Form.Group>
        <Form.Text className="text-danger  p-2">
          {error}
        </Form.Text>
        <br />
        <Button className='mt-2  p-2 w-100' variant="primary" type="submit">
          Login
        </Button>
        <Link onClick={handleGoogleSignIn}><Button className='w-100 my-2'><FaGoogle></FaGoogle> Google Sign</Button></Link>
        <Form.Text className="text-dark">
          <p className='px-2 pt-1'>New to Here? <Link to='/signup'>Create New Account</Link></p>
        </Form.Text>
      </Form>
    </div>
  );
};

export default Login;