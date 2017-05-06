/*! Animatelo | The MIT License (MIT) | Copyright (c) 2017 GibboK */
; (function (animatelo) {
    'use strict';
    animatelo.zoomInLeft = function (selector, options) {
        var keyframeset = [
            {
                "opacity": "0",
                "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)",
                "offset": "0",
                "easing": "cubic-bezier(0.550, 0.055, 0.675, 0.190)"
            },
            {
                "opacity": "1",
                "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)",
                "offset": "0.6",
                "easing": "cubic-bezier(0.175, 0.885, 0.320, 1)"
            },
            {
                "opacity": "1",
                "transform": "none",
                "offset": "1",
                "easing": "ease"
            }
        ];
        return animatelo._animate(selector, keyframeset, options);
    }
})(window.animatelo = window.animatelo || {});
