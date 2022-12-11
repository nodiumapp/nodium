import '../styles/globals.css'

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// https://firebase.google.com/docs/web/setup#available-libraries

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9VmjEPRgJ6vgEoO-HaDRyrZG6KPNORwc",
  authDomain: "nodiumapp.firebaseapp.com",
  projectId: "nodiumapp",
  storageBucket: "nodiumapp.appspot.com",
  messagingSenderId: "75670864673",
  appId: "1:75670864673:web:fc11770492730128d57460",
  measurementId: "G-RTST9YPPMD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
