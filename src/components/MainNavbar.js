import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

const MainNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img
            src="/paza.png"
            height="30"
            className="d-inline-block align-top mr-2"
            alt=""
          />
          PAZA
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Container className="d-flex justify-content-center">
            <Nav>
              <Nav.Link href="#home">Profile</Nav.Link>
              <Nav.Link href="#link">Job board</Nav.Link>
              <Nav.Link href="#link">Showcase</Nav.Link>
              <Nav.Link href="#link">Dashboard</Nav.Link>
            </Nav>
          </Container>
          <Nav className="ml-auto">
            <Nav.Link href="#search">
              <i className="bi bi-search"></i>
            </Nav.Link>
            <Nav.Link href="#messages">
              <i className="bi bi-chat-dots"></i>
            </Nav.Link>
            <Nav.Link href="#notifications">
              <i className="bi bi-bell"></i>
            </Nav.Link>
            <Nav.Link href="#settings">
              <i className="bi bi-gear"></i>
            </Nav.Link>
            <NavDropdown
              title={
                <img
                  src="path-profile-ing"
                  height="30"
                  className="rounded-circle"
                  alt="Profile"
                />
              }
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#profile">Profile name</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
