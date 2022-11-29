import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const projectAuth = getAuth(firebaseApp);
//const analytics = getAnalytics(app);
export { projectAuth };
