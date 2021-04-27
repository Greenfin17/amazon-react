import React, { useState } from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { createAuthor, updateAuthor } from '../../helpers/data/authorData';

const AuthorForm = ({
  firebaseKey,
  firstName,
  lastName,
  email,
  favorite,
  setAuthors
}) => {
  const [author, setAuthor] = useState({
    firebaseKey: firebaseKey || null,
    firstName: firstName || '',
    lastName: lastName || '',
    email: email || '',
    favorite: favorite || false,
  });
  const handleInputChange = (e) => {
    setAuthor((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // add an Author
    if (author.firebaseKey) {
      updateAuthor(author.firebaseKey, author).then((authorArray) => setAuthors(authorArray));
    } else {
      createAuthor(author).then((authorArray) => setAuthors(authorArray));
    }
  };

  return (
    <div className='form-container'>
      <form className='author-form mb-4'>
        <div className='form-group'>
          <label htmlFor='first-name'>Author First Name</label>
          <input type='text' className='form-control' aria-describedby='authorName'
            name='firstName' value={firstName} onChange={handleInputChange} placeholder='Enter Author First Name' required />
        </div>
        <div className='form-group'>
          <label htmlFor='last-name'>Last Name</label>
          <input type='text' className='form-control' id='last-name'
            name='lastName' value={lastName} onChange={handleInputChange} placeholder='Last Name' required />
        </div>
        <div className='htmlForm-group'>
          <label htmlFor='email'>Email</label>
          <input type='email' className='form-control' id='email'
            name='email' value={email} onChange={handleInputChange} placeholder='Email' required />
        </div>
        <div className='form-check'>
          <input type='checkbox' className='form-check-input' name='favorite' />
          <label className='form-check-label' htmlFor ='favorite'>Favorite?</label>
        </div>
        <Button type='submit' className='btn btn-primary'
          onClick={handleSubmit}>Submit Author</Button>
      </form>
    </div>
  );
};

AuthorForm.propTypes = {
  firebaseKey: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  favorite: PropTypes.bool,
  setAuthors: PropTypes.func.isRequired
};

export default AuthorForm;
