import type { RequestHandler } from './$types'
import { DISCORD_CLIENT_ID as client_id, DISCORD_CLIENT_SECRET as client_secret } from '$env/static/private'
import type { DiscordTokenResponse, DiscordUserResponse } from '$lib/types'

export async function GET<RequestHandler>() {
  const { token_type, access_token }: DiscordTokenResponse = await (await fetch('https://discord.com/api/oauth2/token', {
    method: 'POST',
    body: new URLSearchParams({
      grant_type: 'client_credentials',
      scope: 'identify',
      client_id,
      client_secret
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })).json(),
    user: DiscordUserResponse = await (await fetch('https://discord.com/api/users/@me', {
      headers: {
        'Authorization': `${token_type} ${access_token}`
      }
    })).json()

  return Response.json(user)
}