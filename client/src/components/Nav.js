import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const Navbar = () => {
    // set useState to display modal when clicked
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <Navbar expand='lg'>
                <Container fluid>
                    <Navbar.Brand as={Link} to='/'>
                        Tutor Time
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='navbar' />
                    <Navbar.Collapse id='navbar'>
                        <Nav>
                            {/* change link to tutors page when created */}
                            <Nav.Link as={Link} to='/'>
                                Find Tutors
                            </Nav.Link>
                            {/* use terenary statment if user is logged in or not */}
                            {/* add modal data based on whether auth is created */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* create modal data */}
            <Modal size='lg' show={showModal} onHide={() => setShowModal(false)} aria-labelledby='signup-modal'>
                {/* create tabs to switch between login and signup */}
                <Tab.Container defaultActiveKey='login'>
                    <Modal.Header closeButton>
                        <Nav>
                            <Nav.Item>
                                <Nav.Link eventKey='login'>Login</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey='signup'>Signup</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Modal.Header>
                    <Modal.Body>
                        <Tab.Content>
                            <Tab.Pane eventKey='login'>
                                <LoginForm handleModalClose={() => setShowModal(false)} />
                            </Tab.Pane>
                            <Tab.Pane eventKey='signup'>
                                <SignupForm handleModalClose={() => setShowModal(false)} />
                            </Tab.Pane>
                        </Tab.Content>
                    </Modal.Body>
                </Tab.Container>
            </Modal>
        </div>
    )
}