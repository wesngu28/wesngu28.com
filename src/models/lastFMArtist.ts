export interface Artist {
  name: string
  playcount: string
  href: string
  img: string
}

export interface topArtist {
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
