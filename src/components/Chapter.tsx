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
    paragraph: [
      'Both my parents and their families came to the United States following the fall of the South Vietnamese government to flee communism. I am the first on my paternal side of the family to be born in the United States.',
    ],
  },
  {
    top: ['md:top-[130vh]', 'top-[180vh]'],
    source: './map/bham.jpg',
    alt: 'bellingham from the water',
    heading: 'Bellingham',
    paragraph: [
      'I was born in Bellingham, a relatively large and beautiful city in Northern Washington between Vancouver and Seattle. I moved down to the Renton area at age 5.',
    ],
  },
  {
    top: ['md:top-[230vh]', 'top-[330vh]'],
    source: './map/edhesive.png',
    alt: 'screengrab from my pokemon game made in rpg maker',
    heading: 'High School Roots',
    duration: 'Sept 2015 -  June 2019',
    paragraph: [
      'My first exposure to computer science came in AP Computer Science at Hazen High School. My first language was Java and while I did not perform the best in class, I pushed forward to receive a 4 on the AP test.',
      'A project that I made during my time in the course was a game using the RPG Maker XP engine and Pokemon Essentials that made use of many custom scripts in Ruby, but I sadly lost the files when resetting my Surface laptop.',
      'After taking this class, I knew that I wanted to work in software development.',
    ],
  },
  {
    top: ['md:top-[330vh]', 'top-[480vh]'],
    source: './map/BC.jpg',
    alt: 'r building on bellevue college campus',
    heading: 'Running Start',
    duration: 'Sept 2017 -  June 2019',
    paragraph: [
      'Further exposure to computer science and programming occured while I was doing the Running Start program offered in Washington State, a program that enabled high schoolers to be dually enrolled in a participating community college. Here, I took Computer Science I and II (142/143 at UW).',
    ],
  },
  {
    top: ['md:top-[430vh]', 'top-[630vh]'],
    source: './map/uw.jpg',
    alt: 'uw campus',
    heading: 'University of Washington',
    duration: 'Sept 2019 -  2022/2023',
    paragraph: [
      'Entering university, I made the ill-advised decision to not put CS, CE, or informatics on my application to the University of Washington, instead opting for an open major.',
      'Despite this, I found that I loved the university, the campus, and its atmosphere. Instead of transferring, I chose to join the growing Geography Data Science program, where I could learn new skills and also supplement it with my own self-learning.',
    ],
  },
  {
    top: ['md:top-[530vh]', 'top-[780vh]'],
    source: './map/iwp.jpg',
    alt: 'logo of international wood products',
    heading: 'First Internship',
    duration: 'July 2022 -  September 2022',
    paragraph: [
      'During the summer of 2022, I got my first internship at the IT department for a lumber company called International Wood Products down in Clackamas, Oregon.',
      'I learned a wide variety of things during this internship. Aside from setting up company computers and laptops, I helped to configure the company network through switch and access point configurations, managed Active Directory and exchange, as well as email servers.',
    ],
  }
]

const Chapter = ({ index, ref }: Props) => {
  return (
    <div
      id={String(index)}
      ref={ref}
      class={`rounded-3xl bg-[#1F2022] text-white z-10 absolute ${chapters[index].top[1]} ${chapters[index].top[0]} md:p-4 md:w-[35%] h-max rounded`}
    >
      <h2 class="text-center text-2xl font-bold">{chapters[index].heading}</h2>
      {chapters[index].duration ? (
        <p class="m-2 text-center">{chapters[index].duration}</p>
      ) : null}
      {chapters[index].source ? (
        <div class="p-4 flex justify-center">
          <img class={"w-1/2 h-1/2"} alt={chapters[index].alt} src={chapters[index].source!} />
        </div>
      ) : null}
      <div>
        {chapters[index].paragraph!.map(text => {
              return <p class="p-4 text-left text-sm md:text-base leading-8">{text}</p>
            })}
      </div>
    </div>
  )
}

export default Chapter
