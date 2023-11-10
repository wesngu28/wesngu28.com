import type { APIRoute } from 'astro'
import { getAccessToken } from './helper/access'

interface topArtist {
  streamable: string
  image: []
  mbid: string
  url: string
  playcount: string
  attr: {
    rank: string
  }
  name: string
}

interface lastfmAPI {
  topartists: {
    artist: Array<topArtist>
    attr: {
      user: string
      totalPages: string
      page: string
      total: string
      perPage: string
    }
  }
}

export const GET: APIRoute = async () => {
  try {
    const lastfmKey = await import.meta.env.LASTFM_API_KEY
    let artists: lastfmAPI | { message: string } = { message: ' run' }
    while (Object.keys(artists).includes('message')) {
      const response = await fetch(
        `https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=scrambledeggdog&period=1month&limit=8&api_key=${lastfmKey}&format=json`
      )
      artists = await response.json()
    }

    const monthlyArtistsName = (artists as lastfmAPI).topartists.artist.map(
      (artist: topArtist) => {
        return {
          name: artist.name,
          playcount: artist.playcount,
        }
      }
    )

    const { access_token } = await getAccessToken()

    const monthlyArtists: Array<{name: string, playcount: string, href: string, img: string}> = []
    for (let i = 0; i < monthlyArtistsName.length; i++) {
      const search = await fetch(
        `https://api.spotify.com/v1/search?q=${monthlyArtistsName[i].name}&type=artist&limit=1&locale=en-US`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      )
      const artistResult = await search.json()
      monthlyArtists.push({
        name: monthlyArtistsName[i].name,
        playcount: monthlyArtistsName[i].playcount,
        href: artistResult.artists.items[0].external_urls.spotify,
        img: artistResult.artists.items[0].images[2].url,
      })
    }
    return new Response(JSON.stringify(monthlyArtists))
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }))
  }
}
