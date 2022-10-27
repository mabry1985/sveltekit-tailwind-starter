<script>
	import { onMount } from 'svelte'
	export let src;
  export let alt;
  export let imageType;

	let loaded = false;
	let failed = false;
	let loading = false;
  let imgTypeClass = 'sveltio-image--' + imageType;

	onMount(() => {
			const img = new Image();
			img.src = src;
			loading = true;

			img.onload = () => {
					loading = false;
					loaded = true;
			};
			img.onerror = () => {
					loading = false;
					failed = true;
			};
	})
</script>

{#if loaded}
	<img class={imgTypeClass} {src} alt={alt} />
{:else if failed}
	<img src="https://icon-library.com/images/not-found-icon/not-found-icon-20.jpg" alt="Not Found" />
{:else if loading}
	<div class={imgTypeClass + '-placeholder'} ></div>
{/if}


<style>
  .sveltio-image--profile {
    @apply max-w-[15.5rem] rounded-full;
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
  }

	.sveltio-image--profile-placeholder {
		@apply w-[15.5rem] h-[15.5rem] rounded-full bg-gray-200;
	}

	.sveltio-image--profile:hover {
		-webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */
		filter: grayscale(0%);
	}
</style>