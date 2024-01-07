import type { SpotifyData, SpotifyPlayingResponse } from './types'

export default (playing: SpotifyPlayingResponse): SpotifyData => ({
  song_name: playing.item.name,
  song_link: playing.item.external_urls.spotify,
  artists: playing.item.artists.map(artist => ({ name: artist.name, link: artist.external_urls.spotify }))
})