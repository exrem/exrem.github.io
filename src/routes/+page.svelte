<script lang='ts'>
    import SpotifyStatus from '../components/SpotifyStatus.svelte'
</script>

<svelte:head>
	<title>Əkrəm Cəfər</title>
	<meta
		name="description"
		content="My minimalistic single-page website to be used in social media bio links."
	/>
</svelte:head>

<main>
	<div id='discord-profile'>
		<SpotifyStatus />
	</div>
</main>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap");

	:global(body) {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0;
		background: black;
		color: white;
		height: 100vh;
		font-family: "Manrope", sans-serif;
	}
</style>
