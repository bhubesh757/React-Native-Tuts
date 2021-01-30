import * as firebase from 'firebase'

import "firebase/auth";
import "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAr-WAJVECuwSITdE8Y5Paefy38Ls9xT4U",
    authDomain: "signal-native-6ff0f.firebaseapp.com",
    projectId: "signal-native-6ff0f",
    storageBucket: "signal-native-6ff0f.appspot.com",
    messagingSenderId: "790074988790",
    appId: "1:790074988790:web:2b98e97a07969a6b94f4d7",
    measurementId: "G-Q6LJR7GYVZ"
  };

  let app ;

  if (firebase.apps.length === 0) {

     app = firebase.initializeApp(firebaseConfig);
  } else {
        app = firebase.app()
  }


  const db = app.firestore();
  const auth = firebase.auth();

  export {db , auth};
