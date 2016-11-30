# Notes

## Animation control

- duration: 3s;
- delay: 2s;
- iteration-count: infinite;

## Easy to use API

Example:

```javascript
var player = animate('#text').flash({
        duration: 3000,
        delay: 2000,
        iteratioCount: 2
    });
```

As selector it support `Document.querySelector()`.


## Support old browser

Using a polify.

## Interesting

https://www.npmjs.com/package/css-tree

https://en.wikipedia.org/wiki/Abstract_syntax_tree

http://iamdustan.com/reworkcss_ast_explorer/

https://astexplorer.net/

https://github.com/reworkcss/css

## Specs

https://w3c.github.io/web-animations/#dom-animatable-animate
https://w3c.github.io/web-animations/#dom-keyframeeffect-keyframeeffect-target-keyframes-options-keyframes
https://w3c.github.io/web-animations/#processing-a-keyframes-argument

https://developer.mozilla.org/en-US/docs/Web/API/Element/animate#Parameters

https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats

CSS keyframes to Objects keyframes
CSS keyframes parser

@keyframes rule to Object

keyframesParser