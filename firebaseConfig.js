// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKG6h_2qTeAwMtTZuWHxmFzDBL2S9SIQ4",
  authDomain: "testapplication-5624b.firebaseapp.com",
  projectId: "testapplication-5624b",
  storageBucket: "testapplication-5624b.appspot.com",
  messagingSenderId: "111614561019",
  appId: "1:111614561019:web:c08116db1c78eec1a73e5e",
  measurementId: "G-DXJKTXH2YL",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
