/*! Animate.js | The MIT License (MIT) | Copyright (c) 2017 GibboK */
; (function (animate) {
    'use strict';
    animate.lightSpeedOut = function (selector, options) {
        var keyframeset = [
            {
                transform: 'none',
                opacity: 1,
                offset: 0
            },
            {
                transform: 'translate3d(100%, 0, 0) skewX(30deg)',
                opacity: 0,
                offset: 1
            }
        ];
        return animate._animate(selector, keyframeset, options);
    }
})(window.animate = window.animate || {});
