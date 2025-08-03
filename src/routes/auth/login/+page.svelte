<script lang="ts">
	import { Button, Input, Link } from '@sevria/ui';
	import axios from 'axios';
	import { createForm } from 'felte';

	const { form } = createForm({
		initialValues: {
			email: 'admin@example.com',
			password: 'Sevria123'
		},
		onSubmit: async (values) => {
			try {
				const res = await axios.post('/auth/login', values);
				console.log(res);
			} catch (error) {
				console.error(error);
			}
		}
	});
</script>

<div class="flex h-screen flex-col items-center justify-center">
	<h1 class="mb-3 text-3xl font-semibold">Welcome back</h1>
	<p class="text-foreground-muted mb-8">Please enter your credentials to continue</p>

	<form class="mb-8 flex w-full max-w-80 flex-col gap-5" use:form>
		<Input name="email" placeholder="Your email address" type="email" />
		<Input name="password" placeholder="Your password" type="password" />
		<Button size="lg" type="submit">Log in</Button>
	</form>

	<p class="text-foreground-muted">
		Don't have an account?
		<Link href="#">Sign up</Link>
	</p>
</div>
