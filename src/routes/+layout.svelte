<script>
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import Hamburger from './Hamburger.svelte';

	let open = true;
	$: sidebarHidden = open?" ":"hidden lg:block";
</script>

<!-- App Shell -->
<AppShell slotSidebarLeft="bg-surface-500/5 p-4" slotHeader="o-10">
	<svelte:fragment slot="sidebarLeft">
		<!-- Insert the list: -->
		<div id="sidebar-left" class={sidebarHidden}>
			<nav class="list-nav">
				<ul>
					<li><a href="/">Home</a></li>
					<li><a href="/eightfold">Buddha's <br /> Eightfold Path</a></li>
					<li><a href="/eightlimbs">Eight Limbs <br /> of Yoga</a></li>
					<li><a href="/about">About</a></li>
				</ul>
			</nav>
		</div>
		<!-- --- -->
	</svelte:fragment>

	<svelte:fragment slot="header">
		
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<Hamburger bind:open/>
				
			</svelte:fragment>

			<h1>Comparing Yoga and Buddhism</h1>

			<svelte:fragment slot="trail">
				<LightSwitch />
			</svelte:fragment>
		</AppBar>

	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>

