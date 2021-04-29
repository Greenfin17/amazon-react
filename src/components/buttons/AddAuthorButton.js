import React from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';

const AddAuthorButton = ({ showAuthorForm, setShowAuthorForm }) => {
  const handleClick = () => {
    if (showAuthorForm) {
      setShowAuthorForm(false);
    } else {
      setShowAuthorForm(true);
    }
  };
  return (
<Button className='btn btn-success btn-lg mb-4'
  onClick={handleClick}>Add an Author</Button>
  );
};

AddAuthorButton.propTypes = {
  showAuthorForm: PropTypes.bool.isRequired,
  setShowAuthorForm: PropTypes.func.isRequired
};

export default AddAuthorButton;
