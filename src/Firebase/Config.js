import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBG-efeP0Dv55XG3EDt2MhbIAn74nEVoVw",
    authDomain: "fir-7f0ac.firebaseapp.com",
    projectId: "fir-7f0ac",
    storageBucket: "fir-7f0ac.appspot.com",
    messagingSenderId: "404421155016",
    appId: "1:404421155016:web:b005f3e7f97f0d5beb6dfd",
    measurementId: "G-CCDZY5FWZL"
  };

  export default firebase.initializeApp(firebaseConfig)