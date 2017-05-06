/*! Animatelo | The MIT License (MIT) | Copyright (c) 2017 GibboK */
; (function (animatelo) {
    'use strict';
    animatelo.bounceOut = function (selector, options) {
        var keyframeset = [
            {
                "opacity": "1",
                "transform": "none",
                "offset": "0",
                "easing": "ease"
            },
            {
                "transform": "scale3d(.9, .9, .9)",
                "offset": "0.2",
                "easing": "ease"
            },
            {
                "opacity": "1",
                "transform": "scale3d(1.1, 1.1, 1.1)",
                "offset": "0.5",
                "easing": "ease"
            },
            {
                "opacity": "1",
                "transform": "scale3d(1.1, 1.1, 1.1)",
                "offset": "0.55",
                "easing": "ease"
            },
            {
                "opacity": "0",
                "transform": "scale3d(.3, .3, .3)",
                "offset": "1",
                "easing": "ease"
            }
        ];
        // change default animation duration
        var duration = 750;
        if (typeof options === 'object' && 'duration' in options === false) {
            options.duration = duration;
        }
        if (typeof options !== 'object') {
            var options = {
                duration: duration
            };
        }
        return animatelo._animate(selector, keyframeset, options);
    }
})(window.animatelo = window.animatelo || {});
