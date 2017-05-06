/*! Animatelo | The MIT License (MIT) | Copyright (c) 2017 GibboK */
; (function (animatelo) {
    'use strict';
    animatelo.hinge = function (selector, options) {
        var keyframeset = [
            {
                "transform": "none",
                "transformOrigin": "top left",
                "opacity": "1",
                "offset": "0",
                "easing": "ease-in-out"
            },
            {
                "transform": "rotate3d(0, 0, 1, 80deg)",
                "transformOrigin": "top left",
                "offset": "0.2",
                "easing": "ease-in-out"
            },
            {
                "transform": "rotate3d(0, 0, 1, 60deg)",
                "transformOrigin": "top left",
                "opacity": "1",
                "offset": "0.4",
                "easing": "ease-in-out"
            },
            {
                "transform": "rotate3d(0, 0, 1, 80deg)",
                "transformOrigin": "top left",
                "offset": "0.6",
                "easing": "ease-in-out"
            },
            {
                "transform": "rotate3d(0, 0, 1, 60deg)",
                "transformOrigin": "top left",
                "opacity": "1",
                "offset": "0.8",
                "easing": "ease-in-out"
            },
            {
                "transform": "translate3d(0, 700px, 0)",
                "transformOrigin": "top left",
                "opacity": "0",
                "offset": "1",
                "easing": "ease"
            }
        ];
        return animatelo._animate(selector, keyframeset, options);
    }
})(window.animatelo = window.animatelo || {});
