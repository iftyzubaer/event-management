import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5Vvm0lSFEzQbXGsDmTXaFmS0lZSiE5nE",
  authDomain: "corporate-event-manageme-368cb.firebaseapp.com",
  projectId: "corporate-event-manageme-368cb",
  storageBucket: "corporate-event-manageme-368cb.appspot.com",
  messagingSenderId: "116717372523",
  appId: "1:116717372523:web:cb4fb3bddcf54e88f4dd2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;