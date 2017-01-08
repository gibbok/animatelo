/*! Animate.js | The MIT License (MIT) | Copyright (c) 2017 GibboK */
; (function (animate) {
    'use strict';
    animate.lightSpeedIn = function (selector, options) {
        var keyframeset = [
            {
                transform: 'translate3d(100%, 0, 0) skewX(-30deg)',
                opacity: 0,
                offset: 0
            },
            {
                transform: 'skewX(20deg)',
                opacity: 1,
                offset: 0.6
            },
            {
                transform: 'skewX(-5deg)',
                offset: 0.8
            },
            {
                transform: 'none',
                opacity: 1,
                offset: 1
            }
        ];
        return animate._animate(selector, keyframeset, options);
    }
})(window.animate = window.animate || {});
