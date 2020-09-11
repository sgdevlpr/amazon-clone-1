import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCG3vwZp8htHGp65rg7kV1YkQ31eHMWEkY",
    authDomain: "clone-34d7f.firebaseapp.com",
    databaseURL: "https://clone-34d7f.firebaseio.com",
    projectId: "clone-34d7f",
    storageBucket: "clone-34d7f.appspot.com",
    messagingSenderId: "108618847052",
    appId: "1:108618847052:web:a8fc5c352e1c37239bf5e9",
    measurementId: "G-HD0MP6ZM0F"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };