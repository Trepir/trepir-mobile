import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	GoogleAuthProvider,
	signInWithPopup,
} from 'firebase/auth';
import auth from './firebaseConfig';

const createEmailUser = async (email: string, password: string) => {
	const user = await createUserWithEmailAndPassword(auth, email, password);
	return user;
};

const loginEmail = async (email: string, password: string) => {
	try {
		const user = await signInWithEmailAndPassword(auth, email, password);
		return user;
	} catch (error) {
		console.log(error);
	}
	return null;
};

const loginGoogle = async () => {
	const provider = new GoogleAuthProvider();
	const user = await signInWithPopup(auth, provider);
	return user;
};

const logOut = async () => {
	await signOut(auth);
};
