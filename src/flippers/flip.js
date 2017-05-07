/*! Animatelo | The MIT License (MIT) | Copyright (c) 2017 GibboK */
; (function (animatelo) {
    'use strict';
    animatelo.flip = function (selector, options) {
        var keyframeset = [
            {
                "transform": "perspective(400px) rotate3d(0, 1, 0, -360deg)",
                "offset": "0",
                "easing": "ease-out"
            },
            {
                "transform": "perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)",
                "offset": "0.4",
                "easing": "ease-out"
            },
            {
                "transform": "perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)",
                "offset": "0.5",
                "easing": "ease-in"
            },
            {
                "transform": "perspective(400px) scale3d(.95, .95, .95)",
                "offset": "0.8",
                "easing": "ease-in"
            },
            {
                "transform": "perspective(400px)",
                "offset": "1",
                "easing": "ease-in"
            }
        ];
        return animatelo._animate(selector, keyframeset, options);
    }
})(window.animatelo = window.animatelo || {});
