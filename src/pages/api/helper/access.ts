import querystring from 'query-string'

export const getAccessToken = async () => {
  const clientID = await (import.meta.env.SPOTIFY_CLIENT_ID);
  const clientSecret = await (import.meta.env.SPOTIFY_CLIENT_SECRET);
  const refreshToken = await (import.meta.env.SPOTIFY_REFRESH_TOKEN);
  const basicAuth = Buffer.from(`${clientID}:${clientSecret}`).toString('base64')
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basicAuth}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    }),
  })
  
  return response.json()
}
