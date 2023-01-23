<script>
	import '@kahi-ui/framework/dist/kahi-ui.framework.min.css';
	import '@kahi-ui/framework/dist/kahi-ui.theme.default.min.css';

	import { onMount } from 'svelte';

	let loadClerk;

	onMount(async () => {
		// loadClerk = (await import('../lib/clerk')).loadClerk;
		// loadClerk();
	});
</script>

<main>
	<slot />
</main>

<style lang="scss">
	main {
		background: blue;
	}
</style>
