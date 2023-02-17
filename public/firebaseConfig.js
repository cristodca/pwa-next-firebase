// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAc1XOoGY-kiAUKqrXg9PdCXsQ5fbXAwMM",
  authDomain: "global-mobile-aaf09.firebaseapp.com",
  projectId: "global-mobile-aaf09",
  storageBucket: "global-mobile-aaf09.appspot.com",
  messagingSenderId: "567158235857",
  appId: "1:567158235857:web:06947acf238ff518de9bf0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log('firebase app', app)

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
console.log('firebase auth', auth)