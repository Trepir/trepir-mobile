import { UserFromBackend, User, UserState } from '../types';

export const fetchUser = async (id: string): Promise<{ data: User | null; error: any }> => {
	try {
		const data = await fetch('https://trepir.herokuapp.com/user/signin', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				uid: id,
			}),
		});
		const user: UserFromBackend = await data.json();
		const returnUser: User = {
			...user,
			uid: id,
		};
		return { data: returnUser, error: null };
	} catch (error) {
		console.log('services/user/FetchUser', error);
		return { data: null, error };
	}
};

type UserSignUpInfo = {
	firstName: string;
	lastName: string;
	email: string;
	displayName: string;
	uid: string;
	photoUrl: string;
	emailVerified: boolean;
};

export const signUp = async (userInfo: UserSignUpInfo, id: string) => {
	const data = await fetch('https://trepir.herokuapp.com/user/signin', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			...userInfo,
		}),
	});
	const user = await data.json();
	const returnUser: UserState = {
		...user,
		uid: id,
	};
	return returnUser;
};
