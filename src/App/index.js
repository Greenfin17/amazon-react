import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import firebase from 'firebase';
// import BookForm from '../components/forms/BookForm';
import LoginButton from '../components/buttons/LoginButton';
// import LogoutButton from '../components/buttons/LogoutButton';
import NavBar from '../components/NavBar';
import Routes from '../helpers/Routes';

function App() {
  const [authors, setAuthors] = useState([]);
  const [books, setBooks] = useState([]);
  const [user, setUser] = useState(null);
  const [singleAuthor, setSingleAuthor] = useState({
    firebaseKey: '',
    uid: '',
    first_name: '',
    last_name: '',
    email: '',
    favorite: false,
  });
  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          username: authed.email.split('@gmail.com')[0]
        };
        setUser(userInfoObj);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <Router>
      <div className='App'>
        { !user && <LoginButton checkLoggedIn={setUser}
          setAuthors={setAuthors}
          setBooks={setBooks} /> }
          { user && <NavBar checkLoggedIn={setUser} /> }
          <div className='main-container'>
            <Routes
              authors={authors}
              setAuthors={setAuthors}
              books={books}
              setBooks={setBooks}
              user={user}
              singleAuthor={singleAuthor}
              setSingleAuthor={setSingleAuthor}
            />
          </div>
      </div>
    </Router>
  );
}

export default App;
