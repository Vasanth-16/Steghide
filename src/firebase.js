// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDw49KUqISSvH4dTYZROTdCfKi8zlxj6Do",
    authDomain: "steghide-9d4c8.firebaseapp.com",
    projectId: "steghide-9d4c8",
    storageBucket: "steghide-9d4c8.appspot.com",
    messagingSenderId: "203405476038",
    appId: "1:203405476038:web:d8ffdbad6c87e38a2657c7",
    measurementId: "G-H9KT6B5LHX"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
