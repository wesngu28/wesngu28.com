import { createEffect, createSignal } from 'solid-js'
import type { spotifyAPI } from '../models/spotifyAPI'

interface Props {
  prefetch: spotifyAPI
}

export default function NowPlaying({ prefetch }: Props) {
  const [data, setData] = createSignal<spotifyAPI>(prefetch)

  const fetchNewData = async () => {
    const songQuery = await fetch('/api/spotify.json')
    const songText = await songQuery.text()
    const songJson: spotifyAPI = await JSON.parse(songText)
    return songJson
  }

  createEffect(() => {
    let interval = setInterval(async () => setData(await fetchNewData()), 30000)
    return () => clearInterval(interval)
  })

  const trimText = (text: string) => {
    if (text.length > 34) {
      text = text.substring(0, 34)
      return `${text}...`
    }
    return text
  }

  return (
    <div class="bg-[#292C33] w-max p-4 flex items-center justify-center">
      <div class="w-72 flex flex-col">
        <p class="text-center">
          {data()
            ? data()!.recent
              ? 'Recently Played on Spotify'
              : 'Currently Live on Spotify'
            : 'Getting song...'}
        </p>
        <p class="mt-5 m-auto text-sm font-bold">PLAYING FROM ALBUM</p>
        <p class="m-auto mb-11">
          {data() ? trimText(data()!.album) : 'Getting album...'}
        </p>
        <a
          class="m-auto mb-11"
          target="_blank"
          href={data() ? data()!.songUrl : ''}
          rel="noopener noreferrer"
        >
          <img
            alt={`album cover of ${data() ? data()!.album : 'loading album'}}`}
            src={data() ? data()!.albumImageUrl : '../src/assets/spotify.svg'}
            width={288}
            height={288}
          />
        </a>
        <p class="text-left font-bold">{data() ? data()!.title : 'Getting title...'}</p>
        <p>{data() ? data()!.artist : 'Getting artists...'}</p>
      </div>
    </div>
  )
}
