import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { getAuthors } from '../helpers/data/authorData';
import AuthorForm from './forms/AuthorForm';
import AuthorCard from './cards/AuthorCard';

function AuthorsPage() {
  const [authors, setAuthors] = useState([]);
  const userID = firebase.auth().currentUser.uid;

  useEffect(() => {
    getAuthors(userID).then((authorsArr) => {
      console.warn(authorsArr);
      setAuthors(authorsArr);
    });
  }, []);
  console.warn(typeof authors);

  return (
    <div className='authors'>
      <h2>Authors Page</h2>
      <div className='form-container'>
        <AuthorForm
          setAuthors = {setAuthors}
        />
      </div>
      <div className='store'>
        { authors.map((author) => <AuthorCard
          key = {author.firebaseKey}
          firebaseKey = {author.firebaseKey}
          firstName = {author.first_name}
          lastName = {author.last_name}
          email = {author.email}
          setAuthors = {setAuthors}
          />) }
      </div>
    </div>
  );
}

export default AuthorsPage;
