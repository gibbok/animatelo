/*! Animatelo | The MIT License (MIT) | Copyright (c) 2017 GibboK */
; (function (animatelo) {
    'use strict';
    animatelo.bounceInDown = function (selector, options) {
        var keyframeset = [
            {
                "opacity": "0",
                "transform": "translate3d(0, -3000px, 0)",
                "offset": "0",
                "easing": "cubic-bezier(0.215, 0.610, 0.355, 1.000)"
            },
            {
                "opacity": "1",
                "transform": "translate3d(0, 25px, 0)",
                "offset": "0.6",
                "easing": "cubic-bezier(0.215, 0.610, 0.355, 1.000)"
            },
            {
                "transform": "translate3d(0, -10px, 0)",
                "offset": "0.75",
                "easing": "cubic-bezier(0.215, 0.610, 0.355, 1.000)"
            },
            {
                "transform": "translate3d(0, 5px, 0)",
                "offset": "0.9",
                "easing": "cubic-bezier(0.215, 0.610, 0.355, 1.000)"
            },
            {
                "opacity": "1",
                "transform": "none",
                "offset": "1",
                "easing": "cubic-bezier(0.215, 0.610, 0.355, 1.000)"
            }
        ];
        return animatelo._animate(selector, keyframeset, options);
    }
})(window.animatelo = window.animatelo || {});
