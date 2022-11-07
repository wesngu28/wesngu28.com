import { createEffect, createSignal } from 'solid-js'

interface Props {
  name: string
  url: string
  cover: string
  stats: string
  delay?: string
}

interface skyrimProps {
  stats: string
}

export default function GameCard({ name, url, cover, stats, delay }: Props) {

  const openNewTab = (gameUrl: string) => {
    window.open(gameUrl, '_blank', 'noopener,noreferrer')
  }

  const [moreInfo, setMoreInfo] = createSignal(false)
  const [visible, setVisible] = createSignal(false)

  let listRef: HTMLLIElement | ((el: HTMLLIElement) => void) | undefined;
  
  createEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries
      setVisible(entry.isIntersecting)
      if (entry.isIntersecting) {
        observer.unobserve((listRef as HTMLElement))
      }
    }
    )
    if (listRef) observer.observe((listRef as HTMLElement))
    return () => {
      if(listRef) observer.unobserve((listRef as HTMLElement))
    }
  })

  return (
    <>
      <li
        ref={listRef}
        class={`${visible()
            ? `${delay} opacity-100 md:translate-x-0-all duration-1000`
            : 'md:-translate-x-full  opacity-0'
          } bg-[#21222a] hover:z-50 m-1 inline-block border-b-4`}
      >
        <div
          onClick={() => openNewTab(url)}
          class="peer hover:scale-125 hover:cursor-pointer z-10 ease-out"
        >
          <span class="box-border block overflow-hidden w-[initial] h-[initial] bg-none opacity-100 border-none m-0 p-0 relative">
            <span class="box-border block w-[initial] h-[initial] bg-none opacity-100 border-none m-0 pt-[46.7391%] pb-0 px-0">
              <img class="p-0 block m-auto min-w-full max-w-full max-h-full min-h-full inset-0 w-auto h-auto absolute"
                onMouseEnter={() => setMoreInfo(true)}
                onMouseLeave={() => setMoreInfo(false)}
                src={cover}
                title={name}
                alt={`${name} header`}
                width={'460px'}
                height={'215px'}
              />
            </span>
          </span>
        </div>
        <div class="absolute left-1/2 md:opacity-0 peer-hover:opacity-100 transition-opacity duration-500 z-50">
          {moreInfo() && (
            <div class="relative bg-[#6E644E] rounded-xl mt-11 p-2 -left-1/2 top-6 w-screen md:w-full">
              {name === 'Skyrim' ? (
                <Skyrim stats={stats} />
              ) : (
                <img class="m-auto" alt={`${name} stats`} src={stats} />
              )}
            </div>
          )}
        </div>
      </li>
    </>
  )
}

function Skyrim({ stats }: skyrimProps) {
  return (
    <>
      <p>Known colloquially as Mod Organizer 2.</p>
      <p>I have only ever finished this game once, as a Redguard sneak archer.</p>
      <img alt={'steam skyrim stats'} src={stats} />

      <table class="m-auto w-full bg-slate-800">
      <caption class="mt-5 font-bold">Elder Scrolls Favorites</caption>
        <tbody>
          <tr class="text-center border-b">
            <th></th>
            <th>Skyrim</th>
            <th>Tamriel</th>
          </tr>
          <tr class="text-center">
            <td>Race</td>
            <td>Redguard</td>
            <td>Dunmer</td>
          </tr>
          <tr class="text-center">
            <td>Province</td>
            <td>N/A</td>
            <td>Cyrodill</td>
          </tr>
          <tr class="text-center">
            <td>City</td>
            <td>Solitude</td>
            <td>Imperial City</td>
          </tr>
          <tr class="text-center">
            <td>Daedric Prince</td>
            <td>Clavicus Vile</td>
            <td>Azura</td>
          </tr>
          <tr class="text-center">
            <td>Aedric Entity</td>
            <td>Akatosh</td>
            <td>Akatosh</td>
          </tr>
          <tr class="text-center">
            <td>Character</td>
            <td>Breylna Maryon</td>
            <td>Katariah Septim</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
