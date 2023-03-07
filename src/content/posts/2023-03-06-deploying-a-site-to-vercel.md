---
title: "Deploying a Frontend Stack to Vercel"
description: "I've heard that Vercel is the place to deploy frontend stacks, let's see how this goes."
pubDate: "Mar 6 2023"
---

## Overview

This ended up being way simpler than I thought.

- [Assumptions](#assumpetions)
- [Create an account with vercel](#creating-an-account-with-vercel)
- [Authorize and importing a repository](#authorizing-and-importing-a-repository)
- [Specify the root of your repository](#specify-the-root-of-your-repository)
- [Deploying](#deploying)
- [Update DNS records](#updating-dns-records)

## Assumptions

This post assumes the following

- You are using github, bitbucket, or gitlab
- You already have a domain name and have worked with nameservers


## Creating an account with vercel

Again straightforward, you have the option to create an account with email & password or to use a login from a version control provider such as GitLab, Bitbucket or GitHub. If you use the login for the provider you have your project in. It will make later steps easier as well.

Took about; 5 min

## Authorizing and Importing a repository

I'm not sure what happens if you attempt to authorize using a different VCS provider than you logged in with, but can't imagine it's much more than using the same one. 
Remembering what I had named my repository was the hardest part.

This also took about 5 minutes.

## Specify the root of your repository

This step was a little confusing, vercel auto-detected that the repository had an application built using Astro in it. I kept mine blank, but this may be useful when putting multiple applications in the same git project.

Once I got through the initial confusion, this took 20 seconds.

## Deploying

Dry run of deploying my application took `47s` then a subsequent deploy took `12s`, it's caching dependencies so subsequent builds should be very fast. 

## Updating DNS Records

Every service has it's tradeoffs; I've had my domain with Namecheap for years, so i thought i would transfer it and see how things go.

I prep my domain, get it unclocked and get the code to transfer it from `Namecheap` to `Vercel`. However `Vercel` would not let me transfer it unless I paid `$70` which im not going to do.

Thankfully I don't have to transfer my domain to `Vercel` to associate the vercel application with the domain.

Instead of clicking the `Transfer` button, click `Add`, enter the domain name in the field (In my case this was `kroneman.io`), and update the nameservers in your domain provider to match the ones from vercel.

