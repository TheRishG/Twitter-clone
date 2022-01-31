/** @format */
import { initializeApp } from 'firebase/app';
import { getFirestore, getDocs, query, collection } from 'firebase/firestore';
const firebaseApp = initializeApp({
	apiKey: 'AIzaSyAoUchCMRTjtwnrP-nPgrpF9bld82IvOCE',
	authDomain: 'twitter-clone-7ceb0.firebaseapp.com',
	projectId: 'twitter-clone-7ceb0',
	storageBucket: 'twitter-clone-7ceb0.appspot.com',
	messagingSenderId: '423718465801',
	appId: '1:423718465801:web:338da8daa5a1124ec0e3d8',
	measurementId: 'G-HY4G8TGVQ7',
});
const firestore = getFirestore();
export const group = collection(firestore, 'posts');
export const db = query(group);
