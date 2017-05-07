/*! Animatelo | The MIT License (MIT) | Copyright (c) 2017 GibboK */
; (function (animatelo) {
    'use strict';
    animatelo.slideInUp = function (selector, options) {
        var keyframeset = [
            {
                "transform": "translate3d(0, 100%, 0)",
                "visibility": "visible",
                "offset": "0",
                "easing": "ease"
            },
            {
                "transform": "translate3d(0, 0, 0)",
                "visibility": "visible",
                "offset": "1",
                "easing": "ease"
            }
        ];
        return animatelo._animate(selector, keyframeset, options);
    }
})(window.animatelo = window.animatelo || {});
