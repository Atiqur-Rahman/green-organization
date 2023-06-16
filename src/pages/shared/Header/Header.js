import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import Loading from '../Loading/Loading';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    };

    error && console.log(error);

    loading && <Loading></Loading>;

    return (
        <Navbar collapseOnSelect expand="md" variant="light" className="p-0">
            <Container className="p-0">
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
                        {user ? (
                            <>
                                <p className="mt-3 ms-5 text-primary">{user.displayName ? user.displayName : 'anonymous'}</p>
                                <button className="bg-danger text-white border border-3 border-danger rounded-2 ms-2" onClick={handleSignOut}>
                                    Sign out
                                </button>
                            </>
                        ) : (
                            <>
                                <Nav.Link as={Link} to="/register">
                                    <button className="bg-primary text-white border rounded-1 px-4 py-1 ">Register</button>
                                </Nav.Link>
                                <Nav.Link as={Link} to="/login">
                                    <button className=" text-primary fw-bold border border-2 border-primary rounded-1 px-4 py-1 ">Login</button>
                                </Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
