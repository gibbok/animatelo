/*! Animatelo | The MIT License (MIT) | Copyright (c) 2017 GibboK */
; (function (animatelo) {
    'use strict';
    animatelo.rollOut = function (selector, options) {
        var keyframeset = [
            {
                "opacity": "1",
                "transform": "none",
                "offset": "0",
                "easing": "ease"
            },
            {
                "opacity": "0",
                "transform": "translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)",
                "offset": "1",
                "easing": "ease"
            }
        ];
        return animatelo._animate(selector, keyframeset, options);
    }
})(window.animatelo = window.animatelo || {});
