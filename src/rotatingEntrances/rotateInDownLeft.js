; (function (animatejs) {
    'use strict';
    animatejs.rotateInDownLeft = function (selector, options) {
        var keyframeset = [
            {
                transformOrigin: 'left bottom',
                transform: 'rotate3d(0, 0, 1, -45deg)',
                opacity: 0,
                offset: 0
            },
            {
                transformOrigin: 'left bottom',
                transform: 'none',
                opacity: 1,
                offset: 1
            }
        ];
        return animatejs._animate(selector, keyframeset, options);
    }
})(window.animatejs = window.animatejs || {});
