import React from 'react';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
const NavBar = () => {
   return(
   <Navbar>
       <LinkContainer to="/github">
         <Navbar.Brand>github</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse className="justify-content-end">
            <LinkContainer to="/github">
                <Nav.Link eventKey="github">Link to github</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/avatar">
                <Nav.Link eventKey="avatar">avatar</Nav.Link>
            </LinkContainer>
      </Navbar.Collapse>
    </Navbar>
   )
}

export default NavBar