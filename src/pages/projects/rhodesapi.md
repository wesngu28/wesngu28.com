---
layout: '../../layouts/ProjectPost.astro'
title: 'RhodesAPI'
description: 'A RESTful API for Arknights that provides information about operators. The API also includes a documentation website built with Svelte.'
repository: 'https://github.com/wesngu28/rhodesapi'
techs: ['TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Svelte']
heroImage: 'rhodes'
heroImageAlt: 'UW quad'
heroImageAttr: Photo distributed under Creative Commons under this article https://com.uw.edu/post/uw-communication-spring-2021-graduation-celebration/
content: true
---

I created a RESTful API for Arknights that provides information about operators, including their combat details and skins. Not only does the API include information about operator stats and skins, but it also includes a recruitment system similar to the one in the game, allowing users to search for specific operator combinations based on their in-game roles. I also created a documentation website using Svelte to showcase the API.

## Why

After learning Javascript, I wanted to make a Discord bot using Discord.js (as seems natural nowadays). One thing that I wanted the bot to be able to do was display information about the operators in the game. However, there was no easily accessible public-facing API. While the game has wonderful resources on characters within the game, most of these were just websites. That problem led me to decide to learn how to create a REST api, for me to use as well as other people who like the game.

## What I Learned

This was one of the first projects I've made and one I've continued to work on. I initially started this by writing in Javascript, but eventually transitioned to Typescript as I wanted to learn it.  I learned how to web scrape with various libraries like Cheerio, Puppeteer/Playwright, before settling with node-html-parser. I also connected to a database for the first time, this being MongoDB. After noticing slow queries, I then brought in Redis.

I revisted the application after a few months when Heroku shut down its free service, and migrated it to a cool new node.js hosting PAAS called Cyclic.sh. I also made a documentation site for it around this time with SvelteKit.