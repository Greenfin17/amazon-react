import PropTypes from 'prop-types';
import firebase from 'firebase';
import { getBooks } from '../helpers/data/bookData';

const loadBookData = ({ books, setBooks, loggedIn }) => {

  const userID = firebase.auth().currentUser.uid;

  getBooks(userID).then((booksArr) => {
    setBooks(booksArr);
    });
};

loadBookData.propTypes = {
  books: PropTypes.array.isRequired,
  setBooks: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired
}

export default loadBookData;
