import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import signIn from '../../helpers/auth/signIn';
import checkAppStatus from '../../helpers/auth/checkAppStatus';
import { getAuthors } from '../../helpers/data/authorData';
import { getBooks } from '../../helpers/data/bookData';

const LoginButton = ({ checkLoggedIn, setAuthors, setBooks }) => {
  const handleClick = () => {
    checkAppStatus();
    signIn().then(() => {
      checkLoggedIn();
      const userID = firebase.auth().currentUser.uid;
      getAuthors(userID).then((authorsArr) => {
        setAuthors(authorsArr);
      });

      getBooks(userID).then((booksArr) => {
        setBooks(booksArr);
      });
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
  checkLoggedIn: PropTypes.func.isRequired,
  setAuthors: PropTypes.func.isRequired,
  setBooks: PropTypes.func.isRequired
};

export default LoginButton;
