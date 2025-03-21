import { createResource, For, Show } from 'solid-js'

interface Props {
  url: string
  langs: { [key: string]: { color: string } }
}

const fetchLanguages = async (url: string) => {
  const linguist = await fetch(
    `${import.meta.env.PUBLIC_URL}/api/github.json?author=${
      url.match('https://github.com/([^/]*)/')![1]
    }&repo=${url.match(/\/([^/]*)$/)![1]}`
  )

  const langs: { [key: string]: number } = await JSON.parse(await linguist.text())
  const total = Object.values(langs).reduce((previousValue: number, currentValue) => previousValue + currentValue, 0)
  Object.keys(langs).map(extension => {
    langs[extension] = (langs[extension] / total) * 100
  })

  return langs
}

export default function Github({ url, langs }: Props) {
  const [data] = createResource(() => fetchLanguages(url))

  return (
    <div class="h-min flex items-center justify-center">
      {
        <Show when={data()} fallback={null}>
          <For each={Object.keys(data()!)}>
            {lang => (
              <span
                title={`${lang} - ${data()![lang].toFixed(2)}%}`}
                style={`width: ${data()![lang]}%; background-color: ${langs[lang].color}; color: ${langs[lang].color}`}
                class={`bg-[#3178c6] text-[0.4rem]`}
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
