<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import Spinner from '$lib/Spinner.svelte';
	import { Provider } from '@sevria/ui';
	import '@sevria/ui/styles.css';
	import axios from 'axios';
	import { fade } from 'svelte/transition';
	import wait from 'wait';

	if (browser) {
		// @ts-ignore
		axios.defaults.baseURL = window.env.PUBLIC_API_URL;
	}

	let loading = $state(true);

	let { children } = $props();

	$effect(() => {
		(async () => {
			await wait(1000);
			await goto('/auth/login');
			loading = false;
		})();
	});
</script>

<Provider>
	{#if loading}
		<div
			class="bg-background fixed inset-0 flex items-center justify-center"
			transition:fade={{ duration: 200 }}
		>
			<Spinner class="size-8" />
		</div>
	{/if}

	{@render children()}
</Provider>
