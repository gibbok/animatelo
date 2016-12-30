/*! Animate.js | The MIT License (MIT) | Copyright (c) 2017 GibboK */
; (function (animate) {
    'use strict';
    animate.zoomOutLeft = function (selector, options) {
        var keyframeset = [
            {
                opacity: 1,
                transform: 'none',
                transformOrigin: 'left center',
                offset: 0
            },
            {

                opacity: 1,
                transform: 'scale3d(.475, .475, .475) translate3d(42px, 0, 0)',
                offset: 0.4
            },
            {
                opacity: 0,
                transform: 'scale(.1) translate3d(-2000px, 0, 0)',
                transformOrigin: 'left center',
                offset: 1
            }
        ];
        return animate._animate(selector, keyframeset, options);
    }
})(window.animate = window.animate || {});
