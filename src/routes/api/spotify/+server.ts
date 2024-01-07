import type { RequestHandler } from './$types'
import { SPOTIFY_CLIENT_ID as client_id, SPOTIFY_CLIENT_SECRET as client_secret, SPOTIFY_REFRESH_TOKEN as refresh_token } from '$env/static/private'
import type { SpotifyTokenResponse, SpotifyPlayingResponse } from '$lib/types'

export async function GET<RequestHandler>() {
  const { token_type, access_token }: SpotifyTokenResponse = await (await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${(Buffer.from(`${client_id}:${client_secret}`).toString('base64'))}`
    }
  })).json(),
    playing: SpotifyPlayingResponse = await (await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
      headers: {
        'Authorization': `${token_type} ${access_token}`
      }
    })).json()

  return Response.json(playing)
}