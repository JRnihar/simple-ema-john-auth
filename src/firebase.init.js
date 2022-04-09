// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA9wbSyjGgFVdQ31dZ4yIKOw7SJTP0S0sI",
    authDomain: "ema-john-simple-firebase-a348a.firebaseapp.com",
    projectId: "ema-john-simple-firebase-a348a",
    storageBucket: "ema-john-simple-firebase-a348a.appspot.com",
    messagingSenderId: "408011040418",
    appId: "1:408011040418:web:f269e95e702d350257d9fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;