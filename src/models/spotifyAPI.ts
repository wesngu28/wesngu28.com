import type { ImgHTMLAttributes } from '@astrojs/image/components'

export interface spotifyAPI {
  album: string
  albumImageUrl: string
  albumImageUrlFmt?: ImgHTMLAttributes
  isPlaying?: string
  artist: string
  songUrl: string
  title: string
  recent?: boolean
}
