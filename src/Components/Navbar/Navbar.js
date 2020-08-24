import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import "../Navbar/Navbar.scss";


const Navall = () => (
  <Navbar
    collapseOnSelect
    expand="lg"
    bg="dark"
    variant="dark"
    className="Nav_bar position-fixed"
  >
    <Navbar.Brand className="text-warning">SEJA MILONÁRIO</Navbar.Brand>

    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto pl-3">
        <Nav.Link href="#home">Aulas</Nav.Link>
        <Nav.Link href="#home">Mentoria</Nav.Link>
        <Nav.Link href="#link">Contato</Nav.Link>
      </Nav>
      <Nav className="">
        <Button variant="warning text-white rounded-pill" className="m-2">
          Login
        </Button>

        <Button
          variant="outline-warning text-white rounded-pill"
          className="m-2"
        >
          Inscrever-se
        </Button>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navall;
