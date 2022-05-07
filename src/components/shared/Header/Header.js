import React from 'react';
import "./Header.css";
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../../../images/img/logoLight.png";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../../firebase.init";
import { signOut } from 'firebase/auth';

const Header = () => {
      const [user] = useAuthState(auth);

      return (
            <Navbar collapseOnSelect expand="lg" sticky="top" variant="dark" className="navbar-custom">
                  <Container>
                        <Navbar.Brand as={Link} to="/">
                              <img src={logo} alt="" className='logo' />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">

                              <Nav className="ms-auto d-flex align-items-center">
                                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                                    <Nav.Link as={Link} to="/services">Services</Nav.Link>
                                    <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                                    {
                                          user ?
                                                <span
                                                 className='text-light ms-2 fw-bold' 
                                                 style={{cursor : 'pointer'}}
                                                 onClick={() => signOut(auth)}
                                                 >Sign out</span>
                                                :
                                                <>
                                                      <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                                      <Nav.Link as={Link} to="/register">Register</Nav.Link>
                                                </>
                                    }
                              </Nav>
                        </Navbar.Collapse>
                  </Container>
            </Navbar>
      );
};

export default Header;