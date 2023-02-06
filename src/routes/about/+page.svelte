
<script>
import { RangeSlider } from "@skeletonlabs/skeleton";

let output = "";

let justwalked = 0.0;

let fetchheader = {
    'Content-Type': 'application/json;charset=utf-8'
  };

let getoptions = {
  method: 'GET',
  headers: fetchheader
  // body: JSON.stringify({{js_obj}})
};

$: submitoptions = {
  method: 'POST',
  headers: fetchheader,
  body: JSON.stringify({walked:justwalked})
};

function fetchwalkdata(){
// Fetch command
let fetchRes = fetch('./fetchwalk', getoptions)
fetchRes
  .then(res => res.json())
  .then(d => {
    console.log(d)
    output = JSON.stringify(d)
  })
};

function submitwalk(){
// Fetch command
console.log(submitoptions);
let fetchRes = fetch('./fetchwalk', submitoptions)
fetchRes
  .then(res => res.json())
  .then(d => {
    console.log(d)
    output = JSON.stringify(d)
  })
}

</script>


<div class="container mx-auto p-8 space-y-8">

	<button class = "btn btn-ghost-surface" on:click={fetchwalkdata}>Get Data</button>

	<h1>Tinks was last walked on {output}</h1>


	<RangeSlider class="w-60" bind:value={justwalked} max={5.0} step={0.25} ticked>I just walked Tinks:</RangeSlider>
{justwalked} miles

<button class = "btn btn-ghost-surface" on:click={submitwalk}>Submit Data</button>


</div>
