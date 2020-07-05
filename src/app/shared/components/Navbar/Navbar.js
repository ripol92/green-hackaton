import React from 'react';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from 'react-router-dom';

import './navbar.scss';
import '../Button/button.scss';

function NavBar(props) {

    const menuItems = props.menuParams && props.menuParams.menuItems && props.menuParams.menuItems.length > 0 ?
        props.menuParams.menuItems.map((item, index) =>
            item.hasSub ?
                <NavDropdown title={item.title} id="basic-nav-dropdown" key={index}>
                    {
                        item.subMenu && item.subMenu.length > 0 ?
                            item.subMenu.map((subMenuItem, i) =>
                                <NavDropdown.Item href={subMenuItem.link} key={i}>{subMenuItem.title}</NavDropdown.Item>
                            ) : <></>
                    }
                </NavDropdown> :
                <Link className="nav-link" to={item.link} key={index}>{item.title}</Link>
        ) : <></>

    return (
        <div className="Navbar">
            <div className="container">
                <Navbar bg="white" expand="lg">
                    <Navbar.Brand href="/">
                        <h2><span className="green-text">Clean</span> City</h2>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            {menuItems}
                        </Nav>
                        {
                            props.menuParams && props.menuParams.loginLink ?
                                <Link className="nav-link" to="/auth/login">Sign in</Link> : <></>
                        }
                        {
                            props.menuParams && props.menuParams.menuButton && props.menuParams.menuButton.title.length > 0 ?
                                <Link className={props.menuParams.menuButton.className} to={props.menuParams.menuButton.link}>{props.menuParams.menuButton.title}</Link> : <></>
                        }
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    );
}

export default NavBar;