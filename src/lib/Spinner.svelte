<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';
	import './Spinner.css';

	type Props = HTMLAttributes<SVGSVGElement>;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Source: https://github.com/n3r4zzurr0/svg-spinners/blob/main/svg-css/ring-resize.svg -->
<svg
	width="24"
	height="24"
	stroke="#000"
	viewBox="0 0 24 24"
	xmlns="http://www.w3.org/2000/svg"
	class={twMerge('stroke-foreground-brand', className?.toString())}
	{...rest}
>
	<g class="spinner_V8m1">
		<circle cx="12" cy="12" r="9.5" fill="none" stroke-width="2.5"></circle>
	</g>
</svg>
