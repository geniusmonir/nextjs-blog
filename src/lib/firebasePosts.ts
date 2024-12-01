// utils/firebaseUtils.ts

import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase.config';

// Fetch posts from Firestore
export async function getPosts() {
  const postsCollection = collection(db, 'posts'); // Name of your Firestore collection
  const querySnapshot = await getDocs(postsCollection);
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}
