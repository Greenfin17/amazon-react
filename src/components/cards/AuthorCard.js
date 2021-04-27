import React from 'react';
import PropTypes from 'prop-types';

const AuthorCard = ({
  firebaseKey,
  firstName,
  lastName,
  email
}) => (
  <div className='card' id={firebaseKey}>
    <div className="card-body" style={{ height: '180px' }}>
      <a href='#'>
        <h5 className="card-title">${firstName} ${lastName}</h5>
      </a>
      <h6 className="card-subtitle mb-2 text-muted">${email}</h6>
      <hr />
      <button className="btn btn-info" data-toggle="modal" data-target="#formModal">Edit Author</button>
      <button className="btn btn-danger">Delete Author</button>
    </div>
  </div>
);

AuthorCard.propTypes = {
  firebaseKey: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  price: PropTypes.string,
};

export default AuthorCard;
