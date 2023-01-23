<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<script>

	import Flowchart from './Flowchart.svelte'

	// import om from '$lib/assets/Aum_Om_black.svg'

	import { Modal, modalStore } from '@skeletonlabs/skeleton';

	let wordDict = [{id:'node1',title: 'Right View', text:'Right View is understanding the Four Noble Truths'}]


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
			<section class="img-bg" />
			<Flowchart />
		</figure>


	</div>


	<style lang="postcss">
		figure {
			@apply flex relative flex-col;
		}
		figure img,
		.img-bg {
			@apply w-full md:h-full opacity-50;
		}
		.img-bg {
			@apply bg-gradient-to-r from-primary-300 to-warning-300;
			@apply absolute z-[-1] rounded-full blur-[64px];
			animation: pulse 20s cubic-bezier(0, 0, 0, 0.5) infinite;
		}
		@keyframes pulse {
			50% {
				transform: scale(0.5);
			}
		}
	
		.cluster {@apply opacity-20 text-white}

		.edge {@apply border-green-50}


		

	</style>



</div>
