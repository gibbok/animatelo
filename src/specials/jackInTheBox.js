/*! Animatelo | The MIT License (MIT) | Copyright (c) 2017 GibboK */
; (function (animatelo) {
    'use strict';
    animatelo.jackInTheBox = function (selector, options) {
        var keyframeset = [
            {
                "opacity": "0",
                "transform": "scale(0.1) rotate(30deg)",
                "transformOrigin": "center bottom",
                "offset": "0",
                "easing": "ease"
            },
            {
                "transform": "rotate(-10deg)",
                "offset": "0.5",
                "easing": "ease"
            },
            {
                "transform": "rotate(3deg)",
                "offset": "0.7",
                "easing": "ease"
            },
            {
                "opacity": "1",
                "transform": "scale(1)",
                "transformOrigin": "center center",
                "offset": "1",
                "easing": "ease"
            }
        ];
        return animatelo._animate(selector, keyframeset, options);
    }
})(window.animatelo = window.animatelo || {});
