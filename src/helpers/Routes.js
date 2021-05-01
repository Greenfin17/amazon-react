import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Books from '../views/Books';
import Authors from '../views/Authors';
import AuthorForm from '../components/forms/AuthorForm';

export default function Routes({
  authors, setAuthors,
  singleAuthor, setSingleAuthor,
  books, setBooks,
  user
}) {
  return (
    <div>
      <Switch>
        <Route
          path='/books/'
          component={() => <Books
          books={books}
          setBooks={setBooks}
          user={user} /> }
        />
        <Route
          path='/authors'
          component={() => <Authors
            authors={authors}
            setAuthors={setAuthors}
            user={user} />}
        />
        <Route
          path='/add-author'
          component={() => <AuthorForm
            user={user}
            singleAuthor={singleAuthor}
            setSingleAuthor={setSingleAuthor}
            setAuthors={setAuthors} /> }
        />
        <Route
          path='/edit-author/:id'
          component={() => <AuthorForm
            user={user}
            singleAuthor={singleAuthor}
            setSingleAuthor={setSingleAuthor}
            setAuthors={setAuthors} /> }
          />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  authors: PropTypes.array.isRequired,
  setAuthors: PropTypes.func.isRequired,
  singleAuthor: PropTypes.object.isRequired,
  setSingleAuthor: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired,
  setBooks: PropTypes.func.isRequired,
  user: PropTypes.object
};
