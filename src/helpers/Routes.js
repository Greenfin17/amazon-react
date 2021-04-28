import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Books from '../views/Books';
import Authors from '../views/Authors';

export default function Routes({
  authors, setAuthors,
  books, setBooks,
  loggedIn
}) {
  return (
    <div>
      <Switch>
        <Route
          path='/books/'
          component={() => <Books
          books={books}
          setBooks={setBooks}
          loggedIn={loggedIn} /> }
        />
        <Route
          path='/authors'
          component={() => <Authors
            authors={authors}
            setAuthors={setAuthors}
            loggedIn={loggedIn} />}
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  authors: PropTypes.array.isRequired,
  setAuthors: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired,
  setBooks: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired
};
