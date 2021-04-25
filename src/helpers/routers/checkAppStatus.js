import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../apiKeys';

const checkAppStatus = () => {
  // This line initializes your firebase app using the values from your .env file
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
};
export default checkAppStatus;
