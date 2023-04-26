// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4S0hq2RHO2-Qmoy_OlXCGaC-PKhHNJ-E",
  authDomain: "octopus-skateshop.firebaseapp.com",
  projectId: "octopus-skateshop",
  storageBucket: "octopus-skateshop.appspot.com",
  messagingSenderId: "80800084785",
  appId: "1:80800084785:web:257c836a9a0d8ad9057610"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

