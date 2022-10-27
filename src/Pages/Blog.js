import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Blog = () => {
  return (
    <div className='container my-5'>
      <Card className='mb-4'>
        <Card.Body>
          <Card.Title className="bg-dark p-3 text-light rounded">what is cors?</Card.Title>
          <Card.Text className="p-2">
            CORS (Cross-Origin Resource Sharing) is a system, consisting of transmitting HTTP headers, that determines whether browsers block frontend JavaScript code from accessing responses for cross-origin requests. The same-origin security policy forbids cross-origin access to resources.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className='mb-4'>
        <Card.Body>
          <Card.Title className="bg-dark p-3 text-light rounded">Why are you using firebase? What other options do you have to implement authentication?</Card.Title>
          <Card.Text className="p-2">
            The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.
            <br />
            Auth0, MongoDB, Passport and Okta are the most popular alternatives.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className='mb-4'>
        <Card.Body>
          <Card.Title className="bg-dark p-3 text-light rounded">How does the private route work?</Card.Title>
          <Card.Text className="p-2">
            The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className='mb-4'>
        <Card.Body>
          <Card.Title className="bg-dark p-3 text-light rounded">What is Node? How does Node work?</Card.Title>
          <Card.Text className="p-2">
            It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Blog;