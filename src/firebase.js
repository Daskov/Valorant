// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbHS7H1nB5KxEsWi-CH3mKkjVOOQxpW7A",
  authDomain: "valorant-f0e8e.firebaseapp.com",
  projectId: "valorant-f0e8e",
  storageBucket: "valorant-f0e8e.appspot.com",
  messagingSenderId: "960325867646",
  appId: "1:960325867646:web:fbbea512a19b892777602f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
