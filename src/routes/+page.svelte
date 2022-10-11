<script>
const response = async () => {
		var response = await fetch('http://localhost:7860/api/artists/63452559b9894c4f8c8b3d2b');
		var result = await response.json();
    console.log(result);
		return result;
	}

const data = response()

</script>

<h1 class="text-lg">Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{#await data}
	<h2>Loading....</h2>
{:then user}
<p>{user.firstName}</p>
<p>{user.lastName}</p>
{:catch err}
	<h2>Error while loading the data</h2>
{/await}
