import languageList from '../../languages.json'
import { createEffect, createSignal, For, Show } from 'solid-js'

interface Props {
  url: string
  prefetch: { [key: string]: string }
}

export default function Github({ url, prefetch }: Props) {
  const [data, setData] = createSignal<{ [key: string]: string }>(prefetch)

  const fetchNewData = async () => {
    const linguist = await fetch(
      `http://localhost:3000/api/github.json?repo=${url.replace(
        'https://github.com/wesngu28/',
        ''
      )}`
    )
    const linguini = await linguist.text()
    const langs = await JSON.parse(linguini)
    const counts: Array<number> = Object.values(langs)
    const total = counts.reduce(
      (previousValue: number, currentValue) => previousValue + currentValue,
      0
    )
    Object.keys(langs).map(extension => {
      langs[extension] = (langs[extension] / total) * 100
    })
    return langs
  }

  createEffect(() => {
    let interval = setInterval(async () => setData(await fetchNewData()), 86400000)
    return () => clearInterval(interval)
  })

  return (
    <div class="-my-2 w-full">
      {
        <Show when={data() && Object.keys(data()).length > 0} fallback={null}>
          <For each={Object.keys(data())}>
            {lang => (
              <span
                title={lang}
                style={`width: ${data()[lang]}%; background-color: ${
                  (languageList as any)[lang].color
                }; color: ${(languageList as any)[lang].color}`}
                class={`inline-block bg-[#3178c6] text-[0.4rem]`}
                data-view-component="true"
              >
                .
              </span>
            )}
          </For>
        </Show>
      }
    </div>
  )
}
