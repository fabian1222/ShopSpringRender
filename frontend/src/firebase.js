import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";

// 👇 PUNE DATELE REALE AICI (doar pentru test)
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkV0ogPWFHwZkKPmiUQHmF9nVfs7EoAlc",
  authDomain: "shop-chat-d8f74.firebaseapp.com",
  projectId: "shop-chat-d8f74",
  storageBucket: "shop-chat-d8f74.firebasestorage.app",
  messagingSenderId: "1039814966522",
  appId: "1:1039814966522:web:a861c32c4a670c6667dd43",
  measurementId: "G-DZ6DZRNWLH"
};
const app = initializeApp(firebaseConfig);

// Păstrăm setarea pentru conexiune stabilă
export const db = initializeFirestore(app, {
    experimentalForceLongPolling: true,
});

console.log("Firebase conectat la proiectul:", firebaseConfig.projectId);