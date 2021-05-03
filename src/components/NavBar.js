import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
// import checkAppStatus from '../helpers/auth/checkAppStatus';
import LogoutButton from './buttons/LogoutButton';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Almost Amazon</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link className="nav-link" to="/Books">Books</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/Authors">Authors</Link>
            </NavItem>
          </Nav>
          <LogoutButton />
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
