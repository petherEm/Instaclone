// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAou6eyw5_N1LL4SfEakVO6cNulrDOLbyQ",
  authDomain: "instapether.firebaseapp.com",
  projectId: "instapether",
  storageBucket: "instapether.appspot.com",
  messagingSenderId: "1070092466006",
  appId: "1:1070092466006:web:f31085b536afebb3a348f7",
  measurementId: "G-9WZRS1VPJ8"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();


const db = getFirestore();
const storage = getStorage();


export { app, db, storage };