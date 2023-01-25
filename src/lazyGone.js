import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAFdpozIcdYmS0kqRrVTrXjHTLmMB10Tss",
  authDomain: "lazy-gone.firebaseapp.com",
  projectId: "lazy-gone",
  storageBucket: "lazy-gone.appspot.com",
  messagingSenderId: "420344077022",
  appId: "1:420344077022:web:1af57c10f4631ab9d9804f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)