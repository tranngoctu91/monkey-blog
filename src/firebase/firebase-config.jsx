// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCUnUj9OUhlOAIzgqw7mv2o_IE4xy8iDVA",
  authDomain: "monkey-blogging-e5d31.firebaseapp.com",
  projectId: "monkey-blogging-e5d31",
  storageBucket: "monkey-blogging-e5d31.appspot.com",
  messagingSenderId: "749977700545",
  appId: "1:749977700545:web:5ae2482bfb5b484260ac40",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
