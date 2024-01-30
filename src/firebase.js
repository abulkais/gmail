
// import firebase from 'firebase';

import firebase from "firebase/compat/app";


import  "firebase/compat/auth";
import  "firebase/compat/firestore";
import  "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyBffg3NquB5bAY-vBUEPtd0i_GcSPRE-pI",
    authDomain: "clone-3b316.firebaseapp.com",
    projectId: "clone-3b316",
    storageBucket: "clone-3b316.appspot.com",
    messagingSenderId: "764274560789",
    appId: "1:764274560789:web:fd60810e5a6d98353e631c"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  export {db}