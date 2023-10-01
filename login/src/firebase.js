// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBguU0CP1MI6z4uZi7AEarhXjHR9FXh12s",
  authDomain: "fire-auth-fc7b3.firebaseapp.com",
  projectId: "fire-auth-fc7b3",
  storageBucket: "fire-auth-fc7b3.appspot.com",
  messagingSenderId: "429108578470",
  appId: "1:429108578470:web:a7ede0a52071bbb7864c67",
  measurementId: "G-7D5CE7C0YH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth();

export { app, auth};