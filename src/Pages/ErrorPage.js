import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className='text-center mt-5'>
      <h2>This Route is Not Exist</h2>
      <h1 className='text-danger'>Error 404</h1>
      <Link to='/home'><button className='mt-5 px-4 py-2 rounded border-0 bg-success text-white fw-bold'>Go Back to Home Page</button></Link>
    </div>
  );
};

export default ErrorPage;