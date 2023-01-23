<script lang="ts">
	// import { clerk } from '../lib/clerk';

	import { onMount } from 'svelte';

	let isReady: any;
	let signIn: any;
	let signOut: any;
	let clerk: any;
	let session = function () {
		return false;
	};

	onMount(async () => {
		clerk = (await import('../lib/clerk')).clerk;
		session = (await import('../lib/clerk')).session;
		isReady = (await import('../lib/clerk')).isReady;
		signIn = (await import('../lib/clerk')).signIn;
		signOut = (await import('../lib/clerk')).signOut;
		debugger;
	});
</script>

<h1>Welcome to SveltesKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{#if isReady}
	<button on:click={signIn}> sign in </button>
	<button on:click={signOut}> sign out </button>
{/if}

{#if session()}
	signed in
{/if}

<style lang="scss">
	p {
		background: green;
	}
</style>
