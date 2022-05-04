// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4pScozLgDwyRLE8Smki3wv9yHoysEp-g",
  authDomain: "cyber-shop-11f15.firebaseapp.com",
  projectId: "cyber-shop-11f15",
  storageBucket: "cyber-shop-11f15.appspot.com",
  messagingSenderId: "246094193760",
  appId: "1:246094193760:web:12f766e962950431418f05",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
