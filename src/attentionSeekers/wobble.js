/*! Animatelo | The MIT License (MIT) | Copyright (c) 2017 GibboK */
; (function (animatelo) {
    'use strict';
    animatelo.wobble = function (selector, options) {
        var keyframeset = [
            {
                "transform": "none",
                "offset": "0",
                "easing": "ease"
            },
            {
                "transform": "translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)",
                "offset": "0.15",
                "easing": "ease"
            },
            {
                "transform": "translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)",
                "offset": "0.3",
                "easing": "ease"
            },
            {
                "transform": "translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)",
                "offset": "0.45",
                "easing": "ease"
            },
            {
                "transform": "translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)",
                "offset": "0.6",
                "easing": "ease"
            },
            {
                "transform": "translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)",
                "offset": "0.75",
                "easing": "ease"
            },
            {
                "transform": "none",
                "offset": "1",
                "easing": "ease"
            }
        ];
        return animatelo._animate(selector, keyframeset, options);
    }
})(window.animatelo = window.animatelo || {});
