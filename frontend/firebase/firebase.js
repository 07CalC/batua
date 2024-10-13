// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyCtbFetW2KL-cmvjpfcRZmq2Y-cxiZ5LnQ",

  authDomain: "batua-68bd5.firebaseapp.com",

  projectId: "batua-68bd5",

  storageBucket: "batua-68bd5.appspot.com",

  messagingSenderId: "803740634938",

  appId: "1:803740634938:web:e5ee592fcd904148640a03",

  measurementId: "G-D9P7TN2W0X"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);