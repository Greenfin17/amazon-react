import React from 'react';
import PropTypes from 'prop-types';
import signIn from '../../helpers/auth/signIn';
import checkAppStatus from '../../helpers/routers/checkAppStatus';

const LoginButton = ({ loginCheck }) => {
  const handleClick = () => {
    checkAppStatus();
    signIn().then(() => {
      loginCheck();
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
  loginCheck: PropTypes.func.isRequired
};

export default LoginButton;
