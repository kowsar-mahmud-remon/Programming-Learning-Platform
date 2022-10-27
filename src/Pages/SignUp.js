import React, { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';


const SignUp = () => {
  const [error, setError] = useState('');
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, photoURL, email, password);

    createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setError('');
        form.reset();
        handleUpdateUserProfile(name, photoURL);
      })
      .catch(error => {
        console.error(error);
        setError(error.message);
      });
  };

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL
    };
    updateUserProfile(profile)
      .then(() => { })
      .catch(error => console.error(error));
  };

  return (
    <div className='my-5'>
      <Form onSubmit={handleSubmit} className='w-50 mx-auto border border-2 rounded'>
        <h2 className='text-center bg-secondary text-light py-2 '>Sign Up</h2>

        <Form.Group className="my-3 p-2" controlId="formBasicName">
          <Form.Label>Full name</Form.Label>
          <Form.Control name='name' type="text" placeholder="full name" />
        </Form.Group>

        <Form.Group className="my-3 p-2" controlId="formBasicPhotoURL">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control name='photoURL' type="text" placeholder="photo URL" />
        </Form.Group>

        <Form.Group className="my-3 p-2" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name='email' type="email" placeholder="enter email" required />
        </Form.Group>

        <Form.Group className="mb-3  p-2" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name='password' type="password" placeholder="password" required />
        </Form.Group>
        <Form.Text className="text-danger p-2">
          {error}
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