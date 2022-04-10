// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAoHNhhGsTLIHo7Nps4wG9mExeoGrZFBu8",
    authDomain: "ema-john-simple-7593c.firebaseapp.com",
    projectId: "ema-john-simple-7593c",
    storageBucket: "ema-john-simple-7593c.appspot.com",
    messagingSenderId: "59471201850",
    appId: "1:59471201850:web:b33d6fbf7b62fd100f5703"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;