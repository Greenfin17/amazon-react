import React, { useState } from 'react';
import './App.scss';
import firebase from 'firebase';
import BookForm from '../components/forms/BookForm';
import LoginButton from '../components/buttons/LoginButton';
import LogoutButton from '../components/buttons/LogoutButton';
import BooksPage from '../components/BooksPage';
import AuthorsPage from '../components/AuthorsPage';
import Navbar from '../components/Navbar';

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
       { loggedIn && <Navbar /> }
       { loggedIn && <BookForm/>}
       { loggedIn && <BooksPage />}
       { loggedIn && <AuthorsPage />}
      </div>
    </div>
  );
}

export default App;
