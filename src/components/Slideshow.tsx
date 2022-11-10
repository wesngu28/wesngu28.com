import { createSignal, For, onMount, Show } from 'solid-js'

interface Props {
  dynamicAlt: string
  caption?: Array<{
    location: string
    duration: string
    title: string
  }>
}

export default function Slideshow({ dynamicAlt, caption }: Props) {
  let photos
  let photoRef: HTMLDivElement | undefined
  if (dynamicAlt === 'Cami') {
    photos = [
      './dog/cami1.webp',
      './dog/cami2.webp',
      './dog/cami3.webp',
      './dog/cami4.webp',
      './dog/cami5.webp',
      './dog/cami6.webp',
    ]
  }
  if (dynamicAlt === 'Xena') {
    photos = [
      './dog/xena1.webp',
      './dog/xena2.webp',
      './dog/xena3.webp',
      './dog/xena4.webp',
      './dog/xena5.webp',
      './dog/xena6.webp',
    ]
  }
  if (dynamicAlt.includes('logo')) {
    photos = ['./map/nhstc.png', './map/target.jpg', './map/fresh.png']
  }
  const [active, setActive] = createSignal(0)

  function decrementImage() {
    setActive(active() - 1)
    if (active() <= 0) {
      return setActive(photos.length - 1)
    }
  }

  function incrementImage() {
    setActive(active() + 1)
    if (active() === photos.length) {
      return setActive(0)
    }
  }

  onMount(() => {
    const loadTheseNow = photoRef?.querySelectorAll('img')
    loadTheseNow?.forEach(photo => {
      photo.loading = 'eager'
    })
  })
  return (
    <div ref={photoRef} class="flex items-center justify-center">
      <p onClick={decrementImage} class="text-6xl text-[#6E6E6E]">
        &#8592;
      </p>
      <For each={photos}>
        {(photo: string, i) => (
          <div
            class={`flex flex-col justify-center ${
              photos.length === 6 ? 'h-96 md:h-1/2 w-[200px] md:w-1/2' : null
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
            {i() === 0 ? (
              <img loading="eager" alt={dynamicAlt} src={photo} class="object-contain" />
            ) : (
              <img loading="lazy" alt={dynamicAlt} src={photo} class="object-contain" />
            )}
          </div>
        )}
      </For>
      <p onClick={incrementImage} class="text-6xl text-[#6E6E6E]">
        &#8594;
      </p>
    </div>
  )
}
