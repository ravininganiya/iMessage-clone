import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBatyYnRTwtTgsWNjsCVOAWKDb2ykfd-c0",
    authDomain: "imessage-clone-17fa7.firebaseapp.com",
    databaseURL: "https://imessage-clone-17fa7.firebaseio.com/",
    projectId: "imessage-clone-17fa7",
    storageBucket: "imessage-clone-17fa7.appspot.com",
    // messagingSenderId: "600178829782",
    // appId: "1:642767734112:web:96f3a48a1a914219574a05",
    // measurementId: "G-Z8RNQQE73Q"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;