import { createSignal, For, onMount, Show } from 'solid-js'
import type { lastFMAPI } from '../models/lastFMAPI'
import type { Artist } from '../models/lastFMArtist'

export default function ArtistCard() {
  const [data, setData] = createSignal<Array<lastFMAPI> | null>(null)

  onMount(async () => {
    const songQuery = await fetch(`${import.meta.env.PUBLIC_URL}/api/lastfm.json`)
    const songText = await songQuery.text()
    const songJson: Array<lastFMAPI> = await JSON.parse(songText)
    setData(songJson)
  })
  return (
    <Show when={data()} fallback={'Loading top artists...'}>
      <For each={data()}>
        {(artist: Artist, i) => (
          <div class="flex justify-center items-center m-2 p-1 bg-[beige] text-black rounded-lg">
            <a target="_blank" href={artist.href} rel="noopener noreferrer">
              <img
                class="m-auto"
                loading="lazy"
                src={artist.img}
                width={160!}
                height={160}
                alt={`${artist.name} icon from spotify`}
                title={`${artist.name} - ${artist.playcount} plays`}
              />
            </a>
          </div>
        )}
      </For>
    </Show>
  )
}
