import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';
// import firebase from 'firebase';
import { createAuthor, getSingleAuthor, updateAuthor } from '../../helpers/data/authorData';

const AuthorForm = ({
  setAuthors,
  user
}) => {
  const [singleAuthor, setSingleAuthor] = useState({
    firebaseKey: '',
    uid: '',
    first_name: '',
    last_name: '',
    email: '',
    favorite: false,
  });
  const { id } = useParams();
  const history = useHistory();
  // const isChecked = favorite ? 'checked' : '';
  const handleInputChange = (e) => {
    setSingleAuthor((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.name !== 'favorite' ? e.target.value : e.target.checked
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // add an Author
    if (singleAuthor.firebaseKey) {
      updateAuthor(user.uid, singleAuthor.firebaseKey, singleAuthor).then((authorArr) => setAuthors(authorArr));
      history.push('/authors');
    } else {
      createAuthor(user.uid, singleAuthor).then((authorArr) => setAuthors(authorArr));
      history.push('/authors');
    }
  };

  useEffect(() => {
    getSingleAuthor(id).then((author) => setSingleAuthor(author));
  }, []);

  return (
    <div className='form-container'>
      <form className='author-form mb-4'>
        <div className='form-group'>
          <label htmlFor='first-name'>Author First Name</label>
          <input type='text' className='form-control' aria-describedby='singleAuthorName'
            name='first_name' value={singleAuthor.first_name} onChange={handleInputChange} placeholder='Enter Author First Name' required />
        </div>
        <div className='form-group'>
          <label htmlFor='last-name'>Last Name</label>
          <input type='text' className='form-control' id='last-name'
            name='last_name' value={singleAuthor.last_name} onChange={handleInputChange} placeholder='Last Name' required />
        </div>
        <div className='htmlForm-group'>
          <label htmlFor='email'>Email</label>
          <input type='email' className='form-control' id='email'
            name='email' value={singleAuthor.email} onChange={handleInputChange} placeholder='Email' required />
        </div>
        <div className='form-check'>
          <input type='checkbox' className='form-check-input'
            name='favorite' checked={singleAuthor.favorite}
            value='true' onChange={handleInputChange}/>
          <label className='form-check-label' htmlFor ='favorite'>Favorite?</label>
        </div>
        <Button type='submit' className='btn btn-primary'
          onClick={handleSubmit}>Submit Author</Button>
      </form>
    </div>
  );
};

AuthorForm.propTypes = {
  setAuthors: PropTypes.func,
  user: PropTypes.any
};

export default AuthorForm;
