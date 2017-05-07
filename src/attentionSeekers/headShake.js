/*! Animatelo | The MIT License (MIT) | Copyright (c) 2017 GibboK */
; (function (animatelo) {
    'use strict';
    animatelo.headShake = function (selector, options) {
        var keyframeset = [
            {
                "transform": 'translateX(0)',
                "offset": "0",
                "easing": "ease-in-out"
            },
            {
                "transform": "translateX(-6px) rotateY(-9deg)",
                "offset": "0.065",
                "easing": "ease-in-out"
            },
            {
                "transform": "translateX(5px) rotateY(7deg)",
                "offset": "0.185",
                "easing": "ease-in-out"
            },
            {
                "transform": "translateX(-3px) rotateY(-5deg)",
                "offset": "0.315",
                "easing": "ease-in-out"
            },
            {
                "transform": "translateX(2px) rotateY(3deg)",
                "offset": "0.435",
                "easing": "ease-in-out"
            },
            {
                "transform": "translateX(0)",
                "offset": "0.5",
                "easing": "ease-in-out"
            },
            {
                "transform": 'translateX(0)',
                "offset": "1",
                "easing": "ease-in-out"
            }
        ];
        return animatelo._animate(selector, keyframeset, options);
    }
})(window.animatelo = window.animatelo || {});