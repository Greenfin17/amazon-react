import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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

const NavBar = ({ checkedLoggedIn }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">React</NavbarBrand>
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
          <LogoutButton checkedLoggedIn={checkedLoggedIn} />
        </Collapse>
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {
  checkedLoggedIn: PropTypes.func.isRequired
};

export default NavBar;
