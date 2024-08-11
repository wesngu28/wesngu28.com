import { createEffect, createSignal, onCleanup } from 'solid-js'

const fetchNewData = async () => {
  const songQuery = await fetch(`${import.meta.env.PUBLIC_URL}/api/spotify.json`)
  const songJson = await songQuery.json()
  return songJson
}

export default function NowPlaying() {
  const [title, setTitle] = createSignal('')
  const [artist, setArtist] = createSignal('')
  const [album, setAlbum] = createSignal('')
  const [albumImageUrl, setAlbumImageUrl] = createSignal('')
  const [songUrl, setSongUrl] = createSignal('')
  const [recent, setRecent] = createSignal(true)
  // const [preview, setPreview] = createSignal('')
  const [visible, setVisible] = createSignal(true)

  const refetch = async () => {
    setVisible(false)
    setTimeout(async () => {
      const data = await fetchNewData()
      setTitle(data.title)
      setArtist(data.artist)
      setAlbum(data.album)
      setAlbumImageUrl(data.albumImageUrl)
      setSongUrl(data.songUrl)
      setRecent(data.recent)
      // setPreview(data.preview)
      setVisible(true)
    }, 300)
  }

  createEffect(() => {
    refetch()
    const interval = setInterval(refetch, 30000)
    onCleanup(() => clearInterval(interval))
  })

  return (
    <div class="my-20">
      <p class={`text-center text-2xl mb-4`}>{recent() ? 'Recently Played on Spotify' : 'Currently Live on Spotify'}</p>
      <div class="w-max max-w-[320px] m-auto">
        <a
          class={`m-auto transition-opacity duration-300 ${visible() ? 'animate-slideshow' : 'opacity-0'}`}
          target="_blank"
          href={songUrl()}
          rel="noopener noreferrer"
        >
          <img
            alt={`album cover of ${album() || 'loading album'}`}
            src={albumImageUrl() || './spotify.svg'}
            width={320}
            height={320}
            class="transition-opacity duration-300 transform ${
              visible() ? 'animate-slideshow scale-100' : 'opacity-0 scale-95'
            }"
          />
        </a>
        <div class={`mt-8 transition-opacity duration-300 ${visible() ? 'animate-slideshow' : 'opacity-0'}`}>
          <div>
            <p class="text-left text-lg font-bold">{title() || 'Getting title...'}</p>
            <p class="text-base text-wrap">{artist() || 'Getting artists...'}</p>
          </div>
          {/* <audio src={preview()} class="sm:block hidden" controls></audio> */}
        </div>
      </div>
    </div>
  )
}
