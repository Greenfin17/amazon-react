// BookCard.js
import React from 'react';
import PropTypes from 'prop-types';

const BookCard = ({
  image,
  title,
  sale,
  price,
  firebaseKey
}) => (
  <div className='card'>
    <img className='card-img-top' src={image} alt={title}
      style={{ height: '400px' }} />
    <div className='card-body' style={{ height: '180px' }}>
      <h5 className='card-title'>{title}</h5>
      <p className='card-text bold'>
      { sale && <span className="badge badge-info sale-badge">
        <i className="fa fa-bell" aria-hidden="true"></i> Sale </span> }
         {price}
      </p>
      <hr />
      <button className='btn btn-info' data-toggle='modal' data-target='#formModal' id={firebaseKey}>Edit Book</button>
      <button className='btn btn-danger' id={firebaseKey}>Delete Book</button>
    </div>
  </div>
);

BookCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  sale: PropTypes.bool,
  price: PropTypes.string,
  firebaseKey: PropTypes.string
};

export default BookCard;
