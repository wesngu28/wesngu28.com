---
layout: '../../layouts/ProjectPost.astro'
title: 'Sideroca'
description: 'Sideroca (Simplifying Interactions and Dynamic Enhancements for Remarkable Outcomes in Card Acquisition) is a full-stack web application for NationStates trading cards.'
repository: 'https://github.com/wesngu28/wesngu28.com'
live: 'https://wesngu28.com/'
techs: ['TypeScript', 'Next.js', 'Tailwind', 'FastAPI', 'Postgres', 'Docker']
heroImage: 'sideroca'
heroImageAlt: 'Legendary cards in the North Pacific'
content: 3
md: 'sideroca'
---

Sideroca, or Simplifying Interactions and Dynamic Enhancements for Remarkable Outcomes in Card Acquisition, is a full-stack web application that allows users to query over 500,000 cards in the NationStates trading card game for various desired parameters.

This just a brain dump of some thoughts I had in post-production.

## Why

NationStates is a political simulator, where you are put in charge of a fictional country. The main gameplay loop revolves aroudn answering issues, with each issue having an affect on your national stats. I have been playing the game since 2012, and in 2018 they released a gag trading card game for April Fools, and it really took off with the community, as it has lasted until today. What really enabled it to sustain itself was the developer resources made available, through a large dump of the trading card data in JSON format provided by the technical team.

I took a break in 2019, and when I came back, it was during the post-r3n card queries time. Who is r3n and what are card queries? I don't even know for sure, they came into existence after my break and ceased to exist after I returned, but from what I can glean, R3n was a talented scripter and programmer who architected a powerful api that allowed users to query against all the cards in the game. When he stepped away at the end of 2022, all of his services continued to operate for a while, but over time, they gradually declined and eventually stopped.

From RhodesAPI to ClosureTS, I always want to make projects that can be useful to people. I saw an opportunity to challenge myself and contribute to the NationStates community in a new way. This led me to embark on the creation of my own card queries, one that might not ever replicate or dream to match r3n's card queries, but will strive to provide similar functionalities, with a friendly interface.

## Development

### Initial Steps

Initially, I leveraged a backend API created by community member UPC to start building an earlier version of Sideroca, focusing solely on the frontend interface. However, I soon realized that I desired more control and accessibility over the data it offered, prompting me to explore alternatives for hosting my own backend architecture and version of the trading card data.

After careful consideration, I chose to work with FastAPI, a framework that offered powerful capabilities and felt familiar to other frameworks I had used. Despite encountering challenges with SQLAlchemy due to my previous experience with different ORMs and raw SQL, I persisted and utilized SQLite as the database while architecting a compatible schema. My primary focus shifted to creating a flexible and robust querying system to give users the freedom to search for cards based on various attributes.

### Challenges in Creating a Powerful User Interface:

One of the most challenging aspects was ensuring that the user interface could match the underlying API's power. Designing an intuitive and responsive UI that allowed users to utilize complex querying options, including negation and additional parameters, was a certified PITA. Making sure that it looked good while also being responsive was something that cost me a lot of time in development.

### Migration to PostgreSQL and Hosting Challenges:

Migrating from SQLite to PostgreSQL in a production environment was no small feat. While SQLite had served well during development, the transition to PostgreSQL brought its own set of challenges. Ensuring a smooth and error-free migration while maintaining data integrity was critical. It involved carefully scripting the migration process and thoroughly testing it in a staging environment before applying it to the live server. The amount of errors I had with various queries, especially with JSONB data, is something that I would wish on my worst enemy.

## A Cloud Host

Initially, I opted to host Sideroca on Railway, an infrastructure platform built on top of AWS meant to provide a great user experience and allow users to focus on development with ease of use and seamless integration. I have been using it under the Hobby Plan to host RhodesAPI for awhile now, so I knew that it was a great service. However, this quickly turned into dismay when I realized that the frontend of Next.js, was consuming an excessive amount of RAM, which was exacerbated by Railway's lack of memory limits. I actually initially thought it was due to this [github issue](https://github.com/vercel/next.js/issues/49929), but reverting to an older build made me realize that the lack of a limit let Next.js just guzzle as much memory as it wanted. This was not feasible - my wallet is not infinite.

Realizing that I needed a more cost-effective solution, I decided to set up a Virtual Private Server (VPS). While this offered more control and flexibility, it was an arduous process. I am a horrendous decision maker, and can spend weeks going back and forth on different options. This time didn't take so long (mainly because Hetzner offered such a good deal). Configuring the VPS involved installing and securing various components, ensuring a stable and secure environment for Sideroca. To streamline development and deployment, I implemented GitHub Actions, automating tasks like code linting, testing, and deployment.

Additionally, I wanted to automate certain tasks to streamline the development and deployment workflow, as I quickly realized sshing into the VPS to rebuild the docker containers was going to shorten my lifespan. This led me to set up GitHub Actions, which proved to be another challenging endeavor. Writing and debugging the workflows to automate tasks like code linting, testing, and deployment required careful attention to detail.

## What I Learned

The journey of setting up and maintaining Sideroca on a VPS and GitHub Actions was a trial by fire. However, the experience taught me valuable lessons in server administration, deployment automation, and the importance of cost optimization in cloud hosting. FastAPI was also a tool that I made use of for the first time. I actually quite like it, it feels very similar to Fastify or Express, and has great documentation.

These experiences have strengthened my technical skills and confidence, empowering me to tackle future projects with greater expertise.

## Conclusion

This article was quite sproadic, disparate, annd not well-flowing, and that comes from me not being a very coherent writer. If you read through all of it, I appreciate your patience in reading this disjointed post. Sideroca represents my attempt at contributing to the NationStates community in a meaningful way.

![Comments](/hardhitter.png)

It is comments like these that keep me going.


## Stack

| Frontend    | Backend     | Architecture
| ----------- | ----------- | ----------- |
| React      | FastAPI       | Docker |
| Next.js   |    PostgreSQL     | GitHub Actions |
| Tailwind  |    Redis     | Hetzner |
| Typescript  |    Python     |  |
| Shadcn/ui  |         |  |