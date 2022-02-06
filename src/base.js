import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAfdEksYL9iOXQqmHQY78usQKL33Wo3F4s",
  authDomain: "catch-of-the-day-zack-dutra.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-zack-dutra-default-rtdb.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

//This is a named export
export { firebaseApp };

//this is a default export
export default base;