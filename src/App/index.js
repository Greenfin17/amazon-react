import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import firebase from 'firebase';
// import BookForm from '../components/forms/BookForm';
import LoginButton from '../components/buttons/LoginButton';
// import LogoutButton from '../components/buttons/LogoutButton';
import NavBar from '../components/NavBar';
import Routes from '../helpers/Routes';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [authors, setAuthors] = useState([]);
  const [books, setBooks] = useState([]);
  const checkLoggedIn = () => {
    if (loggedIn) {
      setLoggedIn(false);
    } else if (firebase.auth().currentUser) {
      setLoggedIn(true);
    }
  };

  return (
    <div className='App'>
      { !loggedIn && <LoginButton checkLoggedIn={checkLoggedIn}
        setAuthors={setAuthors}
        setBooks={setBooks} /> }
      <Router>
        { loggedIn && <NavBar checkLoggedIn={checkLoggedIn} /> }
        <div className='main-container'>
          <Routes
            authors={authors}
            setAuthors={setAuthors}
            books={books}
            setBooks={setBooks}
            loggedIn={loggedIn}
          />
        </div>
      </Router>
    </div>
  );
}

export default App;
