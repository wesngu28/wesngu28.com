import Map, { MapRef, Marker } from 'react-map-gl'
import { useInView } from 'react-intersection-observer'
import 'mapbox-gl/dist/mapbox-gl.css'
import { useRef } from 'react'
import Chapter from './Chapter'

export default function ScrollyMap() {
  const mapRef = useRef<MapRef>(null)
  const { ref: vietnam, inView: vietnamView } = useInView({ threshold: 0.25 })
  const { ref: bham, inView: bhamView } = useInView({ threshold: 0.25 })
  const { ref: hazen, inView: hazenView } = useInView({ threshold: 0.25 })
  const { ref: uw, inView: uwView } = useInView({ threshold: 0.25 })
  const { ref: rs, inView: rsView } = useInView({ threshold: 0.25 })
  const { ref: clack, inView: clackView } = useInView({ threshold: 0.25 })
  const { ref: otherCareer, inView: otherCareerView } = useInView({ threshold: 0.25 })

  const mapChapter = [
    {
      ref: vietnam,
      view: vietnamView,
      center: [107.800854, 15.82164],
      zoom: 6,
      pitch: 16.5,
      style: 'mapbox://styles/wesngu028/cl8qaisxu000m14nzgup6koq4',
    },
    {
      ref: bham,
      view: bhamView,
      center: [-122.488778, 48.752951],
      zoom: 12,
      pitch: 60.5,
    },
    {
      ref: hazen,
      view: hazenView,
      center: [-122.1529, 47.5016],
      zoom: 16,
      pitch: 25.5,
      bearing: 25,
    },
    {
      ref: rs,
      view: rsView,
      center: [-122.148192, 47.584425],
      zoom: 16.5,
      pitch: 0,
      alt: 'bellevue college logo map marker',
      marker: '../src/assets/map/bc-logo.jpg',
    },
    {
      ref: uw,
      view: uwView,
      center: [-122.303366, 47.654353],
      zoom: 15.5,
      pitch: 45.0,
      style: 'mapbox://styles/wesngu028/cl8qbgdt6000b15t70lultgn5',
      alt: 'university of washington logo map marker',
      marker: '../src/assets/map/uw-logo.png',
    },
    {
      ref: clack,
      view: clackView,
      center: [-122.565194, 45.41686],
      zoom: 17,
      pitch: 60.5,
      bearing: 30,
    },
    {
      ref: otherCareer,
      view: otherCareerView,
      center: [-122.1800715, 47.5832877],
      zoom: 11.0,
      pitch: 0.5,
      bearing: 0,
    },
  ]

  if (mapRef.current) {
    mapChapter.forEach(locationConf => {
      if (locationConf.view) {
        mapRef.current!.getMap().flyTo({
          center: locationConf.center as [number, number],
          zoom: locationConf.zoom,
          pitch: locationConf.pitch,
          bearing: locationConf.bearing ? locationConf.bearing : 0,
          duration: 8000,
          essential: true,
        })
        mapRef
          .current!.getMap()
          .setStyle(
            locationConf.style ? locationConf.style : 'mapbox://styles/mapbox/dark-v10'
          )
      }
    })
  }

  return (
    <>
      {mapChapter.map((chapter, idx) => {
        return (
          <Chapter
            key={chapter.center[0]}
            index={idx}
            ref={chapter.ref}
            view={chapter.view}
          />
        )
      })}
      <div className="h-[100vh] w-full fixed top-0 bottom-0 left-0 right-0">
        <Map
          ref={mapRef}
          initialViewState={{
            longitude: 107.800854,
            latitude: 15.82164,
            zoom: 6,
            pitch: 16.5,
          }}
          interactive={false}
          mapStyle="mapbox://styles/wesngu028/cl8qaisxu000m14nzgup6koq4"
          mapboxAccessToken={`${import.meta.env.PUBLIC_MAPBOX_ACCESS_TOKEN}`}
        >
          {mapChapter.map(chapter => {
            return chapter.view ? (
              chapter.view === otherCareerView ? (
                <>
                  <Marker longitude={-122.1800715} latitude={47.5532877}>
                    <img alt="nhstc logo map marker" src={'../src/assets/map/nhstc-marker.png'} />
                  </Marker>
                  <Marker longitude={-122.1999175} latitude={47.4968123}>
                    <img alt="target logo map marker" src={'../src/assets/map/target-marker.png'} />
                  </Marker>
                  <Marker longitude={-122.1733261} latitude={47.575893}>
                    <img
                      alt="amazon fresh logo map marker"
                      src={'../src/assets/map/fresh-marker.png'}
                    />
                  </Marker>
                </>
              ) : (
                <Marker longitude={chapter.center[0]} latitude={chapter.center[1]}>
                  {chapter.marker ? (
                    <img alt={chapter.alt} src={chapter.marker} />
                  ) : null}
                </Marker>
              )
            ) : null
          })}
        </Map>
      </div>
    </>
  )
}
