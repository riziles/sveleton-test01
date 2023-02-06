<script>
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

</script>

<!-- App Shell -->
<AppShell slotSidebarLeft="bg-surface-500/5 md:w-56 md:p-4">

	<svelte:fragment slot="sidebarLeft">
		<!-- Insert the list: -->
		<div class = "hidden md:block">
			<nav class="list-nav">
				<ul>
					<li><a href="/">Home</a></li>
					<li><a href="/login">Login</a></li>
					<li><a href="/secret.html">Secret</a></li>
				</ul>
			</nav>
	  </div>
		<!-- --- -->
	</svelte:fragment>

	<svelte:fragment slot="header">
		
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">Tracking App</strong>
			</svelte:fragment>

			<svelte:fragment slot="trail">
				<a class="btn btn-sm btn-ghost-surface" href="./logout.html">Log Out</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
