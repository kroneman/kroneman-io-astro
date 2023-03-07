---
title: "Building a Blog: Reducing scope and delivering value sooner"
description: "I'm applying a kanban and product oriented approach to shipping value quickly and finishing a personal project that delivers some value. Zero to production in two days."
pubDate: "Mar 4 2023"
updatedDate: "Mar 6 2023"
---

## Overview

- [Motivation](#motivation)
- [Goals](#goals)
	- [Starting with content](#starting-with-content)
	- [Building the simplest thing](#building-the-simplest-thing-that-accomplishes-the-goal)
	- [Staying Focused](#staying-focused-on-getting-something-out-the-door-even-if-it-isnt-perfect)

## Motivation

Personal sites have a way of growing in scope and never getting finished. You typically start building one with delusions of grandeur and focus on the technology side without any intension of developing content and utilizing the site. You always learn a lot along the way, but end up with a half-finished product that never gets used.

There's a principle in Kanban that goes along the lines of **_"Favor finishing over Starting"_**. Futher in product development, we commonly cut scope and complexity to get something viable out the door and prove that there is some value.

## Goals

- Start with content
- Build the simplest thing that accomplishes the goal
- Stay focused on getting something out the door, even if isn't perfect

### Starting with content

This one is pretty straightfoward. By starting with writing one or more articles that can be published; it keeps my focus on the form and style of the articles vs. other parts of the site which may not be as important. This also excercises what I percieve I'll be doing once the site has been published. So if I find myself not enjoying this piece... then it might not be worth it.

One of the features that was a must-have for astro, was to write content using `markdown` and `mdx`.

#### markdown

Markdown is essentially a convenient way to write content. It's a happy medium between writing html and editing content in a cms.

Headings for example are written using a `#` so `# Heading` is equivalent to `<h1>Heading</h1>` and `## Heading 2` is equivalent to `<h2>Heading 2</h2>`.

To learn more about some of the available syntax of markdown see the [Markdown Cheatsheet](https://www.markdownguide.org/cheat-sheet/)

#### mdx

So why not just use markdown by itself?

Markdown is great for simple content, but has some challenges when trying to mix rich content like a `count down` timer into the middle of an article.

Mdx brands itself as "markdown for the component era" allowing you to import and render "React, Vue, Svelte" or other components into markdown.

To learn more about mdx see [the mdx documentation](https://mdxjs.com/table-of-components/)

### Building the simplest thing that accomplishes the goal

#### So a definition of minimial scope would include

- Homepage, simplified to just be an introduction
- Blog Page, that shows blog posts in reverse chronological order
- Blog Article Page, should probably write a couple of these.
- Hosting through vercel
- Release pipeline using github actions
- Links to social

#### And Exclude

- Comments on articles (maybe one day)
- To be filled out as I get side-tracked
- Projects (to be included in a later iteration)
- Responsive Styles (i'll follow up with responsive styles)

### Staying focused on getting something out the door, even if it isn't perfect

Hereby the first article, hopefully a piece of value that encourages you to built your first blog and to keep it simple.

I hope you get to read this article before I've added too much functionality to the site or go back in time and check out the git repository to run the version this article was first published on.

## Result

Reducing scope and leveraging the progress projects like: `astro`, `next`, and `mdx`; as well as companies like: `github` and `vercel`; let you build out a great blogging site in roughly **2 days**.

Given that:

- You lower your expectations
- You Stay focused on the goal
- Go for a truly minimal experience

