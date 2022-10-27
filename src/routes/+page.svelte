<script>
	import Header from '$lib/Header.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
  import '../iframeResizer.contentWindow.min.js'
</script>

<section class="main-hero" style="background-image: url({data.url})">
  <div class="wrapper">
    <div class="hero-content">
      <h1 class="hero-header mb-8">Welcome to Oddball</h1>
      <p class="desc">For your safety and ours, please call upon arrival and follow our COVID-19 guidelines</p>
      <p class="desc">Oddball will be appointment only. Please call (503)231-1344 for same day appointments.</p>
    </div>

</section>

<style>
  .main-hero {
    @apply flex flex-col;
    /* @apply border-t border-solid border-oddball-white; */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: calc(100vh - 8rem);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .desc {
    @apply text-lg;
  }

  .hero-content {
    @apply text-center;
  }
</style>