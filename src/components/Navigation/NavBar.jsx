import React from 'react';
import { Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { GithubContext } from './../../context/context';
import { Image } from 'react-bootstrap';
import Loading from './../../utils/Loading';
import './NavBar.css';

const NavBar = () => {

    const { avatar, loading, login } = React.useContext(GithubContext);

   return(
   <Navbar>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse className="justify-content-end">
        <span>{login}</span>
          {
            loading ? <Loading /> : <Image className="avatar" src={ avatar } roundedCircle />
          }
      </Navbar.Collapse>
    </Navbar>
   )
}

export default NavBar