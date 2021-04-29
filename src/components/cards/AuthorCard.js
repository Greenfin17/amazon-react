import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AuthorForm from '../forms/AuthorForm';

const AuthorCard = ({
  firebaseKey,
  firstName,
  lastName,
  email,
  favorite,
  setAuthors,
}) => {
  const [showEditForm, setShowEditForm] = useState(false);
  const handleEditClick = () => {
    if (showEditForm) {
      setShowEditForm(false);
    } else {
      setShowEditForm(true);
    }
  };

  return (
    <>
      <div className='card' id={firebaseKey}>
        <div className="card-body" style={{ height: '180px' }}>
          <a href='#'>
            <h5 className="card-title">{firstName} {lastName}</h5>
          </a>
          <h6 className="card-subtitle mb-2 text-muted">{email}</h6>
          <hr />
          <button className="btn btn-info"
            onClick={handleEditClick} data-toggle="modal" data-target="#formModal">Edit Author</button>
          <button className="btn btn-danger">Delete Author</button>
        </div>
      </div>
      { showEditForm && <AuthorForm
          firebaseKey={firebaseKey}
          firstName={firstName}
          lastName={lastName}
          email={email}
          favorite={favorite}
          setAuthors={setAuthors}
      /> }
    </>
  );
};

AuthorCard.propTypes = {
  firebaseKey: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  favorite: PropTypes.bool,
  setAuthors: PropTypes.func
};

export default AuthorCard;
