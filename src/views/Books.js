import React from 'react';
import PropTypes from 'prop-types';
import BookCard from '../components/cards/BookCard';

function Books({ books, loggedIn }) {
  return (
    <div className='card-container'>
      <h2>Books Page</h2>
      <div className='store'>
        { loggedIn && books.map((book, id) => <BookCard
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
  loggedIn: PropTypes.bool.isRequired
};

export default Books;
