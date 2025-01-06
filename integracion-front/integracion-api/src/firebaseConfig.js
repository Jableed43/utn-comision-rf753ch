// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArNYiAqA27C9bzjKs5vfiWk1Xr-8veu6w",
  authDomain: "utn-2025.firebaseapp.com",
  projectId: "utn-2025",
  storageBucket: "utn-2025.firebasestorage.app",
  messagingSenderId: "1040564781447",
  appId: "1:1040564781447:web:a6cf10bac0b3fffbfe1322",
  measurementId: "G-276K8JVDLK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dbFirebase = getFirestore(app);

