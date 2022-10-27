<script>
  import logo from '$lib/assets/oddball-logo.svg';

</script>

<header>
  <div class="wrapper">
    <div>
      <a href="/">
        <img class='oddball-logo' src="{logo}" alt="Oddball Logo" />
      </a>
    </div>
    <div >
      <nav >
        <ul class="nav-ul flex flex-row my-2">
          <li class="nav-link text-center mr-4"><a href="/artists" aria-label="Artists information">Artists</a></li>
          <li class="nav-link text-center"><a href="/about" aria-label="Information about the shop">About</a></li>
          <li class="nav-link text-center ml-4"><a href="https://shop.oddballstudios.com/" target="_blank" referrerpolicy="no-referrer" aria-label="visit the merchandise store">Shop</a></li>
        </ul>
      </nav>
    </div>
  </div>
</header>

<style>
  .wrapper {
  @apply py-3;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.oddball-logo {
  @apply max-w-[10rem] my-4;
}

h1 {
  font-weight: 900;
  font-size: 20px;
  line-height: 1;
  margin: 6px 0 6px 10px;
  display: inline-block;
  vertical-align: top;
}

.wrapper {
    @apply flex flex-col;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }

.nav-link {
  @apply text-oddball-white text-lg;
  font-weight: 600;
  text-transform: uppercase;
}

</style>
