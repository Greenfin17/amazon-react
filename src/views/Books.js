import React from 'react';
import PropTypes from 'prop-types';
import BookCard from '../components/cards/BookCard';

function Books({ books, user }) {
  return (
    <div className='card-container'>
      <h2>Books Page</h2>
      <div className='store'>
        { user && books.map((book, id) => <BookCard
          key={id}
          image={book.image}
          title={book.title}
          sale={book.sale}
          price={book.price}
          firebaseKey={book.firebaseKey}
          />) }
      </div>
    </div>
  );
}

Books.propTypes = {
  books: PropTypes.array.isRequired,
  user: PropTypes.object.any
};

export default Books;
