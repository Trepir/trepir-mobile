import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	GoogleAuthProvider,
	signInWithPopup,
} from 'firebase/auth';
import auth from './firebaseConfig';

export const createEmailUser = async (email: string, password: string) => {
	const user = await createUserWithEmailAndPassword(auth, email, password);
	return user;
};

export const loginEmail = async (email: string, password: string) => {
	const user = await signInWithEmailAndPassword(auth, email, password);
	return user;
};

export const loginGoogle = async () => {
	const provider = new GoogleAuthProvider();
	const user = await signInWithPopup(auth, provider);
	return user;
};

export const logOut = async () => {
	await signOut(auth);
};
