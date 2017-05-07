/*! Animatelo | The MIT License (MIT) | Copyright (c) 2017 GibboK */
; (function (animatelo) {
    'use strict';
    animatelo.flash = function (selector, options) {
        var keyframeset = [
            {
                "opacity": "1",
                "offset": "0",
                "easing": "ease"
            },
            {
                "opacity": "0",
                "offset": "0.25",
                "easing": "ease"
            },
            {
                "opacity": "1",
                "offset": "0.5",
                "easing": "ease"
            },
            {
                "opacity": "0",
                "offset": "0.75",
                "easing": "ease"
            },
            {
                "opacity": "1",
                "offset": "1",
                "easing": "ease"
            }
        ];
        return animatelo._animate(selector, keyframeset, options);
    }
})(window.animatelo = window.animatelo || {});
