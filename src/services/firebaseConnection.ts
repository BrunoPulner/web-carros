// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC6DTcTx95O91XcEHcESj3fRn-31BxQS-4",
  authDomain: "webcarros-a833b.firebaseapp.com",
  projectId: "webcarros-a833b",
  storageBucket: "webcarros-a833b.firebasestorage.app",
  messagingSenderId: "118627615681",
  appId: "1:118627615681:web:95025bcb5e477b53a1e540"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };