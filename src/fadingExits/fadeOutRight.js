/*! Animate.js | The MIT License (MIT) | Copyright (c) 2017 GibboK */
; (function (animate) {
    'use strict';
    animate.fadeOutRight = function (selector, options) {
        var keyframeset = [
            {
                opacity: 1,
                transform: 'none',
                offset: 0
            },
            {
                opacity: 0,
                transform: 'translate3d(100%, 0, 0)',
                offset: 1
            }
        ];
        return animate._animate(selector, keyframeset, options);
    }
})(window.animate = window.animate || {});
