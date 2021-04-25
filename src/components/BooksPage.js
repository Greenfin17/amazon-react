import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { getBooks } from '../helpers/data/bookData';
import BookCard from './cards/BookCard';

function BooksPage() {
  const [books, setBooks] = useState([]);
  const userID = firebase.auth().currentUser.uid;

  useEffect(() => {
    getBooks(userID).then((booksArr) => {
      setBooks(booksArr);
    });
  }, []);
  console.warn(typeof books);

  return (
    <div className='card-container'>
      <h2>Books Page</h2>
      <div className='store'>
        { books.map((book, id) => <BookCard
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

export default BooksPage;
