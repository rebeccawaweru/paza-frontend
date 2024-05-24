import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const MainNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">PAZA</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mL-auto">
          <Nav.Link href="#home">Profile</Nav.Link>
          <Nav.Link href="#link">Job board</Nav.Link>
          <Nav.Link href="#link">Showcase</Nav.Link>
          <Nav.Link href="#link">Dashboard</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MainNavbar;
