import { createEffect, createResource, createSignal } from 'solid-js'

const fetchNewData = async () => {
  const songQuery = await fetch(`${import.meta.env.PUBLIC_URL}/api/spotify.json`)
  const songJson = await JSON.parse(await songQuery.text())
  return songJson
}

export default function NowPlaying() {
  const [data, { refetch }] = createResource(fetchNewData)
  createEffect(async () => {
    let interval = setInterval(async () => refetch(), 30000)
    return () => clearInterval(interval)
  })

  return (
    <div>
      <div>
        <p class="text-center">
          {data()
            ? data()!.recent
              ? 'Recently Played on Spotify'
              : 'Currently Live on Spotify'
            : 'Getting song...'}
        </p>
      </div>
      <div class="flex w-max h-[96px]">
        <a
          class="m-auto"
          target="_blank"
          href={data() ? data()!.songUrl : ''}
          rel="noopener noreferrer"
        >
          <img
            alt={`album cover of ${data() ? data()!.album : 'loading album'}}`}
            src={data() ? data()!.albumImageUrl : './spotify.svg'}
            width={96}
            height={96}
          />
        </a>
        <div class="m-4">
          <div>
            <p class="text-left font-bold">
              {data() ? data()!.title : 'Getting title...'}
            </p>
            <p>{data() ? data()!.artist : 'Getting artists...'}</p>
          </div>
          <audio src={data() && data()!.preview} class="sm:block hidden" controls></audio>
        </div>
      </div>
    </div>
  )
}
