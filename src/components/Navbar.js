import React from 'react'
import { Link,useNavigate } from 'react-router-dom';
import ShowAll from './ShowAll' 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar=()=>{

    return(
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Accident Info</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/showAll">Data</Nav.Link>
            <Nav.Link href="/upload">Verifier</Nav.Link>
            <Nav.Link href="/uploadData">Search</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default NavBar;