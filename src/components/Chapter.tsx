interface Props {
  index: number
  ref: HTMLDivElement | ((el: HTMLDivElement) => void) | undefined
}

const chapters = [
  {
    top: ['md:top-[30vh]', 'top-[30vh]'],
    source: './map/flag.svg',
    alt: 'South Vietnamese flag',
    heading: 'Vietnam Origins',
    paragraph:
      'Both my parents and their families came to the United States following the fall of the South Vietnamese government to flee communism. I am the first on my paternal side of the family to be born in the United States.',
  },
  {
    top: ['md:top-[130vh]', 'top-[180vh]'],
    source: './map/bham.jpg',
    alt: 'bellingham from the water',
    heading: 'Bellingham',
    paragraph:
      'I was born in Bellingham, a relatively large and beautiful city in Northern Washington between Vancouver and Seattle. I moved down to the Renton area at age 5.',
  },
  {
    top: ['md:top-[230vh]', 'top-[330vh]'],
    source: './map/edhesive.png',
    alt: 'screengrab from my pokemon game made in rpg maker',
    heading: 'High School Roots',
    duration: 'Sept 2015 -  June 2019',
    paragraph:
      'I took AP Computer Science in high school and learned Java. I made a game using RPG Maker XP and Pokemon Essentials with custom scripts in Ruby. This experience made me want to pursue a career in software development.',
  },
  {
    top: ['md:top-[330vh]', 'top-[480vh]'],
    source: './map/BC.jpg',
    alt: 'r building on bellevue college campus',
    heading: 'Running Start',
    duration: 'Sept 2017 -  June 2019',
    paragraph:
      'Further exposure to computer science and programming occured while I was doing the Running Start program offered in Washington State, a program that enabled high schoolers to be dually enrolled in a participating community college. Here, I took Computer Science I and II (142/143 at UW).',
  },
  {
    top: ['md:top-[430vh]', 'top-[630vh]'],
    source: './map/uw.jpg',
    alt: 'uw campus',
    heading: 'University of Washington',
    duration: 'Sept 2019 -  2022/2023',
    paragraph:
      'I originally applied to the University of Washington with an open major instead of trying for a closed one (stupid  decision), but later discovered the Geography Data Science program and decided to pursue it instead. I enjoy the university, campus, and atmosphere and have been supplementing my studies with self-learning.',
  },
  {
    top: ['md:top-[530vh]', 'top-[780vh]'],
    source: './map/iwp.jpg',
    alt: 'logo of international wood products',
    heading: 'First Internship',
    duration: 'July 2022 -  September 2022',
    paragraph:
      'I interned at International Wood Products in the summer of 2022, working in their IT department. I gained experience in setting up company computers and laptops, configuring the company network, and managing Active Directory and exchange. I also worked with email servers',
  },
]

export default function Chapter({ index, ref }: Props) {
  return (
    <div
      id={String(index)}
      ref={ref}
      class={`rounded-3xl border border-neutral-700 bg-neutral-800 text-white z-10 absolute ${chapters[index].top[1]} ${chapters[index].top[0]} md:p-4 md:w-[35%] h-max rounded`}
    >
      <h2 class="text-center text-2xl font-bold">{chapters[index].heading}</h2>
      {chapters[index].duration ? <p class="m-2 text-center">{chapters[index].duration}</p> : null}
      {chapters[index].source ? (
        <div class="p-4 flex justify-center">
          <img class={'w-1/2 h-1/2'} alt={chapters[index].alt} src={chapters[index].source!} />
        </div>
      ) : null}
      <p class="p-4 text-left text-sm md:text-base leading-8">{chapters[index].paragraph}</p>
    </div>
  )
}
