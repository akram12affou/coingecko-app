import { initializeApp } from "firebase/app";
import {getFirestore } from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyCcabqf9OAOdjiX_v9BrYs494gVPJ5es9M",
  authDomain: "fire-base-9-dojo-5d9fa.firebaseapp.com",
  projectId: "fire-base-9-dojo-5d9fa",
  storageBucket: "fire-base-9-dojo-5d9fa.appspot.com",
  messagingSenderId: "472391801062",
  appId: "1:472391801062:web:9531ff8ce18e8ada6a4327"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)