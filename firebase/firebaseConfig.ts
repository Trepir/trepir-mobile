import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import firebaseConfigInfo from '../constants/firebaseSecrets';
// import { getAnalytics } from 'firebase/analytics';

// Initialize Firebase
const app = initializeApp(firebaseConfigInfo);
const auth = getAuth();
// const analytics = getAnalytics(app);

export default auth;
