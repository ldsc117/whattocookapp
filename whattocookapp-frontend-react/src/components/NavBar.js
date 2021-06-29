import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import './NavBar.css';

const NavBar = () => {
  return (
    
      <Navbar expand="sm" bg="info" variant="dark" te>
         
        <Navbar.Brand href="/">WhatToCook</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/recipes">Recipes</Nav.Link>
          <Nav.Link href="/ingredients">Ingredients</Nav.Link>
          <Nav.Link href="/app">Enter App</Nav.Link>
        </Nav>
        
      </Navbar>
    
  );
};

export default NavBar;
