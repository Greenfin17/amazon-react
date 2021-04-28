import PropTypes from 'prop-types';
import firebase from 'firebase';
import { getAuthors } from '../helpers/data/authorData';

const loadAuthorData = ({ authors, setAuthors }) => {

  const userID = firebase.auth().currentUser.uid;

  useEffect(() => {
    getAuthors(userID).then((authorsArr) => {
      console.warn(authorsArr);
      setAuthors(authorsArr);
    });
  }, []);
  console.warn(typeof authors);
};

loadAuthorData.propTypes = {
  authors: PropTypes.array.isRequired,
  setAuthors: PropTypes.func.isRequired
}

export default loadAuthorData;
