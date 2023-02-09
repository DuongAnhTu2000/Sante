// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

import {
  getFirestore,
  collection,
  addDoc
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9k2yifx4_XNDnpA6Vm1hHr76uSQ3YYfI",
  authDomain: "cosmestic-4038e.firebaseapp.com",
  projectId: "cosmestic-4038e",
  storageBucket: "cosmestic-4038e.appspot.com",
  messagingSenderId: "644452242439",
  appId: "1:644452242439:web:9549722c4e6b5daed646a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const db = getFirestore(app);

const logInWithEmailAndPassword = async (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      var res = await signInWithEmailAndPassword(auth, email, password);
      console.log(res);
      resolve(res);

    } catch (err) {
      console.error(err);
      reject(err);
    }
  })
};
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logout = async () => {
  try {
    signOut(auth)
    window.location.href = "http://localhost:3000";

  } catch (e) {
    console.log(e.message);
  }
}

export {
  auth,
  db,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};