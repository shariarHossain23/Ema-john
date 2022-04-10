// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBKYZct-i6CoR1YakCgGwOKwRL7Td05KEo",
  authDomain: "ema-john-ea245.firebaseapp.com",
  projectId: "ema-john-ea245",
  storageBucket: "ema-john-ea245.appspot.com",
  messagingSenderId: "781035459426",
  appId: "1:781035459426:web:da4e57b8b11f6adf76123b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth