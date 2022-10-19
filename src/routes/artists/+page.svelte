<script>
	import ProfileCard from '$lib/ProfileCard.svelte';

	/** @type {import('./$types').PageData} */
	export let data;  
</script>

<section class="gallery-container" >
	<ul class="gallery flex flex-wrap justify-center gap-6">
		{#each data.docs as artist }
		<li class="">
			<ProfileCard name={artist.firstName} image={artist.profileImage.sizes.main.url} />
		</li>
		{/each}
	</ul>
</section>