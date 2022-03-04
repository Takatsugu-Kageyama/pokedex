// Import the functions you need from the SDKs you need
import {
  initializeApp,
  FirebaseApp,
  getApps,
  getApp,
  FirebaseOptions,
} from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, push, set, query } from "firebase/database";
import {
  Firestore,
  collection,
  doc,
  getFirestore,
  onSnapshot,
  setDoc,
} from "@firebase/firestore";
import { router } from "next/client";
import { Auth, getAuth } from "@firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyA9yLgHhO2o4PeRubve6suAJcSmhXe4Dow",
  authDomain: "pokedex-a08fd.firebaseapp.com",
  projectId: "pokedex-a08fd",
  storageBucket: "pokedex-a08fd.appspot.com",
  messagingSenderId: "885917895725",
  appId: "1:885917895725:web:478b9c45ac9f321f2ebca4",
  measurementId: "G-DPESF6M49D",
};

// Initialize Firebase
export const firebase: FirebaseApp = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApp();

//Write Data
export const SendData = () => {
  try {
    const db = getFirestore(firebase); //Initialize Firestore instance.
    const docRef = doc(collection(db, "userData")); //Creation of documents with random IDs in userData.
    //store data
    const data = {
      name: "たかつぐ",
      gender: "おとこ",
      country: "カントーちほう",
    };
    setDoc(docRef, data).then((r) => alert("good!"));
  } catch (error) {
    // nothing
  }
};

//Read Data
export const GetData = () => {
  const db = getFirestore(firebase); //Initialize Firestore instance.
  const docRef = doc(db, "userData", "AgSJllYVsFJBejF4C5ZD"); //Creation of documents with random IDs in userData.
  const unsub = onSnapshot(docRef, (doc) => {
    console.log("Current data: ", doc.data());
  });
};
//Authentication
export const auth = getAuth(firebase);
