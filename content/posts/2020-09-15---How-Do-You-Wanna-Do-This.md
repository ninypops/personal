---
template: post
slug: how-do-you-wanna-do-this
draft: false
socialImage: /media/photo-1508830524289-0adcbe822b40.jpg
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
I was in futile pursuit of the perfect stack to build my new website but the truth is, there is no perfect stack. I figured that the most important thing about building your own website is to make it fun. There were many ways this could've go and I spent a handful of nights determining which road I would travel down. Choices were plenty but there was only one way to settle this if I wanted a website up and running before the end of 2020!

![Woman looking at her watch](/media/tumblr_oj6coboopr1uc2rq2o6_400.webp)

#### **So, what was it going to be?**

Now, the truth is that I had already (kind of) made up my mind. I wanted this website to be a playground to learn and experiment with React. *Why?* I've been using React for just over a year now and there were some knowledge gaps that I wanted to fill. I use this JS library every day at work but within the context of the product we're developing. I wanted to be able to build something from the ground up that offered a lot more liberties.

#### **The verdict.**

If you're reading this, you're looking at a website powered by [Netlify](https://www.netlify.com/) and [GatsbyJS](https://www.gatsbyjs.com/).

#### **My reasons why.**

I had briefly used Gatsby before and was satisfied with how quickly you can get something up and running with the framework.

> Gatsby.js is a static PWA (Progressive Web App) generator. You get code and data splitting out-of-the-box. Gatsby loads only the critical HTML, CSS, data, and JavaScript so your site loads as fast as possible. Once loaded, Gatsby prefetches resources for other pages so clicking around the site feels incredibly fast.

I also chose to go with a [Netlify CMS](https://www.netlifycms.org/) as I come from a background in [Wordpress](https://wordpress.org/) and enjoy the visual benefits of seeing my post previews before actually posting them. I knew Netlify CMS was going to be a lot more secure and lightweight than WP due to the [Jamstack](https://jamstack.org/) technology. And you already know the rest, I was super keen to use React in a more free and easy fashion, outside the obligations of work.

#### **The challenges:**

No matter what they tell you, it's very rare that there is a 'plug and play' solution to creating a website. This is often down to environment factors or lack of experience with a framework. At some point, you will likely have some unsolicited issue crop up and this is why good documentation is vital to a project. Open source is great for this because of it's inviting and collaborative nature.

*So, what do you do when the documentation isn't helpful or tailored to your particular issue?* Turn to the community.

There were a couple issues that cropped up when compiling. 

* Order of plugins in `gatsby-config.js`
* Customisation of the GraphQL schema

These issues were specific to the the starter-theme that I had picked out from [Gatsby's Starter Library](https://www.gatsbyjs.com/starters/) and luckily, there was some chatter about this in the repo. They weren't difficult to resolve and it didn't take long for me to finally have a website up and running! The rest was seamless. Netlify deployments work a treat and I'm really satisfied with the route I went down.

#### **Conclusions:**

My website speed is currently around 490 ms, out of the box.

So, now that I've got a fully functioning website. What happens next? Well, my hope is to continue to write posts about my experiences as a front-end developer, ad-hoc life-pieces and anything else I think is worthy of noting. It is my playground, after all.

![Woman smirking. She looks to be pleased with herself.](/media/tenor.gif)