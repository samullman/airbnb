
import Clerk from '@clerk/clerk-js';

const publishableKey = 'clerk.suitable.boxer-43.lcl.dev';
const clerk = new Clerk(publishableKey);

async function loadClerk() {
	await clerk.load({
		// Set load options here...
	});

}

loadClerk();

function isReady() {
	return clerk.isReady();
}

function signIn() {
	clerk.openSignIn();
}

function signOut() {
	clerk.signOut();
}

function session() {
	return clerk.user;
}

export { clerk, session, isReady, signIn, signOut }