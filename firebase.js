import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBAsxy0L1A-Mm2zAxiYmNHDXzZujrn4F3I",
    authDomain: "tiktok-clone-41c2a.firebaseapp.com",
    databaseURL: "https://tiktok-clone-41c2a.firebaseio.com",
    projectId: "tiktok-clone-41c2a",
    storageBucket: "tiktok-clone-41c2a.appspot.com",
    messagingSenderId: "456348132954",
    appId: "1:456348132954:web:8916d60555344d54e55a63",
    measurementId: "G-SQF98FBFX1"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;