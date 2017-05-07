/*! Animatelo | The MIT License (MIT) | Copyright (c) 2017 GibboK */
; (function (animatelo) {
    'use strict';
    animatelo.bounceOutRight = function (selector, options) {
        var keyframeset = [
            {
                "opacity": "1",
                "transform": "none",
                "offset": "0",
                "easing": "ease"
            },
            {
                "opacity": "1",
                "transform": "translate3d(-20px, 0, 0)",
                "offset": "0.2",
                "easing": "ease"
            },
            {
                "opacity": "0",
                "transform": "translate3d(2000px, 0, 0)",
                "offset": "1",
                "easing": "ease"
            }
        ];
        return animatelo._animate(selector, keyframeset, options);
    }
})(window.animatelo = window.animatelo || {});
