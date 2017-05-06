/*! Animatelo | The MIT License (MIT) | Copyright (c) 2017 GibboK */
; (function (animatelo) {
    'use strict';
    animatelo.flipOutX = function (selector, options) {
        var keyframeset = [
            {
                "transform": "perspective(400px)",
                "opacity": "1",
                "offset": "0",
                "easing": "ease"
            },
            {
                "transform": "perspective(400px) rotate3d(1, 0, 0, -20deg)",
                "opacity": "1",
                "offset": "0.3",
                "easing": "ease"
            },
            {
                "transform": "perspective(400px) rotate3d(1, 0, 0, 90deg)",
                "opacity": "0",
                "offset": "1",
                "easing": "ease"
            }
        ];
        return animatelo._animate(selector, keyframeset, options);
    }
})(window.animatelo = window.animatelo || {});
