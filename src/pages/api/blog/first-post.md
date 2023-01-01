---
layout: '../../layouts/BlogPost.astro'
title: 'Looking Back'
description: 'Reminiscing on my path and journey through software development'
pubDate: '11 07 2022'
heroImage: '/blog/first-post/first-post.jpg'
heroImageAlt: 'Seattle skyline'
heroImageAttr: Photo by Zhifei Zhou on Unsplash
---

Hooray, first blog post! This won't be particularly informative, just a monologue. Below, I will recount the twists and turns I took to get to where I am today, as well as detail some projects I made prior to this blog.

# The First Half

My first experience with computer programming came in an intro to programming course during my freshman year at high school where I learned Scratch. I remember having interest in the course, but ultimately I wasn't really drawn in, but at the very least it was enough to get me to take AP Computer Science the following year.

AP Computer Science was quite tough for me. It was my teacher's first time teaching the course, and not to place blame elsewhere, but his knowledge of the content wasn't very strong, so I frequently had to rely on others in the class and documentation. With a focus on Java and object-oriented programming principles and algorithms, I found it dificult to stay motivated and concentrated and fell behind in the course. I spent a lot of time in the course just goofing around with a friend for most of each class.

The highlight of the course was being able to create a Pokemon fangame for my final project with RPG Maker XP, a game development program using Ruby with a powerful and well-developed library for Pokemon games called [Pokemon Essentials](https://github.com/Maruno17/pokemon-essentials). All of these factors combined meant that the project didn't really involve much coding, but nevertheless, I learned a lot about design principles, collaboration, and a bit of Ruby as well.

To round out this era of my programming career, I took the equivalent of UW's CS 142 and 143 at Bellevue College, called CS 210 and 211. I did pretty well in CS210, and my prior experience in AP Computer Science really helped. This carried over into the next course, but the pace was much more fast and difficult. I was holding a good grade until the last week, where I missed a few lectures, and these lectures ultimately comprised around 50% of the final.

# An Intermission

A combination of a lack of confidence, subpar teaching, and my own academic struggles with the material led me to back away from computer science and software development as a whole. Since a young age, I was interested in medicine/pharmacy, and this is part of the reason why when I applied to the University of Washington, I chose oceanography, as I had planned to flip this open major into a medical or pharmacy school as a post-graduate, which would render major choice moot.

With hindsight, I should've tried to apply into a closed program like engineering or computer science, and this is something I will always regret. Luckily, my halftime show would end when I took Info 101, Social Networking Technologies, in Winter 2021 (early 2021 - spring 2021). Weirdly enough, this feels like 10 years ago to me.

# Getting back into it

## Info 101

In Info 101, I was given my very first exposure to web development technologies. The course itself implemented a unique game-like model, where there were no hard deadlines except reaching a certain experience level at the end. Experience was accrued by completing various modules and assignments. The labs gave me my first ever look into HTML and CSS, the building blocks of the web (Javascript was not touched).

A lot of the course covered the big ideas in informatics and technology, with a pronounced emphasis on social media, and while this course didn't jump out at me as particularly interesting, I did keep the knowledge I attained from the class in my mind. Most importantly, this broke a 2.5 year break from computer programming that began after the conclusion of CS211 at Bellevue College.

## CSE 416

The next notable step I took with programming was CSE416 in Autumn 2021, an off-major CS course jointly offered with the Stats department, as a part of my major requirements. The name of the course was Introduction to Machine Learning, and as you would have guessed, this was an insane difficulty hike from my previous courses, and is probably the most difficult course I have taken at UW, but this was also an important class I took that reoriented myself towards thinking of software development as a career.

This class was crazy difficult and the first few weeks put me in a dark place. Some of the material we covered included regression, regularization, classification, clustering, principal component analysis, and an introduction to convolutional neural networks and deep learning. What made this even more difficult was that I wasn't just learning these foreign and difficult concepts for the first time, I was also wrangling with learning a whole new language, this being Python.

## First Project

After taking this course, I was feeling particularly inspired and made my first project ever, an amalgamation of open-source code I found on github and some code from the class. This project is [an edm prediction model](https://github.com/wesngu28/edm-prediction-model). I created a few playlists with over 1,000 songs from various EDM genres (this was way harder than it sounds) and then used the Spotipy API wrapper to extract audio features which were than fit and transformed to train a Random Forest model at around 78% test accuracy (edm genres have a lot of overlap, I think this is pretty high).

This was an insanely difficult first project for me. First, I had no idea how authentication worked and spent hours trying to authenticate myself with the Spotify API. Worst of all, I never got user input to work, so I was unable to setup the model to guess a song the user put in after making a picklee. However, I am still proud of this project. I was able to go from start to somewhat finish on a project for the first time ever, in a field that I found extremely difficult.

## Tkinter Projects

I also made two other projects as a result of taking this class, these being attributed to having learned Python.

- I was hyped and on a high of being able to authenticate with Spotify, so I used parts of the edm Spotify model and new code to write a Python script that told the user information about a song's features and a playlist's song content and then created an [interface for the script with Tkinter](https://github.com/wesngu28/SpotifyPlaylistInfo).

- I then took a step in a different direction with my next project, this one being a [GUI app with Tkinter](https://github.com/wesngu28/Twitter-Translator) (and pysimplegui) to translate a twitter's account non-english tweets into English. The use case for myself I envisioned was translating Hololive twitter accounts to English. This was honestly quite fun and made use of the Twint library (which I had to fork and make a combination of fixes to) as well as a library to translate the tweets to English after converting them to a dataframe.

Both of these projects used a graphical user interface, something that would push me into having a desire to develop applications and programs with a graphical medium.

# Web Development Spark

## CSE 154, GEOG 458

In Winter 2022, I was already registered for 10 credits and just needed one five credit course to round out the schedule. On a whim, I decided to go for CSE154, Web Programming, remembering my experiences in Info 101 and making two graphical user interface apps with Tkinter.

If CSE416 was the class that pulled me towards software development, CSE154 was the class that threw me into the ocean. The course itself taught a myriad of topics, with a focus on HTML, CSS, and vanilla Javascript fundamentals (up to async/await, Express.js, sql connections with sqlite), and also introduced us to networking. The project themselves also made decent portfolio pieces. This is my [project 3](https://github.com/wesngu28/pokemon-regional-randomizer).

While taking this class, I realized something. This is kind of fun. I kind of like being able to see what I am working on in real time and being able to interact with the applications through a visual medium like a website. It spoke to me much more than interfacing with a terminal and command line all day. Seeing all the CSS make my raw HTML pretty made my caveman brain happy and the Javascript interactivity put a cherry on top. This class confirmed to me that I wanted to do front-end or full-stack development.

Projects I worked on directly after this course:

- I created a web app that used the Youtube API and Holodex API to allow a user to favorite various virtual youtubers and track their activity. It stored all this information in local storage.
- I turned my Spotify tkinter app into a [web app](https://github.com/wesngu28/searchify-flask) with Flask.

Geography 458, Advanced Digital Geographies, was less influential for me; I took this after CSE 154 and was already locked in on front-end. However, I got a nice project and portfolio piece out of it, [Mapping Terrorism](https://github.com/wesngu28/mapping-terrorism). This web app was the first time I worked with the Mapbox library and its SDK for Javascript, and the first time I worked with scss/sass, and was also the first time I collaborated with a group on a git repository. My personal contributions to the web app were the html/css design of the website and the implementation of the map markers and popups, as well as the legend.

## Self-Teaching

With a pretty good grasp on Javascript, I decided it was time to make some real projects for topics I was interested in. I quickly came to the realization I would have to self-teach myself new technologies: just basic HTML, CSS, and Javascript was not enough.

The first project I decided to work on was an API for the mobile game Arknights. I went quite ambitious for my first project on this one and started out by implementing a web scraper which would hit a third-party site for information to store in a MongoDB database with a Redis cache. I then decided to learn Typescript for the express API while working on the project. Finally, I hosted a project for the first time and used Heroku (rip).

After this project, I went out of left field and decided to make a Discord bot to serve a community that I was a part of. I wanted to make a way to show information about Arknight operators, as well as other niche features. Coincidentally, I just made a project to deal with this exact issue. Online resources were a great help to me on this one, as the Discord.js community is massive and very helpful. I used Typescript with Discord.js to implement this, and when finished, actually decided to host it in a Docker container on my old laptop, eventually moving it to a dedicated home server. I also made a web landing page for the bot with vanilla HTML/CSS.

An internship in Clackamas for IT didn't stop my desire to make projects and learn new technologies. Immediately prior to leaving and during the start of my stay in Oregon, I self-taught myself React. I was honestly afraid of learning React, finding it really imtimidating and all the videos of X things you need to know before learning React didn't help. However, after learning it, I wish I would have learned it sooner. I used React to remake the Spotify app yet again, this time decoupling the frontend from Flask to React. You can find it [here](https://github.com/wesngu28/searchify).

The internship itself was for a wood company's information technology department and I learned a lot about physical networking, Microsoft Exchange, Active Directory, and managing servers. I was able to use this knowledge to set up my own home server using Debian, which I made a dashboard for in Svelte, which I self-taught myself for this mini-project.

With a few projects under my belt, I decided to go about and make my own personal website. While at my internship, I would look at other people's websites during downtime and got inspired to make my own. I took a lot of the initial inspiration for the website from others and one of my old TAs for CSE 154. In development, I decided to bring in two technologies I never used before, these being Next.js and Tailwind. Next.js was quite easy to learn and ended my desire to use create react app ever again. On Tailwind, the hate it gets for making HTML ugly is definitely unwarranted. If you haven't used it, you should try it. I'd trade the HTML for the ease of development any day. I had a lot of fun making my website and implementing various features like intersection observer, useSWR for incremental fetching, and a scrollytelling map, and using APIs such as the last.fm API, spotify API, and the github API.

Having a website to act as a portfolio for my projects led to a waterfall of new projects and self-teaching (chronology):

- I used Typescript and enquirer to write a [script](https://github.com/wesngu28/stargazing) that allowed you to enter your package.json or requirements.txt and star the repositories you have yet to star. This project was the first time I uploaded anything to NPM.

- I converted the above script to a web app with Next.js and Tailwind and hosted it on Vercel.
- My first real project with Svelte and SvelteKit. It is no secret the Russell Wilson trade was a bad deal for Denver, and as a Seahawks fan, I wanted to visualize how bad it was, so I made a [dashboard](https://github.com/wesngu28/lets-ride).
- After Svelte and React, I had a weird desire to learn another framework. I have played League since 2012, so I naturally gravitated to it when deciding to make another project. Using Riot's Data Dragon API, I made a simple champion lookup and skin browser called [Champion Viewer](https://github.com/wesngu28/simple-champion-viewer), using Vue and Nuxt for the first time. Honestly, this might be the last project I make with Vue, but I had a lot of fun nevertheless.

- After this, I went back to Svelte and SvelteKit to revamp my pokemon randomizer app that I made in CSE 154. My initial plan was just to show more information about the Pokemon, but I decided to go deeper and added a game in which you had to guess which two Pokemon had the highest stats. To facilitate this, I brought in a CockroachDB database with Prisma as an ORM to store all the Pokemon responses.
- Vercel released Next.js 13 shortly after I finished the above project, introducing support for React Server Components. To learn it, I decided to make a mini-project with Next 13, this being [Holoboard](https://github.com/wesngu28/holoboard), a substantial remake of my fourth CSE 154 project.

As of 11/2022, the last noteworthy change I am working on is a refactor of my personal website to use Astro and SolidJS, to increase its performance. I am planning to shed the dependence on React, React-dom, react-intersection-observer, useSWR, and react-mapbox-gl and use native solutions or lighter libraries.

# process.cwd()

It is now November 2022, just one month before I finish university with a bachelor's degree in Geography Data Science from the University of Washington. In the past, I was not happy with myself for having this major, but it has honestly been a great learning experience and I have gotten exposure to technologies and ideas I would have never had otherwise. Not being inundated in a computer science student's curriculum will definitely disadvantage me in the job market, but learning how to teach myself technologies is something I will not take for granted.

I am a cynical person and do not have much self-confidence. However, it would be plain and straight up sandbagging for me not to acknowledge how far I've gotten in less than two years. In a year, I learned Python, Javascript, HTML/CSS, and Typescript for languages, as well as a myriad of other technologies and frameworks for each language. I've chosen front-end and full-stack as my path, having been lost not a year prior.

Now, I am looking for an entry-level software developer role or front-end developer job, so I can work with the technology and things that I love.

<style>
  h1,
  p,
  h2,
  li {
    font-family: 'Lora', serif;
    margin: 1.25rem;
  }

  ul {
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
    margin-left: 5.5rem;
  }

  h1 {
    font-size: 2.5rem;
    line-height: 100%;
    margin-bottom: 30px;
    font-weight: 800;
  }

  h2 {
    font-size: 2rem;
    font-weight: 600;
    margin: 1rem;
    line-height: 100%;
  }

  p,
  li {
    font-size: 1.125rem;
    line-height: 200%;
    margin-bottom: 20px;
  }

  a {
    color: bisque;
  }

  a:hover {
    text-decoration: underline;
  }

  ul {
    list-style: circle;
  }

  img {
    margin-right: auto;
    margin-left: auto;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
</style>
