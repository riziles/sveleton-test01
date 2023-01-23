<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<script>

	import Flowchart from './Flowchart.svelte'
	import {wordDict} from './snippets/snippets'

	// import om from '$lib/assets/Aum_Om_black.svg'

	import { Modal, modalStore } from '@skeletonlabs/skeleton';

	function triggerAlert(title, text) {
		const alert = {
			type: 'alert',
			title: title,
			body: text,
			// image: om,
			// Optionally override buttont text
			buttonTextCancel: 'Got it!'
		};
		modalStore.trigger(alert);
	}
	import { onMount } from 'svelte';

onMount(() => {
	
	wordDict.forEach((item, index) => {
	document.getElementById(item.id).addEventListener('click', () => triggerAlert(item.title, item.text))
})
});
  

</script>

<Modal />


<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center h-full">
		<!-- Animated Logo -->
		<figure class="h-full">
			<!-- <section class="img-bg" /> -->
			<Flowchart />
		</figure>


	</div>


	<style lang="postcss">
		figure {
			@apply flex relative flex-col;
		}
		figure img,
		.img-bg {
			@apply w-full md:h-full opacity-10;
		}
		.img-bg {
			@apply bg-gradient-to-r from-primary-300 to-warning-300;
			@apply absolute z-[-1] rounded-full blur-[64px];
			animation: pulse 20s cubic-bezier(0, 0, 0, 0.5) infinite;
		}
		@keyframes pulse {
			50% {
				transform: scale(1.25);
			}
		}

		.node {@apply cursor-pointer}


	</style>



</div>
