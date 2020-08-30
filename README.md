# Animatelo
[![CDNJS version](https://img.shields.io/cdnjs/v/animatelo.svg)](https://cdnjs.com/libraries/animatelo)

*Just-add-water Web Animations*

Animatelo is a bunch of cool, fun, and cross-browser animations for you to use in your projects. Great for emphasis, home pages, sliders, and general just-add-water-awesomeness.

This is a porting to Web Animation API of the fabulous [animate.css](//github.com/daneden/animate.css) project.

[Check out all the animations here!](//gibbok.github.io/animatelo)

# What is Web Animations API?
Web Animations API is a new JavaScript API for driving animated content on the web.

Web Animations unlocks features previously only usable declaratively, and exposes powerful, high-performance animation capabilities to developers.

With the Web Animations API, we can move interactive animations from stylesheets to JavaScript, separating presentation from behavior.

With the Web Animations API, we no longer need to rely on DOM-heavy techniques like writing CSS properties and scoping classes onto elements to control playback direction.

# Browser Support
Web Animations API features is available by default in Firefox 48+ and Chrome 36+.
For other browsers there’s a [handy maintained polyfill](//github.com/web-animations/web-animations-js) that tests for feature support and adds it where necessary.

The polyfill and Animatelo are supported on modern versions of all major browsers, including:
- Chrome
- Firefox 27+
- IE10+ (including Edge)
- Safari (iOS) 7.1+
- Safari (Mac) 9+

# Installation

To install via Bower, simply do the following:

```bash
$ bower install animatelo --save
```
or you can install via npm:

```bash
$ npm install animatelo --save
```

# Basic Usage
Here's a simple example of an animation that flip a text in a  `<h1>`.  
[Try it as a live demo.](//codepen.io/gibbok/pen/pRJXQq)

```html
<!-- Include the polyfill -->
<script src="https://cdn.rawgit.com/web-animations/web-animations-js/2.2.2/web-animations.min.js"></script>

<!-- Include Animatelo -->
<script src="https://cdn.rawgit.com/gibbok/animatelo/1.0.3/dist/animatelo.min.js"></script>

<!-- Set up a target to animate -->
<h1 id="hello">Hello world!</h1>

<!-- Animate! -->
<script>
    window.animatelo.flip('#hello');
</script>
```

# Advanced Usage Documentation
More information and technical documentation on Animatelo can be found at [Usage](./usage.md) page.

# License
Animatelo is licensed under the [MIT license](//opensource.org/licenses/MIT).
