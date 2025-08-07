<script lang="ts">
	import { api, api2, login } from '$lib/api';
	import { Button, Input, Link, toast } from '@sevria/ui';
	import { createForm } from 'felte';
	import Cookies from 'js-cookie';
	import type { ApiResponse, FetchReturnType } from 'openapi-typescript-fetch';
	import wait from 'wait';

	const { form, isSubmitting } = createForm({
		initialValues: {
			email: 'admin@example.com',
			password: 'Sevria123'
		},
		onSubmit: async (values) => {
			await wait(300);

			let res: ApiResponse<FetchReturnType<typeof login>>;
			try {
				res = await login(values);
			} catch (err: any) {
				if (err instanceof login.Error) {
					toast.error(err.data.message);
				} else {
					toast.error(err.message);
				}
				return;
			}

			Cookies.set('SAT', res!.data.access.token, {
				expires: new Date(res!.data.access.expires_at),
				sameSite: 'strict',
				secure: window.location.protocol === 'https:'
			});

			Cookies.set('SRT', res!.data.refresh.token, {
				expires: new Date(res!.data.refresh.expires_at),
				sameSite: 'strict',
				secure: window.location.protocol === 'https:'
			});

			Cookies.set('SUS', JSON.stringify(res!.data.user), {
				expires: new Date(res!.data.refresh.expires_at),
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
