/*! Animatelo | The MIT License (MIT) | Copyright (c) 2017 GibboK */
; (function (animatelo) {
    'use strict';
    animatelo.tada = function (selector, options) {
        var keyframeset = [
            {
                "transform": "scale3d(1, 1, 1)",
                "offset": "0",
                "easing": "ease"
            },
            {
                "transform": "scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg)",
                "offset": "0.1",
                "easing": "ease"
            },
            {
                "transform": "scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg)",
                "offset": "0.2",
                "easing": "ease"
            },
            {
                "transform": "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)",
                "offset": "0.3",
                "easing": "ease"
            },
            {
                "transform": "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)",
                "offset": "0.4",
                "easing": "ease"
            },
            {
                "transform": "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)",
                "offset": "0.5",
                "easing": "ease"
            },
            {
                "transform": "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)",
                "offset": "0.6",
                "easing": "ease"
            },
            {
                "transform": "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)",
                "offset": "0.7",
                "easing": "ease"
            },
            {
                "transform": "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)",
                "offset": "0.8",
                "easing": "ease"
            },
            {
                "transform": "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)",
                "offset": "0.9",
                "easing": "ease"
            },
            {
                "transform": "scale3d(1, 1, 1)",
                "offset": "1",
                "easing": "ease"
            }
        ];
        return animatelo._animate(selector, keyframeset, options);
    }
})(window.animatelo = window.animatelo || {});
