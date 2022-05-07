// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNMfexdPvixeqtPojcueasSch_RmfPG2k",
  authDomain: "assignment-10-529d2.firebaseapp.com",
  projectId: "assignment-10-529d2",
  storageBucket: "assignment-10-529d2.appspot.com",
  messagingSenderId: "288143612616",
  appId: "1:288143612616:web:d8bcd85d85eefd54d223fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;