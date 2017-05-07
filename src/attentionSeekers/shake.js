/*! Animatelo | The MIT License (MIT) | Copyright (c) 2017 GibboK */
; (function (animatelo) {
    'use strict';
    animatelo.shake = function (selector, options) {
        var keyframeset = [
            {
                "transform": "translate3d(0, 0, 0)",
                "offset": "0",
                "easing": "ease"
            },
            {
                "transform": "translate3d(-10px, 0, 0)",
                "offset": "0.1",
                "easing": "ease"
            },
            {
                "transform": "translate3d(10px, 0, 0)",
                "offset": "0.2",
                "easing": "ease"
            },
            {
                "transform": "translate3d(-10px, 0, 0)",
                "offset": "0.3",
                "easing": "ease"
            },
            {
                "transform": "translate3d(10px, 0, 0)",
                "offset": "0.4",
                "easing": "ease"
            },
            {
                "transform": "translate3d(-10px, 0, 0)",
                "offset": "0.5",
                "easing": "ease"
            },
            {
                "transform": "translate3d(10px, 0, 0)",
                "offset": "0.6",
                "easing": "ease"
            },
            {
                "transform": "translate3d(-10px, 0, 0)",
                "offset": "0.7",
                "easing": "ease"
            },
            {
                "transform": "translate3d(10px, 0, 0)",
                "offset": "0.8",
                "easing": "ease"
            },
            {
                "transform": "translate3d(-10px, 0, 0)",
                "offset": "0.9",
                "easing": "ease"
            },
            {
                "transform": "translate3d(0, 0, 0)",
                "offset": "1",
                "easing": "ease"
            }
        ];
        return animatelo._animate(selector, keyframeset, options);
    }
})(window.animatelo = window.animatelo || {});
