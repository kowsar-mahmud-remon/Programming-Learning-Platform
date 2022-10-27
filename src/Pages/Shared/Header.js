import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='mb-4'>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand><Link to="/" className='text-decoration-none text-light fs-4'>Programming Learning Platform</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link><Link to='/home' className='text-decoration-none text-light'>Home</Link></Nav.Link>
              <Nav.Link><Link to='/courses' className='text-decoration-none text-light'>Courses</Link></Nav.Link>
              <Nav.Link><Link to='/faq' className='text-decoration-none text-light'>FAQ</Link></Nav.Link>
              <Nav.Link><Link to='/blog' className='text-decoration-none text-light'>Blog</Link></Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link><Link to='/login'></Link>Login</Nav.Link>
              <Nav.Link><Link to='/signup'></Link>SignUp</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;