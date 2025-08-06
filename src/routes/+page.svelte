<script lang="ts">
	import { Button, Container } from '@sevria/ui';
	import Cookies from 'js-cookie';

	const logout = () => {
		Cookies.remove('SAT', {
			sameSite: 'strict',
			secure: window.location.protocol === 'https:'
		});
		Cookies.remove('SRT', {
			sameSite: 'strict',
			secure: window.location.protocol === 'https:'
		});
		Cookies.remove('SUS', {
			sameSite: 'strict',
			secure: window.location.protocol === 'https:'
		});
		window.location.reload();
	};
</script>

<div class="flex h-screen flex-col items-center justify-center text-center">
	<h1 class="text-foreground-brand text-4xl font-semibold">Welcome to Sevria app</h1>

	<Container class="mt-8" size="sm">
		<p>
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam earum inventore asperiores
			atque dolorum aspernatur nesciunt maxime? Doloribus, nobis. Facilis accusamus fugit sequi
			incidunt? Cum iusto eum et nam recusandae.
		</p>

		<Button class="mx-auto mt-6" onclick={logout}>Log out</Button>
	</Container>
</div>
