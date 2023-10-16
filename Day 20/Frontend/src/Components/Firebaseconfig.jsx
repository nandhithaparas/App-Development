// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{GoogleAuthProvider, getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzbSsFLnk-SqedGWAT3iyRbgleVTPoRUs",
  authDomain: "wanderlenses-e37b3.firebaseapp.com",
  projectId: "wanderlenses-e37b3",
  storageBucket: "wanderlenses-e37b3.appspot.com",
  messagingSenderId: "988556056990",
  appId: "1:988556056990:web:4f606148344abac2c2de8f",
  measurementId: "G-0VRW1FVE03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const analytics = getAnalytics(app);
const googleProvider=new GoogleAuthProvider();
export {googleProvider,auth} ;

