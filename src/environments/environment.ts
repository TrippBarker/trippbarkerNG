// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMDG_5lDDr2YeB9GwJGP_C3XO5hdcltbk",
  authDomain: "trippbarker-31e6e.firebaseapp.com",
  projectId: "trippbarker-31e6e",
  storageBucket: "trippbarker-31e6e.appspot.com",
  messagingSenderId: "648512597814",
  appId: "1:648512597814:web:25016cb4a291e39ee4cd97"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig),
stravaAccessToken = '5295e9ce86dba21b01d9fa879fded4b50c561bc1',
stravaRefreshToken = '2fc6e7d43b0be9da9fa7e93a0ba616d38c200ab5';