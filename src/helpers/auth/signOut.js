import firebase from 'firebase/app';
import 'firebase/auth';

const signOut = async () => {
  await firebase.auth().signOut();
};

export default signOut;
