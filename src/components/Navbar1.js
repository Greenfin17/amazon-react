import React from 'react';
import { Nav } from 'reactstrap';
import useHistory from 'react-router-dom';

// import LoginButton from '../components/buttons/LoginButton';
// import LogoutButton from '../components/buttons/LogoutButton';
import signOut from '../helpers/auth/signOut';

const Navbar1 = () => {
  const history = useHistory();
  const logoutClick = () => {
    signOut().then(() => {
      history.push('/');
    });
  };

  return (
    <Nav className='navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-4'>
      <a className='navbar-brand title' href='#'>Almost Amazon</a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item active'>
            <a className='nav-link' onClick={pageClick} href='#' id='all-books'>
              All Books <span className='sr-only'>(current)</span>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' onClick={pageClick} href='#' id='sale-books'>Books on Sale</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' onClick={pageClick} href='#' id='authors'>Authors</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' onClick={pageClick} href='#' id='favorite-authors'>Favorite Authors</a>
          </li>
          <li>
          <input
            className='form-control mr-sm-2'
            id='search'
            placeholder='Search Book Titles'
            aria-label='Search'
          />
          </li>
        </ul>
        <div id='cart-button'></div>
        <div>
          <button id="google-auth" className="btn btn-danger ml-2"
            onClick={logoutClick}>
            <i className="fas fa-sign-out-alt logout"
              onClick={logoutClick}></i><br />Log Out</button>
        </div>
      </div>
    </Nav>
  );
};

export default Navbar1;
