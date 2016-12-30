/*! Animate.js | The MIT License (MIT) | Copyright (c) 2017 GibboK */
; (function (animate) {
    'use strict';
    animate.slideOutDown = function (selector, options) {
        var keyframeset = [
            {
                visibility: 'visible',
                transform: 'translate3d(0, 0, 0)',
                offset: 0
            },
            {
                visibility: 'hidden',
                transform: 'translate3d(0, 100%, 0)',
                offset: 1
            }
        ];
        return animate._animate(selector, keyframeset, options);
    }
})(window.animate = window.animate || {});
