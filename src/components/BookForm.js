import { React, useState } from 'react';
import firebase from 'firebase';
import { createBooks } from '../helpers/data/bookData';

export default function BookForm() {
  const [book, setBook] = useState({
    uid: firebase.auth().currentUser.uid,
    author_id: '',
    image: '',
    price: '',
    sale: false,
    title: ''
  });

  const handleInputChange = (e) => {
    setBook((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createBooks(book);
    setBook(() => ({
      author_id: '',
      image: '',
      price: '',
      sale: false,
      title: ''
    }));
  };
  return (
    <>
      <div className='form-container'>
        <form id='submit-book-form' className='mb-4'
          autoComplete='off' onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='title'>Book Title</label>
            <input name='title' type="text" className="form-control"
              onChange={handleInputChange} id="title" aria-describedby="bookTitle"
              placeholder="Enter Book Title" value={book.title} required />
          </div>
          <div className='form-group'>
            <label htmlFor="image">Image URL</label>
            <input name='image' type="url" className='form-control'
              onChange={handleInputChange} id="image" placeholder="Image URL"
              value={book.image} required />
          </div>
          <div className='form-group'>
            <label htmlFor='price'>Price</label>
            <input name='price' type="number" className='form-control'
              onChange={handleInputChange} id="price" placeholder="Book Price"
              value={book.price} required />
          </div>
          <div className='form-group' id='select-author'>
          </div>
          <div className='form-check'>
            <input name='sale' type="checkbox" className="form-check-input"
              onChange={handleInputChange}
              value={book.sale} id="sale"/>
            <label htmlFor='sale' className="form-check-label">On Sale?</label>
          </div>
          <button type='submit' id="submit-book" className="btn btn-primary">Submit Book</button>
        </form>
      </div>
    </>
  );
}
