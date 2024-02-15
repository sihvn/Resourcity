// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBZ7jBH5iYtEs34Ra3l8gTui5y7gd4YBSI",
    authDomain: "capstone-tchs.firebaseapp.com",
    projectId: "capstone-tchs",
    storageBucket: "capstone-tchs.appspot.com",
    messagingSenderId: "255459845067",
    appId: "1:255459845067:web:d61aa78dc427c8eab5cc4e",
    measurementId: "G-WS0JB4BX0Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { db };