// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuiuj6MGg2nrI_IY2YMLzW-mbZBJI-hsw",
  authDomain: "ema-john-simple-64587.firebaseapp.com",
  projectId: "ema-john-simple-64587",
  storageBucket: "ema-john-simple-64587.appspot.com",
  messagingSenderId: "156042967776",
  appId: "1:156042967776:web:178a78b75edf7e00752e85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;