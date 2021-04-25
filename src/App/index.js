import React, { useState } from 'react';
import './App.scss';
import firebase from 'firebase';
import BookForm from '../components/BookForm';
import LoginButton from '../components/buttons/LoginButton';
import LogoutButton from '../components/buttons/LogoutButton';
import BooksPage from '../components/BooksPage';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const checkLoggedIn = () => {
    if (loggedIn) {
      setLoggedIn(false);
    } else if (firebase.auth().currentUser) {
      setLoggedIn(true);
    }
  };

  return (
    <div className='App'>
      <div className='main-container'>
       { !loggedIn && <LoginButton loginCheck={checkLoggedIn} /> }
       { loggedIn && <LogoutButton loginCheck={checkLoggedIn} /> }
       { loggedIn && <BookForm /> }
       { loggedIn && <BooksPage />}
      </div>
    </div>
  );
}

export default App;
