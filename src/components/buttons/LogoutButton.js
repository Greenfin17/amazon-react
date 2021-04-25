import React from 'react';
import PropTypes from 'prop-types';
import signOut from '../../helpers/auth/signOut';

const LogoutButton = ({ loginCheck }) => {
  const handleClick = () => {
    signOut().then(() => {
      loginCheck();
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
  loginCheck: PropTypes.func.isRequired
};

export default LogoutButton;
