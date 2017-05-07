/*! Animatelo | The MIT License (MIT) | Copyright (c) 2017 GibboK */
; (function (animatelo) {
    'use strict';
    animatelo.lightSpeedOut = function (selector, options) {
        var keyframeset = [
            {
                "transform": "none",
                "opacity": "1",
                "offset": "0",
                "easing": "ease-in"
            },
            {
                "transform": "translate3d(100%, 0, 0) skewX(30deg)",
                "opacity": "0",
                "offset": "1",
                "easing": "ease-in"
            }
        ];
        return animatelo._animate(selector, keyframeset, options);
    }
})(window.animatelo = window.animatelo || {});
