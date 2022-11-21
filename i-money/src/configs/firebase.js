import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
//import { auth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5olCOVPnbRf6JlQl4f72LqbhaWIUcSIQ",
  authDomain: "learn-vue-50f99.firebaseapp.com",
  projectId: "learn-vue-50f99",
  storageBucket: "learn-vue-50f99.appspot.com",
  messagingSenderId: "991006906516",
  appId: "1:991006906516:web:31483f4c7e485dc5b43c81",
  measurementId: "G-V5CR5PEZF0",
};

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
// const analytics = getAnalytics(app);

export { projectAuth, projectFirestore, timestamp };
