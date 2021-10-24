---
template: post
slug: adding-dark-mode
draft: true
socialImage: /media/light_dark_mode_social.jpg
title: Adding dark mode to a GatsbyJS website
date: 2020-10-11T09:18:13.971Z
description: Here's how I approached adding alternate light/dark themes.
category: Technology
tags:
  - gatsbyjs
  - darkmode
  - accessibility
  - css
---
Contrary to popular beliefs, I'm not all that enthusiastic of dark modes in my IDE. Now, there's absolutely nothing wrong with a light theme, except for the fact that your colleague will never stop roasting you for it. Whenever I'm peer programming, the first thing that my colleague remarks on isn't my code - it's theme of my code editor. So, for my friends who consider themselves nocturnal or just prefer the visual prettiness of a dark mode, I'm happy to announce that my website now dons one.

> gif of website dark mode
>
> dark mode here, there, everywhere toystory meme

#### Built-in tools

What's encouraging is that there is increasingly more tools built into our software and browsers now that improve contrast and help to reduce eye strain. I've definitely benefited from using them. However, dark modes are no stranger to programmers. They've been around since the very beginning.

![The original IBM computer.](/media/ibm_computer.gif)

#### An accessibility-first approach

When planning the development of my website, I knew that I wanted to use it as a playground to improve my skills but furthermore, develop an accessibility-first approach. An obvious win for this would be to generate colour themes that were considerate of colour-blindness and eye strain.

A use case for this would be someone navigating to my website at 10 o'clock at night in a dimly-lit room.

> gif of someone eye strain at night

We've all been there and it's not fun...

#### The implementation

Here's how I went about getting a dark mode integrated into my website.