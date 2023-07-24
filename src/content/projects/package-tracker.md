---
layout: '../../layouts/ProjectPost.astro'
title: 'Package Tracker'
description: 'Hackathon winner for Transport Hacks, a web app to track your packages across various carriers. My role was expansive, doing Firebase setup and large parts of the front-end.'
repository: 'https://github.com/Mistralton/Package-Tracker'
live: 'https://packagetracker.tech/'
techs: ['TypeScript', 'Mapbox', 'Next.js', 'CSS', 'Auth0', 'Firebase']
heroImage: 'packagetracker'
heroImageAlt: 'Package Tracker'
content: 4
md: 'package-tracker'
hackathon: true
---

Package Tracker is a project that aims to be a place of consolidation for all those shipping label tracking services. Now, you don't need to jot them down to track them across different carriers, you can just add them on Package Tracker and see them all in one spot.

## Why
Package Tracker was made as part of the TransportHacks hackathon, hosted by Major League Hacking, and won first overall. This was quite a difficult theme to plan for, since going into it my group was largely unfamiliar with the logisitics of transportation. At some point, one of us came up with this theme, and that was what was made.

I chose the stack, and the stack was Next.js (React) for the frontend, and Firebase for the backend, as well as other APIs like Mapbox to provide us with maps. Auth0 was utilized because it was a sponsor category (even though we forgot to enter under it). The reason I chose React and Firebase as a part of the stack was because another member of my group was strong in React, and we came into this hackathon wanting to win. Otherwise, I may have chosen Vue or Svelte to help him and myself learn more of those frameworks. Firebase offered a quick database solution, but I also considered Supabase and MongoDB.

## What I Learned
The main thing that I learned is that even with a smaller scope, a hackathon project is just hard. There are so many factors that can suddenly jump at you, and problems that would seem minor on a normal time scale get emphasized in a stressful and time-constrained environment.

If I had to build this again and with more time, I would go through the process of signing up officially with USPS's API, as well as finishing th FedEx and UPS integration. It would be better to get data officially from USPS than rely on something as feeble as web scraping.

## Stack

| Frontend    | Backend     | Libraries
| ----------- | ----------- | ----------- |
| Next.js      | Node.js       | Mapbox |
| React   |   Next.js      | Auth0 |
| Typescript  |    Firebase     |  |
|  |    |   |
