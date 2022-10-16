<script>
	import ProfileCard from '$lib/ProfileCard.svelte';

	/** @type {import('./$types').PageData} */
	export let data;  
</script>

<section>
	<ul class="flex flex-row flex-wrap justify-around max-w-screen-xl">
		{#each data.docs as artist }
		<li>
			<ProfileCard name={artist.firstName} image={artist.profileImage.sizes.main.url} />
		</li>
		{/each}
	</ul>
</section>

<style>
	ul {
		@apply flex flex-row flex-wrap justify-around max-w-screen-xl mx-auto;
	}
</style>