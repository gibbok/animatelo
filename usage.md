# Dependencies
To use Animatelo in your project, simply add two JavaScript files from CDN into your document's `<head>`.

```html
<head>
<!-- Include the polyfill -->
<script src="//cdn.rawgit.com/web-animations/web-animations-js/2.2.2/web-animations.min.js"></script>

<!-- Include Animatelo -->
<script src="//cdn.rawgit.com/gibbok/animatelo/1.0.2/dist/animatelo.min.js"></script>
</head>
```

# Installation via Bower of npm
To install via Bower, simply do the following:

```bash
$ bower install animatelo --save
```
or you can install via npm:

```bash
$ npm install animatelo --save
```

and add a reference of your local `animatelo.min.js` file into your document's `<head>`.

# Supported animations
Animatelo supports the following animations:

* `bounce`
* `flash`
* `pulse`
* `rubberBand`
* `shake`
* `headShake`
* `swing`
* `tada`
* `wobble`
* `jello`
* `headShake`
* `bounceIn`
* `bounceInDown`
* `bounceInLeft`
* `bounceInRight`
* `bounceInUp`
* `bounceOut`
* `bounceOutDown`
* `bounceOutLeft`
* `bounceOutRight`
* `bounceOutUp`
* `fadeIn`
* `fadeInDown`
* `fadeInDownBig`
* `fadeInLeft`
* `fadeInLeftBig`
* `fadeInRight`
* `fadeInRightBig`
* `fadeInUp`
* `fadeInUpBig`
* `fadeOut`
* `fadeOutDown`
* `fadeOutDownBig`
* `fadeOutLeft`
* `fadeOutLeftBig`
* `fadeOutRight`
* `fadeOutRightBig`
* `fadeOutUp`
* `fadeOutUpBig`
* `flipInX`
* `flipInY`
* `flipOutX`
* `flipOutY`
* `lightSpeedIn`
* `lightSpeedOut`
* `rotateIn`
* `rotateInDownLeft`
* `rotateInDownRight`
* `rotateInUpLeft`
* `rotateInUpRight`
* `rotateOut`
* `rotateOutDownLeft`
* `rotateOutDownRight`
* `rotateOutUpLeft`
* `rotateOutUpRight`
* `hinge`
* `rollIn`
* `rollOut`
* `zoomIn`
* `zoomInDown`
* `zoomInLeft`
* `zoomInRight`
* `jackInTheBox`

# The API

Animatelo has a straightforward API, simply call:

 `window.animatelo.animation(selector, options);`

# Usage
Animatelo supports any valid CSS Selectors or one or more DOM nodes, so an animation can be applied to one element or simultaneously to different elements.

[Try live example](//codepen.io/gibbok/pen/pRJXQq)
```js
window.animatelo.flip('#hello');
```
[Try live example](//codepen.io/gibbok/pen/ggaYgV)
```js
window.animatelo.flash('p > span');
```
[Try live example](//codepen.io/gibbok/pen/ZLQKvL)
```js
var dom = document.getElementById('svg');
window.animatelo.rollIn(dom);
```


# Options
It is possible to override the default behaviour for an animation, passing an Object containing one or more timing properties: 

`id` *Optional*

A property unique to animate(): a DOMString with which to reference the animation.

`delay` *Optional*

The number of milliseconds to delay the start of the animation. Defaults to 0.

`direction` *Optional*

Whether the animation runs forwards (normal), backwards (reverse), switches direction after each iteration (alternate), or runs backwards and switches direction after each iteration (alternate-reverse). Defaults to "normal".

`duration` *Optional*

The number of milliseconds each iteration of the animation takes to complete. Defaults to 1000. keep in mind that your animation will not run if this value is 0.

`fill` *Optional*

Dictates whether the animation's effects should be reflected by the element(s) prior to playing ("backwards"), retained after the animation has completed playing ("forwards"), or both. Defaults to "both".

`iterations` *Optional*
The number of times the animation should repeat. Defaults to 1, and can also take a value of Infinity to make it repeat for as long as the element exists.


[Try live example](//codepen.io/gibbok/pen/vgNBpw)
```js
var options = {
  duration: 1500,
  delay: 1000,
  iterations: Infinity,
  direction: 'alternate',
  fill: 'both',
  id: 'myAnimation'
};
window.animatelo.zoomIn('#headline', options);
```

# Players
Animatelo returns an Array of Animation Objects, each one represents a single animation player and provides playback controls and a timeline for an animation node or source.

[See the W3C specification for more details.](//w3c.github.io/web-animations/#the-animation-interface)

```js
var players = window.animatelo.wobble('#headline');
players[0].onfinish = (function() {
  console.log('Animation has ended and playState value is: ' + players[0].playState);
});
```
[Try live example](//codepen.io/gibbok/pen/jybNRL)


```js
var anim1 = window.animatelo.shake('#headline1', {
  delay: 500,
  duration: 1500
})[0];
anim1.onfinish = function() {
  var anim2 = window.animatelo.wobble('#headline2', {
    duration: 1500
  })[0];
};
```
[Try live example](//codepen.io/gibbok/pen/ZLQBZJ/)

# Extensibility
Animatelo can be easily extended to support other animations using plugins.
A plugin is a single JavaScript file which follows the [Namespacing Patterns](//addyosmani.com/resources/essentialjsdesignpatterns/book/#detailnamespacing) conventions, and should be added into your project document's `<head>` after `animatelo.min.js` file.

Use the following boilerplate for your plugin:

```js
/*
 Namespacing Patterns with Immediately-invoked Function Expressions.
 This plugin creates a very simple fade-in  with a rotation effect animating
 opacity and transform properties of a DOM element.
*/
; (function(animatelo) {
    'use strict';
    // add your plugin name 
    animatelo.myAmazingPlugin = function(selector, options) {
        // add css properties to be animated
        var keyframeset = [
            {
                opacity: 0,
                transform: 'rotate(-45deg)',
                offset: 0   // keyframe 0%
            }, {
                opacity: 1,
                transform: 'rotate(0deg) scale(1.5)',
                offset: 1   // keyframe 100%
            }
        ];
        return animatelo._animate(selector, keyframeset, options);
    }
})(window.animatelo = window.animatelo || {});
```
and simply call it from your application code, for example:

```js
// animate using your plugin!
window.animatelo.myAmazingPlugin('#svg', {
  duration: 2000
});
```
[Try live example](//codepen.io/gibbok/pen/LxNpjq/)

# Tools
Keyframes-tool is a NodeJs command line tool which convert CSS Animations to a keyframes object suitable for Web Animations API.
Objects returned from Keyframes-tool can be easily added to your Animatelo plugins facilitating moving animations from stylesheets to JavaScript.

Visit [Keyframes-tool](//github.com/gibbok/keyframes-tool) project.
