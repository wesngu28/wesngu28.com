import { createEffect, createSignal, For, Show } from 'solid-js'
import type { lastFMAPI } from '../models/lastFMAPI'
import type { Artist } from '../models/lastFMArtist'

interface Props {
  prefetch: Array<lastFMAPI>
}

export default function ArtistCard({ prefetch }: Props) {
  const [data, setData] = createSignal<Array<lastFMAPI>>(prefetch)

  const fetchNewData = async () => {
    const songQuery = await fetch('/api/lastfm.json')
    const songText = await songQuery.text()
    const songJson: Array<lastFMAPI> = await JSON.parse(songText)
    return songJson
  }

  createEffect(() => {
    let interval = setInterval(async () => setData(await fetchNewData()), 86400000000)
    return () => clearInterval(interval)
  })

  return (
    <ul class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 h-max">
      <Show when={data()} fallback={'Loading top artists...'}>
        <For each={data()}>
          {(artist: Artist) => (
            <li class="flex justify-center items-center m-2 p-1 bg-[beige] text-black rounded-lg">
              <a target="_blank" href={artist.href} rel="noopener noreferrer">
                <img
                  class="m-auto"
                  src={artist.img}
                  alt={`${artist.name} icon from spotify`}
                  title={`${artist.name} - ${artist.playcount} plays`}
                />
              </a>
            </li>
          )}
        </For>
      </Show>
    </ul>
  )
}
