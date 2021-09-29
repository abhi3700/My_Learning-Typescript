declare global {
  type unknown = any
}

export type User = unknown;

export const users: unknown[] = [
	{
		name: 'Abhjit Roy',
		age: 28,
		occupation: 'Programmer',
	},
	{
		name: 'Ramesh Kumar',
		age: 24,
		occupation: 'Engineer',
	}
];


export function logPerson(user: unknown) {
	console.log(`- ${user.name}, ${user.age}`);
}

console.log('Users:');

users.forEach(logPerson)