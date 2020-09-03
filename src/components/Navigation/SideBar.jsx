import React from 'react';
import { Nav, Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './SideBar.css'
const SideBar = () => {
   return(
          <Nav defaultActiveKey="/home" className="flex-column">
            <LinkContainer to="/home">
                <Nav.Link>Info</Nav.Link>
            </LinkContainer>
            <Nav.Link eventKey="link-1"> Repositories</Nav.Link>
            <Nav.Link eventKey="link-2"> About me</Nav.Link>
            <Nav.Link eventKey="link-3"> Statistick</Nav.Link>
            <Nav.Link eventKey="link-4">  404</Nav.Link>
           </Nav>
   )
}

export default SideBar