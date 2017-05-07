/*! Animatelo | The MIT License (MIT) | Copyright (c) 2017 GibboK */
; (function (animatelo) {
    'use strict';
    animatelo.flipOutX = function (selector, options) {
        var keyframeset = [
            {
                "transform": "perspective(400px)",
                "opacity": "1",
                "offset": "0",
                "easing": "ease",
                "backface-visibility": "visible"
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
                "easing": "ease",
                "backface-visibility": "visible"
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
