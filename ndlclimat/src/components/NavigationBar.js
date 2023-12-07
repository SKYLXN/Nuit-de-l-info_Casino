import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/NavigationBar.css';

export default function NavigationBar({ toggleTheme }) {

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
                <Nav.Link as={Link} to="/quizz">Quizz</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
              </Nav>

              {/* Bouton pour changer de thème */}
              <Button onClick={toggleTheme} variant="outline-secondary">
                Changer de Thème
              </Button>

            </Navbar.Collapse>
          </React.Fragment>
        </Container>
      </Navbar>
    </div>
  );
};
