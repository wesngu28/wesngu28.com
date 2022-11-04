import { useState } from 'react'

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
  const [active, setActive] = useState(0)

  function decrementImage() {
    setActive(active - 1)
    if (active === 0) {
      return setActive(photos.length - 1)
    }
  }

  function incrementImage() {
    setActive(active + 1)
    if (active === photos.length - 1) {
      return setActive(0)
    }
  }
  return (
    <div className="flex items-center justify-center">
      <p onClick={decrementImage} className="text-6xl text-[#6E6E6E]">
        &#8592;
      </p>
      {photos.map((photo: string, i: number) => {
        return (
          <div
            key={i}
            className={`flex flex-col justify-center ${
              photos.length === 6 ? 'h-96 md:h-1/2 w-[200px] md:w-1/2' : null
            } m-auto relative ${active === i ? 'block animate-slideshow' : 'hidden'}`}
          >
            {caption ? (
              <div>
                <h2 className="text-center p-4 text-sm md:text-md font-bold">
                  {caption[i].location}
                </h2>
                <p className="text-center text-sm md:text-md mb-4">
                  <span className="font-bold">{caption[i].title}</span> -{' '}
                  {caption[i].duration}
                </p>
              </div>
            ) : null}
            <img
              alt={dynamicAlt}
              src={photo}
              className="object-contain"
            />
          </div>
        )
      })}
      <p onClick={incrementImage} className="text-6xl text-[#6E6E6E]">
        &#8594;
      </p>
    </div>
  )
}
