; (function (animatejs) {
    'use strict';
    animatejs.rotateInUpRight = function (selector, options) {
        var keyframeset = [
            {
                transformOrigin: 'right bottom',
                transform: 'rotate3d(0, 0, 1, -90deg)',
                opacity: 0,
                offset: 0
            },
            {
                transformOrigin: 'right bottom',
                transform: 'none',
                opacity: 1,
                offset: 1
            }
        ];
        return animatejs._animate(selector, keyframeset, options);
    }
})(window.animatejs = window.animatejs || {});
