import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './SideBar.css'
const SideBar = () => {
   return(
          <Nav defaultActiveKey="/dashboard" className="flex-column">
            <LinkContainer to="/dashboard">
                <Nav.Link eventKey="dashboard">Dashboard</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/profile">
                <Nav.Link eventKey="profile">Profile</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/repositories">
                <Nav.Link eventKey="repositories">Repositories</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/statisticks">
                <Nav.Link eventKey="statisticks">Statisticks</Nav.Link>
            </LinkContainer>
           </Nav>
   )
}

export default SideBar