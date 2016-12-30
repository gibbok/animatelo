/*! Animate.js | The MIT License (MIT) | Copyright (c) 2017 GibboK */
; (function (animate) {
    'use strict';
    animate.bounce = function (selector, options) {
        var keyframeset = [
            {
                animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
                transform: 'translate3d(0,0,0)',
                offset: 0
            },
            {
                animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
                transform: 'translate3d(0,0,0)',
                offset: 0.2
            },
            {
                animationTimingFunction: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)',
                transform: 'translate3d(0, -30px, 0)',
                offset: 0.4
            },
            {
                animationTimingFunction: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)',
                transform: 'translate3d(0, -30px, 0)',
                offset: 0.43
            },
            {
                animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
                transform: 'translate3d(0,0,0)',
                offset: 0.53
            },
            {
                animationTimingFunction: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)',
                transform: 'translate3d(0, -15px, 0)',
                offset: 0.7
            },
            {
                animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
                transform: 'translate3d(0,0,0)',
                offset: 0.8
            },
            {
                transform: 'translate3d(0,-4px,0)',
                offset: 0.9
            },
            {
                animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
                transform: 'translate3d(0,0,0)',
                offset: 1
            }
        ];
        return animate._animate(selector, keyframeset, options);
    }
})(window.animate = window.animate || {});
