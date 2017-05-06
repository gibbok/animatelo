/*! Animatelo | The MIT License (MIT) | Copyright (c) 2017 GibboK */
; (function (animatelo) {
    'use strict';
    animatelo.lightSpeedIn = function (selector, options) {
        var keyframeset = [
            {
                "transform": "translate3d(100%, 0, 0) skewX(-30deg)",
                "opacity": "0",
                "offset": "0",
                "easing": "ease-out"
            },
            {
                "transform": "skewX(20deg)",
                "opacity": "1",
                "offset": "0.6",
                "easing": "ease-out"
            },
            {
                "transform": "skewX(-5deg)",
                "opacity": "1",
                "offset": "0.8",
                "easing": "ease-out"
            },
            {
                "transform": "none",
                "opacity": "1",
                "offset": "1",
                "easing": "ease-out"
            }
        ];
        return animatelo._animate(selector, keyframeset, options);
    }
})(window.animatelo = window.animatelo || {});
