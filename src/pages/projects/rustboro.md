---
layout: '../../layouts/ProjectPost.astro'
title: 'Rustboro'
description: 'This project allows users to view Pokemon and includes a challenge feature, where users choose the Pokemon with the higher value for a specified stat.'
repository: 'https://github.com/wesngu28/rustboro'
live: 'https://rustboro.vercel.app/'
techs: ['TypeScript', 'Svelte', 'Prisma', 'PostgreSQL', 'CockroachDB']
heroImage: 'pokemon'
heroImageAlt: 'Rustboro'
content: [true, 4]
md: 'rustboro'
---

This is a project that features a queryable Pokedex that allows you to view information about various Pokemon and their forms. Additionally, it implements a game in which two Pokemon and a stat are presented to you, and it is your job to pick the one that has the higher stat. It is actually a quite challenging game and may get you angry at Game Freak.

## Why

One of the projects that I made for CSE154 was the original Pokedex layer that this project was built off of. My first ever Pokemon game was Platinum (yeah yeah I'm young and there's a generational difference), and I loved the franchise. I thought it was only right to revisit my older project and give it some sprucing up.

Remaking this app was something that I wanted to do for a while, given that I made it when I barely knew Javascript and how the fetch api worked. I initially planned to only make a simple Smogon-like stat viewer, but thought why not just implement some form of user interactivity in the form of a stat picking game.

I also drew inspiration from Theo from Ping.gg's Roundestmon game, although I used completely different technologies than his implementation.

## What I Learned

This was my first time ever working with Prisma, which is an object relational mapper to make handling SQL and other databases safer more simple. The use of Prisma was combined with my first time using a cloud database, the one of choice being CockroachDB (which implements Postgresql). CockroachDB is a really cool database that is very resilient and durable, with great automatic horizontal scaling. Prisma made it really easy to interface with the underlying database and prevented me from having to write potentially dangerous raw SQL.

## Stack

| Frontend    | Backend     | Libraries
| ----------- | ----------- | ----------- |
| Typescript      | SvelteKit      | Prisma |
| Svelte   |    CockroachDB     | PokeAPI |
|          |         Node.js         |
