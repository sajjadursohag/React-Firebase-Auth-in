// DANGER !!!!
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1gKvo5Psv2zpFy8cyGjiSMXTYKxCM8KU",
  authDomain: "react-firebase-auth-in-9bdf8.firebaseapp.com",
  projectId: "react-firebase-auth-in-9bdf8",
  storageBucket: "react-firebase-auth-in-9bdf8.firebasestorage.app",
  messagingSenderId: "702103104403",
  appId: "1:702103104403:web:74ace1775f44d193c1d666",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
