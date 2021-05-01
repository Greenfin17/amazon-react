import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';

const AddAuthorButton = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/add-author');
  };
  return (
<Button className='btn btn-success btn-lg mb-4'
  onClick={handleClick}>Add an Author</Button>
  );
};

export default AddAuthorButton;
