// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Replace with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "PROJECT_ID.firebaseapp.com",
  // The value of `databaseURL` depends on the location of the database
  databaseURL:
    "https://tamkeengram-20736-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BKT,
  messagingSenderId: import.meta.env.VITE_MSG_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the database service and export the reference for other modules
export const database = getDatabase(firebaseApp);
