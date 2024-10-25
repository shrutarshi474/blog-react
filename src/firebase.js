// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDbYy8_DjiabvxaqQ3qinpYW2hAC6x1kFc",
  authDomain: "skycastle-b2b2f.firebaseapp.com",
  databaseURL: "https://skycastle-b2b2f-default-rtdb.firebaseio.com",
  projectId: "skycastle-b2b2f",
  storageBucket: "skycastle-b2b2f.appspot.com",
  messagingSenderId: "771935935465",
  appId: "1:771935935465:web:88c7294d780b4eacb1c978",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
