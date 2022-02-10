import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Logo from "../image/logo.png";

const Navi = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="nav_head"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img src={Logo} className="nav_logo" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" className="pages">
                Home
              </Nav.Link>
              <Nav.Link href="courses" className="pages">
                Courses
              </Nav.Link>
              <Nav.Link href="qa" className="pages">
                Q&A
              </Nav.Link>
              <Nav.Link href="tdee" className="pages">
                TDEE
              </Nav.Link>
              <Nav.Link href="contact" className="pages">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navi;
