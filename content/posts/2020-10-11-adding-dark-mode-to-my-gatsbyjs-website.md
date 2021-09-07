---
template: post
title: Adding Dark Mode to my GatsbyJS Website
slug: adding-dark-mode
draft: true
date: 2020-10-11T09:18:13.971Z
description: I run you through how I added dark mode to my website.
category: Technology
tags:
  - gatsbyjs darkmode accessibility colour-blindness css
---
Contrary to popular beliefs, I'm not all that enthusiastic of dark modes in my IDE. I am of the few who prefers a light mode. Now, there's absolutely nothing wrong with a light mode except for the fact that your colleague will never stop roasting you for it. Whenever I'm peer programming, the first thing my colleague remarks on isn't my code but the theme of my code editor. So, for my friends who consider themselves nocturnal or just prefer the visual prettiness of a dark mode, I'm happy to announce that my website now dons one.

> gif of website dark mode
>
> dark mode here, there, everywhere toystory meme

#### Built-in tools

What's encouraging is that there is increasingly more tools built into our software and browsers now that improve contrast and help to reduce eye strain. I've definitely benefited from using them. However, dark modes are no stranger to programmers. They've been around since the very beginning.

> gif of old CLI

#### An accessibility-first approach

When planning the development of my website, I knew that I wanted to use it as a playground to improve my skills but furthermore, develop an accessibility-first approach. An obvious win for this would be to generate colour themes that were considerate of colour-blindness and eye strain.

A use case for this would be someone navigating to my website at 10 o'clock at night in a dimly-lit room.

> gif of someone eye strain at night

We've all been there and it's not fun...

#### The implementation

Here's how I went about getting a dark mode integrated into my website.