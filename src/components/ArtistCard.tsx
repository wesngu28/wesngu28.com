import { createResource, For, Show } from 'solid-js'
import type { lastFMAPI } from '../models/lastFMAPI'
import type { Artist } from '../models/lastFMArtist'

async function fetchData() {
  const songQuery = await fetch(`${import.meta.env.PUBLIC_URL}/api/lastfm.json`)
  const songText = await songQuery.text()
  const songJson: Array<lastFMAPI> = await JSON.parse(songText)
  return songJson
}

export default function ArtistCard() {
  const [data] = createResource(fetchData)
  return (
    <>
      <Show
        when={data()}
        fallback={
          <For each={Array(8).fill(0)}>
            {i => (
              <div class="flex justify-center items-center m-2 p-1 bg-[beige] text-black rounded-lg">
                <img src={'./placeholder.jpg'} />
              </div>
            )}
          </For>
        }
      >
        <For each={data()}>
          {(artist: Artist) => (
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
    </>
  )
}
