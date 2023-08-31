import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCD7jFicHGvxklfFZbmuqC4D1shVDvabO8",
  authDomain: "udemy-d3-course-8a1fb.firebaseapp.com",
  projectId: "udemy-d3-course-8a1fb",
  storageBucket: "udemy-d3-course-8a1fb.appspot.com",
  messagingSenderId: "380917154277",
  appId: "1:380917154277:web:ea150435540e6f63536f0c"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

