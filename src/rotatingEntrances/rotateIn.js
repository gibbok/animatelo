/*! Animatelo | The MIT License (MIT) | Copyright (c) 2017 GibboK */
; (function (animatelo) {
    'use strict';
    animatelo.rotateIn = function (selector, options) {
        var keyframeset = [
            {
                transformOrigin: 'center',
                transform: 'rotate3d(0, 0, 1, -200deg)',
                opacity: 0,
                offset: 0
            },
            {
                transformOrigin: 'center',
                transform: 'none',
                opacity: 1,
                offset: 1
            }
        ];
        return animatelo._animate(selector, keyframeset, options);
    }
})(window.animatelo = window.animatelo || {});
