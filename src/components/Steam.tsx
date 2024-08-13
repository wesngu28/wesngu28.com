import { createResource, Show } from 'solid-js'

async function fetchData() {
  const steamers = await fetch(`${import.meta.env.PUBLIC_URL}/api/steam.json`)

  if (steamers.status !== 404) {
    return await steamers.json()
  }
}

export default function Steam() {
  const [data] = createResource(fetchData)
  return (
    <>
      <Show when={data()}>
        <div class="my-10 clienthide">
          <p class="p-4 text-center text-lg">
            I am currently playing{' '}
            <a
              href={data().website}
              target="_blank"
              rel="noreferrer noopener"
              class="hover:underline font-bold"
              title={`${data().name}${data().developers && data().developers[0] ? ` developed by ${data().developers[0]}` : ''}${data().publishers && data().publishers[0] ? `, published by ${data().publishers[0]}` : ''}`}
            >
              {data().name}
            </a>{' '}
            on Steam.
          </p>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href={data().website}
            class="m-auto"
            title={`${data().name}${data().developers && data().developers[0] && ` developed by ${data().developers[0]}`}${data().publishers && data().publishers[0] && `, published by ${data().publishers[0]}`}`}
          >
            <img class="m-auto" alt={data().name} src={data().image} />
          </a>
        </div>
      </Show>
    </>
  )
}
