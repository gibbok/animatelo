/*! Animatelo | The MIT License (MIT) | Copyright (c) 2017 GibboK */
; (function (animatelo) {
    'use strict';
    animatelo.zoomIn = function (selector, options) {
        var keyframeset = [
            {
                "opacity": "0",
                "transform": "scale3d(.3, .3, .3)",
                "offset": "0",
                "easing": "ease"
            },
            {
                "opacity": "1",
                "offset": "0.5",
                "easing": "ease"
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
