// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-H48JHUzok8QjLeSbURuikSTr701fkU8",
  authDomain: "soical-app-35537.firebaseapp.com",
  projectId: "soical-app-35537",
  storageBucket: "soical-app-35537.appspot.com",
  messagingSenderId: "77531597119",
  appId: "1:77531597119:web:1d6b2cfe89d97d9ba12b8a",
  measurementId: "G-KT04L4M09E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider =new GoogleAuthProvider();