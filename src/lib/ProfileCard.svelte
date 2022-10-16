<script lang="ts">
  export let name ="John"
  export let image ="https://icon-library.com/images/not-found-icon/not-found-icon-20.jpg";

  let linkEl: HTMLAnchorElement;

  const goToArtistPage = () => {
    linkEl.click();
  }

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class='profile-card-wrapper' on:click={goToArtistPage}>
  <div class='inner-wrapper'>
    <h3 class='artist-name'>{name}</h3>
    <img class='profile-img' src={image} alt={'Profile Image of ' + name} />
    <a class="link" href={'/artists/' + (name).toLowerCase()} bind:this={linkEl}>Portfolio</a>
  </div>
</div>

<style>
  .profile-img {
    @apply max-w-[15.5rem] rounded-full transition-all duration-300 border-[3px] border-oddball-white border-solid mx-4;
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
  }

  .profile-card-wrapper:hover .profile-img,
  .profile-img:hover {
    -webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */
    filter: grayscale(0%);
  }

  .profile-card-wrapper {
    @apply max-w-[22.5rem] mx-auto border-[3px] border-solid border-oddball-white transition-all duration-300 ease-in-out;
  }

  .profile-card-wrapper:hover {
    @apply cursor-pointer;
    @apply shadow-oddball-white;
    box-shadow: 0 0 16px rgba(255, 255, 255, 0.2);
  }

  .inner-wrapper {
    @apply flex flex-col items-center p-4 border-dotted border border-oddball-white m-4;
  }

  .profile-card-wrapper h3 {
    @apply text-2xl flex flex-col uppercase font-bold text-oddball-white font-heading mb-7;
  }
  
  h3::after {
    @apply border-0 border-b-[3px] border-solid border-oddball-white mt-2 w-[50px] self-center;
    content: '';
  }

  .link {
    @apply text-oddball-white text-base font-body no-underline mb-2 mt-6 uppercase block relative;
  }

  .link::after {
    @apply absolute bottom-0 left-0 w-full h-[1px] opacity-0 transition-all duration-300 bg-oddball-white;
    content: '';
  }

  .profile-card-wrapper:hover .link::after,
  .link:hover::after,
  .link:focus::after {
    @apply overflow-hidden opacity-100;
    transform: translate3d(0, 0.2em, 0);
  }

  .link {
    @apply overflow-hidden;
  }

  .link::after {
  @apply opacity-100;
  transform: translate3d(-100%, 0, 0);
}

.profile-card-wrapper:hover .link::after,
.link:hover::after,
.link:focus::after{
  transform: translate3d(0, 0, 0);
}
</style>