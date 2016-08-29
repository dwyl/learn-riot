# learn riot.js

> "Riot is an incredibly fast, powerful yet tiny client side (MV*)
library for building large scale web applications."

[![Build Status](https://travis-ci.org/dwyl/learn-riot.svg)](https://travis-ci.org/dwyl/learn-riot)
[![npm](https://img.shields.io/npm/v/riot.svg?maxAge=2592000)](http://riotjs.com/)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/learn-riot/issues)

## Table of Contents

- [Why](#why)
- [What](#what)
 -  [Can We Use *"Native" Web Components?*](#can-we-use-native-web-components)
- [How](#how)
- [FAQ](#faq)
- [Resources](#resources)
 - [Official links](#official-links)
 - [Introductory Tutorial](#introductory-tutorial)
 - [Examples](#examples)
 - [Screencasts](#screencasts)

## Why?

We need a way of organising the pieces of our web applications
into discrete *components* that can be developed/tested independently
and composed into a fast User Interface/Experience.

## What?

![riot header](https://cloud.githubusercontent.com/assets/194400/10937086/7c62bab4-82e8-11e5-89e8-5e41f7864734.png)

### Can We Use *Native Web Components* ?

Web Components are *going* to revolutionize the web. *Eventually*.  
 *Sadly*, there is not yet widespread adoption for the Web Component spec.

 Even though Google Chrome supports all the pieces of Web Components and has over
 [***50% Market Share***](http://www.sitepoint.com/browser-trends-august-2015-chrome-exceeds-50),
 Internet Explorer and Safari are still lagging behind: http://caniuse.com/#search=components

The current *status* is "*working draft*" see: http://www.w3.org/standards/techs/components#w3c_all  
which means the *finer details* are *still being debated* by the W3C,
which means we might sill have a few months (_years_?) to wait...

So, while we [*wait*](http://www.2ality.com/2015/08/web-component-status.html)
for Internet Explorer to catch up, we are using [**Riot**](http://riotjs.com) because its *much* smaller and
thus *faster-to-learn* than *everything* else out there...

A quick introduction to the [Riot.js](https://muut.com/riotjs) client side MVP library for people who want to build minimalist apps.

> _Imagine **React went on a diet** and got **better syntax**, **that's Riot.js**_.

## *How*?

On the Riot.js website, visit the "_Guide_" page: http://riotjs.com/guide/



### Videos

Searching YouTub for riot.js https://www.youtube.com/results?search_query=riot.js there are _thousands_ of results. If you are _totally new_ to Riot and want a "Why Riot" overview,

### *FAQ*?

If you are *wondering* ***how*** you can `require()` a `.tag` file
( *that is not `.js` or `.json` -
  the standard files you require in node.js* )
The answer is *simple*: when you `require('riot')`
the `riot` *module* ***extends*** node's native `require` method
(*this is* ***JavaScirpt*** *after all, everything is accessible/mutable*)
which means that `require()` *understands* how to load a `.tag` file.

> More FAQ: http://riotjs.com/faq/

## *Resources*

### Official links

- Site: http://riotjs.com/
- GitHub repo: https://github.com/riot/riot
- Muut Manifesto (the makers of riot.js): https://muut.com/manifesto

### Introductory Tutorial
- http://riotjs.com/guide/
+ Cheat Sheet: http://martinmuzatko.github.io/riot-cheatsheet/ (basic examples)

### Examples

- Riot ToDoMVC: https://github.com/3den/riotjs-todomvc

### Screencasts

- [RiotJS - Introdution Part #1](https://www.youtube.com/watch?v=ZHmJ_gcZ8Fw) by [@andrewdelprete](https://github.com/andrewdelprete) **- Youtube** `[03:29]`
- [RiotJS - Event Handlers and Rendering Part #2](https://www.youtube.com/watch?v=FPmAZD9QRQw) by [@andrewdelprete](https://github.com/andrewdelprete) **- Youtube** `[03:10]`
- [RiotJS - Looping with each attribute Part #3](https://www.youtube.com/watch?v=VDKenvP5TyM) by [@andrewdelprete](https://github.com/andrewdelprete) **- Youtube** `[02:19]`
- [RiotJS - Nested Tags / Inheritance Part #4](https://www.youtube.com/watch?v=DzyaPZCrQ-A) by [@andrewdelprete](https://github.com/andrewdelprete) **- Youtube** `[03:38]`
- [RiotJS - Expressions and Classes - Part #5](https://www.youtube.com/watch?v=_a4OSbPSUEE) by [@andrewdelprete](https://github.com/andrewdelprete) **- Youtube** `[02:00]`
- [RiotJS - Observables - Part #6](https://www.youtube.com/watch?v=CHBQtqNtEhM) by [@andrewdelprete](https://github.com/andrewdelprete) **- Youtube** `[05:09]`
- [RiotJS - Routing - Part #7](https://www.youtube.com/watch?v=1Q9Nad1Mu6A) by [@andrewdelprete](https://github.com/andrewdelprete) **- Youtube** `[05:36]`

## license

MIT: https://en.wikipedia.org/wiki/MIT_License
