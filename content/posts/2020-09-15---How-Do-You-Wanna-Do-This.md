---
template: post
slug: how-do-you-wanna-do-this
draft: false
socialImage: /media/how-do-you-wanna-do-this.jpg
title: How Do You Wanna Do This?
date: 2020-09-15T20:41:36.351Z
description: Creating a new website presented the opportunity to explore new
  frameworks but I really wasn't ready for just how many there were to choose
  from.
category: Technology
tags:
  - technology
  - gatsby
  - development
---
I was in futile pursuit of the perfect stack to build my new website but the truth is, <strong><em>there is no perfect stack</em></strong>. I figured that the most important thing about building my own website is to <strong>make it fun</strong>. There were many ways this could've gone and I spent a handful of nights determining which road I would travel down. Choices were plenty but there was only one way to settle this if I wanted a website up and running before the end of 2020!

<!-- ![Woman looking at her watch](/media/tumblr_oj6coboopr1uc2rq2o6_400.webp) -->

#### **The verdict.**

If you're reading this, you're looking at a website powered by [Netlify](https://www.netlify.com/) and [GatsbyJS](https://www.gatsbyjs.com/).

#### **My reasons why.**

I had briefly used Gatsby before and was satisfied with how quickly you can get something up and running with the framework.

> Gatsby.js is a static PWA (Progressive Web App) generator. You get code and data splitting out-of-the-box. Gatsby loads only the critical HTML, CSS, data, and JavaScript so your site loads as fast as possible. Once loaded, Gatsby prefetches resources for other pages so clicking around the site feels incredibly fast.

Gatsby is based off ReactJS, a framework I am already familiar with so this was already a huge advantage to me. I ended up choosing a "starter theme" to fast-track creating stylesheets and scaffolding. This is where <a target="_blank" ref="noopened noreferrer" href="https://github.com/alxshelepenok/gatsby-starter-lumen">Lumen</a> comes in. I've always been design-orientated and the simplicity of Lumen's design really stood out to me but the biggest draw was that it was orientated around blog content. I knew that writing blog posts was something I wanted to do and what better way to motivate me than having it be the main spectical of the website.

Lumen partners React with GraphQL through Axios to essentially reserve the need for REST APIs and instead scaffold the data with React. This means I get to spend more time playing around with React.

Not only that but it also came packaged with [Netlify CMS](https://www.netlifycms.org/) which meant that I had a bit of flexibility around creating and publishing posts. The CMS is very beginner-friendly, offering a modern and minimal interface and allowing instantaneous deployments.

#### **The challenges:**

No matter what they tell you, it's very rare that there is a 'plug and play' solution to creating a website. This is often down to environment factors or lack of experience with a framework. At some point, you will likely have some unsolicited issue crop up and this is why good documentation is vital to a project. Open source is great for this because of it's inviting and collaborative nature.

So, what do you do when the documentation isn't tailored to your particular issue? Well, I turned to the community.

There were a couple issues that cropped up when compiling this repository:

* Order of plugins in `gatsby-config.js`
* Customisation of the GraphQL schema

These issues were specific to Lumen and quite obviously pedantic. Luckily, there was some chatter about this on GitHub as others were experiencing something similar and so it didn't take long to resolve.

I left it to Netlify to handle the live deployment and here you have it, my website is finally out into the wild.

#### **Conclusions:**

So, now that I've got a fully functioning website. What happens next? Well, there is still a lot to improve here. One of the first tasks is to add a dark/light theme to my website. Pop back soon for a breakdown of how I approached it!

<!-- ![Woman smirking. She looks to be pleased with herself.](/media/tenor.gif) -->