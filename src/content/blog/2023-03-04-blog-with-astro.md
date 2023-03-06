---
title: "A Blog Powered by Astro"
description: "First impressions of Astro mixed with React"
pubDate: "Mar 4 2023"
---

## Overview

- [Motivation](#motivation)
- [Goals](#goals)
	- [Starting with content](#starting-with-content)

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

**markdown**

Markdown is essentially a convenient way to write content. It's a happy medium between writing html and editing content in a cms.

Headings for example are written using a `#` so `# Heading` is equivalent to `<h1>Heading</h1>` and `## Heading 2` is equivalent to `<h2>Heading 2</h2>`.

To learn more about some of the available syntax of markdown see the [Markdown Cheatsheet](https://www.markdownguide.org/cheat-sheet/)

**mdx**

So why not just use markdown by itself?

Markdown is great for simple content, but has some challenges when trying to mix rich content like a `count down` timer into the middle of an article.

Mdx brands itself as "markdown for the component era" allowing you to import and render "React, Vue, Svelte" or other components into markdown.

To learn more about mdx see [the mdx documentation](https://mdxjs.com/table-of-components/)
