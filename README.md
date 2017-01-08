# Animate.js
*Just-add-water Web Animations*

Animate.js is a bunch of cool, fun, and cross-browser animations for you to use in your projects. Great for emphasis, home pages, sliders, and general just-add-water-awesomeness.

This is a porting to Web Animation API of the fabulous [animate.css](https://github.com/daneden/animate.css).

# What is Web Animations API?

Web Animations API is a new JavaScript API for driving animated content on the web.

Web Animations unlocks features previously only usable declaratively, and exposes powerful, high-performance animation capabilities to developers.

With the Web Animations API, we can move interactive animations from stylesheets to JavaScript, separating presentation from behavior.

With the Web Animations API, we no longer need to rely on DOM-heavy techniques like writing CSS properties and scoping classes onto elements to control playback direction.

# Browser Support
Web Animations API features is available by default in Firefox 48+ and Chrome 36+.
For other browsers there’s a [handy maintained polyfill](https://github.com/web-animations/web-animations-js) that tests for feature support and adds it where necessary.

The polyfill and Animate.js are supported on modern versions of all major browsers, including:
- Chrome
- Firefox 27+
- IE10+ (including Edge)
- Safari (iOS) 7.1+
- Safari (Mac) 9+

# Quick start


Here's a simple example of an animation that flip a text in a  `<h1>`.  
[Try it as a live demo.](http://codepen.io/gibbok/pen/pRJXQq)

```html
<!-- Include the polyfill -->
<script src="https://cdn.rawgit.com/web-animations/web-animations-js/master/web-animations.min.js"></script>

<!-- Include Animate.js -->
<script src="https://rawgit.com/web-animations/web-animations-js/master/web-animations.min.js"></script>

<!-- Set up a target to animate -->
<h1 id="hello">Hello world!</h1>

<!-- Animate! -->
<script>
    window.animate.flip('#hello');
</script>
```