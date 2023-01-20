<script>
	import Keypad from './Keypad.svelte';

	let pin;
	$: view = pin ? pin.replace(/\d(?!$)/g, '•') : 'enter your pin';

    let myForm

	function handleSubmit() {
		myForm.requestSubmit()
	}
</script>


<div class="container mx-auto p-8 space-y-8">

    <!-- <form method="post"> -->
   
    <!-- <input  style="color: {pin ? '#333' : '#ccc'}" bind:value ={view}> -->

<h1 style="color: white">{view}</h1>

<Keypad bind:value={pin} on:submit={handleSubmit}/>


<form bind:this={myForm} method="POST" hidden=true>
    
    <input name='username' style="color: pink" bind:value={pin}>
    <button type="submit">xxx</button>
</form>  

</div>
