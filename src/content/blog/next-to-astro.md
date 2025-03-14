---
title: 'From Next.js to Astro'
description: 'Switching my website from Next.js to Astro'
pubDate: '11 11 2022'
heroImage: '/blog/second-post/astro.jpg'
heroImageAlt: 'Astro'
heroImageAttr: Astro
---

After watching videos on Astro from people like Fireship and Theo, I decided that I wanted to make a blog or some sort of personal project with Astro. The problem was, I already made this portfolio website in Next.js not even a month ago. It had some interactive components, like a slideshow and some fetching for Spotify and Last.fm, as well as that extra scrolly map. Essentially, Next, React, Tailwind, and JSX were helping me streamline the experience of implementing the website.

It all worked fine, so why switch? I mainly was buying into the hype and I wanted to try shipping less Javascript to the server. A Next project ships a lot of unnecessary Javascript.

```

npx astro add tailwind

npx astro add solid

npx astro add vercel

```

## Integrations and Frameworks

Something cool about Astro is how you can easily fit in what you need with just a few commands. I chose to use Tailwind to make CSS enjoyable to work with and SolidJS to learn it and have an easier transition from my previous JSX syntax. I also needed Vercel's adapter to server render it with Vercel.

On SolidJS, like I said, I mainly chose it to transition from React more smoothly. I never worked with Solid prior to this but had seen some videos talking about it and was interested. I initially used React, but thought, hey I'm already going from Next to Astro, might as well learn another framework while I'm at it. Honestly though, I mainly switched out of React because I had issues with Mapbox working, otherwise I may have not. It was worth it, Solid is really cool and feels a lot more direct and smooth than React. I also considered Svelte.

## Transitioning Over

A lot of the website is just static content, like the Skills cards, the images and information about the Projects, and the header/footers. These were easily ported over to Astro components. Astro components are essentially just html files and it was a very great and smooth experience to transfer it over.

Next were the components that made use of the API and the useSWR hook. Initially these were quite easy to migrate, as I was using React to start. Moving my api routes from Next to Astro and migrating over data fetching with useSWR was simple with the React integration.

My troubles came when I had to bring my scrollytelling map over. When porting my map over, I didn't have to make many changes to at least see the chapters and other functionality appear. The problem was the only thing that mattered. The actual map was not present.

At first I thought this was just an issue of not loading the environmental variable in properly. Astro does not have its own environment variable system like Next does, isntead opting in to using Vite's with only a few changes.

```javascript

URL='google.com'

// this is usable in serverside code, meaning mainly frontmatter and api routes

PUBLIC_URL='google.com'

// this is usable in clientside code

```
</div>

I discovered that this ended up not being the real problem. Even after inputing the variable, I found that Mapbox would place its required containers and divs down, but the actual Map canvas element would not appear. At this point and a few hours in, I thought about removing the map, as it really played no real role on the site, but then I thought, I already migrated to Astro, might as well do a full migration right?

## It's Solid

I had heard good things about Solid and decided that I was going to switch to it to keep the code functionally similar. Solid is a javascript framework that uses JSX like React, but doesn't use an abstraction like the virtual dom and instead behaves more like Svelte.

```javascript
const [count, setCount] = useState(0)

const [count, setCount] = createSignal(0)

useEffect(() => {
  console.log('Hello World')
}, [])

createEffect(() => {
  console.log('Hello World')
})
```

A lot of Solid looks and feels the same to React. These are the useState and useEffect equivalents in Solid. One cool difference is that Solid does not need a dependency array to track state changes for the effect hook like React does. You can learn more about Solid [here](https://www.solidjs.com/).

```javascript
<Show when={data()} fallback={null}>
  <div>data()</div>
</Show>

{ data ? <div>{data}</div> : null}

<For each={data()}>
  (item => <div>{item}</div>)
</For>

data.map(item => {
  return (
    <div>{item}</div>
  )
})
```

Some other cool things about Solid are the provided For and Show components which make working with conditional data and rendering a lot easier and intuitive.

After adding Solid, I was able to shed the dependency on react, react-dom, react-intersection-observer, and react-mapbox-gl. It took a while, but I was able to convert my intersection observer code and even the entire map to a more close to vanilla implementation, but in Solid.

Some caveats I encountered was actually in trying to get rid of as much Solid/React components as possible. My last.fm and github code, which require API clals to their respective parent services, could either have ran on the server or on the client.

- If I chose to run it on the server, it would only be a matter of having it sit in the frontmatter of an Astro component. The problem with this approach is that it would add between 1-3 seconds on navigation and load, which was unacceptable to me.

- If I ran it on the client, I would have loading states on the page, which isn't too appealing. It would also cause unnecessary client-side javascript where I could just do it on the server.

I decided to have it run on the client, but now I had two choices.

1. Deal with Vanilla javascript and have it compile in a client-side script with Astro
2. Use SolidJS for JSX and comfortable syntax, but accept I will ship unnecessary Javascript.

I chose the latter for now, but I might experiment with getting the former to work. A possible answer to the loading state is to have another component occupy the initial viewport so the loading elements are pushed further down, but I'm not sure what else I need to give away about me. Movies? TV shows?

## Blog

It wouldn't be an Astro website without a blog, right? A blog is one of the starter templates that Astro provides as well as is the official tutorial on their website. I wanted a blog, and now that I was using Astro, it only felt right to make one.

```javascript
const posts = (await Astro.glob('../pages/blog/*.{md,mdx}')).sort(
  (a, b) =>
    new Date(b.frontmatter.pubDate).valueOf() - new Date(a.frontmatter.pubDate).valueOf()
)
```

This provided code snippet from the template was all I really needed. Astro provides the global method which allows me to pull all the markdown from the pages folder, sort them by date, and then render them on the page. After that, it was easy as just writing some Markdown and stylign the layout.

## Conclusion

This was my first time building a website with Astro, and it felt very smooth and natural to transition to it from Next.js. I still love Next, but I also like Astro now. Astro recently hit its 1.0 release not too long ago, and I suggest everyone try using it.

Obligatory stack links:
1. [Astro](https://astro.build/)
2. [Tailwind](https://tailwindcss.com/)
3. [SolidJS](https://www.solidjs.com/)
4. [Mapbox](https://docs.mapbox.com/mapbox-gl-js/api/)
