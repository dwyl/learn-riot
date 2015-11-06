# learn riot.js

> "Riot is an incredibly fast, powerful yet tiny client side (MV*)
library for building large scale web applications."

[![Build Status](https://travis-ci.org/dwyl/learn-riot.svg)](https://travis-ci.org/dwyl/learn-riot)

## Why?

We need a way of separating the pieced of our web applications
into discrete *components* that can be developed/tested independently
and composed into a fast UI.

## What?

If you read Twitter or Medium it seems like ***ALL*** the "***Küel Kids***" are *jumping* on the ***React.js Bandwagon*** ...

![bandwagon-750x400](https://cloud.githubusercontent.com/assets/194400/10881343/ddde798a-8159-11e5-8de3-0b54ed49404d.jpg)

Mostly because Facebook are doing a *great* job of ***Marketing***  it which has made it *Fashionable* ...

![that-react-from-facebook-so-hot-right-now](https://cloud.githubusercontent.com/assets/194400/10941244/63c9153a-82bf-11e5-82e5-ad96850fc079.jpg)

![react-zoolander](https://cloud.githubusercontent.com/assets/194400/10942177/ad85f2b6-82c3-11e5-999a-3e5933f73ada.jpg)

<small>**Note**: if this *meme* makes *no sense* to you, go watch [***Zoolander***](http://www.imdb.com/title/tt0196229/) ***now***!
</small>

Using React *everywhere* is a *good plan* if your *objective* is to work for *this guy*:

![mark-zuckerberg-middle-finger](https://cloud.githubusercontent.com/assets/194400/10944876/085bf076-82d0-11e5-8d92-2c0b13dd4323.jpg)

> "*The* ***Best Minds*** *of my* ***generation*** *are thinking about how to* ***make people click on adds***, *that sucks*." ~ Jeffrey Hammerbacher ( *ex-Facebook Data Scientist* >> ***Cloudera Co-Founder*** )

React *does* have a *use case*,
but if you adopt it *blindly*
because someone told you its "***Küel***"
you run the risk of wasting time
hunting for nails to hit with your new [*hammer*](https://en.wikipedia.org/wiki/Law_of_the_instrument)
and *forgetting* to *solve the problem* ...

React was built by Jordan Walke for Facebook's Ad
Platform Management team because they needed a way of
dynamically rendering ***thousands of DOM*** nodes on their
ad-configuration single-page (*desktop*) app.

Are you building a desktop app that has thousands of
nodes that need to be dynamically updated?

If you are building a ***Mobile-First*** web application that
has *thousands of DOM nodes* you are *probably over-complicating*
the UI ... Once your *React* project has been "*Web Packed*" the
resulting "*build*" is *huge* which makes it *slow* on mobile devices

If you prefer ***not*** to ***think for yourself*** or on behalf of
the people *using* the app you are building, *close this page*!


> ***take*** *a* ***moment*** *to* ***think*** *about* ***exactly*** *what* ***problem*** *you are* ***trying*** *to* ***solve*** ...

*If like us, you prefer* ***not*** *to get*
 ***sucked*** *into blindly following* ***fashion***,
*take step back and*
***objectively consider*** *your options*.

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



### *FAQ*?

If you are *wondering* ***how*** you can `require()` a `.tag` file
( *that is not `.js` or `.json` -
  the standard files you require in node.js* )
The answer is *simple*: when you `require('riot')`
the `riot` *module* ***extends*** node's native `require` method
(*this is* ***JavaScirpt*** *after all, everything is accessible/mutable*)
which means that `require()` *understands* how to load a `.tag` file.


### Introductory Tutorial

https://muut.com/riotjs/docs/

## Links

- Site: https://muut.com/riotjs/
- GitHub repo: https://github.com/muut/riotjs
- Muut Manifesto (the makers of riot.js): https://muut.com/manifesto
- Riot ToDoMVC: https://github.com/3den/riotjs-todomvc


## Background

We have built ("single page") apps using Angular.js, Backbone.js, Ember.js, Meteor *and* React.js
All of them are *good* frameworks/libraries; each have pros & cons.

The biggest con of all *other* framweorks/libraries is their size.

Angular.js is having to put ng-etc in the html.
Ember.js is *massive*, we used it @GRPN because it was considered the "best" option back then.
Backbone has excessive boilerplate but comparatively lightweight.
{{ insert  comparison of frameworks ? }}
