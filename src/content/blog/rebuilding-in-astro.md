---
title: "Building a personal site with Astro"
description: "First impressions of Astro mixed with React"
pubDate: "Mar 4 2023"
---

## Overview

- [Goals](#goals)
- [Geting up and Running](#getting-up-and-running)
- [First Frustration](#the-first-frustration-using-astro-context-in-a-react-component)

## Goals

- Keep design simple
- Focus on the blogging experience
- Use storybook to build out components
- Find a balance between writing Astro components and React components

## Getting up and Running

- Mostly painless getting up and running
- Used the blog template to startup
- Installed storybook and vitest to be able to test react components in astro
- Unfortunately vite for astro and webpack for storybook

## The first frustration: Using astro context in a react component

I understand why this doesnt work but part of me feels like it should be possible to hook into astro context from a component.

For example, I want to convert `HeaderLink.astro` into a react component.

```astro
---
import type { HTMLAttributes } from 'astro/types';

type Props = HTMLAttributes<'a'>;

const { href, class: className, ...props } = Astro.props;

const { pathname } = Astro.url;
const isActive = href === pathname || href === pathname.replace(/\/$/, '');
---

<a href={href} class:list={[className, { active: isActive }]} {...props}>
	<slot />
</a>
<style>
	a {
		display: inline-block;
		text-decoration: none;
	}
	a.active {
		font-weight: bolder;
		text-decoration: underline;
	}
</style>
```

The challenge that i'm having with this is; that if I did convert it, I would have to find a way to pass along a reference to the current `pathName` to the react component.

```ts
const { pathname } = Astro.url;
const isActive = href === pathname || href === pathname.replace(/\/$/, '');
```

I don't see a way to pull this into react component. So I would have to "Prop Drill" from an astro template, into the `Header` component and from there passing it along into the `HeaderLink`.

Looking at the [astro docs](https://docs.astro.build/en/core-concepts/framework-components/#can-i-use-astro-components-inside-my-framework-components) confirms that once you're in a specific framework you won't have conext of the astro object, which is probably for the best.