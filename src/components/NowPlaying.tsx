import { createEffect, createSignal, onCleanup } from 'solid-js'

const fetchNewData = async () => {
  const songQuery = await fetch(`${import.meta.env.PUBLIC_URL}/api/playing.json`)
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
    const data = await fetchNewData()
    let newTrack

    if (data[0].nowplaying) {
      newTrack = data[0]
    } else {
      newTrack = data[Math.floor(Math.random() * data.length)]
    }

    if (newTrack.url === songUrl()) return

    setVisible(false)
    setTimeout(() => {
      setTitle(newTrack.name)
      setArtist(newTrack.artist)
      setAlbum(newTrack.album)
      setAlbumImageUrl(newTrack.image)
      setSongUrl(newTrack.url)
      setRecent(newTrack.nowplaying || false)
      // setPreview(newTrack.preview);

      setVisible(true)
    }, 300)
  }

  createEffect(() => {
    setVisible(false)
    refetch()
    const interval = setInterval(refetch, 30000)
    onCleanup(() => clearInterval(interval))
  })

  return (
    <div class="my-20">
      <p class={`text-center text-2xl font-bold mb-4`}>{recent() ? 'Currently Scrobbling' : 'Recently Scrobbled'}</p>
      <div
        class={`w-max max-w-[320px] m-auto transition-opacity duration-300 ${visible() ? 'animate-slideshow' : 'opacity-0'}`}
      >
        <a class={`m-auto`} target="_blank" href={songUrl()} rel="noopener noreferrer">
          <img
            alt={`album cover of ${album() || 'loading album'}`}
            src={albumImageUrl() || './placeholder.png'}
            width={320}
            height={320}
            class={`"transition-opacity duration-300 transform ${
              visible() ? 'animate-slideshow scale-100' : 'opacity-0 scale-95'
            }"`}
          />
        </a>
        <div class={`mt-8`}>
          <div>
            <p class="text-left text-lg font-bold">
              <a href={`https://www.last.fm/music/${artist()}/_/${title()}`} target="_blank" rel="noopener noreferrer">
                {title() || 'Getting title...'}
              </a>
            </p>
            <p class="text-base text-wrap">
              <a href={`https://www.last.fm/music/${artist()}`} target="_blank" rel="noopener noreferrer">
                {artist() || 'Getting artist...'}
              </a>
            </p>
          </div>

          {/* <audio src={preview()} class="sm:block hidden" controls></audio> */}
        </div>
      </div>
    </div>
  )
}
