import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import { getAuthors } from '../helpers/data/authorData';
import AuthorCard from '../components/cards/AuthorCard';

function Authors({ authors, setAuthors }) {
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

Authors.propTypes = {
  authors: PropTypes.array.isRequired,
  setAuthors: PropTypes.func.isRequired
};

export default Authors;
