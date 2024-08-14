import type { APIRoute } from 'astro'
import { LASTFM_API_KEY } from 'astro:env/server'

interface track {
  artist: {
    mbid: string,
    '#text': string
  }
  streamable: string
  image: [{
    size: string,
    '#text': string
  }]
  mbid: string
  url: string
  album: {
    mbid: string,
    '#text': string
  }
  name: string
  '@attr'?: {
    nowplaying: string
  };
  date?: {
    uts: string,
    '#text': string
  }
}

interface lastfmAPI {
  recenttracks: {
    track: Array<track>
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
  let tracks: lastfmAPI | { message: string } = { message: ' run' }
  while (Object.keys(tracks).includes('message')) {
    const response = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=scrambledeggdog&limit=20&api_key=${LASTFM_API_KEY}&format=json`
    )
    tracks = await response.json()
  }

  const recentTracks = (tracks as lastfmAPI).recenttracks.track.map((track: track) => {
    return {
      name: track.name,
      artist: track.artist['#text'],
      album: track.album['#text'],
      image: track.image[track.image.length-1]['#text'],
      url: track.url,
      nowplaying: track['@attr']?.nowplaying === "true" || false
    //   time: track.date ? new Date(Number(track.date.uts) * 1000).toUTCString() : track['@attr']?.nowplaying
    }
  })

  const recentTracksMap = new Map<string, typeof recentTracks[0]>();

  recentTracks.forEach(track => {
    if (!recentTracksMap.has(track.url)) {
      recentTracksMap.set(track.url, track);
    }
  });

  const recentTracksUniques = Array.from(recentTracksMap.values());

  return new Response(JSON.stringify(recentTracksUniques))
}
