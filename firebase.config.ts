import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMyw8L44WifyLs-BmG7ojOppPhWCY81Ts",
  authDomain: "nextjs-blog-60485.firebaseapp.com",
  projectId: "nextjs-blog-60485",
  storageBucket: "nextjs-blog-60485.firebasestorage.app",
  messagingSenderId: "951997508758",
  appId: "1:951997508758:web:47a52320aba104e168e6b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
