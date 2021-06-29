import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import './NavBar.css';

const NavBar = () => {
  return (
    
      <Navbar expand="sm" bg="info" variant="dark" te>
         
        <Navbar.Brand href="#home">WhatToCook</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Recipes</Nav.Link>
          <Nav.Link href="#pricing">Ingredients</Nav.Link>
          <Nav.Link href="#pricing">Enter App</Nav.Link>
        </Nav>
        
      </Navbar>
    
  );
};

export default NavBar;
