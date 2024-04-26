// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaDnVUxLvlCwXrAiCUtxIwDNa93v01XO0",
  authDomain: "hiddenstories-628a3.firebaseapp.com",
  projectId: "hiddenstories-628a3",
  storageBucket: "hiddenstories-628a3.appspot.com",
  messagingSenderId: "819939199282",
  appId: "1:819939199282:web:d99b4288dca6e32057af2b",
  measurementId: "G-3X2JWW9J8J",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
const analytics = getAnalytics(FIREBASE_APP);
export const db = getFirestore(FIREBASE_APP);
