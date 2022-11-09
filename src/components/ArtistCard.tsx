import { createEffect, createSignal, For, Show } from 'solid-js'
import type { lastFMAPI } from '../models/lastFMAPI'
import type { Artist } from '../models/lastFMArtist'
import type { ImgHTMLAttributes } from '@astrojs/image/components'

interface Props {
  prefetch: Array<lastFMAPI>
  imgattr: [ImgHTMLAttributes]
}

export default function ArtistCard({ prefetch, imgattr }: Props) {

  return (
    <ul class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 h-max">
      <Show when={prefetch} fallback={'Loading top artists...'}>
        <For each={prefetch}>
          {(artist: Artist, i) => (
            <li class="flex justify-center items-center m-2 p-1 bg-[beige] text-black rounded-lg">
              <a target="_blank" href={artist.href} rel="noopener noreferrer">
                <img
                  class="m-auto"
                  src={imgattr[i()].src!}
                  width={imgattr[i()].width!}
                  height={imgattr[i()].height!}
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
