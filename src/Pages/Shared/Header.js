import React from 'react';
import { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.error(error));
  };
  return (
    <div className='mb-4'>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to='/' className='text-decoration-none'><img
              alt=""
              src="logo.png"
              width="40"
              height="40"
              className="d-inline-block"
            />{' '}</Link>
            <Link to="/" className='text-decoration-none text-light fs-4'>Programming Learning Platform</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link><Link to='/home' className='text-decoration-none text-light'>Home</Link></Nav.Link>
              <Nav.Link><Link to='/courses' className='text-decoration-none text-light'>Courses</Link></Nav.Link>
              <Nav.Link><Link to='/faq' className='text-decoration-none text-light'>FAQ</Link></Nav.Link>
              <Nav.Link><Link to='/blog' className='text-decoration-none text-light'>Blog</Link></Nav.Link>

              <NavDropdown title="Theme" id="collasible-nav-dropdown">
                <NavDropdown.Item className='bg-dark text-light' href="#action/3.1">Dark</NavDropdown.Item>
                <NavDropdown.Item className='bg-light' href="#action/3.2">Light</NavDropdown.Item>
              </NavDropdown>

            </Nav>
            <Nav>
              <Nav.Link>
                {
                  user?.uid ?
                    <Link
                      className=''
                      type="name"
                      data-bs-toggle="tooltip"
                      data-bs-placement="name"
                      title={user?.displayName}
                      variant="outline-dark">
                      <Image
                        style={{ height: '35px' }}
                        roundedCircle
                        src={user?.photoURL}>
                      </Image>
                      <Button className='btn btn-dark ms-1' onClick={handleLogOut}>Log Out</Button>
                    </Link>
                    :
                    <>
                      <Link className='text-decoration-none text-light me-3' to='/login'>Login</Link>
                      <Link className='text-decoration-none text-light' to='/signup'>SignUp</Link>
                    </>
                }
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;