import React from 'react';
import PropTypes from 'prop-types';
import signIn from '../../helpers/auth/signIn';
import checkAppStatus from '../../helpers/auth/checkAppStatus';

const LoginButton = ({ checkLoggedIn }) => {
  const handleClick = () => {
    checkAppStatus();
    signIn().then(() => {
      checkLoggedIn();
    });
  };
  return (
    <div>
      <button name='google-auth' className='btn btn-danger'
        onClick={handleClick}>GOOGLE LOGIN
      </button>
    </div>
  );
};

LoginButton.propTypes = {
  checkLoggedIn: PropTypes.func.isRequired
};

export default LoginButton;
