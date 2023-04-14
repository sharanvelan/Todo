import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyB7QCDo0uXB3hWR7Hl2vaaiebttdUWYtRs",
  authDomain: "todo-list-af287.firebaseapp.com",
  projectId: "todo-list-af287",
  storageBucket: "todo-list-af287.appspot.com",
  messagingSenderId: "948376826737",
  appId: "1:948376826737:web:f1bca243c83f360f7abcd0",
  measurementId: "G-CEB7WD0QEP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;