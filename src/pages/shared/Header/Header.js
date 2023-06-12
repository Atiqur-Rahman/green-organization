import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to="/" className="lh-1 logo">
                        <span className="fs-3 fw-semibold text-success m-0">Green</span> <br /> <span className="fs-4 m-0 pt-0">Organization</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto d-flex align-items-center">
                            <Nav.Link as={Link} to="/">
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} to="/donation">
                                Donation
                            </Nav.Link>
                            <Nav.Link as={Link} to="/events">
                                Events
                            </Nav.Link>
                            <Nav.Link as={Link} to="/blog">
                                Blog
                            </Nav.Link>
                            <Nav.Link as={Link} to="/register">
                                <button className="bg-primary text-white border rounded-1 px-4 py-1 ">Register</button>
                            </Nav.Link>
                            <Nav.Link as={Link} to="/login">
                                <button className=" text-primary fw-bold border border-2 border-primary rounded-1 px-4 py-1 ">Login</button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
