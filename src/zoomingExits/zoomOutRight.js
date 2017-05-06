/*! Animatelo | The MIT License (MIT) | Copyright (c) 2017 GibboK */
; (function (animatelo) {
    'use strict';
    animatelo.zoomOutRight = function (selector, options) {
        var keyframeset = [
            {
                "opacity": "1",
                "transform": "none",
                "transformOrigin": "right center",
                "offset": "0",
                "easing": "ease"
            }, ,
            {
                "opacity": "1",
                "transform": "scale3d(.475, .475, .475) translate3d(-42px, 0, 0)",
                "offset": "0.4",
                "easing": "ease"
            },
            {
                "opacity": "0",
                "transform": "scale(.1) translate3d(2000px, 0, 0)",
                "transformOrigin": "right center",
                "offset": "1",
                "easing": "ease"
            }
            // {
            //     opacity: 1,
            //     transform: 'none',
            //     transformOrigin: 'center center',
            //     offset: 0
            // },
            // {
            //     opacity: 1,
            //     transform: 'scale3d(.475, .475, .475) translate3d(-42px, 0, 0)',
            //     offset: 0.4
            // },
            // {
            //     opacity: 0,
            //     transform: 'scale(.1) translate3d(2000px, 0, 0)',
            //     transformOrigin: 'right center',
            //     offset: 1
            // }
        ];
        return animatelo._animate(selector, keyframeset, options);
    }
})(window.animatelo = window.animatelo || {});
