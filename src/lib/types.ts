/* Local */

export type SpotifyDataArtist = {
  name: string
  link: string
}

export type SpotifyData = {
  song_name: string
  song_link: string
  artists: SpotifyDataArtist[]
}

/* Discord */

export type DiscordTokenResponse = {
  token_type: string
  access_token: string
  expires_in: number
  scope: string
}

export type DiscordAvatarDecorationData = {
  asset: string
  sku_id: string
}

export type DiscordUserResponse = {
  id: string
  username: string
  avatar: string
  discriminator: string
  public_flags: number
  premium_type: number
  flags: number
  banner: string
  accent_color: number
  global_name: string
  avatar_decoration_data: DiscordAvatarDecorationData
  banner_color: string
  mfa_enabled: boolean
  locale: string
}

/* Spotify */

export type SpotifyTokenResponse = {
  access_token: string
  token_type: string
  expires_in: number
  refresh_token: string
  scope: string
}

export type SpotifyDisallows = {
  resuming: boolean
}

export type Actions = {
  disallows: SpotifyDisallows
}

export type SpotifyExternalIDS = {
  isrc: string
}

export type SpotifyExternalUrls = {
  spotify: string
}

export type Spotify = {
  height: number
  url: string
  width: number
}

export type SpotifyArtist = {
  external_urls: SpotifyExternalUrls
  href: string
  id: string
  name: string
  type: string
  uri: string
}

export type SpotifyAlbum = {
  album_type: string
  artists: SpotifyArtist[]
  available_markets: string[]
  external_urls: SpotifyExternalUrls
  href: string
  id: string
  images: Spotify[]
  name: string
  release_date: Date
  release_date_precision: string
  total_tracks: number
  type: string
  uri: string
}

export type SpotifyItem = {
  album: SpotifyAlbum
  artists: SpotifyArtist[]
  available_markets: string[]
  disc_number: number
  duration_ms: number
  explicit: boolean
  external_ids: SpotifyExternalIDS
  external_urls: SpotifyExternalUrls
  href: string
  id: string
  is_local: boolean
  name: string
  popularity: number
  preview_url: string
  track_number: number
  type: string
  uri: string
}

export type SpotifyPlayingResponse = {
  timestamp: number
  context: null
  progress_ms: number
  item: SpotifyItem
  currently_playing_type: string
  actions: Actions
  is_playing: boolean
}