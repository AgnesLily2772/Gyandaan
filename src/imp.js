// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1P2xTICYoWJ9ijuiA2eV1mmdKI0cLNIc",
  authDomain: "gyandaan-338318.firebaseapp.com",
  projectId: "gyandaan-338318",
  storageBucket: "gyandaan-338318.appspot.com",
  messagingSenderId: "28297199895",
  appId: "1:28297199895:web:1d1713e5e7d59bbd847752"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {auth,db,storage};