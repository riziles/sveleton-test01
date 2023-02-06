
<script>

let output = ""

let options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  // body: JSON.stringify({{js_obj}})
}

function fetchwalkdata(){
// Fetch command
let fetchRes = fetch('./fetchwalk', options)
fetchRes
  .then(res => res.json())
  .then(d => {
    console.log(d)
    output = JSON.stringify(d)
  })
}

</script>


<div class="container mx-auto p-8 space-y-8">

	<button class = "btn-filled-primary" on:click={fetchwalkdata}>Get Data</button>

	<h1>Tinks was last fed on {output}</h1>

</div>
