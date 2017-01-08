/*! Animate.js | The MIT License (MIT) | Copyright (c) 2017 GibboK */
; (function (animate) {
    'use strict';
    animate.hinge = function (selector, options) {
        var keyframeset = [
            {
                transform: 'none',
                transformOrigin: 'top left',
                animationTimingFunction: 'ease-in-out',
                opacity: 1,
                offset: 0
            },
            {
                transform: 'rotate3d(0, 0, 1, 80deg)',
                transformOrigin: 'top left',
                animationTimingFunction: 'ease-in-out',
                offset: 0.2
            },
            {
                transform: 'rotate3d(0, 0, 1, 60deg)',
                transformOrigin: 'top left',
                animationTimingFunction: 'ease-in-out',
                opacity: 1,
                offset: 0.4
            },
            {
                transform: 'rotate3d(0, 0, 1, 80deg)',
                transformOrigin: 'top left',
                animationTimingFunction: 'ease-in-out',
                offset: 0.6
            },
            {
                transform: 'rotate3d(0, 0, 1, 60deg)',
                transformOrigin: 'top left',
                animationTimingFunction: 'ease-in-out',
                opacity: 1,
                offset: 0.8
            },
            {
                transform: 'translate3d(0, 700px, 0)',
                transformOrigin: 'top left',
                opacity: 0,
                offset: 1
            }
        ];
        return animate._animate(selector, keyframeset, options);
    }
})(window.animate = window.animate || {});
