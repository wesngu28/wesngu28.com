import { URLSearchParams } from 'url'

export const getAccessToken = async () => {
  const clientID = await import.meta.env.SPOTIFY_CLIENT_ID
  const clientSecret = await import.meta.env.SPOTIFY_CLIENT_SECRET
  const refreshToken = await import.meta.env.SPOTIFY_REFRESH_TOKEN
  const basicAuth = Buffer.from(`${clientID}:${clientSecret}`).toString('base64')
  const params = new URLSearchParams()
  params.append('grant_type', 'refresh_token')
  params.append('refresh_token', refreshToken)
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basicAuth}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params,
  })

  return response.json()
}
