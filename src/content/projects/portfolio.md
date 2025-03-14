---
title: 'Personal Website'
description: 'I built this portfolio/website using Astro, SolidJS, and Tailwind. This project helped me improve my web development skills.'
repository: 'https://github.com/wesngu28/wesngu28.com'
live: 'https://wesngu28.com/'
techs: ['TypeScript', 'Tailwind', 'Astro', 'SolidJS', 'Mapbox']
heroImage: 'personal-web'
heroImageAlt: 'Seattle'
content: 1
md: 'portfolio'
---

Over the summer, while at my internship, I wanted to work on a portfolio website to showcase my skills. I poured much time into researching options and getting inspiration, before finally deciding to start working on it, choosing Next.js and Tailwind as my main stack. Since then, it evolved and changed with me as I've improved as a developer, and is currently going to the moon with Astro.

## Why

I feel like that as someone who wants to get into web development, I should have a half-decent portfolio. I spent a lot of time researching whether or not a framework should be used, whether it was even worth doing, before deciding to pull the trigger and start development. I chose Next.js, as I wanted to showcase that I knew how to use React.

The about page contains some extra information about me that most other websites don't include, but I mainly wanted to experiment with some simple animations, adding a slideshow, and hitting the last.fm API. The map page is a scrollytelling map implemented with Solid.js that is not something I've really seen on any other websites (probably because it is so not performant), but I think it is unique and quite cool.

## Changes Over Time

At the end of October, I began to start working on remaking the project in Astro, a new Javascript meta framework that aims to ship as little Javascript as possible through a concept called islands architecture. After around a week, it was ready, and I sunseted the Next.js version in favor of Astro. Around this time, I also made the decision to replace React with Solid, cause why not? I'm already replacing Next.js, might as well add a bit of spice. The blog was also implemented around this time, making use of Astro features to implement it.

The last development flurry is recent, as I have set out to redesign the website to make it more visually appealing. With this, I am adding features like clicking on projects to open a page about the project, and doing general fixes on components and layout.

## What I Learned

This was the first project I ever used Tailwind on, and I have to say that the tradeoff of ugly HTML is well-worth the ease of development and how much simpler it makes CSS.

The real pain point and learning experience from this was the conversion between Next.js and Astro. It was very difficult to swap frameworks due to the different ways they approach the idea of server-side rendering. Obviously, learning Astro and SolidJS came with that, but I am now aware how painful it might be to transfer even larger codebases like the legacy code at large companies.

The scrollytelling map was also a huge pain to create, because I initially used a library combination of react-mapbox-gl and react-intersection-observer, neither of which had any sort of guide on how to do a scrollytelling map. Through creating this on my own, I learned a lot more of how intersection observer works, and transitioning it back to a more vanilla state with Astro was made dramatically easier.

## Stack

| Frontend    | Backend     | Libraries
| ----------- | ----------- | ----------- |
| Astro      | Astro       | Mapbox |
| Tailwind   |    Node.js     |  |
| Solid.js  |         |  |
| Typescript  |         |  |
