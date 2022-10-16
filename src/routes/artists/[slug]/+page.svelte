<script>
  import Image from '$lib/Image.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h3>{data.firstName}</h3>
<img src={data.profileImage.sizes.main.url} alt={data.profileImage.alt}/>

<style>
	img {
		@apply max-w-[12.5rem] rounded-full transition-all duration-300;
		-webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
		filter: grayscale(100%);
	}
</style>