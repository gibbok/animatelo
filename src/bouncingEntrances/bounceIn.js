/*! Animatelo | The MIT License (MIT) | Copyright (c) 2017 GibboK */
; (function (animatelo) {
    'use strict';
    animatelo.bounceIn = function (selector, options) {
        var keyframeset = [
            {
                "opacity": "0",
                "transform": "scale3d(.3, .3, .3)",
                "offset": "0",
                "easing": "cubic-bezier(0.215, 0.610, 0.355, 1.000)"
            },
            {
                "transform": "scale3d(1.1, 1.1, 1.1)",
                "offset": "0.2",
                "easing": "cubic-bezier(0.215, 0.610, 0.355, 1.000)"
            },
            {
                "transform": "scale3d(.9, .9, .9)",
                "offset": "0.4",
                "easing": "cubic-bezier(0.215, 0.610, 0.355, 1.000)"
            },
            {
                "opacity": "1",
                "transform": "scale3d(1.03, 1.03, 1.03)",
                "offset": "0.6",
                "easing": "cubic-bezier(0.215, 0.610, 0.355, 1.000)"
            },
            {
                "transform": "scale3d(.97, .97, .97)",
                "offset": "0.8",
                "easing": "cubic-bezier(0.215, 0.610, 0.355, 1.000)"
            },
            {
                "opacity": "1",
                "transform": "scale3d(1, 1, 1)",
                "offset": "1",
                "easing": "cubic-bezier(0.215, 0.610, 0.355, 1.000)"
            }
        ];
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