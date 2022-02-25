// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTQlVCPcPuVvkprNimHRqqkfHmb_KPmxg",
  authDomain: "dnd-character-creator-97e68.firebaseapp.com",
  projectId: "dnd-character-creator-97e68",
  storageBucket: "dnd-character-creator-97e68.appspot.com",
  messagingSenderId: "21028074270",
  appId: "1:21028074270:web:85c38fae04e12c56078f0f",
  measurementId: "G-383GLW9M6E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
