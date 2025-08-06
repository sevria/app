<script lang="ts">
	import { api } from '$lib';
	import { Button, Input, Link } from '@sevria/ui';
	import Cookies from 'js-cookie';
	import { createForm } from 'felte';
	import wait from 'wait';

	const { form, isSubmitting } = createForm({
		initialValues: {
			email: 'admin@example.com',
			password: 'Sevria123'
		},
		onSubmit: async (values) => {
			await wait(300);

			const { data, error } = await api.POST('/auth/login', { body: values });

			if (error) {
				console.log(error);
				return;
			}

			Cookies.set('SAT', data.access.token, {
				expires: new Date(data.access.expires_at),
				sameSite: 'strict',
				secure: window.location.protocol === 'https:'
			});

			Cookies.set('SRT', data.refresh.token, {
				expires: new Date(data.refresh.expires_at),
				sameSite: 'strict',
				secure: window.location.protocol === 'https:'
			});

			Cookies.set('SUS', JSON.stringify(data.user), {
				expires: new Date(data.refresh.expires_at),
				sameSite: 'strict',
				secure: window.location.protocol === 'https:'
			});

			window.location.reload();
		}
	});
</script>

<div class="flex h-screen flex-col items-center justify-center">
	<h1 class="mb-3 text-3xl font-semibold">Welcome back</h1>
	<p class="text-foreground-muted mb-8">Please enter your credentials to continue</p>

	<form class="mb-8 flex w-full max-w-80 flex-col gap-5" use:form>
		<Input name="email" placeholder="Your email address" type="email" />
		<Input name="password" placeholder="Your password" type="password" />
		<Button disabled={$isSubmitting} size="lg" type="submit">
			{#if $isSubmitting}
				Logging in...
			{:else}
				Log in
			{/if}
		</Button>
	</form>

	<p class="text-foreground-muted">
		Don't have an account?
		<Link href="#">Sign up</Link>
	</p>
</div>
