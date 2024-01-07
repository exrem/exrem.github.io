<script lang="ts">
  import extractSpotifyData from "$lib/extractSpotifyData";
  import type { SpotifyData } from "$lib/types";

  let spotifyData = $state<SpotifyData>()

  const fetchSpotify = async () => {
    spotifyData = extractSpotifyData(await (await fetch("/api/spotify")).json())

    return spotifyData
  }
</script>

<div id="spotify-status">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="21px"
    width="21px"
    version="1.1"
    viewBox="0 0 168 168"
  >
    <path
      fill="#1ED760"
      d="m83.996 0.277c-46.249 0-83.743 37.493-83.743 83.742 0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l0.001-0.004zm38.404 120.78c-1.5 2.46-4.72 3.24-7.18 1.73-19.662-12.01-44.414-14.73-73.564-8.07-2.809 0.64-5.609-1.12-6.249-3.93-0.643-2.81 1.11-5.61 3.926-6.25 31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-0.903-8.148-4.35-1.04-3.453 0.907-7.093 4.354-8.143 30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-0.001zm0.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219-1.254-4.14 1.08-8.513 5.221-9.771 29.581-8.98 78.756-7.245 109.83 11.202 3.73 2.209 4.95 7.016 2.74 10.733-2.2 3.722-7.02 4.949-10.73 2.739z"
    />
  </svg>

  <span id="status-text">
    {#await fetchSpotify()}
      <span id="listening-to">Loading Spotify data...</span>
    {:then { song_name, song_link, artists }}
      <span id="listening-to">Currently listening to:</span>
      <span id="song">
        {#each artists as { name, link }}
          <a href={link}>{name}</a>{#if artists.findIndex(artist => artist.link == link) != artists.length - 1}<span>,&ensp;</span>{/if}
        {/each}
        —
        <a href={song_link}>
          {song_name}
        </a>
      </span>
    {:catch someError}
      System error: {someError.message}.
    {/await}
  </span>
</div>

<style>
  :root {
    --green: #1db954;
  }

  #spotify-status {
    display: flex;
    gap: 8px;
    padding: 12px;
    width: fit-content;
    max-width: calc(100vw - 24px);
    border: 1px solid gray;
    border-radius: 8px;
  }

  #status-text {
    display: flex;
    flex-direction: column;
  }

  #listening-to {
    color: var(--green);
    font-weight: 800;
  }

  #song {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  #song a {
    color: white;
    text-decoration: none;
    text-underline-offset: 4px;
  }

  #song a:hover {
    text-decoration: underline;
  }
</style>
