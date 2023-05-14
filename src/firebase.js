// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_MzcSp3D0-x4qVeisctk9Ct1ZVsa7YUQ",
  authDomain: "realtor-clone-dsc-e7f6b.firebaseapp.com",
  projectId: "realtor-clone-dsc-e7f6b",
  storageBucket: "realtor-clone-dsc-e7f6b.appspot.com",
  messagingSenderId: "1068974818050",
  appId: "1:1068974818050:web:3d77fd3ffc04d836e7b81b"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();