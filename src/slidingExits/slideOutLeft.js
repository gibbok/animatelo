/*! Animatelo | The MIT License (MIT) | Copyright (c) 2017 GibboK */
; (function (animatelo) {
    'use strict';
    animatelo.slideOutLeft = function (selector, options) {
        var keyframeset = [
            {
                "visibility": "visible",
                "transform": "translate3d(0, 0, 0)",
                "offset": "0",
                "easing": "ease"
            },
            {
                "visibility": "hidden",
                "transform": "translate3d(-100%, 0, 0)",
                "offset": "1",
                "easing": "ease"
            }
        ];
        return animatelo._animate(selector, keyframeset, options);
    }
})(window.animatelo = window.animatelo || {});
