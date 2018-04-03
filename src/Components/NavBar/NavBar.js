import React from 'react';
import { Navbar, NavbarBrand, NavbarNav, Collapse, NavItem, NavLink } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';


const NavBar = (props) => {
    return(
        <Router>
            <Navbar color="indigo" dark expand="md" scrolling>
                <NavbarBrand href="/">
                    <strong>Simple</strong>
                </NavbarBrand>
                <Collapse isOpen = { props.collapse } navbar>
                    <NavbarNav className="ml-auto" right>
                    <NavItem >
                        <NavLink className="nav-link" to="#">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="#">Features</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="#">Pricing</NavLink>
                    </NavItem>
                    </NavbarNav>
                </Collapse>
            </Navbar>
        </Router>
    );
}

export default NavBar;