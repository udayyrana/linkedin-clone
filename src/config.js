// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDZcMbTbbr3qyZ0Hqmz3HJ5pQALWJXoZYA",
  authDomain: "linkedin-clone-dab2b.firebaseapp.com",
  projectId: "linkedin-clone-dab2b",
  storageBucket: "linkedin-clone-dab2b.appspot.com",
  messagingSenderId: "1001950833541",
  appId: "1:1001950833541:web:3139199ccfbecb8c0272ec",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
