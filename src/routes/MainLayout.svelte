<script lang="ts">
	import {
		CircleUserRound,
		LayoutDashboard,
		LibraryBig,
		LogOut,
		Settings,
		UsersRound
	} from '@lucide/svelte';
	import { Sidebar } from '@sevria/ui';
	import Cookies from 'js-cookie';

	const logOut = () => {
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

	let { children } = $props();
</script>

<Sidebar.Root>
	<Sidebar.Logo />

	<Sidebar.Links>
		<Sidebar.Link href="#" icon={LayoutDashboard}>Dashboard</Sidebar.Link>
		<Sidebar.Link href="#" icon={LibraryBig}>Collections</Sidebar.Link>
		<Sidebar.Link href="#" icon={UsersRound}>Users</Sidebar.Link>
		<Sidebar.Link href="#" icon={Settings}>Settings</Sidebar.Link>
		<Sidebar.Link href="#" icon={CircleUserRound}>Profile</Sidebar.Link>
		<Sidebar.Link href="#" icon={LogOut} onclick={logOut}>Log out</Sidebar.Link>
	</Sidebar.Links>
</Sidebar.Root>

<div class="ml-72 px-8 py-6">
	{@render children?.()}
</div>
