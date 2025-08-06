<script lang="ts">
	import { goto } from '$app/navigation';
	import type { User } from '$lib/types';
	import Spinner from '$lib/Spinner.svelte';
	import { Provider } from '@sevria/ui';
	import '@sevria/ui/styles.css';
	import Cookies from 'js-cookie';
	import { fade } from 'svelte/transition';
	import wait from 'wait';

	let loading = $state(true);
	let user = $state<User | null>(null);

	let { children } = $props();

	$effect(() => {
		(async () => {
			await wait(300);

			const userJSON = Cookies.get('SUS');

			if (userJSON) {
				try {
					user = JSON.parse(userJSON);

					if (window.location.pathname.startsWith('/auth')) {
						await goto('/');
					}

					loading = false;
					return;
				} catch (error) {}
			}

			if (!window.location.pathname.startsWith('/auth')) {
				await goto('/auth/login');
			}

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
