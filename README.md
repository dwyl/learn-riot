# learn riot.js

> "Riot is an incredibly fast, powerful yet tiny client side (MV*)
library for building large scale web applications."

[![Build Status](https://travis-ci.org/dwyl/learn-riot.svg)](https://travis-ci.org/dwyl/learn-riot)

# *Sadly* We Can't *Use* Riot ... See: [#8](https://github.com/dwyl/learn-riot/issues/8)

## Why?

We need a way of organising the pieces of our web applications
into discrete *components* that can be developed/tested independently
and composed into a fast UI.

## What?

### Can We Use *Native Web Components* ?

Web Components are *going* to revolutionize the web. *Eventually*.  
The current *status* is "*working draft*" see: http://www.w3.org/standards/techs/components#w3c_all  
which means the *finer details* are *still being debated* by the W3C.

This means that *sadly*, there is not yet widespread adoption for them *specifically* lacking support in Internet Explorer or Safari: http://caniuse.com/#search=components

But since Google Chrome now has over [***50% Market Share**](http://www.sitepoint.com/browser-trends-august-2015-chrome-exceeds-50)

So, while we [*wait*](http://www.2ality.com/2015/08/web-component-status.html)
for Internet Explorer to catch up, we are using [**Riot**](http://riotjs.com) because its *much* smaller and
thus *faster-to-learn* than *everything* else out there...

![riot header](https://cloud.githubusercontent.com/assets/194400/10937086/7c62bab4-82e8-11e5-89e8-5e41f7864734.png)

A quick introduction to the [Riot.js](https://muut.com/riotjs) client side MVP library for people who want to build minimalist apps.


## *How*?

We have included a couple of *working* examples in the /**examples**
directory of this repo in case others decide to adopt Riot.
We are going in search of something that will pass W3C Validator ...

> If you know/discover a way of building full-stack apps that
validates in both [W3C](https://validator.w3.org/) ***and*** [WCAG](https://en.wikipedia.org/wiki/Web_Content_Accessibility_Guidelines) ***please*** let us know!!

### *FAQ*?

If you are *wondering* ***how*** you can `require()` a `.tag` file
( *that is not `.js` or `.json` -
  the standard files you require in node.js* )
The answer is *simple*: when you `require('riot')`
the `riot` *module* ***extends*** node's native `require` method
(*this is* ***JavaScirpt*** *after all, everything is accessible/mutable*)
which means that `require()` *understands* how to load a `.tag` file.

> More FAQ: http://riotjs.com/faq/

### Introductory Tutorial

http://riotjs.com/guide/

## Links

- Site: http://riotjs.com/
- GitHub repo: https://github.com/riot/riot
- Muut Manifesto (the makers of riot.js): https://muut.com/manifesto
- Riot ToDoMVC: https://github.com/3den/riotjs-todomvc
