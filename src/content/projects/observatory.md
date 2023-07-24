---
layout: '../../layouts/ProjectPost.astro'
title: 'Observatory'
description: 'Web app that helps you manage GitHub stars for JS and Python projects, showing you a list of repositories that you have yet to star.'
repository: 'https://github.com/wesngu28/observatory'
techs: ['TypeScript', 'Node.js', 'Tailwind', 'React', 'Next.js']
live: 'https://observatories.vercel.app/'
heroImage: 'observatory'
heroImageAlt: 'Observatory from unsplash'
content: 8
md: 'observatory'
---

This is a web app that allows you to login through Github and feed it a requirements.txt (Python) or package.json (Javascript) file. The app will then parse the file and query the Github API on your behalf, and return you a list of repositories you have yet to star, where you are then able to star each repository.

## Why

When I finish a project, I like to go through my dependencies and star the ones that played a pivotal role in development. This manual process got annoying, so I looked into the Github API to see if there was a way for me to just automate or easily see what I have yet to star, and out of that searching, I made a command line script called Stargazing that did just that. Observatory was born out of stargazing as a web interface.

## What I Learned

I learned how to interact with the Octokit API. Something that I really got stuck on while developing was the passing of cookies to potentially store the tokens provided from the Github API in a place at least more secure than local storage. I learned the purpose of the http cookie and how to store and pass it along. Although still vulnerable, http cookies are more secure than other alternatives like session or local storage.

I also used useContext for the first time. It was a bit unnecessary but I now understand more of how it works.

There are still some kinks that I need to work out (for example, the page refreshes on first file upload when it authenticates).

## Stack

| Frontend    | Backend     | Libraries
| ----------- | ----------- | ----------- |
| Next.js      | Node.js       | Octokit |
| React   |   Next.js      |  |
| Typescript  |         |  |
| Tailwind |    |   |
