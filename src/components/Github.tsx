import { createSignal, For, onMount, Show } from 'solid-js'

interface Props {
  url: string
}

export default function Github({ url }: Props) {

  const [data, setData] = createSignal<{ [key: string]: string } | null>(null)

  onMount(async () => {
    const linguist = await fetch(
      `${import.meta.env.PUBLIC_URL}/api/github.json?repo=${url.replace(
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
    setData(langs)
  })

  const langs: {[key:string]: {color: string}} = {
    Astro: {
      color: '#ff5a03',
    },
    CSS: {
      color: '#563d7c',
    },
    Dockerfile: {
      color: '#384d54',
    },
    HTML: {
      color: '#e34c26',
    },
    Java: {
      color: '#b07219',
    },
    JavaScript: {
      color: '#f1e05a',
    },
    'Jupyter Notebook': {
      color: '#DA5B0B',
    },
    Python: {
      color: '#3572A5',
    },
    R: {
      color: '#198CE7',
    },
    SCSS: {
      color: '#c6538c',
    },
    Shell: {
      color: '#89e051',
    },
    Svelte: {
      color: '#ff3e00',
    },
    TeX: {
      color: '#3D6117',
    },
    TypeScript: {
      color: '#3178c6',
    },
    Vue: {
      color: '#41b883',
    },
  }

  return (
    <div class="-my-2 w-full">
      {
        <Show when={data()} fallback={null}>
          <For each={Object.keys(data()!)}>
            {lang => (
              <span
                title={lang}
                style={`width: ${data()![lang]}%; background-color: ${
                  langs[lang].color
                }; color: ${langs[lang].color}`}
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