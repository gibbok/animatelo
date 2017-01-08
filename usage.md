# How to get started
## Dependencies
To use Animate.js in your project, simply add two JavaScript files from CDN into your document's <head>

```html
<head>
<!-- Include the polyfill -->
<script src="https://cdn.rawgit.com/web-animations/web-animations-js/master/web-animations.min.js"></script>

<!-- Include Animate.js -->
<script src="https://rawgit.com/web-animations/web-animations-js/master/web-animations.min.js"></script>
</head>
```

## Supported animations
Animation.js support the following animations:

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

## The API

Animate.js has a straight forward API, simply call:

 `window.animate.animation(selector, options);`

Basic usage:

[Try live example](http://codepen.io/gibbok/pen/pRJXQq)
```js
window.animate.flip('#hello');
```

Animate.js supports any valid CSS Selectors, so an animation can be applied simultaneously to different elements.

[Try live example](http://codepen.io/gibbok/pen/ggaYgV)
```js
window.animate.flash('p > span');
```

It is possible to override the default behaviour for an animation, passing an object with the following optional properties:

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






