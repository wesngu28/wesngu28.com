import { createResource, For, Show } from 'solid-js'

async function fetchData() {
  const songQuery = await fetch(`${import.meta.env.PUBLIC_URL}/api/lastfm.json`)
  const songText = await songQuery.text()
  const songJson: Array<{
    name: string
    playcount: string
    href: string
    img: string
  }> = await JSON.parse(songText)
  return songJson
}

export default function ArtistCard() {
  const [data] = createResource(fetchData)
  return (
    <>
      <Show when={data()}>
        <For each={data()}>
          {(artist: { name: string; playcount: string; href: string; img: string }) => (
            <div class="artist flex justify-center items-center m-2 p-1 bg-[beige] text-black rounded-lg hidden">
              <a target="_blank" href={artist.href} rel="noopener noreferrer">
                <img
                  class="m-auto w-[160px] h-[160px] object-contain"
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
