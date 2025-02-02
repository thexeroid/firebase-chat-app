// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "the-ultimate-chat-application.firebaseapp.com",
  projectId: "the-ultimate-chat-application",
  storageBucket: "the-ultimate-chat-application.appspot.com",
  messagingSenderId: "136187241948",
  appId: "1:136187241948:web:971c8b3daca10350bc9b19",
  measurementId: "G-JK64E1ZTG1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
