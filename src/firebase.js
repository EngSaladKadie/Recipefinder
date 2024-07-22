// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1GOGK45dPCrlSZ1Pq-0SNRFjqkdRu-Jw",
  authDomain: "signinand-signup.firebaseapp.com",
  projectId: "signinand-signup",
  storageBucket: "signinand-signup.appspot.com",
  messagingSenderId: "211368792521",
  appId: "1:211368792521:web:5185499abb4107af649818"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth =getAuth(app)
 export {auth}