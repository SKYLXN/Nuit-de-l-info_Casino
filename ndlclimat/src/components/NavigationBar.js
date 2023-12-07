import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/NavigationBar.css';

export default function NavigationBar() {

  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand>
            <img className="logo" src={logo} alt="Nature" />
          </Navbar.Brand>
          <React.Fragment>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/quizz">
                    Quizz
                  </Nav.Link>
                  <Nav.Link as={Link} to="/about">
                    About
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </React.Fragment>
        </Container>
      </Navbar>
    </div>
  );
};