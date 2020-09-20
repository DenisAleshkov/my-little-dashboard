import React from 'react';
import Error from './../../utils/Error'
import { Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { GithubContext } from './../../context/context';
import { Image } from 'react-bootstrap';
import Loading from './../../utils/Loading';
import './NavBar.css';

const NavBar = () => {

    const { avatar, loading, login, error } = React.useContext(GithubContext);

    return (<>
        { error && <Error />}
        <Navbar collapseOnSelect expand="lg">

            <Navbar.Brand href="#home">Github-Portfolio</Navbar.Brand>
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
                <Nav className="avatar" style={{ alignItems: 'center' }}>
                    <span>{login}</span>
                    {
                        loading ? <Loading /> : <Image className="avatar-user" src={avatar} roundedCircle />
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>
    )
}

export default NavBar