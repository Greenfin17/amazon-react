import React from 'react';
import PropTypes from 'prop-types';
import signOut from '../../helpers/auth/signOut';

const LogoutButton = ({ checkLoggedIn }) => {
  const handleClick = () => {
    signOut().then(() => {
      checkLoggedIn();
    });
  };
  return (
    <div>
    <button id="google-auth" className="btn btn-danger ml-2"
      onClick={handleClick}>
      <i className="fas fa-sign-out-alt logout"
        onClick={handleClick}></i><br />Log Out</button>
    </div>
  );
};

LogoutButton.propTypes = {
  checkLoggedIn: PropTypes.func.isRequired
};

export default LogoutButton;
