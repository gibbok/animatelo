/*! Animatelo | The MIT License (MIT) | Copyright (c) 2017 GibboK */
; (function (animatelo) {
    'use strict';
    animatelo.bounceInUp = function (selector, options) {
        var keyframeset = [
            {
                opacity: 0,
                transform: 'translate3d(0, 2000px, 0)',
                animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
                offset: 0
            },
            {
                opacity: 1,
                transform: 'translate3d(0, -20px, 0)',
                animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
                offset: 0.6
            },
            {
                transform: 'translate3d(0, 10px, 0)',
                animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
                offset: 0.75
            },
            {
                transform: 'translate3d(0, -5px, 0)',
                animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
                offset: 0.9
            },
            {
                opacity: 1,
                transform: 'translate3d(0, 0, 0)',
                animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
                offset: 1
            }
        ];
        return animatelo._animate(selector, keyframeset, options);
    }
})(window.animatelo = window.animatelo || {});
