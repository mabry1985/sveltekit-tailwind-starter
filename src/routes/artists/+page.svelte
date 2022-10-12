<script>
  import Image from "../../lib/Image.svelte";
  
  const response = async () => {
      var response = await fetch('http://localhost:7860/api/artists/63452559b9894c4f8c8b3d2b');
      var result = await response.json();
      console.log(result);
      return result;
    }
  const data = response()
  
  </script>

{#await data}
	<h2>Loading....</h2>
{:then user}
	<p>{user.firstName}</p>
	<Image src={user.profileImage.sizes.large.url} alt={user.profileImage.alt} imageType="profile"></Image>
{:catch err}
	<h2>Error while loading the data</h2>
	<p>{err}</p>
{/await}