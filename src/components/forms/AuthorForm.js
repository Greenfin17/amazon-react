import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { Button } from 'reactstrap';
// import firebase from 'firebase';
import { createAuthor, getSingleAuthor, updateAuthor } from '../../helpers/data/authorData';

const AuthorForm = ({
  setAuthors,
  singleAuthor,
  setSingleAuthor
}) => {
  const { id } = useParams();
  // const isChecked = favorite ? 'checked' : '';
  const handleInputChange = (e) => {
    setSingleAuthor((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.name !== 'favorite' ? e.target.value : e.target.checked
    }));
  };

  useEffect(() => {
    if (id) {
      getSingleAuthor(id).then((author) => setSingleAuthor(author));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // add an Author
    if (singleAuthor.firebaseKey) {
      updateAuthor(id, singleAuthor.firebaseKey, singleAuthor).then((singleAuthorArray) => setAuthors(singleAuthorArray));
    } else {
      createAuthor(singleAuthor.uid, singleAuthor).then((singleAuthorArray) => setAuthors(singleAuthorArray));
    }
  };

  useEffect(() => {
    getSingleAuthor(id)
      .then();
  });

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
  user: PropTypes.object,
  singleAuthor: PropTypes.object,
  setSingleAuthor: PropTypes.func,
  firebaseKey: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  favorite: PropTypes.bool,
  setAuthors: PropTypes.func.isRequired
};

export default AuthorForm;
