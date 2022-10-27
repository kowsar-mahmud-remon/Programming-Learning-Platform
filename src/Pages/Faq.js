import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
  return (
    <div className='container my-5'>
      <Accordion defaultActiveKey="0">

        <Accordion.Item className="mb-5" eventKey="0">
          <Accordion.Header>What is programming?</Accordion.Header>
          <Accordion.Body>
            Programming is the process of creating a set of instructions that tell a computer how to perform a task. Programming can be done using a variety of computer programming languages, such as JavaScript, Python, and C++.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item className="mb-5" eventKey="1">
          <Accordion.Header>What is JavaScript?</Accordion.Header>
          <Accordion.Body>
            Javascript is used by programmers across the world to create dynamic and interactive web content like applications and browsers. JavaScript is so popular that it's the most used programming language in the world, used as a client-side programming language by 97.0% of all websites.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item className="mb-5" eventKey="2">
          <Accordion.Header>What is PHP?</Accordion.Header>
          <Accordion.Body>
            PHP is an open-source server-side scripting language that many devs use for web development. It is also a general-purpose language that you can use to make lots of projects, including Graphical User Interfaces (GUIs).
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item className="mb-5" eventKey="3">
          <Accordion.Header>What is Python?</Accordion.Header>
          <Accordion.Body>
            Python is an interpreted, object-oriented, high-level programming language with dynamic semantics developed by Guido van Rossum. It was originally released in 1991. Designed to be easy as well as fun, the name "Python" is a nod to the British comedy group Monty Python
          </Accordion.Body>
        </Accordion.Item>

      </Accordion>
    </div>
  );
};

export default Faq;