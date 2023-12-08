import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png';
import noelIcon from '../assets/noel.png'; // Importez l'icône de Noël
import rechauffementIcon from '../assets/rechauffementClimatique.png'; // Importez l'icône de réchauffement climatique
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/NavigationBar.css';

export default function NavigationBar({ setTheme, ChristmasTheme, ClimateChangeTheme }) {
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

              {/* Boutons pour changer de thème avec icônes */}
              <button onClick={() => setTheme(ChristmasTheme)} className="theme-icon">
                <img src={noelIcon} alt="Noël" className="theme-icon" />
              </button>
              <button onClick={() => setTheme(ClimateChangeTheme)} className="theme-icon">
                <img src={rechauffementIcon} alt="Réchauffement climatique" className="theme-icon" />
              </button>

            </Navbar.Collapse>
          </React.Fragment>
        </Container>
      </Navbar>
    </div>
  );
};
