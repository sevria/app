<script lang="ts">
	import { Provider } from '@sevria/ui';
	import '@sevria/ui/styles.css';

	let { children } = $props();
</script>

<Provider>
	{@render children()}
</Provider>
