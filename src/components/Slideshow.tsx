import { Accessor, createSignal, For, Show } from 'solid-js'

interface Props {
  photos: string[]
  dynamicAlt: string
  caption?: Array<{
    location: string
    duration: string
    title: string
  }>
}

export default function Slideshow({ photos, dynamicAlt, caption }: Props) {
  const [active, setActive] = createSignal(0)

  function decrementImage() {
    setActive(active() - 1)
    if (active() === 0) {
      return setActive(photos.length - 1)
    }
  }

  function incrementImage() {
    setActive(active() + 1)
    if (active() === photos.length - 1) {
      return setActive(0)
    }
  }
  return (
    <div class="flex items-center justify-center">
      <p onClick={decrementImage} class="text-6xl text-[#6E6E6E]">
        &#8592;
      </p>
      <For each={photos}>
        {(photo: string, i: Accessor<number>) =>
          <div
            class={`flex flex-col justify-center ${photos.length === 6 ? 'h-96 md:h-1/2 w-[200px] md:w-1/2' : null
              } m-auto relative ${active() === i() ? 'block animate-slideshow' : 'hidden'}`}
          >
            <Show when={caption} fallback={null}>
              <div>
                <h2 class="text-center p-4 text-sm md:text-md font-bold">
                  {caption![i()].location}
                </h2>
                <p class="text-center text-sm md:text-md mb-4">
                  <span class="font-bold">{caption![i()].title}</span> -{' '}
                  {caption![i()].duration}
                </p>
              </div>
            </Show>
            <img
              alt={dynamicAlt}
              src={photo}
              class="object-contain"
            />
          </div>
        }
      </For>
      <p onClick={incrementImage} class="text-6xl text-[#6E6E6E]">
        &#8594;
      </p>
    </div>
  )
}
