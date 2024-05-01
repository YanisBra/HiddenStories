import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

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
export const db = getFirestore(FIREBASE_APP);
export const storage = getStorage(FIREBASE_APP);
