---
layout: '../../layouts/BlogPost.astro'
title: 'Reflecting on CSE 373'
description: 'Reflection on the Data Structures and Algorithms class offered at UW Seattle.'
pubDate: '12 12 2022'
heroImage: '/blog/third-post/third-post.jpg'
heroImageAlt: 'UW quad'
heroImageAttr: Photo distributed under Creative Commons under this article https://com.uw.edu/post/uw-communication-spring-2021-graduation-celebration/
---

When I decided to take CSE 373, all I knew about it was very important to learning about the data structures and algorithms that you would need to be able to tackle most technical interviews. Going into the course, I was nervous about my ability to succeed in the course, because I last took a computer science course that pertained to data structures when I was a Junior doing Running Start, and that class almost made me pivot careers. This isn't to say that I didn't code since 2018/2019, I have learned a bit of web development and am in a tangentinally related major in data science, but needless to say, the class seemed daunting.

I took the class in Autumn 2022 with Professor Kevin Lin and had TAs Iris Zhou and Devika Dwivedi.

## Overarching Concepts

I think that the class can be broken down into 4 main themes.

1. Asymptotic Analysis

Asymptotic analysis primarily focuses on analyzing the runtime of an algorithm, focusing on the algorithmic efficiency given a large set of inputs. We were taught the idea of three notations, from theta which represented an upper bound, to big O notation (which is what most people think of), and omega which represented a lower bound. It is also important to consider the space complexity of the algorithms we write.

2. Affordance Analysis

Affordance analysis is the concept that the way that we define a certain structure or algorithm offers it certain affordances, and it is up to us to evaluate these affordances in critical ways through value-sensitive designs. These include foregrounding human values, considering pervasive uptake, and considering the stakeholders. I was unfamiliar with this term prior to the class, but after learning it it makes more sense and I think a lot of people do this subconciously without knowing it.

3. Abstract Data Types and their Implementations

Having data structures in the class, we learned a lot of new data structures and the abstract data types they were implemented from. Some of these abstract data types include lists, trees, sets, and maps, and the structures that we may have used to implement these included deques, binary heaps, hash sets, and graphs, respectively.

4. Sorting Algorithms

Algorithms is also in the class name, so we of course learned many algorithms, many of the sorting variety. These include the traditional sorts like insertion, selection, and merge sort, but we also learned sorts that pertained to other data types and structures, such as those for graphs like DFS, BFS, and Prim's algorithm.

## Retrospective Understanding

After this class, the way that I will be thinking about computer science and especially the decisions that I make regarding the code I write will change in the future. However, it is important that I am able to also apply this thinking retroactively to some of the projects that I made in the past. I will choose my [Observatory](https://github.com/wesngu28/observatory) project. Since this is a web app, there aren't many data structures used besides just arrays and maps. Choosing a specific project to focus on from a class I took would be difficult, since I took the equivalents to CSE 142 and 143 at Bellevue College in 2018-2019, almost 4 years ago at this point, and do not have nor remember any of the code I wrote for those classes.

This project is a web app that is powered by Next.js and is hosted on Vercel. The reason that I made this web app was so I could upload the dependency files for the languages that I use the most (Python and Javascript) and see what packages that I used that I have yet to star on GitHub. There are still some kinks that I need to work out (for example, the page refreshes on first file upload when it authenticates).

Looking back, my understanding of the choices I made in designing and implementing this application have changed and can be easily applied to the idea of affordance analysis. The Javascript ecosystem and web development space as a whole is a big mess and patchwork of competiting frameworks and solutions. This wild west meant that my decision to implement this in Next.js provides its own affordances and locked me into a specific tribe. One of the clear ones is that Next.js means that I was now coupled with React, which has its own affordances in being a heavier framework than something like Svelte but providing a large ecosystem and community. Some other decisions that I made when making this was using Tailwind for CSS and also using the Octokit library rather than just working directly with the Github API links.

In this course, we also learned about methods to analyze or compare a program. This would obviously fall under the asymptotic analysis part of the course (affordances were discussed above). In web development, asymptotic analysis would correlate with time to load the content. This is something that web developers worry about a lot, because a slow performing website means less clicks. However, prior to CSE373, I mainly considered the entire site as a package deal, and now am more concerned about the runtime of particular functions as well.

This course also taught me a lot about being able to critically think about the real-world impact of code and how it connects to the distribution of power, benefits, and harms in our society. For this website in particular, one decision that I made that I think is worth thinking about is my decision to only implement a dark color scheme for the site. This could impact those who may prefer light mode. One thing about the web development is that the idea of making accessible technology is very important, but I use a lot of divs which are not semantically useful, which is something that I should improve on.

## Personal Changes

This class has taught me a lot about computer science as a whole. As a Geography: Data Science major, I have not been afforded many of the theoretical concepts behind the implementation of code and how it runs in my curriculum (meaning none at all), so this class has definitely exposed me to a lot of new concepts. Coming in, I was expecting to be focused on learning how to solve LeetCode problems, but I am glad to have left knowing more about the field in general.

I think the part of the class that will stick will me the most is the asymptotic analysis. Before taking this class, I only knew of big O notation, and I barely even knew about it beyond for loops making a squared runtime. Now, I am able to think about optimizing the bounds of the functions that I implement, and am able to make more informed decisinos about the data types that I choose to implement.

I am most proud of being able to follow the course and do well. As I've said, it has been a long time since I even had to think about these concepts, let alone stuff like traversing a graph or the nodes of a tree. Being able to understand the concepts and solidify them is something that I am very happy about.

## End Notes

This is my last quarter at the University of Washington, and I am very glad that I managed to take this class before I graduate.

To be honest, I didn't know I was graduating this quarter when I planned my schedule since my major changed its requirements over the summer. If I could, I would have stayed a bit longer to take some of the advanced web development informatics courses and some of the classes that this class unlocks.

I would like to thank my TAs for being so patient and uploading the lecture notes online, because I kind of got lazy about going to section after getting the flu in the later half of the quarter. I wish them good luck in their own job hunts.

I am glad to have taken this class and know this will prepare me for finding a job in the future. I just hope that by then gpt4 and whatever DeepMind or OpenAI make won't steal all the jobs.

<style>
  h1,
  p,
  h2,
  li,
  ol {
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

  ol {
    list-style: decimal;
  }

  img {
    margin-right: auto;
    margin-left: auto;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
</style>
