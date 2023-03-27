---
title: "Systems, Shortcuts, and The Motivation For Building a Chrome Extension"
description: "Developing a system and extension to manage tabs in chrome"
pubDate: "Mar 26 2023"
---

## Overview

- [Motivation](#motivation)
- [Pieces of the puzzle](#the-pieces-of-the-puzzle)
    - [A System](#a-system)
    - [A Runner](#a-runner)
    - [Shortcuts](#existing-browser-shortucts)
- [The Result](#the-result)

## Motivation

Tab management throughout a given day is a struggle. I have tabs that I always need open and refrence or work in often. Then there's links i click on or a variety of rabbit-holes i go down when trying to solve a problem. Before I know it, I can't see any of the titles.

![Lots of Tabs](/chrome-extension/lots-of-tabs.png)

Further, one of the goals I have is to do as much as possible using the keyboard and as little as possible with a mouse. If I can build reliable systes around keyboard shortcuts then I'll be able to navigate around my computer alot easier.

## The pieces of the puzzle

### A system

Sometimes the best way to solve a problem is to copy and paste it from another place. In my case, I have the same issues with tab management in code editors as I do with browser tabs, and have had to develop a system to manage it.

The resulting system goes as follows:

- Pin and organize tabs you need
- Don't pin too many tabs
- At a context switch close all unpinned tabs

### A Runner

A more recent development in software has been the concept of a `command pallete` or `runner`. Essentially it's a search box where every possible command in the current context is searchable and can be executed. Things like the macOS `spotlight`, [Alfred](https://www.alfredapp.com/) but they've started to show up as an expected feature in software. 

- Vscode has `cmd + shift + p`
- Intellij products have `cmd + shift + a`
- Figma has "quick actions" with `cmd + /`
- Google Sheets and other Google Office products have "search the menus" with `option + /`
- Office products have a "Tell me" button that can be opened with `alt + Q`

The premise of all of these is a convenient way to search a command instead of browsing for it in a given menu.
So why haven't browsers caught on? Thankfully for my use case they have an extension framework taht can be used.

### Existing functionality

- `cmd + shift + a` - search open tabs and re-open recelty closed tabs
- `cmd + w` - close current tab (system wide)
- `cmd + t` - open new tab
- `cmd + l` - highlight and select text in address bar
- `cmd + shift + }` - make tab one to the left active
- `cmd + shift + {` - make tab one to the right active
- `cmd + shift + c` - open devtools and select element on the page
- `cmd + option + j` - open devtools and show console
- `cmd + 1` - select first tab
- `cmd + 2` - selected second tab
- `cmd + (3..9)` select tabs 3-9
- `cmd + 0` - select last tab
- `cmd + ,` - open preferences / settings (system wide)

### Functionality to build

The missing pieces to realise the system above in the browser include

- Command search functionality
- Pinning/unpinning
- Moving a tab left or right, start or end
- Closing all unpinned tabs
- Closing all tabs
- Mapping shortcuts to the most important pieces

## The result

A chrome extension called [Operator extension](https://chrome.google.com/webstore/detail/operator/jdmngaaglkkhkfegaopojolefpnikcpg)

Once installed, open the command pallete using `cntrl + space`. Search for a command and hit enter to execute a command.

By default four shortcuts are assigned.

- `ctrl + space` to show the command runner
- `cmd + shift + x` to pin/unpin the current tab
- `ctrl + shift + ←` to move currrent tab left
- `ctrl + shift + →` to move currrent tab right

The way this allows me to easily use my tab management system is.

1. I pin any tabs I know I need to keep open or are central to my work `cmd + shift + x`
2. I organize pinned tabs using `ctrl + shift + left & right arrows`
3. At a context switch I open to search for a command `ctrl + space`
4. Search for `close all ` and it will auto-complete to `close all unpinned tabs` and hit enter

At this point, [Try for yourself](https://chrome.google.com/webstore/detail/operator/jdmngaaglkkhkfegaopojolefpnikcpg) and if you have any feedback, open an issue on [github](https://github.com/rs-lkroneman/operator-extension/issues).

Stay tuned to learn how it's built.