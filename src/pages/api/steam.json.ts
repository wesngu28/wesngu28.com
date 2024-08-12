import type { APIRoute } from 'astro'
import { STEAM_KEY, STEAM_ID } from 'astro:env/server'

export const GET: APIRoute = async ({ request }) => {
  const response = await fetch(
    `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${STEAM_KEY}&steamids=${STEAM_ID}`,
    {}
  )

  const playing = await response.json()

  if (playing.response.players) {
    if (playing.response.players[0].gameid) {
      const id = playing.response.players[0].gameid
      const gameInfo = await fetch(`https://store.steampowered.com/api/appdetails?appids=${id}`)
      const gameJson = await gameInfo.json()
      if (gameJson[id]) {
        return new Response(
          JSON.stringify({
            name: gameJson[id].data.name,
            image: gameJson[id].data.header_image,
            website: gameJson[id].data.website,
            developers: gameJson[id].data.developers,
            publishers: gameJson[id].data.publishers,
          })
        )
      }
    }
  }

  return new Response('No game played', { status: 400 })
}
