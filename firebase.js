// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD94JF4ZuS9aekiyIgHGi7xXqzoYhyhrLQ",
  authDomain: "twitter-nextjs-72b45.firebaseapp.com",
  projectId: "twitter-nextjs-72b45",
  storageBucket: "twitter-nextjs-72b45.appspot.com",
  messagingSenderId: "719696211387",
  appId: "1:719696211387:web:010996efce94fa9492a89e",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
