/*! Animatelo | The MIT License (MIT) | Copyright (c) 2017 GibboK */
; (function (animatelo) {
    'use strict';
    animatelo.bounceInUp = function (selector, options) {
        var keyframeset = [
            {
                "offset": "0",
                "easing": "cubic-bezier(0.215, 0.610, 0.355, 1.000)"
            },
            {
                "opacity": "0",
                "transform": "translate3d(0, 3000px, 0)",
                "offset": "0",
                "easing": "ease"
            },
            {
                "offset": "0.6",
                "easing": "cubic-bezier(0.215, 0.610, 0.355, 1.000)"
            },
            {
                "opacity": "1",
                "transform": "translate3d(0, -20px, 0)",
                "offset": "0.6",
                "easing": "ease"
            },
            {
                "offset": "0.75",
                "easing": "cubic-bezier(0.215, 0.610, 0.355, 1.000)"
            },
            {
                "transform": "translate3d(0, 10px, 0)",
                "offset": "0.75",
                "easing": "ease"
            },
            {
                "offset": "0.9",
                "easing": "cubic-bezier(0.215, 0.610, 0.355, 1.000)"
            },
            {
                "transform": "translate3d(0, -5px, 0)",
                "offset": "0.9",
                "easing": "ease"
            },
            {
                "offset": "1",
                "easing": "cubic-bezier(0.215, 0.610, 0.355, 1.000)"
            },
            {
                "opacity": "1",
                "transform": "translate3d(0, 0, 0)",
                "offset": "1",
                "easing": "ease"
            }
        ];
        return animatelo._animate(selector, keyframeset, options);
    }
})(window.animatelo = window.animatelo || {});
