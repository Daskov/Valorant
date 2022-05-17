import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { initializeApp } from "firebase/app";
import { doc, getFirestore, setDoc } from "firebase/firestore";

initializeApp({
  apiKey: "AIzaSyBbHS7H1nB5KxEsWi-CH3mKkjVOOQxpW7A",
  authDomain: "valorant-f0e8e.firebaseapp.com",
  projectId: "valorant-f0e8e",
  storageBucket: "valorant-f0e8e.appspot.com",
  messagingSenderId: "960325867646",
  appId: "1:960325867646:web:fbbea512a19b892777602f",
});

// Add a new document in collection "cities"
// (async () => {
//   await setDoc(doc(getFirestore(), "agents", "9"), {
//     name: "Omen",
//     role: "Controller",
//     iconImg: "https://i.imgur.com/8TG56Ng.png",
//     fullImg: "https://i.imgur.com/o2KMEv6.png",
//     biography:
//       "A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the field, then lets paranoia take hold as his foe scrambles to learn where he might strike next.",
//     id: 9,
//   });
// })();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
