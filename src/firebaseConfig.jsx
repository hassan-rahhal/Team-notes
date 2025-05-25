import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCXU0lh4xbnuhKKzJoVWIvst87Emed9dQ4",
  authDomain: "collab-5a140.firebaseapp.com",
  projectId: "collab-5a140",
  storageBucket: "collab-5a140.firebasestorage.app",
  messagingSenderId: "495190042637",
  appId: "1:495190042637:web:a7933a7cb7717d089acd44",
  measurementId: "G-M1747N4YPK"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
export const provider = new GoogleAuthProvider();