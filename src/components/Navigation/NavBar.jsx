import React from 'react';
import { Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { GithubContext } from './../../context/context';
import { Image } from 'react-bootstrap';
import Loading from './../../utils/Loading';
import './NavBar.css';

const NavBar = () => {

    const { avatar, loading } = React.useContext(GithubContext);
    
   return(
   <Navbar>
     
       <LinkContainer to="/github">
         <Navbar.Brand>github</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse className="justify-content-end">
          {
            loading ? <Loading /> : <Image className="avatar" src={ avatar } roundedCircle />
          }
      </Navbar.Collapse>
    </Navbar>
   )
}

export default NavBar