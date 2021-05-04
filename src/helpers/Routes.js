import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import NotFound from '../views/NotFound';
import Books from '../views/Books';
import Authors from '../views/Authors';
import AuthorForm from '../components/forms/AuthorForm';

export default function Routes({
  authors, setAuthors,
  books,
  user
}) {
  return (
    <div>
      <Switch>
        <Route
          path='/books/'
          component={() => <Books
          books={books}
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
            setAuthors={setAuthors} /> }
        />
        <Route
          path='/edit-author/:id'
          component={() => <AuthorForm
            user={user}
            setAuthors={setAuthors} /> }
          />
        <Route exact path='/'
          component={() => <Home user={user} />}
        />
        <Route path='*'
          component={NotFound}
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  authors: PropTypes.array.isRequired,
  setAuthors: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired,
  user: PropTypes.any
};
