// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFoBsWolKm9tGR94YVl1HTOUsYaIz_Mvk",
  authDomain: "miniblog-18d38.firebaseapp.com",
  projectId: "miniblog-18d38",
  storageBucket: "miniblog-18d38.firebasestorage.app",
  messagingSenderId: "693813909619",
  appId: "1:693813909619:web:3343c382de121b77c4f206"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};