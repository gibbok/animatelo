/*! Animatelo | The MIT License (MIT) | Copyright (c) 2017 GibboK */
; (function (animatelo) {
    'use strict';
    animatelo.flipInY = function (selector, options) {
        var keyframeset = [
            {
                "transform": "perspective(400px) rotate3d(0, 1, 0, 90deg)",
                "opacity": "0",
                "offset": "0",
                "easing": "ease-in"
            },
            {
                "transform": "perspective(400px) rotate3d(0, 1, 0, -20deg)",
                "offset": "0.4",
                "easing": "ease-in"
            },
            {
                "transform": "perspective(400px) rotate3d(0, 1, 0, 10deg)",
                "opacity": "1",
                "offset": "0.6",
                "easing": "ease"
            },
            {
                "transform": "perspective(400px) rotate3d(0, 1, 0, -5deg)",
                "offset": "0.8",
                "easing": "ease"
            },
            {
                "transform": "perspective(400px)",
                "opacity": "1",
                "offset": "1",
                "easing": "ease"
            }
        ];
        return animatelo._animate(selector, keyframeset, options);
    }
})(window.animatelo = window.animatelo || {});
