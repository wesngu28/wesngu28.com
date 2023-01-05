---
layout: '../../layouts/ProjectPost.astro'
title: 'Closure'
description: 'Discord bot with Arknights and Youtube features. This bot has been successfully implemented in a Discord community with over 300 members.'
repository: 'https://github.com/wesngu28/rhodesapi'
techs: ['TypeScript', 'Node.js', 'Discord.js', 'MongoDB', 'Docker']
heroImage: 'closure'
heroImageAlt: 'Closure'
content: [true, 7]
---

A multifunctional discord bot offering simple utilities and commands like Arknights operator quick information and youtuber live status. I made this to complement RhodesAPI and was my second from start to end personal project. The bot is currently hosted on hmy home server inside of a Docker container.

## Why

I actually do not remember the real reason that I wanted to make a Discord bot. One thing that I know was that I wanted to replace the function Pingcord served in a community, as well as try and remove the need to have some other bots. After finishing it, the bot definitely could replace Pingcord because it is able to essentially match the closed source bot in terms of timeliness of announcement, but is not as consistent.

It began in Javascript and was converted to Typescript. I initially used Puppeteer before transitioning to Playwright for the smaller package size and newer features, but using a browser automation tool to scrape was very heavy on memory and caused execution times to increase, which made me scrap it and just use node-html-parser to scrape the pages directly. This let me limit the use of the youtube API and is also quite performant.

## What I Learned

This was one of the first projects I've made and one I've continued to work on. I initially started this by writing in Javascript, but eventually transitioned to Typescript as I wanted to learn it.  I learned how to web scrape with various libraries like Cheerio, Puppeteer/Playwright, before settling with node-html-parser. I also connected to a database for the first time, this being MongoDB. After noticing slow queries, I then brought in Redis.

I learned about how strange the Youtube frontend organization is, with weirdly named custom components with extremely long names. I guess when they say naming things is the hardest part of the frontend, they aren't lying.

I also learned about the process of self-hosting a Discord bot inside of Docker, and a whole lot about Docker in general.

## Stack

| Frontend    | Backend     | Libraries
| ----------- | ----------- | ----------- |
| HTML      | Node.js       | Discord.js |
| CSS   | MongoDB        | node-html-parser |
|   | Redis        |  |
|   | Docker       |  |
