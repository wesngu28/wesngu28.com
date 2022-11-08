import 'mapbox-gl/dist/mapbox-gl.css'
import { Map, Marker } from 'mapbox-gl'
import Chapter from './Chapter'
import { onMount } from 'solid-js'

export default function ScrollyMap() {
  let mapContainer: HTMLDivElement | ((el: HTMLDivElement) => void) | undefined
  let vietnam1: HTMLDivElement | ((el: HTMLDivElement) => void) | undefined
  let bham1: HTMLDivElement | ((el: HTMLDivElement) => void) | undefined
  let hazen1: HTMLDivElement | ((el: HTMLDivElement) => void) | undefined
  let uw1: HTMLDivElement | ((el: HTMLDivElement) => void) | undefined
  let rs1: HTMLDivElement | ((el: HTMLDivElement) => void) | undefined
  let clack1: HTMLDivElement | ((el: HTMLDivElement) => void) | undefined
  let otherCareer1: HTMLDivElement | ((el: HTMLDivElement) => void) | undefined
  const refs = [vietnam1, bham1, hazen1, uw1, rs1, clack1, otherCareer1]

  const mapChapter = [
    {
      ref: vietnam1,
      center: [107.800854, 15.82164],
      zoom: 6,
      pitch: 16.5,
      style: 'mapbox://styles/wesngu028/cl8qaisxu000m14nzgup6koq4',
    },
    {
      ref: bham1,
      center: [-122.488778, 48.752951],
      zoom: 12,
      pitch: 60.5,
    },
    {
      ref: hazen1,
      center: [-122.1529, 47.5016],
      zoom: 16,
      pitch: 25.5,
      bearing: 25,
    },
    {
      ref: rs1,
      center: [-122.148192, 47.584425],
      zoom: 16.5,
      pitch: 0,
      alt: 'bellevue college logo map marker',
      marker: '../src/assets/map/bc-logo.jpg',
    },
    {
      ref: uw1,
      center: [-122.303366, 47.654353],
      zoom: 15.5,
      pitch: 45.0,
      style: 'mapbox://styles/wesngu028/cl8qbgdt6000b15t70lultgn5',
      alt: 'university of washington logo map marker',
      marker: '../src/assets/map/uw-logo.png',
    },
    {
      ref: clack1,
      center: [-122.565194, 45.41686],
      zoom: 17,
      pitch: 60.5,
      bearing: 30,
    },
    {
      ref: otherCareer1,
      center: [-122.1800715, 47.5832877],
      zoom: 11.0,
      pitch: 0.5,
      bearing: 0,
    },
  ]

  onMount(() => {
    if (mapContainer) {
      const map = new Map({
        container: mapContainer as HTMLDivElement,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [107.800854, 15.82164],
        zoom: 6,
        pitch: 16.5,
        interactive: false,
        accessToken: `${import.meta.env.PUBLIC_MAPBOX_ACCESS_TOKEN}`,
      })
      mapChapter.forEach((chapter, i) => {
        let marker = null
        if (chapter.marker)
          marker = (<img alt={chapter.alt} src={chapter.marker} />) as HTMLElement
        if (i === 6) {
          new Marker({
            element: (
              <img alt="nhstc logo map marker" src="../src/assets/map/nhstc-marker.png" />
            ) as HTMLElement,
          })
            .setLngLat([-122.1800715, 47.5532877])
            .addTo(map)
          new Marker({
            element: (
              <img
                alt="target logo map marker"
                src="../src/assets/map/target-marker.jpg"
              />
            ) as HTMLElement,
          })
            .setLngLat([-122.1999175, 47.4968123])
            .addTo(map)
          new Marker({
            element: (
              <img
                alt="amazon fresh logo map marker"
                src="../src/assets/map/fresh-marker.png"
              />
            ) as HTMLElement,
          })
            .setLngLat([-122.1733261, 47.575893])
            .addTo(map)
        } else {
          new Marker({ element: marker as HTMLElement })
            .setLngLat([chapter.center[0], chapter.center[1]])
            .addTo(map)
        }
      })
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio > 0) {
              const flyHere = Number(entry.target.id)
              entry.target.classList.add('opacity-100')
              entry.target.classList.add('duration-1000')
              entry.target.classList.add('transition-opacity')
              entry.target.classList.remove('opacity-25')
              map.flyTo({
                center: mapChapter[flyHere].center as [number, number],
                zoom: mapChapter[flyHere].zoom,
                pitch: mapChapter[flyHere].pitch,
                bearing: mapChapter[flyHere].bearing ? mapChapter[flyHere].bearing : 0,
                duration: 8000,
                essential: true,
              })
              if (mapChapter[flyHere].style) map.setStyle(mapChapter[flyHere].style!)
            } else {
              entry.target.classList.remove('opacity-100')
              entry.target.classList.remove('duration-1000')
              entry.target.classList.remove('transition-opacity')
              entry.target.classList.add('opacity-25')
            }
          })
        },
        {
          threshold: 0.25,
        }
      )

      refs.forEach(ref => {
        if (ref) observer.observe(ref as HTMLElement)
      })
      return () => {
        map.remove()
        refs.forEach(ref => {
          if (ref) observer.unobserve(ref as HTMLElement)
        })
      }
    }
  })

  return (
    <>
      {mapChapter.map((chapter, idx) => {
        return <Chapter index={idx} ref={refs[idx]} />
      })}
      <div class="h-[100vh] w-full fixed top-0 bottom-0 left-0 right-0">
        <div ref={mapContainer} class="h-full"></div>
      </div>
      //{' '}
    </>
  )
}
