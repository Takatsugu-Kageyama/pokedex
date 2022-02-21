// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9yLgHhO2o4PeRubve6suAJcSmhXe4Dow",
  authDomain: "pokedex-a08fd.firebaseapp.com",
  projectId: "pokedex-a08fd",
  storageBucket: "pokedex-a08fd.appspot.com",
  messagingSenderId: "885917895725",
  appId: "1:885917895725:web:478b9c45ac9f321f2ebca4",
  measurementId: "G-DPESF6M49D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
