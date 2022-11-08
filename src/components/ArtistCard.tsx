import { createEffect, createSignal, For, Show } from 'solid-js'
import type { lastFMAPI } from '../models/lastFMAPI'
import type { Artist } from '../models/lastFMArtist'

interface Props {
  prefetch: Array<lastFMAPI>
}

export default function ArtistCard({ prefetch }: Props) {

  return (
    <ul class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 h-max">
      <Show when={prefetch} fallback={'Loading top artists...'}>
        <For each={prefetch}>
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
