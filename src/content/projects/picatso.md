---
layout: '../../layouts/ProjectPost.astro'
title: 'Picatso'
description: 'A full-stack web app that lets you create cat art with DALLE-2 and share them with the community.'
repository: 'https://github.com/wesngu28/picatso'
live: 'https://picatso.tech/'
techs: ['TypeScript', 'Next.js', 'Tailwind', 'Supabase', 'Auth0', 'TRPC']
heroImage: 'picatso'
heroImageAlt: 'Picatso'
content: 6
md: 'picatso'
hackathon: true
---

Picatso is a web app that allows you to generate picture of adjective cats doing verbs. You must be logged in to generate new feline friends, but when you are logged in, you can also view the cats produced by other users, and heart the ones you find cute or interesting. You can also view your own cats.

## Why

I decided to participate solo in the WhiskerHacks hackathon and needed a topic. While I am a dog person and dog owner, but I have to admit that cats are pretty cute. I've wanted to use some form of API from OpenAI, and I decided that this week's theme could be worked with generating some feline art.

## What I Learned
I built this project using the t3-stack. If you don't know what t3-app is, it is kind of like create-react-app, just designed for Next.js. You can do it too by running npm create t3-app@latest (I used pnpm). The specific parts I used were Next.js, Tailwind, and TRPC. t3 also comes pre-configured with Zod and React Query.

I used Cloudinary to host the generated images. To store meaningful data and the links to the images, I used Supabase's database. I let Auth0 handle the authentication layer. I used a .tech domain from domain.com, picatso.tech.

This was my first project using the t3-stack, and more specifically, TRPC. TRPC has really made me reanalyze my old way of setting up RESTFUL routes with Next, as the typesafety and autocompletion is very handy and makes my code feel more stable. I also set up a project with Auth0 for the first time, as well as used an OpenAI endpoint in DALL-E 2 for the first time.



## Stack

| Frontend    | Backend     | Libraries
| ----------- | ----------- | ----------- |
| React      | Supabase      | Auth0 |
| Next.js   |    TRPC     |  |
| Typescript   |         |  |
| Tailwind   |         |  |