# Dependencies
To use Animate.js in your project, simply add two JavaScript files from CDN into your document's `<head>`.

```html
<head>
<!-- Include the polyfill -->
<script src="https://cdn.rawgit.com/web-animations/web-animations-js/master/web-animations.min.js"></script>

<!-- Include Animate.js -->
<script src="https://rawgit.com/web-animations/web-animations-js/master/web-animations.min.js"></script>
</head>
```

# Supported animations
Animation.js supports the following animations:

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

# The API

Animate.js has a straightforward API, simply call:

 `window.animate.animation(selector, options);`

# Usage
Animate.js supports any valid CSS Selectors or one or more DOM nodes, so an animation can be applied to one element or simultaneously to different elements.

[Try live example](http://codepen.io/gibbok/pen/pRJXQq)
```js
window.animate.flip('#hello');
```
[Try live example](http://codepen.io/gibbok/pen/ggaYgV)
```js
window.animate.flash('p > span');
```
[Try live example](http://codepen.io/gibbok/pen/ZLQKvL)
```js
var dom = document.getElementById('svg');
window.animate.rollIn(dom);
```


# Options
It is possible to override the default behaviour for an animation, passing an Object containing one or more timing properties: 

`id` *Optional*`

A property unique to animate(): a DOMString with which to reference the animation.

`delay` *Optional*`

The number of milliseconds to delay the start of the animation. Defaults to 0.

`direction` *Optional*`

Whether the animation runs forwards (normal), backwards (reverse), switches direction after each iteration (alternate), or runs backwards and switches direction after each iteration (alternate-reverse). Defaults to "normal".

`duration` *Optional*`

The number of milliseconds each iteration of the animation takes to complete. Defaults to 1000. keep in mind that your animation will not run if this value is 0.

`fill` *Optional*`

Dictates whether the animation's effects should be reflected by the element(s) prior to playing ("backwards"), retained after the animation has completed playing ("forwards"), or both. Defaults to "both".

`iterations` *Optional*`
The number of times the animation should repeat. Defaults to 1, and can also take a value of Infinity to make it repeat for as long as the element exists.


[Try live example](http://codepen.io/gibbok/pen/vgNBpw)
```js
var options = {
  duration: 1500,
  delay: 1000,
  iterations: Infinity,
  direction: 'alternate',
  fill: 'both',
  id: 'myAnimation'
};
window.animate.zoomIn('#headline', options);
```

# Players
Animate.js returns an Array of Animation Objects, each one represents a single animation player and provides playback controls and a timeline for an animation node or source.

[See the W3C specification for more details.](http://w3c.github.io/web-animations/#the-animation-interface)

```js
var players = window.animate.wobble('#headline');
players[0].onfinish = (function() {
  console.log('Animation has ended and playState value is: ' + players[0].playState);
});
```
[Try live example](http://codepen.io/gibbok/pen/jybNRL)


```js
var anim1 = window.animate.shake('#headline1', {
  delay: 500,
  duration: 1500
})[0];
anim1.onfinish = function() {
  var anim2 = window.animate.wobble('#headline2', {
    duration: 1500
  })[0];
};
```
[Try live example](http://codepen.io/gibbok/pen/ZLQBZJ/)

# Extensibility
Animate.js can be easily extended to support other animations using plugins.
A plugin is a single JavaScript file which follows the [Namespacing Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#detailnamespacing) conventions, and should be added into your project document's `<head>` after `animate.min.js` file.

Use the following boilerplate:

```js
/*
 Namespacing Patterns with Immediately-invoked Function Expressions
 This plugin creates a very simple fade-in effect animating the opacity of an element.
*/
; (function(animate) {
    'use strict';
    // add your plugin name 
    animate.pluginName = function(selector, options) {
        // add css properties to be animated
        var keyframeset = [
            {
                opacity: 0,
                offset: 0   // keyframe 0%
            }, {
                opacity: 1,
                offset: 1   // keyframe 100%
            }
        ];
        return animate._animate(selector, keyframeset, options);
    }
})(window.animate = window.animate || {});
```

# Tools
Keyframes-tool is a NodeJs command line tool which convert CSS Animations to a keyframes object suitable for Web Animations API.
Objects returned from Keyframes-tool can be easily added to your Animate.js plugins facilitating moving animations from stylesheets to JavaScript.

Visit [Keyframes-tool](https://github.com/gibbok/keyframes-tool) project.
