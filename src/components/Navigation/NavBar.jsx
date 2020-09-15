import React from 'react';
import {Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { GithubContext } from './../../context/context';
import { Image } from 'react-bootstrap';
import Loading from './../../utils/Loading';
import './NavBar.css';

const NavBar = () => {

    const { avatar, loading, login } = React.useContext(GithubContext);

   return(
  //  <Navbar>
  //     <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
  //     <Navbar.Collapse className="justify-content-end">
  //       <span>{login}</span>
  //         {
  //           loading ? <Loading /> : <Image className="avatar" src={ avatar } roundedCircle />
  //         }
  //     </Navbar.Collapse>
  //   </Navbar>
  <Navbar collapseOnSelect expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
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
    <Nav className="avatar">
      <span>{login}</span>
          {
           loading ? <Loading /> : <Image className="avatar-user" src={ avatar } roundedCircle />
          }
    </Nav>
  </Navbar.Collapse>
</Navbar>
   )
}

export default NavBar