import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AuthorCard from '../components/cards/AuthorCard';
import AddAuthorButton from '../components/buttons/AddAuthorButton';
import AuthorForm from '../components/forms/AuthorForm';

function Authors({ authors, setAuthors, user }) {
  const [showAuthorForm, setShowAuthorForm] = useState(false);
  const [updateAuthor, setUpdateAuthor] = useState(false);
  console.warn(user);
  return (
    <div className='authors'>
      <h2>Authors Page</h2>
      { user && <AddAuthorButton
        setShowAuthorForm={setShowAuthorForm}
        showAuthorForm={showAuthorForm}/> }
      { showAuthorForm && <AuthorForm setAuthors={setAuthors} /> }
      <div className='store'>
        { user && authors.map((author) => <AuthorCard
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
  user: PropTypes.object
};

export default Authors;
