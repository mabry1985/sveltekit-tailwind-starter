<script context="module">
  export async function load({params, fetch}) {
    console.log('load', params);
      const response = await fetch(`http://localhost:7860/api/artists`);
      const artists = await response.json()
      return {
          props: {
              artists: artists
          }
      }
  }
</script>

<script>
  export let artists;
  console.log('artists', artists);
</script>