import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Books from '../views/Books';
import Authors from '../views/Authors';

export default function Routes({ authors, setAuthors }) {
  return (
    <div>
      <Switch>
        <Route
          path='/books'
          component={Books}
        />
        <Route
          path='/authors'
          component={() => <Authors
            authors={authors}
            setAuthors={setAuthors} />}
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  authors: PropTypes.array.isRequired,
  setAuthors: PropTypes.func.isRequired
};
