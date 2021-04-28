import React from 'react';
import PropTypes from 'prop-types';
import AuthorCard from '../components/cards/AuthorCard';

function Authors({ authors, loggedIn }) {
  console.warn(loggedIn);
  return (
    <div className='authors'>
      <h2>Authors Page</h2>
      <div className='store'>
        { loggedIn && authors.map((author) => <AuthorCard
            key = {author.firebaseKey}
            firebaseKey = {author.firebaseKey}
            firstName = {author.first_name}
            lastName = {author.last_name}
            email = {author.email}
          />)
        }
      </div>
    </div>
  );
}

Authors.propTypes = {
  authors: PropTypes.array.isRequired,
  loggedIn: PropTypes.bool.isRequired
};

export default Authors;
