import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AuthorCard from '../components/cards/AuthorCard';
import AddAuthorButton from '../components/buttons/AddAuthorButton';
import AuthorForm from '../components/forms/AuthorForm';

function Authors({ authors, setAuthors, loggedIn }) {
  const [showAuthorForm, setShowAuthorForm] = useState(false);
  const [updateAuthor, setUpdateAuthor] = useState(false);
  return (
    <div className='authors'>
      <h2>Authors Page</h2>
      { loggedIn && <AddAuthorButton
        setShowAuthorForm={setShowAuthorForm}
        showAuthorForm={showAuthorForm}/> }
      { showAuthorForm && <AuthorForm setAuthors={setAuthors} /> }
      <div className='store'>
        { loggedIn && authors.map((author) => <AuthorCard
            setUpdateAuthor={setUpdateAuthor}
            updateAuthor={updateAuthor}
            setAuthors={setAuthors}
            key = {author.firebaseKey}
            firebaseKey = {author.firebaseKey}
            firstName = {author.first_name}
            lastName = {author.last_name}
            email = {author.email}
            favorite = {author.favorite}
          />)
        }
      </div>
    </div>
  );
}

Authors.propTypes = {
  authors: PropTypes.array.isRequired,
  setAuthors: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired
};

export default Authors;
