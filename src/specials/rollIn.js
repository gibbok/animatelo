/*! Animate.js | The MIT License (MIT) | Copyright (c) 2017 GibboK */
; (function (animate) {
    'use strict';
    animate.rollIn = function (selector, options) {
        var keyframeset = [
            {
                opacity: 0,
                transform: 'translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)',
                offset: 0
            },
            {
                opacity: 1,
                transform: 'none',
                offset: 1
            }
        ];
        return animate._animate(selector, keyframeset, options);
    }
})(window.animate = window.animate || {});
