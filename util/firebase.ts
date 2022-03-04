// Import the functions you need from the SDKs you need
import {
  initializeApp,
  FirebaseApp,
  getApps,
  getApp,
  FirebaseOptions,
} from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  Firestore,
  collection,
  doc,
  getFirestore,
  onSnapshot,
  setDoc,
  getDocs,
  getDoc,
} from "@firebase/firestore";
import { router } from "next/client";
import { Auth, getAuth } from "@firebase/auth";
import { getStorage, ref } from "@firebase/storage";
import exp from "constants";

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
export const SendData = (
  userId: string,
  userName: string,
  userGender: string,
  userCountry: string
) => {
  try {
    const db = getFirestore(firebase); //Initialize Firestore instance.
    const docRef = doc(collection(db, "userData"), userId); //Creation of documents with random IDs in userData.
    //store data
    const data = {
      name: userName,
      gender: userGender,
      country: userCountry,
    };
    setDoc(docRef, data).then((r) =>
      alert("登録が完了しました！ポケモン図鑑をお楽しみください！")
    );
  } catch (error) {
    // nothing
  }
};

//Get Data
/*
export async function UserInfo(userId: any) {
  const db = getFirestore(firebase);
  const userInfoRef = doc(db, "userData", `${userId}`);
  const user = await getDoc(userInfoRef);
  const userDetail = user.data();
  console.log(user.data());
}
 */

//Authentication
export const auth = getAuth(firebase);
