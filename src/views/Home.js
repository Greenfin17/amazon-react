import React from 'react';
import PropTypes from 'prop-types';

const Home = ({ user }) => (
  <>
  { user
    && <>
      <p>Hi {user.fullName}</p>
      <h1>Welcome to Almost Amazon</h1>
    </>
  }
  { !user
    && <>
      <h1>Welcome to Almost Amazon</h1>
      <h5>Sign in to view your favorite books</h5>
    </>
  }
  </>
);

Home.propTypes = {
  user: PropTypes.any
};

export default Home;
