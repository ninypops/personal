---
template: post
title: How to build a simple blog using Fetch API and React Hooks
slug: simple-blog-with-fetch-api
draft: true
# socialImage: /media/promises-from-my-youth.jpg
date: 2022-03-26T11:30:57.409Z
description: Quick set-up and introduction to using React Hooks to retrieve blog
  data via Fetch API.
category: technology
---
It feels like everyone is talking about React Hooks right now. If you're like me and (intend to) use React in a professional setting, it's probably a good idea to at least become familiar with this new type of function.

So, why React Hooks? Well, React Hooks _literally_ hook into react state and life-cycle features from functional components. Although, React provides it's own built-in hooks including:
 * useState
 * useEffect
 * useReducer
 * useRef
 * useCallback
 * useContext
 * useMemo
 
Plus, you can even create your own custom hooks! Pretty cool, _right?_

Don't worry we'll get into custom hooks another day. For now, let's just make use of useEffect and do a simple fetch from an API to retrieve and display blog data.

#### **Getting started:**