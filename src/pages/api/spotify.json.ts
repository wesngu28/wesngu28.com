import { getAccessToken } from './helper/access'
import type { APIRoute } from 'astro'

interface spotifyArtist {
  external_urls: {
    spotify: string
  }
  href: string
  id: string
  name: string
  type: string
  url: string
}

export const getCurrentSong = async () => {
  const { access_token } = await getAccessToken()

  return fetch('https://api.spotify.com/v1/me/player/currently-playing', {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
}

export const getRecentSong = async () => {
  const { access_token } = await getAccessToken()
  return fetch('https://api.spotify.com/v1/me/player/recently-played', {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
}

export const get: APIRoute = async () => {
  const response = await getCurrentSong()

  if (response.status === 204 || response.status > 400) {
    const response = await getRecentSong()
    const recentSongs = await response.json()
    const song = recentSongs.items[Math.floor(Math.random() * recentSongs.items.length)]
    const title = song.track.name
    const artist = song.track.artists
      .map((_artist: spotifyArtist) => _artist.name)
      .join(', ')
    const album = song.track.album.name
    const albumImageUrl = song.track.album.images[0].url
    const songUrl = song.track.external_urls.spotify
    const preview = song.track.preview_url
    return {
      body: JSON.stringify({
        album,
        albumImageUrl,
        artist,
        songUrl,
        title,
        preview,
        recent: true,
      }),
    }
  }

  const song = await response.json()
  const isPlaying = song.is_playing
  const title = song.item.name
  const artist = song.item.artists
    .map((_artist: spotifyArtist) => _artist.name)
    .join(', ')
  const album = song.item.album.name
  const albumImageUrl = song.item.album.images[0].url
  const songUrl = song.item.external_urls.spotify
  const preview = song.item.preview_url

  return {
    body: JSON.stringify({
      album,
      albumImageUrl,
      artist,
      isPlaying,
      songUrl,
      title,
      preview
    }),
  }
}
